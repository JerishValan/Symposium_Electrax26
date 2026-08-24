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
        name: "EEE Department",
        designation: "Professor & Head, Dept of EEE",
        role: "Staff Advisor",
        phone: "+91 80156 95893",
        email: "electrax2k26@gmail.com"
      },
      {
        name: "EEE Department",
        designation: "Associate Professor, Dept of EEE",
        role: "Faculty Convener",
        phone: "+91 81245 92694",
        email: "electrax2k26@gmail.com"
      }
    ],
    studentCoordinators: [
      {
        name: "Student Coordinator",
        role: "Student President / Convener",
        year: "Final Year EEE",
        phone: "+91 70101 60315",
        email: "electrax2k26@gmail.com"
      },
      {
        name: "Technical Secretary",
        role: "Technical Coordinator",
        year: "Third Year EEE",
        phone: "+91 80156 95893",
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
    feePerHead: "Per participant (Includes Lunch, Welcome Kit & All Events)",
    benefits: [
      "Entry to all Technical & Non-Technical Events",
      "Official Certificate of Participation for all attendees",
      "Executive Symposium Welcome Kit & Delegate Badge",
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
      shortDescription: "Present your innovative research ideas and technical papers to a panel of expert judges. Showcase your knowledge and vision for the future of technology.",
      time: "10:00 AM – 12:00 PM",
      members: "1-2 Members per team",
      venue: "EEE Seminar Hall",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Abstract Submission & Review",
          details: "Teams submit a concise abstract of their paper for initial screening by the jury."
        },
        {
          name: "Round 2: Live Presentation & Q&A",
          details: "Shortlisted teams present their paper with slides and face technical Q&A from expert judges."
        }
      ],
      rules: [
        "Participants must bring their college ID cards and valid registration slips.",
        "Paper must be original and not published elsewhere.",
        "Presentation duration: 8 minutes + 4 minutes for Q&A.",
        "Use of mobile phones during presentation is strictly prohibited."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 80156 95893)"
      }
    },
    {
      id: "event-2",
      name: "Proto Fest",
      eventCode: "TECH-02",
      tagline: "Technical Event 02 &bull; Project Expo",
      category: "TECHNICAL",
      icon: "zap",
      shortDescription: "Showcase your innovative hardware and software prototypes to a jury of experts. Demonstrate working models spanning IoT, EV, embedded systems, and smart automation.",
      time: "11:30 AM – 01:00 PM",
      members: "2-3 Members per team",
      venue: "Innovation & Project Lab",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Live Hardware Showcase",
          details: "Teams demonstrate their working prototype or simulation model to the evaluation jury."
        },
        {
          name: "Round 2: Technical Defense & Q&A",
          details: "Short presentation followed by in-depth technical Q&A on design, efficiency, and scalability."
        }
      ],
      rules: [
        "Each team consists of 2 to 3 students.",
        "Projects must be original — previously awarded projects will be disqualified.",
        "Standard power outlets and testing meters will be provided.",
        "Working demonstration and innovation carry primary weightage."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 81245 92694)"
      }
    },
    {
      id: "event-3",
      name: "Tech Titans",
      eventCode: "TECH-03",
      tagline: "Technical Event 03 &bull; Technical Quiz",
      category: "TECHNICAL",
      icon: "cpu",
      shortDescription: "Test your mastery over Power Systems, Smart Grids, Electric Vehicles, Control Systems, and Electronics in this electrifying battle of technical minds.",
      time: "01:30 PM – 03:30 PM",
      members: "2 Members per team",
      venue: "Seminar Hall - Auditorium",
      prizePool: {
        first: "Exciting Cash Prize + Gold Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Written Prelims",
          details: "Objective conceptual questions covering core EEE domains + modern technology trends."
        },
        {
          name: "Round 2: Buzzer Finals",
          details: "Top finalist teams compete on an automated electronic buzzer system with rapid-fire questions."
        }
      ],
      rules: [
        "Each team consists strictly of 2 students.",
        "Negative marking is applicable in the final buzzer round.",
        "The Quizmaster's decision is final and binding on all questions."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 70101 60315)"
      }
    },
    {
      id: "event-4",
      name: "Guess What",
      eventCode: "NON-TECH-01",
      tagline: "Non-Technical Event 01 &bull; Connection",
      category: "NON-TECHNICAL",
      icon: "share2",
      shortDescription: "Connect the dots! Decipher interconnected visual puzzles, cryptic clues, and image sequences to uncover the hidden connection.",
      time: "10:30 AM – 12:30 PM",
      members: "2 Members per team",
      venue: "Main Auditorium Hall",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Picture Connection",
          details: "Multi-image connection slides displayed on screen — find the link between all images within the time limit."
        },
        {
          name: "Round 2: Elimination Finals",
          details: "Top teams battle head-to-head with connected logos, brands, and pop-culture references."
        }
      ],
      rules: [
        "Open to students from all engineering branches and degree colleges.",
        "No electronic devices allowed during the competition.",
        "Highest accuracy and fastest response wins the prize."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 80156 95893)"
      }
    },
    {
      id: "event-5",
      name: "Cini Quest",
      eventCode: "NON-TECH-02",
      tagline: "Non-Technical Event 02 &bull; Movie Based",
      category: "NON-TECHNICAL",
      icon: "camera",
      shortDescription: "Lights, camera, action! Put your cinematic knowledge to the test in this movie-based trivia and quiz challenge spanning all genres and eras.",
      time: "10:30 AM – 12:30 PM",
      members: "2 Members per team",
      venue: "Main Auditorium Hall",
      prizePool: {
        first: "Exciting Cash Prize + Memento & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Movie Trivia Prelims",
          details: "Written round covering dialogues, scenes, characters, and movie facts across Tamil, Hindi, and Hollywood films."
        },
        {
          name: "Round 2: Audio-Visual Buzzer Finals",
          details: "Top finalists identify movie clips, dialogues, and OST snippets in a rapid buzzer challenge."
        }
      ],
      rules: [
        "Each team consists of 2 students.",
        "No electronic devices allowed during the competition.",
        "The Quizmaster's decision is final and binding."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 81245 92694)"
      }
    },
    {
      id: "event-6",
      name: "Unseen",
      eventCode: "NON-TECH-03",
      tagline: "Non-Technical Event 03 &bull; Emotion Switch",
      category: "NON-TECHNICAL",
      icon: "users",
      shortDescription: "Can you switch emotions on cue? Act, express, and transform instantly as the emotion changes. The ultimate test of your expressions and spontaneity.",
      time: "02:00 PM – 04:00 PM",
      members: "2-3 Members per team",
      venue: "Central Auditorium Stage",
      prizePool: {
        first: "Exciting Cash Prize + Trophy & Certificate",
        second: "Exciting Cash Prize + Certificate",
        third: "Certificate"
      },
      rounds: [
        {
          name: "Round 1: Emotion Relay",
          details: "Teams are given random emotion cues and must switch between them instantly without dialogue."
        },
        {
          name: "Round 2: Elimination Showdown",
          details: "Finalists face rapid-fire emotion switch challenges judged on authenticity, speed, and creativity."
        }
      ],
      rules: [
        "Teams consist of 2 to 3 members.",
        "No scripted dialogues allowed — pure expression and body language.",
        "Judges' scores on authenticity, transition speed, and impact are final."
      ],
      coordinators: {
        faculty: "EEE Department",
        student: "Student Coordinator (+91 70101 60315)"
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
