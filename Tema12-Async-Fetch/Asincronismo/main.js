const arr=[
    {name:"Freddy", age:20},
    {name:"Angel", age:20},
    {name:"John", age:20},
    {name:"Antony", age:20},
    {name:"Mery", age:20}
]

// setTimeout(() => {
//     const variable=arr;    
// }, 3000);

const variable=arr;    


console.log("Paso 1");
setTimeout(() => {
    console.log("Paso 2",variable);
}, 3000);
console.log("Paso 3");

