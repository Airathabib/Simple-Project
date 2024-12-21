import "./Partners.scss";
import { PartnersCard } from "../Classes/Classes";
import { data } from "./data";
import { slider } from "../handlers/handlers";

const Partners = () => {
	const main = document.getElementById("main");
	const partnersSection = document.createElement("section");
	partnersSection.classList.add("partners-section");
	const partnersContainer = document.createElement("div");
	partnersContainer.classList.add("partners__container", "partners", "slider-container");

	main.appendChild(partnersSection);
	partnersSection.appendChild(partnersContainer);

	const cards = () => {
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("partnersCard-wrapper", "slider");
		partnersContainer.appendChild(cardContainer);
		const card = data.map(item => new PartnersCard(cardContainer, item.img, item.img_2, item.img_3));
		card.forEach(item => item.render());

	};
	cards();

	const callSlider = () => {
		const width = window.innerWidth;
		const break_point = 576;
		if (width < break_point) {
			slider();
		}
	};

	setTimeout(callSlider, 4000);

};

export default Partners;
