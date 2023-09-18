function downloadTable() {
    // Sample data
    const data = [
        ['Name', 'Age', 'Country'],
        ['John Doe', 30, 'USA'],
        ['Jane Smith', 25, 'Canada']
        // Add more data rows as needed
    ];

    // Create a table element
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Iterate over the data and create table rows and cells
    data.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    // Create a blob from the table's HTML content
    const tableHTML = table.outerHTML;
    const blob = new Blob([tableHTML], { type: 'text/html' });

    // Create a link element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'table.html'; // Set the desired file name
    a.click();
}
