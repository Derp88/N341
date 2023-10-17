/*
TITLE: LAB-3 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 3 Oct 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 6 Oct 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    6 Oct 2023 - Added keyboard events (DGB)
*/
function getTime(){
    var objTime = new Date();
    return objTime;
}
function setCurrentHour(){ 
    var intHour = getTime().getHours();
    elHourItem.textContent = "Hour: " + intHour;
}
function setCurrentMin(){
    var intMin = getTime().getMinutes();
    elMinItem.textContent = "Min: " + intMin;
}
function setCurrentSec(){
    var intSec = getTime().getSeconds();
    elSecItem.textContent = "Sec: " + intSec;
}
function setDay(timeObject){
    elDayItem = document.getElementById("dayItem");
    const strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var intDay = timeObject.getDay();
    elDayItem.textContent = strDays[intDay];
}
function getClickedID(event){
    elementID = event.target.id;
    elClicked = document.getElementById(elementID);
    elClicked.textContent = "ID: " + elementID;
}
function alertClicked(){
    elFirstWin.textContent = "3 (bubble)";
    alert(this.id);
}
function alertClickedStop(event){
    elSecondWin.textContent = "5 (bubble stop)"
    alert("Propagation Halted: " + event.target.id);
    event.stopPropagation();
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

function showBonusNumsDown(){
    elBonusOne.className = "bonusNum1";
}
function showBonusNumsUp(){
    elBonusTwo.className = "bonusNum2";
}

function checkIfWinner(){
    if (elNumberInput.value == "352692920"){
        elStatus.textContent = "YOU WIN. CONGRATS! (submit)";
    }else{
        elStatus.textContent = "Not a winner today :( (submit)";
    }
}
function setMotavationalMessage(){
    elStatus.textContent = "Most gamblers quit before they hit it big. You should try again! :) (reset)";
}
function domChange(){
    elModDOM.textContent = "The DOM was changed! (mutation event)"
}
function leaveAttempt(){
    //event.returnValue = "Don't leave please!";
    //alert("TEST");
    return "Are you want leave";
}

//Events
//REQ 3: EVENT LISTENER W/OUT PARAMS
elHourItem = document.getElementById("hourItem");
elHourItem.addEventListener("click", setCurrentHour, false);  //REQ 9: MOUSE EVENT 1/3
//REQ 4: EVENT LISTENER WITH PARAMS
var elDayItem = document.getElementById("dayItem");
elDayItem.addEventListener("click", function(){
    setDay(getTime());}
    , false);

//REQ 5: Event Bubbling
var elWinNums = document.getElementById("winningNums");
elWinNums.addEventListener("click", alertClicked, false);
var elFirstWin = document.getElementById("firstWin");
elFirstWin.addEventListener("click", alertClicked, false);

//REQ 6: EVENT OBJECT TO DISPLAY ID
var elShowIDItem = document.getElementById("showIDItem");
elShowIDItem.addEventListener("click", function(e){
    getClickedID(e);}
    , false);

//REQ 7: Stop Event Bubbling
var elWinNums2 = document.getElementById("winningNums2");
elWinNums2.addEventListener("click", alertClicked, false);
var elSecondWin = document.getElementById("secondWin");
elSecondWin.addEventListener("click", function(e){alertClickedStop(e)}, false);

//REQ 8: 2 FOCUS OR BLUE EVENTS
var elNumberInput = document.getElementById("numberInput");
var elNumberFeedback = document.getElementById("numberFeedback");
elNumberInput.addEventListener("focus", adviceNumberInput, false);
elNumberInput.addEventListener("blur", checkNumberInput, false);

//REQ 9: MOUSE EVENTS (2&3)
var elMinItem = document.getElementById("minItem");
elMinItem.addEventListener("dblclick", setCurrentMin, false);
var elSecItem = document.getElementById("secItem");
elSecItem.addEventListener("mouseover", setCurrentSec, false)

//REQ 10: 2 KEYBOARD EVENTS
var elBonusOne = document.getElementById("bonus1");
document.addEventListener("keydown", showBonusNumsDown, false);
var elBonusTwo = document.getElementById("bonus2");
document.addEventListener("keyup", showBonusNumsUp, false);

//REQ 11: 2 FORM EVENTS
var elForm = document.getElementById("checkForm");
elForm.addEventListener("submit", checkIfWinner, false);
elForm.addEventListener("reset", setMotavationalMessage, false);
var elStatus = document.getElementById("status");

//REQ 12: Mutation Event
var elModDOM = document.getElementById("modDOM");
document.addEventListener("DOMSubtreeModified", domChange, false);

//REQ 13: Alert before leaving
var elLeave= document.getElementById("leave");
window.onbeforeunload = function(){
    elLeave.textContent = "Don't leave the page! (leave event)";
    return "DONT LEAVE";
}