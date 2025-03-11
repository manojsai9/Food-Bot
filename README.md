# MERN Stack Food Ordering Application

## 📌 Overview
This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** food ordering application. It allows users to browse restaurants, add food items to the cart, and place orders using Stripe for payments. Restaurant owners can manage their menus and view orders.

## ✨ Features
- **User Authentication** (Login/Register)
- **Restaurant Management** (Add/Edit/Delete food items)
- **Cart Functionality** (Add/Remove items)
- **Order Placement & Tracking**
- **Stripe Payment Integration**
- **Image Storage with Cloudinary**
- **Admin Panel for Order Management**

## 🛠 Tech Stack
- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Token)
- **Payment Gateway:** Stripe
- **Image Storage:** Cloudinary
- **Deployment:**
  - **Backend:** Hosted on Render
  - **Frontend:** Hosted on GitHub Pages

## 🚀 Live Demo
🔗 https://food-bot-frontend.onrender.com

## 📂 Folder Structure
```
/root
│── backend/       # Express.js backend (APIs, authentication, database)
│── frontend/      # React.js frontend (UI components, pages)
│── README.md      # Project documentation
```

## 📌 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your_username/your_repo.git
cd your_repo
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
#### Create a `.env` file in `backend/` and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=dr2rpitnf
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

## 🛠 API Endpoints
| Method | Endpoint | Description |
|--------|------------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/restaurants` | Get all restaurants |
| POST | `/api/orders` | Place an order |

## 📢 Contributing
Feel free to contribute by submitting issues or pull requests.

