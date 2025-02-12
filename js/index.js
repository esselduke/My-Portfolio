function toggleMenu() {
  document.querySelector(".hamburgerMenuMainContainer").classList.toggle("click");
  document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
}

function sideMenuVan() {
  document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
}

document.querySelector(".toTheTopBtnContainer").style.opacity = "0";

const socialMediaLinks = [
  { selector: ".gitLogo", url: "https://github.com/esselduke?tab=repositories" },
  { selector: ".linkedinLogo", url: "https://www.linkedin.com/in/duke-essel-0501ba19b/" },
  { selector: ".square:nth-child(4)", url: "https://twitter.com/DukeEssel_" },
  { selector: ".square:nth-child(3)", url: "https://www.instagram.com/dukeessel_/" },
  { selector: ".square:nth-child(2)", url: "https://www.linkedin.com/in/duke-essel-0501ba19b/" },
  { selector: ".square:nth-child(1)", url: "https://github.com/esselduke?tab=repositories" }
];

socialMediaLinks.forEach(link => {
  document.querySelector(link.selector).addEventListener("click", () => {
    window.location.href = link.url;
  });
});

window.addEventListener("scroll", function () {
  const toTheTopBtn = document.querySelector(".toTheTopBtnContainer");
  toTheTopBtn.style.opacity = this.scrollY < 500 ? "0" : "0.5";

  const navItems = document.querySelectorAll(".a");
  const sections = [523, 1411, 2698, 4000];
  navItems.forEach((item, index) => {
    item.classList.toggle("activeNavItemsOnScroll", this.scrollY > (index === 0 ? 0 : sections[index - 1]) && this.scrollY <= sections[index]);
  });

  const nav = document.querySelector("nav");
  nav.classList.toggle("stickyNav", this.scrollY > 836.5);
  if (this.scrollY > 836.5) {
    nav.classList.add("animate");
  } else {
    nav.classList.remove("animate");
  }
});

document.querySelector(".toTheTopBtnContainer").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".a")[4].addEventListener("click", function () {
  this.innerHTML = "RESUME";
  document.querySelector(".animatedArrowForDownloadBtn").style.opacity = "1";
  setTimeout(function () {
    document.querySelector(".animatedArrowForDownloadBtn").style.opacity = "0";
  }, 1500);
});

document.querySelectorAll(".a")[0].classList.add("activeNavItemsOnScroll");

const projectLinks = [
  "https://esselduke.github.io/Lessek-initial-/",
  "https://esselduke.github.io/Delivery/",
  "https://esselduke.github.io/Ant-Cyber-/"
];

document.querySelectorAll(".btnLive").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    window.location.href = projectLinks[index];
  });
});

const skills = [
  { name: "HTML", percent: 51.6 },
  { name: "CSS", percent: 51.6 },
  { name: "JavaScript", percent: 12.6 },
  { name: "jQuery", percent: 10 },
  { name: "Bootstrap", percent: 8 }, 
  { name: "Node.js", percent: 5 } 
];

const skills = [
  { name: "HTML", percent: 51.6 },
  { name: "CSS", percent: 51.6 },
  { name: "JavaScript", percent: 12.6 },
  { name: "jQuery", percent: 10 }, // Adjust as needed
  { name: "Bootstrap", percent: 8 }, // Adjust as needed
  { name: "Node.js", percent: 5 } // Adjust as needed
];

skills.forEach(skill => {
  document.querySelector(`.${skill.name.toLowerCase()}Loader .innerLoader`).style.width = `${skill.percent}%`;
});
