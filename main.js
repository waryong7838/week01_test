
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
        "🍕 피자",
        "🍔 햄버거",
        "🍣 초밥",
        "🥗 샐러드",
        "🥩 스테이크",
        "🍝 파스타",
        "🌮 타코",
        "🍗 치킨",
        "🍜 라면",
        "🍛 카레",
        "🍲 김치찌개",
        "🥘 된장찌개",
        "🥓 삼겹살",
        "🍚 볶음밥",
        "🥟 만두",
        "🥪 샌드위치",
        "🍜 쌀국수",
        "🍱 도시락",
        "족발/보쌈",
        "떡볶이",
        "마라탕"
    ];

    generateBtn.addEventListener('click', () => {
        // 간단한 페이드 아웃 애니메이션
        menuResult.style.opacity = '0';
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            const selectedMenu = dinnerMenus[randomIndex];
            menuResult.textContent = selectedMenu;
            
            // 랜덤 색상 지정 (선택적 효과)
            const colors = ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff', '#9999ff', '#cc99ff', '#ff99ff', '#ff99cc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // 다크모드일 때 글자색 유지되도록 설정, 라이트 모드일 때 배경색 강조
            if(!document.body.classList.contains('dark-mode')) {
                 menuResult.style.backgroundColor = randomColor;
            } else {
                 menuResult.style.color = randomColor;
            }
            
            // 페이드 인 애니메이션
            menuResult.style.opacity = '1';
        }, 300);
    });
});