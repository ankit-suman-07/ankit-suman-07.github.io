let gridContainer = document.getElementById('game-board');
let life_counter = document.getElementById('lives');
let score_counter = document.getElementById('score');

// let upButton = document.getElementsByClassName('btn-up');
// let leftButton = document.getElementsByClassName('btn-left');
// let rightButton = document.getElementsByClassName('btn-right');

// Define the number of grid items you want to create
const numberOfItems = 20;

let trophyCollected = false;

let heroLocation = {
    row: 17,
    column: 2
};

let score = 0;
let lives = 3;

// Initialize flag variables
var isUpButtonPressed = false;
var isLeftButtonPressed = false;
var isRightButtonPressed = false;

let arrayBlocks = [['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', '-', '-', 'L', '-', '-', '-', '-', '-', '-', '-', 'C', 'C', '-', '-', '-', '-', 'C', 'X', 'W'],
                    ['W', '-', '-', 'W', '-', '-', 'C', 'C', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', 'W'],
                    ['W', 'C', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', 'C', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', 'W', 'W', 'W', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', 'W'],
                    ['W', '-', 'C', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'C', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', '-', '-', '-', '-', 'W', 'W', '-', '-', '-', '-', 'W', 'W', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', 'C', '-', '-', '-', '-', '-', 'C', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', 'W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'W', 'W', 'W', 'W', '-', '-', '-', '-', 'C', '-', '-', 'W', 'W', 'W'],
                    ['W', '-', '-', 'C', 'C', '-', '-', '-', '-', '-', '-', '-', '-', 'C', '-', '-', '-', '-', '-', 'W'],
                    ['W', '-', '-', '-', '-', '-', 'C', 'C', '-', '-', '-', '-', 'C', '-', '-', '-', '-', '-', '-', 'W'],
                    ['W', 'W', 'W', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', '-', 'C', '-', '-', 'W'],
                    ['W', 'W', 'W', '-', '-', 'W', 'W', 'W', 'W', '-', '-', 'W', 'W', '-', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', 'S1', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W', 'W', '-', '-', '-', '-', '-', 'E1', 'W'],
                    ['W', 'S2', '-', '-', '-', '-', '-', '-', '-', '-', 'C', 'W', 'W', '-', '-', '-', '-', '-', 'E2', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                    ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
                ]

createGrid();

function createGrid() {
    // Remove all child elements inside the parent div
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    arrayBlocks[heroLocation.row][heroLocation.column] = 'H';
    
    // Create grid items dynamically
    for (let i = 0; i < numberOfItems; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        
        // gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
        
        for (let j = 0; j < numberOfItems; j++) {
            const gridInner = document.createElement('div');
            gridInner.classList.add('grid-inner');
            // gridInner.textContent = arrayBlocks[i][j];
            gridItem.appendChild(gridInner);

            

        if (arrayBlocks[i][j] == 'W') {
            gridInner.style.backgroundColor = "Brown";
            gridInner.style.backgroundImage = "url('Assets/brick1.png')"; 
        }
        if (arrayBlocks[i][j] == 'C') {
             // gridInner.style.backgroundColor = "Yellow";
            gridInner.style.backgroundImage = "url('Assets/coin.png')";
        }
        if (arrayBlocks[i][j] == 'L') {
            // gridInner.style.backgroundColor = "Red";
            gridInner.style.backgroundImage = "url('Assets/heart.png')";
        }
        if (arrayBlocks[i][j] == 'H') {
            // gridInner.style.backgroundColor = "Blue";
            gridInner.style.backgroundImage = "url('Assets/hero.png')";
        }
        if (arrayBlocks[i][j] == 'E1') {
            gridInner.style.backgroundColor = "#34181D";
            gridInner.style.backgroundImage = "url('Assets/door_up.png')";
        }
        if (arrayBlocks[i][j] == 'E2') {
            gridInner.style.backgroundColor = "#34181D";
            gridInner.style.backgroundImage = "url('Assets/door_down.png')";
        }
        if (arrayBlocks[i][j] == 'S1') {
            gridInner.style.backgroundColor = "#34181D";
            gridInner.style.backgroundImage = "url('Assets/portal_up.png')";
        }
        if (arrayBlocks[i][j] == 'S2') {
            gridInner.style.backgroundColor = "#34181D";
            gridInner.style.backgroundImage = "url('Assets/portal_down.png')";
        }
        if (arrayBlocks[i][j] == 'X') {
            gridInner.style.backgroundImage = "url('Assets/trophy.png')";
        }
        
        if (arrayBlocks[i][j] == 'T') {
            gridInner.style.backgroundColor = "Black";
        }
        gridInner.style.backgroundSize = "cover";
    }
}
}


// Define the event listener function
function handleArrowUp(event) {
    if (event?.keyCode === 38 || isUpButtonPressed) {
        let upVal = 0;
        const intervalId = setInterval(() => {
            upVal++;

            if(['W', 'S1', 'S2'].includes(arrayBlocks[heroLocation.row - 1][heroLocation.column])) {
                clearInterval(intervalId);
                console.log('Wall Encountered');
                moveDown();
            }
            else if(['E1', 'E2'].includes(arrayBlocks[heroLocation.row - 1][heroLocation.column])){
                if(trophyCollected == true) {
                    alert('You Won!!!' + "  -> Score : " + score)
                }
               
            }
            else {
                if (arrayBlocks[heroLocation.row - 1][heroLocation.column] == 'C'){
                    score += 1;
                    score_counter.innerHTML = "Score : " + score + " ";
                }
                else if (arrayBlocks[heroLocation.row - 1][heroLocation.column] == 'X') {
                    trophyCollected = true;
                }
                else if (arrayBlocks[heroLocation.row - 1][heroLocation.column] == 'L') {
                    lives += 1;
                    life_counter.innerHTML = " Lives : " + lives;
                }
                arrayBlocks[heroLocation.row][heroLocation.column] = '-';
                heroLocation.row -= 1
                console.log('Row : ' + heroLocation.row);
                console.log('Column : ' + heroLocation.column);
            }
            
            if (upVal >= 3) {
              clearInterval(intervalId);
              moveDown();
            }
            createGrid()
            
          }, 500);
        
        
    }
   
    
  }

  // Define the event listener function
function handleArrowRight(event) {
      if (event?.keyCode === 39 || isRightButtonPressed) {
        if(['W', 'S1', 'S2'].includes(arrayBlocks[heroLocation.row][heroLocation.column + 1])) {
            console.log('Wall Encountered');
        }
        else if(['E1', 'E2'].includes(arrayBlocks[heroLocation.row][heroLocation.column + 1])){
            if(trophyCollected == true) {
                alert('You Won!!!' + "  -> Score : " + score)
            }
        }
        else {
            if (arrayBlocks[heroLocation.row][heroLocation.column + 1] == 'C'){
                score += 1;
                score_counter.innerHTML = "Score : " + score + " ";
            }
            else if (arrayBlocks[heroLocation.row][heroLocation.column + 1] == 'X') {
                trophyCollected = true;
            }
            else if (arrayBlocks[heroLocation.row][heroLocation.column + 1] == 'L') {
                lives += 1;
                life_counter.innerHTML = " Lives : " + lives;
            }
            arrayBlocks[heroLocation.row][heroLocation.column] = '-';
            heroLocation.column += 1
            console.log('Row : ' + heroLocation.row);
            console.log('Column : ' + heroLocation.column);
        }
    }
    createGrid()
    moveDown();
}

  // Define the event listener function
  function handleArrowLeft(event) {
    if (event?.keyCode === 37 || isLeftButtonPressed) {
        if(['W', 'S1', 'S2'].includes(arrayBlocks[heroLocation.row][heroLocation.column - 1])) {
            console.log('Wall Encountered');
        }
        else if(['E1', 'E2'].includes(arrayBlocks[heroLocation.row][heroLocation.column - 1])){
            if(trophyCollected == true) {
                alert('You Won!!!' + "  -> Score : " + score)
            }
        }
        else {
            if (arrayBlocks[heroLocation.row][heroLocation.column - 1] == 'C'){
                score += 1;
                score_counter.innerHTML = "Score : " + score + " ";
            }
            else if (arrayBlocks[heroLocation.row][heroLocation.column - 1] == 'X') {
                trophyCollected = true;
            }
            else if (arrayBlocks[heroLocation.row][heroLocation.column - 1] == 'L') {
                lives += 1;
                life_counter.innerHTML = " Lives : " + lives;
            }
            arrayBlocks[heroLocation.row][heroLocation.column] = '-';
            heroLocation.column -= 1
            console.log('Row : ' + heroLocation.row);
            console.log('Column : ' + heroLocation.column);
        }
  }
  createGrid()
  moveDown();
}

function moveDown() {
    const intervalId = setInterval(() => {

        if(['W', 'S1', 'S2'].includes(arrayBlocks[heroLocation.row + 1][heroLocation.column])) {
            clearInterval(intervalId);
            console.log('Wall Encountered');
        }
        else if(['E1', 'E2'].includes(arrayBlocks[heroLocation.row + 1][heroLocation.column])){
            if(trophyCollected == true) {
                alert('You Won!!!' + "  -> Score : " + score)
            }
           
        }
        else {
            if (arrayBlocks[heroLocation.row + 1][heroLocation.column] == 'C'){
                score += 1;
                score_counter.innerHTML = "Score : " + score + " ";
            }
            else if (arrayBlocks[heroLocation.row + 1][heroLocation.column] == 'X') {
                trophyCollected = true;
            }
            else if (arrayBlocks[heroLocation.row + 1][heroLocation.column] == 'L') {
                lives += 1;
                life_counter.innerHTML = " Lives : " + lives;
            }
            arrayBlocks[heroLocation.row][heroLocation.column] = '-';
            heroLocation.row += 1
            console.log('Row : ' + heroLocation.row);
            console.log('Column : ' + heroLocation.column);
        }
        
        
        createGrid()
        
      }, 300);
}

  
// Add the event listener for the 'keydown' event
addEventListener('keydown', handleArrowUp);
// addEventListener('keydown', handleArrowDown);
addEventListener('keydown', handleArrowRight);
addEventListener('keydown', handleArrowLeft);

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons
    var btnUp = document.querySelector(".btn-up");
    var btnLeft = document.querySelector(".btn-left");
    var btnRight = document.querySelector(".btn-right");
  
    // Add click event listeners to the buttons
    btnUp.addEventListener("click", function() {
      // Handle click for btnUp
      console.log("Up button clicked");
      handleArrowUp();
      isUpButtonPressed = true;
        isLeftButtonPressed = false;
        isRightButtonPressed = false;
    });
  
    btnLeft.addEventListener("click", function() {
      // Handle click for btnLeft
      handleArrowLeft();
      isUpButtonPressed = false;
    isLeftButtonPressed = true;
    isRightButtonPressed = false;
    });
  
    btnRight.addEventListener("click", function() {
      // Handle click for btnRight
      handleArrowRight();
      isUpButtonPressed = false;
    isLeftButtonPressed = false;
    isRightButtonPressed = true;
    });
  
    
  });
  
