// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact Form
const formMessage = document.getElementById("formMessage");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']").value;
  
  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    formMessage.textContent = "⚠️ Please enter a valid email.";
    formMessage.classList.add("show");
    return;
  }
  
  formMessage.textContent = "✅ Thank you! Your message has been sent.";
  formMessage.classList.add("show");
  e.target.reset();
  setTimeout(() => formMessage.classList.remove("show"), 4000);
});

// Dark Mode Toggle with Memory
const toggleBtn = document.getElementById("darkModeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 200);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar Active Link Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Fade-in sections on scroll (with alternate animations)
const fadeSections = document.querySelectorAll(".fade-section");
const revealOnScroll = () => {
  fadeSections.forEach((section, index) => {
    if (window.scrollY + window.innerHeight * 0.85 > section.offsetTop) {
      section.classList.add("visible");
      // Alternate fade-in directions
      section.style.animation = index % 2 === 0 
        ? "fadeInLeft 1s ease forwards" 
        : "fadeInRight 1s ease forwards";
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// 🔥 Profile Image Hover Effect (extra style)
const profileImg = document.querySelector(".profile-img");
if (profileImg) {
  profileImg.addEventListener("mouseover", () => {
    profileImg.style.transform = "scale(1.1) rotate(3deg)";
    profileImg.style.transition = "transform 0.3s";
  });
  profileImg.addEventListener("mouseout", () => {
    profileImg.style.transform = "scale(1) rotate(0deg)";
  });
}
