const birdElem = document.querySelector("[data-bird]");
const BIRD_SPEED = 3;
const JUMP_DURATION = 125;
let timeSinceLastJump = Number.POSITIVE_INFINITY;

export function setupBird() {
    setTop(window.innerHeight / 2);
    
    document.removeEventListener("keydown", handleJump);
    document.removeEventListener("touchstart", handleJump);
    document.addEventListener("keydown", handleJump);
    document.addEventListener("touchstart", handleJump);
}

export function updateBird(delta) {
    if(timeSinceLastJump < JUMP_DURATION) {
        setTop(getTop() - BIRD_SPEED);
    }
    else {
        setTop(getTop() + BIRD_SPEED);
    }

    timeSinceLastJump += delta;
    
}

export function getBirdRect() {
    return birdElem.getBoundingClientRect();
}

function setTop(top) {
    birdElem.style.setProperty("--bird-top", top);
}

function getTop() {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"));
}

function handleJump(e) {
    if (e.code !== "Space" && e.type !== "touchstart") return

    timeSinceLastJump = 0
}
