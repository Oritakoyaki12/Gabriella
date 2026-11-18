const A = {
  hiv: {
    tag: "understanding HIV",
    h: 'hiv, explained.<br><span class="co">no shame.</span>',
    s: [
      [
        "what is HIV?",
        "HIV is a virus that attacks the immune system. With treatment, people with HIV can live long, healthy lives.",
      ],
      [
        "how it spreads, and how it doesn’t",
        "HIV spreads through blood, semen, pre-seminal fluid, rectal fluids, vaginal fluids and breast milk. This happens most often through sex without a condom or PrEP, through shared needles, and from parent to baby during pregnancy, birth or breastfeeding (treatment greatly lowers that risk). It does <b>not</b> spread through hugging, sharing food, toilet seats or mosquito bites.",
      ],
      ["M", "myth vs fact"],
      [
        "treatment works",
        "Treatment called ART keeps the amount of virus in the body very low. When it stays undetectable through steady treatment and regular viral load tests, HIV cannot be passed on to a partner through sex.",
      ],
      [
        "what to do next",
        "Condoms, PrEP, PEP (after a possible exposure, ideally within 72 hours) and regular testing all lower your risk. Waiting is a valid choice too. Testing is the only way to know your status, and it’s quick.",
      ],
    ],
    rel: ["safe", "protect", "test"],
  },
  safe: {
    tag: "safe sex essentials",
    h: 'your body.<br><span class="co">your pace.</span>',
    s: [
      [
        "consent comes first",
        "Consent is clear, freely given and can be taken back anytime. You never owe anyone sex, and choosing to wait is valid.",
      ],
      [
        "contraception and protection",
        "Condoms help prevent pregnancy and many infections, including HIV. Other methods, like pills or implants, prevent pregnancy but not HIV.",
      ],
      [
        "talk about it",
        "Talking with a partner about boundaries, protection and testing is part of respect. A health worker can answer questions without judgment.",
      ],
    ],
    rel: ["hiv", "protect", "test"],
  },
  protect: {
    tag: "protection and prevention",
    h: 'lower your risk.<br><span class="co">your way.</span>',
    s: [
      [
        "condoms",
        "Used correctly every time, condoms are a strong barrier against HIV and other infections.",
      ],
      [
        "PrEP and PEP",
        "PrEP is medicine taken before possible exposure. PEP is taken after a possible exposure, ideally within 72 hours. Both need a health provider, so ask a site near you about availability.",
      ],
      [
        "regular testing and not sharing needles",
        "Testing regularly helps you and your partners stay informed. Never share needles or syringes.",
      ],
    ],
    rel: ["hiv", "safe", "test"],
  },
  test: {
    tag: "testing and support",
    h: 'know your status.<br><span class="co">get support.</span>',
    s: [
      [
        "how testing works",
        "A quick test, usually a finger-prick or blood sample, with a short chat before and after. Very recent exposure may not show yet, so a provider can tell you when to retest.",
      ],
      [
        "if the result is positive",
        "HIV is manageable with treatment (ART). Staying on treatment helps you stay healthy and keeps the virus from being passed on. Support groups and counselors can walk with you.",
      ],
      [
        "your privacy",
        "Ask any site how they protect your information before you go. Your health information is yours.",
      ],
    ],
    rel: ["hiv", "safe", "protect"],
  },
};

const N = {
  hiv: "understanding HIV",
  safe: "safe sex essentials",
  protect: "protection and prevention",
  test: "testing and support",
};

const S = [
  [
    "Testing site name A",
    "[Street address], [City]",
    "[Opening hours]",
    ["free", "walk-in"],
    "c-cream",
  ],
  [
    "Testing site name B",
    "[Street address], [City]",
    "[Opening hours]",
    ["youth-friendly", "online booking"],
    "c-pink",
  ],
  [
    "Testing site name C",
    "[Street address], [City]",
    "[Opening hours]",
    ["free", "youth-friendly"],
    "c-peri",
  ],
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function route() {
  const pageName = document.body.dataset.page;
  const articleKey = location.hash.slice(1).replace(/^a-/, "") || "hiv";

  if (pageName === "article") {
    art(A[articleKey] ? articleKey : "hiv");
  }
  if (pageName === "test") initTestPage();

  $$(".links a").forEach((link) => {
    const active = link.dataset.r === (pageName === "article" ? "learn" : pageName);
    link.classList.toggle("on", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  initForms();
  applyLanguage();
}

function art(key) {
  const article = A[key];
  $("#atag").textContent = article.tag;
  $("#ah").innerHTML = article.h;

  let output =
    '<p><span class="mini">Reviewed by [Partner name]</span><span class="mini">Updated [date]</span></p>';

  article.s.forEach((section) => {
    if (section[0] === "M") {
      output += "<h2>myth vs fact</h2>";
      const myths = [
        [
          "You can get HIV from hugging or sharing food.",
          "HIV isn’t spread through casual contact like hugs, shared meals or toilet seats.",
        ],
        [
          "HIV is a death sentence.",
          "With treatment, people with HIV can live long, healthy lives.",
        ],
        [
          "You can tell who has HIV by looking.",
          "Only a test can tell. Many people have no symptoms for years.",
        ],
      ];
      output += myths
        .map(
          (item) => `
        <div class="mf">
          <div style="background:var(--coral)"><small>myth</small>${item[0]}</div>
          <div style="background:var(--peri)"><small>fact</small>${item[1]}</div>
        </div>
      `,
        )
        .join("");
    } else {
      output += `<h2>${section[0]}</h2><p>${section[1]}</p>`;
    }
  });

  output +=
    '<p class="note" style="margin-top:20px">Draft copy for the prototype. Have partner health workers review it before publishing.</p>';
  $("#ab").innerHTML = output;
  $("#rel").innerHTML = article.rel
    .map(
      (key) =>
        `<p style="margin:6px 0"><a href="article.html#a-${key}"><b>${N[key]}</b></a></p>`,
    )
    .join("");
}

let selectedFilters = new Set();

function sites() {
  const query = $("#q").value.toLowerCase();
  const results = S.filter(
    (site) =>
      [...selectedFilters].every((filter) => site[3].includes(filter)) &&
      (!query || (site[0] + site[1]).toLowerCase().includes(query)),
  );

  $("#sl").innerHTML = results.length
    ? results
        .map(
          (site) => `
      <div class="card ${site[4]} site">
        <span class="sample">sample data</span>
        <h3>${site[0]}</h3>
        <p>${site[1]}<br>${site[2]}</p>
        ${site[3].map((filter) => `<span class="mini">${filter}</span>`).join("")}
        <p class="note" style="margin-top:10px">Last verified: [date]</p>
      </div>
    `,
        )
        .join("")
    : '<div class="panel">No sample sites match. Try fewer filters or another city.</div>';
}

function initTestPage() {
  $$(".chip").forEach((chip) => {
    chip.onclick = () => {
      const filter = chip.dataset.t;
      selectedFilters.has(filter)
        ? selectedFilters.delete(filter)
        : selectedFilters.add(filter);
      chip.setAttribute("aria-pressed", selectedFilters.has(filter));
      sites();
    };
  });
  $("#qb").onclick = sites;
  $("#q").oninput = sites;
  sites();
}

function initForms() {
  $$("form").forEach((form) => {
    form.onsubmit = (event) => {
      event.preventDefault();
      form.style.display = "none";
      $("#" + form.dataset.ok).style.display = "block";
    };
  });
}

let translated = false;
try {
  translated = localStorage.getItem("glang") === "fil";
} catch (error) {}

function applyLanguage() {
  $$("[data-fil]").forEach((element) => {
    if (!element.dataset.en) element.dataset.en = element.textContent;
    element.textContent = translated ? element.dataset.fil : element.dataset.en;
  });
  document.documentElement.lang = translated ? "fil" : "en";
  $("#lang").setAttribute("aria-pressed", String(translated));
  $$(".language-option", $("#lang")).forEach((option) => {
    const active =
      option.dataset.language === (translated ? "fil" : "en");
    option.classList.toggle("active", active);
  });
  $("#lang").setAttribute(
    "aria-label",
    translated ? "Switch to English" : "Switch to Filipino",
  );
  $("#lang").setAttribute(
    "title",
    translated ? "Switch to English" : "Switch to Filipino",
  );
}

$("#lang").onclick = () => {
  translated = !translated;
  try {
    localStorage.setItem("glang", translated ? "fil" : "en");
  } catch (error) {}
  applyLanguage();
};

const themeButton = $("#theme");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "light" ? "☾" : "☀";
  const nextTheme = theme === "light" ? "dark" : "light";
  themeButton.title = `Switch to ${nextTheme} mode`;
  themeButton.setAttribute(
    "aria-label",
    `Switch to ${nextTheme} mode`,
  );
  try {
    localStorage.setItem("gtheme", theme);
  } catch (error) {}
}

let savedTheme = "dark";
try {
  savedTheme = localStorage.getItem("gtheme") || "dark";
} catch (error) {}
setTheme(savedTheme);

themeButton.onclick = () => {
  setTheme(
    document.documentElement.dataset.theme === "light" ? "dark" : "light",
  );
};

addEventListener("hashchange", route);
route();
