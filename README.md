# AI Emergency System

An AI-powered emergency assistance platform designed to provide **quick, accessible, and practical guidance** during medical, accident, disaster, and other emergency situations.

The system combines an AI chatbot, multilingual support, voice interaction, image analysis, emergency assistance features, incident history, reports, and educational resources into a single web application.

## Features

### 🤖 AI Emergency Assistant

* Provides short, practical, and point-wise emergency guidance.
* Supports medical, accident, disaster, medicine-related, and general emergency questions.
* Can understand naturally written questions instead of requiring predefined commands.
* Supports multiple languages, including:

  * English
  * Hindi
  * Bengali
* Designed to understand common **Hinglish** and **Benglish** expressions.
* Uses conversation history to provide context-aware responses.
* Identifies emergency category and risk level.
* Advises users to contact emergency services when a situation appears life-threatening.
* Avoids presenting uncertain information as a definite diagnosis.

### 🎙️ Voice Assistance

* Allows users to communicate with the AI assistant using voice.
* Converts recorded speech into text.
* Sends the transcription to the emergency assistant.
* Useful when typing is difficult during an emergency.

### 🖼️ Image Upload and Analysis

* Users can upload relevant images for AI-assisted analysis.
* Can be used to provide additional context during an emergency.
* The analysis result is returned through the chatbot interface.

### 🚨 Emergency Assistance

The system provides assistance for different types of situations, including:

* Medical emergencies
* Accidents
* Disaster situations
* Medicine-related questions
* General safety emergencies

For potentially life-threatening situations, the system emphasizes contacting appropriate emergency services immediately.

### 📚 Emergency Learning Hub

The application provides educational resources covering:

* Medical emergencies
* Disaster preparedness
* Emergency preparedness
* First aid
* Healthcare guidance
* Safety awareness

The learning content is designed using simple language so that important safety information is easier to understand.

### 💬 Multilingual Chat Interface

Users can select their preferred chatbot response language from the chat interface.

The chatbot can respond in the selected language while maintaining a consistent emergency-assistance experience.

### 📋 History and Reports

The application can maintain information about previous interactions and emergency incidents.

Users can access:

* Previous conversations
* Emergency history
* Reports
* Incident information

### 👤 User Management

The platform includes:

* User registration
* User login
* Protected routes
* User profile
* Notifications
* Role-based access

### 🛡️ Admin Panel

Administrators have access to a separate administrative section for managing and monitoring the application.

The application uses role-based protection to restrict administrative routes to authorized users.

---

## System Architecture

The project is divided into two major parts:

```text
AI-Emergency-System/
│
├── backend/
│   ├── core/
│   ├── database/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── tests/
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   └── ...
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Frontend

The frontend provides the user-facing web interface, including:

* Home page
* Authentication
* AI Emergency Assistant
* Emergency request interface
* History
* Reports
* Profile
* Notifications
* Learning Hub
* Admin interface

The frontend is built using **React** and uses **React Router** for navigation.

### Backend

The backend provides:

* REST APIs
* Authentication
* Chatbot processing
* AI integration
* Language detection
* Conversation history
* Voice processing
* Image processing
* Emergency services
* User management
* Admin functionality

The backend is built using **FastAPI** and **SQLAlchemy**.

---

## AI Chatbot Flow

The chatbot follows a structured processing pipeline:

```text
User Message
     │
     ▼
Language Selection / Detection
     │
     ▼
Conversation History
     │
     ▼
Prompt Generation
     │
     ▼
AI Service
     │
     ▼
Emergency Classification
     │
     ├── Category
     ├── Risk Level
     └── Emergency Status
     │
     ▼
Short Point-wise Response
     │
     ▼
Save Conversation History
```

The chatbot is designed to prioritize:

1. Immediate safety
2. Important emergency guidance
3. Clear warnings
4. Appropriate escalation
5. One relevant follow-up question when necessary

---

## Response Style

The AI assistant is designed to avoid long paragraph-based responses.

For example:

```text
• Move away from windows and glass.
• Take cover under a sturdy table if possible.
• Avoid elevators during the earthquake.
• If you are injured or trapped, seek emergency assistance.
• Contact emergency services immediately if you have serious injuries.

Are you currently in a safe location?
```

This makes emergency information easier to scan and understand.

---

## Technology Stack

### Frontend

* React
* JavaScript
* HTML
* CSS
* React Router
* Lucide React

### Backend

* Python
* FastAPI
* SQLAlchemy
* Pydantic
* Uvicorn

### AI / Machine Learning

* Google Gemini / AI services
* Speech recognition
* Natural language processing
* Machine learning-based emergency assistance

### Database

* SQLAlchemy-compatible database
* Conversation and user data management

### Development Tools

* Git
* GitHub
* VS Code
* REST APIs

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ankanmaity842-prog/AI-Emergency-System.git
cd AI-Emergency-System
```

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create the required environment configuration:

```text
.env
```

Add the required API keys, database configuration, and other environment variables.

Start the FastAPI server using the project's configured application entry point.

For example:

```bash
uvicorn api.app:app --reload --port 8000
uvicorn app:app --reload --port 8000
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available through the development URL displayed by Vite.

---
<<<<<<< HEAD
=======

>>>>>>> ead72d0 (Update chatbot and emergency assistant)
