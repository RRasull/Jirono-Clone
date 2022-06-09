let animate = document.querySelectorAll(".animate");

function ScrollTransform() {
    document.addEventListener('scroll', () => {
        [...animate].forEach((anim) => {
            let offset = anim.getAttribute('data-ofset');
            let translateX = anim.getAttribute('data-translate-x');
            let translateY = anim.getAttribute('data-translate-y');
            let transition = anim.getAttribute('data-transition');

            if (translateX == null) {
                translateX = 0;
            }
            if (translateY == null) {
                translateY = 0;
            }

            anim.parentElement.style.overflow = "hidden";
            anim.style.transform = `translate(${translateX}px, ${translateY}px)`;
            if (anim.offsetTop <= (window.scrollY + window.innerHeight) - offset) {
                anim.style.transform = `translate(0px, 0px)`;
                anim.style.opacity = "1";

                anim.style.transition = `${transition}s ease-out`;
            } else {
                anim.style.transform = `translate(${translateX}px, ${translateY}px)`;
                anim.style.transition = `${transition}s ease-out`;
                anim.style.opacity = "0";
            }
        })
    });
}

ScrollTransform();
