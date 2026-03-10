import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'muhammad.ahmad3963@gmail.com',
    phone: '0310-6113103',
    location: 'Vehari, Pakistan',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Muhammad Ahmad, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/M-Ahmad069' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-ahmad-085230382/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Salon Management System',
        slug: 'salon-management-system',
        year: 2024,
        description: `
      A full-stack management system for salon owners to run appointments, staff, services, and client data from a single dashboard. <br/><br/>
      <ul>
        <li>Designed a role-based management system for clients, staff, and admins to reduce manual coordination.</li>
        <li>Implemented RESTful APIs with Node.js, Express.js, and MongoDB to handle appointments, services, and reporting securely.</li>
        <li>Built a responsive Next.js frontend with an admin dashboard for real-time insights into bookings and business performance.</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Delivered the complete solution from database design and backend APIs to dashboard UI and deployment.</li>
        <li>Structured the architecture for scalability so new modules (billing, inventory, branches) can be added without major refactors.</li>
        <li>Collaborated closely with stakeholders to align workflows with real salon operations and internal processes.</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
        ],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
    },
    {
        title: 'AI-Based Fitness & Nutrition Planner',
        slug: 'ai-based-fitness-nutrition-planner',
        year: 2025,
        description: `
      A web-based planner for individuals who want structured workouts, nutrition tracking, and progress insights in one place. <br/><br/>
      <ul>
        <li>Built a modern Next.js interface with modular components for dashboards, workout planning, and meal tracking.</li>
        <li>Integrated AI-powered recommendation flows to generate realistic workout and nutrition plans based on user goals.</li>
        <li>Focused on performance and data visualization with charts and summaries that make progress easy to understand at a glance.</li>
      </ul>
      `,
        role: `
      Full Stack / Frontend Developer <br/>
      <ul>
        <li>Designed the overall application structure, routing, and state management for a scalable, component-based architecture.</li>
        <li>Implemented reusable UI patterns and layout systems to keep the experience consistent across all pages.</li>
        <li>Ensured responsive behavior and clean UX across desktop and mobile for real-world usage.</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React.js',
            'JavaScript',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/ai-fitness-planner.jpg',
        longThumbnail: '/projects/long/ai-fitness-planner.jpg',
        images: [
            '/projects/images/ai-fitness-planner-1.png',
            '/projects/images/ai-fitness-planner-2.png',
            '/projects/images/ai-fitness-planner-3.png',
            '/projects/images/ai-fitness-planner-4.png',
        ],
    },
    {
        title: 'Smart Business Management Platform',
        slug: 'smart-business-management-platform',
        year: 2024,
        description: `
      A management platform for service-based businesses to track bookings, customers, staff performance, and revenue in real time. <br/><br/>
      <ul>
        <li>Designed a dashboard-first experience that surfaces KPIs like revenue, utilization, and booking trends in real time.</li>
        <li>Implemented a secure MERN-based backend with JWT authentication and role-based access for teams and admins.</li>
        <li>Structured the system into clear domains (bookings, customers, staff, services) to keep the codebase maintainable as features grow.</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      <ul>
        <li>Owned the full stack: API design, database modeling, business logic, and responsive dashboard UI.</li>
        <li>Optimized queries and API responses around real usage patterns to keep the platform fast under growing data.</li>
        <li>Built flexible components so new analytics widgets and modules can be added without redesigning the core layout.</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React.js',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/smart-business-platform.jpg',
        longThumbnail: '/projects/long/smart-business-platform.jpg',
        images: [
            '/projects/images/smart-business-platform-1.png',
            '/projects/images/smart-business-platform-2.png',
            '/projects/images/smart-business-platform-3.png',
            '/projects/images/smart-business-platform-4.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Freelance Full Stack Developer',
        company: 'Freelance / Remote',
        duration: 'Ongoing',
    },
];
