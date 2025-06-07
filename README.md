# 🌾 Krishi Mitra – Empowering Farmers Digitally

**Krishi Mitra** is a comprehensive web application designed to serve as a digital companion for farmers, particularly those in developing countries. It aims to provide vital agricultural support, improve income opportunities, and strengthen community engagement through modern web technologies and AI integration.

---

## 🚀 Core Features

### 🤖 AI-Powered Farming Intel
- Integrated with **Google Gemini API** to provide real-time expert advice.
- Farmers can ask questions about crop diseases, pest control, best practices, etc.
- Includes a quick crop guide and live weather widget.

### 🛒 Market Connect
- A platform for farmers to **buy/sell produce** directly.
- Users can post listings and connect with local buyers or sellers.

### 🏛️ Government Schemes Awareness
- Lists key schemes like crop insurance and income support.
- Shows eligibility criteria, benefits, and how to apply.
- Multi-language support: **English, Hindi**.

### 👥 Community & Learning
- Discussion forum for peer-to-peer support.
- Includes **video tutorials**, guides, and **farmer success stories**.

### 💼 Income Hub
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
