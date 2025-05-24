// Animasi Counter Stats
const counterElements = document.querySelectorAll(".counter-value[data-target]");

const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      const end = parseInt(element.getAttribute("data-target"));
      animateCounter(element, 0, end, 2000);
      observer.unobserve(element);
    }
  });
};

// Set up Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  threshold: 0.2,
});

// Observe counter elements
counterElements.forEach((counter) => {
  observer.observe(counter);
});

// Play button handler
document.querySelectorAll(".play-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Video akan diputar");
    // Implementasi untuk memutarkan video
  });
});

// Smooth scrolling untuk internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Event handler untuk button CTA
document.querySelectorAll(".btn-cta, .browse-cta").forEach((button) => {
  button.addEventListener("click", function () {
    // Implementasi untuk aksi tombol
  });
}); // Load more button
document.querySelector(".load-more-btn").addEventListener("click", function () {
  // Implementasi untuk load more events
  alert("Memuat lebih banyak acara...");
});
// Testimonial navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".testimonial-nav-btn");
  const testimonialRows = document.querySelectorAll(".testimonial-row");
  let currentPage = 0;
  const totalPages = navButtons.length;

  // Handle navigation button clicks
  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get page index from button
      const pageIndex = parseInt(this.getAttribute("data-index"));

      // Update active state for buttons
      navButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Show the correct testimonial row (for future implementation of multiple pages)
      showTestimonialPage(pageIndex);
    });
  });

  function showTestimonialPage(pageIndex) {
    // This is where you would handle showing different pages of testimonials
    // For now, we only have one page, but this allows for future expansion
    currentPage = pageIndex;

    // You could add fade-in/fade-out animations here
    testimonialRows.forEach((row, index) => {
      if (index === pageIndex) {
        row.style.display = "flex";
        // Add animation if you want
        row.style.animation = "fadeIn 0.5s ease-in-out";
      } else {
        row.style.display = "none";
      }
    });
  }

  // Auto-rotate testimonials every 7 seconds (if you have multiple pages)
  if (totalPages > 1) {
    setInterval(() => {
      currentPage = (currentPage + 1) % totalPages;
      showTestimonialPage(currentPage);

      // Update active button
      navButtons.forEach((btn) => btn.classList.remove("active"));
      navButtons[currentPage].classList.add("active");
    }, 7000);
  }

  // Handle testimonial form submission
  const testimonialForm = document.getElementById("testimonialForm");
  if (testimonialForm) {
    testimonialForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("testimonialName").value;
      const email = document.getElementById("testimonialEmail").value;
      const message = document.getElementById("testimonialMessage").value;
      const rating = document.querySelector('input[name="rating"]:checked').value;

      // Create new testimonial (in a real application, this would be sent to a server)
      const newTestimonial = {
        name,
        email,
        message,
        rating,
        date: new Date(),
      };

      // Show success message
      alert("Terima kasih! Testimoni Anda telah dikirim dan akan ditampilkan setelah diverifikasi.");

      // Reset form
      testimonialForm.reset();

      // In a real application, you would send this data to a server
      console.log("New testimonial:", newTestimonial);
    });
  }
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




document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
