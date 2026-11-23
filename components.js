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
    <a class="btn nav-test" href="test.html" data-fil="Magpa-test">Get Tested</a>
    <button class="lang language-button" id="lang" type="button" aria-label="Switch language" title="Switch language" aria-pressed="false">
      <span class="language-option" data-language="en">EN</span>
      <span class="language-option" data-language="fil">FIL</span>
    </button>
  </nav>
`;



const Footer = () => `
  <div class="wrap">
    <div>
      <a href="index.html" class="logo">Gab<span>riella</span><b>.</b></a>
      <p class="note" data-fil="Isang independiyenteng proyektong adbokasiya para sa edukasyon, kalusugang seksuwal, at pagkilos.">
        An independent advocacy project for education, sexual health, and collective action.
      </p>
    </div>

    <div>
      <a href="about.html" data-fil="Tungkol sa Amin">About Us</a>
      <a href="membership.html" data-fil="Sumali sa Komunidad">Join Our Community</a>
      <a href="learn.html" data-fil="Matuto">Learn</a>
      <a href="contact.html" data-fil="Makipag-ugnayan">Contact</a>
      <a href="test.html" data-fil="Magpa-test">Get Tested</a>
    </div>

    <div>
      <a href="privacy.html" data-fil="Patakaran sa Privacy">Privacy Policy</a>
      <a href="disclaimer.html" data-fil="Paalalang Medikal">Medical Disclaimer</a>
    </div>

    <span class="note">
      © ${new Date().getFullYear()} Gabriella. All rights reserved.
    </span>
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
