const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    const isOpen = navMenu.classList.contains("show");
    menuToggle.textContent = isOpen ? "\u2715" : "\u2630";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");

    if (navMenu && menuToggle) {
      navMenu.classList.remove("show");
      menuToggle.textContent = "\u2630";
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    if (themeIcon) {
      themeIcon.textContent = isDark ? "\u2600" : "\u263E";
    }
  });
}

const seeMoreBtn = document.getElementById("see-more-btn");
const hiddenProjects = document.querySelectorAll(".hidden-project");

if (seeMoreBtn && hiddenProjects.length > 0) {
  seeMoreBtn.addEventListener("click", function () {
    let anyShown = false;
    hiddenProjects.forEach(function (project) {
      project.classList.toggle("show-project");
      if (project.classList.contains("show-project")) {
        anyShown = true;
      }
    });
    seeMoreBtn.textContent = anyShown ? "See Less Projects" : "See More Projects";
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const statusEl = document.getElementById("form-status");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const errorMessages = contactForm.querySelectorAll(".error-message");
    const inputs = [nameInput, emailInput, messageInput];

    errorMessages.forEach(function (el) {
      el.textContent = "";
    });
    inputs.forEach(function (input) {
      input.classList.remove("invalid");
    });

    let isValid = true;

    function showError(index, msg) {
      errorMessages[index].textContent = msg;
      inputs[index].classList.add("invalid");
      isValid = false;
    }

    if (name === "") {
      showError(0, "Name is required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      showError(1, "Email is required.");
    } else if (!emailPattern.test(email)) {
      showError(1, "Please enter a valid email address.");
    }

    if (message === "") {
      showError(2, "Message is required.");
    }

    if (isValid) {
      if (statusEl) {
        statusEl.textContent = "Your message is validated and ready to send!";
      }
      contactForm.reset();
    } else if (statusEl) {
      statusEl.textContent = "";
    }
  });
}

const yearEl = document.getElementById("current-year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
