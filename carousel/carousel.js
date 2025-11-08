const images = document.querySelectorAll(".carousel img");
let index = 0;

function showImage() {
  images.forEach(img => img.classList.remove("active"));
  images[index].classList.add("active");
}

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
}, 2000);
