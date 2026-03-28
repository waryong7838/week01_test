document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberPlaceholders = document.querySelectorAll('.number-placeholder');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️';
        } else {
            themeToggleBtn.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayLottoNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        numberPlaceholders.forEach((placeholder, index) => {
            placeholder.textContent = numbers[index];
            placeholder.style.backgroundColor = getNumberColor(numbers[index]);
            placeholder.style.color = 'white';
        });
    }

    function getNumberColor(number) {
        if (number <= 10) {
            return '#fbc400'; // Yellow
        } else if (number <= 20) {
            return '#69c8f2'; // Blue
        } else if (number <= 30) {
            return '#ff7272'; // Red
        } else if (number <= 40) {
            return '#aaaaaa'; // Gray
        } else {
            return '#b0d840'; // Green
        }
    }
});