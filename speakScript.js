"user strict";

function openLessons() {
    try {
    let list = document.getElementsByClassName("lessons-content")[0];
    let listCon = document.getElementsByClassName("part-bottom")[0];
    let arrow = document.getElementsByClassName("arrow")[0];
    arrow.classList.toggle("arrowRot");
    list.classList.toggle("openLessons");
    listCon.classList.toggle("resOver");
    } catch(err) {
        alert(err.message);
    }
}


const lessonsBtn = document.getElementById("part-top");
lessonsBtn.addEventListener("click", openLessons, false);