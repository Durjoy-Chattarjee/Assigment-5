document.getElementById('donate-out3').addEventListener('click', function (event) {
    event.preventDefault();
    const inputDonate3 = document.getElementById('input-donate3').value;
    const inputDonateNumber = parseFloat(inputDonate3);

    if (inputDonate3 >= 0) {
        const accountBalance3 = document.getElementById('account-balance3').innerText
        const accountBalanceNumber = parseFloat(accountBalance3);
        const mon = accountBalanceNumber + inputDonateNumber;
        document.getElementById('account-balance3').innerText = mon;
        const donateMoney = document.getElementById('donate-money').innerText
        const donateMoneyNumber = parseFloat(donateMoney);
        const remainingMoney = donateMoneyNumber - inputDonateNumber;
        document.getElementById('donate-money').innerText = remainingMoney;

        document.getElementById('my_modal_5').showModal();
    }
})