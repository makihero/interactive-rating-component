var numberContainer = document.querySelector(".rating-state__buttons");
var rateNumber = document.querySelector(".thank-you-state__selected");
var btnSubmit = document.querySelector(".rating-state__submit");
var thankYouState = document.querySelector(".thank-you-state");
var ratingState = document.querySelector(".rating-state");

numberContainer.addEventListener("click", function (event) {
    let number = event.target.innerText;
    rateNumber.innerText = number;
    if (number == 1 || number == 2 || number == 3 || number == 4 || number == 5) {
        btnSubmit.addEventListener("click", function () {
            thankYouState.style.display = "flex";
            ratingState.style.display = "none";
        })
    }
})

