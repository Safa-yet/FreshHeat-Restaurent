

    // Preloader
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('preLoader').classList.add('hidden');
        }, 800);
    });

    // Sticky Nav
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('stickyNav');
        if (window.scrollY >= 136) {
            nav.style.top = '0';
            nav.style.opacity = '1';
        } else {
            nav.style.top = '-100px';
            nav.style.opacity = '0';
        }
    });

    // Side Panel
    function openSide() {
        document.getElementById('sidePanel').style.transform = 'translateX(0)';
        document.getElementById('sideOverlay').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    function closeSide() {
        document.getElementById('sidePanel').style.transform = 'translateX(100%)';
        document.getElementById('sideOverlay').classList.add('hidden');
        document.body.style.overflow = '';
    }
    ['openSideBtn', 'openSideBtn2', 'openSideBtnMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', openSide);
    });

    // Desktop Search Toggle
    const desktopSearchBtn = document.getElementById('desktopSearchBtn');
    const desktopSearch = document.getElementById('desktopSearch');
    if (desktopSearchBtn) {
        desktopSearchBtn.addEventListener('click', () => {
            desktopSearch.classList.toggle('search-hidden');
            desktopSearch.classList.toggle('search-visible');
            if (!desktopSearch.classList.contains('search-hidden')) desktopSearch.focus();
        });
    }

    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((s, i) => {
            s.classList.remove('active', 'prev');
            if (i === index) s.classList.add('active');
            else if (i === (index - 1 + slides.length) % slides.length) s.classList.add('prev');
        });
        dots.forEach((d, i) => {
            d.classList.toggle('bg-white', i === index);
            d.classList.toggle('bg-white/40', i !== index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    }));

    setInterval(nextSlide, 5000);
    showSlide(0);



    // Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});















