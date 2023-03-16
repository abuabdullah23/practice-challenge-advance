// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get thd deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('user-deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('please input valid number');
        return;
    }

    // step-3: get the current deposit total
    // for non-input (element other than input, textArea) use innerText to get the text
    const depositElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add numbers to set the total amount
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    // set the deposit total
    depositElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // step-6: calculate current total balance
    const newBalanceTotal = newDepositAmount + previousBalanceAmount;

    // set the balance total
    balanceElement.innerText = newBalanceTotal;





})