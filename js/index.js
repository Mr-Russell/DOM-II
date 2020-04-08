// Your code goes here


//1 ======================== CLICK ======================
const toyBus = document.querySelector('.intro img')

function clickBus(event){
    toyBus.style.border = '5px solid red'
}

toyBus.addEventListener('click', clickBus)




//2 ==================== DOUBLE CLICK ======================
const map = document.querySelector('.content-section .img-content')

function dblClkMap(event){
    map.style.padding = '9%'
}

map.addEventListener('dblclick', dblClkMap)




//3 ==================== MOUSE OVER ======================
const welcomeP = document.querySelector('.intro p')

function pHover(event){
    welcomeP.style.backgroundColor = 'dodgerblue'
    welcomeP.style.color = 'white'
    welcomeP.style.padding = '2%'
}

welcomeP.addEventListener('mouseover', pHover)




//4 ==================== MOUSE LEAVE ======================
const waterRoad = document.querySelector('.inverse-content .img-content')

function imgMouseOff(event){
    waterRoad.style.border = '8px dashed orange'
}

waterRoad.addEventListener('mouseleave', imgMouseOff)




//5 ====================== RESIZE =========================
const navBG = document.querySelector('.main-navigation')

function resizeColor(event){
   navBG.style.backgroundColor = "pink"
}

window.addEventListener('resize', resizeColor)




//6 ====================== SCROLL ========================
const welcome = document.querySelector('.intro h2')

function introColor(event){
   welcome.style.backgroundColor = 'black'
   welcome.style.color = 'yellow'
   welcome.style.padding = '2%'
}
window.addEventListener('scroll', introColor)




//7 ====================== KEY DOWN ========================
//const boatBorder = document.querySelector('.content-destination img')

function colorKey(event) {
    if(event.key == 'f'){
    alert('What the F?!')
    }
}

document.addEventListener('keydown', colorKey)




//8 ====================== OFFLINE ========================
function offlineAlert(event){
    alert('WARNING!! You are off the grid!')
}

window.addEventListener('offline', offlineAlert)




//9 ======================= LOAD ===========================
function pageLoad(event){
    alert('Hello! Thanks for visiting our website. Enjoy!!')
}

window.addEventListener('load', pageLoad)




//10 =================== BEFORE PRINT =========================

function printAlert(event){
    alert('NO!! Save the trees!')
}

window.addEventListener('beforeprint', printAlert)




//==================== STOP PROPOGATION =========================

const letsGoP = document.querySelector('.text-content p')

function aquaClick(event){
    letsGoP.style.backgroundColor = 'aqua'
    letsGoP.style.padding = '2%'
    event.stopPropagation() //STOPS PROPOGATION HERE
}

letsGoP.addEventListener('click', aquaClick)



const letsGoBlock = document.querySelector('.text-content')

function blueClick(event){
    letsGoBlock.style.backgroundColor = 'blue'
    letsGoBlock.style.color = 'white'
    letsGoBlock.style.padding = '2%'
}

letsGoBlock.addEventListener('click', blueClick)




//==================== PREVENT DEFAULT =========================
function noNav(event){
    event.preventDefault()
}

const home = document.querySelector('a')
home.addEventListener('click', noNav)

const about = document.querySelector('a:nth-child(2)')
about.addEventListener('click', noNav)

const blog = document.querySelector('a:nth-child(3)')
blog.addEventListener('click', noNav)

const contact = document.querySelector('a:last-child')
contact.addEventListener('click', noNav)









































































//====================== SELECT ==========================
//const adventureP = document.querySelector('.inverse-content .text-xontent p')

// function selectAlert(event){
//     alert('You Selected' + )
// }





// ================= FULL SCREEN CHANGE ====================

// function sizing(event){
//     alert("Size Doesn't Matter")
// }

// window.addEventListener('fullscreenchange', sizing)




// ====================== COPY ========================
// const adventureP = document.querySelector('.inverse-content .text-xontent p')

// function copyColor(event){
//     adventureP.style.color = 'red'
// }

// adventureP.addEventListener('copy', copyColor)