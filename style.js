//Functions and Parameters//
1
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome(); // Welcome to Javascript//
2
function studentdetails(name, age, cgpa){
    console.log("Name: "+ name);
    console.log("Age: "+age);
    console.log("CGPA: "+cgpa);
}
studentdetails("Selvi", 20, 7);
studentdetails("Ravi", 34, 8);
//Name: Selvi    Name: Ravi//
//Age: 20        Age: 34//
//CGPA: 8        CGPA: 8//
3
function calculateFee(fee){
    return fee;
}
let storedFee= calculateFee(40000);
console.log("Calculated Fee: RS " + storedFee); 
//Calculated Fee: RS 40000//
4
function discount(percent){
    let originalFee = 200000;
    let discountAmount = (originalFee * percent)/ 100;
    let finalFee = originalFee - discountAmount;
    console.log("Fee after: " + percent + "discount: " + discountAmount + " " + finalFee);
}
discount(15);//Fee ater: 15 discount: 30000 170000//
5
function studentForm1(name1, age1, disability="No"){
    console.log("Name1: " + name1);
    console.log("Age1: " + age1);
    console.log("Disability: " + disability);
}
studentForm1("Meena", 19, "Yes");
studentForm1("Nishanth", 20, "No");
studentForm1("Guhan", 21);
//Name1: Meena     Name1: Nishanth  Name1: Guhan
//Age1: 19         Age1: 20         Age1: 21
//Disability: Yes  Disability: No   Disability: No//
//Function Types And Scope//
6
function displayMessage(message){
    console.log("Named Function Message: ", message);
}
    displayMessage("WElcome to Java Programming"); //Named Function Message: Welcome to Java Programming//
7
let printname2 = function(name2){                
console.log("Anonymous Function Name: ", name2);
}
printname2("Martine");// Anonymous Function Name: Martine//
8
let printNumber = (num) =>{
    console.log("Arrow Function Number: ", num);
}
printNumber(32); // Arrow Fuction Number: 32//
9
function testScope(){
    if(true){
        var a = "var variable";
        let b = "let variable";
        const c = "const variable";
    
        console.log("---Inside Block--");
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log("\n---Outside Block---");
    console.log(a);
    try{
        console.log(b);
    }catch(e){
            console.log("b is NOT accessible (let is block-scoped)");

        }
        try{
            console.log(c);
        }catch(e){
            console.log("c is NOT accessible (const is block-scoped)");

        }
    }
testScope();
// ---Inside Block---
//var variable
//let variable
//const variable
//---Outside Block---
//var variable
//b is Not accessible (let is block-scoped)
//c is Not accessible (const is block-scoped)
10
console.log(value);
var value = 10;
//undefined/
//callback and higher-order Functions
11
function second(){
    console.log("Callback function 'second' executed");
}
function first(callback){
    console.log("Inside 'first' function");
    callback();
}
first(second); //callback function 'second' executed//
12
function add(callback, a, b){
    console.log(a +b);
}
add((X, Y) => console.log('callback: ${X}, ${Y}'), 5, 10);//15//
13
function add1(callback, c, d){
    console.log(c + d);
}
const sub = (num1, num2) =>{
    console.log(num1 - num2);
}
add1(sub, 10,10); //20//
14
function multiply(callback, f, g){
    console.log(f * g);
    callback();
}
multiply(() => console.log("callback executed"), 23, 2);
//46 callback is executed//
15
function executeOperation(callback, a, b) {
    callback(a, b);
}
const divide = (num1, num2) => {
    console.log(num1 / num2);
};
executeOperation(divide, 10, 2);//5//
16
const processStudent = (callback, name) => callback(name);
processStudent(name => console.log(`Student name: ${name}`), "Ravi");
//Student name: Ravi//
17
//generator function//
function* getOffer(){
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
}
for(let value of getOffer()){
    console.log(value);
}
//10% cashback //Better luck next time //Better luck next time//
18
function* myGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = myGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//{value: 10, done: false}
//{value: 20, done: false}
//{value: 30, done: false}
19
function* discount() {
        yield "10% Discount on Voucher";
        yield "20% Discount on Book";
        yield "30% Discount on clothing";
        yield "40% Discount on Clearance";
        yield "50% Discount on Electronics";
}
    for (let msg of discount()){
        console.log(msg);
    }
//10% Discount on voucher
//20% Discount on Book
//30% Discount on Clothing
//40% Discount on Clearance
//50% Discount on Electronics
20
function* students() {
    yield "Ravi";
    yield "Priya";
    yield "Rishi";
}
    for (let name of students()) {
        console.log(name);
    }
 //Ravi Priya Rishi//
21
function* myGenerator() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
let gen1 = myGenerator();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
//{value: 10, done: false}
//{value: 20, done: false}
//{value: 30, done: false}
//{value: 40, done: false}
//{value: undefined, done: true}
//currying and uncurring//
22
function add(p, q, r){
    console.log(p+q+r);
}
add(10, 20, 30);//60//
23
function add1(r){
return function(s){
    return function(t){
        console.log(r + s+ t);
    };
};
}
add(20, 10, 20); //50//
24
function add2(j){
return function(i){
    return function(k){
        console.log(j + i+ k);
    };
};
}
add(5, 10, 15); //30//
25
function price(p) {
    return function(d) {
        return function(q) {
            let total = p - (p * d / 100);
            console.log(total * q);
        };
    };
}
price(1000)(10)(2); //1800//
26
function add(d, e, f) {
    return d + e + f;
}
function curryAdd2(d) {
    return function(e) {
        return function(f) {
            return d + e + f;
        };
    };
}
console.log("Normal Function:", add(5, 10, 15));
console.log("Curried Function:", curryAdd2(5)(10)(15));
//Normal Function: 30 Curried Function: 30//

//IIFE, Return and Mixed practice//

27


28
function getNumber1(){
    return 100;
}
let result = getNumber1();
console.log(result);//100//
29
function studentMarks(marks){
    return marks;
}
let result1= studentMarks(85);
console.log(result1);//85//
30
function feeCalculator(fee = 10000, callback) {
    let discount = callback(fee);
    return fee - discount;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

let finalFee = feeCalculator(10000, calculateDiscount);

console.log("Final Fee:", finalFee);//Final Fee: 9000//


(function(productName, discountPercent) {
    console.log(`[IIFE Sale] Special Offer! Get ${discountPercent}% off on our exclusive ${productName}!`);
})("Smartwatch", 25);
//[IIFE Sale] Special offer! Get 25% off on our exclusive smartwatch!