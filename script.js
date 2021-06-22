let header = document.querySelector("header");
let size1 = window.matchMedia('(max-width: 480px)');
let size2 = window.matchMedia('(min-width: 481px) and (max-width: 768px)');
let size3 = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
window.onscroll = function(){
	if (window.scrollY > 52) {
		if (size1.matches) {
			header.style.cssText = "height:5rem;"
		}
		else if (size2.matches) {
			header.style.cssText = "height:6rem;"
		}
		else if (size3.matches) {
			header.style.cssText = "height:7rem;"
		}
		else{
			header.style.cssText = "height:8rem;"
		}
	}
	else{
		header.style.cssText = "height:0;"
	}
}