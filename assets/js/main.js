document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  const navbarLinks = document.querySelectorAll('.right a');

  function updateActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navbarLinks.forEach((link) => link.classList.remove('active'));
        navbarLinks[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection);

  updateActiveSection();
});
