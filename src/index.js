
;module.exports = function multiply(first, second) {
a = first.split('').reverse(); 
b = second.split('').reverse(); 
var result = [];

for (var i = 0; a[i] >= 0; i++) { 
for (var j = 0; b[j] >= 0; j++) { 
	if (!result[i+j]) {result[i+j] = 0;}
result[i + j] += a[i] * b[j]; 
} 
} 


for (var i = 0; result[i] >= 0; i++){
	if (!result[i+1]) break;
result[i + 1] += Math.floor(result[i] / 10); 
result[i] %= 10; 
}


var abs = result.reverse().join('');
return  abs	; 
}