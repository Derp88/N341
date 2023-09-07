/*
TITLE: LAB-1 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 6 Sep 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: 6 Sep 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
- None
*/
var strDay = "Unkown"
var intHour = 0;
var bolDrawing = false;

var objTime = new Date();
const strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
strDay = strDays[objTime.getDay()];
intHour = objTime.getHours();


function setTopBar(elementID, output){
    var elTopBarOutput = document.getElementById(elementID);
    elTopBarOutput.textContent += output;
}
setTopBar("dayItem", strDay);
setTopBar("hourItem", intHour);
setTopBar("drawingItem", bolDrawing);

//Idea have the object represent the winning combo