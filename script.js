const data = window.PAVILLON_DATA;

const initials = (name) =>
  name.split(/\s+/).map(part => part[0]).join("").slice(0,2).toUpperCase();

const characterGrid = document.querySelector("#character-grid");
data.personnages.forEach(p => {
  const article = document.createElement("article");
  article.className = "character-card";
  article.innerHTML = `
    <div class="avatar" aria-hidden="true">${initials(p.nom)}</div>
    <span class="role">${p.role}</span>
    <h3>${p.nom}</h3>
    <p><strong>Joueur :</strong> ${p.joueur}</p>
    <p>${p.resume}</p>
  `;
  characterGrid.appendChild(article);
});

const loreGrid = document.querySelector("#lore-grid");
data.lore.forEach(item => {
  const article = document.createElement("article");
  article.className = "lore-card";
  article.innerHTML = `<h3>${item.titre}</h3><p>${item.texte}</p>`;
  loreGrid.appendChild(article);
});

const sessionList = document.querySelector("#session-list");
data.sessions.forEach(session => {
  const article = document.createElement("article");
  article.className = "session-entry";
  article.innerHTML = `
    <div class="session-meta">${session.numero}<br>${session.date}</div>
    <div>
      <h3>${session.titre}</h3>
      <p>${session.resume}</p>
    </div>
  `;
  sessionList.appendChild(article);
});

const latest = data.sessions[data.sessions.length - 1];
if (latest) {
  document.querySelector("#latest-session-title").textContent = `${latest.numero} — ${latest.titre}`;
  document.querySelector("#latest-session-summary").textContent = latest.resume;
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
