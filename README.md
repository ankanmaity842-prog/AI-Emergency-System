# 🚨 Safe Guardian — AI Emergency Response System

An AI-powered emergency response and public safety awareness platform. It combines real-time emergency reporting, an AI assistant, and educational safety resources in one place — helping people get help faster and learn how to stay safe before an emergency happens.

---

## ✨ Features

- **Emergency Reporting** — Quickly report and track emergencies in real time
- **AI Chatbot** — Get instant guidance powered by Google Gemini
- **Alerts & Notifications** — Stay informed with real-time updates
- **History & Reports** — Review past incidents and generate reports
- **User Profiles** — Manage personal account details
- **Admin Dashboard** — Oversee emergencies, alerts, users, and reports
- **Learning Hub** — Educational resources covering:
  - Medical Emergencies
  - Disaster Preparedness
  - General Emergency Preparedness
  - First Aid
  - Healthcare Guidance
  - Safety Awareness

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | FastAPI (Python) |
| Database | PostgreSQL |
| AI | Google Gemini API |
| Auth | JWT-based authentication |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

---

## 📁 Project Structure

```
AI-Emergency-System/
├── backend/
│   ├── ai/              # AI / Gemini integration logic
│   ├── api/              # API route definitions (auth, users, chatbot, etc.)
│   ├── core/              # App configuration and settings
│   ├── database/          # Database connection and models
│   ├── middleware/        # Request/response middleware
│   ├── schemas/           # Pydantic data schemas
│   ├── services/          # Business logic layer
│   ├── tests/             # Backend tests
│   ├── utils/             # Helper utilities
│   ├── app.py             # Main FastAPI application entry point
│   ├── create_admin.py    # Script to create an admin user
│   ├── check_routes.py    # Utility to list registered API routes
│   └── requirements.txt   # Python dependencies
│
├── frontend/
│   ├── public/            # Static public assets
│   ├── src/                # React application source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level views (Dashboard, Learn, Admin, etc.)
│   │   ├── context/         # React Context providers (Auth, Emergency, Notifications)
│   │   ├── routes/          # Application routing
│   │   ├── services/         # API service calls
│   │   └── data/             # Static content (guidance articles, etc.)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .github/workflows/     # CI/CD and code scanning (CodeQL)
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (3.10+)
- A PostgreSQL database (or SQLite for quick local testing)

### 1. Clone the repository
```bash
git clone https://github.com/ankanmaity842-prog/AI-Emergency-System.git
cd AI-Emergency-System
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
```

Create a `.env` file inside `backend/` (see [Environment Variables](#-environment-variables) below), then run:
```bash
uvicorn app:app --reload --port 8000
```

The API will be available at `http://localhost:8000`, with interactive docs at `http://localhost:8000/docs`.

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/` (see below), then run:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🔑 Environment Variables

Sensitive values below are placeholders — never commit real credentials to the repository.

**`backend/.env`**
```dotenv
DATABASE_URL=your_database_connection_string
SECRET_KEY=your_random_secret_key
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-model-name
APP_NAME=Safe Guardian
APP_VERSION=1.0.0
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
UPLOAD_DIR=uploads
MAX_UPLOAD_SIZE=10485760
```

**`frontend/.env`**
```dotenv
VITE_API_URL=http://127.0.0.1:8000/api
```

> 💡 A `.env.example` file is provided in each folder as a template — copy it to `.env` and fill in your own values.

---

## 👤 Creating an Admin Account

After setting up the backend and database, run:
```bash
python create_admin.py
```
Follow the prompts to create your administrator login.

---

## ☁️ Deployment

- **Frontend** is deployed on [Vercel](https://vercel.com), connected directly to this GitHub repository.
- **Backend** is deployed on [Render](https://render.com) as a Python web service, connected to a managed PostgreSQL database.

Environment variables for production are configured separately in each platform's dashboard and are never stored in the repository.

---

## 🤝 Contributing

Contributions, issue reports, and feature suggestions are welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is currently unlicensed. Add a license file if you plan to open-source it publicly.
