function calcTip( ){

    var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = (subtotal * parseFloat(tipElem.value))/100;
    if(isNaN(tip)||isNaN(subtotal)){
        alert("Please enter a valid value!");
        tipElem.value='';
        subtotalElem.value='';
	    totalElem.innerHTML = '$';
        return;
    }
   
    var total = subtotal+tip;
    totalElem.innerHTML = '$' + total;

}