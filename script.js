const image = document.getElementById('mainimg');
const btnNo = document.getElementById('no');

// 1. Tambahkan variabel audio
const suaraKaget = new Audio('suara/Baby Crying Sound Effect.mp3');

// PASTIKAN EKSTENSI (.jpg atau .jpeg) SESUAI FOLDER
const gambarAwal = "foto/image.jpeg"; 
const gambarLucu = "foto/jamal.jpeg"; 

btnNo.addEventListener('mouseenter', () => {
    image.style.backgroundImage = `url('${gambarLucu}')`;
    
    // Perbaikan typo: currentTime
    suaraKaget.currentTime = 0;
    suaraKaget.play();
});

btnNo.addEventListener('mouseleave', () => {
    image.style.backgroundImage = `url('${gambarAwal}')`;
    
    // Matikan suara saat kursor keluar
    suaraKaget.pause();
});