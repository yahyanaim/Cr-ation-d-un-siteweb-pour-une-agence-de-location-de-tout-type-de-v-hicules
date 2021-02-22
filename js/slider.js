var slideBtn = document.getElementsByClassName('slide-btn');
var slide = document.getElementById("slide");

slideBtn[0].onclick = function() {
  slide.style.transform = 'translateX(0rem)';
  for(i=0; i<4; i++) {
    slideBtn[i].classList.remove('active');
  } this.classList.add('active');
}
slideBtn[1].onclick = function() {
  slide.style.transform = 'translateX(-45rem)';
  for(i=0; i<4; i++) {
    slideBtn[i].classList.remove('active');
  } this.classList.add('active');
}
slideBtn[2].onclick = function() {
  slide.style.transform = 'translateX(-90rem)';
  for(i=0; i<4; i++) {
    slideBtn[i].classList.remove('active');
  } this.classList.add('active');
}
slideBtn[3].onclick = function() {
  slide.style.transform = 'translateX(-135rem)';
  for(i=0; i<4; i++) {
    slideBtn[i].classList.remove('active');
  } this.classList.add('active');
}