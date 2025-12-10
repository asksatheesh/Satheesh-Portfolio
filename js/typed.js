const sleep = ms => new Promise(res => setTimeout(res, ms));

var typed = new Typed('#typed', {
    strings: ["AI Automation...", "Full Stack Engineering...", "Identity Governance..."],
    typeSpeed : 100,
    backSpeed:30,
    backDelay: 1200,
    loop: true,
});


document.querySelectorAll('#section-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('#section-nav .nav-link').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});


document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + window.innerHeight / 4; // detect section earlier
  let currentActive = null;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      currentActive = section.id;
    }
  });

  // Clear all actives first
  document.querySelectorAll('#section-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active only to current section
  if (currentActive) {
    const activeLink = document.querySelector(`#section-nav .nav-link[href="#${currentActive}"]`);
    activeLink?.classList.add('active');
  }

  // Special handling for last section (Contact)
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    document.querySelector(`#section-nav .nav-link[href="#contact"]`)?.classList.add('active');
  }
});


