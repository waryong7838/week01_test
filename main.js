document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuResult = document.getElementById('menu-result');
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

    const dinnerMenus = [
        "🍕 Pizza",
        "🍔 Hamburger",
        "🍣 Sushi",
        "🥗 Salad",
        "🥩 Steak",
        "🍝 Pasta",
        "🌮 Tacos",
        "🍗 Fried Chicken",
        "🍜 Ramen",
        "🍛 Curry",
        "🍲 Stew",
        "🥘 Soup",
        "🥓 BBQ",
        "🍚 Fried Rice",
        "🥟 Dumplings",
        "🥪 Sandwich",
        "🍜 Pho",
        "🍱 Bento",
        "Burrito",
        "Hot Dog",
        "Poke Bowl"
    ];

    generateBtn.addEventListener('click', () => {
        // Simple fade out animation
        menuResult.style.opacity = '0';
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            const selectedMenu = dinnerMenus[randomIndex];
            menuResult.textContent = selectedMenu;
            
            // Assign random color (optional effect)
            const colors = ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff', '#9999ff', '#cc99ff', '#ff99ff', '#ff99cc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Maintain text color in dark mode, highlight background in light mode
            if(!document.body.classList.contains('dark-mode')) {
                 menuResult.style.backgroundColor = randomColor;
            } else {
                 menuResult.style.color = randomColor;
            }
            
            // Fade in animation
            menuResult.style.opacity = '1';
        }, 300);
    });
});