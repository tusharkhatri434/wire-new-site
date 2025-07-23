const EDMProducts = [
  {
    title: "EDM Wire",
    description: "EDM Wire is a specially engineered metallic wire used as an electrode in wire-cut EDM machines. It delivers exceptional conductivity, mechanical stability, and thermal performance for reliable and efficient machining.",
    heading: "Precision Wire Solutions for Electrical Discharge Machining",
    tags: ["EDM", "Machining"],
    keyFeatures: [
      "High Electrical Conductivity",
      "Uniform Diameter and Surface Finish",
      "Mechanical Strength & Tensile Control",
      "Oxidation Resistance",
      "Precision Winding"
    ],
    imgUrl: "edm-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Plain Brass EDM Wire",
    description: "A copper-zinc alloy wire designed for general-purpose EDM applications. Offers excellent stability, affordability, and ease of use.",
    heading: "Reliable General-Purpose EDM Wire",
    tags: ["Brass", "EDM"],
    keyFeatures: [
      "High purity CuZn37 alloy",
      "Excellent spark stability and conductivity",
      "Superior straightness and easy auto-threading",
      "Smooth surface finish",
      "Compatible with most EDM machines"
    ],
    imgUrl: "plain-brass.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Diffused Coated EDM Wire",
    description: "Engineered using a multi-layer diffusion process that bonds a zinc-rich alloy into a brass core for high cutting speed and accuracy.",
    heading: "High-Speed EDM Wire",
    tags: ["Zinc", "Brass", "EDM"],
    keyFeatures: [
      "Multi-layer zinc-rich diffusion coating",
      "Uniform surface hardness",
      "Excellent flushing in deep cuts",
      "Up to 30% faster than plain brass wire",
      "Better tolerance in taper cutting"
    ],
    imgUrl: "diffused-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zinc Diffused Coated EDM Wire",
    description: "A high-performance EDM wire with thick zinc layer over brass core, ideal for demanding conditions.",
    heading: "Advanced Zinc EDM Wire",
    tags: ["Zinc", "EDM"],
    keyFeatures: [
      "Thick, homogeneously diffused zinc layer",
      "Superior dielectric efficiency",
      "Enhanced flushing",
      "Unmatched cutting speeds",
      "Excellent rigidity and threadability"
    ],
    imgUrl: "zinc-diffused-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zinc Coated EDM Wire",
    description: "Pure zinc outer layer over brass core, optimized for modern high-speed EDM systems.",
    heading: "Zinc Coated EDM Wire",
    tags: ["Zinc", "EDM"],
    keyFeatures: [
      "Pure zinc coating with low melting point",
      "High-speed spark discharge",
      "Ideal for unmanned cutting cycles",
      "Bright white-silver color",
      "Reliable threading in submerged conditions"
    ],
    imgUrl: "zinc-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zari Wire",
    description: "Blends heritage craftsmanship with modern metallurgy for embroidery, weaving, and decorations.",
    heading: "Premium Quality Zari Wire",
    tags: ["Zari", "Decorative"],
    keyFeatures: [
      "Available in Real, Imitation, Half-Fine, M-Type, Flat Zari",
      "Silver-plated copper core",
      "Available in multiple metallic colors",
      "Used in fashion, crafts, and decor"
    ],
    imgUrl: "zari-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Molly Wire",
    description: "High-performance molybdenum wire for extreme temperatures, corrosion, and high load environments.",
    heading: "High-Temperature Molly Wire",
    tags: ["Molybdenum", "EDM", "Furnace"],
    keyFeatures: [
      "Extremely High Melting Point (2620°C)",
      "Excellent Dimensional Stability",
      "Corrosion & Oxidation Resistant",
      "Good Workability & Long Service Life"
    ],
    imgUrl: "molly-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Copper Extrusions"
  },
  {
    title: "Copper Wire",
    description: "High-purity copper wire offering excellent conductivity, formability, and corrosion resistance.",
    heading: "Versatile Copper Wire",
    tags: ["Copper", "Conductivity"],
    keyFeatures: [
      "≥ 99.9% Cu",
      "High Electrical Conductivity (≥97% IACS)",
      "Wide diameter range (0.10mm to 6.00mm)",
      "Available in Round/Flat/Spool/Coils"
    ],
    imgUrl: "copper-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Copper Extrusions"
  }
];

const brazingAndWeldingProducts = [
  {
    title: "Copper Wire for Induction Brazing",
    heading: "High-Conductivity Copper Brazing Wire",
    description: "Copper wire used as a filler material in induction brazing for strong, conductive joints.",
    keyFeatures: [
      "High Thermal & Electrical Conductivity",
      "Excellent Wetting on Base Metals",
      "Strong, Durable Joints",
      "Controlled & Clean Brazing Process"
    ],
    tags: ["Copper", "Brazing", "Induction"],
    imgUrl: "induction-brazing-wire.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Induction Brazing Wire & Rings",
    heading: "Induction Supplies",
    description: "Wire and rings for induction heating and joining in industrial applications.",
    keyFeatures: [
      "Pre-formed rings for uniform joints",
      "Excellent repeatability",
      "Reduces manual brazing time",
      "Suited for automation"
    ],
    tags: ["Rings", "Wire", "Induction"],
    imgUrl: "induction-wire-rings.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Brass Brazing Wire (RBCuZn-c)",
    heading: "Brass Brazing Wire for Strong Joints",
    description: "Copper-zinc alloy wire for induction brazing with strong mechanical strength.",
    keyFeatures: [
      "Lower Melting Point than Copper",
      "Good Flow Characteristics",
      "High Joint Strength",
      "Cost-Effective for HVAC and Electrical"
    ],
    tags: ["Brass", "Brazing"],
    imgUrl: "brass-brazing.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Copper Phosphor Brazing Wire",
    heading: "Phosphor Copper Brazing Filler",
    description: "Self-fluxing wire for copper-to-copper brazing with strong capillary action.",
    keyFeatures: [
      "Self-Fluxing for Copper",
      "Excellent Flow and Capillary Action",
      "Lower Melting Temperature",
      "Corrosion Resistance and Leak-Proof Joints"
    ],
    tags: ["Copper", "Phosphor"],
    imgUrl: "copper-phosphor-brazing.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Welding Wire",
    heading: "Precision Welding Wires",
    description: "High-precision wires for MIG/TIG welding producing defect-free welds.",
    keyFeatures: [
      "Clean Surface Finish and Tight Diameter Control",
      "Stable Arc & Low Spatter",
      "Corrosion-Resistant Joints",
      "Custom Spooling & Alloy Options"
    ],
    tags: ["Welding", "MIG", "TIG"],
    imgUrl: "welding-wire.png",
    category: "Brazing and Welding",
    subcategory: "Welding Consumables"
  },

  // Copper Alloy Group
  {
    title: "Er Cu Sia",
    heading: "Copper-Silicon Alloy Wire",
    description: "Used for welding copper and its alloys with good strength and thermal conductivity.",
    keyFeatures: [
      "High strength and corrosion resistance",
      "Good thermal conductivity",
      "Ideal for automotive and HVAC systems"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "er-cu-sia.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu",
    heading: "Pure Copper Welding Wire",
    description: "Designed for TIG/MIG welding applications requiring high conductivity.",
    keyFeatures: [
      "Excellent electrical conductivity",
      "Smooth arc and minimal spatter",
      "Suitable for copper-to-copper welding"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "er-cu.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu SnC",
    heading: "Tin-Copper Brazing Alloy",
    description: "Provides corrosion-resistant strong joints in copper piping.",
    keyFeatures: [
      "Improved corrosion resistance",
      "Strong joints",
      "Ideal for piping and tubing applications"
    ],
    tags: ["Copper", "Tin"],
    imgUrl: "er-cu-snc.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu Sn A",
    heading: "Bronze Brazing Wire",
    description: "General-purpose bronze alloy wire for wear resistance and strength.",
    keyFeatures: [
      "High strength and wear resistance",
      "Good machinability",
      "Used in bearings, pumps, and valves"
    ],
    tags: ["Copper", "Bronze"],
    imgUrl: "er-cu-sna.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "CuAlA1",
    heading: "Aluminum Bronze Welding Wire",
    description: "For joining dissimilar metals; ideal in marine & chemical industries.",
    keyFeatures: [
      "Excellent strength and corrosion resistance",
      "Good for dissimilar metals",
      "Used in marine and chemical industries"
    ],
    tags: ["Copper", "Aluminum Bronze"],
    imgUrl: "cuala1.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "CuAlA2",
    heading: "High Strength Aluminum Bronze Wire",
    description: "For aerospace, high-load machinery with superior crack resistance.",
    keyFeatures: [
      "Superior wear resistance",
      "Excellent hot crack resistance",
      "Common in aerospace and heavy machinery"
    ],
    tags: ["Copper", "Aluminum Bronze"],
    imgUrl: "cuala2.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Sudronic",
    heading: "Custom Copper Alloy",
    description: "Special application-specific copper alloy wire.",
    keyFeatures: [
      "Customized metallurgical properties",
      "Smooth arc characteristics",
      "Application-specific performance"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "sudronic.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },

  // Aluminum Group
  {
    title: "4043",
    heading: "Aluminum Alloy 4043",
    description: "Al-Si alloy for general welding with good corrosion resistance.",
    keyFeatures: [
      "Low cracking tendency",
      "Good corrosion resistance",
      "Smooth finish"
    ],
    tags: ["Aluminum"],
    imgUrl: "4043.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  },
  {
    title: "5357",
    heading: "Aluminum Alloy 5357",
    description: "Al-Mg alloy with excellent strength and ductility.",
    keyFeatures: [
      "High strength and impact resistance",
      "Good color match with base metal",
      "For marine and structural use"
    ],
    tags: ["Aluminum"],
    imgUrl: "5357.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  },
  {
    title: "4047",
    heading: "Aluminum Alloy 4047",
    description: "Higher silicon content for brazing and reduced cracking.",
    keyFeatures: [
      "Excellent fluidity for brazing",
      "Reduced cracking and shrinkage",
      "Used in automotive and heat exchanger industries"
    ],
    tags: ["Aluminum"],
    imgUrl: "4047.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  }
];

const consumableProducts = [
  {
    title: "Resin",
    heading: "Ion Exchange Resin for EDM",
    description: "High-purity ion-exchange resin for EDM dielectric purification and high-purity water systems.",
    keyFeatures: [
      "Mixed Bed Strong Acid/Base Composition",
      "Maintains Dielectric Conductivity",
      "Thermal-Resistant and Color-Indicating Options",
      "Used in EDM and Power Systems"
    ],
    tags: ["Resin", "EDM", "Consumable"],
    imgUrl: "resin.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Ointment Oil",
    heading: "JR-3A EDM Ointment Gel",
    description: "Concentrated cooling gel for wire EDM systems offering improved efficiency and surface finish.",
    keyFeatures: [
      "High Oil:Water Ratio for Easy Mixing",
      "Improved Surface Finish and Machining Index",
      "Reduces Wire Loss",
      "Easy Cleaning and Compatible with Metals"
    ],
    tags: ["Ointment", "EDM", "Cooling"],
    imgUrl: "jr3a-ointment.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Filter",
    heading: "High-Performance EDM Filters",
    description: "Precision filtration units for EDM fluids, cutting oils, hydraulic oils and CNC coolant systems.",
    keyFeatures: [
      "Micron Ratings from 1µm to 50µm",
      "Low Pressure Drop and High Dirt Holding",
      "Multi-layer Media for Clean Fluids",
      "Magnetic Pre-Filters and Clogging Indicators"
    ],
    tags: ["Filter", "EDM", "Oil"],
    imgUrl: "edm-filter.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Current Pickup",
    heading: "EDM Current Pickup Assemblies",
    description: "High-conductivity assemblies for voltage transfer in EDM spools, minimizing arcing and heat loss.",
    keyFeatures: [
      "Silver-Plated Brass/Copper Options",
      "≥ 97% IACS Conductivity",
      "Wear Resistance: 20,000+ Cycles",
      "Spring-loaded, Clip-on, and Bolt-on Types"
    ],
    tags: ["Current", "Pickup", "EDM"],
    imgUrl: "current-pickup.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Diamond EDM",
    heading: "Diamond EDM Components",
    description: "High-quality EDM components for precision spark erosion.",
    keyFeatures: [
      "Diamond-based electrode tips",
      "Enhanced wear resistance",
      "Long service life"
    ],
    tags: ["EDM", "Consumables"],
    imgUrl: "diamond-edm.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Mineral",
    heading: "Special Mineral Compound",
    description: "Support material used in EDM or lubrication systems.",
    keyFeatures: [
      "Stable chemical properties",
      "Used in filtration or coating",
      "Eco-friendly variants available"
    ],
    tags: ["Mineral", "Support"],
    imgUrl: "mineral.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Rust Remover",
    heading: "Metal Rust Remover",
    description: "Chemical agent for removing rust from metal surfaces.",
    keyFeatures: [
      "Non-corrosive formulation",
      "Effective on ferrous metals",
      "Quick action and residue-free"
    ],
    tags: ["Rust", "Cleaner"],
    imgUrl: "rust-remover.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Tube Electrode",
    heading: "EDM Tube Electrode",
    description: "Hollow electrode used in EDM drilling operations.",
    keyFeatures: [
      "Available in copper, brass, tungsten",
      "High dimensional accuracy",
      "Used in fine hole machining"
    ],
    tags: ["Tube", "Electrode"],
    imgUrl: "tube-electrode.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Copper Tube and Brass Tube",
    heading: "EDM Tubing",
    description: "Conductive tubes used in EDM and spark erosion setups.",
    keyFeatures: [
      "Precision inner diameter",
      "Good electrical properties",
      "Resistant to deformation"
    ],
    tags: ["Copper", "Brass"],
    imgUrl: "copper-brass-tube.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  },
  {
    title: "Japanese Drill Guide",
    heading: "Precision Drill Guide",
    description: "High-precision guide used in EDM hole drilling machines.",
    keyFeatures: [
      "Durable steel construction",
      "Anti-wear coating",
      "Compatible with Japanese EDM machines"
    ],
    tags: ["Guide", "Drill"],
    imgUrl: "japanese-drill-guide.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  },
  {
    title: "EDM Drill Guide",
    heading: "EDM Drill Positioning Guide",
    description: "Standard EDM drill guide for accurate electrode alignment.",
    keyFeatures: [
      "Ensures accurate electrode positioning",
      "Long-lasting wear resistance",
      "Supports multiple electrode sizes"
    ],
    tags: ["Guide", "Drill"],
    imgUrl: "edm-drill-guide.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  }
];

export const allProducts = [
  {
    title: "EDM Wire",
    description: "EDM Wire is a specially engineered metallic wire used as an electrode in wire-cut EDM machines. It delivers exceptional conductivity, mechanical stability, and thermal performance for reliable and efficient machining.",
    heading: "Precision Wire Solutions for Electrical Discharge Machining",
    tags: ["EDM", "Machining"],
    keyFeatures: [
      "High Electrical Conductivity",
      "Uniform Diameter and Surface Finish",
      "Mechanical Strength & Tensile Control",
      "Oxidation Resistance",
      "Precision Winding"
    ],
    imgUrl: "edm-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Plain Brass EDM Wire",
    description: "A copper-zinc alloy wire designed for general-purpose EDM applications. Offers excellent stability, affordability, and ease of use.",
    heading: "Reliable General-Purpose EDM Wire",
    tags: ["Brass", "EDM"],
    keyFeatures: [
      "High purity CuZn37 alloy",
      "Excellent spark stability and conductivity",
      "Superior straightness and easy auto-threading",
      "Smooth surface finish",
      "Compatible with most EDM machines"
    ],
    imgUrl: "plain-brass.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Diffused Coated EDM Wire",
    description: "Engineered using a multi-layer diffusion process that bonds a zinc-rich alloy into a brass core for high cutting speed and accuracy.",
    heading: "High-Speed EDM Wire",
    tags: ["Zinc", "Brass", "EDM"],
    keyFeatures: [
      "Multi-layer zinc-rich diffusion coating",
      "Uniform surface hardness",
      "Excellent flushing in deep cuts",
      "Up to 30% faster than plain brass wire",
      "Better tolerance in taper cutting"
    ],
    imgUrl: "diffused-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zinc Diffused Coated EDM Wire",
    description: "A high-performance EDM wire with thick zinc layer over brass core, ideal for demanding conditions.",
    heading: "Advanced Zinc EDM Wire",
    tags: ["Zinc", "EDM"],
    keyFeatures: [
      "Thick, homogeneously diffused zinc layer",
      "Superior dielectric efficiency",
      "Enhanced flushing",
      "Unmatched cutting speeds",
      "Excellent rigidity and threadability"
    ],
    imgUrl: "zinc-diffused-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zinc Coated EDM Wire",
    description: "Pure zinc outer layer over brass core, optimized for modern high-speed EDM systems.",
    heading: "Zinc Coated EDM Wire",
    tags: ["Zinc", "EDM"],
    keyFeatures: [
      "Pure zinc coating with low melting point",
      "High-speed spark discharge",
      "Ideal for unmanned cutting cycles",
      "Bright white-silver color",
      "Reliable threading in submerged conditions"
    ],
    imgUrl: "zinc-coated.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Zari Wire",
    description: "Blends heritage craftsmanship with modern metallurgy for embroidery, weaving, and decorations.",
    heading: "Premium Quality Zari Wire",
    tags: ["Zari", "Decorative"],
    keyFeatures: [
      "Available in Real, Imitation, Half-Fine, M-Type, Flat Zari",
      "Silver-plated copper core",
      "Available in multiple metallic colors",
      "Used in fashion, crafts, and decor"
    ],
    imgUrl: "zari-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Wire Products"
  },
  {
    title: "Molly Wire",
    description: "High-performance molybdenum wire for extreme temperatures, corrosion, and high load environments.",
    heading: "High-Temperature Molly Wire",
    tags: ["Molybdenum", "EDM", "Furnace"],
    keyFeatures: [
      "Extremely High Melting Point (2620°C)",
      "Excellent Dimensional Stability",
      "Corrosion & Oxidation Resistant",
      "Good Workability & Long Service Life"
    ],
    imgUrl: "molly-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Copper Extrusions"
  },
  {
    title: "Copper Wire",
    description: "High-purity copper wire offering excellent conductivity, formability, and corrosion resistance.",
    heading: "Versatile Copper Wire",
    tags: ["Copper", "Conductivity"],
    keyFeatures: [
      "≥ 99.9% Cu",
      "High Electrical Conductivity (≥97% IACS)",
      "Wide diameter range (0.10mm to 6.00mm)",
      "Available in Round/Flat/Spool/Coils"
    ],
    imgUrl: "copper-wire.png",
    category: "Non-Ferrous Wire",
    subcategory: "Copper Extrusions"
  },

  // brazingAndWeldingProducts Start
  {
    title: "Copper Wire for Induction Brazing",
    heading: "High-Conductivity Copper Brazing Wire",
    description: "Copper wire used as a filler material in induction brazing for strong, conductive joints.",
    keyFeatures: [
      "High Thermal & Electrical Conductivity",
      "Excellent Wetting on Base Metals",
      "Strong, Durable Joints",
      "Controlled & Clean Brazing Process"
    ],
    tags: ["Copper", "Brazing", "Induction"],
    imgUrl: "induction-brazing-wire.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Induction Brazing Wire & Rings",
    heading: "Induction Supplies",
    description: "Wire and rings for induction heating and joining in industrial applications.",
    keyFeatures: [
      "Pre-formed rings for uniform joints",
      "Excellent repeatability",
      "Reduces manual brazing time",
      "Suited for automation"
    ],
    tags: ["Rings", "Wire", "Induction"],
    imgUrl: "induction-wire-rings.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Brass Brazing Wire (RBCuZn-c)",
    heading: "Brass Brazing Wire for Strong Joints",
    description: "Copper-zinc alloy wire for induction brazing with strong mechanical strength.",
    keyFeatures: [
      "Lower Melting Point than Copper",
      "Good Flow Characteristics",
      "High Joint Strength",
      "Cost-Effective for HVAC and Electrical"
    ],
    tags: ["Brass", "Brazing"],
    imgUrl: "brass-brazing.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Copper Phosphor Brazing Wire",
    heading: "Phosphor Copper Brazing Filler",
    description: "Self-fluxing wire for copper-to-copper brazing with strong capillary action.",
    keyFeatures: [
      "Self-Fluxing for Copper",
      "Excellent Flow and Capillary Action",
      "Lower Melting Temperature",
      "Corrosion Resistance and Leak-Proof Joints"
    ],
    tags: ["Copper", "Phosphor"],
    imgUrl: "copper-phosphor-brazing.png",
    category: "Brazing and Welding",
    subcategory: "Brazing Wire"
  },
  {
    title: "Welding Wire",
    heading: "Precision Welding Wires",
    description: "High-precision wires for MIG/TIG welding producing defect-free welds.",
    keyFeatures: [
      "Clean Surface Finish and Tight Diameter Control",
      "Stable Arc & Low Spatter",
      "Corrosion-Resistant Joints",
      "Custom Spooling & Alloy Options"
    ],
    tags: ["Welding", "MIG", "TIG"],
    imgUrl: "welding-wire.png",
    category: "Brazing and Welding",
    subcategory: "Welding Consumables"
  },
  {
    title: "Er Cu Sia",
    heading: "Copper-Silicon Alloy Wire",
    description: "Used for welding copper and its alloys with good strength and thermal conductivity.",
    keyFeatures: [
      "High strength and corrosion resistance",
      "Good thermal conductivity",
      "Ideal for automotive and HVAC systems"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "er-cu-sia.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu",
    heading: "Pure Copper Welding Wire",
    description: "Designed for TIG/MIG welding applications requiring high conductivity.",
    keyFeatures: [
      "Excellent electrical conductivity",
      "Smooth arc and minimal spatter",
      "Suitable for copper-to-copper welding"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "er-cu.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu SnC",
    heading: "Tin-Copper Brazing Alloy",
    description: "Provides corrosion-resistant strong joints in copper piping.",
    keyFeatures: [
      "Improved corrosion resistance",
      "Strong joints",
      "Ideal for piping and tubing applications"
    ],
    tags: ["Copper", "Tin"],
    imgUrl: "er-cu-snc.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Er Cu Sn A",
    heading: "Bronze Brazing Wire",
    description: "General-purpose bronze alloy wire for wear resistance and strength.",
    keyFeatures: [
      "High strength and wear resistance",
      "Good machinability",
      "Used in bearings, pumps, and valves"
    ],
    tags: ["Copper", "Bronze"],
    imgUrl: "er-cu-sna.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "CuAlA1",
    heading: "Aluminum Bronze Welding Wire",
    description: "For joining dissimilar metals; ideal in marine & chemical industries.",
    keyFeatures: [
      "Excellent strength and corrosion resistance",
      "Good for dissimilar metals",
      "Used in marine and chemical industries"
    ],
    tags: ["Copper", "Aluminum Bronze"],
    imgUrl: "cuala1.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "CuAlA2",
    heading: "High Strength Aluminum Bronze Wire",
    description: "For aerospace, high-load machinery with superior crack resistance.",
    keyFeatures: [
      "Superior wear resistance",
      "Excellent hot crack resistance",
      "Common in aerospace and heavy machinery"
    ],
    tags: ["Copper", "Aluminum Bronze"],
    imgUrl: "cuala2.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "Sudronic",
    heading: "Custom Copper Alloy",
    description: "Special application-specific copper alloy wire.",
    keyFeatures: [
      "Customized metallurgical properties",
      "Smooth arc characteristics",
      "Application-specific performance"
    ],
    tags: ["Copper", "Alloy"],
    imgUrl: "sudronic.png",
    category: "Brazing and Welding",
    subcategory: "Copper Alloy"
  },
  {
    title: "4043",
    heading: "Aluminum Alloy 4043",
    description: "Al-Si alloy for general welding with good corrosion resistance.",
    keyFeatures: [
      "Low cracking tendency",
      "Good corrosion resistance",
      "Smooth finish"
    ],
    tags: ["Aluminum"],
    imgUrl: "4043.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  },
  {
    title: "5357",
    heading: "Aluminum Alloy 5357",
    description: "Al-Mg alloy with excellent strength and ductility.",
    keyFeatures: [
      "High strength and impact resistance",
      "Good color match with base metal",
      "For marine and structural use"
    ],
    tags: ["Aluminum"],
    imgUrl: "5357.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  },
  {
    title: "4047",
    heading: "Aluminum Alloy 4047",
    description: "Higher silicon content for brazing and reduced cracking.",
    keyFeatures: [
      "Excellent fluidity for brazing",
      "Reduced cracking and shrinkage",
      "Used in automotive and heat exchanger industries"
    ],
    tags: ["Aluminum"],
    imgUrl: "4047.png",
    category: "Brazing and Welding",
    subcategory: "Aluminum"
  },

  // consumableProducts Start
  {
    title: "Resin",
    heading: "Ion Exchange Resin for EDM",
    description: "High-purity ion-exchange resin for EDM dielectric purification and high-purity water systems.",
    keyFeatures: [
      "Mixed Bed Strong Acid/Base Composition",
      "Maintains Dielectric Conductivity",
      "Thermal-Resistant and Color-Indicating Options",
      "Used in EDM and Power Systems"
    ],
    tags: ["Resin", "EDM", "Consumable"],
    imgUrl: "resin.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Ointment Oil",
    heading: "JR-3A EDM Ointment Gel",
    description: "Concentrated cooling gel for wire EDM systems offering improved efficiency and surface finish.",
    keyFeatures: [
      "High Oil:Water Ratio for Easy Mixing",
      "Improved Surface Finish and Machining Index",
      "Reduces Wire Loss",
      "Easy Cleaning and Compatible with Metals"
    ],
    tags: ["Ointment", "EDM", "Cooling"],
    imgUrl: "jr3a-ointment.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Filter",
    heading: "High-Performance EDM Filters",
    description: "Precision filtration units for EDM fluids, cutting oils, hydraulic oils and CNC coolant systems.",
    keyFeatures: [
      "Micron Ratings from 1µm to 50µm",
      "Low Pressure Drop and High Dirt Holding",
      "Multi-layer Media for Clean Fluids",
      "Magnetic Pre-Filters and Clogging Indicators"
    ],
    tags: ["Filter", "EDM", "Oil"],
    imgUrl: "edm-filter.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Current Pickup",
    heading: "EDM Current Pickup Assemblies",
    description: "High-conductivity assemblies for voltage transfer in EDM spools, minimizing arcing and heat loss.",
    keyFeatures: [
      "Silver-Plated Brass/Copper Options",
      "≥ 97% IACS Conductivity",
      "Wear Resistance: 20,000+ Cycles",
      "Spring-loaded, Clip-on, and Bolt-on Types"
    ],
    tags: ["Current", "Pickup", "EDM"],
    imgUrl: "current-pickup.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Diamond EDM",
    heading: "Diamond EDM Components",
    description: "High-quality EDM components for precision spark erosion.",
    keyFeatures: [
      "Diamond-based electrode tips",
      "Enhanced wear resistance",
      "Long service life"
    ],
    tags: ["EDM", "Consumables"],
    imgUrl: "diamond-edm.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Mineral",
    heading: "Special Mineral Compound",
    description: "Support material used in EDM or lubrication systems.",
    keyFeatures: [
      "Stable chemical properties",
      "Used in filtration or coating",
      "Eco-friendly variants available"
    ],
    tags: ["Mineral", "Support"],
    imgUrl: "mineral.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Rust Remover",
    heading: "Metal Rust Remover",
    description: "Chemical agent for removing rust from metal surfaces.",
    keyFeatures: [
      "Non-corrosive formulation",
      "Effective on ferrous metals",
      "Quick action and residue-free"
    ],
    tags: ["Rust", "Cleaner"],
    imgUrl: "rust-remover.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Tube Electrode",
    heading: "EDM Tube Electrode",
    description: "Hollow electrode used in EDM drilling operations.",
    keyFeatures: [
      "Available in copper, brass, tungsten",
      "High dimensional accuracy",
      "Used in fine hole machining"
    ],
    tags: ["Tube", "Electrode"],
    imgUrl: "tube-electrode.png",
    category: "Consumables",
    subcategory: "EDM Support"
  },
  {
    title: "Copper Tube and Brass Tube",
    heading: "EDM Tubing",
    description: "Conductive tubes used in EDM and spark erosion setups.",
    keyFeatures: [
      "Precision inner diameter",
      "Good electrical properties",
      "Resistant to deformation"
    ],
    tags: ["Copper", "Brass"],
    imgUrl: "copper-brass-tube.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  },
  {
    title: "Japanese Drill Guide",
    heading: "Precision Drill Guide",
    description: "High-precision guide used in EDM hole drilling machines.",
    keyFeatures: [
      "Durable steel construction",
      "Anti-wear coating",
      "Compatible with Japanese EDM machines"
    ],
    tags: ["Guide", "Drill"],
    imgUrl: "japanese-drill-guide.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  },
  {
    title: "EDM Drill Guide",
    heading: "EDM Drill Positioning Guide",
    description: "Standard EDM drill guide for accurate electrode alignment.",
    keyFeatures: [
      "Ensures accurate electrode positioning",
      "Long-lasting wear resistance",
      "Supports multiple electrode sizes"
    ],
    tags: ["Guide", "Drill"],
    imgUrl: "edm-drill-guide.png",
    category: "Consumables",
    subcategory: "Guides & Tubes"
  }
]
