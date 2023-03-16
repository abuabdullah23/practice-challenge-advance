// result field

document.getElementById('btn-calculate').addEventListener('click', function(){

    const couponField = document.getElementById('coupon-field');
    const couponCode = couponField.value;

    // clear couponField
    couponField.value = '';

    // empty alert
   /*  if(isNaN(couponField)){
        alert('Do not empty input field.');
        return;
    } */

    // get result output
    const result = document.getElementById('result-output');

    // calculate
    if(couponCode === 'DISC30'){
        result.innerText = 'Congratulation! pay 700 tk';
    } else{
        result.innerText = 'Sorry! No Discount. pay 100 tk';
    }
})
