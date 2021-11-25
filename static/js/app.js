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
function handleClick(){
    // Create a variable to hold date 
    let date = d3.select("#datetime").property("value");

    // Our default filter will actually be the original table data because we want users to refine their search on their own term
    let filteredData = tableData;

    // apply a filter method that will match the datetime value to the filtered date value.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
};
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the new table when the page loads
buildTable(tableData);

