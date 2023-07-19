//your JS code here. If required
let name = prompt("Enter a string")
const freq = [];
for(let i=0; i < name.length;i++){
	
	const char = name[i];	
	// console.log(char)
	freq[char] = (freq[char]||0)+1;
}
// console.log(freq);

for(let i=0;i<name.length;i++){
	const char = name[i];
	if(freq[char]==1){
		alert(char);
	}
}

