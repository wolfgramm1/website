document.addEventListener("DOMContentLoaded", () => {
    const hiddenButton = document.getElementById("hiddenButton") as HTMLButtonElement;

    setTimeout(() => {
        hiddenButton.style.display = "block";
    }, 15000); 

    hiddenButton.addEventListener("click", () => {
        window.location.href = "puzzle_adventure.html";
    });
});