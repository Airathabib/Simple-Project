import { closeBtn } from "./buttons";
import { searchSvg } from "./buttons";

const formFn = () => {

	const container = document.getElementById("header");
	const nav = document.getElementById("nav");
	const searchLink = document.getElementById("searchLink");

	const formContainer = document.createElement("div");
	formContainer.classList.add("form--container");

	const form = document.createElement("form");
	form.classList.add("search-form");

	const input = document.createElement("input");
	input.classList.add("search-input");
	input.placeholder="Найти";
	input.type="text";

	const searchButton = document.createElement("a");
	searchButton.href="#";
	searchButton.classList.add("search-button");
	searchButton.innerHTML = searchSvg;

	const closeSearch = document.createElement("button");
	closeSearch.classList.add("close-btn");
	closeSearch.innerHTML= closeBtn;

	form.insertAdjacentElement("afterbegin", input);
	form.insertAdjacentElement("afterbegin", searchButton);
	form.insertAdjacentElement("beforeend", closeSearch);
	formContainer.appendChild(form);
	container.appendChild(formContainer);

	const width = window.innerWidth;
	const break_point = 1024;

	const openForm = () => {
		formContainer.classList.add("active");
		if(width > break_point) {
			nav.classList.add("header__nav---hidden");
		} else  nav.classList.remove("header__nav---hidden");
	};

	const close = (e) => {
		e.preventDefault();
		formContainer.classList.remove("active");
		if(width > break_point)
			nav.classList.remove("header__nav---hidden");

	};

	searchLink.addEventListener("click", openForm);
	closeSearch.addEventListener("click", close);
};

export default formFn;
