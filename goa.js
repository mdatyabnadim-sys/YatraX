/* =========================================================
   YatraX — Goa Page
   ========================================================= */

const BUDGET = {
  stay: [3000, 6000],
  act:  [1000, 2500],
  travel: {
    "Delhi":     [7000, 12000],
    "Mumbai":    [3000, 6000],
    "Kolkata":   [12000, 24000],
    "Chennai":   [5000, 9000],
    "Bangalore": [3500, 6500],
    "Hyderabad": [4500, 8000]
  }
};

/* ================= MAP ================= */
function openMap(){
  document.getElementById("mapSection").classList.add("show");
  setTimeout(() => document.getElementById("mapSection").scrollIntoView({ behavior: "smooth", block: "center" }), 50);
}
function closeMap(){
  document.getElementById("mapSection").classList.remove("show");
}
function showOnline(){
  document.getElementById("onlineMap").style.display = "block";
  document.getElementById("offlineMap").classList.remove("active");
  document.getElementById("onlineBtn").classList.add("active");
  document.getElementById("offlineBtn").classList.remove("active");
  document.getElementById("mapStatus").innerText = "Online mode • Live map available";
}
function showOffline(){
  document.getElementById("onlineMap").style.display = "none";
  document.getElementById("offlineMap").classList.add("active");
  document.getElementById("offlineBtn").classList.add("active");
  document.getElementById("onlineBtn").classList.remove("active");
  document.getElementById("mapStatus").innerText = "Offline mode • Using YatraX offline Goa map";
}

/* ================= BUDGET ================= */
function calculateBudget(){
  const pInput = document.getElementById("persons");
  const oInput = document.getElementById("origin");
  if (!pInput || !oInput) return;

  const rawValue = pInput.value;
  const isDecimal = rawValue.includes(".") || rawValue.includes(",");
  const warn = document.getElementById("personsWarning");
  if (warn) warn.classList.toggle("show", isDecimal);

  const p = Math.max(0, parseInt(rawValue, 10) || 0);
  const origin = oInput.value;

  document.getElementById("travelLabel").innerText = `Travel (${origin} → Goa)`;

  if (p === 0) {
    ["travelCost", "stayCost", "activityCost", "totalCost"].forEach((id) => {
      document.getElementById(id).innerText = "₹0";
    });
    return;
  }

  const t = BUDGET.travel[origin] || [0, 0];
  const tMin = t[0] * p, tMax = t[1] * p;
  const sMin = BUDGET.stay[0] * p, sMax = BUDGET.stay[1] * p;
  const aMin = BUDGET.act[0] * p, aMax = BUDGET.act[1] * p;

  document.getElementById("travelCost").innerText =
    "₹" + tMin.toLocaleString("en-IN") + " – ₹" + tMax.toLocaleString("en-IN");
  document.getElementById("stayCost").innerText =
    "₹" + sMin.toLocaleString("en-IN") + " – ₹" + sMax.toLocaleString("en-IN");
  document.getElementById("activityCost").innerText =
    "₹" + aMin.toLocaleString("en-IN") + " – ₹" + aMax.toLocaleString("en-IN");
  document.getElementById("totalCost").innerText =
    "₹" + (tMin + sMin + aMin).toLocaleString("en-IN") +
    " – ₹" + (tMax + sMax + aMax).toLocaleString("en-IN");
}

/* ================= NAV ================= */
function goBack(){
  if (document.referrer) window.history.back();
  else window.location.href = "index.html";
}

/* ================= INIT ================= */
calculateBudget();

// Init reviews for Goa itself
initReviews("dest_goa");