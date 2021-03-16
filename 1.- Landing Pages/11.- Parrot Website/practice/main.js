let slider_img = document.querySelector(".slider-img");
let images = ["pic1.png", "pic2.png", "pic3.png", "pic4.png"];
let i = 0;

function next() {
	if (i >= images.length - 1) i = -1;
	i++;
	return setImg();
}

function setImg() {
	return slider_img.setAttribute("src", "img/" + images[i]);
}
