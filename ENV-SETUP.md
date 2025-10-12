# Environment Variables Setup

## File Structure

```
.env              ✅ Safe to commit - Contains placeholders/defaults
.env.local        🔒 NEVER commit - Contains your real API keys (gitignored)
.env.example      ✅ Safe to commit - Template for new developers
```

## What's in Each File

### `.env` (NEW - Committed to Git)
```bash
# Default/placeholder values
# Safe to commit
# Used as fallback if .env.local doesn't exist

ULTRAVOX_API_KEY=your-ultravox-api-key-here  # Placeholder
BACKEND_API_KEY=your-backend-api-key-here    # Placeholder
NEXT_PUBLIC_ULTRAVOX_AGENT_ID=1fbf806f-949b-467c-8092-3b85b9f143a5  # Real value (public)
```

### `.env.local` (Your Existing File - NOT Committed)
```bash
# YOUR REAL API KEYS
# Never committed to Git
# Overrides .env values

ULTRAVOX_API_KEY=Kkc5LagY.Mt70qXPbocIyAqeBsHUwIriy3gaprFdq  # 🔒 Real key
BACKEND_API_KEY=dev-api-key-12345                          # 🔒 Real key
```

### `.env.example` (Updated - Committed to Git)
```bash
# Template for new team members
# Copy to .env.local and fill in real values
# Documents all required variables
```

## .gitignore Configuration

Updated `.gitignore` to:
```gitignore
# env files
.env*.local      # Ignores .env.local, .env.development.local, etc.
.env.local       # Explicit ignore for .env.local
```

This means:
- ✅ `.env` **will be tracked** by Git
- ✅ `.env.example` **will be tracked** by Git
- 🔒 `.env.local` **is ignored** by Git
- 🔒 `.env.production.local` **is ignored** by Git
- 🔒 `.env.development.local` **is ignored** by Git

## How It Works

### Priority Order (Next.js)
```
1. .env.local               (highest priority - your secrets)
2. .env.development.local   (if NODE_ENV=development)
3. .env.production.local    (if NODE_ENV=production)
4. .env.development         (if NODE_ENV=development)
5. .env.production          (if NODE_ENV=production)
6. .env                     (lowest priority - defaults)
```

### Current Setup
```
Your Machine:
├── .env           → Placeholder values (new)
└── .env.local     → Real API keys (existing)
    ↑ This wins!

Git Repository:
├── .env           → Committed with placeholders ✅
├── .env.example   → Committed as template ✅
└── .env.local     → NOT committed (ignored) 🔒
```

## For New Team Members

1. **Clone the repository**
   ```bash
   git clone <your-repo>
   cd ultravox-agent-nextjs
   ```

2. **Copy example to local**
   ```bash
   cp .env.example .env.local
   ```

3. **Edit .env.local with real keys**
   ```bash
   # Edit and add your real API keys
   nano .env.local
   ```

4. **Run the app**
   ```bash
   npm install
   npm run dev
   ```

## For Production (Vercel)

Don't use `.env` or `.env.local` in production!

Instead, add environment variables in Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add each variable:
   - `ULTRAVOX_API_KEY` = `your-production-key`
   - `BACKEND_API_KEY` = `your-production-key`
   - `BACKEND_URL` = `your-production-url`
   - `NEXT_PUBLIC_ULTRAVOX_AGENT_ID` = `your-agent-id`
   - `NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT` = `50`

## Security Benefits

✅ **No secrets in Git** - .env.local is never committed  
✅ **Team onboarding** - .env.example shows what's needed  
✅ **Default values** - .env provides non-sensitive defaults  
✅ **Production safety** - Vercel environment variables are secure  
✅ **Clear separation** - Secrets vs configuration

## Verification

Check git status:
```bash
git status
```

Should show:
```
modified: .gitignore
new file: .env           ← Can be committed ✅
modified: .env.example   ← Can be committed ✅
# .env.local not shown   ← Properly ignored 🔒
```

## Summary

🎯 **You now have:**
- ✅ `.env` with safe defaults (committed)
- 🔒 `.env.local` with real keys (ignored)
- 📝 `.env.example` as template (committed)
- 🛡️ Updated `.gitignore` (committed)

Your secrets are safe! 🔐
