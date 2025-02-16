function toggleMenu() {
  document
    .querySelector(".hamburgerMenuMainContainer")
    .classList.toggle("click"),
    document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
}
function sideMenuVan() {
  document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
}
document.querySelector(".toTheTopBtnContainer").style.opacity = "0";
window.addEventListener("scroll", function () {
  if (this.scrollY < 500) {
    document.querySelector(".toTheTopBtnContainer").style.opacity = "0";
  } else {
    document.querySelector(".toTheTopBtnContainer").style.opacity = "0.5";
  }
}),
  document
    .querySelector(".toTheTopBtnContainer")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }),
  document.querySelectorAll(".a")[4].addEventListener("click", function (e) {
    (this.innerHTML = "RESUME"),
      (document.querySelector(".animatedArrowForDownloadBtn").style.opacity =
        "1"),
      setTimeout(function () {
        document.querySelector(".animatedArrowForDownloadBtn").style.opacity =
          "0";
      }, 1500);
  }),
  document.querySelectorAll(".a")[0].classList.add("activeNavItemsOnScroll"),
  window.addEventListener("scroll", function () {
    this.scrollY <= 523
      ? document
          .querySelectorAll(".a")[0]
          .classList.add("activeNavItemsOnScroll")
      : document
          .querySelectorAll(".a")[0]
          .classList.remove("activeNavItemsOnScroll"),
      this.scrollY > 523 && this.scrollY < 1411
        ? document
            .querySelectorAll(".a")[1]
            .classList.add("activeNavItemsOnScroll")
        : document
            .querySelectorAll(".a")[1]
            .classList.remove("activeNavItemsOnScroll"),
      this.scrollY > 1411 && this.scrollY < 2698
        ? document
            .querySelectorAll(".a")[2]
            .classList.add("activeNavItemsOnScroll")
        : document
            .querySelectorAll(".a")[2]
            .classList.remove("activeNavItemsOnScroll"),
      this.scrollY > 2698 && this.scrollY < 4e3
        ? document
            .querySelectorAll(".a")[3]
            .classList.add("activeNavItemsOnScroll")
        : document
            .querySelectorAll(".a")[3]
            .classList.remove("activeNavItemsOnScroll");
  }),
  window.addEventListener("scroll", function () {
    this.scrollY > 836.5
      ? (document.querySelector("nav").classList.add("stickyNav"),
        document.querySelector("nav").classList.add("animate"))
      : document.querySelector("nav").classList.remove("stickyNav");
  }),
  document.querySelectorAll(".btnLive")[0].addEventListener("click", () => {
    window.location.href = "https://esselduke.github.io/Lessek-initial-/";
  }),
  document.querySelectorAll(".btnLive")[1].addEventListener("click", () => {
    window.location.href = "https://esselduke.github.io/Delivery/";
  }),
  document.querySelectorAll(".btnLive")[2].addEventListener("click", () => {
    window.location.href = "https://esselduke.github.io/Ant-Cyber-/";
  }),
  document.querySelector(".gitLogo").addEventListener("click", () => {
    window.location.href = "https://github.com/esselduke?tab=repositories";
  }),
  document.querySelector(".linkedinLogo").addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/david-duke-essel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0P1KLHX3SVqsto5DWM93mA%3D%3D";
  }),
  document.querySelectorAll(".square")[3].addEventListener("click", () => {
    window.location.href = "https://twitter.com/DukeEssel_";
  }),
  document.querySelectorAll(".square")[2].addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/dukeessel_/";
  }),
  document.querySelectorAll(".square")[1].addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/david-duke-essel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0P1KLHX3SVqsto5DWM93mA%3D%3D";
  }),
  document.querySelectorAll(".square")[0].addEventListener("click", () => {
    window.location.href = "https://github.com/esselduke?tab=repositories";
  });
document.querySelector(".linkedinLogo").addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/david-duke-essel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0P1KLHX3SVqsto5DWM93mA%3D%3D";
});
document.querySelector(".gitLogo").addEventListener("click", () => {
  window.location.href = "https://github.com/esselduke?tab=repositories";
});
