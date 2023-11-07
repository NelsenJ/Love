

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".yes").addEventListener('click', () =>{
        document.querySelector("h1").innerHTML = "Can you wait for a few seconds?";
        document.querySelector("h1").style.fontSize ="27pt";
        document.getElementById("first").style.display = "none";
        document.getElementById("first2").style.display = "none";
        document.getElementById("second").style.display = "flex";
        document.getElementById("second2").style.display = "flex";
    })
    document.querySelector(".no").addEventListener('click', () =>{
        document.querySelector("h1").innerHTML = ":( Well Okay Then, Get well soon";
        document.querySelector("h1").style.fontSize ="27pt";
        document.querySelector(".answer").style.display = "none";
    })
    document.getElementById("second").addEventListener('click', () => {
        document.querySelector(".answer").style.display = "none";
        document.querySelector(".time").classList.toggle('show');
        document.querySelector("h1").innerHTML = "Thanks!! "
        var timerElement = document.getElementById("timer");
        var countdownInterval;
        var remainingTime = 0;
        function updateTimerDisplay() {
            var seconds = remainingTime.toString().padStart(2, "");
            timerElement.innerHTML = `${seconds}`;
        
        }
        function startCountdown(durationInSeconds) {
            if (countdownInterval) {
              clearInterval(countdownInterval);
            }
            remainingTime = durationInSeconds;
            updateTimerDisplay();
            countdownInterval = setInterval(function () {
              if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                timerElement.innerHTML = "";
              } else {
                remainingTime--;
                updateTimerDisplay();
              }
            }, 1000);
        }
        startCountdown(5);
        let myTimeOut= setTimeout(() => {
            document.querySelector("h1").innerHTML = "I Love You!";
            document.querySelector(".answer").style.display = "none";
        },5000);
    })
    document.getElementById("second2").addEventListener('click', () =>{
        document.querySelector(".answer").style.display = "none";
        let myTimeOut= setTimeout(() => {
            document.querySelector("h1").innerHTML = "I Love You!";
            document.querySelector(".answer").style.display = "none";
        },5000);
            clearTimeout(myTimeOut);
            document.querySelector("h1").innerHTML ="Okay Then Bye Bye :("
            document.querySelector(".answer").style.display = "none";
    })
})
