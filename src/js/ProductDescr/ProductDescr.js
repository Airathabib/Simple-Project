import "./ProductDescr.scss";
import book from "../../assets/img_png/book.png";
import book_1024 from "../../assets/img_png/book_1024.png";
import book_768 from "../../assets/img_png/book_768.png";
import book_510 from "../../assets/img_png/book_510.png";


const ProductDescr = () => {

	const main = document.getElementById("main");
	const section = document.createElement("section");
	section.classList.add("productDescr-section");
	main.appendChild(section);

	const container = document.createElement("div");
	container.classList.add("productDescr__container");
	section.insertAdjacentElement("afterbegin", container);
	const descrContainer = document.createElement("div");
	descrContainer.classList.add("descrContainer__wrapper");
	const imageContainer = document.createElement("div");
	imageContainer.classList.add("imageContainer-wrapper");
	container.insertAdjacentElement("afterbegin", descrContainer);
	container.insertAdjacentElement("beforeend", imageContainer);

	const infoContainer = document.createElement("div");
	infoContainer.classList.add("descrContainer__wrapper-flex");
	descrContainer.insertAdjacentElement("afterbegin", infoContainer);

	const descrContainerTitle = document.createElement("h2");
	descrContainerTitle.classList.add("descrContainer__title");


	const descrContainerText = document.createElement("p");
	descrContainerText.classList.add("descrContainer__text");

	const descrContainerBtn = document.createElement("button");
	descrContainerBtn.classList.add("btn", "descrContainer__btn");

	descrContainerTitle.textContent = "Simple скетчбук";
	descrContainerText.textContent = "80 листов, твердая обложка, бумага  Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!";
	descrContainerBtn.textContent = "Купить";

	infoContainer.insertAdjacentElement("afterbegin", descrContainerTitle);
	infoContainer.insertAdjacentElement("beforeend", descrContainerText);
	descrContainer.insertAdjacentElement("beforeend", descrContainerBtn);
	const picture = document.createElement("picture");
	const source = document.createElement("source");
	const source1 =  document.createElement("source");
	const source2 = document.createElement("source");
	const source3 = document.createElement("source");
	const img = document.createElement("img");

	source.srcset = book;
	source.media = "(min-width: 1024px)";

	source3.srcset = book_768;
	source3.media = "(min-width: 768px)";

	source2.srcset = book_1024;
	source2.media = "(min-width: 510px)";

	source1.srcset = book_510;
	source1.media = "(min-width: 320px)";

	img.src = book_1024;

	imageContainer.insertAdjacentElement("afterbegin", picture);
	picture.insertAdjacentElement("afterbegin", source1);
	picture.insertAdjacentElement("afterbegin", source2);
	picture.insertAdjacentElement("afterbegin", source3);
	picture.insertAdjacentElement("afterbegin", source);
	picture.insertAdjacentElement("beforeend", img);

};

export default ProductDescr;
