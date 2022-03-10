const date = prompt("Enter date in form MM/DD/YYYY")
console.log(`Difference in years between today and input is ${ageCalc(date)}`)

function ageCalc(date) {
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
    
    const today =  new Date()
    const newDate = new Date(date)
    return Math.floor((today - newDate)/MS_PER_YEAR);
}


