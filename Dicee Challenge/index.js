const image1 = document.querySelector('img.img1');
const image2 = document.querySelector('img.img2');

const player1Num = Math.floor(Math.random() * 6)+1;
const player2Num = Math.floor(Math.random() * 6)+1;

const whichDice = (img, num) => {
    switch(num) {
        case 1:
        img.src = "images/dice1.png";
        break;
        case 2:
        img.src = "images/dice2.png";
        break;
        case 3:
        img.src = "images/dice3.png";
        break;
        case 4:
        img.src = "images/dice4.png";
        break;
        case 5:
        img.src = "images/dice5.png";
        break;
        case 6:
        img.src = "images/dice6.png";
        break;
    }
}

whichDice(image1, player1Num);
whichDice(image2, player2Num);