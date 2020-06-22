// ******************** JAVASCRIPT CODES *********************
// *********** WRITTEN BY: AFOLABI OLAJIDE SAMUEL ************
// ******************** DATE: APRIL 2020 *********************
// *********************** DESCRIPTION ***********************
// *ALL SCRIPT WRITTEN HERE ARE USED ON THE OFFICIAL WEB PAGE*


// Drop down menue
function dropdown(){
    let get = document.getElementById("drop-down-menu");
    if (get.className == "nav-bar"){
        get.className += " responsive";
    }else {
        get.className = "nav-bar";
    }
}

// End of Drop Down Menue

// image slider

let images = [
    "../images/Tek 1.png",
    "../images/Tek 2.png",
    "../images/Tek 3.png",
    "../images/Tek 4.png",
    "../images/Tek 5.png"
];
let count = 0;

function imageslide() {
    let change = document.getElementById("image-slider");
    change.src = images[count];
    count++;

    if (count >= images.length) {
        count = 0;
    }
}

let time = setInterval(imageslide, 4000);

// End of Image Slider

// Night mode 

function nightMode() {
    changeImagesliderBorder();
    changeMain();
    changeBoxel();
}

// function to change the image slider's border

function changeImagesliderBorder() {
    let topSectionImage = document.getElementById("img-slider-box");

    if(topSectionImage.className === "topsection-img"){
        topSectionImage.className = "topsection-img-night";
    }
    else{
        topSectionImage.className = "topsection-img";
    }
}

// function to change the style of the main element

function changeMain(){
    let bigBody = document.getElementById("wrapper");

    if(bigBody.className === "big-wrapper") {
        bigBody.className = "body";
    }
    else {
        bigBody.className = "big-wrapper";
    }
}

// function to change boxel style

function changeBoxel() {
    let divBox = document.getElementById("boxel1");
    let divBox2 = document.getElementById("boxel2");
    let divBox3 = document.getElementById("boxel3");
    let divBox4 = document.getElementById("boxel4");
    let divBox5 = document.getElementById("boxel5");
    let divBox6 = document.getElementById("boxel6");
    let divBox7 = document.getElementById("boxel7");
    let divBox8 = document.getElementById("boxel8");
    let divBox9 = document.getElementById("boxel9");
    let divBox10 = document.getElementById("boxel10");

    if(divBox.className === "div-box" || divBox2.className === "div-box" ||
        divBox3.className === "div-box" || divBox4.className === "div-box" ||
        divBox5.className === "div-box" || divBox6.className === "div-box" || 
        divBox7.className === "div-box" || divBox8.className === "div-box" || 
        divBox9.className === "div-box" || divBox10.className === "div-box") {

        divBox.className = "div-box-night";
        divBox2.className = "div-box-night";
        divBox3.className = "div-box-night";
        divBox4.className = "div-box-night";
        divBox5.className = "div-box-night";
        divBox6.className = "div-box-night";
        divBox7.className = "div-box-night";
        divBox4.className = "div-box-night";
        divBox9.className = "div-box-night";
        divBox10.className = "div-box-night";
    }
    else{
        divBox.className = "div-box ";
        divBox2.className = "div-box ";
        divBox3.className = "div-box ";
        divBox4.className = "div-box ";
        divBox5.className = "div-box ";
        divBox6.className = "div-box ";
        divBox7.className = "div-box ";
        divBox8.className = "div-box ";
        divBox9.className = "div-box ";
        divBox10.className = "div-box ";
    }
}

// End of Night Mode