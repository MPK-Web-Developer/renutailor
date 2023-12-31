// {------ Start Variables ------}
const headerNavigation = document.querySelector(".header-navigation");
const navigationToggle = document.querySelector(".mobile-nav-toggle");
const toggleIcon = document.querySelectorAll(".mobile-nav-toggle--icon i");
// {------ End Variables --------}

// {------ Start Active Page ------}
const linkActivePage = window.location.pathname;
const navigationLinks = document.querySelectorAll(
	"nav ul.header-navigation li a"
);
navigationLinks.forEach((getLink) => {
	if (getLink.href.includes(`${linkActivePage}`)) {
		console.log(getLink);
		getLink.classList.add("nav-active");
	}
});
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
