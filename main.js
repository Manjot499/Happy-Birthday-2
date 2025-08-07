function wishShower(){
    alert("🥰 Have a fantastic day, Mom!");
}

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'];
let index=0;

// trying to acess the tag with id: "slide"//

const slide = document.getElementById("slide");

function showSlide(){
    slide.src=images[index];
}

function nextSlide(){
    index=(index+1) % images.length;
    showSlide();
}

function prevSlide(){
    index=(index-1 + images.length) % images.length;
    showSlide();
}

showSlide();

for (let i=0; 1<50; i++){
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left=Math.random() * 100 + "vw";
    confetti.style.backgroundColor= `hsl(${math.random() *360}, 100%, 70%`;
     confetti.style.animationDuration=(Math.random() * 2+2) + 's';
     document.body.appendChild(confetti);
}
