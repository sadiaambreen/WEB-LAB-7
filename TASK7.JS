var txtarea = document.getElementById('input');
class Member {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Employee extends Member {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }
    printEmpDetails()    
    { txtarea.value=`"The Employee details" :NAME= ${this.name} ,AGE ${this.age},SALARY= ${this.salary},DEPARTMENT= ${this.department}`
     }
} 
const a = new Employee('SADIA AMBREEN', 22, 98000, 'BSE (SOFTWARE ENGINEERING)6A');
a.printEmpDetails();