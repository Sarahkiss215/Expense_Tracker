let expenses = [
    { date: '2024-07-03', name: 'Groceries', category: 'Food', amount: 50.00 },
    { date: '2024-07-02', name: 'Transportation', category: 'Transportation', amount: 30.00 }
];

// Function to display expenses in the table
function displayExpenses() {
    const tableBody = document.querySelector('#view-expenses tbody');
    tableBody.innerHTML = ''; // Clear existing table rows

    expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.name}</td>
            <td>${expense.category}</td>
            <td>$${expense.amount.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    calculateTotal();
}

// Function to calculate and display total expenses
function calculateTotal() {
    const totalElement = document.querySelector('#total-expenses');
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Function to add a new expense
function addExpense(event) {
    event.preventDefault();

    const name = document.getElementById('expense-name').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && category && !isNaN(amount)) {
        const date = new Date().toISOString().split('T')[0]; // Current date

        expenses.push({ date, name, category, amount });
        displayExpenses();

        // Clear input fields after adding expense
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-category').value = 'food'; // Reset category to default
        document.getElementById('expense-amount').value = '';

        // Optionally, you could save data to localStorage or send it to a backend here
    } else {
        alert('Please enter valid expense details.');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayExpenses(); // Display initial expenses when page loads
    document.getElementById('add-expense-form').addEventListener('submit', addExpense);
});
