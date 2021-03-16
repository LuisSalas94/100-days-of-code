let slider_img = document.querySelector(".slider-img");
let images = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg"];
let i = 0;

function prev() {
	if (i <= 0) i = images.length;
	i--;
	return setImg();
}

function next() {
	if (i >= images.length - 1) i = -1;
	i++;
	return setImg();
}

function setImg() {
	return slider_img.setAttribute("src", "img/" + images[i]);
}
