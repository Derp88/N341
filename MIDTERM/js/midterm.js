/*
TITLE: Midterm Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 16 Oct 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 16 Oct 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    17 Oct 2023 - Added events (DGB)
*/
function getTime(){
    var objTime = new Date();
    return objTime;
}

function setDay(timeObject){
    const strDays = ["mSunday", "mMonday", "mTuesday", "mWednesday", "mThursday", "mFriday", "mSaturday"] //REQ 4: Create and use array
    strCurrentDay = strDays[timeObject.getDay()]
    strCurrentDay = strCurrentDay.slice(1); //REQ 6: Use a string method
    elDayItem.textContent = "Day: " + strCurrentDay + " (array,string,date, selectID, functionParams)"; //REQ 9: Use a Date Object method (.getDay())
}
function setHour(timeObject){
    elHourItem.textContent = "Hour: " + timeObject.getHours() + "(click,listenWithParams)";
}
function setCurrentSec(){
    var intSec = getTime().getSeconds();
    elSecItem.textContent = "Sec (hover): " + intSec;
}

function calculateAmount(){
    fltAmount = Math.random() * 1000000; //REQ 8: Use a Math Object method & REQ 5: Arthmetic Operator.
    //Only if the day is a weekend
    if (getTime().getDay > 4 || getTime().getDay == 0){  //REQ 12: If/else construct & REQ 13: Comparison Operators & REQ 14: Logical Operator
        fltAmount = fltAmount * 2; //REQ 5: Arthmetic Operator.
    }else{ //If weekday
        fltAmount = fltAmount / 2;
    }
    intAmount = Math.round(fltAmount);

    elAmountItem.textContent = "Jackpot: $" + intAmount + " (math,if/else,comp,logOp,arthem,textCont,changeClass)"; //REQ 18: Use textContent
}
function checkIfWinner(){
    if (elNumberInput.value == "352692920"){
        elStatus.textContent = "YOU WIN. CONGRATS! (submit)";
    }else{
        elStatus.textContent = "Not a winner today :( (submit)";
    }
}
function checkNumberInput(){
    var strEnteredNums = elNumberInput.value;
    if (strEnteredNums.length == 9){
        elNumberFeedback.textContent = "Correct amount of numbers entered (blur)";
    }else if(strEnteredNums.length < 9){
        elNumberFeedback.textContent = "You entered too few numbers. Please enter all NINE numbers (blur)";
    }else{
        elNumberFeedback.textContent = "You entered too many numbers. Make sure your only entered NINE (blur)";
    }
    
}
function adviceNumberInput(){
    elNumberFeedback.textContent = "TIP: Make sure to enter all NINE numbers (focus)"
}

function outputArray(){
    var intWinningNums = [9,5,2,6,9,2,9];
    int1 = 1;
    str1 = "2";
    int2 = parseInt(str1); //REQ 15: Use parsentInt()
    intCombined = int2 + int1;
    if(5){ //REQ 17: Use a Truthy value in a condition
        intWinningNums[0] = intCombined;
    }
    strOutput = "";
    for (i = 0; i < intWinningNums.length; i++){ //REQ 16: Use a loop
        strOutput += "<li>" + intWinningNums[i] + "</li>";
    }
    elWinningNums.innerHTML = strOutput; //REQ 19: use innerHTML
}
function alertClicked(){
    elFirstWin.textContent = "2 (bubble)";
    alert(this.id);
}
function alertClickedStop(event){ //REQ: 27: Use event object in a function
    elSecondWin.textContent = "0 (bubble stop)"
    alert("Propagation Halted: " + event.target.id);
    event.stopPropagation();
}
//REQ 7: Create and use object with props and methods
var objTicket = {
    intCost1: 1,
    intCost2: 0,
    intTotalCost: 0,
    elTicketItemOG: document.getElementById("ticketItemOG"),
    elTicketItem: document.getElementById("ticketItem"),
    calculateTotalCost: function(){
        this.intTotalCost = this.intCost1 + this.intCost2; //REQ 10: Use "this"
    },
    outputTotalCostOG: function(){
        this.elTicketItemOG.textContent = "Ticket Cost: " + this.intTotalCost + "  (Object, this)";
    },
    outputTotalCost: function(){
        this.elTicketItem.textContent = "Ticket Cost Tomorrow: " + this.intTotalCost;
    }
}

//Elements
var elDayItem = document.getElementById("dayItem"); //REQ 21: Select a page element by id
setDay(getTime()); //REQ 3: Function with parameter and sends output
var elAmountItem = document.getElementById("amountItem");
calculateAmount();

var elWinningNums = document.getElementById("winningNums");
outputArray();

//REQ 11: Init object, call methods, output, modified output
objTicket.calculateTotalCost();
objTicket.outputTotalCostOG();
objTicket.intCost1 = 2;
objTicket.intCost2 = 2;
objTicket.calculateTotalCost();
objTicket.outputTotalCost();

//REQ 20: Select page elements by class
var elChangeClassItems = document.getElementsByClassName("changeClass");
elChangeClassItems[0].className = "italicClass"; //These are both 0 because the element gets removed one the class changes
elChangeClassItems[0].className = "italicClass"; //These are 2 different elements!

var elRemoveHeader = document.getElementById("removeHeader");
elRemoveHeader.remove(); //REQ 22: Remove a page element

elAmountItem.className = "boldClass"; //REQ 23: Add class to an exisiting element

//REQ 24: Event listener with params
var elHourItem = document.getElementById("hourItem");
elHourItem.addEventListener("click", function(){ //REQ 29: Mouse event 1/2
    setHour(getTime());}
    , false);

//REQ 25: Event Bubbling
var elWinNums = document.getElementById("winningNums2");
elWinNums.addEventListener("click", alertClicked, false);
var elFirstWin = document.getElementById("firstWin");
elFirstWin.addEventListener("click", alertClicked, false);

//REQ 26: Stop Event Bubbling
var elWinNums2 = document.getElementById("winningNums3");
elWinNums2.addEventListener("click", alertClicked, false);
var elSecondWin = document.getElementById("secondWin");
elSecondWin.addEventListener("click", function(e){alertClickedStop(e)}, false);

//REQ 28: 2 Focus/Blur event
var elNumberInput = document.getElementById("numberInput");
var elNumberFeedback = document.getElementById("numberFeedback");
elNumberInput.addEventListener("focus", adviceNumberInput, false);
elNumberInput.addEventListener("blur", checkNumberInput, false);

var elSecItem = document.getElementById("secItem");
elSecItem.addEventListener("mouseover", setCurrentSec, false) //REQ 29: Mouse event 2/2

//REQ 30: Keyboard event
var elKeyItem = document.getElementById("key");
document.addEventListener("keydown", function(){elKeyItem.className = "redClass";}, false);

//REQ 31: FORM EVENT
var elForm = document.getElementById("checkForm");
var elStatus = document.getElementById("status");
elForm.addEventListener("submit", checkIfWinner, false);
//REQ 32: Mutation Event
var elModDOM = document.getElementById("modDOM");
document.addEventListener("DOMSubtreeModified", function(){
    elModDOM.textContent = "The DOM was changed! (mutation event)";
}, false);

//REQ 33: Event that alerts the user before leaving the page.
var elLeave= document.getElementById("leave");
window.onbeforeunload = function(){
    elLeave.textContent = "Don't leave the page! (leave event)";
    return "DONT LEAVE";
}