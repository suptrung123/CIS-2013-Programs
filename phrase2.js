var $ = function (id) 
{
    return document.getElementById(id);
}

var vowels = function () 
{
var stringEntry = $("phrase").value; 

stringEntry = stringEntry.toUpperCase(); 

if(stringEntry === "")
{
    alert("Please entry a phrase and then select the button"); 
}
else 
{
    var intVowels = 0; 
    for(var intcount = 0; intcount < stringEntry.length; intcount++)
    {
        if(stringEntry.charAt(intcount) === "A" || stringEntry.charAt(intcount) === "E" || stringEntry.charAt(intcount) === "I" || stringEntry.charAt(intcount) === "O" || stringEntry.charAt(intcount) === "U")
        {
            intVowels++; 
        }
    }
    $("output").value = "There are " + intVowels + "vowels in the above phrase."; 
}

}


var consonants = function () 
{
    var stringEntry = $("phrase").value; 

    stringEntry = stringEntry.toLowerCase(); 

if (stringEntry === "")
{
    alert("Please entry a phrase and then select the button"); 
}
else 
{
    var intConsonants = 0; 
    for(var intcount = 0; intcount < stringEntry.length; intcount++)
    {
        switch (stringEntry.charAt(intcount))
        {
            case "a":
            case "e":
            case "i": 
            case "o":
            case "u": 
                break;
            default:
                intConsonants++;
                break; 

        }
    }
    $("output").value = "There are " + intConsonants + "Consonants in the above phrase."; 
}


}



var reverse = function () 
{
    var stringEntry = $("phrase").value; 
    
    if(stringEntry ==="")
    {
        alert("Please entry a phrase and then select the button"); 
    }
    else 
    {
        var stringReversed = ""; 
        for(var intcount = stringEntry.length - 1; intcount >= 0; intcount--)
        {
            stringReversed = stringReversed + stringEntry.charAt(intcount); 
        }
        $("output").value = "The Reverse of the above phrase is: \n" + stringReversed; 
    }
    
}



var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}

window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked        
}  