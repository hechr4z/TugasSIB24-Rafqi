const backgroundImages = document.querySelectorAll('.slide-animation');
let currentIndex = 0;

function showNextBackground() {
    const currentImage = backgroundImages[currentIndex];
    const nextIndex = (currentIndex + 1) % backgroundImages.length;
    const nextImage = backgroundImages[nextIndex];

    // Tambahkan kelas untuk animasi transisi
    currentImage.classList.add('fadeOut');
    nextImage.classList.remove('hidden');
    nextImage.classList.add('fadeIn');

    // Hapus kelas setelah animasi selesai
    setTimeout(() => {
        currentImage.classList.add('hidden');
        currentImage.classList.remove('fadeOut');
        nextImage.classList.remove('fadeIn');
        currentIndex = nextIndex;
    }, 1000); // Ubah angka 1000 menjadi durasi animasi dalam milidetik
}

function showPreviousBackground() {
    const currentImage = backgroundImages[currentIndex];
    const prevIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
    const prevImage = backgroundImages[prevIndex];

    // Tambahkan kelas untuk animasi transisi
    currentImage.classList.add('fadeOut');
    prevImage.classList.remove('hidden');
    prevImage.classList.add('fadeIn');

    // Hapus kelas setelah animasi selesai
    setTimeout(() => {
        currentImage.classList.add('hidden');
        currentImage.classList.remove('fadeOut');
        prevImage.classList.remove('fadeIn');
        currentIndex = prevIndex;
    }, 2000);
}

document.getElementById('form-button').addEventListener('click', function() {
    // Tampilkan pesan konfirmasi
    const isConfirmed = confirm('Ingin mengisi form?');

    // Jika user memilih OK (Yes)
    if (isConfirmed) {
        // Arahkan ke form.html
        window.location.href = 'form.html';
    }
});

document.getElementById('left-arrow').addEventListener('click', showPreviousBackground);
document.getElementById('right-arrow').addEventListener('click', showNextBackground);