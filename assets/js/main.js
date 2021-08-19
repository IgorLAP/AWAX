const myslide = document.querySelectorAll('.banner .slide'),
    secondSlide = document.querySelectorAll('.default.gray .slide'),
    dot = document.querySelectorAll('.banner .pointer'),
    secondDot = document.querySelectorAll('.default.gray .pointer');
let counter = 1;
slidefun(counter);
let timer = setInterval(autoSlide, 6000);

//Eventos
document.querySelector('.menu-opener').addEventListener('click', menuOpen);

//Functions
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 6000);
}
function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
    }
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
    dot[counter - 1].className += " active";
    
    //secondSlide
    for(i = 0;i<secondSlide.length;i++){
		secondSlide[i].style.display = "none";
    }
    for(i = 0;i<secondDot.length;i++) {
		secondDot[i].className = secondDot[i].className.replace(' active', '');
    }
    if(n > secondSlide.length){
        counter = 1;
        }
     if(n < 1){
        counter = secondSlide.length;
    }
    secondSlide[counter - 1].style.display = "block";
    secondDot[counter - 1].className += " active";
}
function menuOpen(){
    if(document.querySelector('nav').style.display === 'block'){
        document.querySelector('nav').style.display = 'none';
    } else {
        document.querySelector('nav').style.display = 'block';
    }
}
function subir(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
}