
document.getElementById('diposit-button').addEventListener('click', function (){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('total-balance')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
})

