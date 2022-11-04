const imgaes = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg",
];

const chosenImage = imgaes[Math.floor(Math.random()*imgaes.length)];

const bgImage = document.createElement("img");
const container = document.querySelector(".bg-container");
bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

// container.appendChild(bgImage);