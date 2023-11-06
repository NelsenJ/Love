let myTimeOut= setTimeout(() => {
    document.querySelector("h1").innerHTML = "I Love You!";
    document.querySelector("button").style.display = "none";
},5000);

document.querySelector("button").addEventListener('click', () =>{
    clearTimeout(myTimeOut);
    document.querySelector("h1").innerHTML ="I AM OKAY"
    document.querySelector("button").style.display = "none";
})
