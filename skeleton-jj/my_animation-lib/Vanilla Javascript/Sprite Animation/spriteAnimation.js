const canvasWidth = 300;
const canvasHeight = 300;
const sheetWidth = 982;
const sheetHeight = 572;
const spriteCols = 8;
const spriteRows = 5;
const spriteWidth = sheetWidth / spriteCols;
const spriteHeight = sheetHeight / spriteRows;

let x = 0;
let y = 0;
let cnt = 0;
let srcY;
let srcX;

let currentFrameX = 0;
let currnetFrameY = 0;
let character = new Image();
character.src = "explosion.png"

const canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
let ctx = canvas.getContext('2d');

function updateFrame(){
    currentFrameX = ++currentFrameX % spriteCols;
    cnt++
    if (cnt === spriteCols) {
        currnetFrameY++
        if (currnetFrameY > 5) {
            currnetFrameY = 0
        }
        cnt = 0
    }
    srcX = currentFrameX * spriteWidth;
    srcY = currnetFrameY * spriteHeight;

    ctx.clearRect(x,y, spriteWidth, spriteHeight)
}

function drawImage(){
    updateFrame();
    ctx.drawImage(character, srcX, srcY, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
}

setInterval(function(){
    drawImage();
}, 50);