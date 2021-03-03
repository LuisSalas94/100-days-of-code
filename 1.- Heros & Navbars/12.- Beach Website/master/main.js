let backVideo = document.getElementById("backVideo");
let playBtn = document.getElementById("playBtn");
let icon = document.getElementById("icon");

playBtn.onclick = function () {
	backVideo.style.display = "block";

	if (backVideo.paused) {
		backVideo.play();
		icon.src = "img/pause.png";
	} else {
		backVideo.pause();
		icon.src = "img/play.png";
	}
};
