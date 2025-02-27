document.addEventListener("DOMContentLoaded", () => {
    const answerInput = document.getElementById("answer") as HTMLInputElement;
    const submitButton = document.getElementById("submit") as HTMLButtonElement;
    const hintParagraph = document.getElementById("hint") as HTMLParagraphElement;
    const nextLink = document.getElementById("nextLink") as HTMLAnchorElement;

    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === "egg") {
            hintParagraph.textContent = "Correct! Click the link to continue.";
            nextLink.style.display = "block";
        } else {
            hintParagraph.textContent = "Incorrect. Try again.";
        }
    });
});
