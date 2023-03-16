/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.1. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
4.1. set the total withdraw in withdraw result
5. get the previous balance total
6. calculate new balance total
6.5. set the new balance total
7. clear input field
8. alert dialogue
*/


// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear
    withdrawField.value = '';

    // empty input field alert
    if (isNaN(newWithdrawAmount)) {
        alert('Please input a valid number');
        return;
    }

    // step-3
    const withdrawResult = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawResult.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step-5
    const BalanceTotalResult = document.getElementById('balance-total');
    const previousBalanceTotalString = BalanceTotalResult.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      // alert
      if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    // step-4
    const withdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawResult.innerText = withdrawTotal;

    // step-6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step-7
    BalanceTotalResult.innerText = currentBalanceTotal;

})