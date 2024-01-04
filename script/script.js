// {------ Start Variables ------}
const headerNavigation = document.querySelector(".header-navigation");
const navigationToggle = document.querySelector(".mobile-nav-toggle");
const toggleIcon = document.querySelectorAll(".mobile-nav-toggle--icon i");
// {------ End Variables --------}

// {------ Start Active Page ------}
/*
const linkActivePage = window.location.pathname;
const navigationLinks = document.querySelectorAll(
	"nav ul.header-navigation li a"
);
navigationLinks.forEach((getLink) => {
	if (getLink.href.includes(`${linkActivePage}`)) {
		getLink.classList.add("nav-active");
	}
});
*/
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
const sliderContainer = document.querySelector(".slider-container");
const sliderControlsContainer = document.querySelector(".slider-controls");
const sliderControls = ["previous", "next"];
const sliderItem = document.querySelectorAll(".slider-item");

class Carousel {
	constructor(container, items, controls) {
		this.carouselContainer = container;
		this.carouselControls = controls;
		this.carouselArray = [...items];
	}

	updateSlider() {
		this.carouselArray.forEach((el) => {
			el.classList.remove("slider-item-1");
			el.classList.remove("slider-item-2");
			el.classList.remove("slider-item-3");
			el.classList.remove("slider-item-4");
			el.classList.remove("slider-item-5");
		});

		this.carouselArray.slice(0, 5).forEach((el, i) => {
			el.classList.add(`slider-item-${i + 1}`);
		});
	}

	setCurrentState(direction) {
		if (direction.className == "slider-controls-previous") {
			this.carouselArray.unshift(this.carouselArray.pop());
		} else {
			this.carouselArray.push(this.carouselArray.shift());
		}
	}

	setControls() {
		this.carouselControls.forEach((control) => {});
	}
}

// {------ End Slider --------}

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
