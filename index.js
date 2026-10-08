/* =========================================================
   YatraX — Home Page Scripts (fixed heart button)
   ========================================================= */

const PAGE_MAP = { "goa": "goa.html", "kashmir": "kashmir.html" };
const DISPLAY_NAMES = { "taj mahal": "Agra" };
const IMG_OVERRIDE = {
  "taj mahal": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=85",
  "jaipur": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85",
  "ladakh": "https://www.peakadventuretour.com/assets/imgs/leh-ladakh-tourism-01.webp"
};

/* Global array — filled by loadDestinations() */
let allDestinations = [];

function pageFor(name) {
    if (!name) return null;
    return PAGE_MAP[name.toLowerCase().trim()] || null;
}

function cardHtml(d, idx) {
    const key = (d.name || "").toLowerCase().trim();
    const page = pageFor(d.name);
    const click = page
        ? `onclick="window.location.href='${page}'"`
        : d.id
            ? `onclick="window.location.href='destination.html?id=${d.id}'"`
            : "";

    const shortDesc = truncate(d.description, 110);
    const imgUrl = IMG_OVERRIDE[key] || d.imageUrl;
    const displayName = DISPLAY_NAMES[key] || d.name;
    const wishlisted = isWishlisted(displayName);

    return `
        <div class="destination-card" ${click}>
            <button class="heart-btn ${wishlisted ? "active" : ""}"
                    data-idx="${idx}"
                    onclick="event.stopPropagation(); onHeartClick(this)">
                <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
            <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(displayName)}"
                 onerror="this.src='https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800'">
            <div class="card-overlay"></div>
            <div class="card-content">
                <div class="card-location">${escapeHtml(d.state)}</div>
                <h3>${escapeHtml(displayName)}</h3>
                <p>${escapeHtml(shortDesc)}</p>
            </div>
        </div>
    `;
}

function onHeartClick(btn) {
    const idx = parseInt(btn.dataset.idx, 10);
    const d = allDestinations[idx];
    if (!d) return;

    const key = (d.name || "").toLowerCase().trim();
    const displayName = DISPLAY_NAMES[key] || d.name;
    const page = pageFor(d.name);
    const imgUrl = IMG_OVERRIDE[key] || d.imageUrl;
    const link = page ? page : d.id ? `destination.html?id=${d.id}` : "";

    const dest = {
        name: displayName,
        state: d.state || "INDIA",
        imageUrl: imgUrl,
        description: truncate(d.description, 110),
        link: link
    };

    const isNow = toggleWishlist(dest);
    btn.classList.toggle("active", isNow);
}

function loadDestinations() {
    const grid = document.getElementById("destinationGrid");
    fetch(API_BASE + "/destinations")
        .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
        .then((data) => {
            if (!data || data.length === 0) {
                grid.innerHTML = '<p class="loading-msg">No destinations yet.</p>';
                return;
            }
            allDestinations = data;
            grid.innerHTML = data.map((d, i) => cardHtml(d, i)).join("");
        })
        .catch((err) => {
            grid.innerHTML = '<p class="loading-msg" style="color:#e5b95c;">⚠️ Could not load destinations.</p>';
            console.error(err);
        });
}

loadDestinations();