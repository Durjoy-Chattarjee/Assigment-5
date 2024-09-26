document.getElementById('donate-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputDonate = document.getElementById("input-donate").value
        const inputDonateNumber = parseFloat(inputDonate);
        if (inputDonateNumber <= 0 || inputDonate.trim() === '') {
            alert('Falied to donate ! Olace try again.')
        } else {
            const accountBalance = document.getElementById("account-balance").innerText
            const accountBalanceNumber = parseFloat(accountBalance);
            const totalMoney = accountBalanceNumber + inputDonateNumber;
            document.getElementById("account-balance").innerText = totalMoney;
            const donateMoney = document.getElementById("donate-money").innerText
            const donateMoneyNumber = parseFloat(donateMoney);
            const remainingMoney = donateMoneyNumber - inputDonateNumber;
            document.getElementById("donate-money").innerText = remainingMoney;


            document.getElementById('my_modal_5').showModal();
            

        }


    })