# bs_procedures_test

This is the frontend-backend project with Express.js React.js and MySQL

# To start Server

1. create .env
2. copy .env.samp data to new .env fail

3. Edit your MySQL parameters in .env fail
   ! Working with WorkBench = the DB_PASS is your Workbench password.

4. npm install npm express mysql2 nodemon axios cors
5. npm run dev

# To start Frontend

1. install yarn for mac https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
2. yarn start

Structure:
In index.js there are app.use links for main routes

In /routes/ there are route pathes and methods names that are used in /controllers/
In /controllers/ there are methods from the routes that are using MqSQL methods from /models/
In /models/ there is contructor and methods with MySQL statements
