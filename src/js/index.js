import "../style/style.scss";
import Favicon from "./favicon.js";
import Scroll from "./Scroll/Scroll.js";
import Header from "./Header/Header.js";
import Hero from "./Hero/Hero.js";
import Info from "./Info/Info.js";
import Promo from "./Promo/Promo";
import Partners from "./Partners/Partners.js";
import ProductDescr from "./ProductDescr/ProductDescr.js";
import Footer from "./Footer/Footer.js";


document.addEventListener("DOMContentLoaded", function () {
	Favicon();
	Header();
	Hero();
	Info();
	Promo();
	Partners();
	ProductDescr();
	Scroll();
	Footer();
});
