// Add active header class
document.addEventListener("DOMContentLoaded", () => {
    let e = document.getElementsByClassName("headerHome");
    for(let i = 0; i < e.length; i++) e[i].classList.add("active");
});

// Hero typewriter effect
let elem = document.querySelector("#hero .paragraph");
let writeSpeed = 50;
let eraseSpeed = 25;
let pauseTimer = 3000;
let text = [
    "et trygt hjem for sårbare unge",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum sit amet.",
    "Lorem ipsum amet. dolor sit"
];

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

let run = async () => {
    while(true) {
        for(let i = 0; i < text.length; i++) {
            let str = text[i];
            for(let i = 0; i < str.length; i++) {
                elem.innerHTML += str[i];
                await sleep(writeSpeed);
            }

            await sleep(pauseTimer);

            for(let i = 0; i < str.length; i++) {
                elem.innerHTML = elem.innerHTML.slice(0, elem.innerHTML.length - 1);
                await sleep(eraseSpeed);
            }
        }
    }
};
run();