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