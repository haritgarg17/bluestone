export const BRAND_INFO = {
  parentName: "Bluestone Buildcon",
  parentTagline: "Premier Turnkey Construction & Civil Engineering",
  units: [
    {
      id: "rs-design",
      name: "R S Design Studio",
      shortName: "R S Design",
      role: "Architectural & Blueprint Studio (North & West Zone)",
      territories: ["Delhi NCR", "Rajasthan", "Maharashtra", "Gujarat", "Punjab", "Haryana", "Uttar Pradesh", "Himachal Pradesh", "Jammu & Kashmir", "Uttarakhand", "Goa"],
      description: "Specialized in luxury residential elevations, climate-responsive structures, and master architectural planning for North and Western territories."
    },
    {
      id: "as-home",
      name: "A S Home Planner",
      shortName: "A S Home",
      role: "Architectural & Blueprint Studio (South, East & Central Zone)",
      territories: ["Karnataka", "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala", "West Bengal", "Odisha", "Bihar", "Jharkhand", "Madhya Pradesh", "Chhattisgarh", "Assam & North East"],
      description: "Pioneering tropical modernism, vastu-optimized floor layouts, and intelligent spatial zoning for Southern, Eastern, and Central regions."
    }
  ],
  contacts: {
    phonePrimary: "+91 8004300830",
    phoneSecondary: "+91 95699 56067",
    email: "bluestone.bildcon@gmail.com",
    instagram: "@bluestone.buildcon",
    address: "Corporate Hub: Sector 62, Noida, NCR & Branch Operations",
    nationalCoverage: "Serving all 28 States & 8 Union Territories across India"
  }
};

export const INDIAN_STATES = [
  { name: "Maharashtra", zone: "West", unitId: "rs-design" },
  { name: "Rajasthan", zone: "North", unitId: "rs-design" },
  { name: "Delhi NCR", zone: "North", unitId: "rs-design" },
  { name: "Uttar Pradesh", zone: "North", unitId: "rs-design" },
  { name: "Gujarat", zone: "West", unitId: "rs-design" },
  { name: "Punjab", zone: "North", unitId: "rs-design" },
  { name: "Haryana", zone: "North", unitId: "rs-design" },
  { name: "Karnataka", zone: "South", unitId: "as-home" },
  { name: "Telangana", zone: "South", unitId: "as-home" },
  { name: "Tamil Nadu", zone: "South", unitId: "as-home" },
  { name: "Kerala", zone: "South", unitId: "as-home" },
  { name: "Andhra Pradesh", zone: "South", unitId: "as-home" },
  { name: "West Bengal", zone: "East", unitId: "as-home" },
  { name: "Madhya Pradesh", zone: "Central", unitId: "as-home" },
  { name: "Bihar", zone: "East", unitId: "as-home" },
  { name: "Odisha", zone: "East", unitId: "as-home" },
  { name: "Goa", zone: "West", unitId: "rs-design" },
  { name: "Himachal Pradesh", zone: "North", unitId: "rs-design" },
  { name: "Uttarakhand", zone: "North", unitId: "rs-design" },
  { name: "Chhattisgarh", zone: "Central", unitId: "as-home" },
  { name: "Jharkhand", zone: "East", unitId: "as-home" },
  { name: "Assam & North East", zone: "East", unitId: "as-home" }
];

export const SERVICE_PACKAGES = [
  {
    id: "basic",
    name: "Architectural Concept Blueprint",
    tagline: "Essential 2D Layouts & Vastu Spatial Planning",
    regFee: 9999,
    finalFee: 25000,
    totalFee: 34999,
    features: [
      "Vastu-compliant 2D furniture layout",
      "Plot boundary & setback zoning analysis",
      "Single front elevation concept sketch",
      "Door/window schedule matrix",
      "Dedicated Studio Project Architect (assigned by territory)",
      "Digital proposal preview prior to final release"
    ],
    recommendedFor: "Individual plot owners planning initial home construction"
  },
  {
    id: "executive",
    name: "Executive 3D Architectural Masterplan",
    popular: true,
    tagline: "Photorealistic 3D Elevations + Full Engineering Set",
    regFee: 19999,
    finalFee: 49000,
    totalFee: 68999,
    features: [
      "Everything in Architectural Concept Blueprint",
      "High-resolution 3D daytime & dusk exterior elevations",
      "Full structural RCC civil framing drawings & foundation specs",
      "Electrical, plumbing & HVAC schematic drawings",
      "Sanction-ready municipal submission drawings",
      "3 Revision rounds included",
      "Seamless handover to Bluestone Buildcon construction team"
    ],
    recommendedFor: "Bespoke villas, luxury duplexes & independent residences"
  },
  {
    id: "royal",
    name: "Signature Royal Estate Package",
    tagline: "Ultra-Luxury Architectural & Landscape Master Suite",
    regFee: 34999,
    finalFee: 85000,
    totalFee: 119999,
    features: [
      "Complete 360° architectural virtual walkthrough animation",
      "Comprehensive structural, MEP & soil seismic engineering package",
      "Landscape & outdoor pool/courtyard architecture plan",
      "Detailed BOQ (Bill of Quantities) for zero cost overruns",
      "Senior Principal Architect consultation",
      "Priority project scheduling for Bluestone turnkey construction execution"
    ],
    recommendedFor: "High-net-worth farmhouses, sprawling estates & luxury commercial builds"
  }
];

export const INITIAL_REGISTRATIONS = [
  {
    id: "BB-2026-0493",
    clientName: "Ananya Deshmukh",
    phone: "+91 98234 11209",
    address: "Plot 42, Green Meadows, Baner",
    city: "Pune",
    state: "Maharashtra",
    unitId: "rs-design",
    unitName: "R S Design Studio",
    plotSize: "3,200 Sq. Ft. (40x80 ft)",
    plotImage: "/hero_villa.jpg",
    requirements: "Contemporary 4BHK duplex with double-height living room, terracotta brise-soleil, north-facing vastu entry, and rooftop solar terrace.",
    packageId: "executive",
    packageName: "Executive 3D Architectural Masterplan",
    regFeePaid: 19999,
    regFeeDate: "24 Feb 2026",
    finalFee: 49000,
    finalFeePaid: false,
    status: "proposal_ready", // registered | design_in_progress | proposal_ready | completed
    proposalUrl: "/sample_blueprint.jpg",
    proposalDate: "28 Feb 2026",
    finalDownloadReady: false,
    notes: "Design proposal prepared by R S Design Studio team. Ready for client inspection and final clearance."
  },
  {
    id: "BB-2026-0812",
    clientName: "Dr. Vikram Malhotra",
    phone: "+91 94140 77321",
    address: "C-14, Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    unitId: "rs-design",
    unitName: "R S Design Studio",
    plotSize: "4,500 Sq. Ft. (50x90 ft)",
    plotImage: null,
    requirements: "Heritage-contemporary fusion villa with sandstone arches, inner courtyard with water body, 5 bedrooms and clinic chamber.",
    packageId: "royal",
    packageName: "Signature Royal Estate Package",
    regFeePaid: 34999,
    regFeeDate: "27 Feb 2026",
    finalFee: 85000,
    finalFeePaid: false,
    status: "design_in_progress",
    proposalUrl: null,
    proposalDate: null,
    finalDownloadReady: false,
    notes: "Site zoning completed. Concept drafting under review with Chief Architect."
  },
  {
    id: "BB-2026-0118",
    clientName: "Rajesh K. Nair",
    phone: "+91 98450 66211",
    address: "Plot 88, Palm Meadows, Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
    unitId: "as-home",
    unitName: "A S Home Planner",
    plotSize: "3,800 Sq. Ft. (45x85 ft)",
    plotImage: "/as_bungalow.jpg",
    requirements: "Sustainable tropical villa with sloping terracotta roofs, rainwater harvesting, open verandah and passive cooling.",
    packageId: "executive",
    packageName: "Executive 3D Architectural Masterplan",
    regFeePaid: 19999,
    regFeeDate: "10 Feb 2026",
    finalFee: 49000,
    finalFeePaid: true,
    status: "completed",
    proposalUrl: "/sample_blueprint.jpg",
    proposalDate: "16 Feb 2026",
    finalDownloadReady: true,
    notes: "All payments settled. Approved architectural blueprints released for municipal submission & Bluestone ground breaking."
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: "port-1",
    title: "The Amber Pavilion Estate",
    category: "Luxury Villa",
    unit: "R S Design Studio",
    unitId: "rs-design",
    area: "6,400 sq.ft.",
    image: "/rs_villa.jpg",
    description: "Cantilevered stone massing harmonized with indigenous Dholpur sandstone and motorized teak louvers for climate mitigation."
  },
  {
    id: "port-2",
    title: "Serene Courtyard Residence",
    category: "Tropical Residential",
    unit: "A S Home Planner",
    unitId: "as-home",
    area: "4,800 sq.ft.",
    image: "/as_bungalow.jpg",
    description: "Deep clay-tile overhanging eaves, exposed laterite pillars, and an internal central lily pond maximizing natural cross-ventilation."
  },
  {
    id: "port-3",
    title: "Skyline Lumina Commercial Hub",
    category: "Commercial",
    unit: "Bluestone Buildcon",
    unitId: "bluestone",
    area: "34,000 sq.ft.",
    image: "/bluestone_construction.jpg",
    description: "Turnkey structural execution featuring post-tensioned slabs, high-performance acoustic facade, and zero-defect civil handover."
  },
  {
    id: "port-4",
    title: "The Travertine Terrace Villa",
    category: "Luxury Villa",
    unit: "R S Design Studio",
    unitId: "rs-design",
    area: "5,200 sq.ft.",
    image: "/hero_villa.jpg",
    description: "Terraced multi-level family sanctuary incorporating warm beige stone cladding, infinity reflection pool, and expansive landscape gardens."
  }
];

export const CONSTRUCTION_PROJECTS = [
  {
    id: "proj-1",
    title: "The Royal Orchard Enclave",
    client: "Shri V. Singhania",
    plotSize: "5,000 Sq. Ft.",
    builtArea: "7,800 Sq. Ft.",
    timeline: "14 Months (Delivered Ahead of Schedule)",
    stage: "Delivered & Handover Completed",
    architecturalUnit: "R S Design Studio",
    executionLead: "Bluestone Buildcon Civil Directorate",
    image: "/hero_villa.jpg",
    highlights: [
      "Grade M35 RMC structural frame with anti-seismic ductile detailing",
      "Full Italian marble flooring & bespoke Burma teak wood joinery",
      "Solar rooftop 12kW captive installation with net metering",
      "Turnkey civil construction executed by Bluestone Buildcon"
    ]
  },
  {
    id: "proj-2",
    title: "Breeze Crest Lakeside Bungalow",
    client: "K. R. Venkatraman",
    plotSize: "4,200 Sq. Ft.",
    builtArea: "5,600 Sq. Ft.",
    timeline: "Ongoing — Month 9 of 12",
    stage: "Finishing & MEP Installations",
    architecturalUnit: "A S Home Planner",
    executionLead: "Bluestone Buildcon South Operations",
    image: "/as_bungalow.jpg",
    highlights: [
      "Custom terracotta louvers integrated for ambient thermal buffering",
      "Reinforced concrete slab with integrated radiant cooling pipes",
      "100% rainwater percolation recharge pits and greywater recycle",
      "Architectural drawings designed by A S Home Planner"
    ]
  },
  {
    id: "proj-3",
    title: "Aura Horizon Commercial Plaza",
    client: "Apex Infra Consortium",
    plotSize: "18,000 Sq. Ft.",
    builtArea: "42,000 Sq. Ft.",
    timeline: "Ongoing — Month 6 of 18",
    stage: "Superstructure 4th Floor Casting",
    architecturalUnit: "R S Design Studio",
    executionLead: "Bluestone Buildcon Industrial Division",
    image: "/bluestone_construction.jpg",
    highlights: [
      "Double basement retaining walls using high-grade contiguous piling",
      "High-speed tower crane logistics with strict zero-incident safety audit",
      "Energy-efficient envelope design cutting HVAC load by 32%",
      "Complete design & execution managed under one unified umbrella"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Sunil & Radhika Agarwal",
    city: "Jaipur, Rajasthan",
    project: "6,000 sq.ft. Luxury Haveli Residence",
    rating: 5,
    studioTagged: "R S Design Studio (Drawings) + Bluestone Buildcon (Execution)",
    quote: "The seamless collaboration between R S Design Studio for our drawings and Bluestone Buildcon for actual civil construction saved us lakhs. The watermarked proposal preview allowed us to adjust our living room layout before making the final payment. Outstanding professionalism!"
  },
  {
    id: "test-2",
    name: "Dr. Murali Mohan",
    city: "Hyderabad, Telangana",
    project: "4BHK Contemporary Tropical Home",
    rating: 5,
    studioTagged: "A S Home Planner (Drawings) + Bluestone Buildcon (Execution)",
    quote: "A S Home Planner understood the local climate and Vastu constraints of our plot in Hyderabad perfectly. When the drawings were completed, Bluestone's construction division took over without a single communication gap. Truly a power team."
  },
  {
    id: "test-3",
    name: "Capt. Arvind Sharma (Retd.)",
    city: "Dehradun, Uttarakhand",
    project: "3-Tier Hillside Villa",
    rating: 5,
    studioTagged: "R S Design Studio (Drawings)",
    quote: "The online registration and two-stage payment system was crystal clear. We paid the nominal registration fee, received our detailed blueprint proposal, reviewed every dimension, and unlocked the CAD bundle instantly upon final payment. Exemplary standard."
  }
];
