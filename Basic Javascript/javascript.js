// variable declaration
// const name ="";
// let id =1;

// Arrow Function

/*
function getEmployeeName(){

 }
*/

const f_name = ()=>{
    console.log("hello world");
}
console.log(f_name());

// Spread Operator
const num1 = [1,2,3];
const num2 = [4,5,6,...num1];
console.log(num2);

const emp1 ={
    name : "uttam",
    id:1,
}
const emp2 ={...emp1}
console.log(emp2);

// Multiline String/ Template String
const one = "one"
const statement = `This is the 
simple statement ${one}`
console.log(statement);

//Destructuring

// Object
const employee ={
    name:"uttam",
    phone:"99999999",
    id:1234,
    age:21,
    address:"pune",
}
const employee1={
    name:"ABC",
}

const {address,name,id,age} = employee;
const {name :empName}=employee1
console.log(address);
console.log(empName);

//Array
const emp = ["uttam",1,"pune"];

const [val1,val2] = emp;

console.log(val1);

// Rest Operator
const getEmp = (id,name,...rest) => {
    //Type of rest is array
    if(rest.length>0){
        for(let i=0;i<=rest.length;i++){
            console.log(rest[i]);
        }
    }
}
getEmp(123,"name",24,"address");

//default Parameter

const setEmployeID = (id =0) => {
    console.log("id => "+id) //0
}

setEmployeID();

 //async/await

 const getEmployeeData = async () =>{
    const response = await getEmployeeDataAPi();
    console.log("response", response)
 }

 // try/catch

 try{
    //safe Statements
 }catch(e){
    // handling error
 }finally{
    //this will also execute
 }

 //import/export

 //class

 class Employee{
    constructor(){
        console.log("This is constructor");
    }
    getEmployee(){
        return "Employee";
    }
 }

 const emp123 = new Employee();
 console.log(emp123.getEmployee());
