let currentImageIndex = 0;
let images = [];

function openLightbox(src) {
  images = Array.from(document.querySelectorAll('.gallery-item')).map(img => img.src);
  currentImageIndex = images.indexOf(src);

  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;

  document.getElementById("lightbox-img").src = images[currentImageIndex];
}

function filterImages(category) {
  let items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "inline";
    } else {
      item.style.display = "none";
    }
  });
}