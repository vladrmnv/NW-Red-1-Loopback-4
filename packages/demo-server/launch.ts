import { main } from './src/index';

main().catch(err => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});
