// Injects sidebar nav + mobile header into every page.
// Call initNav() after DOMContentLoaded.

const NAV_LINKS = [
  { href: "index.html",          label: "Home",               icon: "⌂" },
  { href: "about.html",          label: "About",              icon: "◉" },
  { href: "projects.html",       label: "Projects",           icon: "◈", star: true },
  { href: "ai.html",             label: "AI & Innovation",    icon: "◆" },
  { href: "product.html",        label: "Product Thinking",   icon: "◇" },
  { href: "writing.html",        label: "Writing",            icon: "◎" },
  { href: "experience.html",     label: "Experience",         icon: "◐" },
  { href: "leadership.html",     label: "Leadership",         icon: "◑" },
  { href: "learning.html",       label: "Learning Journey",   icon: "◒" },
  { href: "skills.html",         label: "Skills",             icon: "◓" },
  { href: "certifications.html", label: "Certifications",     icon: "◔" },
  { href: "resume.html",         label: "Resume",             icon: "◕" },
  { href: "contact.html",        label: "Contact",            icon: "✉" },
];

function initNav() {
  const current = location.pathname.split("/").pop() || "index.html";

  // ── Sidebar ──────────────────────────────────────────────────
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sidebar-brand">
        <a href="index.html" class="brand-name">${PORTFOLIO.name.split(" ")[0]}<span>.</span></a>
        <p class="brand-sub">CS @ NUS</p>
      </div>
      <nav class="sidebar-nav">
        ${NAV_LINKS.map(l => `
          <a href="${l.href}" class="nav-link ${l.href === current ? "active" : ""}">
            <span class="nav-icon">${l.icon}</span>
            <span>${l.label}</span>
            ${l.star ? '<span class="nav-star">★</span>' : ""}
          </a>`).join("")}
      </nav>
      <div class="sidebar-footer">
        <a href="${PORTFOLIO.github}" target="_blank" title="GitHub">GH</a>
        <a href="${PORTFOLIO.linkedin}" target="_blank" title="LinkedIn">LI</a>
        <a href="mailto:${PORTFOLIO.email}" title="Email">@</a>
        <a href="admin.html" title="Edit content" style="margin-left:auto">✏️</a>
      </div>
    `;
  }

  // ── Mobile header ────────────────────────────────────────────
  const mh = document.getElementById("mobile-header");
  if (mh) {
    mh.innerHTML = `
      <a href="index.html" class="brand-name">${PORTFOLIO.name.split(" ")[0]}<span>.</span></a>
      <button id="menu-btn" onclick="toggleMenu()" aria-label="Menu">☰</button>
    `;
  }

  // ── Mobile drawer ────────────────────────────────────────────
  const drawer = document.getElementById("mobile-drawer");
  if (drawer) {
    drawer.innerHTML = `
      <div class="drawer-inner">
        <button class="drawer-close" onclick="toggleMenu()">✕</button>
        ${NAV_LINKS.map(l => `
          <a href="${l.href}" class="nav-link ${l.href === current ? "active" : ""}" onclick="toggleMenu()">
            ${l.label}${l.star ? " ★" : ""}
          </a>`).join("")}
      </div>
    `;
  }
}

function toggleMenu() {
  document.getElementById("mobile-drawer")?.classList.toggle("open");
}

// Close drawer on outside click
document.addEventListener("click", e => {
  const drawer = document.getElementById("mobile-drawer");
  const btn = document.getElementById("menu-btn");
  if (drawer?.classList.contains("open") && !drawer.contains(e.target) && e.target !== btn) {
    drawer.classList.remove("open");
  }
});
