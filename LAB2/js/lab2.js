/*
TITLE: LAB-2 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 22 Sep 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: - 22 Sep 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
    22 Sep 2023 - Added removal of element (DGB)
    22 Sep 2023 - Added changaing element ID (DGB)
    22 Sep 2023 - Added new content to top bar (DGB)
    23 Sep 2023 - Fixed Req 8.
*/

var objTime = new Date();

function findHour(){
    intCurrHour = objTime.getHours();
    if (intCurrHour > 18){ //REQ 3: If/else construct & REQ 4: Comparison Operator
        return "Evening"
    }else if (intCurrHour < 9){ //REQ 4: Comparison Operator
        return "Morning"
    }else{
        return "Afternoon"
    }
}
function findDay(){
    intCurrDay = objTime.getDay();
    strCurrDay = "Unknown";
    switch (intCurrDay) { //REQ 6: Switch Statement
        case 5:
            strCurrDay = "Friday";
            break;
        case 6:
            strCurrDay = "Saturday";
            break;
        case 0:
            strCurrDay = "Sunday";
            break;
        default:
            strCurrDay = "Weekday";
            break;
    }
    return strCurrDay;
}
function findDrawing(){
    if ((findHour() === "Evening" && objTime.getHours == '20')  || findDay() != "Weekday"){ //REQ 5: Two logical Operators
        return "Yes";
    }else{
        return "No";
    }
}
function findBonus(){
    //REQ 8: Demonstrate the difference between == and ===
    if (7 === "7"){
        return "There is a bonus!";
    }
    if (7 == "7"){
        return "No bonus";
    }
}
function getLottoArray(){
    intWinningNums = [0,0,0,0,0,0];

    str1 = "4";
    intWinningNums[0] = 5 + str1;
    int1 = parseInt(str1); //REQ 7: Use parseInt()
    intWinningNums[1] = 5 + int1;

    if(5){ //REQ 10: Use a truthy value in a condition.
        intWinningNums[2] = 36;
    }
    if(0){ //REQ 11: Use a falsy value in a condition.
        intWinningNums[2] = 22;
    }


    return intWinningNums
}
function outputArray(intWinNums){
    strOutput = "";
    for (i = 0; i < intWinNums.length; i++){ //REQ 9: Use loop to output contents of array
        strOutput += "<li>" + intWinNums[i] + "</li>";
    }
    setElementHTML("winningNums", strOutput);
}
function changeNumList(){ //REQ 13: Select 3 page elements by tag and use innerHTMl to change format and content.
    var elements = document.getElementsByTagName("li");
    elements[3].innerHTML = "<i>" + "66" + "</i>";
    elements[4].innerHTML = "<i>" + "9" + "</i>";
    elements[5].innerHTML = "<i>" + "2" + "</i>";
    //REQ 14: Loop through the selection and add new class attributes
    for (i = 3; i < elements.length; i++){
        elements[i].className = "specialNums";
    }
}
function textContentInnerHTMLOutput(){ //REQ 15: Show the difference between textContent and innerHTML
    var elOutputTextContent = document.getElementById("txtCont");
    var elOutputInnerHTML = document.getElementById("inner");
    elOutputTextContent.textContent = "Text content: " + "<del>Winner: Steve</del>";
    elOutputInnerHTML.innerHTML = "Inner HTML: " + "<del>Winner: Steve</del>";
}
function addElementToTopBar(){ //REQ 16: Add page element with content.
    var elNewSpan = document.createElement("span");
    elNewSpan.className = "barItem";
    var node = document.createTextNode("(Add el) Winners: 249");
    elNewSpan.appendChild(node);

    var topBar = document.getElementById("topBar");
    topBar.appendChild(elNewSpan);
}
function changeElementID(){
    var elToChange = document.getElementById("subHeaderOld"); //REQ 17: Select a page element based on ID
    elToChange.id = "subHeaderNew"; //REQ 18: Change the selected ID. Text is now italic with new ID.
}
function deleteElement(){
    var elToDelete = document.getElementById("toDelete");
    elToDelete.remove(); //REQ 19: Remove a page element.
}
function setElement(ID, output, label){
    var elOutput = document.getElementById(ID);
    elOutput.textContent = label + output;
}
function setElementHTML(ID, output){
    var elOutput = document.getElementById(ID);
    elOutput.innerHTML = output;
}

function main(){
    setElement("hourItem", findHour(), "(If,else) Time: ");
    setElement("dayItem", findDay(), "(Switch) Day: ");
    setElement("drawingItem", findDrawing(), "(Log Opers) Drawing: ");
    setElement("bonusNight", findBonus(), "(==vs===) Bonus: ");
    setElement("mainHeader", "Nines Balls - Lotto Simulator", ""); //REQ 12: Select Element and change textContent

    outputArray(getLottoArray())

    changeNumList();

    textContentInnerHTMLOutput();
    addElementToTopBar();
    changeElementID();
    deleteElement();
}

main();