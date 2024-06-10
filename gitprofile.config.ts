// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zmruhi1', // Your GitHub org/user name.
  },
  base: '/zmruhi1.github.io/', // Adjusted to your GitHub username.
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8,
        exclude: {
          forks: false,
          projects: [], // Exclude specific projects if needed.
        },
      },
      manual: {
        projects: ['zmruhi1/pothole-crack-classification-using_hybrid_DL_models', 'zmruhi1/spoken-digit-recognition', 'zmruhi1/udacity-dsnd-disaster-response-pipeline'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Boosting Vision AI in Retail Using Synthetic Data',
          description: 'Implemented a synthetic data generation pipeline and a YOLOv8-based object detection system, achieving an F1 score of 0.99 and mAP@0.5 of 0.995.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg', // Update with actual project image URL.
          link: 'https://github.com/zmruhi1',
        },
        {
          title: 'Emergency Message Categorization and Analysis System',
          description: 'Engineered an ETL pipeline to handle incoming data and developed a machine learning web application for categorizing disaster-related messages.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg', // Update with actual project image URL.
          link: 'https://github.com/zmruhi1',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Zurana Mehrin Ruhi',
    description: 'Master’s thesis: Developing XAI methodologies for multimodal transformer models.',
    imageURL: '', // Add a relevant image URL.
  },
  social: {
    linkedin: 'zmruhi',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.linkedin.com/in/zmruhi',
    phone: '+49 176 75950996',
    email: 'zurana.mehrin.ruhi1@gmail.com',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Update with actual resume URL if available.
  },
  skills: [
    'Python', 'C++', 'R', 'SQL',
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'FastAI', 'Hugging Face', 'OpenCV',
    'NumPy', 'Pandas', 'PySpark', 'Matplotlib', 'SciPy',
    'Flask', 'Streamlit', 'PyQt5',
    'Git', 'GitHub', 'GitLab',
  ],
  experiences: [
    {
      company: 'Deutsches Forschungszentrum für Künstliche Intelligenz',
      position: 'Research Assistant | MSc Student',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://example.com', // Update with actual company link.
    },
    {
      company: 'Multimedia Signal & Image Processing Research Group, Woosong University',
      position: 'Research Assistant',
      from: 'December 2020',
      to: 'September 2021',
      companyLink: 'https://example.com', // Update with actual company link.
    },
    {
      company: 'Giga Tech Ltd',
      position: 'Machine Learning Trainee',
      from: 'August 2020',
      to: 'November 2020',
      companyLink: 'https://example.com', // Update with actual company link.
    },
  ],
  educations: [
    {
      institution: 'Saarland University',
      degree: 'M.Sc. in Data Science and Artificial Intelligence',
      from: 'Winter 2021',
      to: 'Ongoing',
    },
    {
      institution: 'BRAC University',
      degree: 'B.Sc. in Computer Science',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'List from Google Scholar',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: 'https://scholar.google.com/citations?user=hhhG4iAAAAAJ&hl=en',
      description: '',
    },
  ],
  themeConfig: {
    defaultTheme: 'corporate',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'corporate', // Removed other themes to focus on corporate.
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/zmruhi1"
      target="_blank"
      rel="noreferrer"
    >GitHub</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
