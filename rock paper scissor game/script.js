
let userScore = 0;
let compScore = 0;

// accessing all the divs which have the same class "choice"
let choices = document.querySelectorAll(".choice");

// access the score id present in the HTML body

let userScorePara = document.querySelector("#user");
let compScorePara = document.querySelector("#comp");

// access the msg div class present in the html body

let msgPara = document.querySelector(".msg");


// using forEach for applying EventListener in each element  

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        // choice.getAttribute describes that userchoice only depends on the id
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})


// making a random choices function for computer

const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomPicker = Math.floor(Math.random()*3);
    return options[randomPicker];
}

// making a function which performs all the decisions

const playGame=(userChoice)=>{
    console.log("User Choice =",userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice =",compChoice)

    if(userChoice === compChoice){
    msgPara.innerText="Draw";
    msgPara.style.backgroundColor="blue";
}
else
{
    let userWin = true;
    if(userChoice==="rock")
    {
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper")
    {
        userWin = compChoice === "scissors" ? false : true;
    }
    else
        {
        userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userWin,userChoice,compChoice);

    }
}


// making a function which tells who is the winner

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText=`User Win! ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msgPara.innerText=`Comp Win! ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor = "maroon";
    }
}