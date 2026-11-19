const Header = () => `
  <nav class="nav" aria-label="Main" data-fil-aria-label="Pangunahing nabigasyon">
    <a class="logo" href="home.html">Gab<b>riella</b></a>
    <div class="links">
      <a href="home.html" data-r="home" data-fil="Tahanan">Home</a>
      <a href="about.html" data-r="about" data-fil="Tungkol sa amin">About Us</a>
      <a href="learn.html" data-r="learn" data-fil="Matuto">Learn</a>
      <a href="membership.html" data-r="membership" data-fil="Pagiging miyembro">Membership</a>
      <a href="contact.html" data-r="contact" data-fil="Makipag-ugnayan">Contact</a>
    </div>
    <button class="lang language-button" id="lang" type="button" aria-label="Switch language" title="Switch language" aria-pressed="false">
      <span class="language-option" data-language="en">EN</span>
      <span class="language-option" data-language="fil">FIL</span>
    </button>
  </nav>
`;

const Footer = () => `
  <div class="wrap">
    <a href="privacy.html" data-fil="Patakaran sa privacy">Privacy Policy</a>
    <a href="disclaimer.html" data-fil="Paalalang medikal">Medical Disclaimer</a>
    <a href="contact.html" data-fil="Mga social link">Social links</a>
    <span class="note" data-fil="Ang Gabriella ay isang independiyenteng proyektong adbokasiya. Prototype para sa klase.">Gabriella is an independent advocacy project. Prototype for class.</span>
  </div>
`;

document.body.insertAdjacentHTML(
  "afterbegin",
  '<a class="skip-link" href="#main-content" data-fil="Lumaktaw sa pangunahing nilalaman">Skip to main content</a>',
);
document.querySelector("#site-header").innerHTML = Header();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#site-footer").innerHTML = Footer();
  document.dispatchEvent(new Event("sitecomponentsready"));
});
