'use strict';

let allEmployees=[];

let formElement = document.getElementById("form")
function Employee( fullName, department, level, imageURl){
    this.employeeId=0;
    this.fullName=fullName;
    this.salary=1;
    this.department=department;
    this.level=level;
    this.imageURl=imageURl;
    allEmployees.push(this);
    

    
}; 


Employee.prototype.claculateSalary=function(){
    let max;
    let min;
    let salary = 1;
    if (this.level == "senior") {
        max = 2000;
        min = 1500;
        salary = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = salary - (salary * .075);
    }
    else if (this.level == "mid-senior") {
        max = 1500;
        min = 1000;
        salary = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = salary - (salary * .075);
    }
    else {
        max = 1000;
        min = 500;
        salary = Math.floor(Math.random() * (max - min + 1) + min);
        this.salary = salary - (salary * .075);
    }
    }
    Employee.prototype.generanteEmpId=function(){
        const randomId=Math.floor(Math.random() * (1024 - 1000 + 1)+1000);
        this.employeeId=randomId;
    }
    
Employee.prototype.renderEmployee = function(){
    
    const card = document.createElement('div');
    card.className = 'card';

    const icon = document.createElement('div');
    icon.className = 'icon';
    

    const img = document.createElement('img');
    img.src = this.imageURl;
    img.style.borderRadius="30px";
    icon.appendChild(img);
    card.appendChild(icon);

    const info = document.createElement('div');
    info.className = 'info';

    const id = document.createElement('h3');
    id.textContent = `ID: ${this.employeeId}`;
    info.appendChild(id);

    const fullName = document.createElement('h4');
    fullName.textContent = `Name: ${this.fullName}`;
    info.appendChild(fullName);

    const department = document.createElement('p');
    department.textContent = `Department: ${this.department}`;
    info.appendChild(department);

    const level = document.createElement('p');
    level.textContent = `Level: ${this.level}`;
    info.appendChild(level);

    const salary = document.createElement('p');
    salary.textContent = `Salary: ${this.salary}`;
    info.appendChild(salary);

    card.appendChild(info);

    const employeesSection = document.getElementById('employees');
    employeesSection.appendChild(card);
    
}

function saveEmp(employees){
    let strArr=JSON.stringify(employees);
   localStorage.setItem("employees",strArr);
   
}

function getData(){
    let retriveData=localStorage.getItem("employees");
   let objArr=JSON.parse(retriveData);
   for(let i=0;i<objArr.length;i++){

    new Employee(objArr[i].fullName,objArr[i].department,objArr[i].level,objArr[i].image);


   }
   renderAll();
}




function renderAll(){
    for(let i=0;i<allEmployees.length;i++){
        allEmployees[i].generanteEmpId();
        allEmployees[i].claculateSalary();
        allEmployees[i].renderEmployee();
    }
}

 formElement.addEventListener("submit", submitHandler);
 formElement.addEventListener("submit", messageEvent);

function submitHandler(event){
    event.preventDefault();
    
    let fullName=event.target.Fname.value;
    let department=event.target.departmment.value;
    let level =event.target.level.value;
    let image=event.target.img.value;
    let newEmployee=new Employee(fullName,department,level,image);
    this.salary=newEmployee.claculateSalary();
    this.employeeId=newEmployee.generanteEmpId();
    newEmployee.renderEmployee();
    saveEmp(allEmployees);

}
function messageEvent(event){
    let fullName=document.getElementById("Fname");
    alert(` Hello ${fullName.value} You are Added Successfully`);
}
getData();




