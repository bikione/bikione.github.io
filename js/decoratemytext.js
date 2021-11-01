window.onload = onLoadEvent;

function onLoadEvent() {
    var btnDecorate = document.getElementById("btndecorate");
    var chkbling = document.getElementById("chkbling");
    var btnigpay = document.getElementById("btnigpay");
    var btnmalkovich = document.getElementById("btnmalkovich");
    btnDecorate.onclick = onButtonclick;
    chkbling.onchange = onBlingChanged;
    btnigpay.onclick = btnIgpayClick;
    btnmalkovich.onclick = btnMalkovichClick;
}
function onButtonclick() {
    setInterval(changeFontSize,500);
}

function onBlingChanged() {
    var txtinput = document.getElementById("txtinput");
    var body = document.getElementsByTagName("body")[0];
    if (this.checked) {
        txtinput.style.fontWeight = "bold";
        txtinput.style.color = "green";
        txtinput.style.textDecoration = "underline";    
        body.classList.add('bodybg');
        body.style.backgroundImage = "background.png";
    } else {
        txtinput.style.fontWeight = "normal";
        txtinput.style.color = "black";
        txtinput.style.textDecoration = "none";
        body.classList.remove('bodybg');
    }
}

function changeFontSize(){
        var txtinput = document.getElementById("txtinput");
        var style = window.getComputedStyle(txtinput,null).getPropertyValue('font-size');
        var size = parseFloat(style); 
        txtinput.style.fontSize = (size + 3) + 'px';
}

function btnIgpayClick(){
    var txtinput = document.getElementById("txtinput");
    var text=txtinput.value.trim();
    var result='';
    if(text.length>0){
        var words=text.split(" ");
        for(let i=0;i<words.length;i++){
            let w=words[i].trim();
            let tempw=translatePigLatin(w);
            result+=tempw+" ";
        }
        txtinput.value=result;
        
    }
}






function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ay";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}



function btnMalkovichClick(){
    var txtinput = document.getElementById("txtinput");
    var text=txtinput.value.trim();
    var result='';
    if(text.length>0){
        var words=text.split(" ");
        for(let i=0;i<words.length;i++){
            let w=words[i].trim();
            if(w.length>=5){
                result+="Malkovich"+ " ";
            }else{
                result+=w+ " ";
                
            }
        }
        txtinput.value=result;
        
    }
}
function firstIsVowel(s) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(s[0].toLowerCase()) !== -1
}