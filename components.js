const Header = () => `
  <nav class="nav" aria-label="Main">
    <a class="logo" href="home.html">Gab<b>riella</b></a>
    <div class="links">
      <a href="home.html" data-r="home">Home</a>
      <a href="about.html" data-r="about">About Us</a>
      <a href="learn.html" data-r="learn">Learn</a>
      <a href="membership.html" data-r="membership">Membership</a>
      <a href="contact.html" data-r="contact">Contact</a>
    </div>
    <a class="btn coral" href="test.html" data-fil="Magpa-test">Get Tested</a>
    <button class="lang icon-button" id="theme" type="button" aria-label="Switch to light mode" title="Switch to light mode">☀</button>
    <button class="lang language-button" id="lang" type="button" aria-label="Switch language" title="Switch language" aria-pressed="false">
      <span class="language-option" data-language="en">EN</span>
      <span class="language-option" data-language="fil">FIL</span>
    </button>
  </nav>
`;

const Footer = () => `
  <div class="wrap">
    <a href="privacy.html">Privacy Policy</a>
    <a href="disclaimer.html">Medical Disclaimer</a>
    <a href="contact.html">Social links</a>
    <span class="note">Gabriella is an independent advocacy project. Prototype for class.</span>
  </div>
`;

document.body.insertAdjacentHTML(
  "afterbegin",
  '<a class="skip-link" href="#main-content">Skip to main content</a>',
);
document.querySelector("#site-header").innerHTML = Header();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#site-footer").innerHTML = Footer();
});
document.body.insertAdjacentHTML(
  "beforeend",
  '<button class="qx" id="qx" aria-label="Quick exit: leave this page" title="Leave this page immediately">Quick exit ✕</button>',
);
