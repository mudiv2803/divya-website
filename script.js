function checkCode() {
  const code = document.getElementById("code").value;
  const error = document.getElementById("error");

  if (code === "2803") {
    window.location.href = "home.html";
  } else {
    error.innerText = "Wrong code ✖";
  }
}

function toggleDropdown(id) {
  const el = document.getElementById(id);
  el.classList.toggle("show");

}
// 🔄 HERO BACKGROUND SLIDESHOW (SAFE + FIXED)
document.addEventListener("DOMContentLoaded", () => {

  const hero = document.getElementById("hero");
  if (!hero) return; // prevents running on index.html

  const heroImages = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
    "images/bg4.jpg",
    "images/bg5.jpg",
    "images/bg6.jpg"
  ];

  let heroIndex = 0;

  function changeHeroBackground() {
    hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    heroIndex = (heroIndex + 1) % heroImages.length;
  }

  // Start slideshow
  changeHeroBackground();
  setInterval(changeHeroBackground, 4000);
});

function openJourney(step) {
  const img = document.getElementById("journeyImage");
  const text = document.getElementById("journeyText");

  const data = {
    meeting: {
      image: "images/bg1.jpg",
      text: "The first meeting felt simple, but something quietly changed."
    },
    vrindavan: {
      image: "images/bg2.jpg",
      text: "Peace, faith, and moments that felt untouched by noise."
    },
    kota1: {
      image: "images/bg3.jpg",
      text: "The beginning of patience and silent support."
    },
    kota2: {
      image: "images/bg4.jpg",
      text: "Small conversations that meant more than words."
    },
    kota3: {
      image: "images/bg5.jpg",
      text: "Strength, trust, and quiet understanding."
    },
    kota4: {
      image: "images/bg6.jpg",
      text: "Distance existed, connection didn’t fade."
    },
    kota5: {
      image: "images/bg1.jpg",
      text: "The end of a chapter, not the bond."
    },
    today: {
      image: "images/bg2.jpg",
      text: "Still here. Still meaningful."
    }
  };

  img.src = data[step].image;
  text.innerText = data[step].text;
}

// TYPING EFFECT (RUNS ONCE)
document.addEventListener("DOMContentLoaded", () => {
  const text = "Some people don’t enter your life,\n they become a part of it.";
  const el = document.getElementById("typingText");

  if (!el) return;

  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(type, 60);
    }
  }

  type();
});


