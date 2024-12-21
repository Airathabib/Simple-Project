import "./Scroll.scss";
import { scrollBtn } from "./scrollBtn";

function Scroll() {
	const main = document.getElementById("main");

	const goTopBtn = document.createElement("button");
	goTopBtn.classList.add("up-btn");
	goTopBtn.innerHTML = scrollBtn;

	main.appendChild(goTopBtn);

	if (goTopBtn !== null) {
		goTopBtn.addEventListener("click", goTop);
		window.addEventListener("scroll", trackScroll, { passive: true });
	}

	// определяем функцию  которая вычисляет высоту видимой части экрана и вешает или убирает классы с кнопки
	function trackScroll() {
		const offset = window.scrollY;
		const coords = document.documentElement.clientHeight;
		if (offset > coords) {
			goTopBtn.classList.add("up-btn--show");
		} else {
			goTopBtn.classList.remove("up-btn--show");
		}
	}

	// определяем функцию которая прокручивает экран наверх
	function goTop() {
		if (window.scrollY > 0) {
			window.scrollBy(0, -35);
			setTimeout(goTop, 5);
		}
	}
}

export default Scroll;
