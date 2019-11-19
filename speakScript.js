"user strict";

const mainView = document.getElementsByClassName("screen")[0];
const legendView = document.getElementsByClassName("gallery")[0];
const [screenOne, screenTwo] = [document.getElementsByClassName("screen")[0], document.getElementsByClassName("screen2")[0]];
let globalArray = [screenOne, screenTwo];

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
    let mango = document.getElementsByClassName("cino")[0];
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
    let mango = document.getElementsByClassName("cino")[0];
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
    for (let h = 0; h < mainView.children.length; h++) {
        mainView.children[h].remove();
    }
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level1.html";
    let header2 = new Headers();
    header2.append("Content-Type", "text/plain");
    let init2 = {
        method: "GET",
        mode: "cors",
        headers: header2,
        cache: "default"
    }
    let req2 = new Request(url, init2);
    fetch(req2)
    .then(response => {
        return response.text();
    })
    .then(grid => {
        let arr2 = [];
        let cin2 = document.createElement("div");
        cin2.classList.add("cino");
        mainView.append(cin2);
        let parser2 = new DOMParser();
        let contentHtml = parser2.parseFromString(grid, "text/html");
        let contentGrid = contentHtml.getElementsByClassName("tem");
        for (let i = 0; i < contentGrid.length; i++) {
            arr2.push(contentGrid[i].content.cloneNode(true));
        }
        arr2.map(a => cin2.append(a));
        n = 0;
        let num = mainView.children.length;
        
        if (num > 1) {
            mainView.removeChild(mainView.lastChild);
        }
    })
    .catch(err => alert(err.message));
}

const englishHeader0 = document.getElementsByClassName("eng-header")[0];
englishHeader0.addEventListener("click", render, false);

let targo = document.getElementsByClassName("screen2")[0];
function render2() {
    for (let h = 0; h < mainView.children.length; h++) {
        mainView.children[h].remove();
    }
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level2.html";
    let header2 = new Headers();
    header2.append("Content-Type", "text/plain");
    let init2 = {
        method: "GET",
        mode: "cors",
        headers: header2,
        cache: "default"
    }
    let req2 = new Request(url, init2);
    fetch(req2)
    .then(response => {
        return response.text();
    })
    .then(grid => {
        let arr2 = [];
        let cin2 = document.createElement("div");
        cin2.classList.add("cino");
        mainView.append(cin2);
        let parser2 = new DOMParser();
        let contentHtml = parser2.parseFromString(grid, "text/html");
        let contentGrid = contentHtml.getElementsByClassName("tem2");
        for (let i = 0; i < contentGrid.length; i++) {
            arr2.push(contentGrid[i].content.cloneNode(true));
        }
        arr2.map(a => cin2.append(a));
        n = 0;
        let num = mainView.children.length;
        
        if (num > 1) {
            mainView.removeChild(mainView.lastChild);
        }
    })
    .catch(err => alert(err.message));
}


const englishHeader1 = document.getElementsByClassName("eng-header")[1];
englishHeader1.addEventListener("click", render2, false);

function render3() {
    for (let h = 0; h < mainView.children.length; h++) {
        mainView.children[h].remove();
    }
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level3.html";
    let header2 = new Headers();
    header2.append("Content-Type", "text/plain");
    let init2 = {
        method: "GET",
        mode: "cors",
        headers: header2,
        cache: "default"
    }
    let req2 = new Request(url, init2);
    fetch(req2)
    .then(response => {
        return response.text();
    })
    .then(grid => {
        let arr2 = [];
        let cin2 = document.createElement("div");
        cin2.classList.add("cino");
        
        mainView.append(cin2);
        let parser2 = new DOMParser();
        let contentHtml = parser2.parseFromString(grid, "text/html");
        let contentGrid = contentHtml.getElementsByClassName("tem3");
        for (let i = 0; i < contentGrid.length; i++) {
            arr2.push(contentGrid[i].content.cloneNode(true));
        }
        arr2.map(a => cin2.append(a));
        n = 0;
        let num = mainView.children.length;
        
        if (num > 1) {
            mainView.removeChild(mainView.lastChild);
        }
    })
    .catch(err => alert(err.message));
}

const englishHeader2 = document.getElementsByClassName("eng-header")[2];
englishHeader2.addEventListener("click", render3, false);


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



