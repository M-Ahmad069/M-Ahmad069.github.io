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
        title: 'Client Websites',
        slug: 'client-websites',
        year: 2024,
        description: `
      Designed and developed multiple business websites for local clients. <br/> <br/>
      
      Focus Areas:<br/>
      <ul>
        <li>📱 Responsive design for all devices</li>
        <li>🔍 SEO-friendly layouts and structure</li>
        <li>⚡ Performance optimization</li>
        <li>🎨 Customized UI based on client branding</li>
        <li>💼 Client requirement analysis and implementation</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Delivered multiple client projects:
      <ul>
        <li>✅ Analyzed client requirements and business needs</li>
        <li>🎨 Designed and developed custom UI/UX solutions</li>
        <li>📱 Ensured responsive design across all devices</li>
        <li>🔍 Implemented SEO best practices</li>
        <li>⚡ Optimized performance and loading times</li>
        <li>🚀 Deployed and maintained client websites</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React.js',
            'MongoDB',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
    },
    {
        title: 'Personal Web Applications',
        slug: 'personal-web-applications',
        year: 2023,
        description: `
      Developed practice and portfolio projects to enhance full stack development skills. <br/> <br/>
      
      Implemented Features:<br/>
      <ul>
        <li>🔄 CRUD operations</li>
        <li>🔐 Authentication systems</li>
        <li>📊 Dashboard interfaces</li>
        <li>🏗️ Full stack architecture</li>
        <li>🧩 Problem solving and optimization</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Built various personal projects:
      <ul>
        <li>✅ Implemented complete CRUD functionality</li>
        <li>🔐 Developed authentication and authorization systems</li>
        <li>📊 Created interactive dashboard interfaces</li>
        <li>🏗️ Designed and implemented full stack architecture</li>
        <li>🧩 Solved complex problems and optimized performance</li>
        <li>📚 Enhanced skills in MERN stack development</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
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
