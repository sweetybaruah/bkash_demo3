var year = document.querySelector('.year')
var correct = document.querySelector('.correct')
var wrong = document.querySelector('.wrong')
var two = document.querySelector('.two')
var zero = document.querySelector('.zero')
var two_1 = document.querySelector('.two_1')
var two_2 = document.querySelector('.two_2')
var alphabate1 = document.querySelector('.alphabate1')
var five = document.querySelector('.five')
var seven = document.querySelector('.seven')
var alphabate2 = document.querySelector('.alphabate2')
var alphabate3 = document.querySelector('.alphabate3')
var four = document.querySelector('.four')
var one = document.querySelector('.one')
var three = document.querySelector('.three')
var nine = document.querySelector('.nine')
var myrighttap = document.querySelector('.myrighttap')
var slide1 = document.querySelector('.slide1')
var slide2 = document.querySelector('.slide2')
var cup = document.querySelector('.cup')
var cashback = document.querySelector('.cashback')


var maxClick = 4;
var correctGuess = [two, zero, two_1, two_2]
var correctYear = [];
console.log(correctGuess[0])



    if(correctGuess[0] == two){
        two.addEventListener('click', ()=>{
            two.style.backgroundColor = "green"
        })
      
    }
    if(correctGuess[1] == zero){
        zero.style.backgroundColor = "green"
    }