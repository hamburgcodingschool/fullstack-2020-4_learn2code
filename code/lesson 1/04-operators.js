console.log('Hello, World!');

// Operators

// Asignment Operator
carMaxSpeed0 = 150;

// Mathematical Operators
// sum +
carMaxSpeed1 = carMaxSpeed0 + 10;
console.log("The max car speed is " + carMaxSpeed1);

// These two lines before achieve the same: 
console.log("The max car speed is " + carMaxSpeed1 + "10");
console.log("The max car speed is " + carMaxSpeed1 + 10);

// division - 
carTotalPrice = 13000
discount = 1200
finalPrice = carTotalPrice - discount
console.log("The final price is: " + finalPrice)

// multiplication *
wheelCost = 150
wheelCount = 4
totalWheelCost = wheelCost * wheelCount
console.log("The total cost for wheels is: " + totalWheelCost)


// E5
// division /
// a = 4 / 2
// 5 Friends are travelling to Berlin. The total cost of gas is 189 EUR. How much does each of them have to pay the driver?

// data type: number
totalGasCost = 189
// data type: number
friends = 5
// data type: number
pay = totalGasCost / friends

// One friend falls sick (not corona) and he cannot go to Berlin anymore. only 4 people are travelling now.How much does each have to pay? Change only one line of code:
// pay = totalGasCost / friends

pay = totalGasCost / (friends - 1)

console.log("Pay with 4 friends" + pay)

// data type: text
pay2 = totalGasCost / friends + " EUR"
console.log("Pay for each person:" + pay + " EUR")
console.log("Pay for each person:" + pay2)

newPay = pay+10
// newPay = 37.8 + 10 = 47.8

newPay2 = pay2+10
// newPay2 = "37.8 EUR" + "10" = "37.8 EUR10"

console.log("New Pay Number: " + newPay)
console.log("New Pay2 Text: " + newPay2)



// mathematical operators
// + - /          
// multiplication *
// modulo %

year = 20;
rest4 = (year % 4);
rest3 = (year % 3);

// 20 = 3 * 6 + 2
// 20 = 4 * 5 + 0
// 23 = 4 * 5 + 3

console.log("Remainder 20 % 4: " + rest4);
console.log("Remainder 20 % 3: " + rest3);