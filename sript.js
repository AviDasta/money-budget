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

function pushToArray() {
    expanses.push({ price: Number(inputNumber.value), name: inputText.value });
    calculateTheElement();
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
        list.innerHTML += `<li class='expansesArray'><p>${expanse.name}</p> <p>${expanse.price}</p><button btn onclick="remove(this)" class='removeButton'>X</button></li>`;
    })
    let balanceSave = balancePrice;
    minus.innerHTML = courentBalance;
    balanceSave = balancePrice - inputNumber.value;
    plus.innerHTML = balancePrice + courentBalance;
    balance.innerHTML = balanceSave.toFixed(2);
}

function updateData(data) {
    data = [...expanses];
};

function calculateTheElement() {
    courentBalance = expanses.reduce(function(acc, item) { return acc -= item.price }, 0);
    console.log(courentBalance);
}

function remove(e) {
    e.parentElement.remove();
}

btn.addEventListener('click', function() {
    pushToArray();
})

function submitButtonClick(event) { //stop send form
    event.preventDefault();


}