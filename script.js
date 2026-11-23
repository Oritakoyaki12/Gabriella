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

const AF = {
  hiv: {
    tag: "pag-unawa sa HIV",
    h: 'ipinaliwanag ang hiv.<br><span class="co">walang kahihiyan.</span>',
    s: [
      ["ano ang HIV?", "Ang HIV ay virus na umaatake sa immune system. Sa tulong ng gamutan, maaaring mamuhay nang mahaba at malusog ang mga taong may HIV."],
      ["paano ito naipapasa at hindi naipapasa", "Naipapasa ang HIV sa pamamagitan ng dugo, semilya, likidong pre-seminal, likido sa puwit at puwerta, at gatas ng ina. Karaniwang nangyayari ito sa pakikipagtalik nang walang condom o PrEP, paggamit ng karayom ng iba, at mula magulang papunta sa sanggol habang nagbubuntis, nanganganak, o nagpapasuso. Hindi ito naipapasa sa pagyakap, pagsasalo ng pagkain, paggamit ng inidoro, o kagat ng lamok."],
      ["M", "mito at katotohanan"],
      ["epektibo ang gamutan", "Pinabababa ng ART ang dami ng virus sa katawan. Kapag nananatiling hindi matukoy ang virus dahil sa tuloy-tuloy na gamutan at regular na pagsusuri, hindi naipapasa ang HIV sa kapareha sa pamamagitan ng pakikipagtalik."],
      ["ano ang susunod na maaari mong gawin", "Nakababawas ng panganib ang condom, PrEP, PEP (pagkatapos ng posibleng exposure, pinakamainam sa loob ng 72 oras), at regular na pagpapasuri. Maaari ka ring maghintay. Ang pagpapasuri lang ang makapagsasabi ng iyong status, at mabilis ito."],
    ],
    myths: [
      ["Maaaring makakuha ng HIV sa pagyakap o pagsasalo ng pagkain.", "Hindi naipapasa ang HIV sa karaniwang pakikisalamuha gaya ng pagyakap, pagsasalo ng pagkain, o paggamit ng inidoro."],
      ["Katapusan na ng buhay kapag may HIV.", "Sa tulong ng gamutan, maaaring mamuhay nang mahaba at malusog ang mga taong may HIV."],
      ["Malalaman sa itsura kung sino ang may HIV.", "Pagsusuri lang ang makapagsasabi. Maraming tao ang walang sintomas sa loob ng maraming taon."],
    ],
  },
  safe: {
    tag: "ligtas na pakikipagtalik",
    h: 'katawan mo.<br><span class="co">sarili mong bilis.</span>',
    s: [
      ["pahintulot muna", "Dapat malinaw at kusang-loob ang pahintulot, at maaari itong bawiin anumang oras. Hindi mo obligasyong makipagtalik, at ayos lang piliing maghintay."],
      ["kontrasepsyon at proteksyon", "Nakakatulong ang condom na maiwasan ang pagbubuntis at maraming impeksyon, kabilang ang HIV. Ang ibang paraan, gaya ng pills o implants, ay pumipigil sa pagbubuntis pero hindi sa HIV."],
      ["pag-usapan ito", "Bahagi ng paggalang ang pakikipag-usap sa kapareha tungkol sa hangganan, proteksyon, at pagpapasuri. Maaaring sumagot ang health worker nang walang panghuhusga."],
    ],
  },
  protect: {
    tag: "proteksyon at pag-iwas",
    h: 'bawasan ang panganib.<br><span class="co">sa paraang gusto mo.</span>',
    s: [
      ["condom", "Kapag ginamit nang tama sa bawat pagkakataon, mabisang panangga ang condom laban sa HIV at iba pang impeksyon."],
      ["PrEP at PEP", "Gamot ang PrEP na iniinom bago ang posibleng exposure. Ini-inom naman ang PEP pagkatapos ng posibleng exposure, pinakamainam sa loob ng 72 oras. Kailangan ng health provider para sa dalawa; magtanong sa malapit na pasilidad tungkol sa availability."],
      ["regular na pagpapasuri at huwag maghiraman ng karayom", "Nakakatulong ang regular na pagpapasuri para maging may alam ka at ang mga kapareha mo. Huwag maghiraman ng karayom o hiringgilya."],
    ],
  },
  test: {
    tag: "pagpapasuri at suporta",
    h: 'alamin ang status mo.<br><span class="co">humingi ng suporta.</span>',
    s: [
      ["paano isinasagawa ang pagsusuri", "Karaniwan itong mabilis na pagsusuri gamit ang tusok sa daliri o sample ng dugo, at maikling pag-uusap bago at pagkatapos. Maaaring hindi makita agad ang napakabagong exposure; sasabihin ng provider kung kailan dapat magpasuri muli."],
      ["kung positibo ang resulta", "Nagagamot ang HIV sa pamamagitan ng ART. Nakakatulong ang tuloy-tuloy na gamutan para manatiling malusog at hindi maipasa ang virus. Makakasama mo ang mga support group at counselor."],
      ["iyong privacy", "Bago pumunta, itanong sa pasilidad kung paano nila pinoprotektahan ang impormasyon mo. Sa iyo ang impormasyon tungkol sa kalusugan mo."],
    ],
  },
};

const NFIL = {
  hiv: "pag-unawa sa HIV",
  safe: "ligtas na pakikipagtalik",
  protect: "proteksyon at pag-iwas",
  test: "pagpapasuri at suporta",
};

const UI_FIL = {
  "Reviewed by [Partner name]": "Sinuri ni [Pangalan ng partner]",
  "Updated [date]": "Na-update noong [petsa]",
  "myth vs fact": "mito at katotohanan",
  myth: "mito",
  fact: "katotohanan",
  "Draft copy for the prototype. Have partner health workers review it before publishing.": "Burador lamang para sa prototype. Ipasuri ito sa mga health worker bago ilathala.",
  "sample data": "halimbawang datos",
  "Last verified: [date]": "Huling sinuri: [petsa]",
  "No sample sites match. Try fewer filters or another city.": "Walang tugmang sample na pasilidad. Bawasan ang mga filter o sumubok ng ibang lungsod.",
  "free": "libre",
  "walk-in": "walang appointment",
  "youth-friendly": "angkop para sa kabataan",
  "online booking": "online na pagpapa-book",
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
  const copy = translated ? AF[key] : article;
  $("#atag").textContent = copy.tag;
  $("#ah").innerHTML = copy.h;

  let output =
    `<p><span class="mini">${translated ? UI_FIL["Reviewed by [Partner name]"] : "Reviewed by [Partner name]"}</span><span class="mini">${translated ? UI_FIL["Updated [date]"] : "Updated [date]"}</span></p>`;

  copy.s.forEach((section) => {
    if (section[0] === "M") {
      output += `<h2>${translated ? UI_FIL["myth vs fact"] : "myth vs fact"}</h2>`;
      const myths = translated ? copy.myths : [
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
          <div style="background:var(--coral)"><small>${translated ? UI_FIL.myth : "myth"}</small>${item[0]}</div>
          <div style="background:var(--peri)"><small>${translated ? UI_FIL.fact : "fact"}</small>${item[1]}</div>
        </div>
      `,
        )
        .join("");
    } else {
      output += `<h2>${section[0]}</h2><p>${section[1]}</p>`;
    }
  });

  output += `<p class="note" style="margin-top:20px">${translated ? UI_FIL["Draft copy for the prototype. Have partner health workers review it before publishing."] : "Draft copy for the prototype. Have partner health workers review it before publishing."}</p>`;
  $("#ab").innerHTML = output;
  $("#rel").innerHTML = article.rel
    .map(
      (key) =>
        `<p style="margin:6px 0"><a href="article.html#a-${key}"><b>${translated ? NFIL[key] : N[key]}</b></a></p>`,
    )
    .join("");
}

let selectedFilters = new Set();
let siteAnimationTimer;

function sites(animate = false) {
  const query = $("#q").value.toLowerCase();
  const results = S.filter(
    (site) =>
      [...selectedFilters].every((filter) => site[3].includes(filter)) &&
      (!query || (site[0] + site[1]).toLowerCase().includes(query)),
  );

  const resultsList = $("#sl");
  resultsList.innerHTML = results.length
    ? results
        .map(
          (site) => `
      <div class="card ${site[4]} site">
        <span class="sample">${translated ? UI_FIL["sample data"] : "sample data"}</span>
        <h3>${site[0]}</h3>
        <p>${site[1]}<br>${site[2]}</p>
        ${site[3].map((filter) => `<span class="mini">${translated ? UI_FIL[filter] : filter}</span>`).join("")}
        <p class="note" style="margin-top:10px">${translated ? UI_FIL["Last verified: [date]"] : "Last verified: [date]"}</p>
      </div>
    `,
        )
        .join("")
    : `<div class="panel">${translated ? UI_FIL["No sample sites match. Try fewer filters or another city."] : "No sample sites match. Try fewer filters or another city."}</div>`;

  if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    clearTimeout(siteAnimationTimer);
    resultsList.classList.remove("is-updating");
    void resultsList.offsetWidth;
    resultsList.classList.add("is-updating");
    siteAnimationTimer = setTimeout(
      () => resultsList.classList.remove("is-updating"),
      220,
    );
  }
}

function initTestPage() {
  $$(".chip").forEach((chip) => {
    chip.onclick = () => {
      const filter = chip.dataset.t;
      selectedFilters.has(filter)
        ? selectedFilters.delete(filter)
        : selectedFilters.add(filter);
      chip.setAttribute("aria-pressed", selectedFilters.has(filter));
      sites(true);
    };
  });
  $("#qb").onclick = () => sites(true);
  $("#q").oninput = () => sites();
  sites();
}

function initForms() {
  $$("form").forEach((form) => {
    form.onsubmit = (event) => {
      event.preventDefault();
      const confirmation = document.getElementById(form.dataset.ok);
      if (!confirmation) {
        throw new Error(`Missing form confirmation: ${form.dataset.ok}`);
      }
      form.style.display = "none";
      confirmation.style.display = "block";
      confirmation.classList.add("is-visible");
    };
  });
}

function initLearnCardAnimation() {
  const grid = $(".learn-topic-grid");
  if (
    !grid ||
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  grid.classList.add("is-pending");
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        grid.classList.remove("is-pending");
        grid.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.15 },
  );
  observer.observe(grid);
}

function initLearnCardPopovers() {
  $$(".learn-topic-grid > .card").forEach((card) => {
    let timer;
    const showPreviewAfterDelay = () => {
      clearTimeout(timer);
      timer = setTimeout(() => card.classList.add("is-preview-open"), 500);
    };
    const hidePreview = () => {
      clearTimeout(timer);
      timer = undefined;
      card.classList.remove("is-preview-open");
    };

    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") showPreviewAfterDelay();
    });
    card.addEventListener("pointerleave", () => {
      if (!card.matches(":focus-within")) hidePreview();
    });
    card.addEventListener("focus", showPreviewAfterDelay);
    card.addEventListener("blur", () => {
      if (!card.matches(":hover")) hidePreview();
    });
  });
}

function initWhyStat() {
  const card = $(".why-stat-card");
  const counter = $(".why-stat-card [data-count]");
  if (!card || !counter) return;

  const target = Number(counter.dataset.count);
  if (!Number.isSafeInteger(target) || target < 0) {
    throw new Error("The why-it-matters counter needs a non-negative integer.");
  }

  const finalValue = new Intl.NumberFormat().format(target);
  counter.textContent = finalValue;

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    card.classList.add("is-visible");
    return;
  }

  counter.textContent = "0";
  card.classList.add("is-pending");

  const animate = () => {
    card.classList.remove("is-pending");
    card.classList.add("is-visible");

    const startTime = performance.now();
    const duration = 1400;
    const updateCount = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      counter.textContent = new Intl.NumberFormat().format(
        Math.floor(target * easedProgress),
      );
      if (progress < 1) requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          animate();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(card);
  } else {
    animate();
  }
}

function initHomeExploreAnimation() {
  const section = $(".home-explore-section");
  const content = section && section.querySelector(".home-explore");
  if (!content || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const animate = () => content.classList.add("is-visible");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          animate();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
  } else {
    animate();
  }
}

function initHomeFeatureAnimations() {
  const sections = $$(".home-myths-section, .home-featured-section");
  if (
    !sections.length ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  sections.forEach((section) => observer.observe(section));
}

function initHomeBackgroundParallax() {
  if (
    document.body.dataset.page !== "home" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  let scheduled = false;
  const updatePosition = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    const offset = -scrollProgress * 180;
    document.documentElement.style.setProperty(
      "--home-parallax-y",
      `${offset}px`,
    );
    scheduled = false;
  };

  addEventListener(
    "scroll",
    () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updatePosition);
    },
    { passive: true },
  );
  updatePosition();
}

let translated = false;
try {
  translated = localStorage.getItem("glang") === "fil";
} catch (error) {}

function applyLanguage() {
  $$("[data-fil]").forEach((element) => {
    if (!element.dataset.enHtml) element.dataset.enHtml = element.innerHTML;
    element.innerHTML = translated ? element.dataset.fil : element.dataset.enHtml;
  });
  $$("[data-fil-placeholder]").forEach((element) => {
    if (!element.dataset.enPlaceholder) {
      element.dataset.enPlaceholder = element.placeholder;
    }
    element.placeholder = translated
      ? element.dataset.filPlaceholder
      : element.dataset.enPlaceholder;
  });
  $$("[data-fil-aria-label]").forEach((element) => {
    if (!element.dataset.enAriaLabel) {
      element.dataset.enAriaLabel = element.getAttribute("aria-label") || "";
    }
    element.setAttribute(
      "aria-label",
      translated ? element.dataset.filAriaLabel : element.dataset.enAriaLabel,
    );
  });
  $$("[data-fil-alt]").forEach((element) => {
    if (!element.dataset.enAlt) element.dataset.enAlt = element.alt;
    element.alt = translated ? element.dataset.filAlt : element.dataset.enAlt;
  });
  document.documentElement.lang = translated ? "fil" : "en";
  const languageButton = $("#lang");
  if (!languageButton) return;
  languageButton.setAttribute("aria-pressed", String(translated));
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
  if (document.body.dataset.page === "article") {
    const articleKey = location.hash.slice(1).replace(/^a-/, "") || "hiv";
    art(A[articleKey] ? articleKey : "hiv");
  }
  if (document.body.dataset.page === "test") sites();
  applyLanguage();
};

document.addEventListener("sitecomponentsready", applyLanguage);
addEventListener("hashchange", route);
route();
initWhyStat();
initLearnCardAnimation();
initLearnCardPopovers();
initHomeExploreAnimation();
initHomeFeatureAnimations();
initHomeBackgroundParallax();
