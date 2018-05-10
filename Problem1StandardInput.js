var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var caseCount= 0;

rl.on('line', function(line){
    var newArray= line.split(" ");
    if(caseCount !== 0){
        Solution(newArray[1], newArray[0], caseCount);
    }
    caseCount= caseCount + 1;
    
})

function Solution(A, B, C){
    var attack= A;
    var shield= B;
    var count= C;
    var switchTimes= dontBreakShield(shield, attack);
    if(switchTimes == "IMPOSSIBLE"){
        console.log("Case "+"#"+count+": IMPOSSIBLE");
    }
    else{
        console.log("Case "+"#"+count+": "+ switchTimes);
    }
}

function dontBreakShield(D, P){
	var maxDmg = D;
	var atkCombi = P;
	var damage= checkDmg(atkCombi);
	var switchCounter = 0;
	var iterationCount = 0;
    var damArray = atkCombi.split("");
	var impossible = 0;
    var check= 0;
	while((damage > maxDmg) && (impossible == 0)){
		for(var k = 0; k <= damArray.length; k++){
			if((damArray[k] == 'C')&&(damArray[k+1] == 'S')){
				damArray[k] = 'S';
				damArray[k+1]= 'C';
				k= damArray.length;
				switchCounter= switchCounter + 1;
				damage= checkDmg(damArray);
			}

		}
        
        check= checkArray(damArray);
        if(check== 1){
            impossible = 1;
        }
	}
    if(damage > maxDmg){
        return "IMPOSSIBLE";
    }
    else
        return switchCounter;
    


}

function checkArray(array){
    var index= 1;
    for(var j = 0; j <= array.length; j++){
        if((array[j] == 'C')&&(array[j+1] == 'S')){
            index =0;
        }
    }
    return index;
}

function checkDmg(atkCombination){
	
	var dmgCounter = 1;
	var currentDmg= 0;
	
	for(var i = 0; i < atkCombination.length; i++){
		if(atkCombination[i] === 'S'){
			currentDmg= currentDmg + dmgCounter;
		}
		if(atkCombination[i] === 'C'){
			dmgCounter= dmgCounter*2;
		}
	}	
	return currentDmg;
}