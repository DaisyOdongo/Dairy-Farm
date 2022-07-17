function totalProduction(){
    var shed_A = parseInt(document.getElementById("shedA").value);
    var shed_B = parseInt(document.getElementById("shedB").value);
    var shed_C = parseInt(document.getElementById("shedC").value);
    var shed_D = parseInt(document.getElementById("shedD").value);

    var sum = shed_A+shed_B+shed_C+shed_D;

    document.getElementById('total').value ="\nThe total Production in Shed A is "+shed_A +"litres per day"+"\nThe total Production in Shed B is "+shed_B +"litres per day"+"\nThe total Production in Shed C is "+shed_C +"litres per day"+"\nThe total Production in Shed D is "+shed_D +"litres per day"+"\nThe total Production is "+sum +"litres per day";
}

function incomeOverTime(){
    var shed_A = parseInt(document.getElementById("shedA").value);
    var shed_B = parseInt(document.getElementById("shedB").value);
    var shed_C = parseInt(document.getElementById("shedC").value);
    var shed_D = parseInt(document.getElementById("shedD").value);
    var totalLitres = shed_A+shed_B+shed_C+shed_D;

    var sellingPrice =  parseInt(document.getElementById("buyingRate").value);
    var incomeInWeek = sellingPrice* totalLitres*7; //7 days in a week
    var incomeInYear = sellingPrice *totalLitres* 366; //366 days in a leap year

    document.getElementById("total").value = "\nYour weekly income will be Ksh "+incomeInWeek+"\nYour Yearly income will be Ksh "+incomeInYear;
}

function monthlyIncome(){
    var shed_A = parseInt(document.getElementById("shedA").value);
    var shed_B = parseInt(document.getElementById("shedB").value);
    var shed_C = parseInt(document.getElementById("shedC").value);
    var shed_D = parseInt(document.getElementById("shedD").value);
    var totalLtrs = shed_A+shed_B+shed_C+shed_D;
    var sellingPrice = parseInt(document.getElementById("buyingRate").value);  
    var incomeJan = sellingPrice * totalLtrs*31;
    var incomeFeb = sellingPrice *totalLtrs* 29;
    var incomeMarch = sellingPrice *totalLtrs* 31;
    var incomeApril = sellingPrice *totalLtrs* 30;
    var incomeMay = sellingPrice *totalLtrs* 31;
    var incomeJune = sellingPrice *totalLtrs* 30;
    var incomeJuly = sellingPrice *totalLtrs* 31;
    var incomeAugust = sellingPrice * 31;
    var incomeSep = sellingPrice *totalLtrs* 30;
    var incomeOct = sellingPrice *totalLtrs* 31;
    var incomeNov = sellingPrice *totalLtrs* 30;
    var incomeDec = sellingPrice *totalLtrs* 31;

 
    document.getElementById("total").value = "\nYour January income is: "+incomeJan+ "\nYour February income is: "+incomeFeb+ "\nYour March income is: "+incomeMarch+ "\nYour April income is: "+incomeApril+ "\nYour May income is: "+incomeMay+ "\nYour June income is: "+incomeJune+ "\nYour July income is: "+incomeJuly+ "\nYour August income is: "+incomeAugust+ "\nYour September income is: "+incomeSep+ "\nYour October income is: "+incomeOct+ "\nYour November income is: "+incomeNov+ "\nYour December income is: "+incomeDec;
}