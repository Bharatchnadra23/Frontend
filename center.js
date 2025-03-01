document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.querySelector(".open-modal-btn");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close-btn");

    // Open Modal
    openModalBtn.addEventListener("click", function () {
        modal.classList.add("active");
    });

    // Close Modal when clicking "X"
    closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("active");
    });

    // Close Modal when clicking outside the modal box
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});
