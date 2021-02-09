const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isflipped = false; //initially when the game starts card is not flipped so its value is false
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener('click',flip));// here flip is class which has css property for flipping

function flip() {
    //console.log("card is flipped");
    //console.log(this);// by console.log the this keyword, we can find what the this is holding (html)
    this.classList.add("flip");
    if(!isflipped){
        isflipped = true;
        firstCard = this;
    }else{
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkit();
    }
}
function checkit() {
    (firstCard.dataset.image === secondCard.dataset.image) ? success() : fail() ;// we can check the two emojis by their dataset values which is noting but the data attribute which given to the HTML  **IN HTML** data-image attribute will be given to every image which holds the value
}
function success() {
    // console.log("success");
    firstCard.removeEventListener('click',flip);
    secondCard.removeEventListener('click',flip);
    reset();
}
function fail() {
    // console.log("fails");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },1000);
}
function reset() {
    isflipped = false;
    firstCard = null;
    secondCard = null;
}

//to do: shuffle
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;// here order is pointing the flexbox, each flexbox has an order
    })
})();