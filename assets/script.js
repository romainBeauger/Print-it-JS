const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector(".banner-text");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const dotsContainer = document.querySelector(".dots");


function updateSlide() {

    // bannerImg.style.opacity = 0.1;

    // setTimeout(() => {
        bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
        bannerText.innerHTML = slides[index].tagLine;
    
        // Met à jour les points
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        // bannerImg.style.opacity = 1;
    // }, 300);
}

rightArrow.addEventListener("click", () => {
    console.log("Index avant modulo right : " + index);
    index = (index + 1) % slides.length;
    console.log("Index apres modulo right: "+ index);
    updateSlide();
});

leftArrow.addEventListener("click", () => {
    console.log("Index avant modulo left : " + index);
    index = (index - 1 + slides.length) % slides.length;
    console.log("Index apres modulo left: "+ index);
    updateSlide();
});

// Création des points
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0){
        dot.classList.add("active");// On surligne le premier point au chargement de la page
    }
    dot.dataset.index = i; // on utilise data-index du HTML pour stocker l'index du slide correspondant à ce point 
    
    dot.addEventListener("click", (e) => { // si on clique sur un point
        index = parseInt(e.target.dataset.index); // on récupère l'index du point cliqué on le convertit en entier et on stocke le résultat dans la variable index
    // console.log(index)

        updateSlide(); // on met à jour l'image, texte et point actif
    });
    dotsContainer.appendChild(dot); // on ajout les points dans la div avec la class .dots
});



// setInterval(() => {
//     index = (index + 1) % slides.length;
//     updateSlide();
// }, 2500); 