/* =========================================================
   YatraX — Wishlist Page
   ========================================================= */

function renderWishlist() {
    const grid = document.getElementById("wishlistGrid");
    const list = getWishlist();

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="empty-wishlist">
                <div class="empty-icon">🤍</div>
                <h2>Your wishlist is empty</h2>
                <p>Start saving your favourite destinations to plan your next trip.</p>
                <a href="index.html">Explore Destinations →</a>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map((d) => {
        const img = d.imageUrl || "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800";
        const link = d.link ? `onclick="window.location.href='${escapeHtml(d.link)}'"` : "";
        return `
            <div class="wishlist-card" ${link}>
                <button class="heart-btn active"
                        onclick="event.stopPropagation(); removeFromWishlist('${escapeHtml(d.name)}')"
                        title="Remove from wishlist">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
                <img src="${escapeHtml(img)}" alt="${escapeHtml(d.name)}"
                     onerror="this.src='https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800'">
                <div class="card-overlay"></div>
                <div class="card-content">
                    <div class="card-location">${escapeHtml(d.state || "INDIA")}</div>
                    <h3>${escapeHtml(d.name)}</h3>
                    <p>${escapeHtml(d.description || "")}</p>
                </div>
            </div>
        `;
    }).join("");
}

function removeFromWishlist(name) {
    let list = getWishlist();
    list = list.filter((d) => d.name !== name);
    saveWishlist(list);
    updateWishlistBadge();
    renderWishlist();
}

renderWishlist();