//login button event handler
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function(event){
    const loginArea = document.getElementById("login-area").style.display="none";
    const transaction = document.getElementById("transaction-area").style.display="block";
})
//deposit button event handler
const depositBtn = document.getElementById("deposit").addEventListener("click", function(event){
    var depositnumber = document.getElementById("depositamount").value
    var depositAmount = parseFloat(depositnumber)

    var currentdeposit = document.getElementById("currentamount").innerText
    var currentAmount = parseFloat(currentdeposit)
    var total = currentAmount+depositAmount;
    document.getElementById("currentamount").innerText = total;

    const currentBalance = document.getElementById("currentbalance").innerText
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalBalance = depositAmount+currentBalanceNumber;
    document.getElementById("currentbalance").innerText= totalBalance

    document.getElementById("depositamount").value = "";
})
//withdraw button event handler
const withdrawBtn = document.getElementById("withdraw").addEventListener("click", function(event){
    var withdrawNumber = document.getElementById("withdrawamount").value
    var withdrawAmount = parseFloat(withdrawNumber)

    var currentWithdraw = document.getElementById("currentwithdraw").innerText
    var availableAmount = parseFloat(currentWithdraw)
    var total = withdrawAmount+availableAmount;
    document.getElementById("currentwithdraw").innerText= total

    const currentBalance = document.getElementById("currentbalance").innerText
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalBalance = currentBalanceNumber-withdrawNumber
    document.getElementById("currentbalance").innerText= totalBalance

    document.getElementById("withdrawamount").value = "";
})