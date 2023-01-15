let balance = document.querySelector('#balance');
let inputNumber = document.querySelector("#amount");
let inputText = document.querySelector("#text");
let plus = document.querySelector("#money-plus");
let minus = document.querySelector("#money-minus");
let PickNum = +prompt("enter walet price");
let btn = document.querySelector('.btn');
let expanses = [];
let balanceStart = PickNum;
balance.innerHTML = balanceStart;
let balancePrice = balanceStart;

function incomeAndExpense() {
    // text.innerHTML = inputText.value;
    expanses.push({ price: Number(inputNumber.value), name: inputText.value });
    draw();
}
let courentBalance;

function draw() {
    // step one get the target element
    let list = document.querySelector('.list');
    // clean the element content
    list.innerHTML = '';
    // print the expanses
    expanses.forEach(function(expanse) {
        list.innerHTML += `<li class='expansesArray'>${expanse.name} ${expanse.price}<button onclick="remove(this)" class='removeButton'>X</button></li>`;
    })
    courentBalance = expanses.reduce(function(acc, item) { return acc -= item.price }, 0);
    console.log(courentBalance);
    minus.innerHTML = courentBalance;
    balancePrice = balancePrice - inputNumber.value;
    plus.innerHTML = balancePrice;
    balance.innerHTML = balancePrice.toFixed(2);
}

function remove(e) {
    e.parentElement.remove();
}
btn.addEventListener('click', function() {
    incomeAndExpense();
})

function submitButtonClick(event) { //stop send form
    event.preventDefault();

}