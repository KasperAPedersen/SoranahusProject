// Add active header class
document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementsByClassName("headerCaseWorkers");
    for(let i = 0; i < e.length; i++) e[i].classList.add("active");
});