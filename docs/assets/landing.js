(function () {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".sidebar-toggle");
  const backdrop = document.querySelector(".sidebar-backdrop");
  const navLinks = document.querySelectorAll(".nav-list a[href^='#']");

  function closeSidebar() {
    sidebar?.classList.remove("is-open");
    backdrop?.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function openSidebar() {
    sidebar?.classList.add("is-open");
    backdrop?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  toggle?.addEventListener("click", () => {
    if (sidebar?.classList.contains("is-open")) closeSidebar();
    else openSidebar();
  });

  backdrop?.addEventListener("click", closeSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) closeSidebar();
    });
  });

  /* Scrollspy */
  const sections = document.querySelectorAll(".section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0.01 },
  );

  sections.forEach((s) => observer.observe(s));

  /* Keyboard */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });
})();
