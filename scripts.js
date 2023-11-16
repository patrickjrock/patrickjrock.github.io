let currentSlide = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {
        currentSlide = 1;
    } 
    if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}

// Initial display
showSlide(currentSlide);

// Navigate between slides using arrow keys
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // Left arrow key
        showSlide(currentSlide -= 1);
    } else if (event.keyCode === 39) { // Right arrow key
        showSlide(currentSlide += 1);
    }
});
