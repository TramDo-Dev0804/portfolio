if ($(".custom-cursor").length) {
	var cursor = document.querySelector(".custom-cursor__cursor");
	var cursorinner = document.querySelector(".custom-cursor__cursor-two");
	var a = document.querySelectorAll("a");

	document.addEventListener("mousemove", function (e) {
		var x = e.clientX;
		var y = e.clientY;
		cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
	});

	document.addEventListener("mousemove", function (e) {
		var x = e.clientX;
		var y = e.clientY;
		cursorinner.style.left = x + "px";
		cursorinner.style.top = y + "px";
	});

	document.addEventListener("mousedown", function () {
		cursor.classList.add("click");
		cursorinner.classList.add("custom-cursor__innerhover");
	});

	document.addEventListener("mouseup", function () {
		cursor.classList.remove("click");
		cursorinner.classList.remove("custom-cursor__innerhover");
	});

	a.forEach((item) => {
		item.addEventListener("mouseover", () => {
			cursor.classList.add("custom-cursor__hover");
		});
		item.addEventListener("mouseleave", () => {
			cursor.classList.remove("custom-cursor__hover");
		});
	});
}
// 
$(document).ready(function () {
	$('.customer-logos').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: false,
		cssEase: 'linear',
		slidesToShow: 5,
		draggable: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToScroll: 1,
		variableWidth: false,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 776,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	});
});
$(document).ready(function () {
	$('.feedbacks').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true,
		arrows: false,
		dots:true,
		responsive: [
			{
				breakpoint: 580,
				settings: {
					arrows: false,
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 3000
				}
			}
		]
	});
});