# 🌟 Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Online-brightgreen?style=for-the-badge)](https://your-portfolio-url.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A modern, high-performance portfolio website with contact functionality built with cutting-edge technologies.

![Portfolio Showcase](screenshots/portfolio-preview.gif) _Replace with your actual screenshot_

## ✨ Features

- 🚀 Blazing fast performance with Vite + React
- 🌈 Beautiful UI with Chakra UI components
- ✉️ Functional contact form with Node.js backend
- 📱 Fully responsive design
- 🎯 SEO optimized

## 🛠 Tech Stack

### Frontend

| Technology                                                                                                      | Purpose                   |
| --------------------------------------------------------------------------------------------------------------- | ------------------------- |
| ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)                | Next-gen frontend tooling |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)             | Component-based UI        |
| ![Chakra UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white) | Accessible design system  |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge)                         | Smooth animations         |

### Backend

| Technology                                                                                                 | Purpose            |
| ---------------------------------------------------------------------------------------------------------- | ------------------ |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)   | Web framework      |
| ![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge)                          | Email sending      |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm/yarn/pnpm
- Gmail account (for contact form)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. **Set Up Frontend**

```bash
    cd frontend
    npm install
    npm run dev
```

3. **Setup Backend**

```bash
    cd ../backend
    npm install
```

4. Create **.env** file

```env
    GMAIL_USER=your-email@gmail.com
    GMAIL_PASS=your-app-password
    PORT=5000
```

5. **Start Server**

```bash
    npm start
```

### 📥 Contact Form Workflow

1. User Submits contact form
2. Frontend sends POST request to /api/sendmail
3. Backend processes request with nodemailer
4. Email is delivered to my inbox for awaited reply

```mermaid
    sequenceDiagram
    participant Frontend
    participant Backend
    participant Gmail
    Frontend->>Backend: POST /api/sendmail
    Backend->>Gmail: Send email via Nodemailer
    Gmail-->>Backend: Success/Failure
    Backend-->>Frontend: Response
```

### 📞 Contact

Your Name -
