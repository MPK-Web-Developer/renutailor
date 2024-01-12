// {------ Start Variables ------}
const headerNavigation = document.querySelector(".header-navigation");
const navigationToggle = document.querySelector(".mobile-nav-toggle");
const toggleIcon = document.querySelectorAll(".mobile-nav-toggle--icon i");
// {------ End Variables --------}

// {------ Start Active Page ------}
// {------ End Active Page --------}

// {------ Start Nav Bar ------}
navigationToggle.addEventListener("click", () => {
  const visibility = headerNavigation.getAttribute("data-visible");
  const expanded = navigationToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    headerNavigation.setAttribute("data-visible", true);
    navigationToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    headerNavigation.setAttribute("data-visible", false);
    navigationToggle.setAttribute("aria-expanded", false);
  }

  if (expanded === "false") {
    toggleIcon[0].classList.remove("icon-active");
    toggleIcon[1].classList.add("icon-active");
  } else {
    toggleIcon[0].classList.add("icon-active");
    toggleIcon[1].classList.remove("icon-active");
  }
});
// {------ End Nav Bar --------}

// {------ Start Header ------}
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// {------ End Header --------}

// {------ Start Slider ------}

var slide = document.getElementsByClassName("slide"),
  rightArrow = document.getElementsByClassName("rightArrow")[0],
  leftArrow = document.getElementsByClassName("leftArrow")[0];

leftArrow.onclick = function () {
  var temp = slide[0].getAttribute("class");
  slide[0].setAttribute("class", slide[1].getAttribute("class"));
  slide[1].setAttribute("class", slide[2].getAttribute("class"));
  slide[2].setAttribute("class", temp);
};

rightArrow.onclick = function () {
  var temp = slide[0].getAttribute("class");
  console.log(temp);

  slide[0].setAttribute("class", slide[2].getAttribute("class"));

  slide[2].setAttribute("class", slide[1].getAttribute("class"));

  slide[1].setAttribute("class", temp);
};
// {------ End Slider --------}

// {------ Start Infinite Scroll ------}
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
// {------ End Infinite Scroll --------}

// {------ Start Glass Color Effect ------}
let glassButton = document.querySelectorAll(".glass-color-effect");
glassButton.forEach((singleButton) => {
  singleButton.onmousemove = function (e) {
    let x = e.pageX - singleButton.offsetLeft;
    let y = e.pageY - singleButton.offsetTop;

    singleButton.style.setProperty("--x", x + "px");
    singleButton.style.setProperty("--y", y + "px");
  };
});
// {------ End Glass Color Effect --------}
