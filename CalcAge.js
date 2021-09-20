var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("What is you're Age?"));
     
     floatDays = parseFloat(floatAge*365.25); //Times age with number of days 
     floatMonths = parseFloat(floatAge*12); //times age with number of months 
     intWeeks = parseFloat(floatAge/7); // divide age with number of weeks
     intFortnights = parseFloat(floatAge/14); // divide age with number of fortnights  

     alert("you're age in = " + floatAge.toFixed(2));
     alert("you're age in = " + floatDays.toFixed(2));
     alert("you're age in = " + floatMonths.toFixed(2));
     alert("you're age in = " + intWeeks.toFixed(2));
     alert("you're age in = " + intFortnights.toFixed(2));
        
