let teamCount = document.getElementById("team-count")
let guestCount = document.getElementById("guest-count")
let homeFoulCount = document.getElementById("home-foul-count")
let guestFoulCount = document.getElementById("guest-foul-count")

let count = 0
let guestCounter = 0
let homeFoul = 0
let guestFoul = 0


function add1(){
   count += 1
   teamCount.textContent = count 
}

function add2() {
    count += 2
    teamCount.textContent = count
}

function add3() {
    count += 3
    teamCount.textContent = count
}


function add1_guest(){
   guestCounter += 1
   guestCount.textContent = guestCounter 
}

function add2_guest() {
    guestCounter += 2
    guestCount.textContent = guestCounter
}

function add3_guest() {
    guestCounter += 3
    guestCount.textContent = guestCounter
}


function resetHomeScore(){
    count = 0
    teamCount.textContent= count
}

function resetGuestScore(){
    guestCounter = 0
    guestCount.textContent = guestCounter
}

function addHomeFoul(){
    homeFoul +=1
    homeFoulCount.textContent = homeFoul
}

function resetHomeFoul(){
    homeFoul = 0
    homeFoulCount.textContent = homeFoul
}

function addGuestFoul(){
    guestFoul +=1
    guestFoulCount.textContent = guestFoul
}

function resetGuestFoul(){
    guestFoul = 0
    guestFoulCount.textContent = guestFoul
}
