import "./Header.scss";
import { nav } from "../handlers/handlers";
import { headerLogo } from "../handlers/handlers";
import formFn from "./searchForm";
import { searchSvg } from "./buttons";
import { loginSvg } from "./buttons";
import { burgerMenu } from "../handlers/handlers";


function Header() {

	const app = document.getElementById("app");
	const header = document.createElement("div");
	const container = document.createElement("div");
	container.setAttribute("id", "header");

	header.classList.add("header");
	container.classList.add("header__container");

	app.insertAdjacentElement("afterbegin", header);
	header.insertAdjacentElement("afterbegin", container);

	const burgerBtn = document.createElement("button");
	burgerBtn.classList.add("header__burger-btn");
	header.insertAdjacentElement("afterbegin", burgerBtn);


	const iconContainer = document.createElement("div");
	iconContainer.classList.add("icon-container");
	container.insertAdjacentElement("afterbegin", iconContainer);

	const searchLink = document.createElement("button");
	searchLink.classList.add("icon__link", "search__btn");
	searchLink.setAttribute("id", "searchLink");
	searchLink.innerHTML = searchSvg;
	iconContainer.insertAdjacentElement("afterbegin", searchLink);

	const logSearch = document.createElement("a");
	logSearch.href = "#";
	logSearch.classList.add("icon__link", "log__link");
	logSearch.innerHTML = loginSvg;
	iconContainer.insertAdjacentElement("beforeend", logSearch);


	burgerBtn.addEventListener("click", () => {
		header.classList.toggle("open");
	});

	nav();
	headerLogo();
	formFn();
	burgerMenu(burgerBtn);

}

export default Header;
