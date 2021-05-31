let inversion = document.getElementById('choice')
let inversion1 = document.getElementById('choice1')
let inversion2 = document.getElementById('choice2')
let inversion3 = document.getElementById('choice3')
let inversion4 = document.getElementById('choice4')
let inversion5 = document.getElementById('choice5')



let pop = "Thanks for choose us!"
let pop2 = `<p class="p" onclick="link1()">1) Current Market Price: USD from Chairlink</p>`
let pop3= `<p class="p" onclick="link2()">2)When price is 10% cheaper: XXX USD - 10%</p>`
let pop4 = `<p class="p" onclick="link3()">3)At fix price: xxx USD (manually typed)</p>`

//enter to option current price //
let actualPrice = 1.25;
let pop5 = `<p class="p2">The current Price is : ${actualPrice}</p>`
let pop6 = `<p class="p2">Do you want to change?</p>`
let pop7 = `<p class="p" onclick="successful()">Yes</p><p class="p" onclick="invierte()">No</p>`

//enter to option 10% lower//

let pop8 = `<p class="p2">Your money will be hold till the price will be 10% lower</p>`
let pop9 = `<p class="p" onclick="successful()">Yes</p><p class="p" onclick="invierte()">No</p>`

//enter price manually typed//
let pop10 = `<p class="p2">Enter a fixed price</p>`
let pop11 = `<input type="number" id="quantity" name="quantity">`
let pop12 = `<input type="number" id="quantity" name="quantity">`
let pop13 = `<input type="number" id="quantity" name="quantity">`
let pop14 = `<input type="number" id="quantity" name="quantity">`
let pop15 = `<p class="p" onclick="invierte()">Back</p>`
let button = `<p class="p2">Send</p>`
let backButton = `<p class="p2">Back</p>`
let compromise = `<p class="p2">We will send you an E-mail when the price fix your preference</p>`
let quanty = document.getElementById('quantity')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let send = document.getElementById('send')


let firstMessage = `<p class="p2">How much BTC do you want to change?</p>`
let secondMessage = `<p class="p" onclick="popUp()">1-100%</p>`
let thirdMessage =  `<p class="p" onclick="specificAmmount()">2-An Specific Ammount</p>`
const invirtiendo = document.querySelector("#inversion");
const mensaje = document.getElementById("inversion")
let emptySpace = "   "

let messageOpt1 = document.getElementById('choice2')
let empty = document.getElementById('choice3')



invirtiendo.addEventListener('dragover', e =>{
    e.preventDefault();
})
invirtiendo.addEventListener('drop', () =>{
    invierte();
    })

let enterAmmount
function specificAmmount(){    
    enterAmmount = prompt("How much o you want to change?: ")
    inversion1.innerHTML = pop2
    inversion2.innerHTML = pop3
    inversion3.innerHTML = pop4
    inversion4.innerHTML = `<p class= "p2">Your Money entered is ${enterAmmount}</p>`
 }


function popUp(){
    enterAmmount = prompt("Please enter the full ammount: ")
    inversion1.innerHTML = pop2
    inversion2.innerHTML = pop3
    inversion3.innerHTML = pop4
    inversion4.innerHTML = `<p class= "p2">Your Money entered is ${enterAmmount}</p>`  
}

function invierte(){   
     inversion.innerHTML = firstMessage 
     inversion1.innerHTML = emptySpace
     inversion2.innerHTML = secondMessage
     inversion3.innerHTML = thirdMessage
     inversion4.innerHTML = emptySpace
     inversion5.innerHTML = emptySpace
 }

function link1(){    
    inversion1.innerHTML = pop5
    inversion2.innerHTML = pop6
    inversion3.innerHTML = pop7
    inversion5.innerHTML = emptySpace
    }

function link2(){
    inversion1.innerHTML = pop8
    inversion2.innerHTML = pop9
    inversion3.innerHTML = emptySpace
    inversion5.innerHTML = emptySpace
    
}
let uno = ""
let dos = ""
let mail = ""
function link3(){
    inversion1.innerHTML = pop10
    inversion2.innerHTML = pop11    
    send.innerHTML = button    
    inversion3.innerHTML = emptySpace
    inversion4.innerHTML = emptySpace


    
}
function sendrequire(){
    inversion4.innerHTML = compromise
    uno = prompt("Enter your name: ")
    dos = prompt("Enter your last name: ")
    mail = prompt("Enter your e-mail: ")
    inversion1.innerHTML = uno
    inversion2.innerHTML = dos
    inversion3.innerHTML = mail
    inversion5.innerHTML = pop15
    send.innerHTML = emptySpace
    console.log(uno)
    console.log(dos)
    console.log(mail)
}
function successful(){
    inversion1.innerHTML = `<p class= "p3">Change succesfully completed!</p>`
    inversion2.innerHTML = emptySpace
    inversion3.innerHTML = emptySpace
    inversion4.innerHTML = emptySpace
    inversion5.innerHTML = pop15
}