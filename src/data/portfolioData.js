const portfolioData = {
  personal: {
    name: "SHASHANK D S",
    location: "Bengaluru, Karnataka",
    email: "shashankds032@gmail.com",
    phone: "+91-8951443041",

    linkedin: "https://www.linkedin.com/in/shashank3041/",
    github: "https://github.com/Shashankds456/",
  },

  summary:
    "Information Science graduate with hands-on experience in designing and developing AI-powered and web-based applications using Java, Python, Flask, JavaScript, SQL, and MongoDB. Experienced in building intelligent software solutions involving log analysis, machine learning, REST APIs, database integration, and full-stack development.",

  skills: {
    programmingLanguages: [
      "Java",
      "C++",
      "C",
      "Python",
      "SQL",
    ],

    frontend: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.js",
    ],

    backend: [
      "REST APIs",
      "Node.js",
      "Flask",
    ],

    databases: [
      "MySQL",
      "MongoDB",
    ],

    artificialIntelligence: [
      "Large Language Models (LLMs)",
      "Ollama",
      "Machine Learning",
      "Prompt Engineering",
    ],

    developerTools: [
      "Git",
      "GitHub",
      "VS Code",
      "Visual Studio",
    ],
  },

  experience: [
    {
      role: "Software Developer Intern",
      company: "Mphasis",
      duration: "Jan 2026 – Apr 2026",

      responsibilities: [
        "Contributed to the development of an AI-powered enterprise log analysis application.",
        "Developed backend modules using Python and Flask for processing multiple log formats.",
        "Integrated Large Language Models (Llama 3 via Ollama) to automate error classification and root cause analysis.",
        "Implemented log parsing, normalization, and pattern matching to improve diagnostic accuracy.",
        "Collaborated with the development team to enhance application performance and improve software functionality.",
      ],

      technologies: [
        "Python",
        "Flask",
        "Llama 3",
        "Ollama",
        "Log Analysis",
        "Pattern Matching",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      institution: "MVJ College of Engineering, Bengaluru",
      duration: "Nov 2022 – May 2026",
      result: "CGPA 7.75/10",
    },

    {
      degree: "Class 12",
      institution: "Sir MV PU College, Davangere",
      duration: "June 2020 – May 2022",
      result: "75%",
    },
  ],

  projects: [
  {
    slug: "ai-log-analyzer",
    title: "AI-Based Unified Log Analyzer",
    description:
      "An AI-powered enterprise diagnostics application that analyzes multiple system and application file formats to identify errors, correlate failures, and provide intelligent root-cause analysis.",
    details:
      "Built an AI-powered unified analysis system capable of processing log files, .log files, crash dumps (.dmp), ETL traces, and Event Viewer logs. The application combines rule-based analysis, pattern matching, normalization, correlation, and LLM-based reasoning to identify errors, determine probable root causes, and suggest fixes.",
    problem:
      "Enterprise applications can generate large volumes of logs, crash dumps, ETL traces, and event files. Manually examining these files can be slow and difficult, especially when multiple errors are related to the same underlying failure.",
    objective:
      "Automate the analysis process and provide developers or support engineers with a unified diagnostic workflow that can identify important errors, correlate related patterns, and provide intelligent root-cause analysis with recommended solutions.",
    technologies: [
      "Python",
      "Flask",
      "Ollama",
      "Llama 3 8B",
      "LLMs",
      "Log Parsing",
      "Pattern Matching",
      "Error Classification",
      "Root Cause Analysis",
      "ETL Analysis",
      "Crash Dump Analysis",
    ],
    features: [
      "Multi-format log analysis",
      "Log normalization",
      "Error detection and classification",
      "Pattern grouping and deduplication",
      "Root cause analysis",
      "AI-generated fixes and recommendations",
      "Log correlation",
      "ETL trace analysis",
      "Crash dump analysis",
    ],
    github: "https://github.com/Shashankds456/AI-Log-Analyzer",
  },

  {
    slug: "crop-recommendation",
    title: "Crop Recommendation System",
    description:
      "A Flask-based machine learning web application that recommends suitable crops based on soil and environmental parameters.",
    details:
      "Developed a web application that collects agricultural parameters such as soil nutrients, temperature, humidity, and pH and uses a machine learning model to generate crop recommendations. The system also includes user authentication and database storage using SQLAlchemy.",
    problem:
      "Farmers need to select crops that are suitable for their soil and environmental conditions. Making decisions without considering these parameters can affect crop suitability and productivity.",
    objective:
      "Build a web-based system that accepts important agricultural parameters and uses machine learning to recommend an appropriate crop.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "SQLAlchemy",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Soil nutrient input",
      "Temperature input",
      "Humidity input",
      "pH input",
      "Machine learning prediction",
      "Crop recommendation",
      "User authentication",
      "Database storage",
      "Responsive web interface",
    ],
    github:
      "https://github.com/Shashankds456/Crop-Recommendation-System",
  },

  {
    slug: "ecommerce-recommendation",
    title: "E-Commerce Recommendation System",
    description:
      "A web-based e-commerce recommendation project developed using HTML, CSS, and JavaScript.",
    details:
      "Developed an e-commerce focused web project using core frontend technologies. The project demonstrates the design and implementation of an online shopping interface with recommendation-oriented functionality using HTML, CSS, and JavaScript.",
    problem:
      "Online shopping interfaces need to present products in an organized and user-friendly way while helping users discover relevant products.",
    objective:
      "Build a frontend-focused e-commerce project that demonstrates web development skills using HTML, CSS, and JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    features: [
      "E-commerce user interface",
      "Product presentation",
      "Interactive frontend elements",
      "Recommendation-oriented interface",
      "Responsive web design",
    ],
    github: "https://github.com/Shashankds456/ecommercerecommendation",
  },

  {
    slug: "rent-my-ride",
    title: "Rent My Ride – Car Rental Booking System",
    description:
      "A web-based car rental booking project developed using PHP, XAMPP, SQL, and HTML.",
    details:
      "Developed a web-based car rental project for users to explore and book cars for rental. The application uses PHP for server-side functionality, SQL for data management, XAMPP as the local development environment, and HTML for the web interface.",
    problem:
      "Customers need a simple way to view available rental vehicles and submit booking information through a web-based system.",
    objective:
      "Develop a database-backed car rental booking application that demonstrates web development, server-side programming, and SQL database integration.",
    technologies: [
      "PHP",
      "HTML",
      "SQL",
      "XAMPP",
    ],
    features: [
      "Car rental interface",
      "Booking functionality",
      "Database integration",
      "Server-side processing",
      "Local XAMPP environment",
    ],
    github: "https://github.com/Shashankds456/Car-Rental-System",
  },

  {
    slug: "interactive-ai-portfolio",
    title: "Interactive AI Portfolio",
    description:
      "A modern interactive developer portfolio built with React and designed as a multi-page web application.",
    details:
      "This portfolio is being developed as an interactive web application rather than a traditional single-page resume website. It provides dedicated pages for skills, projects, experience, education, certifications, resume, and contact, with interactive navigation and project detail views.",
    problem:
      "A traditional portfolio can become difficult to navigate when technical skills, projects, certifications, experience, and resume information are all displayed on one page.",
    objective:
      "Build a professional and interactive portfolio where visitors can navigate through information in a structured way and directly explore projects, technical skills, certifications, resume, and contact options.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "Formspree",
    ],
    features: [
      "Interactive navigation",
      "Dedicated skill category pages",
      "Project detail pages",
      "Resume viewing",
      "Resume download",
      "Certificate viewing",
      "Contact form",
      "Responsive design",
    ],
    github: null,
    status: "Currently Building",
  },
],

  certifications: [
    {
      name: "Basic Generative AI",
      issuer: "IIT Bombay Spoken Tutorial",
    },

    {
      name: "Java Training",
      issuer: "IIT Bombay Spoken Tutorial",
      score: "82.5%",
    },

    {
      name: "Internship Certificate",
      issuer: "Mphasis",
    },

    {
      name: "HackerRank Java Skills Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/d1bce078dcb6",
    },

    {
      name: "HackerRank Python Skills Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/4ae809916d9c",
    },

    {
      name: "HackerRank MYSQL Skills Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/76eb313fdabd",
    },
  ],

  achievements: [
    "Earned HackerRank Skill Certifications in Java, Python, and SQL.",
    "Successfully completed IIT Bombay Spoken Tutorial Java Training with 82.5% score.",
  ],
};

export default portfolioData;