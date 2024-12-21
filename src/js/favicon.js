import favicon from "../assets/favicon/favicon.ico";

const Favicon = () => {
	const head = document.querySelector("head");
	const headLink = document.createElement("link");
	headLink.rel = "icon";
	headLink.href = favicon;
	head.appendChild(headLink);
};

export default Favicon;
