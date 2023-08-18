let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let total = document.getElementById("total")
let count = 0, sum = 0

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function zero() {
    count = 0;
    countEl.textContent = count;
}

function save() {
    console.log(count)
    saveEl.textContent += (count + " -> ");
    sum += count
    total.textContent = "Aggregate Entries: " + sum
}