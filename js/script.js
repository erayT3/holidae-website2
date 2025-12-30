// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}
// Quote form validation (no alerts)
const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const month = document.getElementById("month").value.trim();
    const people = Number(document.getElementById("people").value);

    if (fullName.length < 2) {
      formMessage.textContent = "Please enter your full name.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (month === "") {
      formMessage.textContent = "Please select a preferred month.";
      return;
    }

    if (!Number.isFinite(people) || people < 1) {
      formMessage.textContent = "Please enter a valid number of travellers.";
      return;
    }

    formMessage.textContent = "Thanks! Your request has been sent (prototype).";
    quoteForm.reset();
  });
}

// Package filter (Landing page)
const filterButtons = document.querySelectorAll(".filter-btn");
const packageCards = document.querySelectorAll(".package-card");

if (filterButtons.length && packageCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      packageCards.forEach((card) => {
        const category = card.dataset.category;
        const show = (filter === "all" || category === filter);
        card.style.display = show ? "block" : "none";
      });
    });
  });
}
