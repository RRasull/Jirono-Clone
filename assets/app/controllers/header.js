let navBar = document.getElementById("header");

function ChangeBackColor() {
    document.addEventListener("scroll", () => {
        if (window.scrollY != 0) {
            navBar.classList.add("bg-wh-color");

        } else {
            navBar.classList.remove("bg-wh-color");
        }
    });
}
ChangeBackColor();

