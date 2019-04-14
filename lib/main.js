"use strict"; // EX-1

/*
const barWrapper = document.querySelector('.bar-wrapper');
const bar = document.querySelector('.bar');
const sendBTN = document.querySelector('.send');

sendBTN.addEventListener("click", function(){
    barWrapper.innerText = "";
    bar.classList.remove("opacity");
    barWrapper.append(bar);
    let count = 0;
    let interval = setInterval(()=>{
        count = count + 5;
        bar.style.width = count + "%";
        document.querySelector('p').innerText = count + "%"
        if(count == 100){
            clearInterval(interval);
            bar.classList.add("opacity");
            barWrapper.innerText = "Successfully sent !"
        }
    },1000)
})
*/
//EX-2

/*
const barWrapper = document.querySelector('.bar-wrapper');
const bar = document.querySelector('.bar');
let interval;
let count = 0;
window.onload = function(){
    loading()
}
barWrapper.addEventListener("mouseout",function(){
    document.querySelector('.stop').classList.add("opacity");
    bar.classList.remove("opacity");
    loading()
})

barWrapper.addEventListener("mouseover", function(){
    document.querySelector('.stop').classList.remove("opacity");
    bar.classList.add("opacity");
    clearInterval(interval)
})

function loading() {
    interval = setInterval(()=>{
        count = count + 5;
        bar.style.width = count + "%";
        bar.querySelector('p').innerText = count + "%"
        if(count >= 100){
            count = 95
            clearInterval(interval);
        }
    },1000)
}
*/
//EX-3

/*
const cancelTXT = document.querySelector('.stop')
const sendBTN = document.querySelector('.send');
const barWrapper = document.querySelector('.bar-wrapper');
const bar = document.querySelector('.bar');
let count = 0;
let interval;
sendBTN.addEventListener("click", function () {
    loading()
    barWrapper.addEventListener("mouseover", function () {
        clearInterval(interval)
        cancelTXT.classList.remove("opacity");
        bar.classList.add("opacity");
        barWrapper.addEventListener("click", function () {
            loading = null
            cancelTXT.innerText = "Canceled"
        })
    })
    barWrapper.addEventListener("mouseout", function () {
        cancelTXT.classList.add("opacity");
        bar.classList.remove("opacity");
        loading()
    })
})
function loading() {
    interval = setInterval(() => {
        count = count + 5;
        bar.style.width = count + "%";
        bar.querySelector('p:last-child').innerText = count + "%"
        if (count >= 100) {
            count = 95
            clearInterval(interval);
            bar.classList.add("opacity");
            barWrapper.innerText = "Successfully sent !"
        }
    }, 1000)
}
*/
//EX-4

/*
const images = document.querySelectorAll('.listed img');
const leftBTN = document.querySelector('.left-arrow');
const rightBTN = document.querySelector('.right-arrow');
const closeBTN = document.querySelector('.close');
[...images].forEach(img => {
    img.addEventListener("click", function () {
        if (!this.classList.contains("focused")) {
            this.classList.add("focused");
            this.classList.remove("hover");
        }
        for (let i = 0; i < images.length; i++) {
            !images[i].classList.contains("focused") ? images[i].classList.add("d-none") : null;
        }
        document.querySelector('.buttons').classList.remove("d-none");
        closeBTN.classList.remove("d-none");
    })
    closeBTN.addEventListener("click", function () {
        if (img.classList.contains("focused")) {
            img.classList.remove("focused")
            img.classList.add("hover")
        }
        for (let i = 0; i < images.length; i++) {
            !images[i].classList.contains("focused") ? images[i].classList.remove("d-none") : null;
        }
        document.querySelector('.buttons').classList.add("d-none");
        closeBTN.classList.add("d-none");
    })
})
leftBTN.addEventListener("click", function () {
    const focusedIMG = document.querySelector('.focused');
    focusedIMG.classList.remove("focused");
    focusedIMG.classList.add("hover", "d-none");
    if (focusedIMG.previousElementSibling) {
        focusedIMG.previousElementSibling.classList.remove("hover", "d-none")
        focusedIMG.previousElementSibling.classList.add("focused")
    }
    else {
        images[images.length - 1].classList.remove("hover", "d-none")
        images[images.length - 1].classList.add("focused")
    }
})
rightBTN.addEventListener("click", function () {
    const focusedIMG = document.querySelector('.focused');
    focusedIMG.classList.remove("focused");
    focusedIMG.classList.add("hover", "d-none");
    if (focusedIMG.nextElementSibling) {
        focusedIMG.nextElementSibling.classList.remove("hover", "d-none")
        focusedIMG.nextElementSibling.classList.add("focused")
    }
    else {
        images[0].classList.remove("hover", "d-none")
        images[0].classList.add("focused")
    }
})
*/
//EX-5

/*
const userName = document.querySelector('.username');
const userSurname = document.querySelector('.usersurname');
const userEmail = document.querySelector('.useremail');
const userPassword = document.querySelector('.userpassword');
const confirmPassword = document.querySelector('.confirmpassword');
const alertDiv = document.querySelector('.alert');
document.querySelector('.send').addEventListener("click", function (){
    alertDiv.innerText = "";
    alertDiv.classList.add("d-none")
    //check name/surname is longer 3?
    if (userName.value.length < 3 || userSurname.value.length < 3 || userName.value[0] !== userName.value[0].toUpperCase() || userSurname.value[0] !== userSurname.value[0].toUpperCase()) {
        alertDiv.classList.remove("d-none")
        alertDiv.innerText = "Ur name/surname is too short or is not a upper case"
        return
    }
    CheckNameandSurnameisNaN(userName);
    CheckNameandSurnameisNaN(userSurname);
    //check email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(userEmail.value).toLowerCase())) {
        alertDiv.classList.remove("d-none")
        alertDiv.innerText = "Ur email is not valid"
        return false;
    }
    //check password
    if (userPassword.value.length<8) {
        alertDiv.classList.remove("d-none")
        alertDiv.innerText = "Ur passwword is short it must be longer than 8 character"
        return
    }
    if (!userPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[@!#_])/)) {
        alertDiv.classList.remove("d-none")
        alertDiv.innerText = "Ur password is not valid(Please check passwor must contain: min 1 letter and number,one of @!#_ these simvols)";
        return
    }
    if (confirmPassword.value !== userPassword.value) {
        alertDiv.classList.remove("d-none")
        alertDiv.innerText = "Passwords are not match"
        return
    }
    alertDiv.classList.remove("d-none")
    alertDiv.innerText = "Sent"
})
function CheckNameandSurnameisNaN(input) {
    for (let i = 0; i < input.value.length; i++) {
        if (!isNaN(input.value[i])) {
            alertDiv.classList.remove("d-none")
            alertDiv.innerText = "Ur name/surname contains a number ?"
            break
        }
    }
}
*/
//EX-6

/*
const countries = ["Azerbaijan", "Turkey", "Norway", "Canada",];
const cities = [{ name: "Baku", country: "Azerbaijan" }, { name: "Sumgayit", country: "Azerbaijan" }, { name: "Barda", country: "Azerbaijan" },
{ name: "Istanbul", country: "Turkey" }, { name: "Ankara", country: "Turkey" }, { name: "Rize", country: "Turkey" },
{ name: "Oslo", country: "Norway" }, { name: "Bergen", country: "Norway" }, { name: "Alta", country: "Norway" },
{ name: "Toronto", country: "Canada" }, { name: "Montreal", country: "Canada" }, { name: "Victoria", country: "Canada" }]

const countriesSelectBox = document.querySelector('#countries');
const citiesSelectBox = document.querySelector('#cities');
let option;
[...countries].forEach(country =>{
    option = document.createElement("option");
    option.append(country);
    countriesSelectBox.appendChild(option);
})
countriesSelectBox.addEventListener('mouseleave', function(){
    citiesSelectBox.innerHTML = "";
    [...cities].forEach(city=>{
        if (city.country == countriesSelectBox.value) {
            option = document.createElement('option');
            option.append(city.name);
            citiesSelectBox.append(option);
        }
    })
});
*/