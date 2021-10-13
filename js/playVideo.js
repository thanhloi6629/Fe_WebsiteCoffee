// Video 1
const video1 = document.getElementById("video1");
const iconPlay1 = document.getElementById("iconPlay1");

function togglePlay1() {
	if (video1.paused || video1.ended) {
		video1.play();
	} else {
		video1.pause();
	}
}

iconPlay1.addEventListener("click", togglePlay1);
video1.addEventListener("playing", function () {
	iconPlay1.style.opacity = 0;
});
video1.addEventListener("pause", function () {
	iconPlay1.style.opacity = 1;
});


// Video 2
const video2 = document.getElementById("video2");
const iconPlay2 = document.getElementById("iconPlay2");

function togglePlay2() {
	if (video2.paused || video2.ended) {
		video2.play();
	} else {
		video2.pause();
	}
}

iconPlay2.addEventListener("click", togglePlay2);
video2.addEventListener("playing", function () {
	iconPlay2.style.opacity = 0;
});
video2.addEventListener("pause", function () {
	iconPlay2.style.opacity = 1;
});
