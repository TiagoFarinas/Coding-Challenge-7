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

                    