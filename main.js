
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const generateBtn = document.getElementById('generate-btn');
    const menuCard = document.getElementById('menu-card');
    const menuResult = document.getElementById('menu-result');
    const menuImage = document.getElementById('menu-image');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    // Text elements for translation
    const pageTitle = document.getElementById('page-title');
    const mainHeading = document.getElementById('main-heading');
    const contactHeading = document.getElementById('contact-heading');
    const commentsHeading = document.getElementById('comments-heading');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const submitBtn = document.getElementById('submit-btn');

    const dinnerMenus = [
        { en: "🍕 Pizza", ko: "🍕 피자", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
        { en: "🍔 Hamburger", ko: "🍔 햄버거", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
        { en: "🍣 Sushi", ko: "🍣 초밥", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop" },
        { en: "🥗 Salad", ko: "🥗 샐러드", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" },
        { en: "🥩 Steak", ko: "🥩 스테이크", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop" },
        { en: "🍝 Pasta", ko: "🍝 파스타", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop" },
        { en: "🌮 Tacos", ko: "🌮 타코", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop" },
        { en: "🍗 Fried Chicken", ko: "🍗 치킨", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
        { en: "🍜 Ramen", ko: "🍜 라면", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop" },
        { en: "🍛 Curry", ko: "🍛 카레", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop" },
        { en: "🍲 Stew", ko: "🍲 찌개", image: "https://images.unsplash.com/photo-1520209268518-caa476ebf028?w=400&h=300&fit=crop" },
        { en: "🥘 Soup", ko: "🥘 국", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop" },
        { en: "🥓 BBQ", ko: "🥓 삼겹살/고기", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop" },
        { en: "🍚 Fried Rice", ko: "🍚 볶음밥", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop" },
        { en: "🥟 Dumplings", ko: "🥟 만두", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop" },
        { en: "🥪 Sandwich", ko: "🥪 샌드위치", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop" },
        { en: "🍜 Pho", ko: "🍜 쌀국수", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?w=400&h=300&fit=crop" },
        { en: "🍱 Bento", ko: "🍱 도시락", image: "https://images.unsplash.com/photo-1580828369019-2238f6982ce1?w=400&h=300&fit=crop" },
        { en: "🌯 Burrito", ko: "🌯 부리토", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop" },
        { en: "🌭 Hot Dog", ko: "🌭 핫도그", image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=400&h=300&fit=crop" },
        { en: "🥗 Poke Bowl", ko: "🥗 포케", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" }
    ];

    const translations = {
        en: {
            title: "What's for Dinner? - Menu Recommender",
            heading: "What should I eat for dinner?",
            generateBtn: "Get a Recommendation",
            contactHeading: "Partnership Inquiry",
            commentsHeading: "What do you think?",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitBtn: "Send Inquiry",
            langToggle: "KO",
            successMsg: "Thank you! Your message has been sent.",
            errorMsg: "Oops! There was a problem submitting your form."
        },
        ko: {
            title: "오늘 뭐 먹지? - 저녁 메뉴 추천",
            heading: "오늘 저녁 뭐 먹지?",
            generateBtn: "메뉴 추천받기",
            contactHeading: "제휴 문의",
            commentsHeading: "의견을 남겨주세요",
            emailPlaceholder: "이메일 주소",
            messagePlaceholder: "문의 내용",
            submitBtn: "문의 보내기",
            langToggle: "EN",
            successMsg: "감사합니다! 성공적으로 전송되었습니다.",
            errorMsg: "앗! 폼 전송에 문제가 발생했습니다."
        }
    };

    // State
    let currentTheme = localStorage.getItem('theme') || 'light';
    let currentLang = localStorage.getItem('lang') || 'en';
    let currentMenuIndex = -1;

    // Initialize Theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }

    // Initialize Language
    applyLanguage(currentLang);

    // Theme Toggle Handler
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            currentTheme = 'dark';
            themeToggleBtn.textContent = '☀️';
        } else {
            currentTheme = 'light';
            themeToggleBtn.textContent = '🌙';
        }
        localStorage.setItem('theme', currentTheme);
    });

    // Language Toggle Handler
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        document.documentElement.lang = lang;
        const t = translations[lang];
        
        pageTitle.textContent = t.title;
        mainHeading.textContent = t.heading;
        generateBtn.textContent = t.generateBtn;
        contactHeading.textContent = t.contactHeading;
        commentsHeading.textContent = t.commentsHeading;
        emailInput.placeholder = t.emailPlaceholder;
        messageInput.placeholder = t.messagePlaceholder;
        submitBtn.textContent = t.submitBtn;
        langToggleBtn.textContent = t.langToggle;

        // Update currently displayed menu if any
        if (currentMenuIndex !== -1) {
            menuResult.textContent = dinnerMenus[currentMenuIndex][lang];
            menuImage.alt = dinnerMenus[currentMenuIndex][lang];
        }

        // Reset form status text if it's currently showing
        if (formStatus.textContent !== "") {
           if (formStatus.classList.contains('success')) {
               formStatus.textContent = t.successMsg;
           } else {
               formStatus.textContent = t.errorMsg;
           }
        }

        // Force full reload of Disqus to change iframe language
        const disqusContainer = document.getElementById('disqus_thread');
        if (disqusContainer) {
            disqusContainer.innerHTML = ''; // Clear iframe
            
            // Remove existing DISQUS object
            if (window.DISQUS) {
                delete window.DISQUS;
            }
            
            // Remove old scripts
            document.querySelectorAll('script[src*="disqus.com/embed.js"]').forEach(s => s.remove());

            // Set new configuration
            window.disqus_config = function () {
                this.page.url = "https://waryong7838.github.io/week01_test/";
                this.page.identifier = "week01_test_main";
                this.language = lang;
            };

            // Inject fresh script
            const d = document, s = d.createElement('script');
            s.src = 'https://week01test.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    }

    // Generate Menu Handler
    generateBtn.addEventListener('click', () => {
        menuCard.style.opacity = '0';
        
        setTimeout(() => {
            currentMenuIndex = Math.floor(Math.random() * dinnerMenus.length);
            const selectedMenu = dinnerMenus[currentMenuIndex];
            
            menuResult.textContent = selectedMenu[currentLang];
            menuImage.src = selectedMenu.image;
            menuImage.alt = selectedMenu[currentLang];
            menuImage.style.display = 'block';
            
            const colors = ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff', '#9999ff', '#cc99ff', '#ff99ff', '#ff99cc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            if(!document.body.classList.contains('dark-mode')) {
                 menuCard.style.backgroundColor = randomColor;
            } else {
                 menuResult.style.color = randomColor;
                 menuCard.style.backgroundColor = 'var(--placeholder-bg)';
            }
            
            menuCard.style.opacity = '1';
        }, 300);
    });

    // Formspree AJAX Submission
    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = translations[currentLang].successMsg;
                formStatus.className = "success";
                contactForm.reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, 'errors')) {
                    formStatus.textContent = result.errors.map(error => error.message).join(", ");
                } else {
                    formStatus.textContent = translations[currentLang].errorMsg;
                }
                formStatus.className = "error";
            }
        } catch (error) {
            formStatus.textContent = translations[currentLang].errorMsg;
            formStatus.className = "error";
        }
    }
    
    contactForm.addEventListener("submit", handleSubmit);
});