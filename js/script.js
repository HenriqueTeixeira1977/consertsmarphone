//  Script para navegação bar com efeito de on scroll - sticky 

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY > 0);
});

//Script para Navigation sidebar menu responsivo

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
	menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove('active');
});

//  <!-- Google tag (gtag.js) -->
//  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ME463Y3KBD"></script>
//  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ME463Y3KBD');
//  </script>