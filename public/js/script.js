document.addEventListener("DOMContentLoaded", function () {
  // Welcome alert or intro animation
  console.log("Welcome to LuxeGlow Beauty — where elegance meets artistry!");

  // Example: Fade in headline
  const headline = document.querySelector(".slide-up-down");
  headline.style.opacity = 0;
  setTimeout(() => {
    headline.style.transition = "opacity 2s ease";
    headline.style.opacity = 1;
  }, 500);

  // Smooth scroll to booking section on button click
  const bookNowButton = document.querySelector(".booknow");
  bookNowButton.addEventListener("click", function () {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Booking section not found.");
    }
  });

  // Optional: change title color based on time of day
  const hours = new Date().getHours();
  if (hours < 12) {
    headline.innerText = "Good Morning, Gorgeous ✨";
  } else if (hours < 18) {
    headline.innerText = "Glow Through the Afternoon ☀️";
  } else {
    headline.innerText = "Evening Elegance Begins 🌙";
  }
});
