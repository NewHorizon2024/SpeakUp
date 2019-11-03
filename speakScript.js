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

function smart(e) {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("open");
    e.currentTarget.classList.toggle("round"); 
}

let gr = document.getElementsByClassName("plus");
for (let i = 0; i < gr.length; i++) {
    gr[i].addEventListener("click", smart, false);
}

function mobileMenuList() {
    let menu = document.getElementsByClassName("mobileMenu")[0];
    menu.classList.toggle("clicker");
}

const userclick = document.getElementById("clickable");
userclick.onclick = mobileMenuList;