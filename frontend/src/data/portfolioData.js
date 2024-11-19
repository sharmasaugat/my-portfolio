import { 
  Clock,
  Users,
  Zap,
  CheckCircle2
} from 'lucide-react';

const portfolioData = {
  credentials: [
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
  ],
  experiences: [
    {
      company: 'Tyler Technologies Inc',
      position: 'Full-Stack Software Engineer',
      period: 'April 2023 – Present',
      metrics: [
        { label: 'Migration Progress', value: 40, suffix: '%' },
        { label: 'API Performance↑', value: 40, suffix: '%' },
        { label: 'Test Coverage', value: 85, suffix: '%' },
        { label: 'Legacy Systems', value: 3, suffix: '' }
      ],
      achievements: [
        'Contributing developer in legacy to cloud migration team for Fargo City ERP system',
        'Developed and maintained Angular components and .NET Core APIs for cloud migration project',
        'Implemented caching solutions improving query response times by 40%',
        'Built automated test suites achieving 85% code coverage for new features',
        'Collaborated with senior developers to establish coding standards',
        'Participated in code reviews and documentation of cloud migration processes',
        'Assisted in monitoring and resolving production issues through logging implementation'
      ]
    },
    {
      company: 'American Bureau of Shipping',
      position: 'Full-Stack Software Engineer',
      period: 'May 2022 – April 2023',
      metrics: [
        { label: 'Auth Success Rate', value: 99.9, suffix: '%' },
        { label: 'Charts Created', value: 15, suffix: '+' },
        { label: 'API Response↓', value: 45, suffix: '%' },
        { label: 'Active Users', value: 500, suffix: '+' }
      ],
      achievements: [
        'Implemented secure authentication system using JWT tokens and Azure AD integration',
        'Developed NS login module supporting single sign-on for maritime personnel portal',
        'Created RESTful APIs powering dynamic PowerBI chart visualizations for vessel data',
        'Built custom chart endpoints handling complex vessel inspection metrics and KPIs',
        'Optimized chart data queries reducing dashboard load times by 45%',
        'Integrated real-time data refresh for live vessel tracking visualizations',
        'Implemented role-based access control for sensitive maritime data endpoints',
        'Maintained detailed API documentation for chart integration endpoints'
      ]
    }
  ],
  skills: [
    { name: 'React', level: 90 },
    // ...rest of skills
  ],
  metrics: [
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
  ],
  // Derived data
  radarSkills() {
    return this.skills.map(skill => ({
      name: skill.name,
      value: skill.level
    }));
  }
};

export default portfolioData;
