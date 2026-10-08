/* =========================================================
   YatraX — Generic Destination Page
   ========================================================= */

const DISPLAY_NAMES = { "taj mahal": "Agra" };
const PARENT_KEYS = {
  "taj mahal": "agra",
  "jaipur": "jaipur",
  "kerala": "kerala",
  "ladakh": "ladakh"
};
const IMG_OVERRIDE = {
  "taj mahal": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&q=85",
  "jaipur": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&q=85",
  "ladakh": "https://www.peakadventuretour.com/assets/imgs/leh-ladakh-tourism-01.webp"
};

const GMAPS_EMBED = {
  "taj mahal": "https://www.google.com/maps?q=Agra,India&output=embed",
  "jaipur": "https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed",
  "kerala": "https://www.google.com/maps?q=Kerala,India&output=embed",
  "ladakh": "https://www.google.com/maps?q=Leh,Ladakh&output=embed"
};

const BUDGET = {
  "taj mahal": {stay:[3000,6000],act:[1500,3500],travel:{"Delhi":[1500,2500],"Mumbai":[7000,12000],"Kolkata":[8000,14000],"Chennai":[8000,14000],"Bangalore":[8000,14000],"Hyderabad":[6500,11000]}},
  "jaipur":    {stay:[3500,7000],act:[2000,4500],travel:{"Delhi":[1800,3000],"Mumbai":[7000,12000],"Kolkata":[8000,15000],"Chennai":[9000,15000],"Bangalore":[9000,15000],"Hyderabad":[7000,12000]}},
  "kerala":    {stay:[4000,8000],act:[2500,5000],travel:{"Delhi":[9000,15000],"Mumbai":[6000,10000],"Kolkata":[10000,18000],"Chennai":[4000,7000],"Bangalore":[4000,7000],"Hyderabad":[5500,9000]}},
  "ladakh":    {stay:[4500,9000],act:[3000,6000],travel:{"Delhi":[8000,13000],"Mumbai":[13000,20000],"Kolkata":[14000,20000],"Chennai":[13000,20000],"Bangalore":[13000,20000],"Hyderabad":[12000,18000]}}
};

const BOOKING = {
  "taj mahal":{
    hotels:[
      {name:"Booking.com Agra",desc:"1,000+ hotels & homestays",url:"https://www.booking.com/city/in/agra.html"},
      {name:"The Oberoi Amarvilas",desc:"Luxury hotel with Taj Mahal views",url:"https://www.oberoihotels.com/hotels-in-agra-amarvilas-resort/"},
      {name:"Hotel Atulyaa Taj",desc:"Budget stay near Taj East Gate",url:"https://www.trip.com/hotels/agra-hotel-detail-2189474/hotel-atulyaa-taj/"},
      {name:"Radisson Hotel Agra",desc:"Modern hotel with rooftop pool",url:"https://www.radissonhotels.com/en-us/hotels/radisson-agra"}
    ],
    bikes:[
      {name:"Gearz Vehicle",desc:"Scooters & bikes from ₹399/day",url:"https://gearzvehicle.com/"},
      {name:"RenTrip",desc:"Largest bike rental provider in Agra",url:"https://www.rentrip.in/bike-rental-agra"},
      {name:"Riderly",desc:"Compare 600+ bike rentals across India",url:"https://riderly.com/"}
    ],
    cars:[
      {name:"Zoomcar",desc:"Self-drive car rentals, doorstep delivery",url:"https://www.zoomcar.com/"},
      {name:"Revv",desc:"Self-drive cars & subscription plans",url:"https://www.revv.co.in/"},
      {name:"Savaari",desc:"Chauffeur-driven cabs & outstation trips",url:"https://www.savaari.com/"}
    ],
    tours:[
      {name:"GetYourGuide",desc:"Delhi-Agra same-day tour with guide & tickets",url:"https://www.getyourguide.com/"},
      {name:"Bookmundi",desc:"45+ Agra tour packages with reviews",url:"https://www.bookmundi.com/"},
      {name:"IRCTC Tourism",desc:"Golden Triangle tours covering Agra",url:"https://www.irctctourism.com/"}
    ]
  },
  "jaipur":{
    hotels:[
      {name:"Booking.com Jaipur",desc:"1,500+ hotels, homestays & heritage stays",url:"https://www.booking.com/city/in/jaipur.html"},
      {name:"The Leela Palace Jaipur",desc:"5-star luxury palace hotel",url:"https://www.theleela.com/the-leela-palace-jaipur/"},
      {name:"ITC Rajputana",desc:"Heritage luxury in the Pink City",url:"https://www.itchotels.com/in/en/itcrajputana-jaipur"},
      {name:"Samode Haveli",desc:"Authentic heritage haveli experience",url:"https://www.samode.com/samodehaveli/"}
    ],
    bikes:[
      {name:"Hire N Ride",desc:"Self-drive bikes from ₹600/day",url:"https://www.hirenride.com/"},
      {name:"Riderly",desc:"Rent Royal Enfield, TVS & Hero motorcycles",url:"https://riderly.com/"},
      {name:"SafarCabby",desc:"Verified vendors with 24-hour rental cycles",url:"https://www.safarcabby.com/"}
    ],
    cars:[
      {name:"Zoomcar",desc:"Self-drive cars in Jaipur",url:"https://www.zoomcar.com/"},
      {name:"Revv",desc:"Self-drive cars & subscription plans",url:"https://www.revv.co.in/"},
      {name:"Savaari",desc:"Chauffeur-driven cars & Rajasthan road trips",url:"https://www.savaari.com/"}
    ],
    tours:[
      {name:"GetYourGuide",desc:"Multi-day Rajasthan tours from Jaipur",url:"https://www.getyourguide.com/"},
      {name:"IRCTC Tourism",desc:"Royal Rajasthan tour packages",url:"https://www.irctctourism.com/"},
      {name:"Bookmundi",desc:"Rajasthan & Golden Triangle tours",url:"https://www.bookmundi.com/"}
    ]
  },
  "kerala":{
    hotels:[
      {name:"Booking.com Kerala",desc:"2,000+ properties across Kerala",url:"https://www.booking.com/region/in/kerala.html"},
      {name:"Kerala Tourism Houseboats",desc:"Govt-regulated houseboat booking",url:"https://www.keralatourism.org/houseboat-booking/"},
      {name:"Xandari Riverscapes",desc:"Luxury houseboat fleet in Alleppey",url:"https://www.floathomes.com/xandari-riverscapes/"},
      {name:"Indraprastham Houseboat",desc:"Premium houseboats, Alleppey backwaters",url:"https://www.cleartrip.com/hotels/details/indraprastham-houseboat-thanneermukkom-alleppey"}
    ],
    bikes:[
      {name:"GoWheelo",desc:"Bike rentals in Trivandrum & Kochi",url:"https://gowheelo.com/"},
      {name:"Riderly",desc:"Compare 600+ motorbike providers in Kochi",url:"https://riderly.com/"},
      {name:"Gearz Vehicle",desc:"Daily, weekly & monthly rentals",url:"https://gearzvehicle.com/"}
    ],
    cars:[
      {name:"Zoomcar",desc:"Self-drive cars across Kerala",url:"https://www.zoomcar.com/"},
      {name:"Savaari",desc:"Chauffeur-driven cars & Kerala road trips",url:"https://www.savaari.com/"},
      {name:"Avis India",desc:"Premium chauffeur-driven car rentals",url:"https://www.avis.com/"}
    ],
    tours:[
      {name:"KTDC (Kerala Tourism)",desc:"Official tour packages & houseboat cruises",url:"https://www.ktdc.com/"},
      {name:"IRCTC Tourism",desc:"Ravishing Keralam with houseboat stay",url:"https://www.irctctourism.com/"},
      {name:"Holidify",desc:"Kerala tour packages from ₹23,500",url:"https://www.holidify.com/"}
    ]
  },
  "ladakh":{
    hotels:[
      {name:"Booking.com Leh Ladakh",desc:"500+ hotels, guesthouses & camps",url:"https://www.booking.com/region/in/leh-ladakh.html"},
      {name:"The Grand Dragon Ladakh",desc:"Ladakh's premier 5-star luxury hotel",url:"https://www.thegranddragonladakh.com/"},
      {name:"Lchang Nang Retreat",desc:"Luxury eco-retreat in Nubra Valley",url:"https://www.lchangnang.com/"},
      {name:"Hotel Ladakh Greens",desc:"Organic retreat on Fort Road, Leh",url:"https://www.hotelscombined.in/Hotel/Hotel_Ladakh_Greens.htm"}
    ],
    bikes:[
      {name:"Ride & Fire (Leh)",desc:"Online booking for Himalayans & KTMs",url:"https://rideandfire.in/"},
      {name:"Ladakh Moto",desc:"Professional motorcycle rental in Leh",url:"https://ladakhmoto.com/"},
      {name:"Stonehead Bikes",desc:"Royal Enfield Himalayan for Ladakh routes",url:"https://www.stoneheadbikes.com/"}
    ],
    cars:[
      {name:"Zoomcar",desc:"Self-drive cars in Leh (limited availability)",url:"https://www.zoomcar.com/"},
      {name:"Savaari",desc:"Chauffeur-driven cars & Ladakh circuits",url:"https://www.savaari.com/"},
      {name:"Ladakh Taxi Union",desc:"Govt-approved local taxi operators",url:"https://www.ladakhtaxiunion.com/"}
    ],
    tours:[
      {name:"IRCTC Tourism",desc:"Best of Ladakh & Lively Leh packages",url:"https://www.irctctourism.com/"},
      {name:"Viator",desc:"Private luxury Leh Ladakh tour – all inclusive",url:"https://www.viator.com/"},
      {name:"G Adventures",desc:"Golden Triangle & Kashmir Horizons tour",url:"https://www.gadventures.com/"}
    ]
  }
};

const RICH = {
  "taj mahal":{remark:"Agra — the city of the Taj Mahal — was the capital of the Mughal Empire under Akbar, Jahangir and Shah Jahan.",altitude:false,locations:[
    {name:"Taj Mahal",tag:"MONUMENT",note:"Wonder of the World",img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",remark:"The iconic ivory-white marble mausoleum built by Emperor Shah Jahan.",timing:"Sunrise to sunset (closed Fri)",entry:"₹50 Indian / ₹1100 Foreign",season:"Oct – March",food:"Petha, Mughlai cuisine",cost:"₹200 per person",category:"Monument"},
    {name:"Agra Fort",tag:"FORT",note:"UNESCO Mughal fortress",img:"https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800",remark:"Massive 16th-century red sandstone fort.",timing:"6 AM – 6 PM",entry:"₹40 Indian / ₹550 Foreign",season:"Oct – March",food:"Mughlai snacks",cost:"₹150 per person",category:"Heritage"},
    {name:"Mehtab Bagh",tag:"GARDEN",note:"Best sunset view of Taj",img:"https://images.unsplash.com/photo-1548013146-72479768bada?w=800",remark:"Charbagh garden on the opposite bank of the Yamuna.",timing:"Sunrise – sunset",entry:"₹30 Indian / ₹300 Foreign",season:"Oct – March",food:"Street snacks",cost:"₹100 per person",category:"Garden"},
    {name:"Fatehpur Sikri",tag:"HERITAGE",note:"Abandoned Mughal capital",img:"https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800",remark:"Preserved ghost city built by Emperor Akbar.",timing:"6 AM – 6 PM",entry:"₹50 Indian / ₹610 Foreign",season:"Oct – March",food:"Rajasthani thali",cost:"₹500 per person",category:"Heritage"},
    {name:"Itmad-ud-Daulah",tag:"TOMB",note:"The 'Baby Taj'",img:"https://images.unsplash.com/photo-1615836247906-5e0e4c4b0e5c?w=800",remark:"Exquisite marble tomb that inspired the Taj Mahal.",timing:"Sunrise – sunset",entry:"₹30 Indian / ₹310 Foreign",season:"Oct – March",food:"Snacks nearby",cost:"₹150 per person",category:"Monument"},
    {name:"Kinari Bazaar",tag:"MARKET",note:"Traditional bazaar",img:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800",remark:"Old-city market famous for marble inlay work.",timing:"10 AM – 9 PM",entry:"Free",season:"Year-round",food:"Petha, Bedai, Jalebi",cost:"₹200 per person",category:"Market"}
  ]},
  "jaipur":{remark:"The Pink City, capital of Rajasthan — a royal blend of majestic forts, ornate palaces, vibrant bazaars.",altitude:false,locations:[
    {name:"Amber Fort",tag:"FORT",note:"Majestic hilltop fort",img:"https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",remark:"Stunning Rajput fort with panoramic views of Maota Lake.",timing:"8 AM – 5:30 PM",entry:"₹100 Indian / ₹500 Foreign",season:"Oct – March",food:"Rajasthani thali",cost:"₹400 per person",category:"Fort"},
    {name:"Hawa Mahal",tag:"PALACE",note:"Palace of Winds",img:"https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",remark:"The iconic 953-windowed pink sandstone palace.",timing:"9 AM – 4:30 PM",entry:"₹50 Indian / ₹200 Foreign",season:"Oct – March",food:"Local sweets",cost:"₹150 per person",category:"Palace"},
    {name:"City Palace",tag:"PALACE",note:"Royal residence",img:"https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",remark:"Official residence of the Jaipur royal family.",timing:"9:30 AM – 5 PM",entry:"₹200 Indian / ₹700 Foreign",season:"Oct – March",food:"Royal thali",cost:"₹300 per person",category:"Palace"},
    {name:"Jantar Mantar",tag:"HERITAGE",note:"Ancient observatory",img:"https://images.unsplash.com/photo-1591019479261-1a103585c559?w=800",remark:"UNESCO site with 19 astronomical instruments.",timing:"9 AM – 4:30 PM",entry:"₹200",season:"Oct – March",food:"Snacks",cost:"₹200 per person",category:"Observatory"},
    {name:"Nahargarh Fort",tag:"FORT",note:"Sunset viewpoint",img:"https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=800",remark:"Hilltop fort with the best panoramic views of Jaipur.",timing:"10 AM – 5:30 PM",entry:"₹50 Indian / ₹200 Foreign",season:"Oct – March",food:"Cafe food",cost:"₹200 per person",category:"Fort"},
    {name:"Albert Hall Museum",tag:"MUSEUM",note:"Oldest museum of Rajasthan",img:"https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800",remark:"Indo-Saracenic building housing artifacts.",timing:"9 AM – 5 PM (closed Mon)",entry:"₹40 Indian / ₹300 Foreign",season:"Year-round",food:"Local cafes",cost:"₹150 per person",category:"Museum"}
  ]},
  "kerala":{remark:"God's Own Country — serene backwaters, palm-lined canals, Ayurvedic traditions.",altitude:false,locations:[
    {name:"Alleppey Backwaters",tag:"BACKWATER",note:"Venice of the East",img:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",remark:"Network of canals best explored on a houseboat.",timing:"Day cruise / overnight",entry:"Houseboat from ₹6,000",season:"Sep – March",food:"Karimeen, Fish Curry",cost:"₹6,000 – ₹12,000",category:"Backwater"},
    {name:"Munnar",tag:"HILLS",note:"Tea plantation paradise",img:"https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800",remark:"Rolling green tea plantations and misty hills.",timing:"Anytime",entry:"Varies",season:"Sep – March",food:"Kerala breakfast, Tea",cost:"₹2,000 – ₹5,000",category:"Hills"},
    {name:"Kochi",tag:"CITY",note:"Queen of the Arabian Sea",img:"https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",remark:"Colonial-era port city with Chinese fishing nets.",timing:"All day",entry:"Varies by site",season:"Year-round",food:"Fish curry, Appam",cost:"₹1,500 – ₹3,000",category:"City"},
    {name:"Kovalam",tag:"BEACH",note:"Beach paradise",img:"https://images.unsplash.com/photo-1515307638821-8c2ece10bf6a?w=800",remark:"Crescent-shaped beach famous for its lighthouse.",timing:"All day",entry:"Free",season:"Sep – March",food:"Seafood, Kerala thali",cost:"₹1,000 – ₹3,000",category:"Beach"},
    {name:"Thekkady",tag:"WILDLIFE",note:"Periyar Tiger Reserve",img:"https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800",remark:"Home to the Periyar Tiger Reserve.",timing:"6 AM – 5 PM",entry:"₹45 Indian / ₹500 Foreign",season:"Sep – March",food:"Kerala meals",cost:"₹2,000 – ₹4,000",category:"Wildlife"},
    {name:"Wayanad",tag:"NATURE",note:"Green hills and waterfalls",img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",remark:"Lush forests, spice plantations and ancient caves.",timing:"Anytime",entry:"Varies",season:"Oct – March",food:"Tribal cuisine",cost:"₹2,000 – ₹4,000",category:"Nature"}
  ]},
  "ladakh":{remark:"A high-altitude desert in the Himalayas — dramatic landscapes, ancient monasteries, crystal-clear lakes.",altitude:true,locations:[
    {name:"Pangong Lake",tag:"LAKE",note:"The iconic blue lake",img:"https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800",remark:"High-altitude lake that changes color through the day.",timing:"Permit required",entry:"₹20 + permit",season:"May – Sep",food:"Maggi, Butter Tea",cost:"₹2,000 – ₹5,000",category:"Lake"},
    {name:"Nubra Valley",tag:"VALLEY",note:"Cold desert with dunes",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",remark:"Valley with sand dunes and Bactrian camels.",timing:"Daytime",entry:"Permit required",season:"May – Sep",food:"Tibetan food",cost:"₹2,500 – ₹5,000",category:"Valley"},
    {name:"Leh Palace",tag:"PALACE",note:"17th-century royal palace",img:"https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",remark:"Nine-storey palace overlooking Leh.",timing:"7 AM – 6 PM",entry:"₹20",season:"May – Sep",food:"Local cafes",cost:"₹300 per person",category:"Palace"},
    {name:"Khardung La",tag:"PASS",note:"Highest motorable road",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",remark:"At 5,359 m — one of the highest motorable passes.",timing:"Daytime",entry:"Free",season:"June – Sep",food:"Maggi stops",cost:"₹500 per person",category:"Pass"},
    {name:"Magnetic Hill",tag:"ATTRACTION",note:"Gravity-defying slope",img:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",remark:"Famous spot where vehicles appear to roll uphill.",timing:"Daytime",entry:"Free",season:"May – Sep",food:"Snacks",cost:"₹200 per person",category:"Attraction"},
    {name:"Hemis Monastery",tag:"MONASTERY",note:"Largest monastery in Ladakh",img:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",remark:"17th-century Buddhist monastery with Hemis Festival.",timing:"8 AM – 6 PM",entry:"₹50",season:"May – Sep",food:"Monastery food",cost:"₹300 per person",category:"Monastery"}
  ]}
};

const SVGS = {
  "taj mahal":`<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 100,80 Q 200,50 320,70 Q 450,95 560,70 Q 700,40 850,80 Q 920,110 930,200 Q 940,320 910,440 Q 880,540 780,560 Q 640,570 520,555 Q 380,540 240,560 Q 130,575 90,520 Q 55,440 60,320 Q 55,180 100,80 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><path d="M 780,80 Q 720,180 700,280 Q 680,400 720,500 Q 760,560 820,570" fill="none" stroke="#4a7ba8" stroke-width="8" opacity="0.7"/><text x="740" y="300" font-family="Georgia,serif" font-size="13" font-style="italic" fill="#2a5578" transform="rotate(-75 740 300)">Yamuna</text><g fill="none" stroke="#7a5230" stroke-width="2.6" stroke-dasharray="9 7" stroke-linecap="round" opacity="0.9"><path d="M 500,280 Q 580,280 660,280"/><path d="M 500,280 Q 440,310 380,340"/><path d="M 500,280 Q 570,220 640,160"/><path d="M 500,280 Q 450,350 420,400"/><path d="M 500,280 Q 350,350 180,440"/><path d="M 500,280 Q 560,360 620,430"/></g><circle cx="500" cy="280" r="11" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="500" y="258" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="bold" fill="#2a1a10">Agra</text><circle cx="660" cy="280" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="680" y="278" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Taj Mahal</text><circle cx="380" cy="340" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="230" y="338" text-anchor="end" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Agra Fort</text><circle cx="640" cy="160" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="620" y="140" text-anchor="end" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Mehtab Bagh</text><circle cx="180" cy="440" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="200" y="438" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Fatehpur Sikri</text><circle cx="420" cy="400" r="7" fill="#7a3a1e" stroke="#3a2f22" stroke-width="2"/><text x="340" y="420" text-anchor="end" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#2a1a10">Itmad-ud-Daulah</text><circle cx="620" cy="430" r="7" fill="#7a3a1e" stroke="#3a2f22" stroke-width="2"/><text x="640" y="434" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#2a1a10">Kinari Bazaar</text><g transform="translate(920,85)"><circle r="30" fill="#f2e8d0" stroke="#3a2f22" stroke-width="1.8"/><path d="M 0,-20 L 5,0 L 0,20 L -5,0 Z" fill="#c8541e" stroke="#3a2f22" stroke-width="1"/><text y="-46" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#3a2f22">N</text></g><text x="40" y="592" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">Agra Region • Hand-drawn offline map • Not to scale</text><text x="970" y="592" text-anchor="end" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">YatraX</text></svg>`,
  "jaipur":`<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 100,120 Q 200,70 340,80 Q 480,95 620,80 Q 760,60 880,110 Q 930,140 940,240 Q 950,360 920,470 Q 890,560 780,570 Q 640,585 500,570 Q 360,555 220,570 Q 130,580 90,520 Q 55,440 60,320 Q 55,200 100,120 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><path d="M 130,150 L 160,125 L 190,150 L 220,120 L 250,150 L 280,128 L 310,150" fill="none" stroke="#3a2f22" stroke-width="1.8"/><text x="220" y="110" text-anchor="middle" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#5a4838">ARAVALLI HILLS</text><g fill="none" stroke="#7a5230" stroke-width="2.6" stroke-dasharray="9 7" stroke-linecap="round" opacity="0.9"><path d="M 500,320 Q 440,260 350,200"/><path d="M 500,320 Q 400,290 300,255"/><path d="M 500,320 Q 540,330 580,340"/><path d="M 500,320 Q 490,360 480,400"/><path d="M 500,320 Q 560,380 620,440"/><path d="M 500,320 Q 400,400 300,460"/></g><circle cx="500" cy="320" r="11" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="500" y="298" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="bold" fill="#2a1a10">Jaipur</text><circle cx="350" cy="200" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="370" y="198" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Amber Fort</text><circle cx="300" cy="255" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="180" y="255" text-anchor="end" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Nahargarh</text><circle cx="580" cy="340" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="600" y="338" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Hawa Mahal</text><circle cx="480" cy="400" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="500" y="404" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">City Palace</text><circle cx="620" cy="440" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="640" y="444" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Jantar Mantar</text><circle cx="300" cy="460" r="8" fill="#7a3a1e" stroke="#3a2f22" stroke-width="2"/><text x="180" y="480" text-anchor="end" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Albert Hall</text><g transform="translate(920,85)"><circle r="30" fill="#f2e8d0" stroke="#3a2f22" stroke-width="1.8"/><path d="M 0,-20 L 5,0 L 0,20 L -5,0 Z" fill="#c8541e" stroke="#3a2f22" stroke-width="1"/><text y="-46" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#3a2f22">N</text></g><text x="40" y="592" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">Jaipur Region • Hand-drawn offline map • Not to scale</text><text x="970" y="592" text-anchor="end" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">YatraX</text></svg>`,
  "kerala":`<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 0,0 L 280,0 Q 250,100 270,220 Q 290,340 250,440 Q 220,520 250,600 L 0,600 Z" fill="#c8dce8" stroke="#3a2f22" stroke-width="2.2"/><text x="120" y="300" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" font-style="italic" fill="#2a5578" transform="rotate(-70 120 300)">ARABIAN SEA</text><path d="M 280,0 Q 250,100 270,220 Q 290,340 250,440 Q 220,520 250,600 L 1000,600 L 1000,0 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><path d="M 850,80 L 880,50 L 910,80 L 940,45 L 970,80 L 850,200 L 880,170 L 910,200 L 940,165 L 970,200 L 850,320 L 880,290 L 910,320 L 940,285 L 970,320 L 850,440 L 880,410 L 910,440 L 940,405 L 970,440" fill="none" stroke="#3a2f22" stroke-width="1.8" stroke-linecap="round"/><text x="910" y="570" text-anchor="middle" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#5a4838" letter-spacing="2">WESTERN GHATS</text><g fill="none" stroke="#7a5230" stroke-width="2.6" stroke-dasharray="9 7" stroke-linecap="round" opacity="0.9"><path d="M 460,330 Q 420,230 380,130"/><path d="M 460,330 Q 560,280 750,200"/><path d="M 460,330 Q 520,380 700,430"/><path d="M 460,330 Q 480,420 440,520"/><path d="M 380,130 Q 500,110 620,120"/></g><circle cx="380" cy="130" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="400" y="128" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Kochi</text><circle cx="460" cy="330" r="10" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="460" y="310" text-anchor="middle" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#2a1a10">Alleppey</text><circle cx="440" cy="520" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="460" y="518" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Kovalam</text><circle cx="750" cy="200" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="750" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Munnar</text><circle cx="700" cy="430" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="720" y="428" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#2a1a10">Thekkady</text><circle cx="620" cy="120" r="8" fill="#7a3a1e" stroke="#3a2f22" stroke-width="2"/><text x="640" y="124" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#2a1a10">Wayanad</text><g transform="translate(920,85)"><circle r="30" fill="#f2e8d0" stroke="#3a2f22" stroke-width="1.8"/><path d="M 0,-20 L 5,0 L 0,20 L -5,0 Z" fill="#c8541e" stroke="#3a2f22" stroke-width="1"/><text y="-46" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#3a2f22">N</text></g><text x="40" y="592" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">Kerala Coast • Hand-drawn offline map • Not to scale</text><text x="970" y="592" text-anchor="end" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">YatraX</text></svg>`,
  "ladakh":`<svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" class="offline-svg" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="600" fill="#f2e8d0"/><path d="M 80,90 Q 220,40 380,80 Q 520,110 660,70 Q 800,40 920,90 Q 960,140 950,260 Q 950,380 920,490 Q 880,570 760,560 Q 620,545 480,565 Q 340,580 200,560 Q 120,545 90,480 Q 60,380 60,260 Q 55,160 80,90 Z" fill="#e8dcc0" stroke="#3a2f22" stroke-width="2.2"/><path d="M 110,110 L 150,75 L 190,110 L 230,70 L 270,110 L 310,72 L 350,110 L 390,65 L 430,110 L 470,70 L 510,110 L 550,72 L 590,110 L 630,68 L 670,110 L 710,72 L 750,110" fill="none" stroke="#3a2f22" stroke-width="1.8" stroke-linecap="round"/><text x="500" y="40" text-anchor="middle" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#5a4838" letter-spacing="4">HIMALAYAS</text><path d="M 200,290 Q 400,280 600,290 Q 800,300 900,340" fill="none" stroke="#4a7ba8" stroke-width="6" stroke-linecap="round" opacity="0.8"/><text x="450" y="270" font-family="Georgia,serif" font-size="12" font-style="italic" fill="#2a5578">Indus River</text><g fill="none" stroke="#7a5230" stroke-width="2.6" stroke-dasharray="9 7" stroke-linecap="round" opacity="0.9"><path d="M 500,330 Q 500,260 500,220"/><path d="M 500,200 Q 550,170 600,150"/><path d="M 500,220 Q 400,220 350,300 Q 340,360 350,400"/><path d="M 500,330 Q 640,320 830,280"/><path d="M 500,330 Q 600,390 700,430"/></g><circle cx="500" cy="330" r="11" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="500" y="308" text-anchor="middle" font-family="Georgia,serif" font-size="17" font-weight="bold" fill="#2a1a10">Leh</text><circle cx="500" cy="200" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="500" y="180" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Khardung La</text><circle cx="600" cy="150" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="620" y="148" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Nubra Valley</text><circle cx="830" cy="280" r="9" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="830" y="258" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#2a1a10">Pangong Lake</text><circle cx="700" cy="430" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="720" y="434" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#2a1a10">Hemis</text><circle cx="350" cy="400" r="8" fill="#c8541e" stroke="#3a2f22" stroke-width="2"/><text x="220" y="404" text-anchor="end" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#2a1a10">Magnetic Hill</text><g transform="translate(920,85)"><circle r="30" fill="#f2e8d0" stroke="#3a2f22" stroke-width="1.8"/><path d="M 0,-20 L 5,0 L 0,20 L -5,0 Z" fill="#c8541e" stroke="#3a2f22" stroke-width="1"/><text y="-46" text-anchor="middle" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#3a2f22">N</text></g><text x="40" y="592" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">Ladakh Region • Hand-drawn offline map • Not to scale</text><text x="970" y="592" text-anchor="end" font-family="Georgia,serif" font-size="11" font-style="italic" fill="#6a5a48">YatraX</text></svg>`
};

const ORIGINS = ["Delhi","Mumbai","Kolkata","Chennai","Bangalore","Hyderabad"];
const params = new URLSearchParams(window.location.search);
const destId = params.get("id");

let currentKey = "";

/* ================= SLUGIFY ================= */
function slugify(name) {
    return String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function parentKeyFor(key) {
    return PARENT_KEYS[key] || key.replace(/\s+/g, "-");
}

/* ================= MAP ================= */
function openMap(){
    const m = document.getElementById("mapSection");
    if (!m) return;
    m.classList.add("show");
    setTimeout(() => m.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
}
function closeMap(){
    const m = document.getElementById("mapSection");
    if (m) m.classList.remove("show");
}
function showOnline(){
    document.getElementById("onlineMap").style.display = "block";
    document.getElementById("offlineMap").classList.remove("active");
    document.getElementById("onlineBtn").classList.add("active");
    document.getElementById("offlineBtn").classList.remove("active");
}
function showOffline(){
    document.getElementById("onlineMap").style.display = "none";
    document.getElementById("offlineMap").classList.add("active");
    document.getElementById("offlineBtn").classList.add("active");
    document.getElementById("onlineBtn").classList.remove("active");
}

/* ================= BUDGET ================= */
function calculateBudget(){
    const pIn = document.getElementById("persons");
    const oIn = document.getElementById("origin");
    if (!pIn || !oIn) return;

    const rawValue = pIn.value;
    const isDecimal = rawValue.includes(".") || rawValue.includes(",");
    const warn = document.getElementById("personsWarning");
    if (warn) warn.classList.toggle("show", isDecimal);

    const p = Math.max(0, parseInt(rawValue, 10) || 0);
    const origin = oIn.value;
    const b = BUDGET[currentKey];
    if (!b) return;

    if (p === 0) {
        ["travelCost","stayCost","activityCost","totalCost"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerText = "₹0";
        });
        return;
    }

    const t = b.travel[origin] || [0, 0];
    const tMin = t[0] * p, tMax = t[1] * p;
    const sMin = b.stay[0] * p, sMax = b.stay[1] * p;
    const aMin = b.act[0] * p, aMax = b.act[1] * p;

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

function updateTravelLabel(){
    const oIn = document.getElementById("origin");
    const label = document.getElementById("travelLabel");
    if (!oIn || !label) return;
    const name = DISPLAY_NAMES[currentKey] || currentKey;
    label.innerText = `Travel (${oIn.value} → ${name})`;
}

document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "origin") {
        updateTravelLabel();
        calculateBudget();
    }
});

/* ================= BOOKING ================= */
function renderBooking(key){
    const b = BOOKING[key];
    if (!b) return "";
    const cards = (list) => (list || []).map(item => `
        <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener" class="booking-card">
            <div class="booking-name">${escapeHtml(item.name)}</div>
            <div class="booking-desc">${escapeHtml(item.desc)}</div>
            <div class="booking-link">Visit →</div>
        </a>
    `).join("");
    return `
        <section class="booking-section">
            <div class="booking-heading">
                <h2>Where to Stay & Book</h2>
                <p>Curated hotels, rentals and tour packages for your trip.</p>
            </div>
            <h3 class="booking-subhead">🏨 Hotels & Stays</h3>
            <div class="booking-grid">${cards(b.hotels)}</div>
            <h3 class="booking-subhead">🏍️ Bike & Scooter Rentals</h3>
            <div class="booking-grid">${cards(b.bikes)}</div>
            <h3 class="booking-subhead">🚗 Car Rentals</h3>
            <div class="booking-grid">${cards(b.cars)}</div>
            <h3 class="booking-subhead">✈️ Tour & Travel Packages</h3>
            <div class="booking-grid">${cards(b.tours)}</div>
        </section>
    `;
}

/* ================= RENDER ================= */
function render(d){
    const key = (d.name || "").toLowerCase().trim();
    currentKey = key;
    const img = IMG_OVERRIDE[key] || d.imageUrl || "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1600";
    const displayName = DISPLAY_NAMES[key] || d.name;
    const parent = parentKeyFor(key);
    const rich = RICH[key] || null;
    const remark = rich ? rich.remark : (d.description || "");
    const heroSubtitle = remark.substring(0, 180) + (remark.length > 180 ? "..." : "");

    let locationsSection = "";
    if (rich && rich.locations) {
        locationsSection = `
            <div class="section" style="margin-top:0;">
                <h2>Popular Locations</h2>
                <p>Click a location to open its own page with reviews.</p>
                <div class="loc-grid">
                    ${rich.locations.map((l) => {
                        const slug = slugify(l.name);
                        return `
                        <div class="loc-card" onclick="window.location.href='location.html?dest=${parent}&loc=${slug}'">
                            <img src="${escapeHtml(l.img)}" alt="${escapeHtml(l.name)}"
                                 onerror="this.src='https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800'">
                            <div class="loc-info">
                                <div class="loc-tag">${escapeHtml(l.tag)}</div>
                                <h3>${escapeHtml(l.name)}</h3>
                                <p>${escapeHtml(l.note)}</p>
                            </div>
                        </div>`;
                    }).join("")}
                </div>
            </div>
        `;
    }

    let altitudeDisclaimer = "";
    if (rich && rich.altitude) {
        altitudeDisclaimer = `
            <div class="notice" style="border-color:#e5b95c;background:#2a2110;">
                <strong style="color:#e5b95c;">⚠️ High-Altitude Travel Disclaimer</strong>
                This destination is at high altitude. Older adults, pregnant travellers and young children may need extra caution.
            </div>
        `;
    }

    const gmaps = GMAPS_EMBED[key] || "";
    const svgMap = SVGS[key] || "";
    const bud = BUDGET[key];

    let mapSection = "";
    if (svgMap && gmaps) {
        mapSection = `
            <section class="map-section" id="mapSection">
                <div class="map-box">
                    <div class="map-heading">
                        <div>
                            <h2>${escapeHtml(displayName)} Map</h2>
                            <p>Explore online or use the preloaded offline map.</p>
                        </div>
                        <div class="map-buttons">
                            <button class="map-toggle active" id="onlineBtn" onclick="showOnline()">Online Map</button>
                            <button class="map-toggle" id="offlineBtn" onclick="showOffline()">Offline Map</button>
                            <button class="close-map" onclick="closeMap()">×</button>
                        </div>
                    </div>
                    <div class="map-frame">
                        <div id="onlineMap" class="online-map">
                            <iframe src="${escapeHtml(gmaps)}" loading="lazy" allowfullscreen></iframe>
                        </div>
                        <div id="offlineMap" class="offline-map">${svgMap}</div>
                    </div>
                </div>
            </section>
        `;
    }

    let budgetSection = "";
    if (bud) {
        budgetSection = `
            <section class="budget-section">
                <div class="budget">
                    <h2>${escapeHtml(displayName)} Budget Planner</h2>
                    <p class="budget-description">Choose your departure city and number of travellers.</p>
                    <div class="budget-inputs">
                        <div class="input-box">
                            <label>Departing From</label>
                            <select id="origin" onchange="calculateBudget()">
                                ${ORIGINS.map(o => `<option value="${o}">${o}</option>`).join("")}
                            </select>
                        </div>
                        <div class="input-box">
                            <label>Number of Travellers</label>
                            <input id="persons" type="number" min="0" step="1" value="2" oninput="calculateBudget()">
                            <div class="input-warning" id="personsWarning">⚠️ Please enter whole numbers only — decimals are not allowed.</div>
                        </div>
                    </div>
                    <div class="cost-grid">
                        <div class="cost"><span id="travelLabel">Travel (Delhi → ${escapeHtml(displayName)})</span><strong id="travelCost">₹0</strong></div>
                        <div class="cost"><span>Stay + Food</span><strong id="stayCost">₹0</strong></div>
                        <div class="cost"><span>Local + Activities</span><strong id="activityCost">₹0</strong></div>
                    </div>
                    <div class="total"><span>Estimated Total</span><strong id="totalCost">₹0</strong></div>
                    <div class="estimate-note"><b>ℹ️ Estimate only</b> — values are curated averages. Live API pricing is on our roadmap.</div>
                </div>
            </section>
        `;
    }

    document.getElementById("content").innerHTML = `
        <section class="hero" style="background-image:url('${escapeHtml(img)}')">
            <div class="hero-content">
                <div class="hero-small">${escapeHtml(d.state)} • INDIA</div>
                <h1>${escapeHtml(displayName)}</h1>
                <p>${escapeHtml(heroSubtitle)}</p>
            </div>
        </section>
        <div class="container">
            ${locationsSection}
            ${altitudeDisclaimer}
            ${mapSection}
            ${budgetSection}
            ${renderBooking(key)}
        </div>
    `;

    document.title = "YatraX | " + displayName;

    if (bud) {
        calculateBudget();
        updateTravelLabel();
    }

    // Init reviews for this destination
    document.getElementById("reviewsSection").style.display = "block";
    document.getElementById("reviewsTitle").innerText = "Reviews for " + displayName;
    initReviews("dest_" + parent);
}

/* ================= INIT ================= */
if (!destId) {
    document.getElementById("content").innerHTML =
        '<div class="loading-msg" style="color:#e5b95c;">No destination specified.</div>';
} else {
    fetch(API_BASE + "/destinations/" + destId)
        .then(r => { if (!r.ok) throw new Error("Not found"); return r.json(); })
        .then(d => render(d))
        .catch(err => {
            document.getElementById("content").innerHTML =
                '<div class="loading-msg" style="color:#e5b95c;">⚠️ Could not load destination.</div>';
            console.error(err);
        });
}