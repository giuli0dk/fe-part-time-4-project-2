var isRTL = JSON.parse(localStorage.getItem("isRTL"));
if (isRTL) {
  var linkDefault = document.getElementById("style-default");
  var userLinkDefault = document.getElementById("user-style-default");
  linkDefault.setAttribute("disabled", true);
  userLinkDefault.setAttribute("disabled", true);
  document.querySelector("html").setAttribute("dir", "rtl");
} else {
  var linkRTL = document.getElementById("style-rtl");
  var userLinkRTL = document.getElementById("user-style-rtl");
  linkRTL.setAttribute("disabled", true);
  userLinkRTL.setAttribute("disabled", true);
}

var isFluid = JSON.parse(localStorage.getItem("isFluid"));
if (isFluid) {
  var container = document.querySelector("[data-layout]");
  container.classList.remove("container");
  container.classList.add("container-fluid");
}

var navbarStyle = localStorage.getItem("navbarStyle");
if (navbarStyle && navbarStyle !== "transparent") {
  document
    .querySelector(".navbar-vertical")
    .classList.add(`navbar-${navbarStyle}`);
}

var navbarPosition = localStorage.getItem("navbarPosition");
var navbarVertical = document.querySelector(".navbar-vertical");
var navbarTopVertical = document.querySelector(".content .navbar-top");
var navbarTop = document.querySelector(
  "[data-layout] .navbar-top:not([data-double-top-nav"
);
var navbarDoubleTop = document.querySelector("[data-double-top-nav]");
var navbarTopCombo = document.querySelector(
  '.content [data-navbar-top="combo"]'
);

if (localStorage.getItem("navbarPosition") === "double-top") {
  document.documentElement.classList.toggle("double-top-nav-layout");
}

if (navbarPosition === "top") {
  navbarTop.removeAttribute("style");
  navbarTopVertical.remove(navbarTopVertical);
  navbarVertical.remove(navbarVertical);
  navbarTopCombo.remove(navbarTopCombo);
  navbarDoubleTop.remove(navbarDoubleTop);
} else if (navbarPosition === "combo") {
  navbarVertical.removeAttribute("style");
  navbarTopCombo.removeAttribute("style");
  navbarTop.remove(navbarTop);
  navbarTopVertical.remove(navbarTopVertical);
  navbarDoubleTop.remove(navbarDoubleTop);
} else if (navbarPosition === "double-top") {
  navbarDoubleTop.removeAttribute("style");
  navbarTopVertical.remove(navbarTopVertical);
  navbarVertical.remove(navbarVertical);
  navbarTop.remove(navbarTop);
  navbarTopCombo.remove(navbarTopCombo);
} else {
  navbarVertical.removeAttribute("style");
  navbarTopVertical.removeAttribute("style");
  navbarTop.remove(navbarTop);
  navbarDoubleTop.remove(navbarDoubleTop);
  navbarTopCombo.remove(navbarTopCombo);
}
