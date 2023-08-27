const dropdown = document.querySelector('.dropdown');
const overlay = document.querySelector('.overlay');

dropdown.addEventListener('mouseenter', () => {
    overlay.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    overlay.style.display = 'none'; // Revert to original background color
});