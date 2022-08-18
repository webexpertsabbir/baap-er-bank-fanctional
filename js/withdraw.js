document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdraTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdraTotal);

    const previousTotalBlance = getTextElementValueById('total-balance');
    const newTotalBalance = previousTotalBlance - newWithdrawAmount;
    setTextElementValueById('total-balance', newTotalBalance);
})