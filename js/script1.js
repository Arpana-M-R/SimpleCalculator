function getCalculations(){
return document.getElementById("calculations-values").innerText;
}


function printCalculations(num){
     document.getElementById("calculations-values").innerText=num;
    }
    function getOutput(){
        return document.getElementById("output-values").innerText;
        }
function printOutput(num){
    if(num==""){
        document.getElementById("output-values").innerText=num;
    }
    else{
        document.getElementById("output-values").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}



function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printCalculations("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var calculations=getCalculations();
			if(output==""&&calculations!=""){
				if(isNaN(calculations[calculations.length-1])){
					calculations= calculations.substr(0,calculations.length-1);
				}
			}
			if(output!="" || calculations!=""){
				output= output==""?output:reverseNumberFormat(output);
				calculations=calculations+output;
				if(this.id=="="){
					var result=eval(calculations);
					printOutput(result);
					printCalculations("");
				}
				else{
					calculations=calculations+this.id;
					printCalculations(calculations);
					printOutput("");
				}
			}
		}
		
	});
}

var digit= document.getElementsByClassName("digit");
for(var i=0;i<digit.length;i++){
    digit[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}