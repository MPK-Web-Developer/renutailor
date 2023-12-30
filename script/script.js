// {------ Start Variables ------}
const headerNavigation = document.querySelector(".header-navigation");
const navigationToggle = document.querySelector(".mobile-nav-toggle");
// {------ End Variables --------}

// {------ Start Nav Bar ------}
navigationToggle.addEventListener("click", () => {
	const visibility = headerNavigation.getAttribute("data-visible");

	if (visibility === "false") {
		headerNavigation.setAttribute("data-visible", true);
		navigationToggle.setAttribute("aria-expanded", true);
	} else if (visibility === "true") {
		headerNavigation.setAttribute("data-visible", false);
		navigationToggle.setAttribute("aria-expanded", false);
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
