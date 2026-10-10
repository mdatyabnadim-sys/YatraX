/* =========================================================
   YatraX — Common Scripts
   Auth helpers + Wishlist system (uses localStorage)
   ========================================================= */

const API_BASE = "https://humble-imagination-production-1165.up.railway.app/api";

/* ================= AUTH ================= */
function getCurrentUser() {
    try {
        const raw = localStorage.getItem("yatrax_user");
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function logout() {
    if (!confirm("Logout from YatraX?")) return;
    localStorage.removeItem("yatrax_user");
    renderAuthArea();
    alert("Logged out successfully.");
}

function renderAuthArea() {
    const area = document.getElementById("authArea");
    if (!area) return;
    const user = getCurrentUser();
    if (user) {
        area.innerHTML =
            '<span class="auth-user">Hi, <b>' +
            escapeHtml(user.name || user.email) +
            '</b></span>' +
            '<button class="auth-logout" onclick="logout()">Logout</button>';
    } else {
        area.innerHTML = '<a href="auth.html">Login / Sign up</a>';
    }
}

/* ================= WISHLIST ================= */
const WISHLIST_KEY = "yatrax_wishlist";

function getWishlistUser() {
    const u = getCurrentUser();
    return u ? u.email : "guest";
}

function getWishlist() {
    const key = WISHLIST_KEY + "_" + getWishlistUser();
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(list) {
    const key = WISHLIST_KEY + "_" + getWishlistUser();
    localStorage.setItem(key, JSON.stringify(list));
}

function isWishlisted(name) {
    return getWishlist().some((d) => d.name === name);
}

/**
 * Toggle wishlist state for a destination.
 * dest = { name, state, imageUrl, link }
 */
function toggleWishlist(dest) {
    let list = getWishlist();
    const idx = list.findIndex((d) => d.name === dest.name);
    if (idx >= 0) {
        list.splice(idx, 1);
    } else {
        list.push(dest);
    }
    saveWishlist(list);
    updateWishlistBadge();
    return list.some((d) => d.name === dest.name);
}

function updateWishlistBadge() {
    const badge = document.getElementById("wishlistBadge");
    if (!badge) return;
    const count = getWishlist().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-block" : "none";
}

/* ================= UTILITIES ================= */
function escapeHtml(s) {
    if (s === null || s === undefined) return "";
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function truncate(text, max) {
    if (!text) return "";
    if (text.length <= max) return text;
    return text.substring(0, max).replace(/\s+\S*$/, "") + "…";
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", function () {
    renderAuthArea();
    updateWishlistBadge();
});