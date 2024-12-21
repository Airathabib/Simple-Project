import "./Info.scss";
import { Card } from "../Classes/Classes";
import firstCard from "../../assets/img_png/Buissnes Cards-1_1440.png";
import secondCard from "../../assets/img_png/Buissnes Cards-2_1440png.png";
import thirdCard from "../../assets/img_png/Buissnes Cards-3_1440.png";
import mainImage1024 from "../../assets/img_png/Folder-main.png";
import mainImage from "../../assets/img_png/Folder_Main_1024.png";


const Info = () => {
	const main = document.getElementById("main");
	const infoSection = document.createElement("section");
	infoSection.classList.add("info-section");
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("info__container", "info");
	infoSection.appendChild(infoContainer);
	main.appendChild(infoSection);

	const cards = () => {
		const cardsContainer = document.createElement("div");
		cardsContainer.classList.add("cards-container");
		infoContainer.appendChild(cardsContainer);
		const card1 = new Card(cardsContainer, firstCard, "V.1", "Результат вашего обучения");
		const card2 = new Card(cardsContainer, secondCard, "V.2", "Результат вашего обучения");
		const card3 = new Card(cardsContainer, thirdCard, "V.3", "Результат вашего обучения");

		card1.render();
		card2.render();
		card3.render();
	};

	cards();

	const mainContainer = document.createElement("div");
	mainContainer.classList.add("info-container");

	const mainImg = document.createElement("div");
	mainImg.classList.add("main-img");
	const picture = document.createElement("picture");
	const source = document.createElement("source");

	source.srcset = mainImage1024;
	source.media =  "(min-width: 1024px)";

	const img = document.createElement("img");
	img.src = mainImage;

	img.alt = "Картинка";

	mainImg.append(picture);
	picture.insertAdjacentElement("afterbegin", source);
	picture.insertAdjacentElement("beforeend", img);
	mainContainer.appendChild(mainImg);
	infoContainer.appendChild(mainContainer);

	const infoText = document.createElement("div");
	infoText.classList.add("info-text");
	const mainTitle = document.createElement("h2");
	mainTitle.classList.add("main-title", "title");
	mainTitle.textContent = "Максимальная белизна";

	const mainDesc = document.createElement("p");
	const mainDesc2 = document.createElement("p");
	const Description = document.createElement("div");
	Description.classList.add("wrapper-description");
	mainDesc.classList.add("main-desc", "desc");
	mainDesc2.classList.add("main-desc", "desc");
	mainDesc.textContent = "Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.";
	mainDesc2.textContent = "Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.";
	mainContainer.append(infoText);
	infoText.append(mainTitle);
	infoText.append(Description);
	Description.append(mainDesc);
	Description.append(mainDesc2);
};

export default Info;
