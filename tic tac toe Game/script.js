let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".btn");
let newGame_btn = document.querySelector(".btn1");
let game_result = document.querySelector(".Game-res");

let turn=true;

const winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

   


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==true){
            box.innerHTML= '&#x2713';
            turn=false;
        }else{
            box.innerText="O";
            turn=true
        }
        box.disabled=true;
        
        checkWinner();
        
    });
});


const showWinner=(winner)=>{
    game_result.innerText=`Congratulations player \"${winner}\"`;
    game_result.classList.remove("hide");
    newGame_btn.classList.remove("hide");
}

const checkWinner =()=>{

for(let patterns of winningPatterns){
    let position1=boxes[patterns[0]].innerText;
    let position2=boxes[patterns[1]].innerText;
    let position3=boxes[patterns[2]].innerText;

    if(position1 !="" && position2 !="" && position3 !=""){
        if(position1===position2 && position2===position3){
            showWinner(position1);
            diabledBoxes()            
        }
    }
}
}

const enableBoxes =() =>{
    for(let boxs of boxes){
        boxs.disabled= false;
        boxs.innerText="";
    }
}


const reset = ()=>{
    turn=true;
    enableBoxes();
    newGame_btn.classList.add("hide");
    game_result.classList.add("hide");
}

newGame_btn.addEventListener("click",reset);
reset_btn.addEventListener("click",reset);
