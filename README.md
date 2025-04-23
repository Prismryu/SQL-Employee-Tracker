SQL Employee Tracker

License
Description

A command-line content management system (CMS) built with Node.js, PostgreSQL, and Inquirer. This application allows business owners to view and manage departments, roles, and employees in their company. It's designed to provide an intuitive and efficient way to manage company structures directly from the terminal.
Table of Contents

    Installation
    Usage
    License
    Contributing
    Tests
    Questions

Installation
Clone the repository:

git clone https://github.com/Prismryu/sql-employee-tracker.git

    Navigate into the project directory:

cd sql-employee-tracker
cd employee-tracker

    Install dependencies:

npm install

    Set up your PostgreSQL database and configure your .env file with the appropriate credentials:

DB_USER=your_username DB_PASSWORD=your_password DB_HOST=localhost DB_PORT=5432 DB_DATABASE=employee_db

    Run the database schema SQL file to create tables:

    psql -U your_username -d employee_db -f db/schema.sql

Usage

To start the application, run:

node index.js

Use the arrow keys to navigate the CLI menu and perform actions such as:

View all departments, roles, or employees

Add a department, role, or employee

Update an employee's role

Exit the application

This application is especially useful for companies to maintain a structured, up-to-date record of their organizational hierarchy. License

This application is covered under the MIT license. Contributing

Contributions are welcome! If you'd like to contribute:

Fork the repository.

Create your feature branch:

git checkout -b feature/YourFeature

Commit your changes:

git commit -m "Add your feature"

Push to the branch:

git push origin feature/YourFeature

Open a pull request.

Tests

There are currently no unit tests for this CLI application, but testing functionality can be done manually through the interactive prompts.

https://youtu.be/2ViMVIIi_Aw

Questions

If you have any questions, feel free to reach out:

    GitHub: Prismryu
    Email: guyrunby@gmail.com
