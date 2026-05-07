// Initialize Lucide Icons
lucide.createIcons();

// Sticky Navbar Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for sticky navbar
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active state on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple mobile menu toggle (can be expanded)
const mobileBtn = document.querySelector('.mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
    alert('Mobile menu will open here in the next iteration.');
});

// Translation Logic
const translations = {
    en: {
        navHome: "Home",
        navCompany: "Company",
        navSectors: "Sectors",
        navContact: "Contact Us",
        navBtn: "Get in Touch",
        heroBadge: "Premium Human Resource Agency",
        heroTitle: "Empowering Global Growth with <span class='text-gradient'>Exceptional Talent</span>",
        heroDesc: "IT'S TIME TO TRAVEL AND EXPLORE. YOUR DREAM DESTINATION WITH US. We are a Government Approved Recruiting Agency bridging the gap between world-class organizations and highly skilled professionals.",
        heroBtn1: "Explore Our Sectors",
        heroBtn2: "View Our Certifications",
        stat1Num: "15+",
        stat1Text: "Years Experience",
        stat2Num: "20k+",
        stat2Text: "Workers Dispatched",
        stat3Num: "12+",
        stat3Text: "Countries Served",
        heroCardTitle: "Global Network",
        heroCardDesc: "Connecting talents worldwide"
    },
    bn: {
        navHome: "হোম",
        navCompany: "কোম্পানি",
        navSectors: "সেক্টরসমূহ",
        navContact: "যোগাযোগ",
        navBtn: "যোগাযোগ করুন",
        heroBadge: "লাইসেন্স নাম্বার আর এল ২৮১৪",
        heroTitle: "ফ্যান্টাসটিক ওভারসীজ",
        heroDesc: "<span style='font-size: 1.5rem; font-weight: 700; color: var(--color-brand-red); text-shadow: 2px 2px 4px rgba(255,255,255,0.9);'>সরকার অনুমোদিত রিক্রটিং এজেন্সি । লাইসেন্স নাম্বার আর এল ২৮১৪</span><br><br>IT'S TIME TO TRAVEL AND EXPLORE. YOUR DREAM DESTINATION WITH US.",
        heroBtn1: "আমাদের সেক্টরগুলো দেখুন",
        heroBtn2: "সার্টিফিকেশন দেখুন",
        stat1Num: "১৫+",
        stat1Text: "বছরের অভিজ্ঞতা",
        stat2Num: "২০ হাজার+",
        stat2Text: "কর্মী পাঠানো হয়েছে",
        stat3Num: "১২+",
        stat3Text: "দেশে সেবা প্রদান",
        heroCardTitle: "গ্লোবাল নেটওয়ার্ক",
        heroCardDesc: "বিশ্বব্যাপী প্রতিভার সংযোগ"
    }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('langToggle');

if(langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        langToggleBtn.innerText = currentLang === 'en' ? 'বাংলা' : 'English';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        
        // Adjust font family for Bangla if needed
        if(currentLang === 'bn') {
            document.body.style.fontFamily = "'Noto Sans Bengali', 'Inter', sans-serif";
        } else {
            document.body.style.fontFamily = "var(--font-body)";
        }
    });
}
