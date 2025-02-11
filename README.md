# Payroll Management System

## Overview
The **Payroll Management System** is a web application that allows users to add, edit, and manage employee payroll data efficiently. The system provides an easy-to-use interface for adding new employees, viewing their details, and performing actions such as updating and deleting records.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Java Spring Boot
- **Database:** MySQL

## Features
- **Add New Employee:**
  - Enter first name, last name, position, salary, email, phone, and department.
  - Select the date of joining.
- **Employee List View:**
  - Displays all employees with their name, position, salary, and department.
  - Includes a search functionality to find employees quickly.
- **Actions:**
  - **Edit**: Modify employee details.
  - **Delete**: Remove an employee from the system.

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- Java (JDK 11 or later)
- MySQL database

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```sh
   git clone https://github.com/MoteneJan/payroll_system.git
   cd payroll_system
   cd payroll-backend-system
   ```
2. Configure MySQL database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/payroll_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```sh
   cd payroll-frontend-system
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```

## Usage
1. Open the application in a browser at `http://localhost:3000/`.
2. Add new employees using the form.
3. View employee details in the table.
4. Edit or delete employees as needed.

## Future Enhancements
- Role-based authentication
- Export employee data to CSV/PDF
- Payroll calculation automation
- Cloud deployment

## License
This project is open-source and available under the [MIT License](LICENSE).

![Screenshot (44)](https://github.com/user-attachments/assets/c01b832e-9091-4b9e-916b-e4c15bc1d769)
