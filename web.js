function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}


const changingtext = ["On Desired Domain", "Gain Experience", "Competetive Salary"];
let index = 0;

function changetext() {
    index = (index + 1) % changingtext.length;
    document.getElementById("changing-text").textContent = changingtext[index];
}

setInterval(changetext, 3000);



const swiper = new Swiper('.slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },

    },

});


