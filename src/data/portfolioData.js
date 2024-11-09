import { 
  Clock,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const credentials = [
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    badgeUrl: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    credlyUrl: "https://www.credly.com/badges/3a2aa7e6-abaa-4b4d-863f-ca2a2149302e/linked_in_profile",
    skills: ['Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation', 'S3', 'ECS']
  },
  {
    title: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    badgeUrl: "https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png",
    credlyUrl: "https://www.credly.com/badges/0631d266-f692-4642-b32d-ca082fb5f11e/linked_in_profile",
    skills: ['Azure Functions', 'App Service', 'CosmosDB', 'Azure AD', 'Service Bus']
  }
];

export const experiences = [
  {
    company: 'Tyler Technologies Inc',
    position: 'Full-Stack Software Engineer',
    period: 'April 2023 – Present',
    metrics: [
      { label: 'Transactions/sec', value: 10000, suffix: '+' },
      { label: 'Response Time↓', value: 80, suffix: '%' },
      { label: 'Bug Reduction', value: 90, suffix: '%' },
      { label: 'Feature Growth', value: 200, suffix: '%' }
    ],
    achievements: [
      'Engineered high-performance data processing system with 99.999% uptime',
      'Lead developer for microservices migration using .NET Core and Angular 15',
      'Developed standardized Angular component library reducing development time by 40%',
      'Optimized API response times from 500ms to 50ms using caching and query optimization',
      'Implemented comprehensive error logging and monitoring using Application Insights',
      'Architected and deployed cloud-native solutions on Azure using AKS and Azure Functions',
      'Mentored junior developers and conducted code reviews to maintain code quality'
    ]
  },
  {
    company: 'American Bureau of Shipping',
    position: 'Full-Stack Software Engineer',
    period: 'May 2022 – April 2023',
    metrics: [
      { label: 'Performance↑', value: 35, suffix: '%' },
      { label: 'Deploy Time↓', value: 40, suffix: '%' },
      { label: 'DB Performance↑', value: 30, suffix: '%' },
      { label: 'Dev Cycle↓', value: 30, suffix: '%' }
    ],
    achievements: [
      'Orchestrated transition from monolithic to microservices architecture using Spring Boot',
      'Developed and maintained RESTful APIs using Spring Data JPA and PostgreSQL',
      'Implemented OAuth2 authentication and role-based access control',
      'Enhanced database performance through query optimization and indexing',
      'Led the adoption of automated testing practices, achieving 85% code coverage',
      'Reduced deployment time by 40% through CI/CD pipeline optimization'
    ]
  }
];

export const skills = [
  { name: 'React', level: 90 },
  // ...rest of skills
];

export const certifications = [
  // ...your certifications
];

export const metrics = [
  {
    icon: Clock,
    label: "Response Time Improvement",
    value: 80,
    suffix: "%",
    color: "indigo"
  },
  {
    icon: Zap,
    label: "Performance Boost",
    value: 200,
    suffix: "%",
    color: "indigo"
  },
  {
    icon: Users,
    label: "Team Productivity",
    value: 40,
    suffix: "%",
    color: "indigo"
  },
  {
    icon: CheckCircle2,
    label: "Bug Reduction",
    value: 90,
    suffix: "%",
    color: "indigo"
  }
];

// Derived data
export const performanceData = metrics;

// Calculate radar skills from the skills array
export const radarSkills = skills.map(skill => ({
  name: skill.name,
  value: skill.level
}));

// Export a single object with all the data
const portfolioData = {
  metrics,
  skills,
  certifications,
  performanceData,
  radarSkills
};

export default portfolioData;
