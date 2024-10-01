let a= document.getElementById("a");
let b= document.getElementById("b");
let buttonSumar= document.getElementById("buttonSumar");
let c= document.getElementById("c");

buttonSumar.addEventListener("click",(ev)=>{
    let num1= Number(a.value);
    let num2= Number(b.value);
    alert(num1+num2);
    c.value=num1+num2;
});
