function checkScroll() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("home-nav").className = "not-at-top";
  } else {
    document.getElementById("home-nav").className = "at-top";
  }
}
