import { test, expect } from '@playwright/test';
import pkg from 'pg';

const { Client } = pkg;

test('Connect to PostgreSQL DB', async () => {

  const client = new Client({
    host: 'localhost',        // DB host
    port: 5432,               // Default PostgreSQL port
    user: 'postgres',         // Your DB username
    password: 'password',     // Your DB password
    database: 'postgres'        // Database name
  });

  await client.connect();

  const result = await client.query('SELECT first_name FROM emp where emp_id = 1');

  console.log(result.rows[0].first_name);

  expect(result.rows.length).toBeGreaterThan(0);

  await client.end();
});


// result structure:
// {
//   rows: [ {...}, {...} ],
//   rowCount: 1,
//   command: 'SELECT'
// }