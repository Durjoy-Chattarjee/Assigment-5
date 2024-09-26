document.getElementById('donate-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputDonate = document.getElementById("input-donate").value
        const inputDonateNumber = parseFloat(inputDonate);
        if (inputDonateNumber <= 0 || inputDonate.trim() === '') {
            alert('Falied to donate !Places try again.')
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

            const history = document.createElement('section');
            console.log(history)
            history.classList = 'container mx-auto sm:mx-auto mt-6 p-7 border rounded-2xl bg-green-200';
            history.innerHTML = `
            <h2 class=" text-2xl mb-5">${inputDonate} Taka is Donated for Aid for Injured in the Quota Movement </h2>
            <p class="text-smallText">Date : ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)
            </p>
            `
            const historyButton = document.getElementById('history-button');
            historyButton.insertBefore(history, historyButton.firstChild);


        }


    })


const history = document.getElementById('history-click');
history.addEventListener('click', function () {
    history.classList.add('bg-green-500');
    donation.classList.remove('bg-green-500');
    document.getElementById('donated-display').classList.add('hidden');
    document.getElementById('history-button').classList.remove('hidden');
})

const donation = document.getElementById('donation-click')
donation.addEventListener('click', function () {
    history.classList.remove('bg-green-500');
    donation.classList.add('bg-green-500');
    document.getElementById('donated-display').classList.remove('hidden');
    document.getElementById('history-button').classList.add('hidden');
})