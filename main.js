let AlertBox = document.getElementById('alert');
let WinnerAlert = document.querySelector('.winnerAlert');
let imgs = document.querySelectorAll('.comp');
//console.log(imgs);
let pChoice;
let choices = ['Scissor' , 'Rock' , 'Paper'];

function hide(x) {
  x.style.display = 'none';   
}

function show(x) {
    x.style.display = 'block'
}


function congratsWinner(str , x) { 
    AlertBox.style.display = 'none'    
    imgs.forEach((img) => {
        img.style.cursor = 'not-allowed'
        img.classList.remove('pressable')
        img.removeEventListener('click' , handleClick)
    })
    console.log(x.children[0]);
        
    x.children[0].textContent = str;
    x.classList.add('centerContent');
    x.children[2].onclick = () => {
        location.reload();
    }

    x.children[1].onclick = () => {
        window.close();
    }
}

function handleClick(ev)  {
    let img = ev.target        
    pChoice = img.parentElement.className;
    let compChoice = Math.random();
    if (compChoice < 1/3) compChoice = 0;
    else if (compChoice < 2/3) compChoice = 1;
    else compChoice = 2;
    compChoice = choices[compChoice]
    
    let compScore , pScore;
    let imageSource = 'imgs/' + String(compChoice) + '.png'
    
    AlertBox.children[1].setAttribute('src' , imageSource)
    // console.log(AlertBox.children[1]);
    
    if (pChoice != compChoice) {
        if (pChoice == 'Rock' && compChoice == 'Scissor') {
            pScore = ++document.querySelector('.Pscore').textContent; 
        }
        
        else if (pChoice == 'Rock' && compChoice == 'Paper') {
            compScore = ++document.querySelector('.Cscore').textContent;
        }
        else if (pChoice == 'Scissor' && compChoice == 'Paper') {
            pScore = ++document.querySelector('.Pscore').textContent; 
            
        }
        else if (pChoice == 'Scissor' && compChoice == 'Rock') {
            compScore = ++document.querySelector('.Cscore').textContent;
            
        }
        else if (pChoice == 'Paper' && compChoice == 'Rock') {
            pScore = ++document.querySelector('.Pscore').textContent; 
            
        }
        
        else if (pChoice == 'Paper' && compChoice == 'Scissor') {
            compScore = ++document.querySelector('.Cscore').textContent;
            
        }
    }
    
    AlertBox.style.display = 'block'  
    if (compScore == 3) {
        //AlertBox.style.display = 'none'
        setTimeout(congratsWinner , 1000 , 'The Computer is the Winner' , WinnerAlert)
    }
    
    
    
    if (pScore == 3) {
        //AlertBox.style.display = 'none'
        setTimeout(congratsWinner , 1000 , 'You Win' , WinnerAlert)  
    }

}

imgs.forEach((img) => {
    img.addEventListener('click' , handleClick)
})

