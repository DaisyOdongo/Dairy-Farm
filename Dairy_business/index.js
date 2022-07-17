function totalProduction(){
    var shed_A = parseInt(document.getElementById("shedA").value);
    var shed_B = parseInt(document.getElementById("shedB").value);
    var shed_C = parseInt(document.getElementById("shedC").value);
    var shed_D = parseInt(document.getElementById("shedD").value);

    var sum = shed_A+shed_B+shed_C+shed_D;

    document.getElementById('total').value ="\nThe total Production in Shed A is "+shed_A +"litres per day"+"\nThe total Production in Shed B is "+shed_B +"litres per day"+"\nThe total Production in Shed C is "+shed_C +"litres per day"+"\nThe total Production in Shed D is "+shed_D +"litres per day"+"\nThe total Production is "+sum +"litres per day";
}

function incomeOverTime(){
    var sellingPrice =  parseInt(document.getElementById("buyingRate").value);
    var incomeInWeek = sellingPrice*7 //7 days in a week
    var incomeInYear = sellingPrice * 366 //366 days in a leap year

    document.getElementById("total").value = "\nYour weekly income will be Ksh "+incomeInWeek+"\nYour Yearly income will be Ksh "+incomeInYear;
}

function monthlyIncome(){
    var sellingPrice =  parseInt(document.getElementById("buyingRate").value);  
    var incomeJan = sellingPrice * 31;
    var incomeFeb = sellingPrice * 29;
    var incomeMarch = sellingPrice * 31;
    var incomeApril = sellingPrice * 30;
    var incomeMay = sellingPrice * 31;
    var incomeJune = sellingPrice * 30;
    var incomeJuly = sellingPrice * 31;
    var incomeAugust = sellingPrice * 30;
    var incomeSep = sellingPrice * 31;
    var incomeOct = sellingPrice * 30;
    var incomeNov = sellingPrice * 31;
    var incomeDec = sellingPrice * 30;

    document.getElementById("total").value = "\nYour January income is: "+incomeJan;
    document.getElementById("total").value = "\nYour February income is: "+incomeFeb;
    document.getElementById("total").value = "\nYour March income is: "+incomeMarch;
    document.getElementById("total").value = "\nYour April income is: "+incomeApril;
    document.getElementById("total").value = "\nYour May income is: "+incomeMay;
    document.getElementById("total").value = "\nYour June income is: "+incomeJune;
    document.getElementById("total").value = "\nYour July income is: "+incomeJuly;
    document.getElementById("total").value = "\nYour August income is: "+incomeAugust;
    document.getElementById("total").value = "\nYour September income is: "+incomeSep;
    document.getElementById("total").value = "\nYour October income is: "+incomeOct;
    document.getElementById("total").value = "\nYour November income is: "+incomeNov;
    document.getElementById("total").value = "\nYour December income is: "+incomeDec;
}