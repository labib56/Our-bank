const userLogins = document.getElementById("login");
userLogins.addEventListener("click", () => {
    const firstInterface = document.getElementById("login-area");
    const secondInterface = document.getElementById("transaction-area");

    firstInterface.style.display = "none";
    secondInterface.style.display = "block";
});

// Banking money deposit start 
const cashDeposit = document.getElementById("addDeposit");
cashDeposit.addEventListener("click", () => {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    depositBank(depositAmount, "currentDeposit")
    depositBank(depositAmount, "currentBalance")
    document.getElementById("depositAmount").value = "";
});

function depositBank(id, value) {
    const cashIn = parseFloat(document.getElementById(value).innerText);
    const cashAdded = cashIn + id;
    document.getElementById(value).innerText = cashAdded;
};

// Banking money withdraw start
const cashWithdraw = document.getElementById("addWithdraw");
cashWithdraw.addEventListener("click", () => {
    const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    withdrawBank(withdrawAmount, "currentWithdraw", 1)
    withdrawBank(withdrawAmount, "currentBalance", -1)
    document.getElementById("withdrawAmount").value = "";
});

function withdrawBank(id, value, multi) {
    const cashIn = parseFloat(document.getElementById(value).innerText);
    const cashAdded = cashIn + (id * multi);
    document.getElementById(value).innerText = cashAdded;
};