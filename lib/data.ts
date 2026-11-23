import { IProject } from '@/types';

export const SITE_URL = 'https://m-ahmad069.github.io';

export const GENERAL_INFO = {
    email: 'muhammad.ahmad3963@gmail.com',

    emailSubject: "Let's build something together",
    emailBody: 'Hi Muhammad Ahmad, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/M-Ahmad069' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-ahmad-085230382/' },
];

export const CAPABILITIES = [
    {
        title: 'AI Agents & Agentic Systems',
        text: 'Agents that plan, call tools, read and write real data, and finish multi-step work with a human in the loop. Structured output, guardrails and fallbacks when a model fails.',
        tags: ['Claude', 'OpenAI', 'Gemini', 'Tool use', 'MCP', 'RAG'],
    },
    {
        title: 'AI-Native Architecture',
        text: 'Code is cheap now; architecture is not. I design the data model, tenancy, security rules, APIs and events first, so every feature an agent builds lands on solid ground.',
        tags: ['System design', 'Multi-tenant', 'Postgres RLS', 'Event-driven'],
    },
    {
        title: 'Business Automation',
        text: 'The work a business does by hand, done by the system: scheduled jobs, review requests, WhatsApp receipts, email and push reminders, Drive sync, AI-written content.',
        tags: ['Workflows', 'Cron & webhooks', 'n8n', 'Email & push'],
    },
    {
        title: 'Agentic Engineering',
        text: 'I run several AI coding agents in parallel, each in its own worktree, wired to Supabase, Vercel, GitHub and a real browser through MCP. I set the spec and the standards; they build; nothing ships without passing my checks.',
        tags: ['Claude Code', 'Codex', 'Cursor', 'Parallel agents'],
    },
    {
        title: 'SaaS on Every Screen',
        text: 'One product on the web, Windows, Mac, Android and in Chrome. Plans and tiers, platform admin, auto-updates, installable apps.',
        tags: ['Next.js', 'Electron', 'Capacitor', 'Expo', 'MV3'],
    },
    {
        title: 'Security & Reliability',
        text: 'Auth, roles, per-page access, RLS, validated inputs and signed tokens by default. Errors tracked, usage measured, every change verified on a preview deploy before production.',
        tags: ['OWASP', 'Zod', 'Sentry', 'PostHog', 'CI/CD'],
    },
];

const icon = (name: string, file: string) => ({ name, icon: file });

export const MY_STACK = {
    ai: [
        icon('Claude', '/icons/claude.svg'),
        icon('OpenAI', '/icons/openai.svg'),
        icon('Gemini', '/icons/googlegemini.svg'),
        icon('LangChain', '/icons/langchain.svg'),
        icon('Hugging Face', '/icons/huggingface.svg'),
        icon('n8n', '/icons/n8n.svg'),
    ],
    'ai workflow': [
        icon('Claude Code', '/icons/claude.svg'),
        icon('Codex', '/icons/openai.svg'),
        icon('Cursor', '/icons/cursor.svg'),
        icon('GitHub Copilot', '/icons/githubcopilot.svg'),
        icon('MCP', '/icons/modelcontextprotocol.svg'),
    ],
    frontend: [
        icon('TypeScript', '/logo/ts.png'),
        icon('React', '/logo/react.png'),
        icon('Next.js', '/logo/next.png'),
        icon('Tailwind CSS', '/logo/tailwind.png'),
        icon('Three.js', '/icons/threedotjs.svg'),
        icon('GSAP', '/logo/gsap.png'),
    ],
    backend: [
        icon('Node.js', '/logo/node.png'),
        icon('Express.js', '/logo/express.png'),
        icon('Laravel', '/icons/laravel.svg'),
        icon('Python', '/icons/python.svg'),
        icon('GraphQL', '/icons/graphql.svg'),
    ],
    database: [
        icon('PostgreSQL', '/logo/postgreSQL.png'),
        icon('Supabase', '/icons/supabase.svg'),
        icon('MongoDB', '/logo/mongodb.svg'),
        icon('MySQL', '/logo/mysql.svg'),
        icon('Firebase', '/icons/firebase.svg'),
    ],
    apps: [
        icon('Expo', '/icons/expo.svg'),
        icon('Capacitor', '/icons/capacitor.svg'),
        icon('Electron', '/icons/electron.svg'),
        icon('Chrome Ext', '/icons/googlechrome.svg'),
    ],
    tools: [
        icon('Git', '/logo/git.png'),
        icon('Docker', '/logo/docker.svg'),
        icon('Vercel', '/icons/vercel.svg'),
        icon('GitHub Actions', '/icons/githubactions.svg'),
        icon('Sentry', '/icons/sentry.svg'),
        icon('PostHog', '/icons/posthog.svg'),
    ],
};

interface ProjectData {
    title: string;
    slug: string;
    kind: 'product' | 'work';
    category: string;
    year: number;
    status: string;
    tagline: string;
    overview: string;
    highlights: string[];
    role: string;
    techStack: string[];
    images: string[];
    liveUrl?: string;
    sourceCode?: string;
}

const PROJECT_DATA: ProjectData[] = [
    {
        title: 'Elaviqo',
        slug: 'elaviqo',
        kind: 'product',
        category: 'Salon POS & business SaaS',
        year: 2026,
        status: 'In production',
        tagline:
            'The whole salon in one app: checkout, bookings, staff pay, clients, reviews and its own website.',
        overview:
            'Elaviqo started in 2024 as a management system for one salon and grew into a multi-tenant SaaS. Today it runs the daily sales of a paying salon and ships on the web, as a Windows and Mac desktop app and as an Android app. I own all of it: product, architecture, code, security, releases and support.',
        highlights: [
            'Multi-tenant Postgres on Supabase with row-level security, plans and feature tiers, and a platform admin to run every salon.',
            'POS checkout, appointments with a full calendar, staff earnings, loyalty, review requests and WhatsApp receipts.',
            'Per-staff page locks so owners decide exactly what each employee can open.',
            'Themed salon websites generated from the same data, with live booking.',
            'Windows and Mac desktop app (Electron) with auto-updates; Android app (Capacitor) with push notifications, barcode scanning and one-tap updates.',
            'Errors in Sentry, product analytics in PostHog, preview deploys checked before anything reaches production.',
        ],
        role: 'Founder and sole engineer',
        techStack: [
            'Next.js',
            'TypeScript',
            'Supabase',
            'PostgreSQL',
            'React Query',
            'Electron',
            'Capacitor',
            'Sentry',
            'PostHog',
            'Vercel',
        ],
        images: [
            '/projects/shots/elaviqo-0.webp',
            '/projects/shots/elaviqo-4.webp',
            '/projects/shots/elaviqo-3.webp',
            '/projects/shots/elaviqo-1.webp',
            '/projects/shots/elaviqo-2.webp',
        ],
        liveUrl: 'https://www.elaviqo.com',
    },
    {
        title: 'SoftScroll',
        slug: 'softscroll',
        kind: 'product',
        category: 'Digital wellbeing app',
        year: 2026,
        status: 'Live',
        tagline:
            'Removes Reels, Shorts and endless feeds from social apps and keeps your messages and friends.',
        overview:
            'SoftScroll (built as Social Escape) is one product across three surfaces: a mobile app, a Chrome extension and a marketing website, all in one monorepo with shared packages.',
        highlights: [
            'Monorepo with a mobile app, a Manifest V3 Chrome extension and the website sharing one set of packages.',
            'Mobile app on Expo and React Native.',
            'Blocks feeds on Instagram, YouTube, TikTok, Facebook, Snapchat, Reddit and X while messages keep working.',
        ],
        role: 'Founder, product and engineering',
        techStack: ['Expo', 'React Native', 'TypeScript', 'Chrome extension', 'Next.js'],
        images: [
            '/projects/shots/softscroll-0.webp',
            '/projects/shots/softscroll-3.webp',
        ],
        liveUrl: 'https://social-escape.vercel.app',
    },
    {
        title: 'FitGenius',
        slug: 'fitgenius',
        kind: 'product',
        category: 'AI fitness SaaS',
        year: 2026,
        status: 'Live',
        tagline:
            'Workout and nutrition plans written by AI for your body, goals, cuisine and schedule.',
        overview:
            'FitGenius turns a short quiz into a personal training and meal plan generated with Claude, then tracks progress and adapts the plan week by week.',
        highlights: [
            'Onboarding quiz feeding a Claude prompt that returns structured plans, not free text.',
            'Supabase auth and Postgres for users, plans and progress, with server-side rendering.',
            'Cuisine-aware meal plans and a dashboard to track streaks and milestones.',
        ],
        role: 'Product and full-stack engineering',
        techStack: ['Next.js', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind CSS'],
        images: [
            '/projects/shots/fitgenius-0.webp',
            '/projects/shots/fitgenius-1.webp',
            '/projects/shots/fitgenius-2.webp',
            '/projects/shots/fitgenius-3.webp',
        ],
        liveUrl: 'https://fitgenius-gold.vercel.app',
        sourceCode: 'https://github.com/M-Ahmad069/fitgenius',
    },
    {
        title: 'CaptionFlow',
        slug: 'captionflow',
        kind: 'product',
        category: 'AI content automation',
        year: 2026,
        status: 'Live demo',
        tagline:
            'Writes social captions with Gemini, schedules them, syncs them to Google Drive and emails a reminder.',
        overview:
            'Built and deployed by a team of two during the V-Spark 2026 one-hour web development challenge. The whole loop is automated: generate, pick, schedule, store, remind.',
        highlights: [
            'Gemini returns three caption options with hashtags per platform and tone.',
            'Each saved post is also written to the user’s own Google Drive as JSON, with images.',
            'Email reminders at the time, 15 minutes, 1 hour or 1 day before, with a test send.',
            'Firebase and Google sign-in, Supabase storage, Zod-validated APIs, deployed on Vercel.',
        ],
        role: 'Team of two · full-stack and AI integration',
        techStack: ['Next.js', 'Gemini', 'Google Drive API', 'Supabase', 'Firebase Auth', 'Nodemailer', 'Zod'],
        images: ['/projects/shots/captionflow-0.webp'],
        liveUrl: 'https://v-spark-2026-beryl.vercel.app',
        sourceCode: 'https://github.com/M-Ahmad069/v-spark-2026',
    },
    {
        title: 'VSpark Competition Platform',
        slug: 'vspark-platform',
        kind: 'work',
        category: 'Competition platform',
        year: 2026,
        status: 'Live',
        tagline:
            'Registration, approvals, timed task submissions, judging and published results for a university coding competition.',
        overview:
            'A full platform for running a web development competition, with separate student and admin roles and a clearly labelled demo mode.',
        highlights: [
            'Supabase SSR auth, role policies, safe sign-up triggers and private storage buckets.',
            'Submission upload that filters excluded paths, validates sizes and checks GitHub URLs.',
            'Admin scoring with feedback, and results that publish with one switch.',
        ],
        role: 'Full-stack engineer',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind CSS 4', 'Zod'],
        images: [
            '/projects/shots/vspark-0.webp',
            '/projects/shots/vspark-1.webp',
            '/projects/shots/vspark-2.webp',
        ],
        liveUrl: 'https://vspark-competition.vercel.app',
    },
    {
        title: 'Frontend Showcase',
        slug: 'frontend-showcase',
        kind: 'work',
        category: '3D & motion web',
        year: 2026,
        status: 'Live',
        tagline:
            'A gallery of 3D heroes, shader backgrounds and motion pieces, each one a working demo.',
        overview:
            'My lab for high-end frontend work: WebGL and Spline scenes, shaders, GSAP and Motion choreography, video backgrounds.',
        highlights: [
            'Spline 3D scenes and custom shader backgrounds in React.',
            'GSAP and Motion animation with HLS video.',
            'Every piece responsive and loaded on demand.',
        ],
        role: 'Design and frontend engineering',
        techStack: ['React', 'TypeScript', 'Three.js', 'Spline', 'GSAP', 'Motion'],
        images: [
            '/projects/shots/aethera-0.webp',
            '/projects/shots/aethera-1.webp',
            '/projects/shots/aethera-2.webp',
        ],
        liveUrl: 'https://my-web-3d-design.vercel.app',
    },
    {
        title: 'HBS Shop Inventory',
        slug: 'hbs-inventory',
        kind: 'work',
        category: 'Client business app',
        year: 2026,
        status: 'Live',
        tagline: 'Purchase and stock tracking for a retail shop, behind a secure login.',
        overview:
            'An internal tool for a shop owner to record purchases and keep inventory accurate.',
        highlights: [
            'Supabase auth and Postgres with server-side sessions.',
            'Zod validation on every form and API route.',
        ],
        role: 'Full-stack engineer',
        techStack: ['Next.js', 'TypeScript', 'Supabase', 'Zod'],
        images: ['/projects/shots/hbs-inventory-0.webp'],
        liveUrl: 'https://hbs-shop-inventory.vercel.app',
        sourceCode: 'https://github.com/M-Ahmad069/Purchase-inventory-App',
    },
    {
        title: 'FitGo',
        slug: 'fitgo',
        kind: 'work',
        category: 'AI fitness app · Laravel',
        year: 2026,
        status: 'Source',
        tagline:
            'Keto quiz onboarding, personal diet and workout plans from OpenAI, and a coach chat.',
        overview:
            'A Laravel 11 app that generates plans with OpenAI and falls back to rule-based plans when the model is unavailable, so users always get a result.',
        highlights: [
            'OpenAI plan generation with rule-based fallbacks.',
            'Dashboard, coach chat and MySQL-backed API routes.',
        ],
        role: 'Full-stack engineer',
        techStack: ['Laravel 11', 'PHP', 'MySQL', 'OpenAI', 'Blade'],
        images: ['/projects/shots/fitgo-0.webp'],
        sourceCode: 'https://github.com/M-Ahmad069/myKateGo_App',
    },
    {
        title: 'Commerce REST + GraphQL API',
        slug: 'commerce-api',
        kind: 'work',
        category: 'API design',
        year: 2026,
        status: 'Source',
        tagline:
            'A versioned product API served as REST and GraphQL, with idempotent updates and field selection.',
        overview:
            'An API designed the way production APIs need to be: versioned routes, safe retries and clients that fetch only the fields they need.',
        highlights: [
            'Versioned REST routes alongside a GraphQL schema over the same data.',
            'Idempotency keys so retried updates never apply twice.',
        ],
        role: 'Backend engineer',
        techStack: ['Node.js', 'Express', 'GraphQL'],
        images: ['/projects/shots/commerce-api-0.webp'],
        sourceCode:
            'https://github.com/M-Ahmad069/csc337-ecommerce-rest-graphql-api',
    },
    {
        title: 'CV Generator',
        slug: 'cv-generator',
        kind: 'work',
        category: 'Document tool',
        year: 2026,
        status: 'Source',
        tagline:
            'Fill in a form, watch the CV update live, export it as PDF or Word.',
        overview:
            'A dependency-light CV builder with live preview, professional templates and export to PDF and DOC.',
        highlights: [
            'Live preview that re-renders as you type.',
            'Export to PDF and DOC from the browser.',
        ],
        role: 'Frontend engineer',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        images: ['/projects/shots/cv-generator-0.webp'],
        sourceCode: 'https://github.com/M-Ahmad069/cv-generator',
    },
];

const list = (items: string[]) =>
    `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

export const PROJECTS: IProject[] = PROJECT_DATA.map((p) => ({
    title: p.title,
    slug: p.slug,
    year: p.year,
    description: `<span class="text-primary font-medium">${p.category} · ${p.status}</span><br/><br/>${p.tagline}<br/><br/>${p.overview}${list(p.highlights)}`,
    role: p.role,
    techStack: p.techStack,
    thumbnail: p.images[0],
    longThumbnail: p.images[0],
    images: p.images,
    liveUrl: p.liveUrl,
    sourceCode: p.sourceCode,
}));

export const MY_EXPERIENCE = [
    {
        title: 'AI Systems Architect',
        company: 'Agentic engineering · independent',
        duration: 'Present',
        points: [
            'Design the architecture first: data model, tenancy, security rules, APIs and specs that AI agents build against.',
            'Orchestrate multiple AI coding agents (Claude Code, Codex, Cursor) in parallel git worktrees, each on its own slice.',
            'Connect agents to real infrastructure through MCP: Supabase, Vercel, GitHub and a live browser for testing.',
            'Gate every change with type checks, tests, code and security review and a preview deploy before it reaches users.',
            'Write reusable agent skills that encode my standards, so quality holds as output scales.',
        ],
    },
    {
        title: 'Founder & Lead Engineer',
        company: 'Elaviqo',
        duration: '2024 – Present',
        points: [
            'Took a single-salon system to a multi-tenant SaaS running a paying salon’s daily sales.',
            'Automated the busywork: WhatsApp receipts, review requests, push notifications, loyalty and one-tap app updates.',
            'Shipped web, Windows, Mac and Android apps from one codebase with auto-updates.',
            'Own product, architecture, security, releases and customer support.',
        ],
    },
    {
        title: 'Independent Product Engineer',
        company: 'SoftScroll · FitGenius · client work',
        duration: 'Ongoing',
        points: [
            'Build and run my own AI and consumer products alongside client platforms and internal tools.',
            'Deliver end to end: requirements, architecture, build, deployment and handover.',
        ],
    },
    {
        title: 'Software Developer (part-time)',
        company: 'Nerdware Tech',
        duration: '1 year',
        points: [
            'Built and maintained client web applications on the MERN stack.',
            'Turned client requirements into working features and improved performance and responsiveness.',
        ],
    },
    {
        title: 'V-Spark 2026 · Team 15',
        company: 'Achievement',
        duration: '2026',
        points: [
            'Built and deployed CaptionFlow, an AI caption generator and scheduler, in a one-hour web development challenge.',
        ],
    },
    {
        title: 'BS Software Engineering',
        company: 'COMSATS University Islamabad, Vehari',
        duration: '2024 – Present',
        points: [
            'Security lab: built a deliberately vulnerable Express shop, fixed it and proved the fixes with 18 tests.',
        ],
    },
];
