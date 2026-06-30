// ── DEFAULT DATA ─────────────────────────────────────────────
const DEFAULT = {
  name: "Your Name",
  tagline: "Year 1 Computer Science @ NUS",
  bio: "Welcome to my portfolio! I'm passionate about building things with code. This site showcases my projects, certifications, and skills.",
  email: "your.email@example.com",
  github: "github.com/username",
  githubUrl: "https://github.com/username",
  linkedin: "linkedin.com/in/username",
  linkedinUrl: "https://linkedin.com/in/username",
  footer: "© 2025 Your Name",
  avatar: null,
  projects: [
    {
      id: uid(), title: "Project One",
      sub: "Python · Web Scraping",
      desc: "A brief description of what this project does and what you learned from building it.",
      link: "https://github.com/username/project-one",
      linkLabel: "View on GitHub",
      tags: ["Python", "BeautifulSoup"]
    },
    {
      id: uid(), title: "Project Two",
      sub: "Java · Data Structures",
      desc: "Built a custom implementation of common data structures as part of a course assignment.",
      link: "",
      linkLabel: "",
      tags: ["Java", "Algorithms"]
    }
  ],
  certs: [
    {
      id: uid(), title: "CS50x",
      sub: "Harvard / edX · 2024",
      desc: "Introduction to Computer Science — covered C, Python, SQL, JavaScript, and web development.",
      link: "https://certificates.cs50.io/",
      linkLabel: "View Certificate",
      tags: ["C", "Python", "SQL"]
    }
  ],
  skills: ["Python", "Java", "JavaScript", "HTML/CSS", "Git", "Linux", "SQL"]
};

// ── STATE ─────────────────────────────────────────────────────
let data = loadData();
let editMode = false;
let dragSrc = null;

// ── INIT ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNav();
});

function renderAll() {
  // text fields
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.dataset.key;
    if (data[k] !== undefined) el.textContent = data[k];
  });

  // avatar
  if (data.avatar) document.getElementById('avatar').src = data.avatar;

  // links
  setLink('github');
  setLink('linkedin');

  // grids
  renderGrid('projects-grid', data.projects, 'project');
  renderGrid('certs-grid', data.certs, 'cert');
  renderSkills();
}

// ── GRID RENDERING ────────────────────────────────────────────
function renderGrid(gridId, items, type) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(makeCard(item, type, gridId)));
}

function makeCard(item, type, gridId) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = item.id;
  card.draggable = true;

  card.innerHTML = `
    <div class="card-controls">
      <button onclick="editCard('${item.id}','${type}','${gridId}')">Edit</button>
      <button class="del-btn" onclick="deleteCard('${item.id}','${type}','${gridId}')">✕</button>
    </div>
    <div class="card-sub">${esc(item.sub)}</div>
    <h3>${esc(item.title)}</h3>
    <p class="card-desc">${esc(item.desc)}</p>
    ${item.link ? `<a class="card-link" href="${esc(item.link)}" target="_blank">${esc(item.linkLabel || 'View →')}</a>` : ''}
    ${item.tags.length ? `<div class="card-tags">${item.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
  `;

  // drag events
  card.addEventListener('dragstart', e => {
    dragSrc = card;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    saveDragOrder(gridId, type);
  });
  card.addEventListener('dragover', e => {
    e.preventDefault();
    if (dragSrc && dragSrc !== card) card.classList.add('drag-over');
  });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', e => {
    e.preventDefault();
    if (dragSrc && dragSrc !== card) {
      const grid = document.getElementById(gridId);
      const kids = [...grid.children];
      const srcIdx = kids.indexOf(dragSrc);
      const tgtIdx = kids.indexOf(card);
      if (srcIdx < tgtIdx) card.after(dragSrc);
      else card.before(dragSrc);
    }
    card.classList.remove('drag-over');
  });

  return card;
}

function saveDragOrder(gridId, type) {
  const grid = document.getElementById(gridId);
  const ids = [...grid.children].map(c => c.dataset.id);
  const arr = type === 'project' ? data.projects : data.certs;
  const sorted = ids.map(id => arr.find(x => x.id === id)).filter(Boolean);
  if (type === 'project') data.projects = sorted;
  else data.certs = sorted;
  save();
}

// ── SKILLS ────────────────────────────────────────────────────
function renderSkills() {
  const wrap = document.getElementById('skills-list');
  wrap.innerHTML = '';
  data.skills.forEach((s, i) => {
    const tag = document.createElement('div');
    tag.className = 'skill-tag';
    tag.innerHTML = `${esc(s)}<button class="del-skill" title="Remove" onclick="deleteSkill(${i})">×</button>`;
    wrap.appendChild(tag);
  });
}

window.addSkill = function () {
  const name = prompt('Skill name:');
  if (!name || !name.trim()) return;
  data.skills.push(name.trim());
  save(); renderSkills();
};

window.deleteSkill = function (i) {
  data.skills.splice(i, 1);
  save(); renderSkills();
};

// ── CARD CRUD ─────────────────────────────────────────────────
window.addCard = function (gridId, type) {
  const blank = { id: uid(), title: 'New Title', sub: 'Category · Year', desc: 'Description here.', link: '', linkLabel: '', tags: [] };
  if (type === 'project') data.projects.push(blank);
  else data.certs.push(blank);
  save();
  renderGrid(gridId, type === 'project' ? data.projects : data.certs, type);
  // immediately open edit modal
  editCard(blank.id, type, gridId);
};

window.deleteCard = function (id, type, gridId) {
  if (!confirm('Delete this card?')) return;
  if (type === 'project') data.projects = data.projects.filter(x => x.id !== id);
  else data.certs = data.certs.filter(x => x.id !== id);
  save();
  renderGrid(gridId, type === 'project' ? data.projects : data.certs, type);
};

window.editCard = function (id, type, gridId) {
  const arr = type === 'project' ? data.projects : data.certs;
  const item = arr.find(x => x.id === id);
  if (!item) return;

  showModal({
    title: type === 'project' ? 'Edit Project' : 'Edit Certification',
    fields: [
      { key: 'title',     label: 'Title',            type: 'input',    value: item.title },
      { key: 'sub',       label: 'Subtitle (e.g. Python · 2024)', type: 'input', value: item.sub },
      { key: 'desc',      label: 'Description',      type: 'textarea', value: item.desc },
      { key: 'link',      label: 'Link URL',         type: 'input',    value: item.link },
      { key: 'linkLabel', label: 'Link Label',       type: 'input',    value: item.linkLabel },
      { key: 'tags',      label: 'Tags (comma-separated)', type: 'input', value: item.tags.join(', ') },
    ],
    onSave(vals) {
      item.title     = vals.title;
      item.sub       = vals.sub;
      item.desc      = vals.desc;
      item.link      = vals.link;
      item.linkLabel = vals.linkLabel;
      item.tags      = vals.tags.split(',').map(t => t.trim()).filter(Boolean);
      save();
      renderGrid(gridId, type === 'project' ? data.projects : data.certs, type);
    }
  });
};

// ── LINKS ─────────────────────────────────────────────────────
function setLink(key) {
  const el = document.getElementById(`link-${key}`);
  if (!el) return;
  el.textContent = data[key] || `${key}.com/username`;
  el.href = data[`${key}Url`] || '#';
}

window.editLink = function (key) {
  const label = prompt(`Display text for ${key}:`, data[key]);
  if (label === null) return;
  const url = prompt(`URL for ${key}:`, data[`${key}Url`]);
  if (url === null) return;
  data[key] = label;
  data[`${key}Url`] = url;
  save(); setLink(key);
};

// ── AVATAR ────────────────────────────────────────────────────
window.changeAvatar = function () {
  document.getElementById('avatar-file').click();
};

window.loadAvatar = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    data.avatar = ev.target.result;
    document.getElementById('avatar').src = data.avatar;
    save();
  };
  reader.readAsDataURL(file);
};

// ── EDIT MODE ─────────────────────────────────────────────────
window.toggleEdit = function () {
  editMode = !editMode;
  document.body.classList.toggle('edit-mode', editMode);

  const btn = document.getElementById('btn-toggle-edit');
  const lbl = document.getElementById('toolbar-title');

  if (editMode) {
    btn.textContent = 'Done Editing';
    btn.classList.add('active');
    lbl.innerHTML = '✏️ Edit Mode: <strong>ON</strong> — click any text to edit';
    // make text fields editable
    document.querySelectorAll('[data-key]').forEach(el => {
      el.contentEditable = true;
      el.addEventListener('input', onTextEdit);
      el.addEventListener('blur', onTextEdit);
    });
  } else {
    btn.textContent = 'Enable Editing';
    btn.classList.remove('active');
    lbl.innerHTML = '✏️ Edit Mode: <strong>OFF</strong>';
    document.querySelectorAll('[data-key]').forEach(el => {
      el.contentEditable = false;
      el.removeEventListener('input', onTextEdit);
      el.removeEventListener('blur', onTextEdit);
    });
  }
};

function onTextEdit(e) {
  const key = e.target.dataset.key;
  if (key) {
    data[key] = e.target.textContent.trim();
    save();
  }
}

// ── DARK MODE ─────────────────────────────────────────────────
window.toggleDark = function () {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('btn-dark');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('portfolio-dark', document.body.classList.contains('dark'));
};

// ── EXPORT / IMPORT ───────────────────────────────────────────
window.exportData = function () {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'portfolio-data.json';
  a.click();
};

window.importData = function (e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      data = JSON.parse(ev.target.result);
      localStorage.setItem('portfolio-data', JSON.stringify(data));
      renderAll();
      alert('Portfolio data imported successfully!');
    } catch {
      alert('Invalid JSON file.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
};

// ── PERSIST ───────────────────────────────────────────────────
function save() {
  localStorage.setItem('portfolio-data', JSON.stringify(data));
}

function loadData() {
  try {
    const stored = localStorage.getItem('portfolio-data');
    if (stored) return JSON.parse(stored);
  } catch {}
  return JSON.parse(JSON.stringify(DEFAULT));
}

// restore dark mode
if (localStorage.getItem('portfolio-dark') === 'true') {
  document.body.classList.add('dark');
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-dark').textContent = '☀️ Light';
  });
}

// ── NAV HIGHLIGHT ─────────────────────────────────────────────
function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#nav a');
  const offset = 120;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: `-${offset}px 0px -60% 0px` });

  sections.forEach(s => observer.observe(s));
}

// ── MODAL ─────────────────────────────────────────────────────
function showModal({ title, fields, onSave }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const formFields = fields.map(f => `
    <label>${f.label}</label>
    ${f.type === 'textarea'
      ? `<textarea name="${f.key}">${esc(f.value)}</textarea>`
      : `<input type="text" name="${f.key}" value="${esc(f.value)}" />`}
  `).join('');

  overlay.innerHTML = `
    <div class="modal">
      <h3>${title}</h3>
      <form id="modal-form">${formFields}</form>
      <div class="modal-footer">
        <button class="btn-cancel" id="modal-cancel">Cancel</button>
        <button class="btn-save" id="modal-save">Save</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#modal-cancel').onclick = () => overlay.remove();
  overlay.querySelector('#modal-save').onclick = () => {
    const form = overlay.querySelector('#modal-form');
    const vals = {};
    fields.forEach(f => {
      const el = form.querySelector(`[name="${f.key}"]`);
      vals[f.key] = el ? el.value : '';
    });
    onSave(vals);
    overlay.remove();
  };

  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  // focus first input
  setTimeout(() => overlay.querySelector('input, textarea')?.focus(), 50);
}

// ── UTILS ─────────────────────────────────────────────────────
function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
