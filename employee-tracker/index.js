import inquirer from 'inquirer';
import { client } from './db/connection.js';

async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'Add a new employee',
        'Exit',
      ],
    },
  ]);

  switch (action) {
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Add a new employee':
      await addNewEmployee();
      break;
    case 'Exit':
      console.log('Goodbye!');
      await client.end(); // Close DB connection
      process.exit(0);
      break;
  }

  mainMenu(); // Loop again
}

async function viewAllEmployees() {
  try {
    const res = await client.query('SELECT * FROM employee');
    console.table(res.rows);
  } catch (err) {
    console.error('Error fetching employees:', err.message);
  }
}

async function addNewEmployee() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for the employee:',
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager ID (or leave blank):',
    },
  ]);

  const { first_name, last_name, role_id, manager_id } = answers;

  try {
    await client.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id || null]
    );
    console.log(`${first_name} ${last_name} added successfully.`);
  } catch (err) {
    console.error('Error adding employee:', err.message);
  }
}

// Start the application
mainMenu();