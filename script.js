const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});
