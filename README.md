# Task Manager Frontend

This is the frontend of the Task Manager application. It provides a user-friendly interface to interact with the backend API.

## Features
- View a list of tasks.
- Add new tasks through a form.
- Edit task details (title, description, and status).
- Delete tasks.
- Filter tasks by status (completed or pending).
- Responsive design for desktop and mobile.
- Toast notifications for success and error messages.

## Technologies
- React.js
- Tailwind CSS
- Context API for global state management
- Axios for API integration
- React-Toastify for notifications

## Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/AlejoE02/task-manager-frontend.git>
   cd task-manager-frontend
2. Install dependencies
   ```bash
   npm install
3. Create a .env file and add the following variable:
   ```bash
   REACT_APP_API_URL=https://task-manager-backend-22gu.onrender.com
   ```
   - If you will run the app in local environment then use `http://localhost:5000/api` as a value
4. Start the application:
   ```bash
   npm start
5. The application will be available at `http://localhost:3000`.

## Development Scripts
  - `npm start`: Starts the server
  - `npm build`: Builds the application for production.

## License

[MIT](https://choosealicense.com/licenses/mit/)