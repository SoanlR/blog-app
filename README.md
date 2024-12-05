Blog Application with JSONPlaceholder API

This is a simple blog application that allows users to view posts, see post details with comments, and manage favorite posts using React for the frontend and NestJS (Node.js with Express) for the backend. The app interacts with the JSONPlaceholder API to fetch posts and comments.

Features:
Frontend (React):

View a list of posts.
View details of selected post with comments.
Manage favorite posts and display them on a separate page.
Visual indication for favorited posts (star icon).
Backend (NestJS with Express):

Endpoints to manage favorite posts (add, remove, retrieve).
Favorites stored temporarily using local storage or JSON file.
Project Setup
1. Frontend (React)
Steps to Run the Frontend:
Clone the repository:

bash
Copy code
git clone https://github.com/SoanlR/blog-app/blog-frontend.git
cd blog-app/frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000.

2. Backend (NestJS with Express)
Steps to Run the Backend:
Clone the repository:

bash
Copy code
git clone https://github.com/SoanlR/blog-app.blog-backend.git
cd blog-app/backend
Install dependencies:

bash
Copy code
npm install
Start the NestJS server:

bash
Copy code
npm run start
The backend will be available at http://localhost:4000.

API Endpoints (Backend)

GET /favorites: Retrieve the list of favorite posts.

POST /favorites: Add a post to favorites.

Request Body (JSON):

json

Copy code

{
  
  "id": 1,

  "title": "Post Title",

  "body": "Post Body"

}

DELETE /favorites/:id: Remove a post from favorites by id.

Tech Stack

Frontend: React.js

Backend: Node.js with NestJS (Express)

API: JSONPlaceholder API (https://jsonplaceholder.typicode.com)

License

This project is open-source and available under the MIT License.
