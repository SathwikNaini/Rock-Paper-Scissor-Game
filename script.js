let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";

};

const ShowWinner=(userWin, userchoice, compchoice)=>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    const compchoice= gencompchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock") {
            userWin =  compchoice === "paper"? false  : true;
        }else if(userchoice === "paper"){
            userWin = compchoice === "scissors"? false : true;
        }
        else {
            userWin = compchoice==="rock" ? false: true; 
        }
        ShowWinner(userWin, userchoice, compchoice);
    }

};
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
    
});
