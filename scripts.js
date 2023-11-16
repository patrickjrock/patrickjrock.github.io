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



// Image scrolling stuff

// Sample image folder path
const imagePath = "https://patrickjrock.github.io/images/optic_glioma/";

// Get the image container and the current image element
const imageContainer = document.getElementById("image-container");
const currentImage = document.getElementById("current-image");

// Initialize image index
let currentImageIndex = 1;
const maxImageIndex = 29; // Update this with the actual number of images in the folder

// Preload the first image
preloadImage(currentImageIndex);

// Handle scroll events
function handleScroll(event) {
    // Check if the scroll direction is up or down
    const delta = Math.sign(event.deltaY);

    // Update the current image index based on the scroll direction
    currentImageIndex += delta;

    // Wrap around to the first image if the index exceeds the maximum
    if (currentImageIndex > maxImageIndex) {
        currentImageIndex = 1;
    } else if (currentImageIndex < 1) {
        // Wrap around to the last image if the index is less than 1
        currentImageIndex = maxImageIndex;
    }

    // Load and display the new image
    loadAndDisplayImage(currentImageIndex);

    // Prevent the default scroll behavior
    event.preventDefault();
}

// Preload an image
function preloadImage(index) {
    const image = new Image();
    image.src = `${imagePath}Anonymize.Seq9.Ser12.Img${index}.jpg`;
}

// Load and display an image
function loadAndDisplayImage(index) {
    currentImage.src = `${imagePath}Anonymize.Seq9.Ser12.Img${index}.jpg`;

    // Preload the next image
    preloadImage(index + 1);
}

// Load and display the initial image
loadAndDisplayImage(currentImageIndex);
