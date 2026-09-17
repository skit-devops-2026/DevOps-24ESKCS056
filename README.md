# 🗺️ TripCraft — AI-Powered Travel Planner

TripCraft is a full-stack travel planning web application where AI helps
users create personalized trip itineraries, compare hotels and transport
options, and redirect to external booking platforms.

This repository is also used for the **DevOps Practices and Principles
(CSUL511)** course project.

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

## 🏗️ Application Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| AI | OpenAI GPT-4o |
| Authentication | JWT + bcryptjs |

---

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/skit-devops-2026/DevOps-24ESKCS056.git
cd DevOps-24ESKCS056

### Monitoring

The backend exposes real Prometheus metrics at `http://localhost:5000/metrics`.
The local scrape configuration is in `monitoring/prometheus.yml`, and the
Grafana dashboard definition is in `monitoring/grafana-dashboard.json`.
The current target uses `host.docker.internal:5000` for local Docker-based
Prometheus validation; it is not a public production monitoring endpoint.

Metrics include HTTP request totals and duration histograms, plus default Node.js
process metrics such as memory, CPU time, and uptime.