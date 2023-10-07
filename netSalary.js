function salaryCalculations(basicSalary , benefits){
    const PAYEE_RATE = 0.1;
    const NHIF_RATE = 0.05;
    const NSSF_RATE = 0.06;
    const HOUSELEVY_RATE = 0.015;
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * PAYEE_RATE;
    const nhifDeductions = grossSalary * NSSF_RATE;
    const nssfDeductions = grossSalary * NSSF_RATE;
    const houseLevyDeductions = grossSalary * HOUSELEVY_RATE;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions - houseLevyDeductions ;

    return {
        grossSalary,
        payee,
        nhifDeductions,
        nssfDeductions,
        houseLevyDeductions,
        netSalary,
    };
}

basicSalary= 20000
benefits = 5000


