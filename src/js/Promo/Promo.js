import "./Promo.scss";
import { PromoCard } from "../Classes/Classes";
import { data } from "./data";


const Promo = () => {
	const main = document.getElementById("main");
	const infoSection = document.createElement("section");
	infoSection.classList.add("promo-section");
	const promoContainer = document.createElement("div");
	promoContainer.classList.add("promo__container", "promo");

	main.appendChild(infoSection);
	infoSection.appendChild(promoContainer);

	const cards = () =>{
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("card-wrapper");
		promoContainer.appendChild(cardContainer);
		const card = data.map(item => new PromoCard(cardContainer, item.img, item.title, item.circular, item.descr, item.link, item.arrow));
		card.forEach(item => item.render());
	};
	cards();
};



export default Promo;
