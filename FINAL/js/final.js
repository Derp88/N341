/*
TITLE: Fianl Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 28 Nov 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 28 Nov 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    
*/


function getTime(){
    var objTime = new Date();
    return objTime;
}

function setDay(timeObject){
    var elDayItem = document.getElementById("dayItem");
    const strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //REQ 4: Create and use array
    strCurrentDay = strDays[timeObject.getDay()]
    elDayItem.textContent = "Current Date: " + strCurrentDay; //REQ 16: Use a Date Object method (.getDay())
}
function calculateAmount(){
    var elAmountItem = document.getElementById("amountItem");
    fltAmount = Math.random() * 1000000; //REQ 15: Use a Math Object method
    //Only if the day is a weekend
    if (getTime().getDay > 4 || getTime().getDay == 0){  //REQ 5: If/else construct & REQ 6: Comparison Operators & REQ 7: Logical Operator
        fltAmount = fltAmount * 2;
    }else{ //If weekday
        fltAmount = fltAmount / 2;
    }
    intAmount = Math.round(fltAmount);

    elAmountItem.textContent = "Current Jackpot: $" + intAmount;
}

$("#tabs").tabs();
setDay(getTime());
calculateAmount();
$("#toDelete").remove(); // REQ 9: jQuery to remove a page element