// Filter options
const filterOptions = document.querySelectorAll(".filter-option");

filterOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Remove active class from all options
    filterOptions.forEach((opt) => opt.classList.remove("active"));

    // Add active class to clicked option
    this.classList.add("active");
  });
});

// Event card hover effect
const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
    this.style.boxShadow = "0 15px 40px rgba(255, 0, 140, 0.3)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "";
    this.style.boxShadow = "";
  });
});

// Pagination
const paginationBtns = document.querySelectorAll(".pagination-btn");

paginationBtns.forEach((btn) => {
  if (!btn.classList.contains("prev") && !btn.classList.contains("next")) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all buttons
      paginationBtns.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");
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

// Smooth scrolling for internal links
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

// Search form functionality
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchInput = this.querySelector(".search-input").value;

  // Scroll ke section dengan ID "events"
  document.getElementById("events").scrollIntoView({
    behavior: "smooth",
  });

  // (Optional) Tambahkan logika filter pencarian di sini
});
