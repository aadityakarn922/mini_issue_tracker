# Mini Issue Tracker

A simple backend project built with Node.js, Express.js, and PostgreSQL.

It allows users to create, view, update, and delete software issues through a REST API.

## Features

- Create issues
- View all issues
- View one issue
- Update issues
- Delete issues
- PostgreSQL database
- REST API
- Basic validation

## Technologies

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv

## Project Structure

mini-issue-tracker/

    server.js        API and server
    db.js            PostgreSQL connection
    package.json     Project dependencies
    package-lock.json
    .gitignore
    README.md

## How the Project Works

The client sends an HTTP request to the Express server.

The Express server processes the request and sends an SQL query to PostgreSQL.

PostgreSQL performs the operation and sends the result back to the server.

The server then returns the result as JSON.

The flow is:

Client
  ↓
Express / Node.js
  ↓
PostgreSQL
  ↓
Express / Node.js
  ↓
Client

## API Endpoints

### Get all issues

GET /issues

Example:

    curl http://localhost:3000/issues

### Get one issue

GET /issues/:id

Example:

    curl http://localhost:3000/issues/1

### Create an issue

POST /issues

Example:

    curl -X POST http://localhost:3000/issues \
    -H "Content-Type: application/json" \
    -d '{"title":"Add search feature","description":"Users should be able to search issues","status":"open","priority":"high"}'

### Update an issue

PUT /issues/:id

Example:

    curl -X PUT http://localhost:3000/issues/1 \
    -H "Content-Type: application/json" \
    -d '{"title":"Login fixed","description":"Login is working","status":"closed","priority":"high"}'

### Delete an issue

DELETE /issues/:id

Example:

    curl -X DELETE http://localhost:3000/issues/1

## Run This Project on Your Computer

If you want to use this project on another computer, follow these steps.

### 1. Install Node.js

Install Node.js from the official website.

Check the installation:

    node --version
    npm --version

### 2. Install PostgreSQL

Install PostgreSQL on your computer.

Check the installation:

    psql --version

### 3. Clone the project

Clone this repository:

    git clone YOUR_GITHUB_REPOSITORY_URL

Enter the project:

    cd mini-issue-tracker

### 4. Install Node.js dependencies

Run:

    npm install

This installs all packages required by the project.

### 5. Create the PostgreSQL database

Open PostgreSQL:

    sudo -u postgres psql

Create the database:

    CREATE DATABASE issue_tracker;

Connect to it:

    \c issue_tracker

Create the issues table:

    CREATE TABLE issues (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status VARCHAR(50) DEFAULT 'open',
        priority VARCHAR(50) DEFAULT 'medium'
    );

Exit PostgreSQL:

    \q

### 6. Create the .env file

Create a file named:

    .env

Add your own PostgreSQL configuration:

    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=issue_tracker
    DB_PORT=5432

If your PostgreSQL installation requires a password, add the password according to your local configuration.

Do not upload the .env file to GitHub.

### 7. Start the server

Run:

    node server.js

You should see:

    Server running on http://localhost:3000

### 8. Test the API

Open another terminal and run:

    curl http://localhost:3000/issues

You can now use the API.

## Using the API From Another Application

This backend can be used by any frontend or application that can send HTTP requests.

For example, JavaScript can call the API using fetch:

    fetch("http://localhost:3000/issues")
      .then(response => response.json())
      .then(data => console.log(data));

A React application, mobile application, or another backend can also communicate with this API.

## Database

The project uses a PostgreSQL database named:

    issue_tracker

The main table is:

    issues

Each issue contains:

    id
    title
    description
    status
    priority

## Important

The PostgreSQL database is not included in the GitHub repository.

When another person clones the project, they must create their own PostgreSQL database and .env file.

The project code is shared through GitHub, but the database runs locally on each user's computer.


## Author

Aaditya Karn
