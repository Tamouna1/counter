
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

document.getElementById("increment-btn").onclick = function increment() {
    count = count + 1
    countEl.innerText = count
}
