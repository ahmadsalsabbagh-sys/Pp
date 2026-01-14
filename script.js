// ------------------------------------------------------------------
// 1. Translation Data (Arabic & English)
// ------------------------------------------------------------------
const translations = {
    ar: {
        pageTitle: "مبادرة سفاري | Safari Initiative",
        navTitle: "مبادرة سفاري",
        navHome: "الرئيسية",
        navAbout: "عن المبادرة",
        navWhy: "لماذا سفاري",
        navServices: "خدماتنا",
        navTeam: "الفريق",
        navAchievements: "الإنجازات",
        navFaq: "الأسئلة",
        navContact: "تواصل معنا",
        
        heroTitle: "مبادرة سفاري",
        heroSubtitle: "Safari Initiative",
        heroText: "سفاري مبادرة سياحية بيئية أردنية انطلقت من عجلون، وهدفها إبراز جمال الطبيعة الأردنية من خلال رحلات ومسارات تجمع بين المغامرة، الاستكشاف، والتجربة السياحية الهادفة.",
        btnDiscover: "اكتشف المزيد",
        btnJoin: "انضم لرحلاتنا",
        scrollText: "اكتشف",

        aboutSubtitle: "من نحن",
        aboutTitle: "عن مبادرة سفاري",
        aboutText: "سفاري مبادرة تهتم بالسياحة البيئية والمغامرات الخفيفة والمتوسطة، وتركّز على خلق تجربة سياحية واعية، ممتعة، وآمنة، تعزز ارتباط الإنسان بالطبيعة.",
        visionTitle: "رؤيتنا",
        visionText: "أن نكون مبادرة رائدة في السياحة البيئية والمغامرات في الأردن، ونقدّم تجربة سياحية قريبة من الطبيعة ذات أثر إيجابي ومستدام.",
        missionTitle: "رسالتنا",
        missionText: "تقديم رحلات وتجارب سياحية آمنة وممتعة، تعرّف المشاركين على الطبيعة والتراث الأردني، وتعزز ثقافة الحفاظ على البيئة وروح المغامرة.",

        whyTitle: "لماذا تختار سفاري؟",
        why1Title: "تنظيم عالي واهتمام بالسلامة",
        why1Desc: "نهتم بأدق التفاصيل لضمان راحتكم وسلامتكم.",
        why2Title: "مسارات مدروسة وواضحة",
        why2Desc: "نختار الوجهات بعناية فائقة لتناسب الجميع.",
        why3Title: "تجربة تجمع بين المتعة والمعرفة",
        why3Desc: "استكشاف وتعلم في آن واحد عن الطبيعة والتاريخ.",
        why4Title: "التزام بالحفاظ على البيئة",
        why4Desc: "سياحة مسؤولة تحترم الطبيعة ولا تضر بها.",
        why5Title: "أجواء ودّية وروح جماعية",
        why5Desc: "نخلق ذكريات لا تنسى وصداقات جديدة.",
        
        scopeTitle: "نطاق العمل",
        scopeText: "نبدأ من محافظة عجلون، ونسعى للتوسع تدريجيًا لتشمل رحلاتنا مختلف محافظات المملكة الأردنية الهاشمية.",
        mapLabel: "عجلون",

        servicesSubtitle: "خدماتنا",
        servicesTitle: "ماذا نقدم؟",
        serv1Title: "رحلات ومسارات طبيعية",
        serv1Desc: "استكشاف الجمال الخفي داخل عجلون وباقي المحافظات.",
        serv2Title: "مغامرات خفيفة ومتوسطة",
        serv2Desc: "أنشطة مدروسة تناسب مختلف الأعمار والمستويات البدنية.",
        serv3Title: "أيام عائلية وتجارب جماعية",
        serv3Desc: "أوقات ممتعة وهادئة للعائلات والأصدقاء في أحضان الطبيعة.",
        serv4Title: "فعاليات سياحية وثقافية",
        serv4Desc: "دمج السياحة البيئية بالثقافة المحلية والتراث.",
        serv5Title: "دعم المجتمع المحلي",
        serv5Desc: "التعاون مع المشاريع الصغيرة لتعزيز التنمية المستدامة.",

        achieveTitle: "إنجازات مبادرة سفاري",
        ach1: "إطلاق المبادرة رسميًا من عجلون وانتشار الوعي بالسياحة البيئية",
        ach2: "تنظيم أولى الرحلات والمسارات بتجربة سياحية ممتعة واستكشافية",
        ach3: "تعزيز التواصل مع المجتمع المحلي والحفاظ على المواقع الأثرية",
        ach4: "توسيع شبكة المشاركين على وسائل التواصل لتشجيع السياحة الداخلية",
        ach5: "إطلاق حملات توعية بيئية لتعليم ممارسات صديقة للبيئة",

        teamSubtitle: "عائلتنا",
        teamTitle: "فريق مبادرة سفاري",
        member1Name: "سارة الصمادي",
        member1Role: "مؤسسة مبادرة سفاري – عجلون",
        member1Desc: "أعمل على تعزيز السياحة البيئية والطبيعية في الأردن من خلال رحلات ومسارات تجمع بين المغامرة والاستكشاف.",
        member2Name: "عبدالله عصام البعول",
        member2Role: "نائب مدير مبادرة سفاري",
        member2Desc: "خريج تربية رياضية، حاصل على شهادة تدريب شخصي، العمر 24 سنة، مهتم بتطوير الأنشطة الرياضية والمغامرات الآمنة.",
        member3Name: "بشرى السيوف",
        member3Role: "مسؤولة تنسيق المتطوعين",
        member3Desc: "أسعى لتطوير نفسي وتطوير المجتمع، وأتميز بالتنظيم والعمل بروح الفريق.",
        member4Name: "إيناس العمايرة",
        member4Role: "مسؤولة الإعلام والتصوير",
        member4Desc: "أعمل على توثيق الأنشطة وإيصال رسالة المبادرة بشكل إبداعي ومؤثر.",
        member5Name: "راما عنانبة",
        member5Role: "منسقة الأنشطة والبرامج",
        member5Desc: "متطوعة وعضو فعال في مؤسسات المجتمع، أساهم في تنظيم البرامج والأنشطة الميدانية.",

        faqSubtitle: "لديك استفسار؟",
        faqTitle: "الأسئلة الشائعة",

        contactTitle: "تواصل معنا",
        contactDesc: "نحن هنا للإجابة على استفساراتكم وحجز مغامرتكم القادمة",
        locationLabel: "الموقع",
        locationVal: "الأردن – عجلون",
        phoneLabel: "رقم الهاتف",
        emailLabel: "البريد الإلكتروني",
        followUs: "تابعونا على",
        footerRights: "&copy; 2026 جميع الحقوق محفوظة | مبادرة سفاري"
    },
    en: {
        pageTitle: "Safari Initiative | Eco-Tourism Jordan",
        navTitle: "Safari Initiative",
        navHome: "Home",
        navAbout: "About Us",
        navWhy: "Why Safari",
        navServices: "Services",
        navTeam: "Team",
        navAchievements: "Achievements",
        navFaq: "FAQ",
        navContact: "Contact Us",

        heroTitle: "Safari Initiative",
        heroSubtitle: "Eco-Tourism in Jordan",
        heroText: "Safari is a Jordanian eco-tourism initiative launched from Ajloun. We aim to highlight Jordan's natural beauty through trips and trails combining adventure, exploration, and meaningful tourism.",
        btnDiscover: "Discover More",
        btnJoin: "Join Our Trips",
        scrollText: "Explore",

        aboutSubtitle: "Who We Are",
        aboutTitle: "About Safari Initiative",
        aboutText: "Safari focuses on eco-tourism and light-to-moderate adventures. We create conscious, fun, and safe experiences that strengthen the human connection with nature.",
        visionTitle: "Our Vision",
        visionText: "To be a leading initiative in eco-tourism and adventure in Jordan, providing a nature-close experience with a positive, sustainable impact.",
        missionTitle: "Our Mission",
        missionText: "Providing safe and enjoyable trips that introduce participants to Jordanian nature and heritage, promoting environmental conservation and the spirit of adventure.",

        whyTitle: "Why Choose Safari?",
        why1Title: "High Organization & Safety",
        why1Desc: "We pay attention to every detail to ensure your comfort and safety.",
        why2Title: "Well-Studied Trails",
        why2Desc: "We select destinations carefully to suit everyone.",
        why3Title: "Fun & Knowledge Combined",
        why3Desc: "Explore and learn about nature and history simultaneously.",
        why4Title: "Eco-Friendly Commitment",
        why4Desc: "Responsible tourism that respects nature.",
        why5Title: "Friendly Atmosphere",
        why5Desc: "We create unforgettable memories and new friendships.",

        scopeTitle: "Our Scope",
        scopeText: "We start from Ajloun Governorate and aim to expand gradually to include trips across all Jordanian governorates.",
        mapLabel: "Ajloun",

        servicesSubtitle: "Our Services",
        servicesTitle: "What We Offer",
        serv1Title: "Nature Trails & Trips",
        serv1Desc: "Exploring hidden beauty in Ajloun and other governorates.",
        serv2Title: "Light & Moderate Adventures",
        serv2Desc: "Activities suited for various ages and fitness levels.",
        serv3Title: "Family & Group Days",
        serv3Desc: "Fun, relaxing times for families and friends in nature.",
        serv4Title: "Cultural & Eco Events",
        serv4Desc: "Merging eco-tourism with local culture and heritage.",
        serv5Title: "Supporting Local Community",
        serv5Desc: "Cooperating with small businesses to boost sustainable development.",

        achieveTitle: "Our Achievements",
        ach1: "Officially launching from Ajloun and spreading eco-tourism awareness",
        ach2: "Organizing the first exploration trips with enjoyable experiences",
        ach3: "Enhancing communication with locals and preserving heritage sites",
        ach4: "Expanding our network on social media to encourage domestic tourism",
        ach5: "Launching environmental awareness campaigns during trips",

        teamSubtitle: "Our Family",
        teamTitle: "Safari Team",
        member1Name: "Sarah Al-Smadi",
        member1Role: "Founder – Ajloun",
        member1Desc: "Working on promoting eco-tourism and nature in Jordan through adventure and exploration.",
        member2Name: "Abdullah Al-Ba'oul",
        member2Role: "Deputy Manager",
        member2Desc: "Sports Education graduate & personal trainer (24 yo), interested in safe adventure activities.",
        member3Name: "Bushra Al-Syouf",
        member3Role: "Volunteer Coordinator",
        member3Desc: "Striving for self and community development, distinguished by organization and teamwork.",
        member4Name: "Enas Al-Amayreh",
        member4Role: "Media & Photography",
        member4Desc: "Documenting activities and delivering the initiative's message creatively.",
        member5Name: "Rama Ananbeh",
        member5Role: "Activity Coordinator",
        member5Desc: "Active volunteer contributing to organizing field programs and activities.",

        faqSubtitle: "Have Questions?",
        faqTitle: "Frequently Asked Questions",

        contactTitle: "Contact Us",
        contactDesc: "We are here to answer your inquiries and book your next adventure.",
        locationLabel: "Location",
        locationVal: "Jordan – Ajloun",
        phoneLabel: "Phone",
        emailLabel: "Email",
        followUs: "Follow Us",
        footerRights: "&copy; 2026 All Rights Reserved | Safari Initiative"
    }
};

// FAQ Data Arrays
const faqDataAr = [
    { q: "هل الرحلات مناسبة للجميع؟", a: "نعم، معظم الرحلات مناسبة لمختلف الأعمار، ويتم توضيح مستوى الصعوبة قبل التسجيل." },
    { q: "من أين تكون نقطة الانطلاق؟", a: "غالباً من محافظة عجلون، ويتم تحديد نقاط تجمع إضافية حسب الوجهة." },
    { q: "هل الرحلات آمنة؟", a: "السلامة أولوية لدينا، وجميع الرحلات منظمة ضمن مسارات مدروسة." },
    { q: "ماذا أحتاج أن أحضر معي؟", a: "ملابس مريحة، حذاء رياضي، قبعة، وماء." },
    { q: "كيف يتم التسجيل؟", a: "عبر التواصل معنا على منصات التواصل الاجتماعي أو الواتساب." },
    { q: "هل هناك عدد محدد للمشاركين؟", a: "نعم، لضمان جودة التنظيم." },
    { q: "هل الرحلات مختلطة؟", a: "يتم توضيح طبيعة كل رحلة عند الإعلان عنها." },
    { q: "هل تشمل الرحلات المواصلات؟", a: "يتم توضيح ذلك وتكلفتها في إعلان كل رحلة." },
    { q: "هل توجد رسوم للمشاركة؟", a: "نعم، رسوم رمزية تغطي التكاليف." },
    { q: "كيف تحافظ سفاري على البيئة؟", a: "نلتزم بمبدأ 'لا تترك أثراً' ونشجع على النظافة." },
    { q: "هل توجد سياسة إلغاء؟", a: "نعم، تعتمد على توقيت الإبلاغ قبل الرحلة." },
    { q: "كيف يمكن التواصل معنا؟", a: "عبر الهاتف، الواتساب، أو الإيميل." }
];

const faqDataEn = [
    { q: "Are trips suitable for everyone?", a: "Yes, mostly suitable for all ages. Difficulty level is specified beforehand." },
    { q: "Where is the meeting point?", a: "Usually Ajloun, with extra pick-up points depending on the destination." },
    { q: "Are the trips safe?", a: "Safety is our priority. All trips follow studied paths with supervision." },
    { q: "What should I bring?", a: "Comfortable clothes, hiking shoes, a hat, and water." },
    { q: "How do I register?", a: "By contacting us via Social Media or WhatsApp." },
    { q: "Is there a participant limit?", a: "Yes, to ensure high organization quality." },
    { q: "Are trips mixed?", a: "The nature of the group is specified in the announcement." },
    { q: "Is transportation included?", a: "It is specified in each trip's announcement separately." },
    { q: "Are there fees?", a: "Yes, nominal fees to cover operational costs." },
    { q: "How do you protect the environment?", a: "We follow 'Leave No Trace' principles." },
    { q: "Is there a cancellation policy?", a: "Yes, depends on notice time given before the trip." },
    { q: "How can we contact you?", a: "Via Phone, WhatsApp, or Email." }
];

// ------------------------------------------------------------------
// 2. Logic Implementation
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    
    // Init AOS
    AOS.init({ duration: 1000, offset: 80, once: true, easing: 'ease-out-cubic' });

    // Mobile Menu
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');
    mobileToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.contains('fa-bars') ? 
            (icon.classList.remove('fa-bars'), icon.classList.add('fa-times')) : 
            (icon.classList.remove('fa-times'), icon.classList.add('fa-bars'));
    });
    
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            mobileToggle.querySelector('i').classList.remove('fa-times');
            mobileToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Language Toggle Logic
    const langBtn = document.getElementById('lang-btn');
    let currentLang = localStorage.getItem('safari-lang') || 'ar'; // Default Arabic

    // Initial Render
    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(currentLang);
    });

    function setLanguage(lang) {
        // 1. Update Attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // 2. Update Button Text
        langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';

        // 3. Update Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // 4. Update FAQ
        renderFaq(lang === 'ar' ? faqDataAr : faqDataEn);

        // 5. Save Preference
        localStorage.setItem('safari-lang', lang);
    }

    function renderFaq(data) {
        const wrapper = document.querySelector('.accordion-wrapper');
        wrapper.innerHTML = ''; // Clear existing
        
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'accordion-item';
            div.innerHTML = `
                <div class="accordion-header">
                    ${item.q}
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="accordion-body">
                    <p>${item.a}</p>
                </div>
            `;
            wrapper.appendChild(div);
            
            // Re-attach click event
            const header = div.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const active = document.querySelector('.accordion-header.active');
                if(active && active !== header) {
                    active.classList.remove('active');
                    active.nextElementSibling.style.maxHeight = null;
                }
                header.classList.toggle('active');
                const body = header.nextElementSibling;
                body.style.maxHeight = header.classList.contains('active') ? body.scrollHeight + "px" : null;
            });
        });
    }

    // ------------------------------------------------------------------
    // Animated Background: Nature Particles (Fireflies/Spores)
    // ------------------------------------------------------------------
    const canvas = document.getElementById('canvas-bg');
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];

    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; 
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1; // حجم الجزيئات
            this.speedX = Math.random() * 1 - 0.5; 
            this.speedY = Math.random() * 1 - 0.5;
            this.life = Math.random() * 100 + 100;
            this.opacity = Math.random() * 0.5 + 0.2;
            
            // ألوان تناسب الطبيعة (أخضر، أصفر، أبيض خفيف)
            const colors = ['253, 216, 53', '46, 125, 50', '255, 255, 255'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            // حركة متموجة بسيطة
            this.x += this.speedX + Math.sin(this.y * 0.01) * 0.2;
            this.y += this.speedY; 
            this.life--;
            
            // تلاشي وتجدد
            if (this.life < 0 || this.opacity <= 0) {
                this.reset();
                this.y = Math.random() * height; // تظهر عشوائياً
                this.life = Math.random() * 200 + 100;
                this.opacity = 0; // تبدأ مخفية وتظهر تدريجياً
            }
            if (this.opacity < 0.6 && this.life > 50) this.opacity += 0.01;
            else if (this.life < 50) this.opacity -= 0.01;
            
            // حدود الشاشة
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }
        draw() {
            ctx.beginPath(); 
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            // تأثير التوهج البسيط (Shadow Blur)
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${this.color}, 0.8)`;
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`; 
            ctx.fill();
            ctx.shadowBlur = 0; // Reset
        }
    }
    
    function init() { 
        particles = []; 
        let count = window.innerWidth < 768 ? 40 : 80; // عدد الجزيئات
        for(let i=0; i<count; i++) particles.push(new Particle()); 
    }
    function animate() { 
        ctx.clearRect(0,0,width,height); 
        particles.forEach(p=>{p.update();p.draw();}); 
        requestAnimationFrame(animate); 
    }
    
    init(); animate(); window.addEventListener('resize', init);
});