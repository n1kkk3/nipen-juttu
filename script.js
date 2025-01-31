
// Värien vaihtamiset väritestaus sivulla column1 laatikkoon.

function changeColorButton1() {
    const column1 = document.querySelector(".column1"); // Ensimmäinen väri laatikkoon "column1"
    column1.style.backgroundColor = "#DD4132"; 
}
function changeColorButton2() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#9E1030"; 
}
function changeColorButton3() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#FE840E"; 
}
function changeColorButton4() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#FF6F61"; 
}
function changeColorButton5() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#C62168"; 
}
function changeColorButton6() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#8D9440"; 
}
function changeColorButton7() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#FFD662"; 
}
function changeColorButton8() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#00539C"; 
}
function changeColorButton9() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#755139"; 
}
function changeColorButton10() {
    const column1 = document.querySelector(".column1"); // tietty väri // 
    column1.style.backgroundColor = "#D69C2F"; 
}
function changeColorButton11() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#616247"; 
}
function changeColorButton12() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#E8B5CE"; 
}
function changeColorButton13() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#D2C29D"; 
}
function changeColorButton14() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#343148"; 
}
function changeColorButton15() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#F0EAD6";
}
function changeColorButton16() {
    const column1 = document.querySelector(".column1"); // tietty väri //
    column1.style.backgroundColor = "#615550"; 
}



// Värien vaihtamiset column2 laatikkoon.

function changeColorButton01() {
    const column1 = document.querySelector(".column2"); // Toinen väri laatikkoon "column2"
    column1.style.backgroundColor = "#DD4132"; 
}
function changeColorButton02() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#9E1030"; 
}
function changeColorButton03() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#FE840E"; 
}
function changeColorButton04() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#FF6F61"; 
}
function changeColorButton05() {
    const column1 = document.querySelector(".column2");// tietty väri //
    column1.style.backgroundColor = "#C62168"; 
}
function changeColorButton06() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#8D9440"; 
}
function changeColorButton07() {
    const column1 = document.querySelector(".column2"); 
    column1.style.backgroundColor = "#FFD662"; // tietty väri //
}
function changeColorButton08() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#00539C"; 
}
function changeColorButton09() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#755139"; 
}
function changeColorButton010() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#D69C2F"; 
}
function changeColorButton011() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#616247"; 
}
function changeColorButton012() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#E8B5CE"; 
}
function changeColorButton013() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#D2C29D"; 
}
function changeColorButton014() {
    const column1 = document.querySelector(".column2"); 
    column1.style.backgroundColor = "#343148"; // tietty väri //
}
function changeColorButton015() {
    const column1 = document.querySelector(".column2"); 
    column1.style.backgroundColor = "#F0EAD6"; // tietty väri //
}
function changeColorButton016() {
    const column1 = document.querySelector(".column2"); // tietty väri //
    column1.style.backgroundColor = "#615550"; 
}



// Palauta oletusvärit laatikoihin column1 ja column2
function resetColor() {
    const column1 = document.querySelector(".column1");
    const column2 = document.querySelector(".column2");

    column1.style.backgroundColor = ""; 
    column2.style.backgroundColor = "";
}




//Palvelumme sivut hinnatot pomppaa näkyviin
// Funktio joka näyttää tai piilottaa hinnaston kun tekstiä klikataan
function toggleHinnasto(hinnastoId) {
    var hinnasto = document.getElementById(hinnastoId);

    if (hinnasto.style.display === "none") {
        hinnasto.style.display = "block";
    } else {
        hinnasto.style.display = "none";
    }
}







// Palvelut sivun nuolinäppäimet //
// Siirrytään seuraavalle sivulle
function goToNextPage() {
    window.location.href = "page2.html";
}

// Siirrytään edelliselle sivulle
function goToPreviousPage() {
    window.location.href = "palvelut.html";
}