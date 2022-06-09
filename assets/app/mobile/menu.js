let menuBtn = document.querySelector(".menu-btn");
let mobileNav = document.querySelector(".header-nav");
let subMenu = document.querySelectorAll(".inner-menu-parent");

function HamburgerAnimate() {
    menuBtn.addEventListener('click', function () {
        this.classList.toggle("open");
        mobileNav.classList.toggle("active");
    });
}


function DisplayNone() {
    [...subMenu].forEach(menu => {
        if (menu.nextElementSibling.style.display == "block") {
            menu.nextElementSibling.style.display = "none";
        }
    });
}

function MobileNavClick() {
    [...subMenu].forEach(menu => {
        if (window.innerWidth <= 992) {
            let count = 0;
            menu.parentElement.addEventListener('click', function () {
                DisplayNone();
                menu.nextElementSibling.style.display = "block";
                count += 1;
                if (count == 2) {
                    menu.nextElementSibling.style.display = "none";
                    count = 0;
                }
            })
        }
    })
}

MobileNavClick();
HamburgerAnimate();






