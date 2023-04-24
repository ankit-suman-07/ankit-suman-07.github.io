import { update as updateSnake, draw as drawSnake,  SNAKE_SPEED , getSnakeHead, snakeIntersection} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js";



let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

// Get the modal
const modal = document.getElementById('myModal');

const confirmYesButton = document.getElementById('confirmYes');
const confirmNoButton = document.getElementById('confirmNo');

function main(currentTime) {

    if(gameOver) {
        // if (confirm('You Lost!!! Press OK to restart')) {
        //     window.location = '/';
        // }
        // Display the modal
        modal.style.display = 'block';
        
        return
    }

    confirmYesButton.onclick = function() {
        // User clicked the "Yes" button
        // Hide the modal
        modal.style.display = 'none';
        window.location = '/';
        
      }
      
      confirmNoButton.onclick = function() {
        // User clicked the "No" button or the close button
        modal.style.display = 'none';
      }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    // console.log('Move');
    lastRenderTime = currentTime;

    update()
    draw()
    
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}