const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const quantity = document.getElementById("quantity");


add.addEventListener("click", function () {
    quantity.value = parseInt(quantity.value) + 1;
});

subtract.addEventListener("click", function () {
    if (quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
});

/*
const quantityInput = document.getElementById("quantity");

function add() {
    let value = parseInt(quantityInput.value);
    value++;
    quantityInput.value = value;
}

function subtract() {
    let value = parseInt(quantityInput.value);
    if (value > 0) {
        value--;
        quantityInput.value = value;
    }
}*/
