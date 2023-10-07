Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

STEPS:
function gradeGenerator(grades)
if grades are more than 79 output is "A"
If grades are more than 60 but less than 79 output is "B"
If grades are more than 49 but less than 59 output is "C"
If grades are more than 40 but less than 49 output is "D"
If grades are less than 40 output is "E"
Otherwise the default output if "Failed"
 

Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

STEPS:
function speedDetector(speed)
if speed is less than or equal to 70 output is "Okay"
else define variable points using let which equals to (speed - 70)/5
Using the variable points use an if... else 
if  points are more than 12 output is "License Suspended"
Otherwise the output is the points.


Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

STEPS:
function salaryCalculations(basicSalary , benefits)
declare the following using const :
PAYEE_RATE = 0.1
NHIF_RATE = 0.05
NSSF_RATE = 0.06
HOUSELEVY_RATE = 0.015
grossSalary = basicSalary + benefits
payee = grossSalary * PAYEE_RATE
nhifDeductions = grossSalary * NHIF_RATE
nssfDeductions = grossSalary * NSSF-RATE
houseLevyDeductions = grossSalary * HOUSELEVY-RATE
netSalary = grossSalary - payee - nhifDeductions - nssfDeductions - houseLevyDeductions

output :
grossSalary
payee
nhifDeductions
nssfDeductions
houseLevyDeductions
netSalary
