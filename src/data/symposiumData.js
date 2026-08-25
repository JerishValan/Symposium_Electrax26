/**
 * ==============================================================================
 * ELECTRAX 2026 - CENTRALIZED SYMPOSIUM CONFIGURATION & DATA
 * ==============================================================================
 * 
 * All details use clean placeholders with no real person names, real college 
 * names, or real mobile numbers, as requested for prototype demonstration.
 */

export const SYMPOSIUM_CONFIG = {
  // ---------------------------------------------------------------------------
  // 1. Core Symposium Details
  // ---------------------------------------------------------------------------
  brand: {
    name: "ElectraX",
    edition: "2026",
    tagline: "NATIONAL LEVEL TECHNICAL SYMPOSIUM",
    department: "Department of Electrical & Electronics Engineering",
    presenterText: "Department of EEE presents",
    year: "2026",
    dateFormatted: "24 SEPTEMBER 2026",
    eventDateISO: "2026-09-24T09:00:00+05:30",
    badge: "ANNUAL EEE FLAGSHIP CONCLAVE"
  },

  // ---------------------------------------------------------------------------
  // 2. Institutional Details (Placeholders)
  // ---------------------------------------------------------------------------
  institution: {
    collegeName: "P.S.R. Engineering College",
    collegeShortName: "PSREC",
    departmentFullName: "Department of Electrical and Electronics Engineering",
    affiliation: "Affiliated to Anna University | Approved by AICTE",
    city: "Sivakasi",
    state: "Tamil Nadu",
    locationFormatted: "SIVAKASI, TAMIL NADU",
    address: {
      campus: "Sevalpatti Campus",
      street: "Sevalpatti",
      city: "Sivakasi",
      state: "Tamil Nadu",
      pincode: "628140",
      fullAddress: "P.S.R. Engineering College, Sevalpatti, Sivakasi - 628140, Virudhunagar District, Tamil Nadu, India"
    },
    googleMapsUrl: "https://maps.app.goo.gl/yRyCeFvoY4kW1KF46?g_st=aw",
    coordinates: {
      lat: "9.4571° N",
      lng: "77.8035° E"
    }
  },

  // ---------------------------------------------------------------------------
  // 3. Contact Details & Coordinators (Generic Placeholders)
  // ---------------------------------------------------------------------------
  contacts: {
    general: {
      phone: "+91 80156 95893",
      altPhone: "+91 81245 92694",
      thirdPhone: "+91 70101 60315",
      email: "electrax2k26@gmail.com",
      altEmail: "electrax2k26@gmail.com",
      website: "https://psrec.ac.in"
    },
    facultyCoordinators: [
      {
        name: "Dr. A. Geetha",
        designation: "ASP / EEE",
        role: "Faculty Co-ordinator",
        phone: "+91 70101 60315",
        email: "electrax2k26@gmail.com"
      }
    ],
    studentCoordinators: [
      {
        name: "Mr. R. Ramachandran",
        role: "Student Co-ordinator",
        year: "IV Year / EEE",
        phone: "+91 80156 95893",
        email: "electrax2k26@gmail.com"
      },
      {
        name: "Mr. M. Kamalesh",
        role: "Student Co-ordinator",
        year: "IV Year / EEE",
        phone: "+91 81245 92694",
        email: "electrax2k26@gmail.com"
      }
    ],
    socialLinks: {
      instagram: "https://instagram.com/example",
      linkedin: "https://linkedin.com/company/example",
      whatsapp: "https://chat.whatsapp.com/example",
      youtube: "https://youtube.com/@example"
    }
  },

  // ---------------------------------------------------------------------------
  // 4. Registration & Perks Details
  // ---------------------------------------------------------------------------
  registration: {
    status: "OPEN",
    portalOpenDate: "OPEN NOW",
    registrationFormUrl: "https://forms.gle/N69Ba8HShan9hfxB6",
    feePerHead: "Per participant (Includes Lunch & All Events)",
    benefits: [
      "Entry to all Technical & Non-Technical Events",
      "Official Certificate of Participation for all attendees",
      "Buffet Lunch & High Tea Refreshments",
      "Exciting Cash Prizes & Merit Trophies for Winners",
      "Internship & Placement Mentorship Opportunities"
    ],
    totalCashPool: "Exciting Cash Prizes"
  },

  // ---------------------------------------------------------------------------
  // 5. Six Featured Events (No Specific Names - Just "EVENT NAME")
  // ---------------------------------------------------------------------------
  events: [
    {
      id: "event-1",
      name: "Future Frame",
      eventCode: "TECH-01",
      tagline: "Technical Event 01 &bull; Paper Presentation",
      category: "TECHNICAL",
      icon: "circuit",
      shortDescription: "Participants present a technical paper on an innovative idea, emerging technology, or engineering concept. It focuses on technical knowledge, research ability, presentation skills, and confidence.",
      time: "10:00 AM – 12:00 PM",
      members: "1-2 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Mr. R. Ramachandran (+91 80156 95893)"
      }
    },
    {
      id: "event-2",
      name: "Tech Titans",
      eventCode: "TECH-02",
      tagline: "Technical Event 02 &bull; Technical Quiz",
      category: "TECHNICAL",
      icon: "cpu",
      shortDescription: "A quiz focused on EEE, electronics, electrical technology, current innovations, and technical knowledge. It tests speed, memory, technical awareness, and quick thinking.",
      time: "11:30 AM – 01:00 PM",
      members: "2 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Gold Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Mr. M. Kamalesh (+91 81245 92694)"
      }
    },
    {
      id: "event-3",
      name: "Proto Fest",
      eventCode: "TECH-03",
      tagline: "Technical Event 03 &bull; Project Expo",
      category: "TECHNICAL",
      icon: "zap",
      shortDescription: "Participants showcase working projects or prototypes and explain their concept, design, components, working principle, and applications. It highlights innovation, practical knowledge, and problem-solving skills.",
      time: "01:30 PM – 03:30 PM",
      members: "2-3 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Mr. R. Ramachandran (+91 80156 95893)"
      }
    },
    {
      id: "event-4",
      name: "Guess What",
      eventCode: "NON-TECH-01",
      tagline: "Non-Technical Event 01 &bull; Connection",
      category: "NON-TECHNICAL",
      icon: "share2",
      shortDescription: "Participants identify the connection between given images, words, symbols, or clues. It tests logical thinking, observation, creativity, and quick thinking.",
      time: "10:30 AM – 12:30 PM",
      members: "2 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Mr. R. Ramachandran (+91 80156 95893)"
      }
    },
    {
      id: "event-5",
      name: "Cini Quest",
      eventCode: "NON-TECH-02",
      tagline: "Non-Technical Event 02 &bull; Movie Based",
      category: "NON-TECHNICAL",
      icon: "camera",
      shortDescription: "A movie-themed fun event involving cinema-related clues, scenes, characters, or challenges. It focuses on movie knowledge, observation, and entertainment skills.",
      time: "10:30 AM – 12:30 PM",
      members: "2 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Memento & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Mr. M. Kamalesh (+91 81245 92694)"
      }
    },
    {
      id: "event-6",
      name: "Unseen",
      eventCode: "NON-TECH-03",
      tagline: "Non-Technical Event 03 &bull; Emotion Switch",
      category: "NON-TECHNICAL",
      icon: "users",
      shortDescription: "A creative event based on interpreting or expressing different emotions according to a given situation or challenge. It focuses on spontaneity, creativity, acting ability, and emotional expression.",
      time: "02:00 PM – 04:00 PM",
      members: "2-3 Members per team",
      venue: "EEE Department",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [],
      rules: [],
      coordinators: {
        faculty: "Dr. A. Geetha (ASP/EEE)",
        student: "Dr. A. Geetha (+91 70101 60315)"
      }
    }
  ],

  // ---------------------------------------------------------------------------
  // 6. Brochure Details
  // ---------------------------------------------------------------------------
  brochure: {
    title: "ElectraX 2026 Official Information Brochure",
    subtitle: "Complete Schedule, General Instructions, Event Guidelines & Registration Rules",
    filename: "ELECTRAX_2K26_Brochure.pdf",
    totalPages: 2,
    fileSizeFormatted: "2.4 MB (PDF Document)",
    downloadUrl: "#download-brochure",
    highlights: [
      "Complete Event Schedule with Venue Map",
      "General Rules & Eligibility Guidelines",
      "Cash Prize & Award Breakdown for all 6 Events",
      "Route Map, Bus Routes & Campus Navigation Guide",
      "Accommodation & Food Arrangements for Outstation Delegates",
      "Official Contact Directory for All Coordinators"
    ],
    pages: [
      {
        pageNumber: 1,
        title: "Front Cover & Event Schedule",
        description: "Official invitation from the Department of EEE, Chief Guest profile, morning inauguration schedule, keynotes, and lunch timetable."
      },
      {
        pageNumber: 2,
        title: "Event Guidelines & Rulebook",
        description: "Comprehensive breakdown of all technical and non-technical events rules and registration guidelines."
      }
    ]
  },

  // ---------------------------------------------------------------------------
  // 7. About Information (College & Department)
  // ---------------------------------------------------------------------------
  about: {
    college: {
      title: "About Our Institution",
      subtitle: "[COLLEGE NAME] &bull; [CITY, TAMIL NADU]",
      description: "Established with a visionary mission to nurture engineering talent, our institution has stood at the forefront of technical education, groundbreaking research, and student innovation. Equipped with modern classrooms, research laboratories, and industry-sponsored innovation centers, the college prepares students to lead technological transformations globally.",
      highlights: [
        {
          label: "NAAC Grade",
          value: "A++",
          desc: "National Accreditation"
        },
        {
          label: "Campus Size",
          value: "75+ Acres",
          desc: "Tech Campus"
        },
        {
          label: "Placement Rate",
          value: "96.4%",
          desc: "Placement Record"
        },
        {
          label: "R&D Patents",
          value: "140+",
          desc: "Patents Published"
        }
      ]
    },
    department: {
      title: "About The Department of EEE",
      subtitle: "Department of Electrical and Electronics Engineering",
      description: "The Department of Electrical and Electronics Engineering (EEE) has built an illustrious reputation for academic rigor and technical prowess. The department houses research facilities including Power Systems, Electric Vehicle Hub, Renewable Energy Center, and Embedded Systems Wing. Through symposiums like ELECTRAX, the department inspires students to explore technical challenges and engineer sustainable solutions.",
      pillars: [
        {
          title: "Power Systems & Smart Grids",
          desc: "Modern simulation software and real-time transmission grid testbenches.",
          icon: "grid"
        },
        {
          title: "EV & Green Energy Innovation",
          desc: "Dedicated battery management systems and solar microgrid laboratories.",
          icon: "battery-charging"
        },
        {
          title: "Embedded Robotics & IoT",
          desc: "Hands-on industrial automation, sensor networks, and microcontroller development.",
          icon: "cpu"
        },
        {
          title: "Industry Collaborations",
          desc: "Active MoUs with leading electrical giants for internships and live projects.",
          icon: "award"
        }
      ]
    }
  },

  // ---------------------------------------------------------------------------
  // 8. FAQ Section
  // ---------------------------------------------------------------------------
  faqs: [
    {
      q: "Who is eligible to participate in ElectraX 2026?",
      a: "Students currently enrolled in engineering disciplines or polytechnic institutions are eligible to participate."
    },
    {
      q: "Can a participant register for multiple events?",
      a: "Yes! The schedule has been optimized so participants can compete in one Technical and one Non-Technical event without time conflict."
    },
    {
      q: "Will on-spot registration be available?",
      a: "Online pre-registration is recommended. Limited on-spot registrations will be open at the registration counter between 08:30 AM and 09:00 AM on 24 September 2026."
    },
    {
      q: "Will all participants receive certificates?",
      a: "Yes. Every registered attendee will receive an official Certificate of Participation along with a symposium delegate kit and lunch."
    },
    {
      q: "Is accommodation available for outstation participants?",
      a: "Yes, accommodation can be arranged upon prior request with nominal charges. Please get in touch with our coordinators prior to the event."
    }
  ]
};
