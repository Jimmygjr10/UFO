// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 
var tbody = d3.select("tbody");

// Create function for table 
function buildTable(data) {
    tbody.html("");

        // Add the forEach Function
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

            // Loop through Data Rows
        Object.values(dataRow).forEach((val) => {

            // Append data to table
            let cell = row.append("td");

            // Add the values
            cell.text(val);

            }
        );
    });
}
