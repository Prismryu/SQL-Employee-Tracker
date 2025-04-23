# SQL Employee Tracker

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

A command-line content management system (CMS) built with Node.js, PostgreSQL, and Inquirer. This application allows business owners to view and manage departments, roles, and employees in their company. It's designed to provide an intuitive and efficient way to manage company structures directly from the terminal.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prismryu/sql-employee-tracker.git

 2.   Navigate into the project directory:

cd sql-employee-tracker

3. Install dependencies:

npm install

4. Set up your PostgreSQL database and configure your .env file with the appropriate credentials:

DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=employee_db

5. Run the database schema SQL file to create tables:

    psql -U your_username -d employee_db -f db/schema.sql

Usage

To start the application, run:

node index.js

Use the arrow keys to navigate the CLI menu and perform actions such as:

    View all departments, roles, or employees

    Add a department, role, or employee

    Update an employee's role

    Exit the application

This application is especially useful for companies to maintain a structured, up-to-date record of their organizational hierarchy.
License

This application is covered under the MIT license.
Contributing

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

## Questions

If you have any questions, feel free to reach out:

- GitHub: [Prismryu](https://github.com/Prismryu)
- Email: guyrunby@gmail.com
