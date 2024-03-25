Space - Website 
This website is ..... 



Set up instructions: 

npm i to install the dependencies

Run npm run seed before querying the database. 
The seed script is responsible for populating the database with initial data, such as tables, records, and relationships.
Running npm run seed executes the seeding process defined in the project, which usually involves creating tables (if they don't exist) and inserting initial data into those tables.

After running the seed script, the database should be populated with the necessary data, allowing you to perform queries or other 
operations on it.



Ensure that PostgreSQL and psql (the PostgreSQL interactive terminal) are installed on your system.
Elephant SQL

type psql in the terminal to start the PostgreSQL interactive terminal 
Use the \c command followed by the name of the database you want to connect to.
For this project, it would be: \c space_website or \c space_website_test
Once connected to the database, you can execute SQL queries to retrieve or manipulate data. 
Examples:  
SELECT * FROM galaxies;
SELECT name FROM black_holes; 
SELECT name, type FROM black_holes; 
\q to quit out



Testing: 
To test the data created in the database, test files have been set up with test data emulating the databases actual data. 
To ensure the data works as expected, TDD has been used. "__tests__"
To run the tests, Run npm run test





Hosting the PSQL database 
To host this API, ElephantSQL has been used. This creates an online location for the database.
Render has been used to host the API. 

Example URL's
https://space-website-1.onrender.com/api/users
https://space-website-1.onrender.com/api/articles
https://space-website-1.onrender.com/api/planets
https://space-website-1.onrender.com/api/topics
https://space-website-1.onrender.com/api/galaxies
https://space-website-1.onrender.com/api/stars 
etc ... 