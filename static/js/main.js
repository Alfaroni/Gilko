// Konfigurasi state global
window.currentView = { name: 'home' };
let activeSection = '#';
let isMenuOpen = false;

function init() {
    initNavigation();
    initHeroEffects();
    initAboutParallax();
    initKittenSection();
    initFeaturedVideo();
    initWhyChooseVideo();
    initTestimonials();
    initFaq();
    initNewsSharing();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function initNavigation() {
    const mainHeader = document.getElementById('main-header');
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const menuToggleIcon = document.getElementById('menu-toggle-icon');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const headerLogoBtn = document.getElementById('header-logo-btn');
    const desktopLinks = document.querySelectorAll('.header-nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function onNavigate(pageName) {
        window.currentView.name = pageName;
        console.log(`Pindah ke Halaman: ${pageName}`);

        if (pageName === 'news-list' || pageName === 'news-detail') {
            updateActiveState('#news');
        }
    }

    function updateActiveState(targetHref) {
        activeSection = targetHref;

        desktopLinks.forEach((link) => {
            const href = link.getAttribute('data-href');
            link.className = href === activeSection
                ? 'header-nav-link px-4 whitespace-nowrap py-3 rounded-full text-primary transition-all duration-300 border bg-orange-100 shadow-xl shadow-black/5 border-primary/5'
                : 'header-nav-link px-4 whitespace-nowrap py-3 rounded-full text-primary transition-all duration-300 border border-transparent hover:text-tertiary hover:bg-secondary/10';
        });

        mobileLinks.forEach((link) => {
            const href = link.getAttribute('data-href');
            link.className = href === activeSection
                ? 'mobile-nav-link text-xl text-secondary hover:text-tertiary transition-colors'
                : 'mobile-nav-link text-xl text-white hover:text-tertiary transition-colors';
        });
    }

    function toggleMobileMenu(open) {
        isMenuOpen = open;
        if (!mobileOverlay || !menuToggleIcon) return;

        if (isMenuOpen) {
            mobileOverlay.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
            mobileOverlay.classList.add('opacity-100', 'translate-y-0');
            menuToggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />';
        } else {
            mobileOverlay.classList.remove('opacity-100', 'translate-y-0');
            mobileOverlay.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
            menuToggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7" />';
        }
    }

    function handleNavClick(e, href) {
        e.preventDefault();
        toggleMobileMenu(false);

        if (window.currentView.name !== 'home') {
            onNavigate('home');
        }

        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updateActiveState('#');
            return;
        }

        if (href.startsWith('#')) {
            updateActiveState(href);
            setTimeout(() => {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (!targetElement) return;

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }, 100);
        }
    }

    desktopLinks.forEach((link) => {
        link.addEventListener('click', (e) => handleNavClick(e, link.getAttribute('data-href')));
    });

    mobileLinks.forEach((link) => {
        link.addEventListener('click', (e) => handleNavClick(e, link.getAttribute('data-href')));
    });

    if (headerLogoBtn) {
        headerLogoBtn.addEventListener('click', (e) => handleNavClick(e, '#'));
    }

    window.addEventListener('scroll', () => {
        if (!mainHeader) return;

        if (window.scrollY > 20) {
            mainHeader.className = 'fixed max-w-6xl z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 top-4 w-[calc(100%-2rem)] bg-white/80 backdrop-blur-md shadow-xl border border-white/50 rounded-full py-2 px-4';
        } else {
            mainHeader.className = 'fixed max-w-6xl z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 top-0 w-full bg-transparent border-transparent backdrop-blur-none shadow-none rounded-none py-6 px-4';
        }

        if (window.scrollY < 200 && window.currentView.name === 'home') {
            updateActiveState('#');
        }
    });

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => toggleMobileMenu(!isMenuOpen));
    }

    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => toggleMobileMenu(false));
    }

    const sectionIds = ['about', 'instagram-gallery', 'why-choose', 'news', 'faq'];
    const observer = new IntersectionObserver((entries) => {
        if (window.currentView.name !== 'home') return;

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                updateActiveState(`#${entry.target.id}`);
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}

function initHeroEffects() {
    let isMobile = window.innerWidth < 768;

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 768;
    });

    window.addEventListener('mousemove', (e) => {
        if (isMobile) return;

        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;

        document.querySelectorAll('.parallax-item').forEach((item) => {
            const depth = parseFloat(item.getAttribute('data-depth')) || 0;
            const moveX = mouseX * depth * 50;
            const moveY = mouseY * depth * 50;
            item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
    });

    const headlineElement = document.getElementById('animated-headline');
    if (headlineElement) {
        const textNodes = headlineElement.querySelectorAll('span');
        let globalCharIndex = 0;

        textNodes.forEach((node) => {
            const originalText = node.textContent;
            node.textContent = '';

            originalText.split('').forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.className = 'inline-block opacity-0 translate-y-[5px] transition-all duration-300 ease-out';
                span.style.transitionDelay = `${0.3 + (globalCharIndex * 0.012)}s`;
                node.appendChild(span);
                globalCharIndex++;

                setTimeout(() => {
                    span.classList.remove('opacity-0', 'translate-y-[5px]');
                    span.classList.add('opacity-100', 'translate-y-0');
                }, 50);
            });
        });
    }

    setTimeout(() => {
        document.querySelectorAll('.hero-image').forEach((img) => {
            img.classList.remove('opacity-0', 'translate-y-8', 'scale-90');
            img.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        });

        const heroDesc = document.getElementById('hero-desc');
        const heroBtns = document.getElementById('hero-btns');

        if (heroDesc) heroDesc.classList.remove('opacity-0', 'translate-y-4');
        if (heroBtns) heroBtns.classList.remove('opacity-0', 'translate-y-4');
    }, 100);
}

function initAboutParallax() {
    let isMobile = window.innerWidth < 768;

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 768;
    });

    const aboutGallery = document.getElementById('about-gallery-grid');
    const aboutCircle = document.getElementById('about-deco-circle');

    window.addEventListener('mousemove', (e) => {
        if (isMobile) return;

        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;

        if (aboutGallery) {
            const depthGrid = parseFloat(aboutGallery.getAttribute('data-depth')) || 20;
            const moveGridX = mouseX * depthGrid;
            const moveGridY = mouseY * depthGrid;
            aboutGallery.style.transform = `translate3d(${moveGridX}px, ${moveGridY}px, 0)`;
        }

        if (aboutCircle) {
            const depthCircle = parseFloat(aboutCircle.getAttribute('data-depth')) || -40;
            const moveCircleX = mouseX * depthCircle;
            const moveCircleY = mouseY * depthCircle;
            aboutCircle.style.transform = `translate3d(calc(-50% + ${moveCircleX}px), calc(-50% + ${moveCircleY}px), 0)`;
        }
    });
}

function initKittenSection() {
    let isMobile = window.innerWidth < 768;

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 768;
    });

    if (window.Swiper) {
       // 1. Inisialisasi Main Swiper (Kitten Cards)
        const mainSwiper = new Swiper('.main-kitten-swiper', {
            spaceBetween: 16,
            slidesPerView: 1,
            navigation: {
                prevEl: '.kitten-prev',
                nextEl: '.kitten-next',
            },
            pagination: {
                el: '.main-swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }
        });

        // 2. Inisialisasi Semua Mini Swiper di Dalam Card Secara Independen
        document.querySelectorAll('.mini-swiper').forEach(function (el) {
            const id = el.getAttribute('data-id');
            new Swiper(el, {
                spaceBetween: 4,
                slidesPerView: 1.2,
                observer: true,
                observeParents: true,
                loop: true,
                pagination: {
                    el: el.querySelector('.swiper-pagination'),
                    clickable: true,
                    dynamicBullets: true
                },
                navigation: {
                    prevEl: '.mini-prev-' + id,
                    nextEl: '.mini-next-' + id,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
            });
        });
    }

    const videoContainers = document.querySelectorAll('.html-video-container');
    videoContainers.forEach((container) => {
        const video = container.querySelector('video');
        const playIcon = container.querySelector('.play-icon');
        const fullscreenBtn = container.querySelector('.btn-fullscreen');

        container.addEventListener('click', () => {
            if (!video) return;

            if (video.paused) {
                video.play();
                if (playIcon) playIcon.classList.add('opacity-0', 'scale-95');
            } else {
                video.pause();
                if (playIcon) playIcon.classList.remove('opacity-0', 'scale-95');
            }
        });

        if (fullscreenBtn && video) {
            fullscreenBtn.addEventListener('click', (e) => {
                e.stopPropagation();

                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.webkitEnterFullscreen) {
                    video.webkitEnterFullscreen();
                }
            });
        }
    });

    document.querySelectorAll('.custom-tooltip-container').forEach((container) => {
        const trigger = container.querySelector('.tooltip-trigger');
        const box = container.querySelector('.tooltip-box');

        if (!trigger || !box) return;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();

            document.querySelectorAll('.tooltip-box').forEach((otherBox) => {
                if (otherBox !== box) otherBox.classList.add('opacity-0', 'invisible');
            });

            box.classList.toggle('opacity-0');
            box.classList.toggle('invisible');
        });
    });

    window.addEventListener('click', () => {
        document.querySelectorAll('.tooltip-box').forEach((box) => {
            box.classList.add('opacity-0', 'invisible');
        });
    });

    const kittenPaw = document.getElementById('kitten-deco-paw');
    window.addEventListener('mousemove', (e) => {
        if (isMobile) return;

        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;

        if (kittenPaw) {
            const depth = parseFloat(kittenPaw.getAttribute('data-depth')) || -60;
            const moveX = mouseX * depth;
            const moveY = mouseY * depth;
            kittenPaw.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(15deg) scale(2)`;
        }
    });
}

function initFeaturedVideo() {
    const videoSection = document.getElementById('featured-video');
    const iframe = document.getElementById('youtube-featured-iframe');

    if (!videoSection || !iframe) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!iframe.contentWindow) return;

            if (entry.isIntersecting) {
                iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
            } else {
                iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
            }
        });
    }, { threshold: 0.25 });

    observer.observe(videoSection);
}

function initWhyChooseVideo() {
    let isMobile = window.innerWidth < 1024;
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 1024;
    });

    const videoWrapper = document.getElementById('video-wrapper-container');
    const video = document.getElementById('why-choose-video');
    const fullscreenBtn = document.getElementById('btn-video-fullscreen');
    const muteBtn = document.getElementById('btn-video-mute');
    const statusIndicator = document.getElementById('video-status-indicator');
    const statusText = document.getElementById('video-status-text');
    const iconExpand = document.getElementById('icon-expand');
    const iconCompress = document.getElementById('icon-compress');
    const iconMuted = document.getElementById('icon-muted');
    const iconUnmuted = document.getElementById('icon-unmasked') || document.getElementById('icon-unmuted');
    const playIcon = document.getElementById('status-play-icon');
    const pauseIcon = document.getElementById('status-pause-icon');

    if (!videoWrapper || !video) return;

    videoWrapper.addEventListener('click', () => {
        if (video.paused) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    });

    video.addEventListener('play', () => {
        if (statusIndicator) {
            statusIndicator.classList.remove('animate-pulse', 'scale-105', 'bg-tertiary');
            statusIndicator.classList.add('bg-primary/20', 'backdrop-blur-md');
        }
        if (playIcon) playIcon.classList.add('hidden');
        if (pauseIcon) pauseIcon.classList.remove('hidden');
        if (statusText) statusText.innerText = 'Playing daily cattery routine';
    });

    video.addEventListener('pause', () => {
        if (statusIndicator) {
            statusIndicator.classList.add('animate-pulse', 'scale-105', 'bg-tertiary');
            statusIndicator.classList.remove('bg-primary/20', 'backdrop-blur-md');
        }
        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
        if (statusText) statusText.innerText = 'Tap to watch cattery routine';
    });

    if (muteBtn) {
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            video.muted = !video.muted;

            if (video.muted) {
                if (iconMuted) iconMuted.classList.remove('hidden');
                if (iconUnmuted) iconUnmuted.classList.add('hidden');
            } else {
                if (iconMuted) iconMuted.classList.add('hidden');
                if (iconUnmuted) iconUnmuted.classList.remove('hidden');
            }
        });
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (document.fullscreenElement || document.webkitFullscreenElement) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            } else {
                if (video.requestFullscreen) video.requestFullscreen();
                else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
                else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
            }
        });
    }

    const handleFullscreenChange = () => {
        const isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
        if (isFullScreen) {
            video.classList.remove('object-cover');
            video.classList.add('object-contain', 'bg-black');
            if (iconExpand) iconExpand.classList.add('hidden');
            if (iconCompress) iconCompress.classList.remove('hidden');
        } else {
            video.classList.add('object-cover');
            video.classList.remove('object-contain', 'bg-black');
            if (iconExpand) iconExpand.classList.remove('hidden');
            if (iconCompress) iconCompress.classList.add('hidden');
        }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const source = video.querySelector('source');
                if (source && !source.src) {
                    source.src = source.dataset.src;
                    video.load();
                }
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    videoObserver.observe(video);

    window.addEventListener('mousemove', (e) => {
        if (isMobile || document.fullscreenElement || document.webkitFullscreenElement) {
            video.style.transform = 'scale(1.1) translate3d(0, 0, 0)';
            return;
        }

        const mouseX = (e.clientX / window.innerWidth) - 0.5;
        const mouseY = (e.clientY / window.innerHeight) - 0.5;
        video.style.transform = `scale(1.1) translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0)`;
    });

    document.querySelectorAll('.accordion-item').forEach((item) => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        const iconPlus = item.querySelector('.icon-plus');

        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            document.querySelectorAll('.accordion-item').forEach((otherItem) => {
                const otherContent = otherItem.querySelector('.accordion-content');
                const otherIcon = otherItem.querySelector('.icon-plus');
                if (otherContent) {
                    otherContent.style.maxHeight = '0px';
                    otherContent.classList.remove('pb-6');
                }
                if (otherIcon) otherIcon.classList.remove('rotate-45');
            });

            if (!isOpen) {
                content.style.maxHeight = '384px';
                content.classList.add('pb-6');
                if (iconPlus) iconPlus.classList.add('rotate-45');
            }
        });
    });
}

function initTestimonials() {
    if (window.Swiper) {
        new Swiper('.testimonial-swiper', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
            centeredSlides: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                prevEl: '.testi-prev',
                nextEl: '.testi-next'
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2
                }
            }
        });
    }
}

function initFaq() {
    document.querySelectorAll('.faq-item').forEach((item) => {
        const button = item.querySelector('.faq-btn');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (!button || !content || !icon) return;

        const svg = icon.querySelector('svg');

        button.addEventListener('click', () => {
            const isOpen = item.getAttribute('data-open') === 'true';

            document.querySelectorAll('.faq-item').forEach((otherItem) => {
                if (otherItem === item || otherItem.getAttribute('data-open') !== 'true') return;

                const otherContent = otherItem.querySelector('.faq-content');
                const otherIcon = otherItem.querySelector('.faq-icon');
                const otherSvg = otherIcon ? otherIcon.querySelector('svg') : null;

                otherItem.setAttribute('data-open', 'false');
                otherItem.className = 'faq-item overflow-hidden rounded-3xl border transition-all duration-300 bg-white/50 border-primary/5 hover:border-primary/10';
                if (otherIcon) {
                    otherIcon.className = 'faq-icon group shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-white border-primary/10 group-hover:rotate-180 group-hover:border-primary/30';
                }
                if (otherSvg) {
                    otherSvg.className = 'w-5 h-5 text-primary font-bold transition-colors';
                }
                if (otherContent) {
                    otherContent.style.maxHeight = '0px';
                    otherContent.style.opacity = '0';
                }
            });

            if (isOpen) {
                item.setAttribute('data-open', 'false');
                item.className = 'faq-item overflow-hidden rounded-3xl border transition-all duration-300 bg-white/50 border-primary/5 hover:border-primary/10';
                icon.className = 'faq-icon group shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-white border-primary/10 group-hover:rotate-180 group-hover:border-primary/30';
                if (svg) svg.className = 'w-5 h-5 text-primary font-bold transition-colors';
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
            } else {
                item.setAttribute('data-open', 'true');
                item.className = 'faq-item overflow-hidden rounded-3xl border transition-all duration-300 bg-white border-tertiary/20 shadow-xl shadow-black/5';
                icon.className = 'faq-icon group shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-primary border border-transparent rotate-180';
                if (svg) svg.className = 'w-5 h-5 text-white transition-colors';
                content.style.maxHeight = `${content.scrollHeight}px`;
                content.style.opacity = '1';
            }
        });

        if (item.getAttribute('data-open') === 'true') {
            content.style.maxHeight = `${content.scrollHeight}px`;
            content.style.opacity = '1';
        } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
        }
    });
}

function initNewsSharing() {
    function navigateTo(targetPage, paramId = null) {
        console.log(`Pindah Halaman ke: ${targetPage}`, paramId ? `dengan Parameter ID: ${paramId}` : '');
    }

    const shareUrl = window.location.href || 'https://gilkocattery.com/news';
    const shareTitle = document.getElementById('article-title')?.innerText || 'Tips Merawat Kitten British Shorthair';

    document.getElementById('btn-back-to-list')?.addEventListener('click', () => navigateTo('news-list'));
    document.getElementById('btn-view-all-news')?.addEventListener('click', () => navigateTo('news-list'));

    document.querySelectorAll('.related-card').forEach((card) => {
        card.addEventListener('click', () => {
            const articleId = card.getAttribute('data-id');
            navigateTo('news-detail', articleId);
        });
    });

    document.getElementById('share-facebook')?.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
    });

    document.getElementById('share-twitter')?.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
    });

    document.getElementById('share-whatsapp')?.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
    });

    const copyBtn = document.getElementById('share-copy');
    const toastAlert = document.getElementById('copy-toast');

    copyBtn?.addEventListener('click', () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            if (toastAlert) {
                toastAlert.classList.remove('opacity-0');
                toastAlert.classList.add('opacity-100');

                setTimeout(() => {
                    toastAlert.classList.remove('opacity-100');
                    toastAlert.classList.add('opacity-0');
                }, 2000);
            }
        }).catch((err) => {
            console.error('Gagal menyalin tautan: ', err);
        });
    });
}