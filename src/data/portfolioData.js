export const portfolioData = {
  owner: {
    name: 'Aman Sagar',
    role: 'Full Stack Developer',
    specialization: 'MERN Stack',
    email: 'amansagar60281@gmail.com',
    profileImage: '/aman-sagar-profile.png',
    education: 'B.Tech Computer Science (2021-2025)',
    location: 'Open to remote and on-site opportunities',
    availability: 'Available for full-time roles, freelance work, and collaborative builds.',
  },
  navigation: [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Resume', to: 'resume' },
    { label: 'Contact', to: 'contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/aman743sagar',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-sagar-013064292',
    },
    {
      label: 'Email',
      href: 'mailto:amansagar60281@gmail.com',
    },
  ],
  hero: {
    badge: 'Modern, scalable, user-focused web development',
    intro:
      'I design and build polished digital products with strong frontend craft, reliable backend architecture, and a focus on smooth user experiences.',
    tagline:
      'Turning ideas into responsive full stack products with clean code, thoughtful UX, and production-minded engineering.',
    rotatingTitles: [
      'Responsive React Interfaces',
      'Scalable MERN Applications',
      'REST APIs & Backend Logic',
      'Real-Time Web Experiences',
    ],
    stats: [
      { label: 'Tech Focus', value: 'MERN + SQL' },
      { label: 'Projects', value: 'Full Stack Builds' },
      { label: 'Approach', value: 'Clean & User-Centered' },
    ],
  },
  about: {
    summary:
      'I am a full stack developer with a strong foundation in JavaScript, React, Node.js, Express, and databases including MongoDB and MySQL. I enjoy creating modern web applications that feel fast, intuitive, and maintainable across devices.',
    objective:
      'My goal is to contribute to high-impact products where I can blend frontend detail, backend logic, and problem-solving to deliver strong end-to-end user experiences.',
    cards: [
      {
        title: 'Education',
        value: 'B.Tech Computer Science',
        detail: '2021 - 2025',
      },
      {
        title: 'Specialization',
        value: 'Full Stack Development',
        detail: 'MERN stack and API-driven applications',
      },
      {
        title: 'Career Focus',
        value: 'Product Engineering',
        detail: 'Responsive UI, backend services, and maintainable architecture',
      },
      {
        title: 'Current Objective',
        value: 'Growth-Focused Roles',
        detail: 'Open to internships, junior roles, and freelance collaboration',
      },
    ],
    personalInfo: [
      { label: 'Name', value: 'Aman Sagar' },
      { label: 'Email', value: 'amansagar60281@gmail.com' },
      { label: 'Role', value: 'Full Stack Developer' },
      { label: 'Stack', value: 'MERN, MySQL, Python, Java' },
      { label: 'Education', value: 'B.Tech CSE (2021-2025)' },
      { label: 'Availability', value: 'Remote, freelance, and full-time opportunities' },
    ],
    experienceHighlights: [
      'Built multiple academic and personal projects using React, Node.js, Express, MongoDB, and modern UI tooling.',
      'Focused on responsive layouts, authentication flows, component reusability, and user-friendly interfaces.',
      'Explored real-time communication patterns and backend integrations through project-based development.',
    ],
  },
  skills: [
    {
      category: 'Frontend',
      icon: 'layout',
      items: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: 'server',
      items: [
        { name: 'Node.js', level: 87 },
        { name: 'Express.js', level: 86 },
        { name: 'REST APIs', level: 88 },
        { name: 'Authentication', level: 82 },
      ],
    },
    {
      category: 'Database',
      icon: 'database',
      items: [
        { name: 'MongoDB', level: 86 },
        { name: 'MySQL', level: 82 },
        { name: 'Data Modeling', level: 78 },
      ],
    },
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 76 },
        { name: 'Java', level: 74 },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: 'tool',
      items: [
        { name: 'Git & GitHub', level: 84 },
        { name: 'Vite', level: 86 },
        { name: 'Responsive Design', level: 92 },
        { name: 'WebRTC / Socket.IO', level: 75 },
      ],
    },
  ],
  projects: [
    {
      title: 'Food Order Web Application',
      image: '/project-food-order.svg',
      description:
        'A full stack food ordering platform with restaurant listings, secure user authentication, responsive UI, and order workflow management.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: [
        'Restaurant and menu discovery',
        'Authentication and protected routes',
        'Cart, checkout, and order management',
      ],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
    {
      title: 'Video Calling Application',
      image: '/project-video-call.svg',
      description:
        'A real-time communication app for browser-based video calls powered by React, WebRTC, and Socket.IO for low-latency interactions.',
      stack: ['React', 'WebRTC', 'Socket.IO', 'Node.js'],
      features: [
        'Peer-to-peer real-time video calling',
        'Live room connection handling',
        'Clean responsive calling interface',
      ],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/',
    },
  ],
  resume: {
    cvFile: '/aman-sagar-resume.pdf',
    previewImage: '/resume-preview.svg',
    educationTimeline: [
      {
        year: '2021 - 2025',
        title: 'B.Tech in Computer Science',
        organization: 'Computer Science Program',
        description:
          'Built a solid foundation in software engineering, data structures, object-oriented programming, databases, and web technologies.',
      },
    ],
    experienceTimeline: [
      {
        year: '2024 - Present',
        title: 'Full Stack Project Experience',
        organization: 'Self-driven and academic development',
        description:
          'Built and refined MERN-based applications with authentication, responsive interfaces, API integrations, and real-time features.',
      },
      {
        year: 'Career Objective',
        title: 'Open to Internship and Junior Developer Roles',
        organization: 'Product teams, startups, and freelance opportunities',
        description:
          'Looking to contribute as a growth-focused developer with strong ownership across frontend and backend responsibilities.',
      },
    ],
  },
  contact: {
    heading:
      "Interested in building something clean, fast, and useful? Let's connect.",
    description:
      "Whether you have a product idea, a freelance opportunity, or a developer role in mind, I'd be happy to hear about it.",
    cards: [
      {
        title: 'Email',
        value: 'amansagar60281@gmail.com',
        href: 'mailto:amansagar60281@gmail.com',
      },
      {
        title: 'Role Focus',
        value: 'Full Stack / MERN Developer',
        href: '#',
      },
      {
        title: 'Availability',
        value: 'Open for work and collaboration',
        href: '#',
      },
    ],
  },
};
