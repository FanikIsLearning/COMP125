/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: HOI KIT FAN
      Date: 26 JAN 2023

      Filename: project02-04.js
 */
 
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.9; 
const SALMON_PRICE = 18.95; 
const SALAD_PRICE = 7.95; 
const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 document.getElementById("chicken").addEventListener("click", calcTotal);
 document.getElementById("halibut").addEventListener("click", calcTotal);
 document.getElementById("burger").addEventListener("click", calcTotal);
 document.getElementById("salmon").addEventListener("click", calcTotal);
 document.getElementById("salad").addEventListener("click", calcTotal);

 function calcTotal () {
   //a. Declare the cost variable with an initial value of 0.
   let cost = 0;
   //b. Declare the buyChicken variable equal to the checked property of the element with the id “chicken”. 
   //In the same way, declare the buyHalibut, buyBurger, buySalmon, and buySalad variables equal to the
   //checked property of elements with ids of “halibut”, “burger”, “salmon”, and “salad”, respectively.
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;
   //c. Use a comparison operator to increase the value of the cost variable by the value of the CHICKEN_PRICE constant if buyChicken is true or by 0
   if (buyChicken === true)
   { cost += CHICKEN_PRICE; }
   if (buyHalibut === true)
   { cost += HALIBUT_PRICE; }
   if (buyBurger === true )
   { cost += BURGER_PRICE; }
   if (buySalmon === true)
   { cost += SALMON_PRICE; }
   if (buySalad === true)
   { cost += SALAD_PRICE; }
   //d. Set the innerHTML property for the element with the id “foodTotal” to the value returned by the formatCurrency() function using cost as the parameter value.
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);
   //e. Declare the tax variable, setting its value equal to the cost variable multiplied by SALES_TAX.
   let tax = cost * SALES_TAX;
   //f. Set the innerHTML property for the element with the id “foodTax” to the value returned by the formatCurrency() function using tax as the parameter value.
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);
   //g. Declare the totalCost variable, setting its value equal to the cost variable plus the tax variable.
   let totalCost = cost * tax;
   //h. Set the innerHTML property for the element with the id “totalBill” to the value returned by the formatCurrency() function using totalCost as the parameter value.
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
 }