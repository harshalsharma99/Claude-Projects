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
      formStatus.textContent = "Thanks! We'll be in touch soon. 🧸";
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
