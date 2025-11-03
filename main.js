const lis = document.querySelectorAll(".nav-items");
lis.forEach((item) => {
  item.addEventListener("click", () => {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});

//================Navbar================//

const mobileItems = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
function mobileMenu() {
  const desktopMenu = document.querySelector(".navbar-content");
  menuBtn.addEventListener("click", () => {
    mobileItems.classList.toggle("open");
  });
  function handleSize() {
    if (window.innerWidth <= 768) {
      menuBtn.classList.remove("hidden");
      desktopMenu.classList.add("hidden");
    }
  }
  handleSize();

  window.addEventListener("resize", handleSize);
}

mobileMenu();

//================FlickerNewsStrip================//

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: ["Features"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
});

//===================Animation Features====================//
const featuresSection = document.querySelector("#features");
const features = document.querySelectorAll(".left-side, .right-side");

function fadeInFeatures() {
  features.forEach((f, i) => {
    f.style.transition = "all 0.8s ease-out";
    f.style.transitionDelay = `${i * 0.2}s`;
    f.style.opacity = "1";
    f.style.transform = "translateY(0)";
  });
}

features.forEach((f) => {
  f.style.opacity = "0";
  f.style.transform = "translateY(50px)";
});

// ===== Observer (scroll trigger) =====
const featureObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeInFeatures();
        featureObserver.disconnect();
      }
    });
  },
  { threshold: 0.15 }
);

featureObserver.observe(featuresSection);

// ===== Navbar click trigger =====
document.querySelectorAll('a[href="#features"]').forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      const rect = featuresSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        fadeInFeatures();
      }
    }, 900);
  });
});

//===================Animated Cards====================//

const pricingSection = document.querySelector("#pricing");
const cards = document.querySelectorAll(".card");

function fadeInUp() {
  cards.forEach((card, i) => {
    card.style.transition = "all 0.8s ease-out";
    card.style.transitionDelay = `${i * 0.15}s`;
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
}

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeInUp();
        observer.disconnect();
      }
    });
  },
  { threshold: 0.15 }
);

observer.observe(pricingSection);

document.querySelectorAll('a[href="#pricing"]').forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      const rect = pricingSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        fadeInUp();
      }
    }, 900);
  });
});

//===================== Toggle Btn ======================//

const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

//===================== Toggle Cards ======================//

const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const prices = document.querySelectorAll(".card-price");
const durations = document.querySelectorAll(".price-duration");
const savings = document.querySelectorAll(".price-save");

function fadeChange(el, newText) {
  el.style.transition = "opacity 0.4s ease-in-out";
  el.style.opacity = 0;
  setTimeout(() => {
    el.textContent = newText;

    void el.offsetWidth;

    el.style.opacity = 1;
  }, 400);
}

function togglePricing(isYearly) {
  prices.forEach((price) => fadeChange(price, isYearly ? price.dataset.yearly : price.dataset.monthly));

  durations.forEach((dur) => fadeChange(dur, isYearly ? "/Year" : "/Month"));

  savings.forEach((save) => {
    if (isYearly) {
      save.style.transition = "opacity 0.4s ease-in-out";
      save.classList.remove("hidden");
      requestAnimationFrame(() => (save.style.opacity = 1));
    } else {
      save.style.transition = "opacity 0.4s ease-in-out";
      save.style.opacity = 0;
      setTimeout(() => save.classList.add("hidden"), 400);
    }
  });
}

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
  togglePricing(false);
});

yearlyBtn.addEventListener("click", () => {
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  togglePricing(true);
});

//===============footer==============//

document.getElementById("year").textContent = new Date().getFullYear();
