// {------ Start Variables ------}

// {------ End Variables --------}

// {------ Start Header ------}
window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
// {------ End Header --------}
