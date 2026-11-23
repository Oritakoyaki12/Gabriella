
/* ==========================================
   GABRIELLA - TESTING SITE DIRECTORY
========================================== */

/*
  IMPORTANT:
  Sample directory data for demonstration.
  Verify all facility information before publishing.
*/

const testingSites = [
  {
    id: 1,
    name: "Klinika Project 7",
    city: "Quezon City",
    barangay: "Veterans Village",
    address:
      "39 Bansalangin St., Brgy. Veterans Village, Project 7, Quezon City",

    description:
      "A Quezon City social hygiene clinic and primary HIV care facility.",

    services: [
      "HIV testing",
      "STI services"
    ],

    tags: [
      "free"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=Klinika+Project+7+Quezon+City&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=Klinika+Project+7+Quezon+City",

    source:
      "https://quezoncity.gov.ph/qcitizen-guides/qc-social-hygiene-and-sundown-clinics/"
  },

  {
    id: 2,
    name: "Batasan Social Hygiene Clinic",
    city: "Quezon City",
    barangay: "Batasan Hills",
    address:
      "2 IBP Road, Brgy. Batasan Hills, Quezon City",

    description:
      "A social hygiene clinic listed by the Quezon City Health Department.",

    services: [
      "HIV testing",
      "STI services"
    ],

    tags: [
      "free"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=Batasan+Social+Hygiene+Clinic&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=Batasan+Social+Hygiene+Clinic+Quezon+City",

    source:
      "https://quezoncity.gov.ph/qcitizen-guides/qc-social-hygiene-and-sundown-clinics/"
  },

  {
    id: 3,
    name: "Bernardo Social Hygiene Clinic",
    city: "Quezon City",
    barangay: "Pinagkaisahan",
    address:
      "Pinagkaisahan, Quezon City",

    description:
      "A social hygiene clinic included in the city's healthcare directory.",

    services: [
      "HIV testing",
      "STI services"
    ],

    tags: [
      "free"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=Bernardo+Social+Hygiene+Clinic+Quezon+City&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=Bernardo+Social+Hygiene+Clinic+Quezon+City",

    source:
      "https://quezoncity.gov.ph/qcitizen-guides/qc-social-hygiene-and-sundown-clinics/"
  },

  {
    id: 4,
    name: "A.J. Maximo Social Hygiene Clinic",
    city: "Quezon City",
    barangay: "Novaliches",
    address:
      "Maagap St., Doña Isaura Subdivision, Novaliches, Quezon City",

    description:
      "A social hygiene clinic and primary HIV care facility listed in Quezon City.",

    services: [
      "HIV testing",
      "STI services"
    ],

    tags: [
      "free"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=AJ+Maximo+Social+Hygiene+Clinic&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=AJ+Maximo+Social+Hygiene+Clinic+Quezon+City",

    source:
      "https://quezoncity.gov.ph/qcitizen-guides/qc-social-hygiene-and-sundown-clinics/"
  },

  {
    id: 5,
    name: "LoveYourself Anglo",
    city: "Mandaluyong City",
    barangay: "Highway Hills",
    address:
      "Unit 5, 3/F Anglo Building, 715-A Shaw Boulevard, Mandaluyong City",

    description:
      "A community center offering free HIV-related services.",

    services: [
      "HIV testing",
      "HIV counseling"
    ],

    tags: [
      "free",
      "walk-in"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=LoveYourself+Anglo+Mandaluyong&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=LoveYourself+Anglo+Mandaluyong",

    source:
      "https://loveyourself.ph/hubsclinics/"
  },

  {
    id: 6,
    name: "LoveYourself Welcome",
    city: "Manila",
    barangay: "Sampaloc",
    address:
      "858 Blumentritt Road, Brgy. 528, Sampaloc, Manila",

    description:
      "A community center providing free HIV testing and related services.",

    services: [
      "HIV testing",
      "HIV counseling"
    ],

    tags: [
      "free",
      "walk-in"
    ],

    hours: null,
    contact: null,

    map:
      "https://www.google.com/maps?q=LoveYourself+Welcome+Manila&output=embed",

    directions:
      "https://www.google.com/maps/search/?api=1&query=LoveYourself+Welcome+Manila",

    source:
      "https://loveyourself.ph/hubsclinics/"
  }
];


/* ==========================================
   DOM ELEMENTS
========================================== */

const siteList = document.getElementById("sl");
const searchInput = document.getElementById("q");
const searchButton = document.getElementById("qb");
const siteMap = document.getElementById("site-map");
const siteCount = document.getElementById("site-count");

const filterButtons = document.querySelectorAll(
  "#chips .chip"
);


/* ==========================================
   FILTER STATE
========================================== */

let activeFilters = new Set();


/* ==========================================
   ESCAPE HTML
   Prevent unsafe HTML injection in listings.
========================================== */

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );
}


/* ==========================================
   SEARCH AND FILTER
========================================== */

function getFilteredSites() {

  const query = searchInput.value
    .toLowerCase()
    .trim();

  return testingSites.filter(site => {

    const searchableContent = [
      site.name,
      site.city,
      site.barangay,
      site.address,
      ...site.services
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      searchableContent.includes(query);

    const matchesFilters = [...activeFilters].every(
      filter => {

        if (filter === "hiv testing") {
          return site.services.includes("HIV testing");
        }

        if (filter === "sti services") {
          return site.services.includes("STI services");
        }

        return site.tags.includes(filter);
      }
    );

    return matchesSearch && matchesFilters;
  });
}


/* ==========================================
   RENDER SITE CARDS
========================================== */

function renderSites() {

  const filteredSites = getFilteredSites();

  siteCount.textContent =
    `${filteredSites.length} testing site${filteredSites.length !== 1 ? "s" : ""} found`;

  if (filteredSites.length === 0) {

    siteList.innerHTML = `
      <div class="empty-state">

        <h3>No testing sites found.</h3>

        <p>
          Try searching for another city or barangay,
          or remove some filters.
        </p>

      </div>
    `;

    return;
  }

  siteList.innerHTML = filteredSites.map(site => {

    const serviceTags = site.services
      .map(service => `
        <span class="site-tag">
          ${escapeHTML(service)}
        </span>
      `)
      .join("");

    const availabilityTags = site.tags
      .map(tag => `
        <span class="site-tag">
          ${escapeHTML(tag)}
        </span>
      `)
      .join("");

    return `

      <article class="panel testing-site">

        <span class="tag">
          ${escapeHTML(site.city)}
        </span>

        <h2>
          ${escapeHTML(site.name)}
        </h2>

        <p>
          ${escapeHTML(site.address)}
        </p>

        <p>
          ${escapeHTML(site.description)}
        </p>

        <div class="site-services">

          <strong>Listed services</strong>

          <div class="site-tags">
            ${serviceTags}
          </div>

        </div>

        <div class="site-tags">
          ${availabilityTags}
        </div>

        <p class="site-meta">
          Operating hours and contact details:
          Please confirm with the facility.
        </p>

        <div class="site-actions">

          <a
            href="${escapeHTML(site.directions)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions →
          </a>

          <a
            href="${escapeHTML(site.source)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official source →
          </a>

        </div>

        <button
          type="button"
          class="btn"
          style="margin-top: 18px"
          data-map-id="${site.id}"
        >
          View on map
        </button>

      </article>

    `;

  }).join("");

  updateMap(filteredSites);
}


/* ==========================================
   MAP INTERACTION
========================================== */

function updateMap(sites) {

  if (!sites.length) return;

  const firstSite = sites[0];

  siteMap.src = firstSite.map;
}


/* ==========================================
   SEARCH EVENTS
========================================== */

searchButton.addEventListener(
  "click",
  renderSites
);

searchInput.addEventListener(
  "input",
  renderSites
);

searchInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      renderSites();
    }

  }
);


/* ==========================================
   FILTER EVENTS
========================================== */

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.t;

    if (activeFilters.has(filter)) {

      activeFilters.delete(filter);

      button.setAttribute(
        "aria-pressed",
        "false"
      );

    } else {

      activeFilters.add(filter);

      button.setAttribute(
        "aria-pressed",
        "true"
      );

    }

    renderSites();

  });

});


/* ==========================================
   MAP BUTTON EVENTS
========================================== */

siteList.addEventListener("click", event => {

  const button = event.target.closest("[data-map-id]");

  if (!button) return;

  const siteId = Number(button.dataset.mapId);

  const selectedSite = testingSites.find(
    site => site.id === siteId
  );

  if (!selectedSite) return;

  siteMap.src = selectedSite.map;

  siteMap.title = `Map showing ${selectedSite.name}`;

  siteMap.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


/* ==========================================
   INITIAL RENDER
========================================== */

renderSites();
