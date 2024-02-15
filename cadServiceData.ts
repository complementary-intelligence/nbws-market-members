// src/data/cadServicesData.ts

import { ServiceItem, ServiceDetail } from '../types/serviceTypes';

export const cadServiceDetail: ServiceDetail = {
  id: "cad-drafting",
  name: "CAD Drafting Services",
  description: "Offering precise and detailed CAD drafting services to bring your architectural and mechanical projects to life. Our team of experienced CAD draftsmen utilizes the latest software to deliver accurate drawings, ensuring your projects are completed efficiently and to the highest standards.",
  benefits: [
    "Precision and attention to detail",
    "Experienced CAD draftsmen and designers",
    "Latest CAD software and technologies",
    // "Customizable drafting services to meet project requirements",
    // "Quick turnaround times without compromising quality",
    // "Support for a wide range of drafting needs, including architectural, mechanical, and electrical",
  ],
  pricing: [
    {
      tier: "Basic Drafting Package",
      price: "$300",
      features: [
        "Up to 8 hours of drafting",
        "2D floor plans and elevation views",
        "Two rounds of revisions included",
      ],
    },
    {
      tier: "Advanced Drafting Package",
      price: "$600",
      features: [
        "Up to 15 hours of advanced drafting",
        "3D modeling and visualization",
        "Unlimited revisions",
        "Integration with architectural and engineering workflows",
      ],
    },
    // Add more pricing tiers as needed
  ],
  faqs: [
    {
      question: "What types of CAD drafting services do you offer?",
      answer: "We provide a comprehensive range of CAD drafting services including architectural, mechanical, electrical, and plumbing drafting to meet all your project needs.",
    },
    {
      question: "Can you work with existing sketches or concepts?",
      answer: "Absolutely! We can transform your sketches or concept drawings into detailed CAD drawings. We ensure the final outputs are accurate and tailored to your specifications.",
    },
    // Add more FAQs as needed
  ],
};

export const cadServicesData: ServiceItem[] = [
  {
    id: 1,
    title: "$400 Basic Architectural Drafting Package",
    description: "Includes up to 8 hours of drafting for residential projects, floor plans, and elevations.",
    bulletPoints: [
      "Initial consultation and concept review",
      "2D floor plans and elevation views",
      "Two rounds of revisions included"
    ],
    imageUrl: "/assets/images/architectural-drafting.png",
    link: "/services/architectural-drafting",
  },
  {
    id: 2,
    title: "$600 Advanced Architectural Drafting Package",
    description: "Detailed drafting for commercial or complex projects, including 3D modeling.",
    bulletPoints: [
      "Detailed floor plans, elevations, and sections",
      "3D model visualization",
      "Up to 12 hours of drafting service"
    ],
    imageUrl: "/assets/images/advanced-architectural.png",
    link: "/services/advanced-architectural",
  },
  {
    id: 3,
    title: "$300 Mechanical Drafting Service",
    description: "Mechanical component drafting, including detailed assembly drawings for up to 6 hours.",
    bulletPoints: [
      "Mechanical part and assembly drawings",
      "Bill of materials creation",
      "Standard compliance checks"
    ],
    imageUrl: "/assets/images/mechanical-drafting.png",
    link: "/services/mechanical-drafting",
  },
  {
    id: 4,
    title: "$750 Full-Scale CAD Conversion",
    description: "Convert paper drawings or sketches to CAD format, including up to 15 hours of drafting.",
    bulletPoints: [
      "Paper to CAD conversion for any type of drawing",
      "Clean-up and layer management",
      "High accuracy and attention to detail"
    ],
    imageUrl: "/assets/images/cad-conversion.png",
    link: "/services/cad-conversion",
  },
  {
    id: 5,
    title: "$500 Environmental & Land Use Planning",
    description: "Environmental design and land use planning for sustainable development, up to 10 hours.",
    bulletPoints: [
      "Site analysis and planning",
      "Environmental impact assessment",
      "Sustainable design strategies"
    ],
    imageUrl: "/assets/images/environmental-planning.png",
    link: "/services/environmental-planning",
  },
  {
    id: 6,
    title: "$350 Electrical Drafting Service",
    description: "Electrical diagrams and plans for residential or commercial projects, up to 8 hours.",
    bulletPoints: [
      "Electrical layout plans",
      "Lighting diagrams",
      "Power distribution maps"
    ],
    imageUrl: "/assets/images/electrical-drafting.png",
    link: "/services/electrical-drafting",
  },
  {
    id: 7,
    title: "$450 Comprehensive Plumbing Drafting Service",
    description: "Detailed plumbing and piping layout drafting for residential or commercial buildings, including up to 10 hours of service.",
    bulletPoints: [
      "Creation of detailed plumbing layout plans",
      "Piping diagrams and specifications",
      "Fixture and equipment scheduling",
    ],
    imageUrl: "/assets/images/plumbing-drafting.png",
    link: "/services/plumbing-drafting",
  },  
];