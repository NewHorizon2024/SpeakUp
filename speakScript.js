"user strict";

/*
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
*/
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

/*
window.onload = function() {
    let i = 0;
    while (i < 3) {
        i++;
        const targ = document.getElementsByClassName("screen")[0];
        const myTemplate = document.getElementById("templ").content.cloneNode(true);
        targ.append(myTemplate);
    }

}
*/

let n = 0;
function representLeft() {
    n++;
    let mango = document.getElementsByClassName("screen")[0];
    let point = mango.children[0];
    if (n > 4) {
        n = 0;
    }
    try {
    point.style.marginLeft = `-${(n * 200)}px`;
    } catch(err) {
        alert(err.message);
    }
}

function representRight() {
    n--;
    let mango = document.getElementsByClassName("screen")[0];
    let point = mango.children[0];
    if ( n < 0) {
        n = 0;
    }
    point.style.marginLeft = `-${n * 200}px`;
}

const userRight = document.getElementsByClassName("item-arrow-right")[0];
userRight.addEventListener("click", representRight, false);

const userLeft = document.getElementsByClassName("item-arrow-left")[0];
userLeft.onclick = representLeft;