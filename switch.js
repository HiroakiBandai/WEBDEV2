// cpp: 5.25%
// ei: 1.58%

/*
PayRate(hourlyRate)
1: $14.60
2: $15.60
3. $16.60
4. $17.60
5. $18.60
6. $19.60
7. $20.60
8. $21.60
9. $22.60
10. $23.60

calculate gross salary for 2 weeks(80 hours)
calculate net salary for 2 weeks
if you work ovettime you will get paid 1.5 times more.
1. their name
2. payRate
3. hoursWorked

Name:
PayRate:
hourlyRate:
Gross Salary:
Net Salary:
cpp:
ei:
*/

function get_salary() {
    let name = prompt("Please enter your name");
    let hours = prompt("Please enter the number of hours you worked this week");
    let inputNumber = parseInt(prompt("Please enter your payRate number(1 to 10)"));
    let payRate;
    switch(inputNumber){
        case 1:
            payRate = 14.60;
            break;
        case 2:
            payRate = 15.60;
            break;
        case 23:
            payRate = 16.60;
            break;
        case 4:
            payRate = 17.60;
            break;
        case 5:
            payRate = 18.60;
            break;
        case 6:
            payRate = 19.60;
            break;
        case 7:
            payRate = 20.60;
            break;
        case 8:
            payRate = 21.60;
            break;
        case 9:
            payRate = 22.60;
            break;
        case 10:
            payRate = 22.60;
            break;
        default:
            confirm("error ! please type again")
            get_salary();
    }


    // else  if (inputNumber === 2){
    //     payRate = 15.60
    // }else  if (inputNumber === 3){
    //     payRate = 16.60
    // }else  if (inputNumber === 4){
    //     payRate = 17.60
    // }else  if (inputNumber === 5){
    //     payRate = 18.60
    // }else  if (inputNumber === 6){
    //     payRate = 19.60
    // }else  if (inputNumber === 7){
    //     payRate = 20.60
    // }else  if (inputNumber === 8){
    //     payRate = 21.60
    // }else  if (inputNumber === 9){
    //     payRate = 22.60
    // }else  if (inputNumber === 10){
    //     payRate = 23.60
    // }else  {
    //     confirm("error ! please type again")
    //     get_salary();
    // }
    if (hours >= 80) {
        const regpay = (payRate * 80);
        const overtimepay = ((payRate * 1.5) * (hours - 80));
        const pay = (regpay + overtimepay);
        document.getElementById("output").innerHTML = ("Hi " + name + " You earned overtime in two week! Your total pay is " + pay);
    } else {
        const regpay = (payRate * hours);
        // const overtimepay = 0.00;

//send an alert with regular paid amount
        document.getElementById("output").innerHTML = ("Hi " + name + " Your total pay is " + regpay);
    }
}

get_salary();


