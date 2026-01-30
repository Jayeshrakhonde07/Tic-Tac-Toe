let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turn0 = true;




Array.from(boxes).forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled  = true;
        checkWinner = 0;
    })
})