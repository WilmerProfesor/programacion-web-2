
// let cadena="esto es una cadena";
// let cadena2='esto es una cadena';
// let cadena3='esto es "una" cadena';
//  let cadena4="esto es 'una' cadena";

// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// const obj1={key1:"value1", key2:2,key3:true};
// const persona1={nombre:"juan", edad:2,sexo:true};

// for (const key in persona1) {
//     console.log(key+": "+persona1[key]);    
// }

// let arr1=["arreglo",true,3,3.4,"w", cadena4];
// let arr2=["dos","tres","w", cadena4];

// console.log(arr1);
// // let tmp=arr1.join("*");
// console.log(arr1.reverse());


//''''''''''' funciones'''''''''''

// function suma(){  // declara
//     let x=9;
//     let y=19;
//     let z=x+y;
//     console.log(z);    
// }
// suma();  // llamado

// function suma(x, y){   // declarada con parámetros
//     let z=x+y;
//     console.log(z);    
// }

// suma(4,7);

// function suma(x, y){   // declarada con retorno
//     let z=x+y;
//     return z;    
// }

// let x=suma(6,7);
// console.log(x);

// let suma= function (x, y){   // funciones anónimas
//         let z=x+y;
//         return z;    
//     }

// console.log(suma(6,9));


// Función flecha >>>>>>>>>>>>>>>>>>>>>>
// let suma1= m=>m*m;
// let suma2= (m)=>m*m;
// let suma3= (m)=>{return m*m};
// let suma4= (m,n)=>{return m*n};
// let suma5= ()=>{return 2*2};
// let suma6= ()=>2*2;

// let tmp=suma4(5,90);
// console.log(tmp);

// Objetos>>>>>>>>>>>>>>

// const persona1={nombre:"juan", edad:2,sexo:true};
// console.log(persona1.nombre);
// console.log(persona1["nombre"]);

// función constructora>>>>>

// function Persona(nombre, edad,sexo){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.sexo=sexo;
//     this.apellido="algunaJoda";
//     this.metodo=()=>{console.log("Haría algo");
//     }
// }

// const obj1=new Persona("Carlos",18,true);
// // console.log(obj1);
// // obj1.metodo();  // se puede llamar directamente desde el objeto
 
// if("nombre" in persona1){
//     console.log("El nombre existe");
// }

// Obj a partir de Clases >>>>>>>>>

class Persona{
    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    metodo(){
        console.log("Haría algo");
    }
}
const obj1=new Persona("Carlos",18,true);
console.log(obj1);