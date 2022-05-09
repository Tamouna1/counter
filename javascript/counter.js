let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

document.getElementById("increment-btn").onclick = function increment() {
    count += 1
    countEl.textContent = count
}

document.getElementById("save-btn").onclick = function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0;
}