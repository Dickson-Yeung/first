const number1 = Math.floor(Math.random() * 12 + 1);
const number2 = Math.floor(Math.random() * 12 + 1);
const answer = number1 * number2;

let chance = 0;

document.getElementById("question").innerHTML = number1 + "times" + nuber2;

document.getElementById("submitButton").onclick = function(){
    let player = document.getElementById("answerBox").value
    chance += 1;

    if(player == answer){
        if(chance == 1 && player == answer){
            console.log("Great job.That's correct.It took you just 1 times to answer. :) ")
            document.getElementById("answer").innerHTML = "Great job.That's correct.It took you just 1 times to answer. :)";
        }
        else{
            console.log(answer, "correct.It took you" , chance, "times to answer it.");
        }
    }
    else{
        console.log("Nope that's not the answer.");
    }
}
