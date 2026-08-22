const A11kDataExporter = (function () {
    function exportMatrixToCSV(containerId) {
        const table = document.getElementById(containerId).querySelector('table');
        const csv = [];
        const rows = table.querySelectorAll('tr');
        for (let i = 0; i < rows.length; i++) {
            const cols = rows[i].querySelectorAll('td, th');
            const row = [];
            for (let j = 0; j < cols.length; j++) row.push('"' + cols[j].innerText + '"');
            csv.push(row.join(','));
        }
        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'a11k_portfolio_metrics.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    return { exportTable: exportMatrixToCSV };
})();
