// --- FITUR 1: DARK MODE ---
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    darkToggle.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('tema', isDark ? 'gelap' : 'terang');
});

if (localStorage.getItem('tema') === 'gelap') {
    document.body.classList.add('dark-mode');
    darkToggle.innerText = 'Light Mode';
}

// --- FITUR 2: ANIMASI COUNTER STATISTIK ---
const stats = document.querySelectorAll('.stat-angka');
const speed = 200;

const runCounter = () => {
    stats.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        runCounter();
        observer.disconnect();
    }
}, { threshold: 0.6 });

observer.observe(document.getElementById('statistik'));

// --- FITUR 3: STICKY NAVBAR EFFECT ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('#navbar');
    header.style.padding = window.scrollY > 50 ? '5px 0' : '15px 0';
    // Diperbaiki: Menggunakan var(--biru-tua) sesuai style.css
    header.style.backgroundColor = window.scrollY > 50 ? 'rgba(0, 33, 71, 0.95)' : 'var(--biru-tua)';
});