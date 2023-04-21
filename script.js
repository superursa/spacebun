

function documentLoaded() {
    starfieldColorChange();
    makeMoreStars();
    makeMoreTinyStars();
    twinkleTwinkle();
    makeBunny();
    
    /*makeNebula();*/
 
}
function starfieldColorChange() {
  const starfield = document.getElementById('starfield');
  let colors = ['#22122E', '#071D28', '#1F0215', '#153635', '#B3003E', '#B9D463', '#FF8324', '#00121A', '#0a665a']
  let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
  starfield.style.backgroundImage = "radial-gradient" + "(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ")";
}


function changeStarColor(star) {
    var colors = ['#FDFDBD', '#FFD1D1', '#CCF3EE', '#eeffba', '#ebfff9'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;
    star.style.boxShadow = "0px 0px 30px 6px " + randomColor;
  }
  

function changeStarSize(star) {
    var minSize = 1; 
    var maxSize = 10; 
    var randomSize = Math.floor(Math.random() * (maxSize - minSize + 1));
    star.style.height = randomSize + "px";
    star.style.width = randomSize + "px";
  }

  
function changeStarPosition(star) {
    var randomTopPosition = Math.floor(Math.random() * 100);
    var randomLeftPosition = Math.floor(Math.random() * 100);
    star.style.top = randomTopPosition + "%";
    star.style.left = randomLeftPosition + "%";
}

function changeStarZ(star) {
    let randomZposition = Math.floor(Math.random() * 4);
    star.style.zIndex = randomZposition;
}

function makeStar() {
    const starfield = document.getElementById("starfield");
    const newStar = document.createElement("div");
    newStar.setAttribute("id", "star");
    changeStarColor (newStar);
    changeStarSize (newStar);
    changeStarPosition (newStar);
    changeStarZ (newStar);
    starfield.appendChild(newStar);
}

function makeMoreStars() {
    for (let starBirth = 1; starBirth < 200; starBirth++) makeStar();
}


function changeTinyStarSize(tinystar) {
    tinystar.style.height = 1 + "px";
    tinystar.style.width = 1 + "px";
}

function makeTinyStar() {
    const starfield = document.getElementById("starfield");
    const newTinyStar = document.createElement("div");
    newTinyStar.setAttribute("id", "tinystar");
    newTinyStar.setAttribute("class", "tinystar");
    changeTinyStarSize (newTinyStar);
    changeStarPosition (newTinyStar);
    changeStarZ (newTinyStar);
    tinyTwinkly (newTinyStar);
    starfield.appendChild(newTinyStar);
    
}

function makeMoreTinyStars() {
    for (let tinyStarBirth = 1; tinyStarBirth < 800; tinyStarBirth++) makeTinyStar();
}

function tinyTwinkly(tinyStar) {
    let chanceOfTwinkle = Math.floor(Math.random() * 3);
        if (chanceOfTwinkle === 1) {
          tinyStar.style.opacity = 1;
        } else {
          tinyStar.style.opacity = 0; 
  }
}


function twinkleTwinkle() {
    let tinyStars = document.getElementsByClassName("tinystar");
    for (let i = 0; i < tinyStars.length; i++) {
        const tinyStar = tinyStars[i];
      setInterval(function(){tinyTwinkly(tinyStar)},
      Math.floor(Math.random() * 90000) + 1000);
  }
}

/* bunny code v v v v */


function rotateBunny(bunny) {
    x = x + 1
    bunny.style.transform = "rotate(" + x + "deg)";
}

var rotation = 0;

function rotateBunny(bunny) {
    setInterval(function() {
        rotation = rotation + 10;
        bunny.style.transform = "rotate("+rotation+"deg)";
        bunny.style.msTransform = "rotate("+rotation+"deg)";
        bunny.style.webkitTransform = "rotate("+rotation+"deg)";

    }, 100)
}
let floatUp = 0;



function makeBunny() {
    const bunny = document.getElementById("bunny");
    const spaceBun = document.createElement("img");
    spaceBun.setAttribute("src", "assets/bunny.png")
    spaceBun.setAttribute("id", "spacebun");
    /*spaceBun.setAttribute("class", "bounce");*/
    rotateBunny (spaceBun);
    setBunnyPosition (spaceBun);
    bunny.appendChild(spaceBun);
    
}

function setBunnyPosition(bunny) {
    var randomTopPosition = Math.floor(Math.random() * 100);
    var randomLeftPosition = Math.floor(Math.random() * 100);
    bunny.style.top = randomTopPosition + "%";
    bunny.style.left = randomLeftPosition + "%";
}



    





/* nebula code below, unused for now */

function nebulaChange(nebula) {
    let colors = ['#FF5F9E', '#088395', '#93FFD8', '#79018C', '#9D84B7']
    let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    nebula.style.backgroundImage = "radial-gradient" + "(" + randomColor1 + ", " + randomColor2 + ", " + randomColor3 + ")";
}

function changeNebulaPosition(nebula) {
    var randomTopPosition = Math.floor(Math.random() * 100);
    var randomLeftPosition = Math.floor(Math.random() * 100);
    nebula.style.top = randomTopPosition + "%";
    nebula.style.left = randomLeftPosition + "%";
}

function changeNebulaSize(nebula) {
    var minSize = 30; 
    var maxSize = 150; 
    var randomSize1 = Math.floor(Math.random() * (maxSize - minSize + 1));
    var randomSize2 = Math.floor(Math.random() * (maxSize - minSize) + 1)
    nebula.style.height = randomSize1 + "px";
    nebula.style.width = randomSize2 + "px";
  }

/*function rotateNebula(nebula) {
    let minRotate = 1;
    let maxRotate = 46;
    let rotationAmt = Math.floor(Math.random()) * (maxRotate - minRotate + 1);
    nebula.style.transform = 'rotate(' + rotationAmt + 'deg)';
}*/

function makeNebula() {
    const nebulas = document.getElementById("nebulas");
    const newNebula = document.createElement("div");
    newNebula.setAttribute("class", "nebula");
    nebulaChange (newNebula);
    changeNebulaPosition (newNebula);
    changeNebulaSize (newNebula);
    nebulas.appendChild(newNebula);
}


 
  

addEventListener("DOMContentLoaded", documentLoaded);


