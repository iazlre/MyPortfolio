const navLinks = document.querySelectorAll(".nav-menu .nav-link");

// ⭐ Add active class toggle for nav links
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(l => l.classList.remove("active"));
    // add active to clicked one
    link.classList.add("active");
  });
});

// make sure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rec-form");
  form.addEventListener("submit", addRecommendation);
});

function addRecommendation(event) {
  event.preventDefault();

  const text = document.getElementById("new-recommendation").value;

  if (text.trim() === "") return; // prevent empty reco

  const li = document.createElement("li");
  li.textContent = text;

  document.getElementById("recommendations-list").appendChild(li);

  alert("✅ Thank you! Your recommendation has been submitted.");

  document.getElementById("new-recommendation").value = "";
}