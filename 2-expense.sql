-- Create a database (if it doesn't exist already)
CREATE DATABASE IF NOT EXISTS expense_tracker;

-- Use the created database
USE expense_tracker;

-- Create a table to store categories of expenses
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

-- Create a table to store expenses
CREATE TABLE expenses (
    expense_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    expense_date DATE NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Example of inserting some categories
INSERT INTO categories (category_name) VALUES ('Groceries'), ('Utilities'), ('Transportation'), ('Entertainment');

INSERT INTO expenses (category_id, amount, description, expense_date) 
VALUES 
(1, 50.00, 'Weekly grocery shopping', '2024-07-03'),
(3, 30.00, 'Gasoline refill', '2024-07-02'),
(4, 25.00, 'Movie night', '2024-07-01');
