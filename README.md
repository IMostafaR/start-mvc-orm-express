# Start Sequelize ORM and MVC (Express.js)

This is my work assigned by [Route-Academy](https://www.linkedin.com/company/routeacademy/mycompany/) during learning backend web development.

This is a Node.js application built using the MVC design pattern, Express.js framework, and Sequelize ORM. The application provides APIs for managing users and their notes. It follows a modular file structure to organize the codebase. The APIs allow operations such as retrieving users and products, adding new entries, updating existing entries, and deleting entries (CRUD).

---

## File Structure

The file structure of the project is as follows:

- `index.js`: The main server file where the application is initialized and listens on a specific port.
- `src` folder: Contains the main source code of the application.

  - `config` folder: Contains the configuration file for the database connection.
    - `connection.js`: Establishes the connection to the MySQL database using Sequelize.
  - `controllers` folder: Contains the controller logic for handling user and note operations.
    - `notes` folder: Contains the controller logic for note-related operations.
      - `note.controller.js`: Defines functions for adding, updating, deleting, and retrieving notes.
    - `users` folder: Contains the controller logic for user-related operations.
      - `user.controller.js`: Defines functions for user sign up, sign in, updating, deleting, and retrieving users.
  - `middlewares` folder: Contains middleware functions for handling specific tasks or validations.
    - `notes` folder: Contains middleware functions specific to note-related operations.
      - `owner.middleware.js`: Middleware to check if the request user is the owner of the note.
      - `signIn.middleware.js`: Middleware to check if the user is signed in before adding a note.
      - `userId.middleware.js`: Middleware to check if the provided user ID exists in the database.
    - `users` folder: Contains middleware functions specific to user-related operations.
      - `email.middleware.js`: Middleware to check if the provided email already exists in the database.
      - `id.middleware.js`: Middleware to check if the provided user ID exists in the database.
  - `models` folder: Contains the Sequelize models for the database tables.
    - `note.js`: Defines the Note model and its associations with the User model.
    - `user.js`: Defines the User model.
    - `syncModels.js`: Synchronizes the models with the database.
  - `routes` folder: Contains the route definitions for handling different API endpoints.

    - `notes` folder: Contains the route definitions for note-related endpoints.
      - `note.route.js`: Defines the routes for adding, updating, deleting, and retrieving notes.
    - `users` folder: Contains the route definitions for user-related endpoints.

      - `user.route.js`: Defines the routes for user sign up, sign in, updating, deleting, and retrieving users.

---

## API Documentation

## Users

#### Sign up

- URL: `/users/signup`
- Method: `POST`

- Request body:

```json
{
  "name": "user",
  "email": "user@email.com",
  "password": "12345",
  "age": 30
}
```

#### Sign in

- URL: `/users/signin`
- Method: `GET`

- Request body:

```json
{
  "email": "user@email.com",
  "password": "12345"
}
```

#### Update user

- URL: `/users`
- Method: `PUT`

- Request body:

```json
{
  "id": 3,
  "name": "user",
  "email": "user@email.com",
  "password": "12345",
  "age": 30
}
```

#### Delete user

- URL: `/users`
- Method: `DELETE`

- Request body:

```json
{
  "id": 3
}
```

#### Search for user where his name start with "a" and age less than 30

- URL: `/users/likelt`
- Method: `GET`

- Request body:

```json
{
  "letter": "A",
  "age": 30
}
```

#### search for user where his age is between 20 and 30

- URL: `/users/age`
- Method: `GET`

- Request body:

```json
{
  "lowAge": 20,
  "highAge": 30
}
```

#### Get the 3 oldest users

- URL: `/users/oldest`
- Method: `GET`

- Request body:

```json
{
  "limit": 3
}
```

#### Search for users by list of ids

- URL: `/users/ids`
- Method: `GET`

- Request body:

```json
[4, 5, 2, 3, 10]
```

#### Get all users

- URL: `/users`
- Method: `GET`

---

## Notes

#### Add note

- URL: `/notes`
- Method: `POST`

- Request body:

```json
{
  "title": "Important note",
  "content": "This is my note. Important!",
  "userId": 4
}
```

#### Delete note

- URL: `/notes`
- Method: `DELETE`

- Request body:

```json
{
  "id": 1,
  "userId": 4
}
```

#### Update note

- URL: `/notes`
- Method: `PUT`

- Request body:

```json
{
  "id": 4,
  "title": "Just Update",
  "content": "This is my update",
  "userId": 4
}
```

#### Get all notes

- URL: `/notes`
- Method: `GET`

#### Get all notes with owners

- URL: `/notes/owners`
- Method: `GET`

---

## Middleware

### Note Middleware

- `isSignedIn`: Middleware to check if the user is signed in before adding a note.
- `isUserIdExist`: Middleware to check if the provided user ID exists in the database.
- `isOwner`: Middleware to check if the request user is the owner of the note.

### User Middleware

- `isEmailExist`: Middleware to check if the provided email already exists in the database.
- `isIdExist`: Middleware to check if the provided user ID exists in the database.

---

## Installation and Setup

The code in this module runs with the main server file `index.js` in the root directory.

Install dependencies:

```shell
npm install
```

To run the server:

```shell
node index.js
```

The server will start running on `http://localhost:3000`.

---

## Author

- GitHub - [IMostafaR](https://github.com/IMostafaR)
- Linkedin - [@imostafarh](https://www.linkedin.com/in/imostafarh/)
