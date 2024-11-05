let train = document.querySelector(".train");

let position = train.offsetLeft;

let screenWidth = window.innerWidth;

let speed = 15;

function trainMove() {

    position += speed;

    train.style.left = `${position}px`;

    if (position >= screenWidth) {

        position = (-screenWidth * 1.5);

    }

    requestAnimationFrame(trainMove);

}

trainMove();