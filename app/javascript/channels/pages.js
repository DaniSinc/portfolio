export const homeNavToggle = () => {
    const pagesToggleTag = document.getElementsByClassName("pages-toggle-nav");
    const pagesTag = document.querySelector(".pages-closed");

    pagesToggleTag.addEventListener("click", function () {
        pagesTag.classList.toggle("pages-open")
        if (pagesTag.classList.contains("pages-open")) {
            pagesToggleTag.innerHTML = `<i class="fas fa-times"></i>Close`
        } else {
            pagesToggleTag.innerHTML = `<i class="fas fa-bars"></i>Menu`
        }
    });
};
