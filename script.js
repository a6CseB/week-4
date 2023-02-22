//DESTRUCTURING-OBJECTS
let users={
    name:'siri',
    age:20,
    loc:'hyd'
}
let{name,age,loc}=users;
console.log(name,age,loc)
 //classes in js
class h{
     constructor(){
         console.log("inside ConstrUctoR")
     }
     getName(){
         return this.name
     }
 }
 let o2= new h()
console.log(o2)
//ITERATORS
 let arr=[1,2,3,4,5,6,7,8]
 for(let i=0;i<arr.length;i++)
 console.log(arr[i])
 console.log(arr);
//SYMBOLS
 let s1=Symbol("shruthi");
 let s2=Symbol("shruthi");
 console.log(s1==s2)
