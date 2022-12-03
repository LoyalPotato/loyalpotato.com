const navLinks = document.querySelector(".nav-links");
const navBurger = document.getElementById("nav-burger");
const resizeObserver = new ResizeObserver(onResize);
let docHasListener = false;
resizeObserver.observe(document.body);

if (navBurger) {
  navBurger.addEventListener("click", onNavClick);
  if (navBurger.style.display && navBurger.style.display !== "none") {
    document.addEventListener("click", onDocClick);
    docHasListener = true;
  }
}

function onDocClick(e: MouseEvent) {
  const target = e.target as Node;
  if (!navLinks || !navBurger || navBurger.contains(target)) return;
  if (!navLinks.contains(target)) {
    navLinks.classList.remove("expanded");
  }
}

function onNavClick() {
  if (navLinks) {
    navLinks.classList.toggle("expanded");
  }
}

function onResize(entries: ResizeObserverEntry[]) {
  for (const entry of entries) {
    if (entry.contentRect.width >= 636 && navLinks) {
      navLinks.classList.remove("expanded");
      if (docHasListener) {
        document.removeEventListener("click", onDocClick);
        docHasListener = false;
      }
    } else if (!docHasListener) {
      document.addEventListener("click", onDocClick);
      docHasListener = true;
    }
  }
}

export {};
