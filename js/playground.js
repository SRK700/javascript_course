var temp = "hello"
temp = "google"


let temp2 = 100
temp2 = 50

// const temp3 = true
// temp3 = false

// temp4="dog"
const a = 10
const b = 5
let c = 5
c = "abc"
const sum = a + b
// console.log(sum);
// console.log(a + b + c);

 const temp5 = [1, 2, 3, 4, 5,"A"]
// console.log(temp5[3]);
temp5.forEach(item => {
    // console.log(item);
})
const filtertemp = temp5.filter(item => item >= 3)
// console.log("", filtertemp)

const car1 = {
    color: 'red',
    brand: 'Honda',
    model:'accord'
}
car1.color = "blue"
// console.log(car1.color)
 

// temp5.push(6)
// console.log("insert 6 to array",(temp5))

// function sayHello(){
//     console.log("hi");
// }
// const sayHello = (number,name) => {
//     console.log(`Number is: ${ number } by ${name}`);
// }
// const nickname="Golf"
// sayHello(100,nickname)
const fristName = 'nat'
const lastName = "natttt"
const mergeName = (fristName, lastName) => {
    // return fristName+""+lastName step1
    return`${fristName}  ${lastName}`
}

// const fullName = mergeName(fristName, lastName)
// console.log(mergeName(fristName, lastName));

//condition
const number1=40
// if (number1 > 30) {
//     console.log("number1>30")
    
// }

// if (number1 < 30) {
//     console.log("number1<30");
// } else {
//      console.log("number1>30");
// }

// if (number1 < 20) {
//   console.log("number1<20");
// } else if (number1 < 30) {
//   console.log("number1<30");
// } else if (number1 < 40) {
//   console.log("number1<40");
// } else {
//   console.log("number1>40");
// }
// switch (number1) {
//   case 20:
//     console.log("number1=20");
//     break;
//   case 30:
//     console.log("number1=30");
//     break;
//   case 40:
//    console.log("number1=40");
//     break;
//   default:
//     console.log("number1>40");
//     break;
// }

//loop
// const myCars = [
//     "ford rapter",
//     "honda crv",
//     "toyota",
//     "lambogini"
// ]
// for (let index = 0; index < myCars.length; index++) {
//   text += myCars[index] + "<br>";
// }
// for (const iterator of object) {
//     // console.log{item}
// }
let i=0
while (i == 10) {
  console.log( "The number is " + i);
  i++;
}