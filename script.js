console.log("Welcome to Tic Tac Toe")

let sound = new Audio('sound.mp3')
let audioTurn = new Audio('ting.mp3')
let gameover = new Audio('gameover.mp3')
let turn = "X" // variable to store current turn
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// function to check for a win

const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');

    let wins =[
    [0,1,2, 5, 5, 0],
    [3,4,5, 5, 15, 0], 
    [6,7,8, 5,25,0],
    [0,3,6, -5, 15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && ((boxtext[e[2]].innerText===boxtext[e[1]].innerText)) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = "Player "+ boxtext[e[0]].innerText + " is Winner!"
            isgameover = true
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
             document.querySelector(".line").style.width = '20vw';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

     // Check for draw
     if (!isgameover) {
        let draw = true;
        Array.from(boxtext).forEach(element => {
            if (element.innerText === "") {
                draw = false;
            }
        });
        if (draw) {
            document.querySelector('.info').innerText = "It's a Draw!";
            isgameover = true;
            gameover.play();
        }
    }
};




// Game Logic
sound.play()
sound.loop = true;
// Logic to bind click event to each box
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=> {
    // For each box, get the text element inside it
    let boxtext = element.querySelector('.boxtext');
    // Add a click event listener to the box
    element.addEventListener('click', ()=> {
        // If the text element is empty,
        // add the current turn to it,
        // change the turn, play the audio,
        // check for a win, and update the info text
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = "Current Player : " + turn;
            }
        }
    })
    
})


//add onclick listener to reset button

reset.addEventListener('click',()=>{

let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element =>{
    element.innerText=""

});

turn ="X"
isgameover=false
gameover.pause();
document.querySelector(".line").style.width = '0vw';
        document.getElementsByClassName('info')[0].innerText="Current Player : " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px'
    

})