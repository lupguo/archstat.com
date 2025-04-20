// src/data/techDetails.js
export const techDetails = {
  languages: {
    JavaScript: {
      name: 'JavaScript',
      icon: '💛',
      overview: 'JavaScript is a versatile programming language that enables interactive and dynamic content on websites. It is one of the core technologies of the World Wide Web.',
      keyFeatures: [
        'Dynamic typing and first-class functions',
        'Object-oriented, imperative, and functional programming styles',
        'Rich ecosystem with NPM packages',
        'Asynchronous programming with Promises and async/await',
        'Event-driven programming model'
      ],
      useCases: [
        'Web application development',
        'Server-side development with Node.js',
        'Mobile app development with React Native/Ionic',
        'Desktop application development with Electron',
        'Browser game development'
      ]
    },
    Python: {
      name: 'Python',
      icon: '🐍',
      overview: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It emphasizes code readability with its notable use of significant whitespace.',
      keyFeatures: [
        'Clear and readable syntax',
        'Extensive standard library',
        'Strong community support',
        'Cross-platform compatibility',
        'Rich scientific computing libraries'
      ],
      useCases: [
        'Data science and machine learning',
        'Web development with Django/Flask',
        'Automation and scripting',
        'Scientific computing',
        'Artificial Intelligence research'
      ]
    },
    Java: {
      name: 'Java',
      icon: '☕',
      overview: 'Java is a class-based, object-oriented programming language designed to be platform-independent through the Java Virtual Machine (JVM).',
      keyFeatures: [
        'Platform independence (Write Once, Run Anywhere)',
        'Strong type system',
        'Extensive collection framework',
        'Automatic memory management',
        'Rich enterprise-level libraries'
      ],
      useCases: [
        'Enterprise software development',
        'Android app development',
        'Web application backends',
        'Big data processing',
        'Embedded systems'
      ]
    },
    TypeScript: {
      name: 'TypeScript',
      icon: '📘',
      overview: 'TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language.',
      keyFeatures: [
        'Static typing system',
        'Object-oriented features',
        'ECMAScript compatibility',
        'Rich IDE support',
        'Compile-time error checking'
      ],
      useCases: [
        'Large-scale JavaScript applications',
        'Enterprise web applications',
        'Angular development',
        'Node.js applications',
        'Type-safe JavaScript libraries'
      ]
    },
    Go: {
      name: 'Go',
      icon: '🔵',
      overview: 'Go is a statically typed, compiled programming language designed for simplicity, efficiency, and built-in support for concurrent programming.',
      keyFeatures: [
        'Simple and clean syntax',
        'Built-in concurrency support',
        'Fast compilation',
        'Efficient garbage collection',
        'Rich standard library'
      ],
      useCases: [
        'Cloud and network services',
        'System programming',
        'DevOps and CLI tools',
        'Microservices architecture',
        'High-performance applications'
      ]
    },
    Rust: {
      name: 'Rust',
      icon: '⚙️',
      overview: 'Rust is a multi-paradigm, low-level programming language designed for performance and safety, particularly safe concurrency.',
      keyFeatures: [
        'Memory safety without garbage collection',
        'Zero-cost abstractions',
        'Pattern matching',
        'Trait-based generics',
        'Type inference'
      ],
      useCases: [
        'Systems programming',
        'WebAssembly development',
        'Network programming',
        'Game engines',
        'Operating system development'
      ]
    }
  },
  frameworks: {
    React: {
      name: 'React',
      icon: '⚛️',
      overview: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It was developed and is maintained by Facebook.',
      keyFeatures: [
        'Virtual DOM for optimal rendering',
        'Component-based architecture',
        'Unidirectional data flow',
        'JSX syntax',
        'Rich ecosystem of libraries'
      ],
      useCases: [
        'Single-page applications',
        'Mobile development with React Native',
        'Progressive web applications',
        'Interactive dashboards',
        'E-commerce platforms'
      ]
    },
    'Vue.js': {
      name: 'Vue.js',
      icon: '💚',
      overview: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable.',
      keyFeatures: [
        'Reactive data binding',
        'Component system',
        'Virtual DOM rendering',
        'Template syntax',
        'State management (Vuex)'
      ],
      useCases: [
        'Progressive web applications',
        'Single-page applications',
        'User interfaces',
        'Admin panels',
        'Interactive components'
      ]
    },
    'Next.js': {
      name: 'Next.js',
      icon: '⚡',
      overview: 'Next.js is a React framework that enables server-side rendering and static site generation for React applications.',
      keyFeatures: [
        'Server-side rendering',
        'Static site generation',
        'Automatic routing',
        'API routes',
        'Built-in CSS support'
      ],
      useCases: [
        'E-commerce websites',
        'Marketing websites',
        'Blogs and content sites',
        'Dashboard applications',
        'SEO-optimized web apps'
      ]
    },
    'Node.js': {
      name: 'Node.js',
      icon: '🟢',
      overview: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, enabling server-side JavaScript execution.',
      keyFeatures: [
        'Event-driven architecture',
        'Non-blocking I/O',
        'Large package ecosystem (npm)',
        'Cross-platform support',
        'Built-in modules'
      ],
      useCases: [
        'Web servers',
        'API development',
        'Real-time applications',
        'Command line tools',
        'Microservices'
      ]
    }
  },
  buildtools: {
    Webpack: {
      name: 'Webpack',
      icon: '📦',
      overview: 'Webpack is a static module bundler for modern JavaScript applications, creating a dependency graph of modules.',
      keyFeatures: [
        'Code splitting',
        'Module bundling',
        'Asset management',
        'Hot module replacement',
        'Plugin system'
      ],
      useCases: [
        'JavaScript application bundling',
        'Development environment setup',
        'Asset optimization',
        'Production builds',
        'Module dependency management'
      ]
    },
    Vite: {
      name: 'Vite',
      icon: '⚡',
      overview: 'Vite is a modern frontend build tool that offers a faster and leaner development experience.',
      keyFeatures: [
        'Lightning fast cold start',
        'Hot Module Replacement (HMR)',
        'Out-of-the-box TypeScript support',
        'CSS preprocessing support',
        'Build optimization'
      ],
      useCases: [
        'Modern web development',
        'Single-page applications',
        'Library development',
        'Static site generation',
        'Development server'
      ]
    }
  },
  devops: {
    Docker: {
      name: 'Docker',
      icon: '🐳',
      overview: 'Docker is a platform for developing, shipping, and running applications in containers.',
      keyFeatures: [
        'Container virtualization',
        'Dockerfile automation',
        'Image versioning',
        'Container orchestration',
        'Multi-container applications'
      ],
      useCases: [
        'Application containerization',
        'Microservices deployment',
        'Development environments',
        'CI/CD pipelines',
        'Cloud deployment'
      ]
    },
    Kubernetes: {
      name: 'Kubernetes',
      icon: '☸️',
      overview: 'Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management.',
      keyFeatures: [
        'Container orchestration',
        'Automatic scaling',
        'Self-healing',
        'Service discovery',
        'Load balancing'
      ],
      useCases: [
        'Container orchestration',
        'Microservices architecture',
        'Cloud-native applications',
        'High-availability deployments',
        'Large-scale applications'
      ]
    }
  },
  trends: {
    'AI/ML': {
      name: 'AI/ML',
      icon: '🤖',
      overview: 'Artificial Intelligence and Machine Learning are transforming software development and automation.',
      keyFeatures: [
        'Deep learning frameworks',
        'Natural language processing',
        'Computer vision',
        'Automated decision making',
        'Predictive analytics'
      ],
      useCases: [
        'Predictive modeling',
        'Image and speech recognition',
        'Natural language processing',
        'Recommendation systems',
        'Autonomous systems'
      ]
    },
    Web3: {
      name: 'Web3',
      icon: '🌐',
      overview: 'Web3 represents the next evolution of the internet, built on decentralized networks and blockchain technology.',
      keyFeatures: [
        'Decentralization',
        'Blockchain integration',
        'Smart contracts',
        'Token economics',
        'Distributed storage'
      ],
      useCases: [
        'Decentralized applications (dApps)',
        'Cryptocurrency platforms',
        'NFT marketplaces',
        'Decentralized finance (DeFi)',
        'Digital identity systems'
      ]
    }
  }
};