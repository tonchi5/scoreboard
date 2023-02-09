// HOME SECTION//

let homeScoreOne = document.getElementById("home-btn1");
let homeScoreTwo = document.getElementById("home-btn2");
let homeScoreThree = document.getElementById("home-btn3");
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

function addOneHome() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore
}

//GUEST SECTION//

let guestScoreOne = document.getElementById("guest-btn1");
let guestScoreTwo = document.getElementById("guest-btn2");
let guestScoreThree = document.getElementById("guest-btn2");
let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore
}

let restartEl = document.getElementById("restart-el")

function restartScore() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}