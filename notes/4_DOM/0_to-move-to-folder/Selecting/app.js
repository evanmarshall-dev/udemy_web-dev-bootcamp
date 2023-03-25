const allImages = document.getElementsByTagName("img");

for (const img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");

for (const img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a");

for (const link of links) {
  console.log(link.href);
}
