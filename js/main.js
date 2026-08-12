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
const whatsappBubble = document.getElementById("whatsappBubble");
const whatsappBubbleClose = document.getElementById("whatsappBubbleClose");
const WHATSAPP_DISMISS_KEY = "whatsappBubbleDismissed";

window.addEventListener("scroll", () => {
  const scrolledPastThreshold = window.scrollY > 600;
  backToTop.classList.toggle("visible", scrolledPastThreshold);
  // Back-to-top and the greeting bubble share the same corner, so hide
  // the bubble once the user has scrolled far enough for both to collide.
  if (scrolledPastThreshold) {
    whatsappBubble.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (!localStorage.getItem(WHATSAPP_DISMISS_KEY)) {
  setTimeout(() => {
    if (window.scrollY <= 600) {
      whatsappBubble.classList.add("visible");
    }
  }, 1500);
}

whatsappBubbleClose.addEventListener("click", () => {
  whatsappBubble.classList.remove("visible");
  localStorage.setItem(WHATSAPP_DISMISS_KEY, "1");
});

const shopGrid = document.getElementById("shopGrid");
const shopPrev = document.getElementById("shopPrev");
const shopNext = document.getElementById("shopNext");

if (shopGrid && shopPrev && shopNext) {
  const scrollByCard = (direction) => {
    const card = shopGrid.querySelector(".kit-card");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 300;
    shopGrid.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  shopPrev.addEventListener("click", () => scrollByCard(-1));
  shopNext.addEventListener("click", () => scrollByCard(1));

  const updateShopNavState = () => {
    const maxScroll = shopGrid.scrollWidth - shopGrid.clientWidth - 60;
    shopPrev.disabled = shopGrid.scrollLeft <= 0;
    shopNext.disabled = shopGrid.scrollLeft >= maxScroll;
  };

  shopGrid.addEventListener("scroll", updateShopNavState);
  window.addEventListener("resize", updateShopNavState);
  updateShopNavState();
}
