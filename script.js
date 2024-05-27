document.addEventListener('DOMContentLoaded', fetchAdvice);

let btnIcon = document.getElementById("btn_icon");
let mainText = document.getElementById("main-text");
let adviceId = document.getElementById("advice-id");

btnIcon.addEventListener("click", fetchAdvice);

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            const advice = data.slip;
            adviceId.textContent = advice.id;
            mainText.textContent = advice.advice;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
}
