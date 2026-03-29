
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuCard = document.getElementById('menu-card');
    const menuResult = document.getElementById('menu-result');
    const menuImage = document.getElementById('menu-image');
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
        { name: "🍕 Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
        { name: "🍔 Hamburger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
        { name: "🍣 Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
        { name: "🥗 Salad", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
        { name: "🥩 Steak", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
        { name: "🍝 Pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop" },
        { name: "🌮 Tacos", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop" },
        { name: "🍗 Fried Chicken", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
        { name: "🍜 Ramen", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop" },
        { name: "🍛 Curry", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop" },
        { name: "🍲 Stew", image: "https://images.unsplash.com/photo-1520209268518-caa476ebf028?w=400&h=300&fit=crop" },
        { name: "🥘 Soup", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop" },
        { name: "🥓 BBQ", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop" },
        { name: "🍚 Fried Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop" },
        { name: "🥟 Dumplings", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop" },
        { name: "🥪 Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" },
        { name: "🍜 Pho", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?w=400&h=300&fit=crop" },
        { name: "🍱 Bento", image: "https://images.unsplash.com/photo-1580828369019-2238f6982ce1?w=400&h=300&fit=crop" },
        { name: "🌯 Burrito", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop" },
        { name: "🌭 Hot Dog", image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=400&h=300&fit=crop" },
        { name: "🥗 Poke Bowl", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" }
    ];

    generateBtn.addEventListener('click', () => {
        // Simple fade out animation
        menuCard.style.opacity = '0';
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            const selectedMenu = dinnerMenus[randomIndex];
            
            menuResult.textContent = selectedMenu.name;
            menuImage.src = selectedMenu.image;
            menuImage.alt = selectedMenu.name;
            menuImage.style.display = 'block'; // Show the image
            
            // Assign random color (optional effect)
            const colors = ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff', '#9999ff', '#cc99ff', '#ff99ff', '#ff99cc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Maintain text color in dark mode, highlight background in light mode
            if(!document.body.classList.contains('dark-mode')) {
                 menuCard.style.backgroundColor = randomColor;
            } else {
                 menuResult.style.color = randomColor;
                 menuCard.style.backgroundColor = 'var(--placeholder-bg)';
            }
            
            // Fade in animation
            menuCard.style.opacity = '1';
        }, 300);
    });
});