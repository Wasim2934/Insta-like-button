let img = document.querySelector("#post-img");
let heart = document.querySelector("#heart");
let count = document.querySelector("#count");

let likeCount = 0;

img.addEventListener("dblclick", () => {
    likeCount++
    count.textContent = likeCount;

    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 1

    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(0)"
        heart.style.opacity = 0; 
    }, 600);
})