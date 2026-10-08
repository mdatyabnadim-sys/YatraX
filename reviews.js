/* =========================================================
   YatraX — Reviews (backend-driven)
   ========================================================= */

let _currentReviewKey = "";
let _selectedStars = 0;

/* ---------- API helpers ---------- */
async function fetchReviews(key) {
    try {
        const res = await fetch(API_BASE + "/reviews/" + encodeURIComponent(key));
        if (!res.ok) throw new Error("HTTP " + res.status);
        return await res.json();
    } catch (e) {
        console.error("Failed to load reviews:", e);
        return [];
    }
}

async function postReview(payload) {
    const res = await fetch(API_BASE + "/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Post failed");
    return res.json();
}

async function voteReview(id, email, type) {
    const url = API_BASE + "/reviews/" + id + "/vote?email=" +
                encodeURIComponent(email) + "&type=" + type;
    const res = await fetch(url, { method: "POST" });
    if (!res.ok) throw new Error("Vote failed");
    return res.json();
}

/* ---------- Render ---------- */
async function renderReviews() {
    const container = document.getElementById("reviewList");
    if (!container) return;

    container.innerHTML = '<div class="no-reviews">Loading reviews...</div>';

    const all = await fetchReviews(_currentReviewKey);
    const topLevel = all.filter(r => !r.parentId);
    const replies = all.filter(r => r.parentId);

    if (topLevel.length === 0) {
        container.innerHTML = '<div class="no-reviews">💬 No reviews yet. Be the first to share your experience!</div>';
        return;
    }

    const user = getCurrentUser();
    const email = user ? user.email : "";

    container.innerHTML = topLevel.map(r => renderReviewCard(r, replies, email)).join("");
}

function renderReviewCard(r, allReplies, userEmail) {
    const liked = userEmail && r.likedBy && r.likedBy.split(",").includes(userEmail);
    const disliked = userEmail && r.dislikedBy && r.dislikedBy.split(",").includes(userEmail);
    const likeCount = r.likedBy ? r.likedBy.split(",").filter(Boolean).length : 0;
    const dislikeCount = r.dislikedBy ? r.dislikedBy.split(",").filter(Boolean).length : 0;

    const childReplies = allReplies.filter(x => x.parentId === r.id);

    return `
    <div class="review-card" data-id="${r.id}">
        <div class="review-header">
            <div class="avatar">${initialOf(r.userName)}</div>
            <div class="review-meta">
                <div class="name">${escapeHtml(r.userName)}</div>
                <div class="time">${timeAgo(new Date(r.timestamp).getTime())}</div>
            </div>
            <div class="review-rating">${"★".repeat(r.rating || 0)}${"☆".repeat(5 - (r.rating || 0))}</div>
        </div>
        <div class="review-text">${escapeHtml(r.text)}</div>
        <div class="review-actions">
            <button class="action-btn ${liked ? "liked" : ""}" onclick="onLike(${r.id})">
                👍 <span class="count">${likeCount}</span>
            </button>
            <button class="action-btn ${disliked ? "disliked" : ""}" onclick="onDislike(${r.id})">
                👎 <span class="count">${dislikeCount}</span>
            </button>
            <button class="action-btn" onclick="toggleReplyForm(${r.id})">
                💬 Reply${childReplies.length ? " (" + childReplies.length + ")" : ""}
            </button>
        </div>
        <div class="replies">
            ${childReplies.map(rep => `
                <div class="reply-card">
                    <div class="reply-header">
                        <div class="avatar">${initialOf(rep.userName)}</div>
                        <div>
                            <div class="name">${escapeHtml(rep.userName)}</div>
                            <div class="time">${timeAgo(new Date(rep.timestamp).getTime())}</div>
                        </div>
                    </div>
                    <div class="reply-text">${escapeHtml(rep.text)}</div>
                </div>
            `).join("")}
        </div>
        <div class="reply-form" id="replyForm-${r.id}">
            <textarea id="replyText-${r.id}" placeholder="Write a reply..."></textarea>
            <button onclick="submitReply(${r.id})">Post Reply</button>
        </div>
    </div>`;
}

/* ---------- Actions ---------- */
async function submitReview() {
    const user = getCurrentUser();
    if (!user) { alert("Please login first."); window.location.href = "auth.html"; return; }

    const text = document.getElementById("reviewText").value.trim();
    if (_selectedStars === 0) { alert("Please select a star rating."); return; }
    if (text.length < 3) { alert("Please write at least a few words."); return; }

    try {
        await postReview({
            reviewKey: _currentReviewKey,
            userName: user.name || user.email,
            userEmail: user.email,
            text: text,
            rating: _selectedStars,
            parentId: null
        });
        document.getElementById("reviewText").value = "";
        _selectedStars = 0;
        document.querySelectorAll("#starSelector .star").forEach(s => s.classList.remove("active"));
        renderReviews();
    } catch (e) {
        alert("Could not post review. Backend offline?");
        console.error(e);
    }
}

async function onLike(id) {
    const user = getCurrentUser();
    if (!user) { alert("Please login."); window.location.href = "auth.html"; return; }
    try {
        await voteReview(id, user.email, "like");
        renderReviews();
    } catch (e) { console.error(e); }
}

async function onDislike(id) {
    const user = getCurrentUser();
    if (!user) { alert("Please login."); window.location.href = "auth.html"; return; }
    try {
        await voteReview(id, user.email, "dislike");
        renderReviews();
    } catch (e) { console.error(e); }
}

async function submitReply(parentId) {
    const user = getCurrentUser();
    if (!user) { alert("Please login."); window.location.href = "auth.html"; return; }

    const textEl = document.getElementById("replyText-" + parentId);
    const text = textEl.value.trim();
    if (text.length < 2) { alert("Reply cannot be empty."); return; }

    try {
        await postReview({
            reviewKey: _currentReviewKey,
            userName: user.name || user.email,
            userEmail: user.email,
            text: text,
            rating: 0,
            parentId: parentId
        });
        textEl.value = "";
        document.getElementById("replyForm-" + parentId).classList.remove("show");
        renderReviews();
    } catch (e) { console.error(e); }
}

function toggleReplyForm(id) {
    const user = getCurrentUser();
    if (!user) { alert("Please login."); window.location.href = "auth.html"; return; }
    const form = document.getElementById("replyForm-" + id);
    form.classList.toggle("show");
    if (form.classList.contains("show")) document.getElementById("replyText-" + id).focus();
}

/* ---------- Utils ---------- */
function initialOf(n) { return (n || "?").trim().charAt(0).toUpperCase(); }

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const m = Math.floor(diff / 60000);
    const h = Math.floor(diff / 3600000);
    const d = Math.floor(diff / 86400000);
    if (m < 1) return "Just now";
    if (m < 60) return m + "m ago";
    if (h < 24) return h + "h ago";
    if (d < 30) return d + "d ago";
    return new Date(ts).toLocaleDateString();
}

function initStarSelector() {
    const stars = document.querySelectorAll("#starSelector .star");
    stars.forEach((star, idx) => {
        star.addEventListener("mouseenter", () => {
            stars.forEach((s, i) => s.classList.toggle("active", i <= idx));
        });
        star.addEventListener("click", () => {
            _selectedStars = idx + 1;
            stars.forEach((s, i) => s.classList.toggle("active", i <= idx));
        });
    });
    const wrap = document.getElementById("starSelector");
    if (wrap) wrap.addEventListener("mouseleave", () => {
        stars.forEach((s, i) => s.classList.toggle("active", i < _selectedStars));
    });
}

function initReviews(reviewKey) {
    _currentReviewKey = reviewKey;
    const section = document.getElementById("reviewsSection");
    if (!section) return;

    const user = getCurrentUser();
    const writeForm = document.getElementById("reviewWriteForm");
    const loginPrompt = document.getElementById("loginPromptBox");

    if (user) {
        if (writeForm) writeForm.style.display = "block";
        if (loginPrompt) loginPrompt.style.display = "none";
    } else {
        if (writeForm) writeForm.style.display = "none";
        if (loginPrompt) loginPrompt.style.display = "block";
    }

    initStarSelector();
    renderReviews();
}