# Sample-Form
Basic form collection site that deposits data into postgreSQL database

## Requirements

- Node/Express
- NPM
- React/Redux
- Postgres
- Bookshelf/Knex

### Installing Dependencies and Databases

From within the root directory:
  ** Make sure you have Postgres installed and running on your computer.

```sh
npm install
npm run create:DB
npm run create:Users
```

If create:DB does not work, you can manually create the database from within Postgres with the command:
CREATE DATABASE sampleform;

If create:Users not work, check ./server/db/knexfile.js to make sure the knex.config matches with your local settings.

### Running the App

From within the root directory:

npm run build:watch
npm run start