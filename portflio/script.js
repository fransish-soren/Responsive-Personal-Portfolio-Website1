// Mobile Menu
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {
  navLinks.classList.toggle("show");

  menuBtn.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
};


// Click Active Nav
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.onclick = () => {

    links.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");
    navLinks.classList.remove("show");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  };
});


// Theme Toggle
const themeBtn = document.querySelector("#themeBtn");

themeBtn.onclick = () => {

  document.body.classList.toggle("light");

  themeBtn.innerHTML =
    document.body.classList.contains("light")
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
};


// Testimonials
const reviews = [
  {
    text: `"Fransish is an amazing developer! He delivered my website on time with great quality."`,
    name: "Rahim Hasan"
  },
  {
    text: `"Great communication and very clean frontend development. Highly recommended!"`,
    name: "Sarah Ahmed"
  },
  {
    text: `"He transformed my idea into a beautiful and responsive website."`,
    name: "David Smith"
  }
];

let reviewIndex = 0;

const review = document.querySelector("#review");
const clientName = document.querySelector("#clientName");

function showReview() {
  review.textContent = reviews[reviewIndex].text;
  clientName.textContent = reviews[reviewIndex].name;
}

document.querySelector("#next").onclick = () => {
  reviewIndex++;

  if (reviewIndex >= reviews.length) {
    reviewIndex = 0;
  }

  showReview();
};

document.querySelector("#prev").onclick = () => {
  reviewIndex--;

  if (reviewIndex < 0) {
    reviewIndex = reviews.length - 1;
  }

  showReview();
};


// Contact Form
document.querySelector("#contactForm").onsubmit = (e) => {
  e.preventDefault();

  alert("Thanks! Your message has been sent.");

  e.target.reset();
};
// Back To Top

const backTop = document.querySelector("#backTop");

window.onscroll = () => {

  if (window.scrollY > 300) {
    backTop.classList.add("show");
  } else {
    backTop.classList.remove("show");
  }

};

backTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};