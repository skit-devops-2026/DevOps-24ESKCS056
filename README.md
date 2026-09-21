# 🗺️ TripCraft — AI-Powered Travel Planner

TripCraft is a full-stack travel planning application designed for the DevOps Practices and Principles (CSUL511) course project. It lets users plan trips, compare travel options, and redirect to external booking platforms for hotels, flights, buses, trains, and cabs.

This repository demonstrates full-stack development, automated testing, CI in GitHub Actions, Jenkins-driven pipeline execution, Docker-based containerization, and monitoring setup.

---

## 👨‍🎓 Student Details

| Field | Details |
|---|---|
| Name | Arman |
| Roll Number | 24ESKCS056 |
| Course | B.Tech – Computer Science & Engineering |
| Semester | V |
| Subject | DevOps Practices and Principles (CSUL511) |
| Institution | Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), Jaipur |
| Session | 2026 |

---

## 🏗️ Architecture and Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JWT + bcryptjs |
| AI Integration | OpenAI API |
| CI | GitHub Actions |
| CD / Automation | Jenkinsfile pipeline |
| Containerization | Docker + Docker Compose |
| Monitoring | Prometheus + Grafana dashboard |

---

## 🚀 Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/skit-devops-2026/DevOps-24ESKCS056.git
cd DevOps-24ESKCS056
```

### 2. Backend setup

```bash
cd server
npm install
cp .env.example .env
```

Update the `.env` values for your local environment, especially:

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `GROQ_API_KEY`
- `GROQ_MODEL`

### 3. Frontend setup

```bash
cd ../client
npm install
```

### 4. Start the app locally

Backend:

```bash
cd server
npm start
```

Frontend:

```bash
cd client
npm run dev
```

The frontend runs on `http://localhost:5173` by default, and the backend runs on `http://localhost:5000`.

---

## ✅ Testing

Run frontend tests:

```bash
cd client
npm test
```

Run backend tests:

```bash
cd server
npm test
```

Run frontend production build:

```bash
cd client
npm run build
```

The repository includes real automated checks for the backend health API and frontend booking URL utilities.

---

## 🔁 CI / GitHub Actions

The workflow file in `.github/workflows/ci.yml` runs on pushes to `main`, `develop`, and `ci-pipeline`, and on pull requests to `main` and `develop`.

It performs the following steps:

1. Checks out the repo
2. Installs Node.js 20
3. Runs `npm ci` in the client and server
4. Executes the frontend and backend automated tests
5. Builds the frontend for production validation
6. Verifies runtime versions

This is the project’s CI definition used for automated validation.

---

## 🧪 Jenkins Pipeline

The repository includes a declarative Jenkins pipeline in `Jenkinsfile`.

The pipeline stages perform:

1. Checkout code from SCM
2. Install frontend dependencies
3. Run frontend tests
4. Build frontend assets
5. Install backend dependencies
6. Run backend tests

This pipeline is meant to be executed in a local Jenkins instance connected to the repository.

---

## 🐳 Docker and Compose

Docker configuration is present for both the frontend and backend application layers.

To build and run the stack locally:

```bash
docker compose up --build
```

This project includes:

- `client/Dockerfile`
- `server/Dockerfile`
- `docker-compose.yml`

The compose file runs:

- MongoDB database service
- Express backend
- React frontend

---

## 📈 Monitoring

The backend exposes Prometheus metrics at `http://localhost:5000/metrics`.

Relevant monitoring files:

- `monitoring/prometheus.yml`
- `monitoring/grafana-dashboard.json`

The metrics cover HTTP request counts and durations, plus default Node.js process metrics such as memory usage, CPU time, and uptime.

---

## 🔒 Security Notes

Sensitive variables such as database credentials, JWT secrets, and API keys are not committed in tracked source files. The project uses `.env` files locally and includes an `.env.example` template for safe setup.

---

## 📌 Git and Branching Notes

The project follows a multi-branch workflow with `main` and feature/development branches. Pull requests are used to merge validated work into the active development branch before final integration.

---

## 🧾 Repository Summary

This repository covers the required DevOps practices for the course assignment, including:

- Clean repository setup
- Version-controlled source code
- Git branching and PR workflow
- Automated tests
- GitHub Actions CI
- Jenkins pipeline definition
- Docker configuration
- Monitoring setup

The repository is intended for academic evaluation and live demonstration of DevOps workflow execution.