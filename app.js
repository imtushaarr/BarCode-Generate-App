const uni_input = document.querySelector('#unique-code');
const btn = document.querySelector('#unique-code-btn');

btn.addEventListener('click',() => {
    JsBarcode("#unique-barcode", uni_input.value, {
        format: "CODE128",
        displayValue: true,
        fontSize: 28,
        lineColor: "#000"
    });
});

window.onload = (e) => {
    uni_input.value = "";
};