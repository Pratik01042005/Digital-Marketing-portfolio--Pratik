export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  typeTag: "Internship Project" | "Self-Initiated Project" | "Live Project" | "Concept Project" | "Real Account Management";
  image: string;
  websiteUrl?: string;
  instagramHandle?: string;
  caseStudy: {
    overview: string;
    objective: string;
    targetAudience: string;
    contentPillars: string[];
    strategy: string[];
    deliverables: string[];
    samplePostCaption?: string;
    hashtags?: string[];
  };
}

export interface CreativeItem {
  id: string;
  title: string;
  category: "Social Media Posts" | "Instagram Stories" | "Promotional Creatives" | "Carousel Designs" | "Branding" | "Campaign Creatives" | "Reels";
  image: string;
  description: string;
  canvaTemplate: boolean;
  tags: string[];
  instagramUrl?: string;
}

export interface CalendarDay {
  day: number;
  title: string;
  category: "Educational" | "Engagement" | "Promotional" | "Brand Awareness" | "Trending" | "Behind The Scenes";
  platform: string;
  format: "Single Image Post" | "Carousel (5 slides)" | "Instagram Reel Concept" | "Story Series";
  hook: string;
  captionPreview: string;
  visualConcept: string;
  hashtags: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  status: "Completed";
  description: string;
  topicsLearned: string[];
  learningType: "Practical Exposure & Coursework";
}

export const PERSONAL_INFO = {
  name: "Pratik Lagad",
  location: "Pune, Maharashtra, India",
  role: "Digital Marketing & Social Media | Creative + Analytics Focused",
  subRole: "Social Media Experience (@pratik.ide) • SEO Analytics • Horyzen Training • Power BI",
  headline: "Turning Ideas & Data Into Digital Experiences That Connect.",
  professionalPositioning: "Digital Marketing & Social Media enthusiast with hands-on experience managing Instagram content (@pratik.ide 65K+ reach), completed Digital Marketing training at Horyzen Technologies, combined with Power BI SEO analytics and trend analysis skills.",
  supportingText: "B.Tech in Robotics & Automation student with a Diploma in Computer Engineering. Managing real Instagram account @pratik.ide (65K+ monthly reach), completed 2-month Digital Marketing course at Horyzen Technologies, with hands-on SEO analytics experience.",
  aboutSummary: "Seeking Digital Marketing opportunities where I can apply analytical and creative skills in social media marketing, content marketing, brand promotion and digital strategy. Currently managing Instagram account @pratik.ide (achieving 65K+ reach in the previous month), completed a 2-month Digital Marketing course at Horyzen Technologies, with background in Power BI SEO dashboards and website development.",
  email: "pratiklagad2005@gmail.com",
  phone: "+91 9156776198",
  instagramAccount: "@pratik.ide",
  instagramReach: "65K+ Reach — Previous Month",
  socials: {
    linkedin: "https://www.linkedin.com/in/pratik-lagad-50604b2b6/",
    instagram: "https://instagram.com/pratik.ide",
    instagramPersonal: "https://www.instagram.com/pratiklagad/",
    github: "https://github.com/Pratiklagad",
    whatsapp: "https://wa.me/919156776198"
  },
  skillsBadges: ["65K+ IG Reach (@pratik.ide)", "Horyzen Trained", "SEO Analytics", "Power BI Dashboards", "Canva Design"],
  targetRoles: [
    "Digital Marketing Intern",
    "Digital Marketing Executive",
    "Social Media Intern",
    "Social Media Executive",
    "Marketing Analyst",
    "SEO Analyst Intern",
    "Content Marketing Intern",
    "Digital Marketing Analyst"
  ]
};

export const SOCIAL_MEDIA_EXPERIENCE = {
  handle: "@pratik.ide",
  platform: "Instagram",
  status: "Currently Managed",
  monthlyReach: "65K+",
  reachLabel: "Instagram Reach — Previous Month",
  profileUrl: "https://instagram.com/pratik.ide",
  caseStudyTitle: "Growing an Instagram Presence",
  keyResult: "65K+ Reach in the Previous Month",
  role: "Social Media Management",
  supportingMessage: "Built through consistent social media content, creative execution and audience-focused content strategy.",
  responsibilities: [
    "Content Planning",
    "Content Creation",
    "Canva Design",
    "Posting & Publishing",
    "Caption Writing",
    "Hashtag Research",
    "Trend Research",
    "Audience Engagement",
    "Performance Monitoring",
    "Content Optimization"
  ]
};

export const TRAINING_DATA: TrainingItem[] = [
  {
    id: "train-horyzen",
    title: "Digital Marketing Course",
    institution: "Horyzen Technologies",
    duration: "2 Months",
    status: "Completed",
    description: "Completed a 2-month Digital Marketing course at Horyzen Technologies, gaining practical exposure to digital marketing concepts, social media, content creation, brand promotion and digital marketing strategy.",
    topicsLearned: [
      "Digital Marketing Fundamentals",
      "Social Media Marketing",
      "Content Creation",
      "Canva Graphic Styling",
      "Brand Promotion Concepts",
      "Content Strategy Basics",
      "SEO Fundamentals",
      "Campaign Planning",
      "Digital Analytics Basics"
    ],
    learningType: "Practical Exposure & Coursework"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    number: "01",
    title: "Social Media Management",
    description: "Planning, publishing and managing real-world Instagram content (@pratik.ide) focused on audience reach and brand presence.",
    icon: "Share2",
    features: ["Posting Cadence", "65K+ Monthly Reach Execution", "Profile Optimization", "Community Building"]
  },
  {
    id: "s2",
    number: "02",
    title: "Canva & Creative Design",
    description: "Creating professional social media posts, stories, promotional graphics, carousels, and visual branding assets.",
    icon: "Palette",
    features: ["Instagram Carousels", "Story Banners", "Promotional Graphics", "Brand Style Kits"]
  },
  {
    id: "s3",
    number: "03",
    title: "Content Marketing & Creation",
    description: "Developing compelling captions, post ideas, educational carousels, and digital content aligned with audience demand.",
    icon: "Sparkles",
    features: ["Hook Copywriting", "Content Pillars", "Trend Research", "Visual Storytelling"]
  },
  {
    id: "s4",
    number: "04",
    title: "SEO & Keyword Analytics",
    description: "Analyzing search trends, tracking rankings, and building Power BI dashboards to support data-driven optimization.",
    icon: "Target",
    features: ["Power BI Dashboards", "Keyword Tracking", "Trend Radar", "Performance Reporting"]
  },
  {
    id: "s5",
    number: "05",
    title: "Content Strategy & Planning",
    description: "Developing 30-day posting calendars, audience personas, and structured launch roadmaps.",
    icon: "Compass",
    features: ["Content Pillars", "30-Day Calendars", "Competitor Research", "Audience Alignment"]
  },
  {
    id: "s6",
    number: "06",
    title: "Brand Promotion & Presence",
    description: "Helping businesses establish strong online presence through consistent digital presentation and web deployment.",
    icon: "TrendingUp",
    features: ["Corporate Website Presence", "Offer Promotion", "Visual Identity", "Digital Footprint"]
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Research",
    subtitle: "Audience + Keyword Research",
    description: "Analyzing target demographics, keyword rankings, and competitor positioning to identify content demand.",
    icon: "Search"
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Campaign Goals + Content Pillars",
    description: "Defining clear campaign objectives, content pillars, tone of voice, and structured posting roadmaps.",
    icon: "Compass"
  },
  {
    number: "03",
    title: "Create",
    subtitle: "Canva + Copy + Visual Assets",
    description: "Designing pixel-perfect Canva graphics, writing engaging captions with strong hooks, and crafting carousels.",
    icon: "PenTool"
  },
  {
    number: "04",
    title: "Publish",
    subtitle: "Social Media Platforms",
    description: "Deploying content across Instagram (@pratik.ide), LinkedIn, Facebook, and web properties at peak audience hours.",
    icon: "Send"
  },
  {
    number: "05",
    title: "Analyze",
    subtitle: "Reach + Power BI SEO Analytics",
    description: "Tracking monthly reach (65K+ on @pratik.ide), ranking trends, and performance data in dashboards.",
    icon: "BarChart3"
  },
  {
    number: "06",
    title: "Optimize",
    subtitle: "Data-Driven Continuous Improvement",
    description: "Refining visual formats, topic selection, and keyword focus based on analytical insights.",
    icon: "Zap"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "DIGITAL MARKETING",
    icon: "Megaphone",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Social Media Management (@pratik.ide)", level: 95 },
      { name: "Digital Marketing Fundamentals", level: 92 },
      { name: "Social Media Marketing", level: 92 },
      { name: "Content Marketing", level: 90 },
      { name: "Content Creation", level: 94 },
      { name: "Brand Promotion", level: 88 },
      { name: "SEO Analytics", level: 86 },
      { name: "Campaign Analysis", level: 85 }
    ]
  },
  {
    title: "ANALYTICS & RESEARCH",
    icon: "BarChart3",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Dashboard Development", level: 90 },
      { name: "Data Visualization", level: 94 },
      { name: "Data Analysis", level: 88 },
      { name: "Data Science", level: 82 },
      { name: "Trend Analysis", level: 90 },
      { name: "Keyword & Ranking Analysis", level: 85 },
      { name: "Research & Reporting", level: 92 }
    ]
  },
  {
    title: "COMMUNICATION & STRATEGY",
    icon: "MessageSquare",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Presenting Insights", level: 90 },
      { name: "Documentation", level: 92 },
      { name: "Teamwork & Collaboration", level: 95 },
      { name: "Problem Solving", level: 90 },
      { name: "Creative Thinking", level: 94 }
    ]
  },
  {
    title: "WEB & TOOLS",
    icon: "Code",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Website Development", level: 90 },
      { name: "App Development", level: 85 },
      { name: "UI/UX Implementation", level: 88 },
      { name: "Git & GitHub", level: 88 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-seo-dashboards",
    title: "SEO Dashboards — Power BI",
    category: "SEO Analytics / Marketing Analytics",
    shortDescription: "Interactive Power BI dashboards developed to visualize SEO performance data, identify important trends and support data-driven recommendations for improving online visibility.",
    fullDescription: "A specialized marketing analytics project creating interactive Power BI dashboards to track organic search rankings, keyword distribution, impressions, and performance bottlenecks, enabling clear data-backed digital marketing decision making.",
    tools: ["Power BI", "SEO Analytics", "Data Visualization", "Keyword Analysis", "Reporting"],
    typeTag: "Internship Project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Developed structured Power BI dashboard layouts to transform raw SEO datasets into visual charts and keyword ranking metrics.",
      objective: "Visualize organic search performance data and communicate key insights clearly to team members and stakeholders.",
      targetAudience: "Marketing teams, SEO analysts, and business decision makers.",
      contentPillars: ["SEO Data Extraction", "Trend & Ranking Analysis", "Dashboard Visualization", "Actionable Recommendations"],
      strategy: [
        "Collected and structured raw SEO metric files including keywords, impressions, and ranking distribution.",
        "Designed clean Power BI data models with interactive filters for date ranges and search queries.",
        "Built visual KPI cards for impressions, position changes, and top-ranking keywords.",
        "Formulated data-backed recommendations for content strategy adjustments based on keyword ranking patterns."
      ],
      deliverables: ["Interactive Power BI Dashboard", "Keyword Ranking Trend Matrix", "SEO Insight Report"],
      samplePostCaption: "📊 Data-Driven Marketing Insight: Visualizing keyword ranking distribution in Power BI helps pinpoint exactly which content topics need optimization for organic visibility.",
      hashtags: ["#SEOAnalytics", "#PowerBI", "#DataDrivenMarketing", "#MarketingAnalytics", "#SEO"]
    }
  },
  {
    id: "proj-india-trend-radar",
    title: "India Trend Radar",
    category: "Social Media Trend Analytics",
    shortDescription: "A data science project using a trained model to identify social media trends across India and analyze trending keywords and rankings.",
    fullDescription: "A analytical bridge connecting Data Science, Social Media, and Content Strategy. Uses predictive modeling and keyword ranking algorithms to identify rising social topics and inform content planning.",
    tools: ["Data Science", "Trend Analysis", "Content Strategy", "Social Media Analytics"],
    typeTag: "Self-Initiated Project",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Developed a trend identification model focused on tracking viral topics, regional keyword spikes, and audience interest patterns across India.",
      objective: "Provide data-backed trend insights to inform content planning, topic selection, and timely social media campaign decisions.",
      targetAudience: "Content creators, social media managers, and digital marketing strategists.",
      contentPillars: ["Data Model Analysis", "Regional Trend Radar", "Keyword Velocity Tracking", "Content Strategy Bridge"],
      strategy: [
        "Collected social media search queries and trending keyword metrics across multiple Indian regions.",
        "Applied data analysis to group emerging topics by engagement momentum.",
        "Mapped trending keywords directly into actionable social media content calendar prompts.",
        "Evaluated topic longevity to distinguish short-term viral spikes from sustained content pillars."
      ],
      deliverables: ["Trend Analysis Model Setup", "Regional Keyword Index", "Content Planning Recommendation Framework"],
      samplePostCaption: "🚀 Trend Radar: Aligning your content calendar with real-time regional search trends increases organic reach and relevance. Here is how data meets creative strategy!",
      hashtags: ["#TrendAnalytics", "#SocialMediaStrategy", "#DataScience", "#ContentPlanning", "#DigitalMarketing"]
    }
  },
  {
    id: "proj-ig-management",
    title: "Growing an Instagram Presence (@pratik.ide)",
    category: "Social Media Management",
    shortDescription: "Real-world Instagram account management achieving 65K+ reach in the previous month through consistent social media content and creative execution.",
    fullDescription: "A real-world social media management case study for @pratik.ide focused on content planning, Canva creative design, hashtag research, and audience-focused content strategy.",
    tools: ["Instagram", "Canva Pro", "Content Strategy", "Hashtag Research", "65K+ Reach"],
    typeTag: "Real Account Management",
    instagramHandle: "@pratik.ide",
    websiteUrl: "https://instagram.com/pratik.ide",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Managing content cadence, visual carousels, reels concepts, and audience engagement on @pratik.ide.",
      objective: "Build brand visibility and achieve high organic reach through consistent value-first content.",
      targetAudience: "Digital enthusiasts, students, and social media audience.",
      contentPillars: ["Educational Carousels", "Creative Visual Posts", "Trending Reels Prompts", "Audience Interactions"],
      strategy: [
        "Planned content pillars around educational tips and creative visuals.",
        "Designed high-contrast Canva graphics with clear typography hierarchy.",
        "Crafted engaging captions starting with strong hook questions.",
        "Monitored reach performance metrics to refine posting schedules."
      ],
      deliverables: ["65K+ Monthly Reach Achievement", "Custom Canva Content Library", "Structured Posting Plan"],
      samplePostCaption: "✨ Consistent content planning + eye-catching Canva visuals = real audience reach. Check out @pratik.ide for more!",
      hashtags: ["#SocialMediaManagement", "#CanvaDesign", "#ContentStrategy", "#InstagramGrowth", "#Reach"]
    }
  },
  {
    id: "proj-etoe-website",
    title: "ETOE Website",
    category: "Web / Digital Presence",
    shortDescription: "Built and deployed a functional website to support ETOE's online presence, brand presentation, and digital visibility.",
    fullDescription: "A web development and digital brand presentation project creating a clean, responsive online website for ETOE to establish corporate credibility and clear audience communication.",
    tools: ["Website Development", "Brand Presentation", "UI/UX Implementation", "Digital Visibility"],
    typeTag: "Live Project",
    websiteUrl: "https://etoeproduction.com/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Designed and deployed the official ETOE website to serve as the primary digital destination for brand presentation and visitor engagement.",
      objective: "Establish a strong online presence, ensure fast page loading, and present company offerings clearly.",
      targetAudience: "Clients, industry partners, and prospective visitors.",
      contentPillars: ["Brand Identity", "Responsive UI/UX", "Service Presentation", "Digital Contact Channels"],
      strategy: [
        "Structured information architecture to highlight core services and brand values.",
        "Implemented responsive mobile and desktop layouts for seamless user experience.",
        "Optimized images and clean code structure for fast page load times and accessibility.",
        "Deployed the production website on domain infrastructure for reliable digital visibility."
      ],
      deliverables: ["Live Production Website (etoeproduction.com)", "Responsive UI/UX Implementation", "Digital Brand Showcase"],
      samplePostCaption: "🌐 Building a strong digital presence starts with a fast, clear, and responsive website that accurately reflects brand quality. Check out etoeproduction.com!",
      hashtags: ["#WebDevelopment", "#DigitalPresence", "#BrandShowcase", "#UIUX", "#DigitalMarketing"]
    }
  },
  {
    id: "proj-horyzen-website",
    title: "Horyzen Technologies Website",
    category: "Brand & Digital Presence",
    shortDescription: "Designed and developed the corporate website, presenting the company to clients and visitors online.",
    fullDescription: "A corporate digital presence project building the official website for Horyzen Technologies, positioning the company professionally through clear service navigation and clean visual hierarchy.",
    tools: ["Corporate Web Development", "UI/UX Design", "Brand Positioning", "Digital Strategy"],
    typeTag: "Live Project",
    websiteUrl: "https://horyzen.in/",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Created the corporate web platform for Horyzen Technologies to communicate tech capabilities, company overview, and client contact options.",
      objective: "Build corporate trust, present tech offerings clearly, and support digital marketing outreach.",
      targetAudience: "Corporate clients, business partners, and job applicants.",
      contentPillars: ["Corporate Trust", "Solution Highlights", "Clean UI Layout", "Direct Inquiry Options"],
      strategy: [
        "Designed clean corporate visual hierarchy with modern typography and dark theme elements.",
        "Structured company service offerings into clear navigable sections.",
        "Integrated direct contact channels for seamless lead generation.",
        "Tested cross-browser performance and mobile responsiveness."
      ],
      deliverables: ["Live Corporate Website (horyzen.in)", "Corporate Brand Presentation", "Mobile-Optimized Interface"],
      samplePostCaption: "💼 Corporate Digital Presence: Presenting technology solutions with clarity and precision on horyzen.in.",
      hashtags: ["#CorporateWebsite", "#DigitalBranding", "#HoryzenTechnologies", "#WebDesign", "#TechPresence"]
    }
  },
  {
    id: "proj-veg-basket",
    title: "Veg Basket",
    category: "Digital Product",
    shortDescription: "Built an e-commerce web application demonstrating product thinking, UI/UX implementation, and digital product development.",
    fullDescription: "A digital product development application focused on user interface design, catalog management, and shopping basket workflows.",
    tools: ["React", "UI/UX", "App Development", "Product Thinking"],
    typeTag: "Self-Initiated Project",
    websiteUrl: "https://fresh-basket-701be.web.app/",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Developed a functional digital product platform showcasing interactive product cards, category navigation, and checkout interface design.",
      objective: "Apply UI/UX design principles and frontend engineering to create an intuitive e-commerce user experience.",
      targetAudience: "Online shoppers and digital product reviewers.",
      contentPillars: ["Product Catalog UI", "User Flow Optimization", "Responsive Cart Layout", "Web Deployment"],
      strategy: [
        "Designed product cards with high quality visual previews and clear price tags.",
        "Implemented intuitive category filtering for fast item browsing.",
        "Deployed application to Firebase hosting for live access."
      ],
      deliverables: ["Live E-Commerce Web App", "Interactive Shopping Cart Flow", "Responsive UI Component Kit"],
      samplePostCaption: "🛒 Digital Product UI: Combining clean visual layouts with intuitive product navigation.",
      hashtags: ["#DigitalProduct", "#UIUX", "#WebApp", "#ProductDesign", "#Frontend"]
    }
  }
];

export const CREATIVE_ITEMS: CreativeItem[] = [
  {
    id: "c1",
    title: "@pratik.ide Brand Showcase Post",
    category: "Social Media Posts",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Minimal modern social graphic designed for @pratik.ide brand awareness.",
    canvaTemplate: true,
    tags: ["Social Post", "Canva Design", "@pratik.ide"],
    instagramUrl: "https://instagram.com/pratik.ide"
  },
  {
    id: "c2",
    title: "5 Content Pillars Educational Carousel",
    category: "Carousel Designs",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    description: "Multi-slide swipeable carousel breaking down social media management concepts.",
    canvaTemplate: true,
    tags: ["Carousel", "Educational", "Swipe Left"],
    instagramUrl: "https://instagram.com/pratik.ide"
  },
  {
    id: "c3",
    title: "@pratik.ide Interactive Story Banner",
    category: "Instagram Stories",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    description: "Vertical 9:16 story template tailored for poll questions and link clicks.",
    canvaTemplate: true,
    tags: ["Story", "Vertical", "Interactive"],
    instagramUrl: "https://instagram.com/pratik.ide"
  },
  {
    id: "c4",
    title: "Promo & Announcement Banner",
    category: "Promotional Creatives",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description: "High-contrast promotional creative for social media announcements.",
    canvaTemplate: true,
    tags: ["Promotional", "Banner", "Design"],
    instagramUrl: "https://instagram.com/pratik.ide"
  },
  {
    id: "c5",
    title: "Reels Concept Title Graphic",
    category: "Reels",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    description: "Reels video cover thumbnail design matching visual theme.",
    canvaTemplate: true,
    tags: ["Reels", "Video Cover", "Thumbnail"],
    instagramUrl: "https://instagram.com/pratik.ide"
  },
  {
    id: "c6",
    title: "Visual Identity & Style Palette",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Visual identity board pairing font hierarchies, primary branding colors, and layout rules.",
    canvaTemplate: true,
    tags: ["Branding", "Style Guide", "Color Palette"],
    instagramUrl: "https://instagram.com/pratik.ide"
  }
];

export const CALENDAR_DAYS: CalendarDay[] = [
  {
    day: 1,
    title: "Monthly Theme & Strategy Kickoff",
    category: "Brand Awareness",
    platform: "Instagram (@pratik.ide)",
    format: "Carousel (5 slides)",
    hook: "🚀 How consistent content planning built 65K+ monthly reach on @pratik.ide...",
    captionPreview: "Welcome to a new month of strategic content planning! Today we're breaking down how combining creative visuals with search analytics leads to higher audience engagement.",
    visualConcept: "Dark theme cover slide with bold typography, search metric callout, and swipe arrow indicator.",
    hashtags: ["#DigitalMarketing", "#ContentStrategy", "#SEOAnalytics", "#Reach"]
  },
  {
    day: 3,
    title: "5 SEO & Keyword Analytics Hacks",
    category: "Educational",
    platform: "Instagram & LinkedIn",
    format: "Carousel (5 slides)",
    hook: "💡 5 simple ways to find high-intent keywords for your next blog or post!",
    captionPreview: "Stop guessing what your audience is searching for! Here are 5 data analytics steps to identify rising keyword trends and structure your content pillars around real search demand.",
    visualConcept: "Step-by-step Power BI & keyword chart mockup slides with high-contrast highlight boxes.",
    hashtags: ["#SEOAnalytics", "#KeywordResearch", "#PowerBI", "#ContentMarketing"]
  },
  {
    day: 5,
    title: "Data vs Intuition in Marketing",
    category: "Engagement",
    platform: "Instagram Stories (@pratik.ide)",
    format: "Single Image Post",
    hook: "🤔 Do you rely more on creative intuition or analytics dashboards?",
    captionPreview: "The best marketing strategies use both! Creative content attracts attention, while data analytics measures what actually resonates. Drop your thoughts below!",
    visualConcept: "Split comparison graphic: Creative Canva Icon on Left vs Power BI Chart on Right = Balanced Strategy.",
    hashtags: ["#MarketingDebate", "#DataDrivenMarketing", "#CreativeStrategy", "#Analytics"]
  },
  {
    day: 8,
    title: "Behind The Power BI SEO Dashboard",
    category: "Behind The Scenes",
    platform: "LinkedIn",
    format: "Single Image Post",
    hook: "📊 Here is how raw search data gets transformed into actionable marketing insights...",
    captionPreview: "Ever wondered how Power BI dashboards help marketing teams spot performance trends? Here is a preview of an interactive SEO performance tracking layout!",
    visualConcept: "Clean screenshot layout of a Power BI SEO dashboard with annotated callout badges.",
    hashtags: ["#PowerBI", "#SEODashboard", "#MarketingAnalytics", "#DataVisualization"]
  },
  {
    day: 12,
    title: "Trend Radar Insights Spotlight",
    category: "Trending",
    platform: "Instagram (@pratik.ide)",
    format: "Carousel (5 slides)",
    hook: "🔥 How analyzing regional search trends helps you create viral-relevant content...",
    captionPreview: "Relevance is timing! By monitoring regional keyword velocity, content creators can publish on trending topics before they peak.",
    visualConcept: "Trend analytics visual layout showing regional search spikes and keyword momentum.",
    hashtags: ["#TrendAnalytics", "#ContentPlanning", "#SocialMediaTrends", "#DigitalStrategy"]
  },
  {
    day: 15,
    title: "Corporate Web Presence Case Study",
    category: "Promotional",
    platform: "LinkedIn",
    format: "Single Image Post",
    hook: "🌐 Why a clean corporate website is your #1 digital marketing asset...",
    captionPreview: "Your website is your digital storefront. Here is how building etoeproduction.com and horyzen.in established credible corporate visibility for growing businesses.",
    visualConcept: "Dual desktop laptop mockup showing clean website landing pages.",
    hashtags: ["#WebDevelopment", "#DigitalPresence", "#BrandStrategy", "#UIUX"]
  }
];

export const RESUME_DATA = {
  name: "Pratik Lagad",
  location: "Pune, Maharashtra, India",
  title: "Digital Marketing & Social Media | Creative + Analytics Focused",
  email: "pratiklagad2005@gmail.com",
  phone: "+91 9156776198",
  summary: "B.Tech in Robotics & Automation student with a Diploma in Computer Engineering, seeking Digital Marketing opportunities. Managing real Instagram account @pratik.ide (achieving 65K+ reach in the previous month), completed 2-month Digital Marketing course at Horyzen Technologies, with hands-on Power BI SEO dashboard development and website deployment.",
  education: [
    {
      degree: "B.Tech in Robotics and Automation",
      institution: "Affiliated University / Institute",
      status: "Pursuing / Student"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Affiliated Polytechnic / Institute",
      status: "Completed"
    }
  ],
  realWorldExperience: [
    {
      role: "Social Media Account Manager",
      entity: "@pratik.ide (Instagram)",
      period: "Current / Ongoing",
      highlights: [
        "Achieved 65K+ reach in the previous month on Instagram account @pratik.ide.",
        "Executed end-to-end content planning, Canva creative design, caption writing, and hashtag research.",
        "Monitored audience reach performance metrics to refine posting schedules."
      ]
    },
    {
      role: "Data Science & Analytics Intern",
      entity: "Athenura",
      period: "4 Months — Completed",
      highlights: [
        "Analyzed and prepared data to identify patterns and trends, supporting data-driven decision making.",
        "Developed SEO dashboards in Power BI to visualize performance data and communicate key insights.",
        "Interpreted results and documented insights in clear, structured reports."
      ]
    }
  ],
  trainingData: [
    {
      course: "Digital Marketing Course",
      institution: "Horyzen Technologies",
      duration: "2 Months",
      status: "Completed",
      highlights: [
        "Completed a 2-month Digital Marketing course at Horyzen Technologies.",
        "Gained practical exposure to digital marketing concepts, social media marketing, content creation, brand promotion, and digital strategy.",
        "Hands-on practice with Canva design, content strategy basics, and campaign planning."
      ]
    }
  ],
  skillGroups: [
    {
      category: "Digital Marketing & Social Media",
      items: ["Social Media Management (@pratik.ide)", "Digital Marketing Fundamentals", "Social Media Marketing", "Content Marketing", "Content Creation", "Brand Promotion", "SEO Analytics", "Digital Strategy Basics", "Campaign Analysis"]
    },
    {
      category: "Analytics & Research",
      items: ["Power BI", "Dashboard Development", "Data Visualization", "Data Analysis", "Data Science", "Trend Analysis", "Keyword & Ranking Analysis", "Research", "Reporting"]
    },
    {
      category: "Communication",
      items: ["Presenting Insights", "Documentation", "Teamwork", "Problem Solving", "Creative Thinking"]
    },
    {
      category: "Web & Tools",
      items: ["Website Development", "App Development", "UI/UX Implementation", "Git/GitHub"]
    }
  ]
};
