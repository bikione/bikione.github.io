window.onload = function () {
    document.getElementById("start").onclick = startAnimation;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("clear").onclick = clearAnimation;
    document.getElementById("move").onclick = moveToFirst;
    document.getElementById("animation").onchange = animationChange;
    document.getElementById("fontsize").onchange = changeFontSize;
    document.getElementById("speed").onchange = setSpeedFunc;
  };
  var speed = 250;
  var animationTextBySplit;
  var curFrame = 0;
  var playInterval;
function moveToFirst()
{
    stopAnimation();
    var textBox = document.getElementById("textBox");
    if(animationTextBySplit == null)
        textBox.value = "Animation is not selected yet";
    else
        textBox.value = animationTextBySplit[0];
}
function clearAnimation()
{
    document.getElementById("textBox").value = "";
}
function changeFontSize(){
    var fontsize = document.getElementById("fontsize").value;
    var textBox = document.getElementById("textBox");
    switch(fontsize)
    {
        case "tiny":
            textBox.style.fontSize = "7pt";
            break;
        case "small":
            textBox.style.fontSize = "10pt";
            break;
        case "medium":
            textBox.style.fontSize = "12pt";
            break;
        case "large":
            textBox.style.fontSize = "16pt";
            break;
        case "extralarge":
            textBox.style.fontSize = "24pt";
            break;
        case "xxl":
            textBox.style.fontSize = "32pt";
            break;
        default:
            textBox.value = "Please Check one of the options of the Font SIZe!";
            break;
    }
    
    
}
function startAnimation(){
    document.getElementById("stop").disabled =  false;
    document.getElementById("animation").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("speed").disabled = true;
    // var animationSelect = document.getElementById("animation").value;
    // var animationText = ANIMATIONS[animationSelect];
    // animationTextBySplit = animationText.split("=====");

    playInterval = setInterval(preSetAnimation, speed);



}
function stopAnimation(){
    document.getElementById("stop").disabled =  true;
    document.getElementById("animation").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("speed").disabled = false;
    clearInterval(playInterval);

}
function animationChange(){

    var animationName = document.getElementById("animation").value;
    var animationText;
    var textBox = document.getElementById("textBox");
    switch(animationName)
    {
        case "Blank":
            animationText = "";
            break;   
        case "Custom":
            animationText = "There is no an animation on Custom!";
            break;
        case "Exercise":
            animationText = EXERCISE;
            break;
        case "Juggler":
            animationText = JUGGLER;
            break;
        case "Bike":
            animationText = BIKE;
            break;
        case "Dive":
            animationText = DIVE;
            break;
        
    }   
   animationTextBySplit =  animationText.split("=====\n");

    textBox.value = animationTextBySplit[0];
    
}
function setSpeedFunc() {
    
    
    if (document.getElementById("speed").checked)
        speed = 50;
    console.log(speed);
}
function preSetAnimation() {
    if (curFrame < animationTextBySplit.length) {
      document.getElementById("textBox").value = animationTextBySplit[curFrame++];
    } else {
      curFrame = 0;
    }
  }


