//  Script para navegação bar com efeito de on scroll - sticky 

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY > 0);
});