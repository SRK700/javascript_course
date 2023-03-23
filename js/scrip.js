
const a = document.querySelector('a')
console.log(a[0])
a.setAttribute('href', 'https://www.google.co.th')
a.setAttribute('target', '_blank');

const result = { fristName: "sak", lastName: "panwana" }
const fullName=`${result.fristName} ${result.lastName}`

const p = document.querySelector("p");
p.innerHTML=fullName