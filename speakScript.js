"user strict";

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


 function holder() {
        let o = 0;
    while (o < 3) {
        o++;
        const targ = document.getElementsByClassName("screen")[0];
        const myTemplate = document.getElementById("templ").content.cloneNode(true);
        targ.append(myTemplate);
    }
    return;
}


let n = 0;
function representLeft() {
    n++;
    let mango = document.getElementsByClassName("screen")[0];
    let point = mango.children[0];
    if (n > mango.children.length - 2) {
        n = 0;
    }
    try {
    point.style.marginLeft = `-${(n * 255)}px`;
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
    point.style.marginLeft = `-${n * 255}px`;
}

const userRight = document.getElementsByClassName("item-arrow-right")[0];
userRight.addEventListener("click", representRight, false);

const userLeft = document.getElementsByClassName("item-arrow-left")[0];
userLeft.addEventListener("click", representLeft, false);


   function render() {
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level1.html";
    let headera = new Headers();
    headera.append("Content-Type", "text/plain");
    let inita = {
        method: "GET",
        mode: "cors",
        headers: headera,
        cache: "default"
    }
    let reqa = new Request(url, inita);
    fetch(reqa)
    .then(response => {
        return response.text();
    })
    .then(card => {
       let parser = new DOMParser();
       let contentUser =  parser.parseFromString(card, "text/html");
       let cards = contentUser.getElementsByClassName("tem");
       let arr = [];
       for (let x = 0; x < cards.length; x++) {
           arr.push(cards[x].content.cloneNode(true));
       }
       for (let y = 0; y < arr.length; y++) {
           document.getElementsByClassName("screen")[0].append(arr[y]);
       }
    })
}


let reviewContent = document.getElementsByClassName("level-1")[0];
function openMobileContentCourse() {
    let content = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/fixedCourseContent.html";
    let header = new Headers();
     header.append("Content-Type", "text/plain");
    const init = {
        method: "GET",
        mode: "cors",
        headers: header,
        cache: "default"
    }
    let req = new Request(content, init);
    fetch(req)
    .then(response => {
        return response.text();
    })
    .then(grid => {
        let parser = new DOMParser();
        let contentDel = parser.parseFromString(grid, "text/html");
        let allPack = contentDel.getElementsByClassName("courseContent");
        let arr = [];
        for (let i = 0; i < allPack.length; i++) {
            arr.push(allPack[i]);
        }
        arr.map(a => reviewContent.append(a));
    })
    .catch(err => alert(err.message));
}

const openLevel1 = document.getElementsByClassName("open-arrow-1")[0];
openLevel1.addEventListener("click", function() {
    reviewContent.classList.toggle("blocker");
    reviewContent.classList.toggle("contentView");
}, false);
window.onload = function() {
    render();
    openMobileContentCourse();
    //maxi();
}


function maxi() {
    let loaders = document.getElementById("templ").content.cloneNode(true);
    let targs = document.getElementsByClassName("screen")[0];
    targs.append(loaders);
}



