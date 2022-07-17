function totalProduction(){
    var shed_A = parseInt(document.getElementById(shedA).value);
    var shed_B = parseInt(document.getElementById(shedB).value);
    var shed_C = parseInt(document.getElementById(shedC).value);
    var shed_D = parseInt(document.getElementById(shedD).value);

    var sum = shed_A+shed_B+shed_C+shed_D;

    document.getElementById('total').value ="The total Production in Shed A is "+shed_A +"litres per day"+"The total Production in Shed B is "+shed_B +"litres per day"+"The total Production in Shed C is "+shed_C +"litres per day"+"The total Production in Shed D is "+shed_D +"litres per day"+"The total Production is "+sum +"litres per day"
}