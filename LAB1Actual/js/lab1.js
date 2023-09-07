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
var strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
strDay = strDays[objTime.getDay()];
intHour = objTime.getHours();

function setElement(elementID, output){
    var elTopBarOutput = document.getElementById(elementID);
    elTopBarOutput.textContent += output;
}
setElement("dayItem", strDay);
setElement("hourItem", intHour);
setElement("drawingItem", bolDrawing);
setElement("daysListItem", strDays);

//Idea have the object represent the winning combo
var objDrawing = {
    intWinningNums: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};
setElement("winningNums", objDrawing.intWinningNums)