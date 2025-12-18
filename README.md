Project Name: Task API

Overview
I am creating a backednd API that manages tasks with CRUD operations build using Node.js. Express and Mongo DB.

Tech Stack
Node.js
Express
MongoDB + Mongoose
dotenv
nodemon(development)

Project Structure
Task-api/
server.js
models/
routes/
.env
package.json
README.md

API ENDPOINTS

Post /tasks
GET /tasks
GET /tasks/:id
PUT /tasks/:id
DELTE /tasks/:id

dotenv setup
installed dotenv setup
imported dotenv
configured dotenv from file location
logged to test value

Why:
to store secrets and configurations of the code
to avoid hardcoding secrets in the code
to prepare for different environments (dev, prod , staging)
this follows twelve factor app rules

How:
It loads the .env file variables into process.env which is global object and therefore
can be accessed anywhere in the code
This object is started even before the javascript code is executed
this object is initialized when the Nodejs process starts
