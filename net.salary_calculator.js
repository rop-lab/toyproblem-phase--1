// FUnction to calculate net salary base on basic salary and benefits.
function netSalaryCalculator(basic_Salary,benefits){
    // Declaration of variables for payee rate and nhif
    let payee_rate ;
    let nhif_rate;
    //Calculate gross salary by adding basic salary and benefits
    const gross_Salary=(basic_Salary + benefits);
    //calculate payee, nhif deduction, and nssf deduction
    const payee=(payee_rate * gross_Salary);
    const nhif_deduction=(nhif_rate * gross_Salary);
    const nssf_deduction=(0.06 * gross_Salary);
    //calculate net salary by subtracting deductions from gross salary
    const net_salary=(gross_Salary-nhif_deduction-payee-nssf_deduction);
    //Determine payee rate based on gross salary range
    if (gross_Salary <24000){
        return payee_rate=0.1
    } else if (gross_Salary >24000 && gross_Salary <+32333){
        return payee_rate=0.25
    } else if (gross_Salary >32333 && gross_Salary <=500000){
        return payee_rate=0.3
    } else if (gross_Salary >500000 && gross_Salary <=800000){
        return payee_Percent=0.32
    } else if (gross_Salary >800000 ){
        return payee_rate=0.35
    } else {

        //Determine nhif rate based on gross salary range
        if (gross_Salary <=5999){
            return nhif_rate=150
        } else if (gross_Salary>5999 && gross_Salary<=7999){
            return nhif_rate=300
        } else if ( gross_Salary>7999 && gross_Salary<=11999){
            return nhif_rate=400
        } else if (gross_Salary>11999 && gross_Salary<=14999){
            return nhif_rate=500
        } else if (gross_Salary>14999 && gross_Salary<=19999){
            return nhif_rate=600
        } else if(gross_Salary>19999 && gross_Salary<=24999){
            return nhif_rate=750
        } else if (gross_Salary>24999 && gross_Salary<=29999){
            return nhif_rate=850
        } else if(gross_Salary>29999 && gross_Salary<=34999){
            return nhif_rate=900
        } else if(gross_Salary>34999 && gross_Salary<=39999){
            return nhif_rate=950
        } else if (gross_Salary>39999 && gross_Salary<=49999){
            return nhif_rate=1000
        } else if (gross_Salary>49999 && gross_Salary<=59999){
            return nhif_rate=1100
        } else if (gross_Salary>59999 && gross_Salary<=69999){
            return nhif_rate=1200
        } else if (gross_Salary>69999 && gross_Salary<=79999){
            return nhif_rate=1300
        } else if (gross_Salary>79999 && gross_Salary<=89999){
            return nhif_rate=1400
        } else if (gross_Salary>89999 && gross_Salary<=99999){
            return nhif_rate=1500
        } else if (gross_Salary>99999){
            return nhif_rate=1600
        }
        //Return the calculated net salary
        return net_salary;
    }
}
// Example usage of the function and logging the result
console.log(netSalaryCalculator(70000,5000))