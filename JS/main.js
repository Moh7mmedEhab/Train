let train = document.querySelector(".train");

let position = train.offsetLeft;

let screenWidth = window.innerWidth;

let speed = 20;

window.addEventListener("resize", () => {

    let screenWidth = window.innerWidth;

});

function trainMove() {

    position += speed;

    train.style.left = `${position}px`;

    if (position >= screenWidth) {

        position = (-2525 * 1.5);

    }

    requestAnimationFrame(trainMove);

}

trainMove();