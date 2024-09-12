import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import profilepic from '../images/profilepic.jpg'; // replace with actual image
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Erhan Zeki KILNAZ - Resume',
  description: 'Computer Engineer Resume - Erhan Zeki KILNAZ',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Erhan Zeki KILNAZ.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hendek, Sakarya-based <strong className="text-stone-100">Computer Engineer</strong>, recently graduated
        from <strong className="text-stone-100">Düzce University</strong>. I interned at Daikin, where I worked on
        projects related to energy efficiency and environmental sustainability.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am passionate about embedded systems, machine learning, and database systems. I strive to solve problems with
        innovative solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Computer Engineer with experience in developing embedded systems, secure file management platforms, and machine learning models. My primary focus is on environmental sustainability and energy efficiency projects.`,
  aboutItems: [
    {label: 'Location', text: 'Hendek, Sakarya', Icon: MapIcon},
    {label: 'Date of Birth', text: '2001', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, Embedded Systems, Data Analysis', Icon: SparklesIcon},
    {label: 'Study', text: 'Düzce University', Icon: AcademicCapIcon},
    {label: 'Internship', text: 'Daikin Turkey R&D', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'C++', level: 8},
      {name: 'C#', level: 7},
      {name: 'Python', level: 7},
      {name: 'SQL', level: 6},
    ],
  },
  {
    name: 'Databases',
    skills: [
      {name: 'MSSQL', level: 6},
      {name: 'PostgreSQL', level: 5},
    ],
  },
  {
    name: 'Embedded Systems & Tools',
    skills: [
      {name: 'Arduino IDE', level: 7},
      {name: 'ESP32 Programming', level: 6},
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {name: 'Data Analysis & Classification', level: 6},
      {name: 'Model Performance Optimization', level: 5},
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {name: 'Git', level: 6},
      {name: 'MS Office (Word, Excel, PowerPoint)', level: 7},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'CloudReli',
    description: 'A cloud reliability platform',
    url: 'https://github.com/ErhanKlnz/Cloud-Site',
    image: 'path_to_cloudreli_image.jpg',
  },
  {
    title: 'Yurt Otomasyonu',
    description: 'Dormitory management system',
    url: 'https://github.com/ErhanKlnz/Yurt-Otomasyonu',
    image: 'path_to_yurt_otomasyonu_image.jpg',
  },
  {
    title: 'Bookmate',
    description: 'Book management system',
    url: 'https://github.com/ErhanKlnz/Bookmate',
    image: 'path_to_bookmate_image.jpg',
  },
  {
    title: 'Air Conditioning Maintenance Tracking System',
    description: 'An embedded system project using ESP32',
    url: 'https://github.com/ErhanKlnz/Air-Conditioning-Maintenance-Tracking-System',
    image: 'path_to_klima_image.jpg',
  },
  {
    title: 'Thermostat Simulation Platform',
    description: 'A simulation platform for smart thermostats',
    url: 'https://github.com/ErhanKlnz/Thermostat-Simulation-Platform',
    image: 'path_to_thermostat_image.jpg',
  },
  {
    title: 'Comparison of Classification Algorithms',
    description: 'Analysis and optimization of machine learning models',
    url: 'https://github.com/ErhanKlnz/Data-Engineering-Classification',
    image: 'path_to_classification_image.jpg',
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2024',
    location: 'Düzce University',
    title: 'BSc in Computer Engineering',
    content: <p>Specialized in embedded systems, machine learning, and database systems.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2024 - September 2024',
    location: 'Daikin Turkey R&D',
    title: 'Intern',
    content: (
      <p>
        Worked on projects related to environmental sustainability, including the evaluation of heat pumps and smart
        thermostats.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Kübra Kılnaz',
      text: 'Erhan is a dedicated engineer with a strong focus on energy efficiency and sustainability. He demonstrated exceptional problem-solving skills during his internship at Daikin.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Asena Ceylan',
      text: 'Erhan consistently impressed me with his knowledge of embedded systems and his ability to develop practical, innovative solutions.',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out via any of the following platforms.',
  items: [
    {
      type: ContactType.Email,
      text: 'erhanzekikilnaz@hotmail.com',
      href: 'mailto:erhanzekikilnaz@hotmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+90 536 735 65 65',
      href: 'tel:+905367356565',
    },
    {
      type: ContactType.Location,
      text: 'Hendek, Sakarya, Turkey',
      href: 'https://www.google.com/maps/place/Hendek,+Sakarya',
    },
    {
      type: ContactType.Github,
      text: 'ErhanKlnz',
      href: 'https://github.com/ErhanKlnz',
    },
  ],
};

/**
 * Social links
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ErhanKlnz'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/erhan-zeki-k%C4%B1lnaz/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ErhanKlnz/'},
];
