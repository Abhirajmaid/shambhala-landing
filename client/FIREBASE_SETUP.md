# Firebase setup

## Dashboard login (required for `/dashboard`)

### Fix `auth/configuration-not-found`

This error means **Authentication is not enabled** on project `shambhala-59523`.

**Option A — Cloud (production):**

1. [Firebase → Authentication → Sign-in method](https://console.firebase.google.com/project/shambhala-59523/authentication/providers)
2. Click **Get started** (if shown), then enable **Email/Password** → Save
3. Create admin user (pick one):
   - **CLI:** `npm run admin:create` (default: `admin@shambhalahome.com` / `shambhala@123`)
   - **Console:** Users → Add user with the same email and password
4. Open **`/dashboard/login`** and sign in

Default dashboard credentials:

| Field | Value |
|-------|--------|
| Email | `admin@shambhalahome.com` |
| Password | `shambhala@123` |

## Firestore rules

Deploy from repo root:

```bash
firebase deploy --only firestore:rules
```

- **Temporary:** all read/write allowed until **2026-06-24** (see `firestore.rules` in repo root)
- Landing form and dashboard both use Firestore `callback_requests`
- Replace with stricter rules before the expiry date

## Local development

```bash
cd client
npm install
npm run dev:local
```

This starts Firestore + Auth emulators and Next.js.

`.env.local`:

```
NEXT_PUBLIC_USE_FIRESTORE_EMULATOR=true
```

**Emulator admin user** (first time): `npm run admin:create` then sign in at `/dashboard/login`

## Production

1. `NEXT_PUBLIC_USE_FIRESTORE_EMULATOR=false`
2. [Create Firestore](https://console.firebase.google.com/project/shambhala-59523/firestore)
3. Enable Authentication + add admin user (above)
4. `firebase deploy --only firestore:rules`

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Database '(default)' not found` | Run `npm run dev:local` OR create cloud Firestore |
| `permission-denied` on dashboard | Sign in at `/dashboard/login` and deploy rules |
| `auth/invalid-credential` | Wrong email/password or user not created in Firebase Auth |
| `ERR_BLOCKED_BY_CLIENT` | Disable ad blocker for localhost |
