// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zmruhi1', // Your GitHub org/user name.
  },
  base: '/portfolio/', // Adjusted to your GitHub username.
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6,
        exclude: {
          forks: true,
          projects: ['zmruhi1/portfolio'], // Exclude specific projects if needed.
        },
      },
      manual: {
        projects: ['zmruhi1/pothole-crack-classification-using_hybrid_DL_models', 'zmruhi1/spoken-digit-recognition', 'zmruhi1/udacity-dsnd-disaster-response-pipeline'],
      },
    },
    external: {
      header: 'Course Projects',
      projects: [
        {
          title: 'Boosting Vision AI in Retail Using Synthetic Data',
          description: 'Implemented a synthetic data generation pipeline and a YOLOv8-based object detection system, achieving an F1 score of 0.99 and mAP@0.5 of 0.995.',
          // imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg', // Update with actual project image URL.
          // link: 'https://github.com/zmruhi1',
        },
        {
          title: 'Emergency Message Categorization and Analysis System',
          description: 'Engineered an ETL pipeline to handle incoming data and developed a machine learning web application for categorizing disaster-related messages.',
          // imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg', // Update with actual project image URL.
          // link: 'https://github.com/zmruhi1',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Zurana Mehrin Ruhi',
    description: 'Personal Website',
    imageURL: '', // Add a relevant image URL.
  },
  social: {
    linkedin: 'zmruhi',
    phone: '+49 176 75950996',
    email: 'zurana.mehrin.ruhi1@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1J8SuDjCIO3iT2gZU_yFxdTQ9UkwaQeNQ/view?usp=sharing', // Update with actual resume URL if available.
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
      companyLink: 'https://iml.dfki.de', 
    },
    {
      company: 'Multimedia Signal & Image Processing Research Group, Woosong University',
      position: 'Research Assistant',
      from: 'December 2020',
      to: 'September 2021',
      companyLink: 'https://sites.google.com/view/drjiauddin/research-areas?pli=1', 
    },
    {
      company: 'Giga Tech Ltd',
      position: 'Machine Learning Trainee',
      from: 'August 2020',
      to: 'November 2020',
      companyLink: 'https://gigatechltd.com', 
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
      title: 'A novel hybrid signal decomposition technique for transfer learning based industrial fault diagnosis',
      conferenceName: '',
      journalName: 'Annals of Emerging Technologies in Computing (AETiC)',
      authors: 'Zurana Mehrin Ruhi, Sigma Jahan, Jia Uddin',
      link: 'http://aetic.theiaer.org/archive/v5/v5n4/p4.html',
      description: 'This paper presents a novel hybrid signal decomposition technique aimed at enhancing the efficiency of transfer learning models for industrial fault diagnosis. The method significantly improves diagnostic accuracy and reliability in various industrial applications.',
      year: '2021',
      volume: '5',
      issue: '4',
      pages: '37-53',
      imageUrl: 'https://github.com/zmruhi1/portfolio/blob/main/images/fault_diagnosis_paper.png',
      publisher: 'International Association for Educators and Researchers (IAER)'
    },
    {
      title: 'Deep Learning-Based Industrial Fault Diagnosis Using Induction Motor Bearing Signals',
      conferenceName: '',
      bookTitle: 'Applied AI and Multimedia Technologies for Smart Manufacturing and CPS Applications',
      authors: 'Saiful Islam, Sovon Chakraborty, Jannatun Naeem Muna, Moumita Kabir, Zurana Mehrin Ruhi, Jia Uddin',
      link: 'https://www.igi-global.com/chapter/deep-learning-based-industrial-fault-diagnosis-using-induction-motor-bearing-signals/321250',
      imageUrl: 'https://github.com/zmruhi1/portfolio/blob/main/images/book.png',
      description: 'This book chapter explores deep learning techniques for fault diagnosis in industrial motors, focusing on induction motor bearing signals to improve diagnostic processes in manufacturing.',
      year: '2023',
      pages: '176-204',
      publisher: 'IGI Global'
    },
    {
      title: 'A Proposal for Physics-Informed Quantum Graph Neural Networks for Simulating Laser Cutting Processes',
      conferenceName: '',
      journalName: '',
      authors: 'Zurana Mehrin Ruhi, Hannah Stein, Wolfgang Maaß',
      link: 'https://dl.gi.de/bitstreams/af593d54-1b16-4563-9b96-0afae94c6f56/download',
      imageUrl: 'https://github.com/zmruhi1/portfolio/blob/main/images/QPINN.png',
      description: 'This proposal introduces a physics-informed quantum graph neural network model tailored for simulating and optimizing laser cutting processes, highlighting the integration of quantum computing with graph neural networks for enhanced simulation accuracy.',
      year: '2023',
      publisher: 'Gesellschaft für Informatik eV'
    },
    // Add more publications if any
  ],

  certifications: [
    {
      name: 'Data Scientist Nanodegree',
      body: 'Udacity',
      year: '2022',
      link: 'https://confirm.udacity.com/GWVCVXTG',
      imageUrl: 'https://github.com/zmruhi1/portfolio/blob/main/images/DS_nanodegree.png',  // Replace with actual image URL or use Udacity's badge if available
      description: `Awarded in 2022, this Nanodegree covered a comprehensive range of topics including Introduction to Deep Learning for Computer Vision, The Machine Learning Workflow, Sensor and Camera Calibration, From Linear Regression to Feedforward Neural Networks, Image Classification with CNNs, Object Detection in Images, and Object Detection in an Urban Environment.`
    },
    {
      name: 'Deep Learning Specialization',
      body: 'DeepLearning.AI via Coursera',
      year: '2020',
      link: 'https://coursera.org/share/dcc79455f1b1b3beb50ea83fb177a558',
      imageUrl: 'https://github.com/zmruhi1/portfolio/blob/main/images/DL_certificate.png',  // Replace with actual image URL or use Coursera's badge if available
      description: `Completed by Zurana Mehrin Ruhi on June 28, 2020. This specialization included courses on Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, Convolutional Neural Networks, Structuring Machine Learning Projects, and Sequence Models. Approximately 3 months at 10 hours a week to complete.`
    },
    // Additional certifications can be added here
  ],
  
  themeConfig: {
    defaultTheme: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', // Removed other themes to focus on corporate.
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
  footer: `Source at <a 
      class="text-primary" href="https://github.com/zmruhi1"
      target="_blank"
      rel="noreferrer"
    >GitHub</a> `,
  enablePWA: true,
};

export default CONFIG;
