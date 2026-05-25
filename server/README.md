# Shambhala API (Firebase backend)

Express server that saves landing-page callback requests to **Firestore** and serves them to the admin dashboard.

## Setup

```bash
cd server
npm install
cp .env.example .env
# Edit .env with your Firebase values from the console (do not commit .env)
```

**Security:** If credentials were ever pushed to GitHub, rotate the Firebase API key in [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and update `server/.env`.

### Firestore

1. Open [Firebase Console](https://console.firebase.google.com/) → project **shambhala-59523**
2. Enable **Firestore Database** (production or test mode)
3. Deploy rules from `firestore.rules` (Firestore → Rules → publish), or paste the same rules in the console

Collection used: `callback_requests`

## Run

```bash
npm run dev
```

API: `http://localhost:4000`

## Mock admin login

| Field    | Default                 |
|----------|-------------------------|
| Email    | `admin@shambhalahome.com` |
| Password | `Shambhala@2026`        |

Override in `.env`: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_TOKEN`

## Endpoints

| Method | Path           | Auth   | Description        |
|--------|----------------|--------|--------------------|
| POST   | `/api/leads`   | Public | Save form submission |
| GET    | `/api/leads`   | Bearer | List all requests  |
| POST   | `/api/auth/login` | Public | Dashboard login |
