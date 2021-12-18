let count = 0

let value = document.querySelector(".value")
let btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("decrease")) {
            count--;
        }
        else if (e.currentTarget.classList.contains("reset")) {
            count = 0;
        }
        else if (e.currentTarget.classList.contains("increase")) {
            count++;
        }
        value.textContent = count
        if (count < 0) {
            value.style.color = "red"
        }
        else if (count == 0) {
            value.style.color = "black"
        }
        else {
            value.style.color = "green"
        }
    })
})



