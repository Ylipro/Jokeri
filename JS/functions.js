var generateButton = document.getElementById('generateButton');
var rowCountElement = document.getElementById('rowCount');
var jokeriTableBody = document.querySelector('#jokeriTable tbody');
var rowCount = 0;
generateButton.addEventListener('click', generateRow);
function generateRow() {
    var newRow = document.createElement('tr');
    for (var i = 0; i < 7; i++) {
        var cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 10);
        newRow.appendChild(cell);
    }
    jokeriTableBody.appendChild(newRow);
    rowCount++;
            rowCountElement.textContent = rowCount;
    }
