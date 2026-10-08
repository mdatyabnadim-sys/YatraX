/* =========================================================
   YatraX — Kashmir Page
   ========================================================= */

const BUDGET = {
  stay: [3000, 6000],
  act:  [2500, 5000],
  travel: {
    "Delhi":     [8000, 13000],
    "Mumbai":    [13000, 20000],
    "Kolkata":   [10000, 18000],
    "Chennai":   [13000, 20000],
    "Bangalore": [13000, 20000],
    "Hyderabad": [12000, 18000]
  }
};

/* ================= MAP ================= */
function openMap() {
  document.getElementById("mapSection").classList.add("show");
  setTimeout(() => document.getElementById("mapSection").scrollIntoView({ behavior: "smooth", block: "center" }), 50);
}
function closeMap() {
  document.getElementById("mapSection").classList.remove("show");
}

function showOnline() {
  document.getElementById("onlineMap").style.display = "block";
  document.getElementById("offlineMap").classList.remove("active");
  document.getElementById("onlineBtn").classList.add("active");
  document.getElementById("offlineBtn").classList.remove("active");
}
function showOffline() {
  document.getElementById("onlineMap").style.display = "none";
  document.getElementById("offlineMap").classList.add("active");
  document.getElementById("offlineBtn").classList.add("active");
  document.getElementById("onlineBtn").classList.remove("active");
}

window.addEventListener("offline", showOffline);

/* ================= BUDGET ================= */
function calculateBudget() {
  const pInput = document.getElementById("persons");
  const oInput = document.getElementById("origin");
  if (!pInput || !oInput) return;

  const rawValue = pInput.value;
  const isDecimal = rawValue.includes(".") || rawValue.includes(",");
  const warn = document.getElementById("personsWarning");
  if (warn) warn.classList.toggle("show", isDecimal);

  const p = Math.max(0, parseInt(rawValue, 10) || 0);
  const origin = oInput.value;

  document.getElementById("travelLabel").innerText =
    `Travel (${origin} → Kashmir)`;

  if (p === 0) {
    ["travel", "stay", "activities", "total"].forEach((id) => {
      document.getElementById(id).innerText = "₹0";
    });
    return;
  }

  const t = BUDGET.travel[origin] || [0, 0];
  const tMin = t[0] * p, tMax = t[1] * p;
  const sMin = BUDGET.stay[0] * p, sMax = BUDGET.stay[1] * p;
  const aMin = BUDGET.act[0] * p, aMax = BUDGET.act[1] * p;

  document.getElementById("travel").innerText =
    "₹" + tMin.toLocaleString("en-IN") + " – ₹" + tMax.toLocaleString("en-IN");
  document.getElementById("stay").innerText =
    "₹" + sMin.toLocaleString("en-IN") + " – ₹" + sMax.toLocaleString("en-IN");
  document.getElementById("activities").innerText =
    "₹" + aMin.toLocaleString("en-IN") + " – ₹" + aMax.toLocaleString("en-IN");
  document.getElementById("total").innerText =
    "₹" + (tMin + sMin + aMin).toLocaleString("en-IN") +
    " – ₹" + (tMax + sMax + aMax).toLocaleString("en-IN");
}

/* ================= NAV ================= */
function goHome() {
  window.location.href = "index.html";
}

/* ================= INIT ================= */
calculateBudget();

// Init reviews for Kashmir itself
initReviews("dest_kashmir");