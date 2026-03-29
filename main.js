
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const generateBtn = document.getElementById('generate-btn');
    const menuCard = document.getElementById('menu-card');
    const menuResult = document.getElementById('menu-result');
    const menuImage = document.getElementById('menu-image');
    const menuDescription = document.getElementById('menu-description');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langToggleBtn = document.getElementById('lang-toggle');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Text elements for translation
    const pageTitle = document.getElementById('page-title');
    const mainHeading = document.getElementById('main-heading');
    const mainSubheading = document.getElementById('main-subheading');
    const contactHeading = document.getElementById('contact-heading');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const submitBtn = document.getElementById('submit-btn');
    const aboutHeading = document.getElementById('about-heading');
    const aboutText = document.getElementById('about-text');
    const tipsHeading = document.getElementById('tips-heading');
    const footerCopyright = document.getElementById('footer-copyright');
    const footerPrivacy = document.getElementById('footer-privacy');
    const footerContact = document.getElementById('footer-contact');

    const dinnerMenus = [
        {
            en: "🍕 Pizza", ko: "🍕 피자",
            desc_en: "A classic Italian dish featuring crispy dough topped with tomato sauce, melted cheese, and your favorite toppings. Perfect for sharing with family or friends, pizza is endlessly customizable and universally loved.",
            desc_ko: "바삭한 도우 위에 토마토소스와 치즈를 올린 이탈리아 요리입니다. 다양한 토핑으로 취향에 맞게 변형할 수 있어 온 가족이 함께 즐기기 좋습니다.",
            calories: "~285 kcal/slice",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
        },
        {
            en: "🍔 Hamburger", ko: "🍔 햄버거",
            desc_en: "A juicy beef patty nestled between soft buns with fresh vegetables, cheese, and condiments. America's quintessential comfort food is satisfying, flavorful, and always a crowd-pleaser.",
            desc_ko: "부드러운 번 사이에 두툼한 패티와 신선한 채소를 넣은 요리입니다. 소스와 재료에 따라 다양한 맛을 즐길 수 있는 든든한 한 끼입니다.",
            calories: "~550 kcal",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
        },
        {
            en: "🍣 Sushi", ko: "🍣 초밥",
            desc_en: "Delicate Japanese cuisine featuring seasoned rice paired with the freshest fish, seafood, or vegetables. Light, elegant, and rich in Omega-3 fatty acids — sushi is as nutritious as it is delicious.",
            desc_ko: "초밥용 밥 위에 신선한 생선이나 재료를 올린 일본 요리입니다. 가볍고 영양이 풍부하며, 오메가-3 지방산이 풍부해 건강에도 좋습니다.",
            calories: "~350 kcal (8 pieces)",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop"
        },
        {
            en: "🥗 Salad", ko: "🥗 샐러드",
            desc_en: "A refreshing medley of crisp fresh vegetables, often topped with a protein like grilled chicken or boiled egg, and finished with a flavorful dressing. An excellent choice for a light, nutritious dinner.",
            desc_ko: "신선한 채소에 닭가슴살이나 달걀 등의 단백질을 곁들인 건강한 한 끼입니다. 칼로리가 낮고 영양소가 풍부해 가볍게 먹기에 이상적입니다.",
            calories: "~150–300 kcal",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
            en: "🥩 Steak", ko: "🥩 스테이크",
            desc_en: "A thick, tender cut of beef grilled to your preferred doneness — from rare to well-done. Rich in protein and iron, a perfectly seared steak is one of the most satisfying and indulgent dinners you can enjoy.",
            desc_ko: "원하는 굽기로 구운 두툼한 소고기입니다. 단백질과 철분이 풍부하며, 완벽하게 구워진 스테이크는 그 어느 요리보다 만족스러운 저녁 식사입니다.",
            calories: "~450 kcal (200g)",
            image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop"
        },
        {
            en: "🍝 Pasta", ko: "🍝 파스타",
            desc_en: "An Italian staple beloved worldwide, pasta pairs beautifully with a wide variety of sauces — from rich bolognese and creamy carbonara to light aglio e olio. Comforting, filling, and easy to make at home.",
            desc_ko: "볼로네제, 카르보나라, 알리오 올리오 등 다양한 소스와 잘 어울리는 이탈리아 요리입니다. 집에서도 쉽게 만들 수 있어 부담 없는 저녁 메뉴로 인기 있습니다.",
            calories: "~400 kcal",
            image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop"
        },
        {
            en: "🌮 Tacos", ko: "🌮 타코",
            desc_en: "Vibrant Mexican street food served in warm corn or flour tortillas, filled with seasoned meat, fresh salsa, avocado, and a squeeze of lime. Bold, fresh flavors in every bite.",
            desc_ko: "따뜻한 토르티야에 양념된 고기, 살사, 아보카도를 채운 멕시코 요리입니다. 신선하고 풍미 가득한 맛이 한 입 한 입 즐거움을 줍니다.",
            calories: "~210 kcal/taco",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop"
        },
        {
            en: "🍗 Fried Chicken", ko: "🍗 치킨",
            desc_en: "Irresistibly crispy on the outside and juicy on the inside, fried chicken is one of the most universally loved comfort foods. Whether classic or spicy, it pairs perfectly with a cold drink on any occasion.",
            desc_ko: "바삭한 겉면과 촉촉한 속살이 일품인 황금빛 튀김 닭입니다. 맥주나 음료와 함께 즐기면 더욱 맛있으며, 남녀노소 모두에게 사랑받는 음식입니다.",
            calories: "~400 kcal (2 pieces)",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop"
        },
        {
            en: "🍜 Ramen", ko: "🍜 라면",
            desc_en: "Japanese noodle soup served in a deeply rich broth — tonkotsu, shoyu, or miso — topped with chashu pork, soft-boiled egg, nori, and green onions. A warming bowl that's truly soul-satisfying.",
            desc_ko: "돈코츠, 간장, 미소 등 진한 육수에 면을 넣고 차슈, 달걀, 김, 파를 올린 일본 요리입니다. 추운 날씨에 특히 몸과 마음을 따뜻하게 해줍니다.",
            calories: "~500 kcal",
            image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop"
        },
        {
            en: "🍛 Curry", ko: "🍛 카레",
            desc_en: "A fragrant, aromatic dish of spiced sauce served over fluffy rice. From mild Japanese curry to fiery Indian vindaloo, there are countless regional variations to suit every palate.",
            desc_ko: "향긋한 향신료 소스를 밥에 얹어 먹는 요리입니다. 순한 일본식 카레부터 매운 인도식 카레까지 다양한 스타일로 즐길 수 있습니다.",
            calories: "~450 kcal",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
        },
        {
            en: "🍲 Stew", ko: "🍲 찌개",
            desc_en: "A hearty, slow-cooked combination of meat, vegetables, and savory broth. Deeply comforting and nourishing, stew is the ultimate cold-weather dish that improves the longer it simmers.",
            desc_ko: "고기와 채소를 푹 끓인 국물 요리입니다. 오래 끓일수록 깊어지는 맛이 특징이며, 추운 날 가장 든든하게 먹을 수 있는 음식입니다.",
            calories: "~300 kcal",
            image: "https://images.unsplash.com/photo-1520209268518-caa476ebf028?w=400&h=300&fit=crop"
        },
        {
            en: "🥘 Soup", ko: "🥘 국",
            desc_en: "A light, nourishing broth-based dish packed with vegetables, protein, and wholesome ingredients. Easy on the stomach and deeply comforting, soup is ideal for when you want something warm but not too heavy.",
            desc_ko: "채소와 단백질이 풍부한 맑은 국물 요리입니다. 속을 편안하게 해주고 영양이 풍부해 부담 없이 즐길 수 있는 저녁 메뉴입니다.",
            calories: "~150–200 kcal",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
        },
        {
            en: "🥓 BBQ", ko: "🥓 삼겹살/고기",
            desc_en: "Smoky, charred grilled meat with rich caramelized flavors. Whether it's Korean samgyeopsal or American-style BBQ ribs, grilling brings out the best in any cut of meat and is perfect for social dining.",
            desc_ko: "불에 구워 겉은 바삭하고 속은 촉촉한 고기 요리입니다. 삼겹살이든 갈비든, 함께 구워 먹는 즐거움이 있어 모임과 외식에서 빠질 수 없는 메뉴입니다.",
            calories: "~400 kcal",
            image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop"
        },
        {
            en: "🍚 Fried Rice", ko: "🍚 볶음밥",
            desc_en: "Wok-tossed rice stir-fried with vegetables, egg, and soy sauce over high heat for a delightfully smoky, savory flavor. A quick, satisfying meal that's perfect for using up leftover rice.",
            desc_ko: "채소, 달걀, 간장을 넣고 강한 불에 볶은 밥 요리입니다. 남은 밥을 활용해 빠르게 만들 수 있어 바쁜 날 저녁으로 제격입니다.",
            calories: "~450 kcal",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
        },
        {
            en: "🥟 Dumplings", ko: "🥟 만두",
            desc_en: "Tender dough parcels filled with seasoned meat and vegetables, either steamed for a light texture or pan-fried for golden, crispy edges. A beloved comfort food across Chinese, Korean, and Japanese cuisines.",
            desc_ko: "고기와 채소를 반죽에 싸서 찌거나 구운 음식입니다. 쫄깃한 만두피와 풍부한 속 재료가 어우러져 아시아 전역에서 사랑받는 요리입니다.",
            calories: "~300 kcal (6 pieces)",
            image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop"
        },
        {
            en: "🥪 Sandwich", ko: "🥪 샌드위치",
            desc_en: "Hearty fillings layered between slices of crusty bread or soft rolls. From classic BLT to gourmet paninis, sandwiches are endlessly versatile, quick to assemble, and deeply satisfying.",
            desc_ko: "바삭한 빵이나 부드러운 롤 사이에 다양한 재료를 넣은 음식입니다. 빠르게 만들 수 있고 재료에 따라 무궁무진한 변형이 가능한 간편 메뉴입니다.",
            calories: "~350 kcal",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
        },
        {
            en: "🍜 Pho", ko: "🍜 쌀국수",
            desc_en: "A Vietnamese treasure — delicate rice noodles served in a crystal-clear, aromatic broth slow-simmered with star anise and cinnamon, topped with fresh herbs, bean sprouts, and thin slices of beef.",
            desc_ko: "팔각과 계피를 넣고 오랫동안 끓인 향긋한 육수에 쌀면을 넣고 신선한 허브를 얹은 베트남 국수입니다. 가볍지만 깊은 맛이 일품입니다.",
            calories: "~400 kcal",
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?w=400&h=300&fit=crop"
        },
        {
            en: "🍱 Bento", ko: "🍱 도시락",
            desc_en: "A beautifully balanced Japanese boxed meal with compartments for rice, protein like grilled fish or teriyaki chicken, pickled vegetables, and side dishes. Nutritious, aesthetically pleasing, and portioned just right.",
            desc_ko: "밥, 생선구이 또는 데리야키 치킨, 절임 채소 등을 칸칸이 나눠 담은 일본식 도시락입니다. 보기도 좋고 영양 균형도 잘 갖춰진 메뉴입니다.",
            calories: "~500 kcal",
            image: "https://images.unsplash.com/photo-1580828369019-2238f6982ce1?w=400&h=300&fit=crop"
        },
        {
            en: "🌯 Burrito", ko: "🌯 부리토",
            desc_en: "A large flour tortilla generously stuffed with seasoned rice, black beans, grilled meat, sour cream, guacamole, and salsa. Hearty, portable, and packed with bold Mexican flavors in every bite.",
            desc_ko: "밀가루 토르티야에 밥, 검정콩, 구운 고기, 사워크림, 과카몰리를 가득 채운 멕시코 요리입니다. 배가 든든해지는 풍성한 한 끼입니다.",
            calories: "~550 kcal",
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
        },
        {
            en: "🌭 Hot Dog", ko: "🌭 핫도그",
            desc_en: "A classic grilled or steamed sausage tucked into a soft bun, topped with mustard, ketchup, and relish. Simple, nostalgic, and undeniably delicious — the hot dog is a timeless American icon.",
            desc_ko: "부드러운 번에 소시지를 넣고 머스타드, 케첩, 렐리시를 얹은 음식입니다. 단순하지만 클래식한 맛으로 남녀노소 모두가 즐기는 메뉴입니다.",
            calories: "~300 kcal",
            image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?w=400&h=300&fit=crop"
        },
        {
            en: "🥗 Poke Bowl", ko: "🥗 포케",
            desc_en: "A Hawaiian-inspired bowl of sushi-grade raw fish — typically tuna or salmon — served over seasoned rice with colorful toppings like avocado, edamame, cucumber, and a drizzle of ponzu or spicy mayo.",
            desc_ko: "참치나 연어 등의 신선한 생선을 밥 위에 올리고 아보카도, 에다마메, 오이 등의 토핑을 더한 하와이식 덮밥입니다. 건강하고 색깔도 예쁜 메뉴입니다.",
            calories: "~400 kcal",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
        }
    ];

    const translations = {
        en: {
            title: "What's for Dinner? - Menu Recommender",
            heading: "What should I eat for dinner?",
            subheading: "Click the button below to get a random dinner recommendation from 21 delicious options.",
            generateBtn: "Get a Recommendation",
            contactHeading: "Partnership Inquiry",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            submitBtn: "Send Inquiry",
            langToggle: "KO",
            successMsg: "Thank you! Your message has been sent.",
            errorMsg: "Oops! There was a problem submitting your form.",
            aboutHeading: "About This Tool",
            aboutText: "Choosing what to eat for dinner can be surprisingly stressful. With so many options available, decision fatigue is real. Our dinner menu recommender takes the guesswork out of mealtime by randomly selecting from 21 popular dishes from around the world. Whether you're craving something light like a salad or something hearty like a steak, we've got you covered.",
            tipsHeading: "Dinner Planning Tips",
            tips: [
                "Consider your energy level — after a long day, a quick and simple meal like fried rice or a sandwich might be ideal.",
                "Balance your nutrition — alternate between protein-rich meals (steak, chicken) and lighter options (salad, soup) throughout the week.",
                "Plan ahead — knowing what's in your fridge can help you narrow down options before using the recommender.",
                "Try something new — use this tool as an opportunity to explore cuisines you haven't tried before, like pho or a poke bowl.",
                "Share the decision — ask family or friends to use the tool together to make dinner planning a fun activity."
            ],
            footerCopyright: "© 2024 What's for Dinner. All rights reserved.",
            footerPrivacy: "Privacy Policy",
            footerContact: "Contact"
        },
        ko: {
            title: "오늘 뭐 먹지? - 저녁 메뉴 추천",
            heading: "오늘 저녁 뭐 먹지?",
            subheading: "버튼을 클릭하면 21가지 맛있는 메뉴 중 하나를 무작위로 추천해드립니다.",
            generateBtn: "메뉴 추천받기",
            contactHeading: "제휴 문의",
            emailPlaceholder: "이메일 주소",
            messagePlaceholder: "문의 내용",
            submitBtn: "문의 보내기",
            langToggle: "EN",
            successMsg: "감사합니다! 성공적으로 전송되었습니다.",
            errorMsg: "앗! 폼 전송에 문제가 발생했습니다.",
            aboutHeading: "이 서비스에 대해",
            aboutText: "저녁 메뉴를 정하는 일이 생각보다 스트레스가 될 수 있습니다. 선택지가 너무 많으면 결정 피로감이 생기기 마련입니다. 저희 저녁 메뉴 추천기는 전 세계 21가지 인기 음식 중에서 무작위로 메뉴를 골라 고민을 덜어드립니다. 가벼운 샐러드부터 든든한 스테이크까지, 다양한 취향과 상황에 맞는 메뉴를 제안합니다.",
            tipsHeading: "저녁 식사 계획 팁",
            tips: [
                "피로한 날에는 볶음밥이나 샌드위치처럼 빠르고 간단한 요리를 선택하세요.",
                "영양 균형을 맞추세요 — 스테이크, 치킨 같은 단백질 요리와 샐러드, 국 같은 가벼운 메뉴를 번갈아 드세요.",
                "냉장고에 어떤 재료가 있는지 확인한 후 추천을 받으면 더 효율적입니다.",
                "새로운 음식에 도전해보세요 — 쌀국수나 포케처럼 경험하지 못한 요리를 시도해볼 기회로 활용하세요.",
                "가족이나 친구와 함께 사용해보세요 — 저녁 메뉴 정하기를 즐거운 활동으로 만들어보세요."
            ],
            footerCopyright: "© 2024 오늘 뭐 먹지. All rights reserved.",
            footerPrivacy: "개인정보처리방침",
            footerContact: "문의하기"
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
        if (mainSubheading) mainSubheading.textContent = t.subheading;
        generateBtn.textContent = t.generateBtn;
        contactHeading.textContent = t.contactHeading;
        emailInput.placeholder = t.emailPlaceholder;
        messageInput.placeholder = t.messagePlaceholder;
        submitBtn.textContent = t.submitBtn;
        langToggleBtn.textContent = t.langToggle;
        if (aboutHeading) aboutHeading.textContent = t.aboutHeading;
        if (aboutText) aboutText.textContent = t.aboutText;
        if (tipsHeading) tipsHeading.textContent = t.tipsHeading;
        if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
        if (footerPrivacy) footerPrivacy.textContent = t.footerPrivacy;
        if (footerContact) footerContact.textContent = t.footerContact;

        // Update tips list
        t.tips.forEach((tip, i) => {
            const el = document.getElementById(`tip-${i}`);
            if (el) el.textContent = tip;
        });

        // Update currently displayed menu if any
        if (currentMenuIndex !== -1) {
            const selectedMenu = dinnerMenus[currentMenuIndex];
            menuResult.textContent = selectedMenu[lang];
            menuImage.alt = selectedMenu[lang];
            if (menuDescription) {
                menuDescription.innerHTML = `<p class="menu-desc-text">${selectedMenu['desc_' + lang]}</p><span class="menu-calories">🔥 ${selectedMenu.calories}</span>`;
            }
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
            disqusContainer.innerHTML = '';

            if (window.DISQUS) {
                delete window.DISQUS;
            }

            document.querySelectorAll('script[src*="disqus.com/embed.js"]').forEach(s => s.remove());

            window.disqus_config = function () {
                this.page.url = "https://waryong7838.github.io/week01_test/";
                this.page.identifier = "week01_test_main";
                this.language = lang;
            };

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

            if (menuDescription) {
                menuDescription.innerHTML = `<p class="menu-desc-text">${selectedMenu['desc_' + currentLang]}</p><span class="menu-calories">🔥 ${selectedMenu.calories}</span>`;
            }

            const colors = ['#ff9999', '#ffcc99', '#ffff99', '#ccff99', '#99ff99', '#99ffcc', '#99ffff', '#99ccff', '#9999ff', '#cc99ff', '#ff99ff', '#ff99cc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            if (!document.body.classList.contains('dark-mode')) {
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
