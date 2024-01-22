'use strict';


function Employee(employeeId, fullName, department, level, imageURl, salary){

    this.employeeId=employeeId;
    this.fullName=fullName;
    this.salary=salary;
    this.department=department;
    this.level=level;
    this.imageURl=imageURl;
    
}; 
Employee.prototype.claculateSalary=function(){
    const levelSalary = {
        Senior: [1500, 2000],
        "Mid-Senior": [1000, 1500],
        Junior: [500, 1000],
     };
    
     const randomSalary = Math.floor(Math.random() * (levelSalary[this.level][1] - levelSalary[this.level][0] + 1) +levelSalary[this.level][0]);

     const netSalary = randomSalary - (randomSalary * 0.075);
    
     this.salary = netSalary;
    };


Employee.prototype.renderEmployee = function(){

    document.writeln(`<h3>Employee Name : <br> ${this.fullName}\n</h3><h3>Salary : ${this.salary}</h3>`);
}


let emp1 =new Employee("1000",  "Ghazi Samer","Administration","Mid-Senior","images/Ghazi.jpg",0);
let emp2 =new Employee("1001",  "Lana Ali","Finance","Senior","images/Lana.jpg",0);
let emp3 =new Employee("1002",  "Tamara Ayoub","Marketing","Senior","images/Tamara.jpg",0);
let emp4 =new Employee("1003",  "Safi Walid	","Administration","Mid-Senior","images/Safi.jpg",0);
let emp5 =new Employee("1004",  "Omar Zaid	","Development	","Senior","images/Omar.jpg",0);
let emp6 =new Employee("1005",  "Rana Saleh	","Development","Junior","images/Rana.jpg",0);
let emp7 =new Employee("1006",  "Hadi Ahmad	","Finance","Mid-Senior","images/Hadi.jpg",0);
const employees = [emp1,emp2,emp3,emp4,emp5,emp6,emp7];

for(let i=0;i<employees.length;i++){
    employees[i].claculateSalary();
    employees[i].renderEmployee();
}

