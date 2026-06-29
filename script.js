// Welcome Message

document.getElementById("welcomeMessage").innerHTML =
  "Welcome to Simran's Portfolio Website!";

// Dark Mode

const darkModeBtn = document.getElementById("darkModeBtn");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode"),
  );
}

darkModeBtn.addEventListener("click", toggleDarkMode);

// Load Saved Preference

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Form Validation

const form = document.querySelector("form");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const formMessage = document.getElementById("formMessage");

  if (name.length < 3) {
    formMessage.style.color = "red";
    formMessage.textContent = "Name must contain at least 3 characters.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formMessage.style.color = "red";
    formMessage.textContent = "Message must be at least 10 characters long.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent = "Message sent successfully!";

  form.reset();
}

// Scroll To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
