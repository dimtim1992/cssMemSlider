const buttons = document.querySelectorAll(".nav-item");
const points = document.querySelectorAll(".point");
const img = document.querySelector(".meme");
const text = document.querySelector(".sign");

const phrases = ["Hello, kids! It's english time!", "me, when passed the test in English", "English, motherf***er, do you speak it?", "English. Y u so hard???"];

buttons.forEach((item, index) => {
    item.addEventListener("click", change);

    function change() {
        points.forEach(el => {el.classList.remove("active")});
        points[index].classList.add("active");
        img.classList.add("changed");
        text.classList.add("changed");
        setTimeout(() => {
            img.src = `./assets/img/${index}.jpg`;
            text.innerText = phrases[index];
            img.classList.remove("changed");
            text.classList.remove("changed");
          }, 2500);
    }
});