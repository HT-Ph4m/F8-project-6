"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const fqaCtaList = $$(".faq__item--cta");
const fqaItem = $$(".faq__item");
const slides = $$(".testimonials__item")
const tabs = $$(".tab__item")

const app = {
    slideIndex: 0,
    handleEvents: function(){
        if (fqaCtaList.length > 0) {
            fqaCtaList.forEach((item,index) => {
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
                }
            });
        }
    },

    automaticSlideShow: function(){
        let i;
        app.slideIndex++;
        if (app.slideIndex > slides.length) {
            app.slideIndex = 1
        }
        for (i = 0; i < tabs.length; i++) {
            slides[i].className = slides[i].className.replace(" active", "");
            tabs[i].className = tabs[i].className.replace(" active", "");
          }
        slides[app.slideIndex - 1].classList.add("active")
        tabs[app.slideIndex - 1].classList.add("active")
        setTimeout(app.automaticSlideShow,3000);
    },

    start: function() {
        this.handleEvents();
        this.automaticSlideShow();//
    }
}

app.start();