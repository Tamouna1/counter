// document.getElementById("count-el").innerText = 5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

document.getElementById("increment-btn").onclick = function increment() {
    count = count + 1
    countEl.innerText = count
}
