/*
TITLE: LAB-1 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 6 Sep 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: 7 Sep 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
7 Sep 2023 - Added object with int array (DGB)
7 Sep 2023 - Added methods to object (DGB)
7 Sep 2023 - Created a main function to execute program through (DGB)
8 Sep 2023 - Added output for all original and mod values (DGB)
*/

var objTime = new Date();

var objLotto = { //REQ 16: CREATE AN OBJECT
    //REQ 3: PREFIXES & 16.1 AT LEAST TWO PROPERTIES
    strDay: "Unkown", //REQ 4: STRING VAR
    intHour: 0, //REQ 5: INT VAR
    bolDrawing: true, //REQ 6: BOL VAR
    intJackpot: 2000000, //REQ 17: INITIALIZE PROPERTY TO VIS VALUE (2 Million$)

    strDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], //REQ 9: STRING ARRAY
    intWinningNums: [1, 2, 3, 4, 5, 6, 7, 8, 9], //REQ 10: INT ARRAY
    changeIntWinningNums: function(){ //REQ 12: CHANGE VALUES IN INT ARRAY & 16.5/16.6: A METHOD THAT USES MATH & DATE OBJECTS
        this.intWinningNums[0] = this.intWinningNums[0] + objTime.getHours(); //REQ 16.2: USE "this"
        this.intWinningNums[1] = this.intWinningNums[1] * objTime.getDay();
        this.intWinningNums[2] = Math.round((objTime.getSeconds()+1) / this.intWinningNums[2]);
        this.intWinningNums[3] = Math.abs(this.intWinningNums[3] - objTime.getMinutes());
        this.intWinningNums[4] = objTime.getFullYear() % this.intWinningNums[4];
        this.intWinningNums[5] = Math.round(Math.random()/Math.random());
        this.intWinningNums[6] = Math.round(Math.random()/Math.random());
        this.intWinningNums[7] = Math.round(Math.random()/Math.random());
        this.intWinningNums[8] = Math.round(Math.random()/Math.random());
    },
    changeStrDays: function(){ //REQ 13: CHANGE STRINGS IN STR ARRAY
        this.strDays[0] = this.strDays[0].toUpperCase();
        this.strDays[1] = this.strDays[1].toLowerCase();
        this.strDays[2] = this.strDays[2].charAt(0);
        this.strDays[3] = this.strDays[3].replace("Wednes", "Hump");
        this.strDays[4] = this.strDays[4].substring(0,5)
        this.strDays[5] = this.strDays[5].toUpperCase();
        this.strDays[6] = this.strDays[6].toLowerCase();
    },
    updateDate: function(){ //REQ 21: USE DOT NOTATION TO UPDATE A PROPERTY
        this.strDay = this.strDays[objTime.getDay()]; //REQ 21: USE DOT NOTATION TO UPDATE A PROPERTY
        this.intHour = objTime.getHours();
    },
    calculateJackpot: function(){ //REQ 16.3: RETURNS VALUE THAT IS CALCULATED FROM PROPERTY
        return (this.intJackpot + (objTime.getDay() * 100000));
    },
    setElement: function(elementID, output){ //REQ 7: OUPUT FUNCTION 
        var elTopBarOutput = document.getElementById(elementID);
        elTopBarOutput.textContent = output;
    },
    setElementLabel: function(elementID, output, label){ //REQ 7: OUPUT FUNCTION & 16.4: METHOD TO OUTPUT PROPERTIES WITH LABEL
        var elTopBarOutput = document.getElementById(elementID);
        elTopBarOutput.textContent = label + output;
    }
};


function main(){
    //Set top bar, which has date, hour, and drawing tonight
    objLotto.updateDate();
    objLotto.setElementLabel("dayItem", objLotto.strDay, "Day: "); //REQ 8: CALL OUPUT FUNCTION
    objLotto.setElementLabel("hourItem", objLotto.intHour, "Hour: "); //REQ 8: CALL OUPUT FUNCTION 
    objLotto.setElementLabel("drawingItem", objLotto.bolDrawing, "Drawing Tonight: "); //REQ 8: CALL OUPUT FUNCTION

    //Set arrays
    objLotto.setElementLabel("daysListItemOG", objLotto.strDays, "Drawing Days (Original): "); //REQ 11: OUTPUT ARRAY
    objLotto.setElementLabel("winningNumsOG", objLotto.intWinningNums, "Winning Numbers (Original): ") //REQ 11: OUTPUT ARRAY

    //Change the values in the arrays & output them
    objLotto.changeStrDays(); //REQ 12: CHANGE VALUES IN INT ARRAY
    objLotto.changeIntWinningNums(); //REQ 13: CHANGE STRINGS IN STR ARRAY & REQ 19/20: CALL METHOD THAT USES MATH, DATE OBJECTS
    objLotto.setElement("winningNumsMOD", objLotto.intWinningNums); //REQ 14: OUTPUT MOD STR ARRAY & REQ 22: OUTPUT MOD PROPERTY
    objLotto.setElementLabel("dayslistItemMOD", objLotto.strDays, "Drawing Days (Modified): "); //REQ 15: OUTPUT MOD INT ARRAY & REQ 22: OUTPUT MOD PROPERTY
    
    //Jackpot Setting
    objLotto.setElementLabel("jackpotOG", objLotto.intJackpot, "Jackpot(Original): ") //REQ 18: OUTPUT PROPERT VAL TO PAGE
    objLotto.setElement("jackpotMOD", objLotto.calculateJackpot()); 
}

main();