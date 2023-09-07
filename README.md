<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Scholario - EduTech Empowerment System</h3>
  <p align="center">
    Transforming Education with Technology!
    <br />
    <a href="https://sms-blog-git-main-phoenix043.vercel.app/"><strong>Explore the documentation »</strong></a>
    <br />
    <br />
    <a href="https://yourprojectdemo.link/">View Demo</a>
    ·
    <a href="https://sms-blog-git-main-phoenix043.vercel.app/">Report Bug</a>
    ·
    <a href="https://sms-blog-git-main-phoenix043.vercel.app/">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [Features](#features)
* [Endpoints](#endpoints)
* [ER Diagram](#entities-and-relationships)  
* [Screenshots](#screenshots)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project

Scholario is an EduTech Empowerment System designed to revolutionize education management. It provides a comprehensive platform for schools, students, teachers, and administrators to streamline various tasks and enhance the learning experience.

### Built With

* Frontend: [Angular](https://angular.io/)
* Backend: [Python](https://www.python.org/) with [Django](https://www.djangoproject.com/)
* Database: [SQL](https://www.sql.org/), [MongoDB](https://www.mongodb.com/)
* AI Integration: [ChatGPT](https://openai.com/), [GenAI](https://genai.com/)

<!-- GETTING STARTED -->
## Getting Started

To get started with Scholario, follow these simple steps.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Vikram043/Scholario-EduTech-Empowerment-System

   Install necessary packages

   sh
   cd frontend
   npm install
   cd ../backend
   pip install -r requirements.txt

### Usage

1. Run the frontend
   ```sh
   cd frontend
    ng serve


2. Run the backend
   ```sh
   cd backend
   python manage.py runserver

<!-- FEATURES -->
## Features

Scholario offers a wide range of features, including but not limited to:

- Student Registration and Management
- Teacher Registration and Management
- Admin Dashboard for School Administration
- Attendance Tracking
- Notice Board for Announcements
- Interactive Chat with AI Assistants
- And much more!

<!-- ENDPOINTS -->
## Endpoints

Here are some of the API endpoints you can utilize:

- `/admin`: Admin Panel
- `/admin-teacher`: Manage Teachers
- `/admin-student`: Manage Students
- `/admin-attendance`: Manage Attendance
- `/admin-fee`: Manage Fee Payments
- `/admin-notice`: Post Notices
- `/teacher-dashboard`: Teacher Dashboard
- `/student-dashboard`: Student Dashboard
- `/aboutus`: About Us Page
- `/contactus`: Contact Us Page
- And more...

## Entities and Relationships:

Entities:
- Student
- Teacher
- Admin
- Class
- Subject
- Attendance
- Fee
- Notice

Relationships:
- Student attends Class (Many-to-Many)
- Teacher teaches Subject (Many-to-Many)
- Teacher manages Class (One-to-Many)
- Admin approves Teacher (One-to-Many)
- Admin approves Student (One-to-Many)
- Student pays Fee (One-to-Many)
- Student views Notice (Many-to-Many)
- Teacher posts Notice (One-to-Many)
- Admin manages Notice (One-to-Many)
- Student records Attendance (One-to-Many)
- Teacher takes Attendance (One-to-Many)

Attributes:
Student:
- StudentID (Primary Key)
- Name
- Roll Number
- Contact

Teacher:
- TeacherID (Primary Key)
- Name
- Subject
- Contact

Admin:
- AdminID (Primary Key)
- Name
- Contact

Class:
- ClassID (Primary Key)
- ClassName

Subject:
- SubjectID (Primary Key)
- SubjectName

Attendance:
- AttendanceID (Primary Key)
- Date
- Status (Present/Absent)

Fee:
- FeeID (Primary Key)
- Amount
- PaymentDate

Notice:
- NoticeID (Primary Key)
- Content
- PostedDate


<!-- SCREENSHOTS -->
## Screenshots
### Admin Dashboard
![Admin Dashboard](https://yourprojectdemo.link/screenshots/admin-dashboard.png)
</br>
### Student Registration
![Student Registration](https://yourprojectdemo.link/screenshots/student-registration.png)
</br>
### Teacher Dashboard
![Teacher Dashboard](https://yourprojectdemo.link/screenshots/teacher-dashboard.png)
</br>
### Chat with AI Assistant
![Chat with AI](https://yourprojectdemo.link/screenshots/chat-with-ai.png)

<!-- CONTRIBUTING -->
## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Vikram - knowme962@gmail.com

Project Link: https://github.com/Vikram043/Scholario-EduTech-Empowerment-System


