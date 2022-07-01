/////  Header menu 
const Menu = document.getElementById("Menu")
const Btn = document.getElementById("Btn")

Btn.onclick = () => {
    Menu.classList.toggle("show")
}

/////  popup display
const order1 = document.getElementById("btn1")
const popup = document.querySelector(".ordersection")
const xclose = document.getElementById("xclose")
order1.onclick = () => {
    popup.style.display = "flex"
}

xclose.onclick = () => {
    popup.style.display = "none"
}

const order2 = document.getElementById("btn2")
const stockItem2 = document.getElementById("stockItem")
const Price2 = document.getElementById("Price")
order2.onclick = () => {
    popup.style.display = "flex"
    stockItem2.innerHTML = "Turkey ( 1 kilo )"
    Price2.innerHTML = "600"
}

const order3 = document.getElementById("btn3")
const stockItem3 = document.getElementById("stockItem")
const Price3 = document.getElementById("Price")
order3.onclick = () => {
    popup.style.display = "flex"
    stockItem3.innerHTML = "Wings/Lap ( 1 kilo )"
    Price3.innerHTML = "960"
}

const order4 = document.getElementById("btn4")
const stockItem4 = document.getElementById("stockItem")
const Price4 = document.getElementById("Price")
order4.onclick = () => {
    popup.style.display = "flex"
    stockItem4.innerHTML = "Fish ( 1 kilo )"
    Price4.innerHTML = "750"
}

const order5 = document.getElementById("btn5")
const stockItem5 = document.getElementById("stockItem")
const Price5 = document.getElementById("Price")
order5.onclick = () => {
    popup.style.display = "flex"
    stockItem5.innerHTML = "Gizard ( 1 kilo )"
    Price5.innerHTML = "800"
}

const order6 = document.getElementById("btn6")
const stockItem6 = document.getElementById("stockItem")
const Price6 = document.getElementById("Price")
order6.onclick = () => {
    popup.style.display = "flex"
    stockItem6.innerHTML = "Drinks"
    Price6.innerHTML = "600"
}

///// calculating inside popup
function calculate() {
    const Price = Number(document.getElementById("Price").innerHTML)
    const QTY = Number(document.getElementById("QTY").value)
    const amount = document.getElementById("amount")
    
    amount.innerHTML =  "N " + Number(Price * QTY)
}