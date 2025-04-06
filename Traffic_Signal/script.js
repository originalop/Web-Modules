const div2 = () => {
    let div2 = document.querySelector(".div2");
    div2.style.backgroundColor = "yellow";
    let clockDigit = 5;
    let count = setInterval(() => {
        div2.innerText = clockDigit--;
        if (clockDigit < 0) {
            clearInterval(count);
            div2.innerText = "";

            div2.style.backgroundColor = "#0d0f0d";
            div1();
        }
    }, 1000);
}

const div3 = () => {
    let div3 = document.querySelector(".div3");
    let clockDigit = 60;
    div3.style.backgroundColor = "green";
    let count = setInterval(() => {
        div3.innerText = clockDigit--;
        if (clockDigit < 0) {
            clearInterval(count);
            div3.innerText = "";

            div3.style.backgroundColor = "#0d0f0d";
            div2();
        }
    }, 1000);
}

const div1 = () => {
    let div1 = document.querySelector(".div1");
    div1.style.backgroundColor = "red";
    let clockDigit = 60;
    let count = setInterval(() => {
        div1.innerText = clockDigit--;
        if (clockDigit < 0) {
            clearInterval(count);
            div1.innerText = "";
            div1.style.backgroundColor = "black";
            div3();
        }
    }, 1000);
}
div1();
