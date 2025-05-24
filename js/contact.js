// Accordion Functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionItem = this.parentElement;
    const accordionContent = this.nextElementSibling;
    const accordionIcon = this.querySelector(".accordion-icon");

    // Toggle active class
    accordionContent.classList.toggle("active");
    accordionIcon.classList.toggle("active");

    // Close other accordion items
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
      }
    });

    document.querySelectorAll(".accordion-icon").forEach((icon) => {
      if (icon !== accordionIcon) {
        icon.classList.remove("active");
      }
    });
  });
});

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const eventType = document.getElementById("event-type").value;
  const message = document.getElementById("message").value;

  // Create form data object
  const formData = {
    name,
    email,
    phone,
    subject,
    eventType,
    message,
  };

  // You would typically send this data to a server
  // For demo purposes, show a success message
  alert("Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.");

  // Reset form
  this.reset();

  console.log("Form Data:", formData);
});

// Back to top button functionality
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
