
// scripti galleriaan.
let currentIndex = 0;
const images = document.querySelectorAll('.gallery');
const totalImages = images.length;

// Näytetään oikea kuva
function showImage(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    // Piilotetaan kaikki kuvat
    images.forEach((image, idx) => {
        image.style.display = idx === currentIndex ? 'block' : 'none';
    });
}

// Vaihdetaan kuva nuolinäppäimillä
function changeImage(step) {
    showImage(currentIndex + step);
}

// Alustetaan ensimmäinen kuva näkyviin
showImage(currentIndex);