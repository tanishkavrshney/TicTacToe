let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newBtn = document.querySelector(".newgame");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turn0 = false;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = false;
    count = 0;
    enableBoxes();
    msgCont.classList.add("hide");
}

box.forEach((boxes) => {
    boxes.addEventListener("click" , () =>{
        console.log("btn clicked");
        if(turn0){
            boxes.innerText = "0";
            count++;
            turn0 = false;
        }
        else{
            boxes.innerText = "X";
            count++;
            turn0 = true;
        }
        boxes.disabled = true;
        
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let boxy of box){
        boxy.disabled = true;
    }
}
const enableBoxes = () => {
    for(let boxy of box){
        boxy.disabled = false;
        boxy.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    count=0;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    if(count<9){
        for(let pattern of winPatterns){
            console.log(pattern[0],pattern[1],pattern[2]);
            console.log(
                box[pattern[0]].innerText,
                box[pattern[1]].innerText,
                box[pattern[2]].innerText
            );
            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;
    
            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
            }
        }
    }
    else{
        msg.innerText = "Match Draw, Start a new Game";
        count = 0;
        msgCont.classList.remove("hide");
        disableBoxes();
    }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);