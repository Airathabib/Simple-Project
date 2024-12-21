import "./Hero.scss";
import heroImg from "../../assets/img_png/Layer 2 copy.png";

const app = document.getElementById("app");

function Hero() {
	const main = document.createElement("main");
	main.setAttribute("id", "main");
	main.classList.add("main");

	app.append(main);
	const heroSection = document.createElement("section");
	const hero = document.createElement("div");

	heroSection.classList.add("hero-section");
	hero.classList.add("hero", "hero__container");

	main.insertAdjacentElement("beforeend", heroSection);
	heroSection.insertAdjacentElement("afterbegin", hero);

	const heroInfo = document.createElement("div");
	const heroImage = document.createElement("div");
	const imgHero = document.createElement("img");

	heroImage.classList.add("hero__image");
	heroInfo.classList.add("hero__info");

	hero.insertAdjacentElement("afterbegin", heroInfo);
	hero.insertAdjacentElement("beforeend", heroImage);

	const heroTitle = document.createElement("h1");
	heroTitle.classList.add("hero__title", "title");

	const heroText = document.createElement("p");
	heroText.classList.add("hero__descr", "descr");

	const heroBtn = document.createElement("button");
	heroBtn.classList.add("hero__btn", "btn");

	heroTitle.textContent = "Простые вещи. Из бумаги";
	heroText.textContent = "Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.";
	heroBtn.textContent = "Каталог";

	heroInfo.insertAdjacentElement("afterbegin", heroText);
	heroInfo.insertAdjacentElement("afterbegin", heroTitle);
	heroInfo.insertAdjacentElement("beforeend", heroBtn);

	heroImage.insertAdjacentElement("afterbegin", imgHero);
	imgHero.src = heroImg;

}

export default Hero;
