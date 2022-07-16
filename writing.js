function Begin() {
    text = "";
    i = 0;
    myInterval = setInterval(myTimer, 2000);
    }
    
    function myTimer() {
    var nums = Math.floor(Math.random() * 9)+1;
    text += nums;
    length = text.length;
    document.getElementById("demo").innerHTML = text;
    text0 = text.substring(0, 1);
    document.getElementById("demo1").innerHTML = text0;
    document.getElementById("demo2").innerHTML = length;
    if (length > 15) {
    document.getElementById("Q1").innerHTML = "YOU LOSS!";
    stop();
    };
}
    
    function stop() {
    text = "Ready! GO!";
    document.getElementById("Ans").value = "";
    document.getElementById("demo").innerHTML = text;
    clearInterval(myInterval);
    }
    
    function myAnswer() {
    var myQ = document.getElementById("demo1").textContent;
    var myA = document.getElementById("Ans").value;
    Ans = 10-myQ;
    
    if (Ans == myA) {
    i = i+1;
    document.getElementById("Q1").innerHTML = "correct " + i;
    text = text.substring(1);
    document.getElementById("demo").innerHTML = text;
    if (i > 5) {
    document.getElementById("Q1").innerHTML = "YOU WIN!";
    stop();
    };
    } else {
    document.getElementById("Q1").innerHTML = "wrong";
    }
    document.getElementById("Ans").value = "";
    }
    
    function oneFunction() {
    document.getElementById("Ans").value = "1";
    }
    
function twoFunction() {
document.getElementById("Ans").value = "2";
}

function threeFunction() {
document.getElementById("Ans").value = "3";
}

function fourFunction() {
document.getElementById("Ans").value = "4";
}

function fiveFunction() {
document.getElementById("Ans").value = "5";
}

function sixFunction() {
document.getElementById("Ans").value = "6";
}

function sevenFunction() {
document.getElementById("Ans").value = "7";
}

function eightFunction() {
document.getElementById("Ans").value = "8";
}

function nineFunction() {
document.getElementById("Ans").value = "9";
}