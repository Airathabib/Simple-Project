export class Card {
	constructor(container, img, title, descr) {
		this.container = container;
		this.img = img;
		this.title = title;
		this.descr = descr;
	}
	render() {
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("card-container");
		const imgContainer = document.createElement("div");
		imgContainer.classList.add("img-card");
		const image = document.createElement("img");
		image.src = this.img;
		imgContainer.appendChild(image);

		const cardText = document.createElement("div");
		cardText.classList.add("card-text");
		const cardTitle = document.createElement("h3");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = this.title;

		const cardDescription = document.createElement("p");
		cardDescription.classList.add("card-description");
		cardDescription.textContent = this.descr;

		cardText.appendChild(cardTitle);
		cardText.appendChild(cardDescription);

		cardContainer.appendChild(imgContainer);
		cardContainer.appendChild(cardText);
		this.container.appendChild(cardContainer);
	}
}

export class PartnersCard {
	constructor(container, img, img_2, img_3) {
		this.container = container;
		this.img = img;
		this.img_2 = img_2;
		this.img_3 = img_3;
	}

	render() {
		const cardContainer = document.createElement("div");
		cardContainer.classList.add("partnersCards-container", "slider-image");
		const imgWrapper = document.createElement("div");
		imgWrapper.classList.add("partnersImg-wrapper");

		const picture = document.createElement("picture");
		const source1  = document.createElement("source");
		const source2  = document.createElement("source");
		const source3  = document.createElement("source");
		const source4  = document.createElement("source");

		source1.srcset = this.img;
		source1.media = "(min-width: 1440px)";

		source2.srcset = this.img;
		source2.media = "(min-width: 768px)";

		source3.srcset = this.img_2;
		source3.media = "(min-width: 510px)" ;

		source4.srcset = this.img_3;
		source4.media = "(min-width: 320px)" ;

		const img = document.createElement("img");
		img.src = this.img;
		img.alt = "partners image";

		imgWrapper.appendChild(picture);
		picture.insertAdjacentElement("afterbegin", source4);
		picture.insertAdjacentElement("afterbegin", source3);
		picture.insertAdjacentElement("afterbegin", source2);
		picture.insertAdjacentElement("afterbegin", source1);
		picture.insertAdjacentElement("beforeend" , img);
		cardContainer.appendChild(imgWrapper);
		this.container.appendChild(cardContainer);
	}
}

export class PromoCard {
	constructor(container, img, title, circular, description, link, arrow) {
		this.container = container;
		this.img = img;
		this.title = title;
		this.circular = circular;
		this.description = description;
		this.link = link;
		this.arrow = arrow;
	}

	render() {
		const cardsContainer = document.createElement("div");
		cardsContainer.classList.add("cards-container");
		const imgWrapper = document.createElement("div");
		imgWrapper.classList.add("img-wrapper");
		const img = document.createElement("img");
		img.src = this.img;
		imgWrapper.appendChild(img);

		const infoWrapper = document.createElement("div");
		infoWrapper.classList.add("info-wrapper");
		const cardsTitle = document.createElement("h3");
		cardsTitle.classList.add("cards-title");
		cardsTitle.textContent = this.title;

		const infoCircular = document.createElement("span");
		infoCircular.classList.add("info-circular");
		infoCircular.textContent = this.circular;

		const infoDescription = document.createElement("p");
		infoDescription.classList.add("info-description");
		infoDescription.textContent = this.description;

		const infoLink = document.createElement("a");
		infoLink.href= "#";
		infoLink.classList.add("info-link");
		infoLink.textContent = this.link;

		const arrowImg = document.createElement("span");
		arrowImg.classList.add("link-arrow");
		infoLink.appendChild(arrowImg);
		arrowImg.innerHTML = this.arrow;

		infoWrapper.appendChild(cardsTitle);
		infoWrapper.appendChild(infoCircular);
		infoWrapper.appendChild(infoDescription);

		cardsContainer.appendChild(imgWrapper);
		cardsContainer.appendChild(infoWrapper);
		cardsContainer.appendChild(infoLink);

		this.container.appendChild(cardsContainer);

	}
}

