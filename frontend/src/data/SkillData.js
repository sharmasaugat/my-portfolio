import { Code2, Cloud, Database, Cpu, Code, Layout, LayoutGrid, Layers } from 'lucide-react';  // Add these imports

export const radarSkills = [
  {
    subject: 'Enterprise Architecture',
    level: 95,
    icon: Cpu,  // Just pass the component reference, don't instantiate it
    details: [
      'Event-Driven Architecture',
      'Domain-Driven Design',
      'Microservices',
      'API Gateway',
      'CQRS/Event Sourcing',
      'Multi Layered Architecture'
    ],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    subject: 'Cloud Computing',
    level: 70,
    icon: Cloud,
    details: [
      'AWS Services',
      'Azure Cloud',
      'Kubernetes',
      'Docker',
      'Serverless Architecture',
      'Cloud Infrastructure'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    subject: 'Full Stack Development',
    level: 88,
    icon: Code2,
    details: [
      'React/Angular',
      'Node.js/Express',
      'Java/Spring',
      'C#/.NET Core',
      'Python/Django',
      'TypeScript'
    ],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    subject: 'Database Design',
    level: 95,
    icon: Database,
    details: [
      'SQL Optimization',
      'NoSQL Solutions',
      'Data Modeling',
      'Query Performance',
      'Database Architecture',
      'Data Migration'
    ],
    color: 'from-rose-500 to-pink-500'
  }
];

export const overviewSkills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Expertise in modern JavaScript frameworks including React, Vue, and Angular with focus on responsive and interactive UIs"
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Proficient in Node.js, Python, Java, and C# with extensive experience in database design and API development"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Creating intuitive user experiences with modern design patterns and responsive layouts using latest technologies"
  },
  {
    icon: Cpu,
    title: "System Architecture",
    description: "Designing scalable, maintainable systems using microservices, event-driven architecture, and cloud-native solutions"
  }
];

// Additional categorized skills for potential future use
export const technicalSkills = {
  languages: [
    'JavaScript/TypeScript',
    'Python',
    'Java',
    'C#',
    'PHP',
    'SQL'
  ],
  frontend: [
    'React',
    'Angular',
    'Vue.js',
    'Next.js',
    'Tailwind CSS',
    'Material-UI'
  ],
  backend: [
    'Node.js',
    'Express',
    'Django',
    'Spring Boot',
    '.NET Core',
    'Laravel'
  ],
  databases: [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Redis',
    'Elasticsearch',
    'DynamoDB'
  ],
  cloud: [
    'AWS',
    'Azure',
    'Google Cloud',
    'Docker',
    'Kubernetes',
    'Terraform'
  ],
  tools: [
    'Git',
    'Jenkins',
    'GitHub Actions',
    'Jira',
    'Swagger',
    'Postman'
  ]
};

export const skillTabs = {
  overview: {
    icon: LayoutGrid,
    title: 'Overview'
  },
  details: {
    icon: Layers,
    title: 'Technical Skills'
  }
};
