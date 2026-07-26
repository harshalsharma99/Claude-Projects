document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "Sending...";
  formStatus.style.color = "";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Thanks! We'll be in touch soon. 🌈";
      formStatus.style.color = "#5f7757";
      contactForm.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (err) {
    formStatus.textContent =
      "Something went wrong. Please email us directly at preesplaybook@gmail.com.";
    formStatus.style.color = "#c96449";
  }
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 600);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const whatsappBubble = document.getElementById("whatsappBubble");
const whatsappBubbleClose = document.getElementById("whatsappBubbleClose");
const WHATSAPP_DISMISS_KEY = "whatsappBubbleDismissed";

if (!localStorage.getItem(WHATSAPP_DISMISS_KEY)) {
  setTimeout(() => {
    whatsappBubble.classList.add("visible");
  }, 1500);
}

whatsappBubbleClose.addEventListener("click", () => {
  whatsappBubble.classList.remove("visible");
  localStorage.setItem(WHATSAPP_DISMISS_KEY, "1");
});
