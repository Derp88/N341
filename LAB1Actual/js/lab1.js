/*
TITLE: LAB-1 Nines Balls
AUTHOR: Dylan Barkley (DGB)
CREATE DATE: 6 Sep 2023
PURPOSE: Interactivity for a lottery simulator page
LAST MODIFIED ON: 7 Sep 2023
LAST MODIFIED BY: Dylan Barkley (DGB)
MODIFICATION HISTORY:
- Added object with int array (7 Sep 2023)
- Added methods to object (7 Sep 2023)
- Created a main function to execute program through (7 Sep 2023)
*/

var objTime = new Date();

var objLotto = {
    strDay: "Unkown",
    intHour: 0,
    intJackpot: 2000000, //2 Million
    bolDrawing: false,

    strDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    intWinningNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    changeIntWinningNums: function(){
        this.intWinningNums[0] = this.intWinningNums[0] + objTime.getHours();
        this.intWinningNums[1] = this.intWinningNums[1] * objTime.getDay();
        this.intWinningNums[2] = Math.round((objTime.getSeconds()+1) / this.intWinningNums[2]);
        this.intWinningNums[3] = Math.abs(this.intWinningNums[3] - objTime.getMinutes());
        this.intWinningNums[4] = objTime.getFullYear() % this.intWinningNums[4];
        this.intWinningNums[5] = Math.round(Math.random()/Math.random());
        this.intWinningNums[6] = Math.round(Math.random()/Math.random());
        this.intWinningNums[7] = Math.round(Math.random()/Math.random());
        this.intWinningNums[8] = Math.round(Math.random()/Math.random());
    },
    changeStrDays: function(){
        this.strDays[0] = this.strDays[0].toUpperCase();
        this.strDays[1] = this.strDays[1].toLowerCase();
        this.strDays[2] = this.strDays[2].charAt(0);
        this.strDays[3] = this.strDays[3].replace("Wednes", "Hump");
        this.strDays[4] = this.strDays[4].substring(0,5)
        this.strDays[5] = this.strDays[5].toUpperCase();
        this.strDays[6] = this.strDays[6].toLowerCase();
    },
    resetStrDays: function(){
        this.strDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    },
    updateDate: function(){
        this.strDay = this.strDays[objTime.getDay()];
        this.intHour = objTime.getHours();
    },
    calculateJackpot: function(){
        return (this.intJackpot + (objTime.getDay() * 100000));
    },
    setElement: function(elementID, output){
        var elTopBarOutput = document.getElementById(elementID);
        elTopBarOutput.textContent = output;
    },
    setElementAdd: function(elementID, output){
        var elTopBarOutput = document.getElementById(elementID);
        elTopBarOutput.textContent += output;
    }
};


function main(){
    objLotto.setElementAdd("dayItem", objLotto.strDay);
    objLotto.setElementAdd("hourItem", objLotto.intHour);
    objLotto.setElementAdd("drawingItem", objLotto.bolDrawing);
    objLotto.setElementAdd("daysListItem", objLotto.strDays);
    objLotto.updateDate();

    objLotto.setElement("winningNums", objLotto.intWinningNums)
    objLotto.changeIntWinningNums();
    objLotto.setElement("winningNums", objLotto.intWinningNums)

    objLotto.changeStrDays();
    objLotto.setElement("daysListItem", "Drawing Days: " + objLotto.strDays);

    objLotto.resetStrDays();
    objLotto.setElement("daysListItem", "Drawing Days: " + objLotto.strDays);

    objLotto.setElement("jackpot", objLotto.calculateJackpot());
}

main();