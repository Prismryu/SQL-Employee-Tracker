import pkg from 'pg';  // Import pg module as a default import
const { Client } = pkg;  // Destructure Client from the imported pg module

import dotenv from 'dotenv';  // Use 'import' for dotenv as well

dotenv.config();  // Initialize environment variables

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
});

// Connect only once when the application starts
if (!client._connected) {
  client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('Connection error', err.stack));
}

export { client };  // Export the client to be reused elsewhere