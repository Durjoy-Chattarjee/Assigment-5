document.getElementById('donate-out2').addEventListener('click', function (event) {
    event.preventDefault();
    const inputDonate2 = document.getElementById('input-donate2').value;
    const inputDonateNumber = parseFloat(inputDonate2);


    
    if (inputDonate2 >= 0) {
        const accountBalance2 = document.getElementById('account-balance2').innerText
        const accountBalanceNumber = parseFloat(accountBalance2);
        const taka = accountBalanceNumber + inputDonateNumber;
        document.getElementById('account-balance2').innerText = taka;
        const donateMoney = document.getElementById('donate-money').innerText
        const donateMoneyNumber = parseFloat(donateMoney);
        const remainingMoney = donateMoneyNumber - inputDonateNumber;
        document.getElementById('donate-money').innerText = remainingMoney;

        
        document.getElementById('my_modal_5').showModal();
    }
    else {
        alert('balance not found')
    }
})