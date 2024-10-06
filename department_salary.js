//Task 1 - Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 150000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 84000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 59000,
                                    subordinates: []}]}]},
                {
                    name: 'David',
                    salary: 70000,
                    subordinates: []}]},
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 87000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 62000,
                            subordinates: []}]},
                {
                    name: 'Grace',
                    salary: 68000,
                    subordinates: []}]}]};

//Task 2 - Create recursive function to calculate department salary
function calculateDepartmentSalary(employee) {
    let totalSalary = employee.salary; //Begin with the salary of the employees
    employee.subordinates.forEach(subordinate => {
        totalSalary += calculateDepartmentSalary(subordinate)});//Add the salaries of the subordinates
        return totalSalary};//End with the total sum

//Task 3 - Calculate total salary for all departments in the company

function calculateCompanySalary(company) {
    let totalCompanySalary = 0; //Initialize the value 
    company.departments.forEach(department => {
        let totalDepartmentSalary = 0;
        department.employees.forEach(employee => {
            totalDepartmentSalary += calculateDepartmentSalary(employee)});
        totalCompanySalary += totalDepartmentSalary; });// Calculate the total value
    return totalCompanySalary};
