"use strict";

// Do you see that we didn't write the init function.  Instead, 
// we assigned an anonymous function to the window's onload.  
// It looks just like a named function but is missing the
// name between the word function and the ()
window.onload = function () {
    const btn = document.getElementById("estimateTotalCostBtn");
    btn.onclick = estimateTotalCost;
};

function estimateTotalCost() {

    let noofDays = document.getElementById("noofDays").value;
    let optionPrice;
    let perDaycost=29.99;
    let tollTagChkbox = document.getElementById("tollTagChkbox");
    if (tollTagChkbox.checked) {
        optionPrice = noofDays * 3.95;
    }

    let gpsChkbox = document.getElementById("gpsChkbox");
    if (gpsChkbox.checked) {
        optionPrice = noofDays * 4.95;
    }

    let roadsideChkbox = document.getElementById("roadsideChkbox");
    if (roadsideChkbox.checked) {
        optionPrice = noofDays * 2.95;
    }
    let Optionsdiv = document.getElementById("Optionsdiv")
    Optionsdiv.innerText = optionPrice;

    let noRadioBtn = document.getElementById("noRadioBtn");
    let YesRadioBtn = document.getElementById("YesRadioBtn");

    let basePremium = 0;
    if (noRadioBtn.checked) {
        basePremium = 0;
    }
    else if (YesRadioBtn.checked) {
        basePremium =perDaycost*0.3
    }
    else { // it must be life since one is always checked!
        basePremium = 0;
    }

let under25div = document.getElementById("under25div")
under25div.innerText = basePremium;
let totaldue=perDaycost+optionPrice+basePremium;
let totalDuediv = document.getElementById("totalDuediv")
totalDuediv.innerText = totaldue;

}
