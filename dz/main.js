const rates = {
    RUB: 1,
    USD: 76.23,
    EUR: 89.76,
    CNY: 11.18
};

const currencyNames = {
    RUB: "рублей",
    USD: "долларов",
    EUR: "евро",
    CNY: "юаней"
};

function convert(amount, currency) {
    const rate = rates[currency];
    return (amount / rate).toFixed(2);
}

function validateAnount(amount) {
    if (!amount || amount.trim() === "") {
        return "Ошибка! Введите сумму";
    }

    const num = parseFloat(amount);

    if (isNaN(num)) {
        return "Ошибка! Введите число";    
    }

    if (num <= 0) {
        return "Ошибка! Число должно быть больше 0";
    }

    return null
}

function handleCoversion() {
    const amountInput = document.getElementById("amount");
    const currencySelect = document.getElementById("currency");
    const result = document.getElementById("result");

    const amount = amountInput.value;
    const currency = currencySelect.value;

    const error = validateAnount(amount);
    
    if (error) {
        result.textContent = `Ошибка: ${error}`;
        return;
    }

    const numAmount = parseFloat(amount);
    const converted = convert(numAmount, currency);
    
    result.textContent = `${numAmount} Руб = ${converted} ${currencyNames[currency]} (${currency})`;

    console.log(`Конвертация: ${numAmount} RUB -> ${converted} ${currency}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.onclick = handleCoversion;
})