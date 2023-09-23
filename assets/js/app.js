"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const fqaCtaList = $$(".faq__item--cta");
const fqaItem = $$(".faq__item");
const slides = $$(".testimonials__item");
const tabs = $$(".tab__item");
const pcNav = $("#pc-nav");
const mobileNav = $("#mobile-nav");
const overlay = $(".menu-overlay");
const menuDrawer = $(".menu-drawer");
const footerNav = $("#footer-nav");
const mobileMenuItem = $("#mobile-nav");
const toggleMenu = $(".toggle-menu");
const logoInMenu = $(".menu-drawer a");
const playBtn = $(".statistic__media--play");
const cardVideo = $(".about-me__media--card");
const video = $(".statistic__media--video");
const videoOverlay = $(".media-overlay");

const app = {
    isPlayVideo: false,
    slideIndex: 0,
    isShowMenu: false,
    handleEvents: function () {
        if (fqaCtaList.length > 0) {
            fqaCtaList.forEach((item, index) => {
                const fqa = fqaItem[index];
                item.onclick = () => {
                    const icon = item.querySelector("i");
                    if (fqa.classList.contains("active")) {
                        fqa.classList.remove("active");
                        icon.classList.add("fa-plus");
                        icon.classList.remove("fa-minus");
                    } else {
                        fqa.classList.add("active");
                        icon.classList.remove("fa-plus");
                        icon.classList.add("fa-minus");
                    }
                };
            });
        }

        toggleMenu.onclick = () => {
            app.isShowMenu = true;
            app.toggleMenuMobile();
        }

        overlay.onclick = () => {
            app.isShowMenu = false;
            app.toggleMenuMobile();
        }

        mobileNav.onclick = () => {
            app.isShowMenu = false;
            app.toggleMenuMobile();
        }

        logoInMenu.onclick = () => {
            app.isShowMenu = false;
            app.toggleMenuMobile();
        }

        playBtn.onclick = () => {
            video.play();
            app.isPlayVideo = true;
            app.watchVideo();
        }

        videoOverlay.onclick = () => {
            video.pause();
            app.isPlayVideo = false;
            app.watchVideo();
        }
    },

    automaticSlideShow: function () {
        let i;
        app.slideIndex++;
        if (app.slideIndex > slides.length) {
            app.slideIndex = 1;
        }
        for (i = 0; i < tabs.length; i++) {
            slides[i].className = slides[i].className.replace(" active", "");
            tabs[i].className = tabs[i].className.replace(" active", "");
        }
        slides[app.slideIndex - 1].classList.add("active");
        tabs[app.slideIndex - 1].classList.add("active");
        setTimeout(app.automaticSlideShow, 3000);
    },

    generateMenuMobile: function () {
        mobileNav.innerHTML = pcNav.innerHTML;
        footerNav.innerHTML = pcNav.innerHTML;
    },

    toggleMenuMobile: function () {
        if (this.isShowMenu === true) { 
            overlay.classList.add("active");
            menuDrawer.classList.add("active");
        }else {
            overlay.classList.remove("active");
            menuDrawer.classList.remove("active");
        }
    },

    watchVideo: function () {
        if (this.isPlayVideo === false) {
            playBtn.style.display = "block";
            cardVideo.style.display = "block";
            videoOverlay.style.display = "none";
            
        }else {
            playBtn.style.display = "none";
            cardVideo.style.display = "none";
            videoOverlay.style.display = "block";
        }
    },

    start: function () {
        this.watchVideo();
        this.generateMenuMobile();
        this.handleEvents();
        this.automaticSlideShow();
    },
};

app.start();
