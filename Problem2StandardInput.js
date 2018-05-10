var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var caseCount= 0;

rl.on('line', function(line){
    var newArray= line;
    if(line.length !== 1){
        caseCount= caseCount + 1;
        if(troubleSort(newArray) == 0){
            console.log("Case #" + caseCount + ": OK");
        }
        else{
            console.log("Case #" + caseCount + ": " + troubleSort(newArray));
        }
    }   
})

function troubleSort(L){
	var inputA= L.split(" ");
	var itCheck= 0;
	var flipCheck= 1;
	var index= 0;
    var holder=0;
	while(itCheck== 0){
		itCheck= 1;
		for(var i=0; i <= inputA.length - 2; i++){
			if(inputA[i]>inputA[i+2]){
                holder= inputA[i];
				inputA[i] = inputA[i+2];
                inputA[i+2] = holder;
				flipCheck = 1;
				itCheck= 0;
			}
		}
	}
    
	for(var j=0; j <= inputA.length - 2; j++){
		if(inputA[j]>inputA[j+1]){
			index= j;
			j= inputA.length;
		}
	}
	return index;
}