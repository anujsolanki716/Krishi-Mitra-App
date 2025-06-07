# 🌾 Krishi Mitra – Empowering Farmers Digitally

**Krishi Mitra** is a comprehensive web application designed to serve as a digital companion for farmers, particularly those in developing countries. It aims to provide vital agricultural support, improve income opportunities, and strengthen community engagement through modern web technologies and AI integration.
<img width="960" alt="image" src="https://github.com/user-attachments/assets/5982f00d-2726-4b85-9a04-4e9ec7ad81f1" />


---

## 🚀 Core Features

### 🤖 AI-Powered Farming Intel
<img width="960" alt="image" src="https://github.com/user-attachments/assets/258eef46-3b14-47db-bc10-5c07b5e0b482" />

- Integrated with **Google Gemini API** to provide real-time expert advice.
- Farmers can ask questions about crop diseases, pest control, best practices, etc.
- Includes a quick crop guide and live weather widget.

### 🛒 Market Connect
<img width="960" alt="image" src="https://github.com/user-attachments/assets/e061e95a-039a-4480-bcf7-84bf08094e02" />

- A platform for farmers to **buy/sell produce** directly.
- Users can post listings and connect with local buyers or sellers.

### 🏛️ Government Schemes Awareness
<img width="960" alt="image" src="https://github.com/user-attachments/assets/680749e4-1d31-42e0-8ec5-fa47bfbd42f4" />

- Lists key schemes like crop insurance and income support.
- Shows eligibility criteria, benefits, and how to apply.
- Multi-language support: **English, Hindi**.

### 👥 Community & Learning
<img width="960" alt="image" src="https://github.com/user-attachments/assets/5b616ba0-f954-472c-9cbc-8436ac5725aa" />

- Discussion forum for peer-to-peer support.
- Includes **video tutorials**, guides, and **farmer success stories**.

### 💼 Income Hub 
<img width="960" alt="image" src="https://github.com/user-attachments/assets/71bfe134-7945-4964-b236-4dfb4fa8d0e8" />

- Suggests alternative income sources for farmers.
- Lists relevant local businesses and agri-based services.

---

## 🔐 User Personalization & Access
- **Mock Authentication System** using `localStorage` for login/signup.
- Centralized **Dashboard** with weather, farming tips, and quick links.
- **Theme toggle**: Light/Dark mode.
- **Offline detection** banner for network status.

---

## 🛠️ Tech Stack

| Technology         | Usage                                  |
|--------------------|-----------------------------------------|
| **React**          | UI development with Hooks & Components |
| **TypeScript**     | Type safety and better tooling         |
| **Tailwind CSS**   | Responsive and utility-first styling   |
| **React Router**   | Page navigation                        |
| **Context API**    | Global state management                |
| **Google Gemini API** | AI-powered chatbot and farming support |
| **localStorage**   | Mock backend and data persistence      |
| **SVG Icons**      | UI elements (Heroicons-style)          |

---

## 🧱 Project Architecture

- **Component-Based Design** following React best practices.
- **Responsive Layout** to support desktop and mobile devices.
- **Accessibility-Ready** using ARIA attributes where applicable.
- Supports **modular development** for scalability and maintenance.

---

## 📁 Directory Overview

# Run and deploy your AI app


This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
