import { migrationRunner } from './runner';
import dotenv from 'dotenv';
dotenv.config();

(async () => {
  try {
    const direction = process.argv[2] === 'down' ? 'down' : 'up';
    await migrationRunner(direction);
    console.log(`Migrations have been ${direction === 'up' ? 'applied' : 'rolled back'} successfully.`);
  } catch (error) {
    console.error(`An error occurred while running the ${process.argv[2]} migration: `, error);
  }
})();
