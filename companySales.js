/*
Create an empty report (report_obj{})
Find each sales entry (sales_obj) in the companySalesData
  if not exist in report_obj{}
    create a report entry inside report_obj{}
    put total sales and total taxes properties in the empty object
  }
  Total the sales in the sales entries
  Find the province tax rate
  Total the taxes in the sales entries
Return the report
*/

//Start program

var salesTaxRates = { // salesTaxRates_obj
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
};


var companySalesData = [
    //each sales inside the companySalesData array is called sales_obj
    {
        name: "Telus",
        province: "BC",
        sales: [100, 200, 400]
    },

    {
        name: "Bombardier",
        province: "AB",
        sales: [80, 20, 10, 100, 90, 500]
    },

    {
        name: "Telus",
        province: "SK",
        sales: [500, 100]
    }

];

console.log(salesReport(companySalesData));
// end of program


// All the wonderful functions begin here:

function salesReport(companySalesData) {
    var report_obj = {};
    var totalSales = 0;
    var totalTax = 0;

    for (sales_obj of companySalesData) {
        if (!report_obj[sales_obj.name]) {
          // create a report entry
            report_obj[sales_obj.name] = {
              totalSales: 0,
              totalTaxes: 0
            }
        }
        totalSales = salesTotal(sales_obj);
        totalTax = totalSales * theSalesTaxRate(sales_obj, salesTaxRates);

        report_obj[sales_obj.name].totalSales += totalSales;
        report_obj[sales_obj.name].totalTaxes += totalTax;
    }
    return report_obj
}

// calculate the total sales in the sales array of each sales_obj
function salesTotal(sales_Obj) {
    var total = 0;
    for (salesEntry of sales_obj.sales) {
        total += salesEntry;
    }
    return total
}


// find the sales rate of the province
function theSalesTaxRate(sales_obj, salesTaxRates) {
    return salesTaxRates[sales_obj.province]
}
