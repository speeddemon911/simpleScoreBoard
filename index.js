let homeScore = 0;
let guestScore = 0;

const homeStoreEl = document.getElementById("home-score");
const guestStoreEl = document.getElementById("guest-score");

function increaseHomeScore(points) {
    homeScore += points;
    homeStoreEl.innerText = homeScore;
}

function increaseGuestScore(points) {
    guestScore += points;
    guestStoreEl.innerText = guestScore;
}