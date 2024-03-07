const backgroundImages = document.querySelectorAll('.slide-animation');
let currentIndex = 0;

function showNextBackground() {
    backgroundImages[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    backgroundImages[currentIndex].classList.remove('hidden');
}

function showPreviousBackground() {
    backgroundImages[currentIndex].classList.add('hidden');
    currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
    backgroundImages[currentIndex].classList.remove('hidden');
}

document.getElementById('left-arrow').addEventListener('click', showPreviousBackground);
document.getElementById('right-arrow').addEventListener('click', showNextBackground);

document.getElementById('form-button').addEventListener('click', function() {
    // Tampilkan pesan konfirmasi
    const isConfirmed = confirm('Ingin mengisi form?');

    // Jika user memilih OK (Yes)
    if (isConfirmed) {
        // Arahkan ke form.html
        window.location.href = 'form.html';
    }
});
