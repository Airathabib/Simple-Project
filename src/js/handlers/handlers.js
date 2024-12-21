import logo from "../../assets/svg/logo.svg";

// LOGO
export function headerLogo() {
	const logoContainer = document.createElement("div");
	const container = document.getElementById("header");
	logoContainer.classList.add("logo-container");
	container.insertAdjacentElement("afterbegin", logoContainer);
	const img = document.createElement("img");
	logoContainer.insertAdjacentElement("afterbegin", img);
	img.src = logo;
}


// NAVIGATION
export function nav() {
	const navigation = document.createElement("nav");
	navigation.setAttribute("id", "nav");
	const navList = document.createElement("ul");
	const container = document.getElementById("header");

	navigation.classList.add("nav", "header__nav");
	navList.classList.add("nav__list");

	container.insertAdjacentElement("afterbegin", navigation);
	navigation.insertAdjacentElement("afterbegin", navList);

	const renderItem = (val) => {
		const item = document.createElement("li");
		const link = document.createElement("a");

		item.classList.add("nav__item");
		link.classList.add("nav__link");

		link.href = "#";

		link.textContent = val;

		navList.insertAdjacentElement("afterbegin", item);
		item.insertAdjacentElement("afterbegin", link);
	};
	renderItem("О нас");
	renderItem("Контакты");
	renderItem("Материалы");
	renderItem("Продукция");
}


//Burger
export function burgerMenu(burger) {
	const renderSpan = () => {
		const span = document.createElement("span");
		burger.insertAdjacentElement("afterbegin", span);
	};
	renderSpan();
	renderSpan();
	renderSpan();
}


//Slider
export  function slider () {
	const slider = document.querySelectorAll(".slider-image");
	let currentSliderIndex = 0;

	function showSlide() {
		slider[currentSliderIndex].classList.add("block");
	}
	function hideSlide() {
		slider[currentSliderIndex].classList.remove("block");
	}

	function changeSlide (slideIndex){
		hideSlide();
		currentSliderIndex = slideIndex;
		showSlide();
	}

	function nextSlide() {
		let newSlideIndex = currentSliderIndex + 1;
		if(newSlideIndex > slider.length -1){
			newSlideIndex = 0;
		}
		changeSlide(newSlideIndex);
	}
	setInterval(nextSlide, 3000);

}
