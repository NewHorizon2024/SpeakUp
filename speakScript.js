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

function indicator(e) {
    if (!e) {
        e = window.event;
    }
    let target = e.target;
    if (target.className != "eng-header") {
        return;
    }
    const rowButtons = document.getElementsByClassName("eng-header");
    for (let i = 0; i < rowButtons.length; i++) {
        rowButtons[i].classList.remove("mark");
    }
    target.classList.add("mark");
}

const rowLevel = document.getElementsByClassName("nav-bar-english-header")[0];
rowLevel.addEventListener("click", indicator, false);




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

function render4() {
    for (let h = 0; h < mainView.children.length; h++) {
        mainView.children[h].remove();
    }
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level4.html";
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
        let contentGrid = contentHtml.getElementsByClassName("tem4");
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

const englishHeader3 = document.getElementsByClassName("eng-header")[3];
englishHeader3.addEventListener("click", render4, false);

function render5() {
    for (let h = 0; h < mainView.children.length; h++) {
        mainView.children[h].remove();
    }
    let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/master/contents/level5.html";
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
        let contentGrid = contentHtml.getElementsByClassName("tem5");
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

const englishHeader4 = document.getElementsByClassName("eng-header")[4];
englishHeader4.addEventListener("click", render5, false);




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
    quizContentHolder();
  // quizHost();
}

const placeHolderContent = document.getElementsByClassName("row-4-left")[0];
 function quizContentHolder() {
     let holderQ = document.getElementById("quizHolder");
     const tempHolder = document.createElement("div");
     tempHolder.append(holderQ.content.cloneNode(true));
     tempHolder.classList.add("ragon");
     placeHolderContent.append(tempHolder);
     setTimeout( () => {
         quizHost();
     }, 3000);
     
 }
  
    function quizHost() {
        let url = "https://raw.githubusercontent.com/freelancer2020/SpeakUp/repo/grammerQuiz.html";
        let header3 = new Headers();
            header3.append("Content-Type", "text/plain");
        let init3 = {
        method: "GET",
        mode: "cors",
        headers: header3,
        cache: "default"
    }
       let req3 = new Request(url, init3);
       fetch(req3)
       .then(response => {
           return response.text();
       })
       .then(data => {
           let parser = new DOMParser();
           let quizer =  parser.parseFromString(data, "text/html");
           let quizerData = quizer.getElementById("quizInter").content.cloneNode(true);
           let placeQuiz = document.createElement("div");
           placeQuiz.append(quizerData);
           placeHolderContent.removeChild(placeHolderContent.children[0]);
           placeHolderContent.append(placeQuiz);
       })
       .then( () => {
        let ansOneA = document.getElementsByClassName("answer-1")[0];
        let ansTwoA = document.getElementsByClassName("answer-2")[0];
        let ansThreeA = document.getElementsByClassName("answer-3")[0];
        let groupAanswers = [ansOneA, ansTwoA, ansThreeA];
        for (let i = 0; i < groupAanswers.length; i++) {
            groupAanswers[i].addEventListener("click", questionOne, false);
        }
        let ansOneB = document.getElementsByClassName("answer-1")[1];
        let ansTwoB = document.getElementsByClassName("answer-2")[1];
        let ansThreeB = document.getElementsByClassName("answer-3")[1];
        let groupBanswers = [ansOneB, ansTwoB, ansThreeB];
        for (let i = 0; i < groupBanswers.length; i++) {
         groupBanswers[i].addEventListener("click", questionTwo, false);
        }
        let ansOneC = document.getElementsByClassName("answer-1")[2];
        let ansTwoC = document.getElementsByClassName("answer-2")[2];
        let ansThreeC = document.getElementsByClassName("answer-3")[2];
        let groupCanswers = [ansOneC, ansTwoC, ansThreeC];
        for (let i = 0; i < groupCanswers.length; i++) {
         groupCanswers[i].addEventListener("click", questionThree, false);
        }
        const userResult = document.getElementsByClassName("grade")[0];
        userResult.addEventListener("click", quizResult, false);
       })
       
    }



    function questionOne() {
        const home = document.getElementsByClassName("item-n-1")[0];
        if (home.children.length > 0) {
            let n = 0;
            let start = setInterval( () => {
                n++;
                home.children[0].style.cssText = `
            animation: shake 0.5s infinite;
            background-color: #54C571;
            `;
            if (n > 6) {
                clearInterval(start);
                home.children[0].style.cssText = `
                animation = "";
                background-color: #54C571;
                margin-left: 5px;`;
                
            }
            }, 100);
            return;
        }
         home.appendChild(this);
         this.style.marginLeft = "5px";
         this.style.backgroundColor = "#54C571";
         home.style.borderBottom = "0px";
     }
     let ansOneA = document.getElementsByClassName("answer-1")[0];
     let ansTwoA = document.getElementsByClassName("answer-2")[0];
     let ansThreeA = document.getElementsByClassName("answer-3")[0];
     let groupAanswers = [ansOneA, ansTwoA, ansThreeA];
     for (let i = 0; i < groupAanswers.length; i++) {
         groupAanswers[i].addEventListener("click", questionOne, false);
     }

     function questionTwo() {
        const home = document.getElementsByClassName("item-n-1")[1];
        if (home.children.length > 0) {
            let n = 0;
            let start = setInterval( () => {
                n++;
                home.children[0].style.cssText = `
            animation: shake 0.5s infinite;
            background-color: #54C571;
            `;
            if (n > 6) {
                clearInterval(start);
                home.children[0].style.cssText = `
                animation = "";
                background-color: #54C571;
                margin-left: 5px;`;
            }
            }, 100);
            return;
        }
         home.appendChild(this);
         this.style.marginLeft = "5px";
         this.style.backgroundColor = "#54C571";
         home.style.borderBottom = "0px";
     }
     let ansOneB = document.getElementsByClassName("answer-1")[1];
     let ansTwoB = document.getElementsByClassName("answer-2")[1];
     let ansThreeB = document.getElementsByClassName("answer-3")[1];
     let groupBanswers = [ansOneB, ansTwoB, ansThreeB];
     for (let i = 0; i < groupBanswers.length; i++) {
         groupBanswers[i].addEventListener("click", questionTwo, false);
     }

     function questionThree() {
        const home = document.getElementsByClassName("item-n-1")[2];
        if (home.children.length > 0) {
            let n = 0;
            let start = setInterval( () => {
                n++;
                home.children[0].style.cssText = `
            animation: shake 0.5s infinite;
            background-color: #54C571;
            `;
            if (n > 6) {
                clearInterval(start);
                home.children[0].style.cssText = `
                animation = "";
                background-color: #54C571;
                margin-left: 5px;`;
            }
            }, 100);
            return;
        }
         home.appendChild(this);
         this.style.marginLeft = "5px";
         this.style.backgroundColor = "#54C571";
         home.style.borderBottom = "0px"
     }
     let ansOneC = document.getElementsByClassName("answer-1")[2];
     let ansTwoC = document.getElementsByClassName("answer-2")[2];
     let ansThreeC = document.getElementsByClassName("answer-3")[2];
     let groupCanswers = [ansOneC, ansTwoC, ansThreeC];
     for (let i = 0; i < groupCanswers.length; i++) {
         groupCanswers[i].addEventListener("click", questionThree, false);
     }

     function quizResult() {
         let score = 0;
         let stuAnswerA = document.getElementsByClassName("item-n-1")[0];
         let stuAnswerB = document.getElementsByClassName("item-n-1")[1];
         let stuAnswerC = document.getElementsByClassName("item-n-1")[2];
         const mainView = document.getElementById("container-quiz");

         if (stuAnswerA.children[0].textContent == "the other") {
             document.getElementsByClassName("right")[0].style.display = "block";
             score++;
         } else {
             document.getElementsByClassName("wrong")[0].style.display = "block";
             stuAnswerA.children[0].style.backgroundColor = "#F70D1A";
         }
         if (stuAnswerB.children[0].textContent == "to say") {
             document.getElementsByClassName("right")[1].style.display = "block";
             score++;
         } else {
             document.getElementsByClassName("wrong")[1].style.display = "block";
             stuAnswerB.children[0].style.backgroundColor = "#F70D1A";
         }
         if (stuAnswerC.children[0].textContent == "which") {
             document.getElementsByClassName("right")[2].style.display = "block";
             score++;
         } else {
             document.getElementsByClassName("wrong")[2].style.display = "block";
             stuAnswerC.children[0].style.backgroundColor = "#F70D1A";
         }
         mainView.scrollIntoView(true);
     }

     const userResult = document.getElementsByClassName("grade")[0];
     userResult.addEventListener("click", quizResult, false);





   