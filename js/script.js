const navLinks = document.querySelectorAll(".arafah_menu a");

const sections = [
    document.querySelector("#arafah_home"),
    document.querySelector("#arafah_about"),
    document.querySelector("#arafah_skills"),
    document.querySelector("#arafah_projects"),
    document.querySelector("#arafah_contact")
].filter(Boolean);

function updateActiveMenu() {
    let currentId = "arafah_home";

    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle(
            "arafah_active",
            link.getAttribute("href") === "#" + currentId
        );
    });
}

window.addEventListener("scroll", updateActiveMenu);
window.addEventListener("load", updateActiveMenu);
