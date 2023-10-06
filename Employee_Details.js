let employees = [
    { eid: 1001, name: 'SHIVA', email: 'shiva12@gmail.com', doj: '20-07-23', desg: 'developer', active: 'false', gender: 'Male' },

    { eid: 1002, name: 'JUSTIN', email: 'justin@gmail.com', doj: '24-07-23', desg: 'developer', active: 'false', gender: 'Male' },

    { eid: 1003, name: 'PRERNA', email: 'prerna@gmail.com', doj: '10-03-23', desg: 'Tester', active: 'true', gender: 'Female' },

    { eid: 1004, name: 'ROOHI', email: 'roohi34@gmail.com', doj: '15-01-22', desg: 'developer', active: 'true', gender: 'Female' },

    { eid: 1005, name: 'PINKY', email: 'pinky34@gmail.com', doj: '15-09-23', desg: 'Tester', active: 'false', gender: 'Female' },

    { eid: 1006, name: 'Pratik', email: 'pratik54@gmail.com', doj: '25-03-23', desg: 'Q&A', active: 'false', gender: 'Male' },

    { eid: 1007, name: 'Tanuja', email: 'tanuja4@gmail.com', doj: '25-03-23', desg: 'developer', active: 'true', gender: 'Female' }
]

function arrayIterating(callback){
    let str = '';
    for (let i = 0; i < callback.length; i++) {
        str += `<tr>`;
        str += `<td>${callback[i].eid}</td>`
        str += `<td>${callback[i].name}</td>`
        str += `<td>${callback[i].email}</td>`
        str += `<td>${callback[i].doj}</td>`
        str += `<td>${callback[i].desg}</td>`
        str += `<td>${callback[i].active}</td>`
        str += `<td>${callback[i].gender}</td>`
        str += `</tr>`
    } 
    return str;
}

let newArray = employees.filter((ele, index) => {
    if (employees[index].gender == 'Female') {
        return employees[index];
    }
})

let newArrayTwo = employees.filter((ele, index) => {
    if (employees[index].gender == 'Male') {
        return employees[index];
    }
})
let display_emp = document.getElementById('display_emp');

function female() {
    let female_emp = document.getElementById('female_emp');


let str = arrayIterating(newArray);

    female_emp.addEventListener('click', function () {
        display_emp.innerHTML = str;
    })

}
female();

function male(){
    let male_emp = document.getElementById('male_emp');

    let str = arrayIterating(newArrayTwo);
    male_emp.addEventListener('click', function(){
        display_emp.innerHTML=str;
    })

}
male();

let str = arrayIterating(employees);
let all_emp = document.getElementById('all_emp');

all_emp.addEventListener('click', function(){

    display_emp.innerHTML=str;
})

