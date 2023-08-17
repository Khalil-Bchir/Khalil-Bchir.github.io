//carousel
      const swiper = new Swiper(".swiper-container", {
        direction: 'vertical', // Add this line to set the direction to vertical
        navigation: {
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 8000, // Delay in milliseconds (8 seconds)
        },
        on: {
          slideChange: function () {
            const activeIndex = this.realIndex;
            const navItems = document.querySelectorAll(".carousel-nav-item");
            navItems.forEach((item, index) => {
              if (index === activeIndex) {
                item.classList.add("active");
              } else {
                item.classList.remove("active");
              }
            });
          },
        },
      });

      // Attach click event listeners to navigation items
      const navItems = document.querySelectorAll(".carousel-nav-item");
      navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          navItems.forEach((navItem) => {
            navItem.classList.remove("active");
          });
          item.classList.add("active");
          goToSlide(index);
        });
      });

      document.getElementById("design").addEventListener("click", () => {
        swiper.slideNext();
      });

      // Add this function to navigate to a specific slide
      function goToSlide(index) {
        swiper.slideTo(index);
      }

      // Add 'active' class to the first navigation item initially
      navItems[0].classList.add("active");
    

    
      const lazyLoadInstance = new LazyLoad({
        elements_selector: ".item", // Adjust the selector to target your lazy loadable elements
        threshold: 0, // Load elements immediately as they enter the viewport
      });
    

//video animation
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".card video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
//scroll to top button
const cursorHoverElements = document.querySelectorAll(".curzr-hover");

cursorHoverElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursorElement.classList.add("active");
  });

  element.addEventListener("mouseout", () => {
    cursorElement.classList.remove("active");
  });
});

// JavaScript for the side bar
document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    sidebarToggle.classList.toggle("active");

    // Hide the footer when the sidebar is active
    if (sidebar.classList.contains("active")) {
      pageFooter.style.display = "none"; // Hide the footer
    } else {
      pageFooter.style.display = "flex"; // Show the footer
    }

    // Adjust the position of the footer when the sidebar is active
    if (sidebar.classList.contains("active")) {
      pageFooter.style.position = "absolute"; // Change the position to absolute
      pageFooter.style.bottom = "initial"; // Clear the bottom property
      pageFooter.style.top = "calc(100vh - 100px)"; // Adjust the top position
    } else {
      pageFooter.style.position = "fixed"; // Reset the position to fixed
      pageFooter.style.bottom = "0"; // Reset the bottom property
      pageFooter.style.top = "initial"; // Clear the top position
    }
  });
});

// JavaScript for the typing animation and color change on hover
const typedTextElement = document.querySelector(".typed-text");
const descriptionText = [
  "Hello, I am KHALIL ",
  "A Digital Dreamweaver",
  "Crafting Captivating",
  "Web Experiences.",
];

const hoverColors = ["#ffbc90", "#d5c9fb", "#b0efda", "#f1f68f"];

let textIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = descriptionText[textIndex];

  if (!isDeleting && characterIndex < currentText.length) {
    typedTextElement.textContent = currentText.substring(0, characterIndex + 1);
    characterIndex++;
  } else if (isDeleting && characterIndex >= 0) {
    typedTextElement.textContent = currentText.substring(0, characterIndex);
    characterIndex--;
  }

  if (characterIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, 1000); // Delay before starting to delete
  } else if (characterIndex === -1) {
    isDeleting = false;
    textIndex = (textIndex + 1) % descriptionText.length;
    setTimeout(typeText, 500); // Delay before typing next part
  } else {
    const typingSpeed = isDeleting ? 30 : 100; // Adjust these values for typing and deleting speed
    setTimeout(typeText, typingSpeed);
  }
}

typedTextElement.addEventListener("mouseover", () => {
  const randomColor =
    hoverColors[Math.floor(Math.random() * hoverColors.length)];
  typedTextElement.style.color = randomColor;
});

typedTextElement.addEventListener("mouseout", () => {
  typedTextElement.style.color = "white"; // Reset to the default color
});

setTimeout(typeText, 1000); // Delay before starting typing

// JavaScript for changing footer text color based on section background color
document.addEventListener("DOMContentLoaded", () => {
  const footerText = document.getElementById("footer-text");

  function updateFooterTextColor() {
    const sections = document.querySelectorAll("section");
    const currentSection = Array.from(sections).find((section) => {
      const rect = section.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    });

    if (currentSection) {
      const bgColor = currentSection.getAttribute("data-bg-color");
      if (bgColor) {
        footerText.classList.toggle(
          "footer-text-color-change",
          bgColor === "#b0efda"
        );
      }
    }
  }

  updateFooterTextColor(); // Initial check

  // Check and update color when scrolling
  window.addEventListener("scroll", updateFooterTextColor);
});

// JavaScript to change cursor style when hovering over the #about section
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");
  const cursorElement = new CircleAndDot(); // Create an instance of the CircleAndDot class

  aboutSection.addEventListener("mouseenter", () => {
    changeCursor(cursorList.indexOf("circle-and-dot")); // Change cursor to "circle-and-dot"
  });

  aboutSection.addEventListener("mouseleave", () => {
    cursorElement.hidden(); // Hide the custom cursor
  });
});

// JavaScript to change cursor style based on section
document.addEventListener("DOMContentLoaded", () => {
  const cursorElement = new CircleAndDot(); // Create an instance of the CircleAndDot class

  // Function to change cursor based on section ID
  function changeCursorBySection(sectionId, cursorType) {
    const section = document.getElementById(sectionId);
    section.addEventListener("mouseenter", () => {
      changeCursor(cursorType);
    });

    section.addEventListener("mouseleave", () => {
      cursorElement.hidden(); // Hide the custom cursor
    });
  }

  // Attach custom cursor to each section
  changeCursorBySection("home", cursorList.indexOf("arrow-pointer"));
  changeCursorBySection("about", cursorList.indexOf("circle-and-dot"));
  changeCursorBySection("skills", cursorList.indexOf("big-circle"));
  changeCursorBySection("webdev", cursorList.indexOf("glitch-effect"));
  changeCursorBySection("design", cursorList.indexOf("ring-dot"));
  changeCursorBySection("contact", cursorList.indexOf("arrow-pointer"));
});

const track = document.querySelector(".h-track");

if (track) {
  track.classList.add("invisible-scrollbar");
  const trackContainer = track.querySelector(".h-content-container");

  let registeredScroll = false;
  let outerWidth = track.offsetWidth;
  let innerWidth = trackContainer.scrollWidth;

  const updatePct = () => {
    const pct = (track.scrollLeft / (innerWidth - outerWidth)) * 100;
    track.dataset.scrollPercent = pct;
    document.documentElement.style.setProperty(
      "--scroll-pct",
      `${track.dataset.scrollPercent}%`
    );
  };
  updatePct();

  window.addEventListener("resize", () => {
    outerWidth = track.offsetWidth;
    innerWidth = trackContainer.scrollWidth;
    updatePct();
  });

  track.addEventListener("scroll", (evt) => {
    if (!registeredScroll) {
      track.setAttribute(
        "data-scroll",
        track.scrollLeft + evt.deltaY + evt.deltaX
      );
    }
  });

  track.addEventListener("wheel", (evt) => {
    registeredScroll = true;
    evt.preventDefault();
    const tpMultiplier = evt.deltaY % 1 === 0 ? 5 : 1;
    track.setAttribute(
      "data-scroll",
      track.scrollLeft + evt.deltaY * tpMultiplier + evt.deltaX * tpMultiplier
    );
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      registeredScroll = true;
      track.setAttribute("data-scroll", track.scrollLeft - 100);
    } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      registeredScroll = true;
      track.setAttribute("data-scroll", track.scrollLeft + 100);
    }
  });

  const update = () => {
    if (registeredScroll) {
      const toX = parseFloat(track.getAttribute("data-scroll")) || 0;
      const dx = toX - track.scrollLeft;

      if (dx > 1 || dx < -1) {
        track.scrollLeft += dx * 0.1;
      } else {
        track.scrollLeft = toX;
        registeredScroll = false;
      }
    }
    updatePct();
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

// Color changing sections

const bgColorObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.documentElement.style.setProperty(
          "--bg-color",
          entry.target.dataset.bgColor || ""
        );
        document.documentElement.style.setProperty(
          "--text-color",
          entry.target.dataset.textColor || ""
        );
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.501,
  }
);

document.querySelectorAll("[data-bg-color]").forEach((changer) => {
  bgColorObserver.observe(changer);
});
