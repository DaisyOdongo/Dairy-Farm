function totalProduction(){
    var shed_A = parseInt(document.getElementById("shedA").value);
    var shed_B = parseInt(document.getElementById("shedB").value);
    var shed_C = parseInt(document.getElementById("shedC").value);
    var shed_D = parseInt(document.getElementById("shedD").value);

    var sum = shed_A+shed_B+shed_C+shed_D;

    document.getElementById('total').value ="\nThe total Production in Shed A is "+shed_A +"litres per day"+"\nThe total Production in Shed B is "+shed_B +"litres per day"+"\nThe total Production in Shed C is "+shed_C +"litres per day"+"\nThe total Production in Shed D is "+shed_D +"litres per day"+"\nThe total Production is "+sum +"litres per day"
}

function incomeOverTime(){
    var sellingPrice =  parseInt(document.getElementById("buyingRate").value);
    var incomeInWeek = sellingPrice*7 //7 days in a week
    var incomeInYear = sellingPrice * 366 //366 days in a leap year

    document.getElementById("total").value = "\nYour weekly income will be Ksh "+incomeInWeek+"\nYour Yearly income will be Ksh "+incomeInYear
}

function monthlyIncome(){
    var sellingPrice =  parseInt(document.getElementById("buyingRate").value);  
}