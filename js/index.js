// navigation fixed
var nav = document.getElementById("mk-navigation");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight + 200) {
        console.log("greater");
        nav.classList.remove('navbar-dark');
        nav.classList.remove('bg-dark');
        nav.classList.add('navbar-light', 'bg-light');
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove('navbar-light', 'bg-light', 'fixed-nav');
        nav.classList.add('navbar-dark', 'bg-dark');
    }
    // setup back to top link
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector('#mk-collapsable');
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 200) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // close

        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        })
    });
});

// main slider
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    autoplay: true,
});

// gallery magnific
$('.mk-gallery-card').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: 0, // [0,1] for image tag
    },
});

// loader
var loader = function () {
    setTimeout(function () {
        if ($('#mk-loader').length > 0) {
            $('#mk-loader').removeClass('show');
        }
    }, 1);
};
loader();

// aos scroll

AOS.init({
    disable: 'mobile',
    offset: 300,
    easing: 'slide',
    duration: 500,
    once: true
});