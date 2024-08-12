
let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let win=document.querySelector("#win");
let msg=document.querySelector("#msg");
let turn0=true;
let winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetbtn=()=>{
    turn0=true;
    enable();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn0){
            box.innerHTML = "O";
            box.classList.remove('.colorX');
            box.classList.add('colorO');
            turn0=false;
        }
        else{
            box.innerHTML = "X";
            box.classList.remove('.colorO');
            box.classList.add('colorX');
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
    
});
const  checkwinner=()=>{
    for(let pattern of winningpattern){
      let pos0=boxes[pattern[0]].innerText;
      let pos1=boxes[pattern[1]].innerText;
      let pos2=boxes[pattern[2]].innerText;
    
    if(pos0!=""&&pos1!=""&&pos2!=""){
        if(pos0===pos1&&pos1===pos2){
            console.log("Win the game");
            printwinner(pos0);
        }
    }
}
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const printwinner=(winner)=>{
    win.innerText=`The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxex.forEach = (box) => {
        box.classList.remove('.colorX');
        box.classList.remove('.colorO');
    }
    disable();
}
resbtn.addEventListener("click",resetbtn);
msg.addEventListener("click",resetbtn);
