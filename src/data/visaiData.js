// VISAI 2027 Centralized Data Store & Configuration
// Host: Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai
// Tagline: "Real Problems. Real Innovation. Real Impact."

export const DEMO_CREDENTIALS = [
  {
    role: "admin",
    name: "Dr. K. Senthil Kumar (Convener)",
    email: "admin@visai.veltech.edu.in",
    password: "admin",
    title: "Chief Admin & Organizing Committee",
    badge: "Super Admin",
    color: "#dc2626",
    description: "Manage registrations, track shortlisting, stall revenue & compile official souvenir"
  },
  {
    role: "participant",
    name: "Arjun Ramanathan (Team ByteCraft)",
    email: "participant@gmail.com",
    password: "participant",
    title: "Registered Team Lead",
    badge: "Participant (Software)",
    color: "#2563eb",
    teamName: "Team ByteCraft",
    track: "Software Track",
    problemCode: "VISAI-SDG09-IND03",
    description: "Submit initial abstract/PPT, track screening, upload final abstract for publication"
  },
  {
    role: "jury",
    name: "Dr. Marcus Vance & Er. R. Natarajan",
    email: "jury@industry.org",
    password: "jury",
    title: "Industry Grand Jury (Renault Nissan & L&T)",
    badge: "Grand Jury",
    color: "#7c3aed",
    description: "Evaluate teams across 4 internal review rounds, score innovation, impact & prototype"
  },
  {
    role: "coordinator",
    name: "Prof. S. Divya & Tech Support Team",
    email: "coordinator@veltech.edu.in",
    password: "coordinator",
    title: "Venue & Infrastructure Lead",
    badge: "Coordinator",
    color: "#059669",
    description: "Hardware component approvals, 24x7 lab power, hostel & food coordination"
  }
];

export const DRAFT_TICKER_DATA = [
  { id: 'dt-1', type: 'DRAFT PS', code: 'VISAI-SDG06-IND01', title: 'Effluent AI Detection (Viruksa)', tag: 'Draft Problem' },
  { id: 'dt-2', type: 'DRAFT SUBMISSION', code: 'VISAI-SDG07-IND02', title: 'Team VoltGuardians (Score: 97/100 • Grand Winner)', tag: 'Hardware MVP' },
  { id: 'dt-3', type: 'DRAFT PS', code: 'VISAI-SDG09-IND03', title: 'Valve Ultrasonic Cavitation ML (L&T Valves)', tag: 'Software MVP' },
  { id: 'dt-4', type: 'DRAFT SUBMISSION', code: 'VISAI-SDG11-IND04', title: 'Team RoboVanguard: SLAM AGV (Ashok Leyland)', tag: 'Hardware Pilot' },
  { id: 'dt-5', type: 'DRAFT REVIEW', code: 'VISAI-SDG12-IND06', title: 'Team EcoSort: NIR Polymer Spectrometer', tag: 'Screening Stage' },
  { id: 'dt-6', type: 'LIVE VENUE', code: 'HALL B / LAB 4', title: 'Maker Space & Soldering Rigs Ready (24/7 Grid)', tag: 'Logistics' }
];

export const SDG_LIST = [
  { id: 1, code: "SDG01", name: "No Poverty", color: "#E5243B", icon: "DollarSign" },
  { id: 2, code: "SDG02", name: "Zero Hunger", color: "#DDA63A", icon: "Utensils" },
  { id: 3, code: "SDG03", name: "Good Health and Well-being", color: "#4C9F38", icon: "HeartPulse" },
  { id: 4, code: "SDG04", name: "Quality Education", color: "#C5192D", icon: "GraduationCap" },
  { id: 5, code: "SDG05", name: "Gender Equality", color: "#FF3A21", icon: "Users" },
  { id: 6, code: "SDG06", name: "Clean Water and Sanitation", color: "#26BDE2", icon: "Droplets" },
  { id: 7, code: "SDG07", name: "Affordable and Clean Energy", color: "#FCC30B", icon: "Zap" },
  { id: 8, code: "SDG08", name: "Decent Work & Economic Growth", color: "#A21942", icon: "TrendingUp" },
  { id: 9, code: "SDG09", name: "Industry, Innovation & Infrastructure", color: "#FD6925", icon: "Cpu" },
  { id: 10, code: "SDG10", name: "Reduced Inequalities", color: "#DD1367", icon: "Scale" },
  { id: 11, code: "SDG11", name: "Sustainable Cities & Communities", color: "#FD9D24", icon: "Building2" },
  { id: 12, code: "SDG12", name: "Responsible Consumption & Production", color: "#BF8B2E", icon: "Recycle" },
  { id: 13, code: "SDG13", name: "Climate Action", color: "#3F7E44", icon: "Flame" },
  { id: 14, code: "SDG14", name: "Life Below Water", color: "#0A97D9", icon: "Fish" },
  { id: 15, code: "SDG15", name: "Life on Land", color: "#56C02B", icon: "Trees" },
  { id: 16, code: "SDG16", name: "Peace, Justice & Strong Institutions", color: "#00689D", icon: "Shield" },
  { id: 17, code: "SDG17", name: "Partnerships for the Goals", color: "#19486A", icon: "Handshake" }
];

export const INITIAL_PROBLEM_STATEMENTS = [
  {
    id: "ps-1",
    code: "VISAI-SDG06-IND01",
    title: "AI-Powered Real-Time Industrial Effluent Contamination Detection",
    track: "Software",
    sdgId: 6,
    sdgName: "Clean Water and Sanitation",
    sdgCode: "SDG 06",
    sdgColor: "#26BDE2",
    industryPartner: "Viruksa Engineering & Chemical Research Labs",
    releaseType: "On-Spot (Hackathon Venue)",
    releaseStatus: "Released at Venue",
    description: "Develop a computer vision and sensor telemetry analytics system to detect toxic micro-pollutant thresholds in factory effluent channels before river discharge.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "TimescaleDB"],
    impact: "Prevents toxic wastewater discharge across 140+ industrial zones in Chennai industrial belt.",
    industryOffer: "₹50,000 Direct Pilot Contract + Incubation Support",
    dummyVersionAvailable: true,
    mentor: "Dr. K. Ramanathan (Chief Chemist, Viruksa Eng.)"
  },
  {
    id: "ps-2",
    code: "VISAI-SDG07-IND02",
    title: "Autonomous EV Battery Health & Thermal Runaway Early Warning System",
    track: "Hardware",
    sdgId: 7,
    sdgName: "Affordable and Clean Energy",
    sdgCode: "SDG 07",
    sdgColor: "#FCC30B",
    industryPartner: "Renault Nissan Technology & Business Centre",
    releaseType: "Released 7-10 Days Prior",
    releaseStatus: "Available Now for Research & Architecture",
    description: "Design an edge-computing BMS sensor board integrating thermocouple arrays, impedance telemetry, and predictive thermal runaway algorithms to safeguard commercial EVs.",
    techStack: ["ESP32-S3", "CAN Bus", "FreeRTOS", "Edge Impulse ML", "Custom PCB"],
    impact: "Reduces battery degradation risks by 40% and provides critical 90-second passenger evacuation warning.",
    industryOffer: "Pre-placement Interview + R&D Testing Rig Access",
    dummyVersionAvailable: true,
    mentor: "Er. Vigneshwaran S. (Lead Battery Systems, Renault Nissan)"
  },
  {
    id: "ps-3",
    code: "VISAI-SDG09-IND03",
    title: "Predictive Valve Wear & Cavitation Analytics for High-Pressure Hydro Systems",
    track: "Software",
    sdgId: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    sdgCode: "SDG 09",
    sdgColor: "#FD6925",
    industryPartner: "Larsen & Toubro (L&T) Valves",
    releaseType: "On-Spot (Hackathon Venue)",
    releaseStatus: "Released at Venue",
    description: "Build an acoustic emission ML model capable of distinguishing laminar fluid flow from internal cavitation vortexes in superheated steam valves.",
    techStack: ["PyTorch", "Audio Signal Processing", "WASM", "Next.js", "Docker"],
    impact: "Prevents unannounced refinery shutdowns saving estimated millions in emergency downtime.",
    industryOffer: "Paid Summer Internship + Patent Drafting Assistance",
    dummyVersionAvailable: true,
    mentor: "Er. Ramesh Babu (Principal R&D Specialist, L&T Valves)"
  },
  {
    id: "ps-4",
    code: "VISAI-SDG11-IND04",
    title: "Smart Vision-Guided Modular AGV for Smart Warehouse Assembly Lines",
    track: "Hardware",
    sdgId: 11,
    sdgName: "Sustainable Cities & Communities",
    sdgCode: "SDG 11",
    sdgColor: "#FD9D24",
    industryPartner: "Ashok Leyland Autonomous R&D",
    releaseType: "Released 7-10 Days Prior",
    releaseStatus: "Available Now for Research & Architecture",
    description: "Build a sub-meter precision line and LiDAR SLAM automated guided vehicle chassis capable of transporting heavy engine manifolds between assembly cells.",
    techStack: ["ROS 2", "Raspberry Pi 5", "LiDAR", "BLDC Motor Drivers", "OpenCV"],
    impact: "Zero emission, ultra-low acoustic footprint logistics for heavy automotive plants.",
    industryOffer: "₹75,000 Cash Prize + Prototype Sponsorship by Ashok Leyland",
    dummyVersionAvailable: true,
    mentor: "Dr. Anand Chandran (Senior Robotics Lead, Ashok Leyland)"
  },
  {
    id: "ps-5",
    code: "VISAI-SDG03-IND05",
    title: "Decentralized AI Triage & Telemedicine Telemetry for Rural Primary Health Centers",
    track: "Software",
    sdgId: 3,
    sdgName: "Good Health and Well-being",
    sdgCode: "SDG 03",
    sdgColor: "#4C9F38",
    industryPartner: "HealthTech Innovations & Vel Tech Medical Research",
    releaseType: "On-Spot (Hackathon Venue)",
    releaseStatus: "Released at Venue",
    description: "Create an offline-first mobile and edge diagnostic assistant for rural health workers that parses retinal scans, cough audio, and vital signs with localized NLP.",
    techStack: ["React Native", "TensorFlow Lite", "SQLite", "WebRTC", "Whisper AI"],
    impact: "Brings rapid tier-1 diagnostic screening to villages without requiring continuous broadband.",
    industryOffer: "Incubation Grant via Vel Tech TBI + ₹30,000 Award",
    dummyVersionAvailable: true,
    mentor: "Dr. Meenakshi Sundaram (Vel Tech R&D Institute)"
  },
  {
    id: "ps-6",
    code: "VISAI-SDG12-IND06",
    title: "IoT-Assisted Smart Waste Sorting & Plastic Polymer Spectrometry Device",
    track: "Hardware",
    sdgId: 12,
    sdgName: "Responsible Consumption & Production",
    sdgCode: "SDG 12",
    sdgColor: "#BF8B2E",
    industryPartner: "Turbo Energy Private Limited",
    releaseType: "Released 7-10 Days Prior",
    releaseStatus: "Available Now for Research & Architecture",
    description: "Design a desktop automated sorting conveyor incorporating near-infrared reflectance sensors to identify HDPE, PET, and PP plastics in under 400ms.",
    techStack: ["NIR Sensors", "Arduino GIGA", "Stepper Actuators", "Pneumatic Ejectors"],
    impact: "Enhances urban municipal recycling purity from 54% to over 96%.",
    industryOffer: "Pre-seed Incubation Funding + Commercial Licensing Discussion",
    dummyVersionAvailable: true,
    mentor: "Er. K. Balaji (Operations Lead, Turbo Energy)"
  },
  {
    id: "ps-7",
    code: "VISAI-SDG13-IND07",
    title: "Hyperlocal Industrial Carbon Micro-Sequestration Telemetry & Carbon Credit Ledger",
    track: "Software",
    sdgId: 13,
    sdgName: "Climate Action",
    sdgCode: "SDG 13",
    sdgColor: "#3F7E44",
    industryPartner: "Tata Power & GreenTech Ventures",
    releaseType: "On-Spot (Hackathon Venue)",
    releaseStatus: "Released at Venue",
    description: "Build a zero-knowledge verified carbon credit auditing pipeline analyzing rooftop solar and industrial heat recapture sensors against carbon offset exchanges.",
    techStack: ["Rust", "FastAPI", "Polygon Blockchain", "React", "Grafana"],
    impact: "Democratizes carbon credit certification for mid-sized manufacturers across Tamil Nadu.",
    industryOffer: "₹60,000 Cash Grant + Direct Pilot with Tata Power Ventures",
    dummyVersionAvailable: true,
    mentor: "Dr. S. Jayakumar (Tata Power Clean Energy)"
  },
  {
    id: "ps-8",
    code: "VISAI-SDG02-IND08",
    title: "Precision Autonomous Drone Pollination & Multispectral Soil Nitrate Analyzer",
    track: "Hardware",
    sdgId: 2,
    sdgName: "Zero Hunger",
    sdgCode: "SDG 02",
    sdgColor: "#DDA63A",
    industryPartner: "Mahindra & Mahindra Farm Equipment",
    releaseType: "Released 7-10 Days Prior",
    releaseStatus: "Available Now for Research & Architecture",
    description: "Design a hexacopter drone equipped with optical flow cameras, electrostatic pollen sprayers, and down-facing NDVI multispectral soil sensors.",
    techStack: ["Pixhawk 6X", "PX4 Autopilot", "Jetson Orin Nano", "Multispectral Camera"],
    impact: "Increases crop yield by 24% and cuts synthetic fertilizer over-application by 35%.",
    industryOffer: "Commercial Field Trial at Mahindra Ag-Tech Park + ₹1,00,000 Sponsorship",
    dummyVersionAvailable: true,
    mentor: "Er. P. Venkatesan (Mahindra Farm Equipment R&D)"
  }
];

export const INITIAL_TEAMS = [
  {
    id: "team-101",
    teamName: "Team ByteCraft",
    institution: "Vel Tech R&D Institute of Science and Technology",
    track: "Software",
    leadName: "Arjun Ramanathan",
    email: "participant@gmail.com",
    members: ["Arjun Ramanathan (Lead)", "Priya Dharshini (ML)", "Gokul Nath (Fullstack)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG09-IND03",
    projectTitle: "AcoustiCheck: Ultrasonic Valve Cavitation Diagnostics",
    round1Score: 18,
    round2Score: 19,
    round3Score: 18,
    finalScore: 92,
    juryComments: "Outstanding model accuracy and elegant edge deployment demonstration.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: true
  },
  {
    id: "team-102",
    teamName: "RoboVanguard",
    institution: "College of Engineering, Guindy",
    track: "Hardware",
    leadName: "Karthik Subramanian",
    email: "karthik.robo@gmail.com",
    members: ["Karthik Subramanian (Lead)", "Sneha Roy (Embedded)", "Dinesh Kumar (Mechanical)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG11-IND04",
    projectTitle: "OmniTrack: Autonomous SLAM Warehouse Rover",
    round1Score: 19,
    round2Score: 17,
    round3Score: 19,
    finalScore: 94,
    juryComments: "Superb chassis stability and real-time obstacle avoidance under heavy payload.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: true
  },
  {
    id: "team-103",
    teamName: "AquaSentinel",
    institution: "PSG College of Technology, Coimbatore",
    track: "Software",
    leadName: "Naveen Prasath",
    email: "naveen.aqua@psgtech.ac.in",
    members: ["Naveen Prasath (Lead)", "Divya Mohan (Data)", "Harish V (Cloud)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG06-IND01",
    projectTitle: "HydroVision: Real-Time AI Effluent Monitoring Suite",
    round1Score: 17,
    round2Score: 18,
    round3Score: 17,
    finalScore: 89,
    juryComments: "Very strong SDG relevance. Real industrial telemetry integration needs minor tune.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: false
  },
  {
    id: "team-104",
    teamName: "VoltGuardians",
    institution: "National Institute of Technology, Tiruchirappalli",
    track: "Hardware",
    leadName: "Deepak Chawla",
    email: "deepak.volt@nitt.edu",
    members: ["Deepak Chawla (Lead)", "Ananya Iyer (Electronics)", "Mohammed Fazil (Firmware)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG07-IND02",
    projectTitle: "PyroSafe: Early Runaway BMS with Sub-Millisecond Isolation",
    round1Score: 20,
    round2Score: 19,
    round3Score: 20,
    finalScore: 97,
    juryComments: "Champion potential. Sub-millisecond isolation circuit showed exemplary performance.",
    abstractStatus: "Winner - Top Innovation",
    hardwareSafetyApproved: true
  },
  {
    id: "team-105",
    teamName: "NeuralHealth",
    institution: "SRM Institute of Science and Technology",
    track: "Software",
    leadName: "Shreya Verma",
    email: "shreya.neural@gmail.com",
    members: ["Shreya Verma (Lead)", "Kavitha R (Bio-informatics)", "Abhishek Jain (Mobile)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG03-IND05",
    projectTitle: "Sanjeevani AI: Offline-First Rural Triage Platform",
    round1Score: 16,
    round2Score: 18,
    round3Score: 18,
    finalScore: 88,
    juryComments: "Intuitive multi-lingual interface. Strong offline sync mechanism.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: true
  },
  {
    id: "team-106",
    teamName: "EcoSort Innovations",
    institution: "SASTRA Deemed University, Thanjavur",
    track: "Hardware",
    leadName: "Venkatesh Rao",
    email: "venkat.ecosort@sastra.ac.in",
    members: ["Venkatesh Rao (Lead)", "Manish Sundar (Sensors)", "Pooja Hegde (Control)"],
    status: "Under Screening",
    allocatedProblem: "VISAI-SDG12-IND06",
    projectTitle: "SpectraSort: High-Speed NIR Polymer Separation",
    round1Score: 0,
    round2Score: 0,
    round3Score: 0,
    finalScore: 0,
    juryComments: "Initial PPT submitted, waiting for screening round validation.",
    abstractStatus: "Submitted (Pending Review)",
    hardwareSafetyApproved: false
  },
  {
    id: "team-107",
    teamName: "CarbonPulse",
    institution: "IIT Madras Research Park / Anna University",
    track: "Software",
    leadName: "Kavya Sundaram",
    email: "kavya.carbon@annauniv.edu",
    members: ["Kavya Sundaram (Lead)", "Arun George (Blockchain)", "Nandini R (Fullstack)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG13-IND07",
    projectTitle: "PulseCarbon: Decentralized Industrial Offset Ledger",
    round1Score: 18,
    round2Score: 18,
    round3Score: 19,
    finalScore: 91,
    juryComments: "Innovative integration of smart meters with zero-knowledge audit proofs.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: true
  },
  {
    id: "team-108",
    teamName: "AgroAero Dynamics",
    institution: "Tamil Nadu Agricultural University (TNAU)",
    track: "Hardware",
    leadName: "Manojkumar Selvan",
    email: "manoj.agro@tnau.ac.in",
    members: ["Manojkumar Selvan (Lead)", "Keerthana B (Avionics)", "Raghavan K (Agriculture)"],
    status: "Shortlisted",
    allocatedProblem: "VISAI-SDG02-IND08",
    projectTitle: "AeroPollinate: Autonomous Electrostatic Hexacopter",
    round1Score: 19,
    round2Score: 18,
    round3Score: 18,
    finalScore: 93,
    juryComments: "Outstanding live flight test inside Vel Tech sports arena. Great nozzle precision.",
    abstractStatus: "Approved for Souvenir",
    hardwareSafetyApproved: true
  }
];

export const SOUVENIR_ARTICLES = [
  {
    id: "souvenir-01",
    teamName: "VoltGuardians",
    institution: "NIT Tiruchirappalli",
    track: "Hardware Track",
    award: "Grand Winner • 1st Prize Hardware Track",
    projectTitle: "PyroSafe: Early Runaway BMS with Sub-Millisecond Solid-State Isolation",
    problemCode: "VISAI-SDG07-IND02",
    sdgGoal: "SDG 07 – Affordable & Clean Energy",
    industryPartner: "Renault Nissan Technology & Business Centre",
    teamMembers: "Deepak Chawla, Ananya Iyer, Mohammed Fazil",
    mentor: "Er. Vigneshwaran S. (Lead Battery Systems, Renault Nissan)",
    problemDescription: "Thermal runaway in high-density lithium-ion battery packs poses critical fire hazards in commercial electric vehicles. Conventional fuses and thermal switches trigger after cellular breach occurs.",
    proposedSolution: "PyroSafe introduces a custom distributed sensor node embedded between pouch cells measuring delta-impedance and localized micro-expansion, communicating over high-speed isolated SPI to a sub-millisecond GaN disconnect switch.",
    technologyUsed: "ESP32-S3 Dual Core, GaN FET Solid State Switch, CAN FD, TinyML on-device inference, 4-Layer FR4 Impedance Matched PCB.",
    innovation: "Novel predictive impedance trajectory algorithm providing 90 seconds early warning before thermal critical threshold.",
    expectedImpact: "Eliminates cataclysmic EV battery fires and prevents cascading cell failure in heavy commercial fleets.",
    industryRelevance: "Evaluated by Renault Nissan technical leadership; chosen for sponsored hardware bench trials at Renault Nissan R&D Chennai.",
    futureScope: "Integration into solid-state battery chemistries and automotive ISO 26262 ASIL-D certification."
  },
  {
    id: "souvenir-02",
    teamName: "Team ByteCraft",
    institution: "Vel Tech R&D Institute of Science and Technology",
    track: "Software Track",
    award: "Grand Winner • 1st Prize Software Track",
    projectTitle: "AcoustiCheck: Ultrasonic Valve Cavitation Diagnostics & Remaining Life Prediction",
    problemCode: "VISAI-SDG09-IND03",
    sdgGoal: "SDG 09 – Industry, Innovation & Infrastructure",
    industryPartner: "Larsen & Toubro (L&T) Valves",
    teamMembers: "Arjun Ramanathan, Priya Dharshini, Gokul Nath",
    mentor: "Er. Ramesh Babu (Principal Specialist, L&T Valves)",
    problemDescription: "High-pressure industrial valves in power and petrochemical pipelines suffer from cavitation erosion that remains invisible until catastrophic line failure occurs, costing millions in downtime.",
    proposedSolution: "AcoustiCheck captures ultra-high frequency acoustic emissions (20kHz - 100kHz) from non-invasive clamp sensors, computes continuous spectrogram tensors, and utilizes a lightweight 1D-ResNet model running via WebAssembly in browser dashboards.",
    technologyUsed: "Python, PyTorch, Librosa, WebAssembly (WASM), Next.js / React 19, FastAPI, TimescaleDB, Docker.",
    innovation: "Zero-latency real-time spectrogram classification directly in browser web workers without needing cloud uplink.",
    expectedImpact: "Reduces unscheduled plant shut-downs by 35% and doubles valve operating lifespan via dynamic flow adjustment.",
    industryRelevance: "Directly solves L&T Valves challenge IND03; offer extended for student team patent filing through Vel Tech TBI.",
    futureScope: "Edge firmware port to ARM Cortex-M55 microcontrollers for direct embedding inside valve actuator heads."
  },
  {
    id: "souvenir-03",
    teamName: "RoboVanguard",
    institution: "College of Engineering, Guindy",
    track: "Hardware Track",
    award: "Best Prototype Award • Hardware Track",
    projectTitle: "OmniTrack: Autonomous SLAM Warehouse Rover for Automotive Assembly",
    problemCode: "VISAI-SDG11-IND04",
    sdgGoal: "SDG 11 – Sustainable Cities & Communities",
    industryPartner: "Ashok Leyland Autonomous R&D",
    teamMembers: "Karthik Subramanian, Sneha Roy, Dinesh Kumar",
    mentor: "Dr. Anand Chandran (Senior Robotics Lead, Ashok Leyland)",
    problemDescription: "Heavy automotive assembly lines require repetitive transport of engine blocks between machining cells, where fixed conveyor belts impede human movement and lack agility.",
    proposedSolution: "OmniTrack is a heavy-payload holonomic AGV featuring mecanum drive geometry, 2D LiDAR SLAM, and stereo vision fiducial tracking that maneuvers through 80cm narrow aisles with 5mm docking precision.",
    technologyUsed: "ROS 2 Humble, Raspberry Pi 5, RPLiDAR A2, BLDC Planetary Gear Motors, PID closed-loop velocity controller.",
    innovation: "Dynamic costmap replanning in presence of walking technicians, preventing production bottleneck stops.",
    expectedImpact: "Increases assembly line material turnaround by 28% while completely eliminating forklift transit hazards.",
    industryRelevance: "Ashok Leyland technical jury awarded ₹75,000 cash grant and invited the team to pilot inside Ennore production plant.",
    futureScope: "Fleet coordination over private 5G campus networks with automated battery swapping station."
  },
  {
    id: "souvenir-04",
    teamName: "AquaSentinel",
    institution: "PSG College of Technology, Coimbatore",
    track: "Software Track",
    award: "Outstanding SDG Impact Award",
    projectTitle: "HydroVision: Real-Time AI Effluent Spectrometry & Regulatory Compliance",
    problemCode: "VISAI-SDG06-IND01",
    sdgGoal: "SDG 06 – Clean Water and Sanitation",
    industryPartner: "Viruksa Engineering & Chemical Research Labs",
    teamMembers: "Naveen Prasath, Divya Mohan, Harish V",
    mentor: "Dr. K. Ramanathan (Viruksa Eng.)",
    problemDescription: "Industrial discharge channels are periodically tested manually, allowing momentary toxic spikes of heavy metals and surfactants to escape unnoticed into municipal waterways.",
    proposedSolution: "HydroVision connects automated optical density sensors and camera feeds to an automated anomaly detector that alerts factory engineers and environmental boards within 3 seconds of threshold breach.",
    technologyUsed: "FastAPI, OpenCV, YOLOv8-cls, React, WebSocket live streams, PostgreSQL with GeoJSON maps.",
    innovation: "Optical turbidity colorimetry combined with historical chemical signature forecasting.",
    expectedImpact: "Protects groundwater reserves surrounding industrial clusters and safeguards local farming communities.",
    industryRelevance: "Viruksa Engineering offered ₹50,000 pilot development contract and direct regulatory board integration trial.",
    futureScope: "Blockchain tamper-proof logging of effluent metrics for government environmental compliance audit."
  },
  {
    id: "souvenir-05",
    teamName: "AgroAero Dynamics",
    institution: "Tamil Nadu Agricultural University (TNAU)",
    track: "Hardware Track",
    award: "Best Agri-Tech Hardware Award",
    projectTitle: "AeroPollinate: Autonomous Electrostatic Hexacopter for Precision Agriculture",
    problemCode: "VISAI-SDG02-IND08",
    sdgGoal: "SDG 02 – Zero Hunger",
    industryPartner: "Mahindra & Mahindra Farm Equipment",
    teamMembers: "Manojkumar Selvan, Keerthana B, Raghavan K",
    mentor: "Er. P. Venkatesan (Mahindra Farm Equipment)",
    problemDescription: "Declining pollinator insect populations severely diminish fruit set in commercial apple, almond, and pomegranate orchards, causing up to 30% yield deficits.",
    proposedSolution: "A custom hexacopter drone equipped with electrostatic induction charging rings that impart opposite electrical charges to aerosolized pollen grains, guaranteeing adherence to floral stigmas during sub-meter GPS waypoints.",
    technologyUsed: "Pixhawk 6X Autopilot, Jetson Orin Nano, High Voltage DC Generator, Ultrasonic Proximity Sensors, Carbon Fiber Hexacopter Frame.",
    innovation: "Real-time flower blossom detection using YOLO-NAS on drone edge processor, spraying only when centered over active blossoms.",
    expectedImpact: "Achieves 92% blossom fertilization rate while reducing pollen waste by 60% compared to ground blowers.",
    industryRelevance: "Mahindra Ag-Tech leadership invited team for commercial orchard trials in Maharashtra and offered ₹1,00,000 grant.",
    futureScope: "Swarm autonomy allowing 4 drones to pollinate 20-acre commercial farms cooperatively in 3 hours."
  },
  {
    id: "souvenir-06",
    teamName: "CarbonPulse",
    institution: "IIT Madras Research Park / Anna University",
    track: "Software Track",
    award: "Grand Finale Runner-Up • Software Track",
    projectTitle: "PulseCarbon: Decentralized Industrial Offset Ledger & Zero-Knowledge Verification",
    problemCode: "VISAI-SDG13-IND07",
    sdgGoal: "SDG 13 – Climate Action",
    industryPartner: "Tata Power & GreenTech Ventures",
    teamMembers: "Kavya Sundaram, Arun George, Nandini R",
    mentor: "Dr. S. Jayakumar (Tata Power Clean Energy)",
    problemDescription: "Mid-sized factories generate carbon credits from green energy installations but cannot afford expensive third-party international auditing firms to certify their offsets.",
    proposedSolution: "PulseCarbon connects smart electric meters and solar inverters to cryptographic Zero-Knowledge proof generators (zk-SNARKs) that prove energy reduction without revealing proprietary factory operating volume.",
    technologyUsed: "Rust, Circom, Polygon zkEVM, Next.js 15, TimescaleDB, Python FastAPI, WebSockets.",
    innovation: "Instantaneous cryptographic verification of renewable kilowatt-hours directly on public blockchain ledgers without manual audits.",
    expectedImpact: "Cuts carbon credit verification timeline from 8 months to 15 seconds, unlocking green finance for MSMEs.",
    industryRelevance: "Selected by Tata Power Clean Energy team for pilot integration across 10 commercial industrial clusters.",
    futureScope: "Cross-border tokenized carbon credit trading platform compliant with Article 6 of Paris Climate Agreement."
  },
  {
    id: "souvenir-07",
    teamName: "NeuralHealth",
    institution: "SRM Institute of Science and Technology",
    track: "Software Track",
    award: "Healthcare Innovation Award",
    projectTitle: "Sanjeevani AI: Offline-First Edge Triage & Telemedicine Telemetry",
    problemCode: "VISAI-SDG03-IND05",
    sdgGoal: "SDG 03 – Good Health and Well-being",
    industryPartner: "HealthTech Innovations & Vel Tech Medical Research",
    teamMembers: "Shreya Verma, Kavitha R, Abhishek Jain",
    mentor: "Dr. Meenakshi Sundaram (Vel Tech Medical)",
    problemDescription: "Rural health clinics lack full-time doctors; community health workers struggle to accurately screen diabetic retinopathy, cardiac arrhythmias, and respiratory illness with basic vitals.",
    proposedSolution: "A portable Android tablet suite running quantised ONNX neural models locally without internet, parsing fundus photo uploads and digital stethoscope wav audio in under 1.2 seconds.",
    technologyUsed: "TensorFlow Lite, Kotlin, SQLite, Whisper AI Speech-to-Text, WebRTC Store-and-Forward Sync.",
    innovation: "Multi-modal disease risk aggregation generating localized vernacular audio summaries for patient comprehension.",
    expectedImpact: "Early detection of cardiovascular and diabetic symptoms for over 50,000 rural residents in pilot taluks.",
    industryRelevance: "Vel Tech TBI allocated ₹30,000 seed incubation stipend and assigned clinical trial mentors.",
    futureScope: "Wearable ECG patch telemetry integration with automated SMS dispatch to district medical headquarters."
  },
  {
    id: "souvenir-08",
    teamName: "EcoSort Innovations",
    institution: "SASTRA Deemed University, Thanjavur",
    track: "Hardware Track",
    award: "Circular Economy Award",
    projectTitle: "SpectraSort: High-Speed NIR Polymer Separation Device",
    problemCode: "VISAI-SDG12-IND06",
    sdgGoal: "SDG 12 – Responsible Consumption & Production",
    industryPartner: "Turbo Energy Private Limited",
    teamMembers: "Venkatesh Rao, Manish Sundar, Pooja Hegde",
    mentor: "Er. K. Balaji (Operations Lead, Turbo Energy)",
    problemDescription: "Manual plastic sorting cannot distinguish clear PET bottles from clear PVC or HDPE flocs, causing entire recycling batches to contaminate during remelting.",
    proposedSolution: "An automated conveyor belt featuring a tungsten-halogen illumination array and near-infrared reflectance spectrometer coupled to a high-speed pneumatic jet array operating at 400ms intervals.",
    technologyUsed: "Arduino GIGA R1 WiFi, NIR Spectrometer, SMC High-Speed Solenoid Valves, OpenCV, Custom Aluminium Chassis.",
    innovation: "Near-infrared absorption fingerprinting capable of identifying 7 distinct polymer classes at 2.4 meters/second conveyor velocity.",
    expectedImpact: "Boosts post-consumer resin purity to 98.6%, drastically increasing commercial re-granulate market value.",
    industryRelevance: "Turbo Energy extended pilot discussion for implementation in campus industrial cafeteria recycling stations.",
    futureScope: "Integration into municipal MRF (Materials Recovery Facility) sorting lines with optical colour sorter attachment."
  }
];

export const TEAM_PITCH_SLIDES = [
  {
    slideNumber: 1,
    title: "Project Overview & Executive Summary",
    subtitle: "AcoustiCheck: Ultrasonic Valve Cavitation Diagnostics",
    badge: "Slide 1 of 6 • Executive Brief",
    content: {
      tagline: "Preventing Catastrophic Pipeline Failures with Non-Invasive Acoustic Machine Learning",
      team: "Team ByteCraft • Vel Tech R&D Institute",
      challenge: "VISAI-SDG09-IND03 (Larsen & Toubro Valves)",
      bullets: [
        "High-pressure steam & hydro valves suffer from silent cavitation erosion that costs millions in unannounced plant shutdowns.",
        "AcoustiCheck delivers non-invasive clamp ultrasonic sensors + 1D-ResNet WebAssembly inference directly in browser.",
        "Zero-cloud dependency: works 100% offline inside isolated refinery control rooms."
      ]
    }
  },
  {
    slideNumber: 2,
    title: "Industry Problem Statement & Impact",
    subtitle: "The Multi-Million Dollar Cavitation Crisis",
    badge: "Slide 2 of 6 • Problem Analysis",
    content: {
      tagline: "L&T Valves Challenge: Predicting Wear Before Structural Breach",
      challenge: "UN SDG 09: Industry, Innovation & Infrastructure",
      bullets: [
        "Cavitation micro-jets generate localized pressures up to 1,000 MPa, eroding valve seats within weeks.",
        "Existing vibration sensors only trigger after massive mechanical imbalance is already irreversible.",
        "Refinery downtime costs range from ₹15 Lakhs to ₹1.2 Crores per day during emergency pipeline isolation.",
        "Target: Sub-millisecond acoustic transient detection between 20kHz – 100kHz frequency bands."
      ]
    }
  },
  {
    slideNumber: 3,
    title: "Technical Architecture & Sensor Interfacing",
    subtitle: "End-to-End Edge Telemetry & WebAssembly Pipeline",
    badge: "Slide 3 of 6 • System Architecture",
    content: {
      tagline: "Non-Invasive Acoustic Piezo Clamp -> ADC -> WASM Tensor Engine",
      bullets: [
        "Acoustic Emission Pickup: PZT clamp sensor attached to valve neck (no pipeline drilling required).",
        "Signal Processing: 250kS/s high-speed sampling with continuous STFT spectrogram transformation.",
        "Machine Learning Model: 1D-ResNet compressed to 4.2MB ONNX runtime running inside client web workers via WASM.",
        "Real-Time Visualization: 60fps spectrogram waterfall rendered on HTML5 canvas with zero server lag."
      ]
    }
  },
  {
    slideNumber: 4,
    title: "Working Solution & Live Benchmarks",
    subtitle: "Empirical Results Tested on L&T Valve Rig",
    badge: "Slide 4 of 6 • Prototype Demonstration",
    content: {
      tagline: "96.4% Cavitation Classification Accuracy with <12ms Latency",
      bullets: [
        "Tested across 4 operating regimes: Laminar Flow, Incipient Cavitation, Developed Cavitation, Flashing.",
        "Inference Speed: 8.4ms per audio chunk on standard workstation browser.",
        "False Positive Rate: <1.2% in presence of background industrial pump acoustic noise.",
        "Remaining Useful Life (RUL) estimator predicts valve seat failure within ±14 days precision."
      ]
    }
  },
  {
    slideNumber: 5,
    title: "SDG 09 Impact & Commercial Feasibility",
    subtitle: "Resilient Infrastructure & Measurable Economic Returns",
    badge: "Slide 5 of 6 • Impact & ROI",
    content: {
      tagline: "Direct Cost Savings for Chemical Plants & Energy Grids",
      bullets: [
        "Reduces emergency valve replacement frequency by 40%.",
        "Prevents toxic chemical pipeline leaks into surrounding agricultural zones (SDG 06 & SDG 09 synergy).",
        "Low installation cost: ₹18,000 per sensing node vs ₹6,50,000 for inline ultrasonic flowmeters.",
        "Scalable across 140+ manufacturing installations in Tamil Nadu industrial corridors."
      ]
    }
  },
  {
    slideNumber: 6,
    title: "Patent Potential, Incubation & Future Roadmap",
    subtitle: "From VISAI 2027 Hackathon to Commercial Enterprise",
    badge: "Slide 6 of 6 • Future Roadmap",
    content: {
      tagline: "Patent Filing Supported by Vel Tech TBI & Industry Pilot with L&T",
      bullets: [
        "Patent Scope: 'Method and apparatus for non-invasive acoustic classification of high-pressure fluid cavitation using client-side edge tensor inference'.",
        "Incubation: Accepted into Vel Tech Technology Business Incubator (TBI) with ₹5 Lakhs seed grant eligibility.",
        "Phase 2 Roadmap: Porting inference model to ARM Cortex-M55 microcontrollers for direct valve head mounting.",
        "Malaysia International Presentation: Selected by Vel Tech Grand Jury to present research findings abroad."
      ]
    }
  }
];

export const STALLS_DATA = [
  {
    id: "stall-1",
    name: "Vel Tech Innovation Incubator (TBI)",
    category: "Technology & Business Promotion",
    fee: "₹1,500",
    status: "Confirmed",
    location: "Hall A - Booth 01",
    offering: "Seed Grants up to ₹10 Lakhs, Patent Assistance, Mentorship"
  },
  {
    id: "stall-2",
    name: "RoboRobotics & Sensors Kit Station",
    category: "Technology & Component Stall",
    fee: "₹2,500",
    status: "Confirmed",
    location: "Hall B - Maker Space",
    offering: "Microcontrollers, Sensors, 3D printing filament, soldering supplies"
  },
  {
    id: "stall-3",
    name: "Ashok Leyland & Renault Tech Showcase",
    category: "Corporate Sponsor Exhibition",
    fee: "Sponsored Partner",
    status: "Confirmed",
    location: "Central Concourse",
    offering: "Live EV Chassis, Telematics Demonstrator, HR Recruitment Desk"
  },
  {
    id: "stall-4",
    name: "Café Madras Filter & Fast Bites",
    category: "Food Stall",
    fee: "₹6,000",
    status: "Confirmed",
    location: "Open Quadrangle - Food Court 01",
    offering: "24/7 Hot filter coffee, sandwiches, quick dosas & energy drinks"
  },
  {
    id: "stall-5",
    name: "GreenFuel Healthy Salads & Smoothies",
    category: "Food Stall",
    fee: "₹5,500",
    status: "Confirmed",
    location: "Open Quadrangle - Food Court 02",
    offering: "Nutritional protein shakes, fruit bowls, night midnight snacks"
  }
];

export const HACKATHON_ROUNDS = [
  {
    round: "Round 1",
    title: "Problem & Solution Validation",
    hours: "Hours 06 – 10",
    focus: "Understanding of problem, proposed solution architecture, SDG target alignment, feasibility.",
    evaluator: "Internal Faculty & Technical Mentors",
    weightage: "20%"
  },
  {
    round: "Round 2",
    title: "Technical Review & Architecture Check",
    hours: "Hours 18 – 22",
    focus: "Code repository progress, hardware schematic validation, database schemas, sensor interfacing.",
    evaluator: "Industry Technical Specialists",
    weightage: "25%"
  },
  {
    round: "Round 3",
    title: "Prototype & MVP Demonstration",
    hours: "Hours 30 – 34",
    focus: "Working demonstration, API integration, physical hardware bench test, robustness, UI/UX polish.",
    evaluator: "Senior Domain Experts",
    weightage: "25%"
  },
  {
    round: "Final Round",
    title: "Grand Jury & Industry Finale",
    hours: "Hours 36 / 48",
    focus: "Live stage pitching to Grand Jury: Innovation, Scalability, SDG Impact, Commercial & Patent Viability.",
    evaluator: "Grand Jury (Industry VPs, MNC Directors, Vel Tech Leadership)",
    weightage: "30%"
  }
];
