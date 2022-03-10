const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter date in MM/DD/YYYY format:", function(date) {
  console.log(`Difference in years between input date and today is ${ageCalc(date)}`);
  rl.close();
});


function ageCalc(date) {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
    
    const today =  new Date()
    const newDate = new Date(date)
    return Math.floor((today - newDate)/MS_PER_YEAR);
}


