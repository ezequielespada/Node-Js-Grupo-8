const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const quantity = document.getElementById("quantity");

add.addEventListener("click", function () {
    quantity.value = parseInt(quantity.value) + 1;
});

subtract.addEventListener("click", function () {
    if(quantity.value > 0) {
        quantity.value = parseInt(quantity.value) - 1;
    }
});

console.log(add);