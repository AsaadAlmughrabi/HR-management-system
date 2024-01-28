'use strict';
let retriveData=localStorage.getItem("employees");
let objArr=JSON.parse(retriveData);
let tableElment = document.getElementById("table");
let administrationArr=[];
let marketingArr=[];
let developmentArr=[];
let financeArr=[];


    function renderTable() {
        let trEle =document.createElement("tr");
        tableElment.appendChild(trEle);
      
        let tdEle1 = document.createElement("td");
        tdEle1.textContent= "Administration";
        trEle.appendChild(tdEle1);
        
      //number

        let tdEleNum = document.createElement("td");
        tdEleNum.textContent= administrationArr.length;
        trEle.appendChild(tdEleNum);
        //salary
        let tdEleSal = document.createElement("td");
        tdEleSal.textContent= totalSalary(administrationArr);
        trEle.appendChild(tdEleSal);
        
      //avg
      let tdEleAvg = document.createElement("td");
      tdEleAvg.textContent= avgSalary(administrationArr);
      trEle.appendChild(tdEleAvg);
      

      
        let trEle2 = document.createElement("tr");
        tableElment.appendChild(trEle2);

        let tdEle2 = document.createElement("td");
        tdEle2.textContent= "Markiting";
        trEle2.appendChild(tdEle2);


        //number
        let tdEleNum1= document.createElement("td");
        tdEleNum1.textContent= marketingArr.length;
        trEle2.appendChild(tdEleNum1);

        //salary
        let tdEleSal1 = document.createElement("td");
        tdEleSal1.textContent= totalSalary(marketingArr);
        trEle2.appendChild(tdEleSal1);

        //avg

        let tdEleAvg1 = document.createElement("td");
        tdEleAvg1.textContent= avgSalary(marketingArr);
        trEle2.appendChild(tdEleAvg1);
        

        let trEle3 = document.createElement("tr");
        tableElment.appendChild(trEle3);

        let tdEle3 = document.createElement("td");
        tdEle3.textContent= "Devlopment";
        trEle3.appendChild(tdEle3);
        
        //number
        let tdEleNum2= document.createElement("td");
        tdEleNum2.textContent= developmentArr.length;
        trEle3.appendChild(tdEleNum2);

        //salary
        let tdEleSal2 = document.createElement("td");
        tdEleSal2.textContent= totalSalary(developmentArr);
        trEle3.appendChild(tdEleSal2);

        //avg
        let tdEleAvg2= document.createElement("td");
        tdEleAvg2.textContent= avgSalary(developmentArr);
        trEle3.appendChild(tdEleAvg2);
        


        let trEle4=document.createElement("tr");
        tableElment.appendChild(trEle4);
        
        let tdEle4=document.createElement("td");
        tdEle4.textContent="Finance";
        trEle4.appendChild(tdEle4);

        //number
        let tdEleNum3= document.createElement("td");
        tdEleNum3.textContent= financeArr.length;
        trEle4.appendChild(tdEleNum3);
        //salary
        let tdEleSal3 = document.createElement("td");
        tdEleSal3.textContent= totalSalary(financeArr);
        trEle4.appendChild(tdEleSal3);
        //avg
        let tdEleAvg3 = document.createElement("td");
        tdEleAvg3.textContent= avgSalary(financeArr);
        trEle4.appendChild(tdEleAvg3);
        

        
        let trEle5 =document.createElement("tr")
        tableElment.appendChild(trEle5);


        let tdEle5=document.createElement("td");
        tdEle5.textContent=" Total";
        trEle5.appendChild(tdEle5);


        //total emp  total salary total avg
        let tdEleNum4= document.createElement("td");
        tdEleNum4.textContent= objArr.length;
        trEle5.appendChild(tdEleNum4);

        let total=totalSalary(administrationArr)+totalSalary(marketingArr)+totalSalary(developmentArr)+totalSalary(financeArr);


        let tdEleSal4=document.createElement("td")
        tdEleSal4.textContent=total;
        trEle5.appendChild(tdEleSal4)


        let tdEleAvg4 = document.createElement("td");
        tdEleAvg4.textContent = total / objArr.length;
        trEle5.appendChild(tdEleAvg4);


    }
    seperateEmployees();
    
    renderTable();
   
    // to count number of employees
function seperateEmployees(){
     console.log(objArr);
     for(let i=0;i<objArr.length;i++){
        if (objArr[i].department === 'administration') {
            administrationArr.push(objArr[i].salary);
          } else if (objArr[i].department === 'marketing') {
            marketingArr.push(objArr[i].salary)
          } else if (objArr[i].department === 'development') {
            developmentArr.push(objArr[i].salary);
          } else if (objArr[i].department === 'finance') {
            financeArr.push(objArr[i].salary)
          } else {
            console.log(`Unknown department`);
          }
         
}
}

function totalSalary(arr){
    let sum=0;
for(let i=0;i<arr.length;i++){
 sum+=arr[i]
}
return sum;
}




function avgSalary(arr){

let avg=totalSalary(arr) /arr.length;

return avg;

}










