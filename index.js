const readline = require('readline');
const convert = require('./convert')
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const promptUser = () => {
rl.question('Enter amount (INR): ', (input) => {
if (input.toLowerCase() === 'exit') {
console.log("Goodbye!");
rl.close();
return;
}
const inr = parseFloat(input);
try {
const usd = convert(inr);
console.log(`INR ${inr} = USD ${usd}\n`);
}catch(e){
console.log(e);
}
promptUser();
});
};
promptUser();