import "./Footer.scss";
import { facebook } from "./socialIcon";
import { twitter } from "./socialIcon";
import { insta } from "./socialIcon";
import { youtube } from "./socialIcon";
import logo from "../../assets/svg/footerLogosvg.svg";

const Footer = () => {

	const app = document.getElementById("app");
	const container = document.createElement("div");
	container.classList.add("footer");

	const footerTop = document.createElement("div");
	footerTop.classList.add("footerTop");

	const footerBottom = document.createElement("div");
	footerBottom.classList.add("footerBottom");

	app.appendChild(container);

	container.insertAdjacentElement("afterbegin", footerTop);
	container.insertAdjacentElement("beforeend", footerBottom);

	const footerTopContainer = document.createElement("div");
	footerTopContainer.classList.add("footerTop__container");

	const footerBottomContainer = document.createElement("div");
	footerBottomContainer.classList.add("footerBottom__container");

	footerTop.appendChild(footerTopContainer);
	footerBottom.appendChild(footerBottomContainer);

	const logoContainer = document.createElement("div");
	logoContainer.classList.add("footer-logo");
	footerTopContainer.insertAdjacentElement("afterbegin", logoContainer);

	const img = document.createElement("img");
	logoContainer.insertAdjacentElement("afterbegin", img);
	img.src = logo;

	const socialList = document.createElement("ul");
	socialList.classList.add("social__list");
	footerTopContainer.insertAdjacentElement("beforeend", socialList);

	const renderItem = (val) => {
		const item = document.createElement("li");
		const link = document.createElement("a");

		item.classList.add("social__item");
		link.classList.add("social__link");

		link.href = "#";

		link.innerHTML = val;

		socialList.insertAdjacentElement("afterbegin", item);
		item.insertAdjacentElement("afterbegin", link);
	};

	renderItem(youtube);
	renderItem(insta);
	renderItem(twitter);
	renderItem(facebook);

	const footerBottomText = document.createElement("span");
	footerBottomText.textContent = "Simple ® 2021";
	footerBottomContainer.appendChild(footerBottomText);
};


export default Footer;

