export const homeNavToggle = () => {
    const toggleTag = document.querySelector("a.toggle-nav");
    const homeTag = document.querySelector(".home");

    toggleTag.addEventListener("click", function () {
        homeTag.classList.toggle("open")
        if (homeTag.classList.contains("open")) {
            toggleTag.innerHTML = `<i class="fas fa-times"></i>Close`
        } else {
            toggleTag.innerHTML = `<i class="fas fa-bars"></i>Menu`
        }
    });
};