// GitHub API storage layer.
// Reads config from localStorage key 'gh-config'.
// All methods return { ok, error } or data.

class GitHubStorage {
  constructor() {
    this.reload();
  }

  reload() {
    this.cfg = JSON.parse(localStorage.getItem('gh-config') || 'null');
  }

  isConfigured() {
    return !!(this.cfg?.token && this.cfg?.owner && this.cfg?.repo && this.cfg?.branch);
  }

  get _headers() {
    return {
      'Authorization': `token ${this.cfg.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json'
    };
  }

  get _base() {
    return `https://api.github.com/repos/${this.cfg.owner}/${this.cfg.repo}/contents`;
  }

  async getFile(path) {
    const res = await fetch(`${this._base}/${path}?ref=${this.cfg.branch}`, {
      headers: this._headers
    });
    if (res.status === 404) return { ok: true, exists: false };
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    const json = await res.json();
    return {
      ok: true, exists: true,
      sha: json.sha,
      content: decodeURIComponent(escape(atob(json.content.replace(/\n/g, ''))))
    };
  }

  async putFile(path, content, message, isBinary = false) {
    const existing = await this.getFile(path);
    if (!existing.ok) return existing;

    const encoded = isBinary
      ? content  // already base64
      : btoa(unescape(encodeURIComponent(content)));

    const body = {
      message,
      content: encoded,
      branch: this.cfg.branch,
      ...(existing.exists ? { sha: existing.sha } : {})
    };

    const res = await fetch(`${this._base}/${path}`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { ok: false, error: err.message || `HTTP ${res.status}` };
    }
    const json = await res.json();
    // Return the raw URL so we can use it immediately
    const rawUrl = `https://raw.githubusercontent.com/${this.cfg.owner}/${this.cfg.repo}/${this.cfg.branch}/${path}`;
    return { ok: true, url: rawUrl, sha: json.content?.sha };
  }

  // Upload a File object (image, PDF, etc.) into assets/
  async uploadAsset(file) {
    const base64 = await fileToBase64(file);
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const path = `assets/${safeName}`;
    const result = await this.putFile(path, base64, `Upload ${safeName}`, true);
    if (result.ok) result.assetPath = path;
    return result;
  }

  // Save the whole PORTFOLIO object back to data.js
  async saveData(portfolio, message = 'Update portfolio content') {
    const content = `// ═══════════════════════════════════════════════════════════════\n//  PORTFOLIO DATA — edit this file or use the admin panel\n// ═══════════════════════════════════════════════════════════════\n\nconst PORTFOLIO = ${JSON.stringify(portfolio, null, 2)};\n`;
    return this.putFile('data.js', content, message);
  }

  // Verify token + repo access
  async testConnection() {
    const res = await fetch(
      `https://api.github.com/repos/${this.cfg.owner}/${this.cfg.repo}`,
      { headers: this._headers }
    );
    if (!res.ok) return { ok: false, error: `Cannot access repo (HTTP ${res.status}). Check owner, repo, and token.` };
    return { ok: true };
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      // strip the data:...;base64, prefix
      resolve(e.target.result.split(',')[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const gh = new GitHubStorage();
