# Fydback - AI Voice Feedback Platform (Next.js)This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A modern Next.js application built with TypeScript, Tailwind CSS, and Ultravox AI voice technology. Experience real-time voice conversations with AI agents for customer feedback collection.## Getting Started



## 🌟 FeaturesFirst, run the development server:



- 🎤 **Voice AI Demo**: Direct browser-based voice conversations with Ultravox AI agents```bash

- 🔄 **Native WebRTC**: Real-time voice communication using ultravox-client librarynpm run dev

- 📱 **Responsive Design**: Modern UI with Tailwind CSS and shadcn/ui components  # or

- ⚡ **Next.js 15**: Built with Next.js App Router for optimal performanceyarn dev

- 🔒 **Secure API Routes**: Built-in API proxying that keeps your API keys safe# or

- 🎯 **TanStack Query**: Powerful data fetching and state managementpnpm dev

# or

## 🚀 Getting Startedbun dev

```

### Prerequisites

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Node.js 18.x or later

- npm or yarnYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- Ultravox API Key ([Get one here](https://console.ultravox.ai))

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Installation

## Learn More

1. **Clone the repository**:

   ```bashTo learn more about Next.js, take a look at the following resources:

   git clone https://github.com/yourusername/ultravox-agent-nextjs.git

   cd ultravox-agent-nextjs- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

   ```- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



2. **Install dependencies**:You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

   ```bash

   npm install## Deploy on Vercel

   ```

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

3. **Configure Environment Variables**: 

   ```bashCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   ```env
   # Server-side only (NOT exposed to browser)
   ULTRAVOX_API_KEY=your_ultravox_api_key_here
   BACKEND_API_KEY=your_backend_api_key
   BACKEND_URL=https://ultravox-voice-agent.fly.dev/api
   
   # Client-side (exposed to browser with NEXT_PUBLIC_ prefix)
   NEXT_PUBLIC_ULTRAVOX_AGENT_ID=your_agent_id
   NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT=50
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**: 
   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Test the Voice Demo**: 
   - Scroll to the "Try Our Voice AI Demo" section
   - Click the microphone button to start a conversation
   - Allow microphone permissions when prompted
   - Speak naturally with the AI agent!

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 15 + React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Voice AI**: Ultravox WebRTC integration via ultravox-client
- **Data Fetching**: TanStack Query (React Query)
- **API Routes**: Next.js API Routes for secure proxying

### Project Structure

```
ultravox-agent-nextjs/
├── src/
│   ├── app/
│   │   ├── api/                    # API Routes (Server-side)
│   │   │   ├── ultravox/
│   │   │   │   └── [...path]/route.ts    # Ultravox API proxy
│   │   │   └── backend/
│   │   │       └── [...path]/route.ts    # Backend API proxy
│   │   ├── layout.tsx              # Root layout with providers
│   │   ├── page.tsx                # Home page
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── VoiceDemo.tsx           # Main voice demo component
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── QueryProvider.tsx       # TanStack Query provider
│   ├── hooks/
│   │   └── useUltravoxCall.ts      # Custom hook for voice calls
│   ├── services/
│   │   └── ultravoxService.ts      # API service layer
│   ├── types/
│   │   └── ultravox.ts             # TypeScript type definitions
│   └── lib/
│       └── utils.ts                # Utility functions
├── public/                          # Static assets
├── .env.local                       # Environment variables (not in git)
├── .env.example                     # Example environment variables
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🔧 How It Works

### API Proxying Made Simple

Unlike the Vite version, Next.js makes API proxying incredibly simple with built-in API routes:

```typescript
// src/app/api/ultravox/[...path]/route.ts
export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;
  const response = await fetch(`https://api.ultravox.ai/api/${path.join('/')}`, {
    headers: {
      'X-API-Key': process.env.ULTRAVOX_API_KEY!, // Secure server-side only
    },
  });
  return NextResponse.json(await response.json());
}
```

**No configuration files needed!** API routes automatically:
- ✅ Keep API keys secure server-side
- ✅ Handle CORS issues
- ✅ Work in both development and production
- ✅ Deploy seamlessly to Vercel

### Voice Integration Flow

1. **User clicks microphone** → `createCall()` mutation triggers
2. **Check agent capacity** → API route → Ultravox API
3. **Authenticate with backend** → API route → Backend service
4. **Create call** → API route → Ultravox API (returns joinUrl)
5. **Join WebRTC session** → `UltravoxSession.joinCall(joinUrl)`
6. **Real-time audio** → Native WebRTC handles voice communication
7. **Status updates** → Event listeners track connection states

### Environment Variables

Next.js has a clear, simple convention:

**Server-side only** (secure):
- `ULTRAVOX_API_KEY` - Never exposed to browser
- `BACKEND_API_KEY` - Never exposed to browser
- `BACKEND_URL` - Server-side configuration

**Client-side** (safe to expose):
- `NEXT_PUBLIC_ULTRAVOX_AGENT_ID` - Agent identifier
- `NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT` - Call limit configuration

The `NEXT_PUBLIC_` prefix tells Next.js to expose these to the browser. Everything else stays secure on the server!

## 🚀 Deploy to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ultravox-agent-nextjs)

### Manual Deployment

1. **Push your code to GitHub**

2. **Import project to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**:
   In Vercel's dashboard, add:
   
   **Server-side (secure)**:
   - `ULTRAVOX_API_KEY`
   - `BACKEND_API_KEY`
   - `BACKEND_URL`
   
   **Client-side (safe)**:
   - `NEXT_PUBLIC_ULTRAVOX_AGENT_ID`
   - `NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT`

4. **Deploy**:
   Vercel will automatically build and deploy your app!

### Deploy from Terminal

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add ULTRAVOX_API_KEY
vercel env add BACKEND_API_KEY
vercel env add BACKEND_URL
vercel env add NEXT_PUBLIC_ULTRAVOX_AGENT_ID
vercel env add NEXT_PUBLIC_ULTRAVOX_DAILY_CALL_LIMIT
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Components

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]

# Example:
npx shadcn@latest add dialog
npx shadcn@latest add toast
```

## 🔍 Troubleshooting

### Common Issues

**"Connection stuck on Connecting..."**
- Ensure microphone permissions are granted
- Check browser console for WebRTC errors
- Verify `.env.local` variables are set correctly

**"API errors in production"**
- Verify all environment variables are set in Vercel
- Check that `NEXT_PUBLIC_` prefix is used for client-side vars
- Ensure API keys are valid

**Build errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Debug Tips

```typescript
// Check client-side variables (browser console)
console.log(process.env.NEXT_PUBLIC_ULTRAVOX_AGENT_ID)

// Server-side variables are NOT accessible in browser
// They're only available in API routes and Server Components
```

## 📚 Why Next.js vs Vite?

### Next.js Advantages

✅ **Simpler API Proxying**: Built-in API routes, no configuration needed  
✅ **Better Security**: Clear separation of server/client code  
✅ **Easier Environment Variables**: `NEXT_PUBLIC_` prefix is intuitive  
✅ **Seamless Vercel Deployment**: Zero-config deployment  
✅ **Full-Stack Framework**: Server and client in one project  
✅ **Better DX**: TypeScript, Hot reload, Error overlays

### When to Use Vite

- ⚡ You only need a frontend SPA
- 📦 You want the smallest possible bundle
- 🎯 You're building a library or component

### When to Use Next.js

- 🔒 You need secure API calls
- 🚀 You want server-side rendering
- 🎯 You're building a full-stack app
- ☁️ You're deploying to Vercel

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Ultravox Documentation](https://docs.ultravox.ai)
- [Ultravox Examples](https://github.com/fixie-ai/ultravox-examples)
- [TanStack Query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com)

## 📄 License

MIT License - feel free to use this project for your own applications!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using Next.js and Ultravox AI**
