# 🚀 Real-Time MERN Chat App

![GitHub Repo Stars](https://img.shields.io/github/stars/shreyshukla29/Real-Time-Chat-App?style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/shreyshukla29/Real-Time-Chat-App?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/shreyshukla29/Real-Time-Chat-App?style=for-the-badge)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=for-the-badge)

A **real-time** chat application built using the **MERN** stack with **Socket.io**, featuring authentication, online user tracking, and a seamless messaging experience.

---

## 📑 Table of Contents

- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [⚙️ Environment Setup](#️-environment-setup)
- [💻 Running the Project](#-running-the-project)
  - [Running Frontend](#running-frontend)
  - [Running Backend](#running-backend)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🚀 Features

✅ **Authentication & Authorization** using **JWT**
✅ **Real-time Messaging** powered by **Socket.io**
✅ **Online User Status Tracking**
✅ **Global State Management** with **Zustand**
✅ **Secure Image Uploads** via **Cloudinary**
✅ **Error Handling** on both **Client & Server**
✅ **Optimized Deployment for Free**

---

## 🛠 Tech Stack

- **Frontend:** React.js, TailwindCSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** Socket.io
- **Authentication:** JWT

---

## 📦 Installation

### Frontend Setup

Navigate to the `frontend` folder and install dependencies:

```bash
cd frontend
npm install
```

### Backend Setup

Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the `backend` directory and add the following variables:

```ini
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

Create a `.env` file in the `Frontend` directory and add the following variables:

```ini
VITE_BACKEND_URL="http://localhost:PORT/api"
```

---

## 💻 Running the Project

### Running Frontend

Navigate to the `frontend` folder and start the development server:

```bash
cd frontend
npm run dev
```

### Running Backend

Navigate to the `backend` folder and start the server:

```bash
cd backend
npm dev
```

---

## 🤝 Contribution Guidelines

We welcome contributions! To get started:

1. Fork the repository 📌
2. Create a new branch (`git checkout -b feature-branch`) 🌱
3. Commit your changes (`git commit -m 'Added a new feature'`) ✨
4. Push to your fork (`git push origin feature-branch`) 🚀
5. Create a **Pull Request** 💡

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

### 🌟 Show Some Love

If you like this project, don't forget to **star ⭐** the repo!

Happy Coding! 🚀
