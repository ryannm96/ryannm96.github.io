const checkbox = document.getElementById('toggleBurger');

checkbox.addEventListener('change', (event) => {
    const element = document.getElementById("menu");
    if (event.currentTarget.checked) {
        element.classList.add("active");
    } else {
        element.classList.remove("active");
    }
});