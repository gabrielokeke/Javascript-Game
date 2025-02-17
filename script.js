let score = 20
let highscore = score
let randomNumber= Math.random()
let reponse = Math.floor(randomNumber * 20)+1

let mark = document.getElementsByTagName('span')[0]
let second = document.getElementsByTagName('span')[1]
let body = document.body
let mess = document.querySelector('.message')
let interro = document.querySelector('.number')
let btn = document.getElementsByClassName('btn again')[0]
let bottle = document.getElementsByTagName('button')[1]
const blank = document.querySelector('.guess')


btn.addEventListener('click', () => {
    body.style.backgroundColor = 'black'
    mess.textContent = "Start guessing..."
    interro.textContent = "?"
    mark.textContent = 20
    blank.value = " "
    
})

bottle.addEventListener('click', () => {
    
    
    if (blank.value < reponse) {
        mess.textContent = "Too low"
        mark.textContent = score--
    } else if (blank.value > reponse) {
        mess.textContent = "Too high"
        mark.textContent = score--
    } else if(blank.value == reponse) {
        mess.textContent = "CONGRATS!! You've found the answer"
        body.style.backgroundColor = 'green'
        second.textContent = mark.textContent
        score=20
        interro.textContent = blank.value

    
    } if (score == 0) {
        mess.textContent = "YOU LOSE!!"
    }
})


