const WHATSAPP_NUMBER = "5490000000000"; // Reemplazar por el número real, sin + ni espacios.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

function setWhatsappLinks(message = "Hola, quiero consultar por un proyecto con ModoBeta.") {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.getElementById("whatsappCta")?.setAttribute("href", url);
  document.getElementById("footerWhatsapp")?.setAttribute("href", url);
}

function toggleMenu(forceClose = false) {
  const shouldOpen = forceClose ? false : !navMenu.classList.contains("open");
  navMenu.classList.toggle("open", shouldOpen);
  navToggle.classList.toggle("active", shouldOpen);
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);
}

function clearError(field) {
  const error = field.closest(".form-field")?.querySelector(".error");
  if (error) error.textContent = "";
  field.removeAttribute("aria-invalid");
}

function setError(field, message) {
  const error = field.closest(".form-field")?.querySelector(".error");
  if (error) error.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

function validateForm(form) {
  let isValid = true;
  const { name, email, phone, message } = form;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  [name, email, phone, message].forEach(clearError);

  if (!name.value.trim()) { setError(name, "Ingresá tu nombre."); isValid = false; }
  if (!emailRegex.test(email.value.trim())) { setError(email, "Ingresá un email válido."); isValid = false; }
  if (!phone.value.trim()) { setError(phone, "Ingresá tu WhatsApp."); isValid = false; }
  if (!message.value.trim()) { setError(message, "Contanos brevemente qué necesitás."); isValid = false; }
  return isValid;
}

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
}, { passive: true });

navToggle?.addEventListener("click", () => toggleMenu());
navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => toggleMenu(true)));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    const target = href && href !== "#" ? document.querySelector(href) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formSuccess.textContent = "";
  if (!validateForm(contactForm)) return;

  const data = new FormData(contactForm);
  const name = data.get("name").trim();
  const company = data.get("company")?.trim();
  const projectType = data.get("projectType");
  const message = data.get("message").trim();
  const whatsappMessage = `Hola, soy ${name}${company ? ` de ${company}` : ""}. Quiero consultar por un proyecto de tipo ${projectType}. ${message}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  setWhatsappLinks(whatsappMessage);
  formSuccess.innerHTML = `Consulta validada. Podés continuar por <a href="${whatsappUrl}" target="_blank" rel="noopener">WhatsApp</a>.`;
  contactForm.reset();
});

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });
});

setWhatsappLinks();
if (window.lucide) lucide.createIcons();
if (window.AOS) AOS.init({ duration: 750, once: true, offset: 90, disable: prefersReducedMotion });

if (!prefersReducedMotion && window.Typed) {
  new Typed("#typedText", {
    strings: ["Creamos plataformas web.", "Automatizamos procesos.", "Diseñamos sistemas a medida.", "Impulsamos ideas digitales."],
    typeSpeed: 44, backSpeed: 24, backDelay: 1450, loop: true,
  });
} else {
  const typedText = document.getElementById("typedText");
  if (typedText) typedText.textContent = "Diseñamos sistemas a medida.";
}

if (!prefersReducedMotion && window.tsParticles) {
  tsParticles.load("particles", {
    fullScreen: { enable: false }, fpsLimit: 60,
    particles: {
      number: { value: 54, density: { enable: true, area: 900 } },
      color: { value: ["#00e5ff", "#7c3aed", "#22c55e"] },
      links: { enable: true, color: "#00e5ff", opacity: .14, distance: 145 },
      move: { enable: true, speed: .55 }, opacity: { value: .34 }, size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  });
}

if (!prefersReducedMotion && window.gsap) {
  gsap.from(".hero-title", { y: 34, opacity: 0, duration: .9, ease: "power3.out" });
  gsap.from(".floating-panel", { y: 28, opacity: 0, duration: .9, delay: .25, ease: "power3.out" });
}

if (!prefersReducedMotion && window.anime) {
  anime({ targets: ".node-map i", translateY: [0, -12], direction: "alternate", loop: true, easing: "easeInOutSine", delay: anime.stagger(180), duration: 1700 });
  anime({ targets: ".orb", scale: [1, 1.08], direction: "alternate", loop: true, easing: "easeInOutSine", duration: 4200 });
}

if (!prefersReducedMotion && window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll(".tilt-card"), { max: 7, speed: 500, glare: true, "max-glare": .12 });
}
