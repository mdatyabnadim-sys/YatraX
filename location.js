/* =========================================================
   YatraX — Generic Sub-Location Page
   URL: location.html?dest=ladakh&loc=khardung-la
   ========================================================= */

const LOCATION_DATA = {
  "agra": {
    displayName: "Agra",
    state: "UTTAR PRADESH",
    gmaps: "https://www.google.com/maps?q=Agra,India&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 100,80 Q 200,50 320,70 Q 450,95 560,70 Q 700,40 850,80 Q 920,110 930,200 Q 940,320 910,440 Q 880,540 780,560 Q 640,570 520,555 Q 380,540 240,560 Q 130,575 90,520 Q 55,440 60,320 Q 55,180 100,80 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><text x="500" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">AGRA REGION</text><text x="40" y="592" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">Hand-drawn offline map</text></svg>`,
    locations: {
      "taj-mahal":{name:"Taj Mahal",tag:"MONUMENT",img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",remark:"The iconic ivory-white marble mausoleum built by Emperor Shah Jahan in memory of Mumtaz Mahal.",timing:"Sunrise to sunset (closed Fri)",entry:"₹50 Indian / ₹1100 Foreign",season:"Oct – March",food:"Petha, Mughlai cuisine",cost:"₹200 per person",category:"Monument"},
      "agra-fort":{name:"Agra Fort",tag:"FORT",img:"https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800",remark:"Massive 16th-century red sandstone fort.",timing:"6 AM – 6 PM",entry:"₹40 Indian / ₹550 Foreign",season:"Oct – March",food:"Mughlai snacks",cost:"₹150 per person",category:"Heritage"},
      "mehtab-bagh":{name:"Mehtab Bagh",tag:"GARDEN",img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800",remark:"Charbagh garden on the opposite bank of the Yamuna.",timing:"Sunrise – sunset",entry:"₹30 Indian / ₹300 Foreign",season:"Oct – March",food:"Street snacks",cost:"₹100 per person",category:"Garden"},
      "fatehpur-sikri":{name:"Fatehpur Sikri",tag:"HERITAGE",img:"https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800",remark:"Preserved ghost city built by Emperor Akbar.",timing:"6 AM – 6 PM",entry:"₹50 Indian / ₹610 Foreign",season:"Oct – March",food:"Rajasthani thali",cost:"₹500 per person",category:"Heritage"},
      "itmad-ud-daulah":{name:"Itmad-ud-Daulah",tag:"TOMB",img:"https://images.unsplash.com/photo-1615836247906-5e0e4c4b0e5c?w=800",remark:"Exquisite marble tomb that inspired the Taj Mahal.",timing:"Sunrise – sunset",entry:"₹30 Indian / ₹310 Foreign",season:"Oct – March",food:"Snacks nearby",cost:"₹150 per person",category:"Monument"},
      "kinari-bazaar":{name:"Kinari Bazaar",tag:"MARKET",img:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800",remark:"Old-city market famous for marble inlay work.",timing:"10 AM – 9 PM",entry:"Free",season:"Year-round",food:"Petha, Bedai, Jalebi",cost:"₹200 per person",category:"Market"}
    }
  },
  "jaipur": {
    displayName: "Jaipur",
    state: "RAJASTHAN",
    gmaps: "https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 100,120 Q 200,70 340,80 Q 480,95 620,80 Q 760,60 880,110 Q 930,140 940,240 Q 950,360 920,470 Q 890,560 780,570 Q 640,585 500,570 Q 360,555 220,570 Q 130,580 90,520 Q 55,440 60,320 Q 55,200 100,120 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><text x="500" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">JAIPUR REGION</text></svg>`,
    locations: {
      "amber-fort":{name:"Amber Fort",tag:"FORT",img:"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",remark:"Stunning Rajput fort with panoramic views of Maota Lake.",timing:"8 AM – 5:30 PM",entry:"₹100 Indian / ₹500 Foreign",season:"Oct – March",food:"Rajasthani thali",cost:"₹400 per person",category:"Fort"},
      "hawa-mahal":{name:"Hawa Mahal",tag:"PALACE",img:"https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",remark:"The iconic 953-windowed pink sandstone palace.",timing:"9 AM – 4:30 PM",entry:"₹50 Indian / ₹200 Foreign",season:"Oct – March",food:"Local sweets",cost:"₹150 per person",category:"Palace"},
      "city-palace":{name:"City Palace",tag:"PALACE",img:"https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",remark:"Official residence of the Jaipur royal family.",timing:"9:30 AM – 5 PM",entry:"₹200 Indian / ₹700 Foreign",season:"Oct – March",food:"Royal thali",cost:"₹300 per person",category:"Palace"},
      "jantar-mantar":{name:"Jantar Mantar",tag:"HERITAGE",img:"https://images.unsplash.com/photo-1591019479261-1a103585c559?w=800",remark:"UNESCO site with 19 astronomical instruments.",timing:"9 AM – 4:30 PM",entry:"₹200",season:"Oct – March",food:"Snacks",cost:"₹200 per person",category:"Observatory"},
      "nahargarh-fort":{name:"Nahargarh Fort",tag:"FORT",img:"https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=800",remark:"Hilltop fort with the best panoramic views of Jaipur.",timing:"10 AM – 5:30 PM",entry:"₹50 Indian / ₹200 Foreign",season:"Oct – March",food:"Cafe food",cost:"₹200 per person",category:"Fort"},
      "albert-hall-museum":{name:"Albert Hall Museum",tag:"MUSEUM",img:"https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800",remark:"Indo-Saracenic building housing artifacts.",timing:"9 AM – 5 PM (closed Mon)",entry:"₹40 Indian / ₹300 Foreign",season:"Year-round",food:"Local cafes",cost:"₹150 per person",category:"Museum"}
    }
  },
  "kerala": {
    displayName: "Kerala",
    state: "KERALA",
    gmaps: "https://www.google.com/maps?q=Kerala,India&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 0,0 L 280,0 Q 250,100 270,220 Q 290,340 250,440 Q 220,520 250,600 L 0,600 Z" fill="#c8dce8" stroke="#3a2f22" stroke-width="2.2"/><text x="120" y="300" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#2a5578" transform="rotate(-70 120 300)">ARABIAN SEA</text><path d="M 280,0 Q 250,100 270,220 Q 290,340 250,440 Q 220,520 250,600 L 1000,600 L 1000,0 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><text x="700" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">KERALA COAST</text></svg>`,
    locations: {
      "alleppey-backwaters":{name:"Alleppey Backwaters",tag:"BACKWATER",img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",remark:"Network of canals best explored on a houseboat.",timing:"Day cruise / overnight",entry:"Houseboat from ₹6,000",season:"Sep – March",food:"Karimeen, Fish Curry",cost:"₹6,000 – ₹12,000",category:"Backwater"},
      "munnar":{name:"Munnar",tag:"HILLS",img:"https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800",remark:"Rolling green tea plantations and misty hills.",timing:"Anytime",entry:"Varies",season:"Sep – March",food:"Kerala breakfast, Tea",cost:"₹2,000 – ₹5,000",category:"Hills"},
      "kochi":{name:"Kochi",tag:"CITY",img:"https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",remark:"Colonial-era port city with Chinese fishing nets.",timing:"All day",entry:"Varies by site",season:"Year-round",food:"Fish curry, Appam",cost:"₹1,500 – ₹3,000",category:"City"},
      "kovalam":{name:"Kovalam",tag:"BEACH",img:"https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a?w=800",remark:"Crescent-shaped beach famous for its lighthouse.",timing:"All day",entry:"Free",season:"Sep – March",food:"Seafood, Kerala thali",cost:"₹1,000 – ₹3,000",category:"Beach"},
      "thekkady":{name:"Thekkady",tag:"WILDLIFE",img:"https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800",remark:"Home to the Periyar Tiger Reserve.",timing:"6 AM – 5 PM",entry:"₹45 Indian / ₹500 Foreign",season:"Sep – March",food:"Kerala meals",cost:"₹2,000 – ₹4,000",category:"Wildlife"},
      "wayanad":{name:"Wayanad",tag:"NATURE",img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",remark:"Lush forests, spice plantations and ancient caves.",timing:"Anytime",entry:"Varies",season:"Oct – March",food:"Tribal cuisine",cost:"₹2,000 – ₹4,000",category:"Nature"}
    }
  },
  "ladakh": {
    displayName: "Ladakh",
    state: "JAMMU & KASHMIR",
    gmaps: "https://www.google.com/maps?q=Leh,Ladakh&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 80,90 Q 220,40 380,80 Q 520,110 660,70 Q 800,40 920,90 Q 960,140 950,260 Q 950,380 920,490 Q 880,570 760,560 Q 620,545 480,565 Q 340,580 200,560 Q 120,545 90,480 Q 60,380 60,260 Q 55,160 80,90 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><text x="500" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">LADAKH REGION</text></svg>`,
    locations: {
      "pangong-lake":{name:"Pangong Lake",tag:"LAKE",img:"https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800",remark:"High-altitude lake that changes color through the day.",timing:"Permit required",entry:"₹20 + permit",season:"May – Sep",food:"Maggi, Butter Tea",cost:"₹2,000 – ₹5,000",category:"Lake"},
      "nubra-valley":{name:"Nubra Valley",tag:"VALLEY",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",remark:"Valley with sand dunes and Bactrian camels.",timing:"Daytime",entry:"Permit required",season:"May – Sep",food:"Tibetan food",cost:"₹2,500 – ₹5,000",category:"Valley"},
      "leh-palace":{name:"Leh Palace",tag:"PALACE",img:"https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",remark:"Nine-storey palace overlooking Leh.",timing:"7 AM – 6 PM",entry:"₹20",season:"May – Sep",food:"Local cafes",cost:"₹300 per person",category:"Palace"},
      "khardung-la":{name:"Khardung La",tag:"PASS",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",remark:"At 5,359 m — one of the highest motorable passes.",timing:"Daytime",entry:"Free",season:"June – Sep",food:"Maggi stops",cost:"₹500 per person",category:"Pass"},
      "magnetic-hill":{name:"Magnetic Hill",tag:"ATTRACTION",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",remark:"Famous spot where vehicles appear to roll uphill.",timing:"Daytime",entry:"Free",season:"May – Sep",food:"Snacks",cost:"₹200 per person",category:"Attraction"},
      "hemis-monastery":{name:"Hemis Monastery",tag:"MONASTERY",img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",remark:"17th-century Buddhist monastery with Hemis Festival.",timing:"8 AM – 6 PM",entry:"₹50",season:"May – Sep",food:"Monastery food",cost:"₹300 per person",category:"Monastery"}
    }
  },
  "goa": {
    displayName: "Goa",
    state: "GOA",
    gmaps: "https://www.google.com/maps?q=Goa,India&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 0,0 L 220,0 Q 200,60 230,120 Q 250,180 240,240 Q 230,300 250,360 Q 280,420 320,480 Q 360,540 400,600 L 0,600 Z" fill="#c8dce8" stroke="#3a2f22" stroke-width="2.2"/><text x="100" y="300" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#2a5578" transform="rotate(-70 100 300)">ARABIAN SEA</text><path d="M 220,0 Q 200,60 230,120 Q 250,180 240,240 Q 230,300 250,360 Q 280,420 320,480 Q 360,540 400,600 L 1000,600 L 1000,0 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><text x="700" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">GOA COAST</text></svg>`,
    locations: {
      "baga-beach":{name:"Baga Beach",tag:"BEACH",img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",remark:"One of Goa's busiest beaches, ideal for water sports, nightlife and beach activities.",timing:"Generally accessible throughout the day",entry:"Free",season:"November – February",food:"Fish Thali, Goan Curry, Bebinca",cost:"₹1,000 – ₹3,000 per person",category:"Beach • Nightlife"},
      "calangute-beach":{name:"Calangute Beach",tag:"BEACH",img:"https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=800",remark:"A popular North Goa beach with shopping, restaurants and water activities.",timing:"Generally accessible throughout the day",entry:"Free",season:"November – February",food:"Goan Fish Curry, Prawn Balchão",cost:"₹1,000 – ₹3,000 per person",category:"Beach • Shopping"},
      "anjuna-beach":{name:"Anjuna Beach",tag:"BEACH",img:"https://images.unsplash.com/photo-1587922546307-776227941871?w=800",remark:"Known for its rocky coastline, cafés, markets and relaxed atmosphere.",timing:"Generally accessible throughout the day",entry:"Free",season:"November – February",food:"Goan Sausage, Seafood",cost:"₹1,000 – ₹3,000 per person",category:"Beach • Market"},
      "fort-aguada":{name:"Fort Aguada",tag:"FORT",img:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",remark:"Historic Portuguese fort overlooking the Arabian Sea.",timing:"Usually daytime; verify locally",entry:"Low-cost/varies",season:"October – March",food:"Goan Fish Curry, Bebinca",cost:"₹200 – ₹800 per person",category:"Heritage • Fort"},
      "dudhsagar-falls":{name:"Dudhsagar Falls",tag:"WATERFALL",img:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",remark:"A spectacular waterfall surrounded by forest.",timing:"Daytime; access rules may vary",entry:"Varies by route/tour",season:"October – January",food:"Goan Snacks, Local Thali",cost:"₹1,500 – ₹3,500 per person",category:"Nature • Adventure"},
      "palolem-beach":{name:"Palolem Beach",tag:"BEACH",img:"https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a?w=800",remark:"A scenic South Goa beach known for its calmer atmosphere and sunset.",timing:"Generally accessible throughout the day",entry:"Free",season:"November – February",food:"Seafood, Goan Curry",cost:"₹1,000 – ₹3,000 per person",category:"Beach • Relaxation"}
    }
  },
  "kashmir": {
    displayName: "Kashmir",
    state: "JAMMU & KASHMIR",
    gmaps: "https://www.google.com/maps?q=Srinagar,Kashmir&output=embed",
    svg: `<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 80,90 Q 130,55 200,70 Q 280,90 350,60 Q 430,35 520,65 Q 620,90 710,55 Q 810,30 900,70 Q 940,110 950,180 Q 960,260 940,340 Q 950,420 920,500 Q 880,560 800,550 Q 700,540 620,555 Q 520,570 420,555 Q 320,540 230,560 Q 140,570 90,530 Q 55,480 60,400 Q 55,310 65,230 Q 70,150 80,90 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2" stroke-linejoin="round"/><text x="500" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838">KASHMIR VALLEY</text></svg>`,
    locations: {
      "srinagar":{name:"Srinagar",tag:"CITY",img:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",remark:"Kashmir's major city, known for Dal Lake, houseboats, Mughal gardens and traditional markets.",timing:"City accessible throughout the day",entry:"Mostly Free",season:"March – October",food:"Rogan Josh, Wazwan, Kahwa",cost:"₹1,000 – ₹3,000 per person",category:"City • Lake • Culture"},
      "gulmarg":{name:"Gulmarg",tag:"MOUNTAIN",img:"https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",remark:"A mountain destination famous for the Gulmarg Gondola, snow activities and alpine landscapes.",timing:"Daytime; activity timings vary",entry:"Varies by activity",season:"December – March for snow",food:"Kashmiri Wazwan, Kahwa",cost:"₹2,000 – ₹6,000 per person",category:"Mountain • Adventure"},
      "pahalgam":{name:"Pahalgam",tag:"VALLEY",img:"https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800",remark:"A scenic valley surrounded by mountains, forests and rivers.",timing:"Generally daytime for sightseeing",entry:"Varies by activity",season:"April – October",food:"Kashmiri Pulao, Rogan Josh",cost:"₹1,500 – ₹4,000 per person",category:"Valley • Nature"},
      "sonamarg":{name:"Sonamarg",tag:"GLACIER",img:"https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800",remark:"A high-altitude mountain destination known for glaciers, meadows and dramatic scenery.",timing:"Daytime; weather dependent",entry:"Varies by activity",season:"April – October",food:"Kahwa, Kashmiri Snacks",cost:"₹1,500 – ₹4,000 per person",category:"Nature • Mountains"},
      "dal-lake":{name:"Dal Lake",tag:"LAKE",img:"https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",remark:"Iconic attraction famous for shikara rides, houseboats and lakeside views.",timing:"Daytime; shikara timings vary",entry:"Free; Shikara charges vary",season:"March – October",food:"Kahwa, Kashmiri Cuisine",cost:"₹500 – ₹2,500 per person",category:"Lake • Culture"},
      "dachigam-national-park":{name:"Dachigam National Park",tag:"WILDLIFE",img:"https://images.unsplash.com/photo-1511497584788-876760111969?w=800",remark:"A protected wildlife area known for forests and the Hangul deer.",timing:"Daytime; permit and seasonal rules apply",entry:"Varies",season:"April – October",food:"Local Kashmiri Food",cost:"₹500 – ₹2,000 per person",category:"Wildlife • Forest"}
    }
  }
};

/* ================= PARSE URL ================= */
const params = new URLSearchParams(window.location.search);
const destKey = (params.get("dest") || "").toLowerCase();
const locSlug = (params.get("loc") || "").toLowerCase();

const destData = LOCATION_DATA[destKey];
const locData = destData ? destData.locations[locSlug] : null;

if (!destData || !locData) {
    document.getElementById("content").innerHTML =
        '<div class="loading-msg" style="color:#e5b95c;">⚠️ Location not found. Try a valid URL like location.html?dest=ladakh&loc=khardung-la</div>';
} else {
    document.title = "YatraX | " + locData.name;
    renderLocation(destData, locData, destKey, locSlug);
}

function renderLocation(dest, loc, destKey, locSlug) {
    // Back button → parent destination page
    const backBtn = document.getElementById("backBtn");
    const parentPage =
        destKey === "goa" ? "goa.html" :
        destKey === "kashmir" ? "kashmir.html" :
        "destination.html?id=" + destIdFor(destKey);
    backBtn.onclick = () => window.location.href = parentPage;

    document.getElementById("content").innerHTML = `
        <section class="hero" style="background-image:url('${escapeHtml(loc.img)}')">
          <div class="hero-content">
            <div class="hero-small">${escapeHtml(dest.state)} • ${escapeHtml(loc.tag)}</div>
            <h1>${escapeHtml(loc.name)}</h1>
            <p>${escapeHtml(loc.remark)}</p>
          </div>
        </section>

        <div class="container">
          <div class="section">
            <h2>About ${escapeHtml(loc.name)}</h2>
            <p>${escapeHtml(loc.remark)}</p>
            <div class="details">
              <div class="detail"><span>Timing</span><strong>${escapeHtml(loc.timing)}</strong></div>
              <div class="detail"><span>Entry Cost</span><strong>${escapeHtml(loc.entry)}</strong></div>
              <div class="detail"><span>Best Season</span><strong>${escapeHtml(loc.season)}</strong></div>
              <div class="detail"><span>Famous Food</span><strong>${escapeHtml(loc.food)}</strong></div>
              <div class="detail"><span>Estimated Cost</span><strong>${escapeHtml(loc.cost)}</strong></div>
              <div class="detail"><span>Category</span><strong>${escapeHtml(loc.category)}</strong></div>
            </div>
          </div>
        </div>
    `;

    // Map
    document.getElementById("mapTitle").innerText = loc.name + " Map";
    document.getElementById("onlineMapFrame").src = dest.gmaps;
    document.getElementById("offlineMap").innerHTML = dest.svg;

    // Reviews
    initReviews("loc_" + destKey + "_" + locSlug);
}

function destIdFor(key) {
    return { "agra": 1, "jaipur": 3, "kerala": 4, "ladakh": 5, "goa": 2, "kashmir": 6 }[key] || 1;
}

/* ================= MAP CONTROLS ================= */
function openMap() {
    const m = document.getElementById("mapSection");
    m.classList.add("show");
    setTimeout(() => m.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
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