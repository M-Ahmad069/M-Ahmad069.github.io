import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ahmadawais32320@gmail.com',
    phone: '0310-6113103',
    location: 'Vehari, Pakistan',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Muhammad Ahmad, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/M-Ahmad069' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ahmad-awais-9121641b2/' },
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
      A complete, large-scale solution designed for salon businesses. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>👥 Client & staff management</li>
        <li>📅 Appointment booking system</li>
        <li>💼 Services & pricing management</li>
        <li>📊 Admin dashboard with analytics</li>
        <li>🔐 Authentication & role-based access</li>
        <li>📱 Responsive UI for desktop & mobile</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Developed a complete salon management solution:
      <ul>
        <li>✅ Backend: Built RESTful APIs using Node.js and Express.js</li>
        <li>🎨 Frontend: Created responsive UI using Next.js and React.js</li>
        <li>💾 Database: Implemented data models and relationships in MongoDB</li>
        <li>🔐 Security: Implemented authentication and authorization systems</li>
        <li>📊 Analytics: Built admin dashboard with business insights</li>
        <li>🚀 Deployment: Configured and deployed on Vercel/Netlify</li>
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
      A modern fitness and nutrition web application designed to help users plan workouts, track daily activity, monitor nutrition, and visualize progress through an intuitive and premium dashboard interface. <br/> <br/>
      
      The application focuses on user experience, data visualization, and performance, combining fitness planning with smart insights to create a realistic, production-ready product. <br/> <br/>
      
      Key Pages Implemented:<br/>
      <ul>
        <li>📊 Dashboard - Daily activity summary, calories, steps, and workouts overview with weekly progress charts</li>
        <li>🏋️ Workouts Page - Workout categories, daily planner, suggested workouts with duration & calorie burn</li>
        <li>🍎 Nutrition Page - Meal tracking, calorie and macro breakdown, food history, nutrition goals</li>
        <li>📈 Progress Page - Visual charts for weekly progress, performance comparison, goal completion tracking</li>
      </ul>
      <br/>
      Core Features:<br/>
      <ul>
        <li>🧭 Sidebar navigation with active state handling</li>
        <li>📊 Interactive charts & data visualization</li>
        <li>🏋️ Workout planning & scheduling</li>
        <li>🍎 Nutrition & calorie tracking</li>
        <li>📅 Daily and weekly activity insights</li>
        <li>🎨 Premium, clean, and modern UI</li>
        <li>📱 Responsive design for all screen sizes</li>
        <li>⚡ Optimized layout for performance and usability</li>
      </ul>
      `,
        role: `
      Full-Stack / Frontend Developer <br/>
      Designed and built a complete fitness and nutrition web application:
      <ul>
        <li>✅ Designed the complete UI/UX flow with focus on user experience</li>
        <li>🎨 Built reusable UI components with component-based architecture</li>
        <li>📊 Implemented dashboard layouts and navigation with sidebar handling</li>
        <li>📈 Integrated interactive charts and data visualization for progress tracking</li>
        <li>🏗️ Structured scalable project architecture for maintainability</li>
        <li>🎯 Focused on real-world usability and polish for production-ready quality</li>
        <li>📱 Ensured responsive design across all screen sizes</li>
        <li>⚡ Optimized layout for performance and usability</li>
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
      A full-stack business management web application designed to help service-based businesses (salons, agencies, consultancies) manage operations, customers, staff performance, and revenue analytics from a single centralized dashboard. <br/> <br/>
      
      The platform focuses on real-time insights, role-based workflows, and scalable architecture, delivering a production-grade experience similar to modern SaaS tools. <br/> <br/>
      
      Core Features:<br/>
      <ul>
        <li>📊 Advanced Dashboard Analytics - Revenue tracking, booking trends, customer acquisition sources</li>
        <li>📅 Booking & Appointment Management - Real-time booking status, service-based scheduling</li>
        <li>👥 Customer Management System - Customer profiles, engagement tracking, activity logs</li>
        <li>🧑‍💼 Staff Performance Monitoring - Individual revenue contribution, performance analytics</li>
        <li>🔐 Authentication & Authorization - JWT-based authentication, role-based access control</li>
        <li>⚙️ Admin Controls - Service management, pricing configuration, system panels</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Designed and implemented complete full-stack architecture:
      <ul>
        <li>✅ Built reusable and scalable UI components with React.js and Next.js</li>
        <li>🔐 Developed RESTful APIs for all core features using Node.js and Express.js</li>
        <li>💾 Implemented secure authentication & authorization with JWT</li>
        <li>📊 Optimized database queries and API performance with MongoDB</li>
        <li>🎨 Created responsive layouts for all screen sizes with Tailwind CSS</li>
        <li>📈 Integrated analytics and data visualization for real-time insights</li>
        <li>🧩 Handled real-world edge cases and complex business logic</li>
        <li>🚀 Designed scalable dashboard layout for complex data management</li>
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
        title: 'Software Engineer (Frontend)',
        company: 'Strativ AB',
        duration: 'Dec 2024 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'Frontend Engineer',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
];
