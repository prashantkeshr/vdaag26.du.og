import type { Subject } from '../models';

export const meSubjectsData: Subject[] = [

  // ── Theory of Machines ───────────────────────────────────────────────────────
  {
    id: 'veda-subject-me-tom',
    slug: 'me-theory-of-machines',
    title: 'Theory of Machines & Vibrations',
    shortTitle: 'ToM',
    description: 'Kinematics of mechanisms (linkages, cams, gears), dynamics of machines (balancing, flywheels, governors), and mechanical vibrations (SDOF, MDOF, free, forced, damped).',
    guide: `## Overview
Theory of Machines is the backbone of mechanical design — it bridges static geometry and real motion. Mastery here directly impacts 8–10 marks in GATE ME, covering kinematics, dynamics, and vibrations.

## What You Will Learn
### Mechanisms and Linkages
Kinematic pairs, chains, inversions. Four-bar linkage: Grashof's law, quick-return mechanism, Scotch-yoke, slider-crank. Determine degrees of freedom (Kutzbach criterion, Grübler's equation).

### Velocity and Acceleration Analysis
Instantaneous centre method, Kennedy's theorem. Relative velocity method: velocity and acceleration diagrams for slider-crank and four-bar linkages. Analytical approach for simple mechanisms.

### Gear Trains
Spur, helical, bevel, and worm gears. Simple, compound, and epicyclic gear trains. Train value and velocity ratio. Differential gear box.

### Cams and Followers
Nomenclature, types of cams (disc, cylindrical) and followers (knife-edge, roller, mushroom). Displacement diagrams: uniform velocity, SHM, uniform acceleration (parabolic). Pressure angle and undercutting.

### Flywheels and Governors
Energy fluctuation, coefficient of fluctuation of energy and speed. Turning-moment diagrams. Watt, Porter, and Hartnell governors. Sensitiveness, isochronism, and hunting.

### Dynamic Balancing
Static and dynamic balancing of rotating masses. Balancing in a single plane and multiple planes. Partial balancing of reciprocating masses, primary and secondary balancing forces.

### Free Vibrations (SDOF)
Equation of motion. Natural frequency for spring-mass, pendulum, and shaft-disc systems. Equivalent stiffness (springs in series/parallel). Effect of damping (critical, over, under). Logarithmic decrement.

### Forced Vibrations
Magnification factor (MF) and resonance. Rotating unbalance and support excitation. Vibration isolation: transmissibility. Vibration measuring instruments (seismometer, accelerometer).`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-mechanisms-links',
      'veda-topic-me-kinematics-vel-accel',
      'veda-topic-me-gear-trains',
      'veda-topic-me-cams-followers',
      'veda-topic-me-flywheels-governors',
      'veda-topic-me-dynamic-balancing',
      'veda-topic-me-free-vibrations',
      'veda-topic-me-forced-vibrations',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-me-design', 'veda-subject-som', 'veda-subject-engg-maths'],
    tags: ['ToM', 'kinematics', 'gear-trains', 'vibrations', 'mechanisms', 'balancing', 'cams', 'GATE'],
    icon: '⚙️',
    color: '#7C3AED',
    updatedAt: '2026-11-04',
  },

  // ── Machine Design ───────────────────────────────────────────────────────────
  {
    id: 'veda-subject-me-design',
    slug: 'me-machine-design',
    title: 'Machine Design',
    shortTitle: 'MD',
    description: 'Design of machine elements under static and fatigue loading: shafts, keys, couplings, bearings, gears, bolted/welded joints, springs, and pressure vessels with factor of safety.',
    guide: `## Overview
Machine Design translates loads and motion into real mechanical parts. GATE ME allocates 8–10 marks here, covering both static (yield/fracture) and dynamic (fatigue/endurance) failure criteria.

## What You Will Learn
### Failure Theories and Factor of Safety
Von Mises (distortion energy), Tresca (maximum shear stress), Rankine (max normal stress), and Coulomb-Mohr criteria. Factor of safety: static and dynamic loading. Stress-strain diagrams for ductile and brittle materials.

### Stress Concentration and Fatigue
Stress concentration factor Kt, notch sensitivity q, fatigue stress concentration Kf. Goodman, Soderberg, and Gerber criteria. S–N diagrams. Endurance limit and modifying factors (surface finish, size, reliability). Miner's rule for cumulative fatigue.

### Shafts, Keys, and Couplings
Shafts under torsion and bending (ASME shaft design equation). Critical speed (Rankine and Rayleigh-Ritz methods). Woodruff and flat keys — shear and crushing failure. Rigid and flexible couplings (flange, Oldham, universal joint).

### Bearings
Journal bearings: Sommerfeld number, Petroff's equation, hydrodynamic lubrication. Rolling element bearings: basic static and dynamic load ratings, bearing life (L10, Lundberg-Palmgren equation). Bearing selection from catalogues.

### Gear Design
Lewis equation for bending stress. Dynamic load factor (Barth velocity factor). Hertzian contact stress for surface failure. AGMA approach for spur and helical gears. Addendum modification for avoiding interference.

### Bolted Joints and Welded Joints
Bolt preload, gasket joint, joint stiffness ratio. Fatigue of bolted joints (Goodman criterion applied to bolts). Fillet weld: throat, shear stress. Weld group analysis (direct shear + bending/torsion).

### Springs and Pressure Vessels
Helical compression/tension springs: Wahl factor, spring index, surge frequency. Lame's equations for thick cylinders, hoop and radial stresses. Thin-walled pressure vessels: hoop and longitudinal stress.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-failure-theories',
      'veda-topic-me-fatigue-design',
      'veda-topic-me-shafts-keys',
      'veda-topic-me-bearings',
      'veda-topic-me-gear-design',
      'veda-topic-me-bolted-welded',
      'veda-topic-me-springs-vessels',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-me-tom', 'veda-subject-som', 'veda-subject-engg-maths'],
    tags: ['machine-design', 'fatigue', 'bearings', 'gears', 'shafts', 'springs', 'GATE'],
    icon: '🔩',
    color: '#DC2626',
    updatedAt: '2026-11-04',
  },

  // ── Manufacturing Engineering ────────────────────────────────────────────────
  {
    id: 'veda-subject-me-manufacturing',
    slug: 'me-manufacturing-engineering',
    title: 'Manufacturing Engineering',
    shortTitle: 'Mfg',
    description: 'Casting, metal forming (rolling, forging, drawing, extrusion), welding, machining (turning, drilling, milling), and metrology with quality control concepts for GATE ME.',
    guide: `## Overview
Manufacturing Engineering covers the full lifecycle of making metal parts. GATE ME allocates 10–12 marks here — the highest single-subject weight in GATE ME. Focus on processes, parameters, and defects.

## What You Will Learn
### Casting Processes
Sand casting: gating system design, riser design (Chvorinov's rule). Die casting, investment casting, continuous casting. Casting defects: porosity, shrinkage, misrun, cold shut, hot tear. Solidification time.

### Metal Forming
Rolling: draft, spread, forward slip, friction conditions. Forging: open-die (Smith's equation), closed-die, flashless forging. Wire drawing and tube drawing: drawing force, die angle optimisation. Sheet metal: deep drawing (limiting draw ratio, blank holding force), blanking and punching (shear force, clearance).

### Extrusion
Direct and indirect extrusion. Ram force calculation (extrusion ratio, die semi-angle, friction). Hot vs. cold extrusion trade-offs. Tube extrusion with mandrel.

### Welding
Arc welding: SMAW, MIG/MAG, TIG — heat input, dilution. Weld joint types. HAZ formation and grain coarsening. Weld defects: porosity, inclusions, undercut, lack of fusion, hot and cold cracking. Resistance welding (spot, seam, butt). Friction stir welding basics.

### Machining: Turning and Drilling
Orthogonal cutting model: Merchant's circle, chip thickness ratio, shear plane angle, cutting force. Taylor's tool life equation (n, C parameters). Drilling: cutting speed, feed, thrust force and torque. Machinability index.

### Machining: Milling and Grinding
Milling cutter engagement (up- vs. down-milling), material removal rate. Surface grinding: wheel speed, work speed, depth of cut. Grinding wheel grades and bonds. Dressing and truing.

### Metrology and Quality Control
Limits, fits, and tolerances (ISO system, hole-basis/shaft-basis). Gauging: plug gauges, ring gauges, snap gauges. Surface roughness (Ra, Rz) and measurement. Control charts (X-bar, R, p charts). Process capability (Cp, Cpk). Acceptance sampling (AQL, LTPD).`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-casting',
      'veda-topic-me-metal-forming',
      'veda-topic-me-welding',
      'veda-topic-me-machining-turning',
      'veda-topic-me-machining-milling',
      'veda-topic-me-metrology-qc',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-me-ie', 'veda-subject-som', 'veda-subject-engg-maths'],
    tags: ['manufacturing', 'casting', 'forming', 'welding', 'machining', 'metrology', 'GATE'],
    icon: '🏭',
    color: '#D97706',
    updatedAt: '2026-11-04',
  },

  // ── Industrial Engineering & Operations Research ─────────────────────────────
  {
    id: 'veda-subject-me-ie',
    slug: 'me-industrial-engineering',
    title: 'Industrial Engineering & Operations Research',
    shortTitle: 'IE / OR',
    description: 'Linear programming, CPM/PERT, forecasting, inventory models (EOQ, EPQ), queuing theory, work study, production planning, and scheduling for GATE ME industrial engineering section.',
    guide: `## Overview
Industrial Engineering and Operations Research sits at the boundary of management and engineering. GATE ME allocates 8–10 marks here. Focus on solving LPP, network analysis, inventory formulas, and queuing models numerically.

## What You Will Learn
### Linear Programming
Formulation: objective function, constraints. Graphical method: feasible region, corner points. Simplex method: standard form, pivot operations, optimality condition. Special cases: infeasibility, unboundedness, degeneracy, multiple optimal solutions. Sensitivity analysis. Duality theorem.

### Transportation and Assignment
North-West corner, Vogel's approximation (VAM), MODI method for optimality. Balanced and unbalanced problems. Hungarian algorithm for assignment problems. Travelling salesman (heuristic approach).

### CPM / PERT and Project Scheduling
Activity-on-arrow (AoA) and activity-on-node (AoN) networks. Critical path: forward/backward pass, float (total, free, independent). Crashing: slope, optimum project duration. PERT: optimistic/pessimistic/most-likely estimates, project variance, probability of completion.

### Forecasting and Demand Planning
Moving average (simple, weighted). Exponential smoothing (single, double). Trend forecasting. Mean absolute deviation (MAD), mean squared error (MSE), tracking signal.

### Inventory Models
EOQ model (Wilson formula): optimal order quantity, cycle time, total cost. EPQ (production lot size): production rate, demand rate, maximum inventory. Quantity discount model. Reorder point (ROP) and safety stock. Newsvendor model (single-period).

### Queuing Theory
M/M/1 queue: arrival rate λ, service rate μ, utilisation ρ, Lq, L, Wq, W formulas. M/M/c queues (multi-server). Little's law. Applications to manufacturing and service systems.

### Work Study and Ergonomics
Method study: flow process chart, man-machine chart. Work measurement: time study, predetermined motion time systems (PMTS), standard time. Rating, allowances. Learning curve.

### Scheduling and Line Balancing
Job scheduling: SPT, LPT, EDD rules for single machine. Johnson's algorithm for two-machine flow shop. Assembly line balancing: cycle time, precedence diagram, efficiency.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-linear-programming',
      'veda-topic-me-network-analysis',
      'veda-topic-me-inventory-models',
      'veda-topic-me-forecasting',
      'veda-topic-me-queuing-theory',
      'veda-topic-me-work-study',
      'veda-topic-me-scheduling',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-me-manufacturing', 'veda-subject-engg-maths'],
    tags: ['IE', 'OR', 'CPM', 'PERT', 'EOQ', 'linear-programming', 'queuing', 'scheduling', 'GATE'],
    icon: '📊',
    color: '#059669',
    updatedAt: '2026-11-04',
  },

  // ── Heat Transfer ────────────────────────────────────────────────────────────
  {
    id: 'veda-subject-me-heat-transfer',
    slug: 'me-heat-transfer',
    title: 'Heat Transfer',
    shortTitle: 'HT',
    description: 'Conduction (Fourier's law, fins, transient), convection (Newton's law, internal/external flow), radiation (Stefan-Boltzmann, view factors), and heat exchangers (LMTD, NTU-ε).',
    guide: `## Overview
Heat Transfer covers three fundamental modes — conduction, convection, and radiation — and their engineering applications in heat exchangers. GATE ME allocates 6–8 marks here, often in combination with Thermodynamics.

## What You Will Learn
### Conduction
Fourier's law. Thermal resistance: plane wall (series/parallel), cylindrical and spherical shells. Extended surfaces (fins): fin efficiency, fin effectiveness. Uniform cross-section fin: temperature distribution, heat loss. Transient conduction: lumped capacitance (Biot number criterion), 1D analytical (Heisler charts). Numerical methods: finite difference for 1D and 2D.

### Convection
Newton's law of cooling. Dimensionless groups: Reynolds (Re), Nusselt (Nu), Prandtl (Pr), Grashof (Gr), Stanton (St). Boundary layer concept: thermal and velocity boundary layers. Forced internal flow: Dittus-Boelter correlation (fully developed turbulent, Sieder-Tate for viscous correction). External flow: flat plate (laminar, mixed), cylinders, spheres (Churchill-Bernstein). Natural convection: vertical plate, horizontal cylinder.

### Radiation
Blackbody radiation: Planck's law, Wien's displacement law, Stefan-Boltzmann law. Emissivity, absorptivity, reflectivity, transmissivity. Kirchhoff's law, grey bodies, real surfaces. View factors (shape factors): reciprocity, summation rules, crossed-string method. Radiation exchange between black and grey surfaces. Radiation shields.

### Heat Exchangers
Classification: parallel-flow, counter-flow, cross-flow, shell-and-tube. LMTD method: correction factor F for multi-pass. ε-NTU method: heat capacity ratio C*, effectiveness formulas for all configurations. Fouling factor (Rf) and overall heat transfer coefficient U. Condensers and evaporators.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-ht-conduction',
      'veda-topic-me-ht-convection',
      'veda-topic-me-ht-radiation',
      'veda-topic-me-ht-heat-exchangers',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-engg-thermo', 'veda-subject-fluid-mech', 'veda-subject-engg-maths'],
    tags: ['heat-transfer', 'conduction', 'convection', 'radiation', 'heat-exchangers', 'fins', 'GATE'],
    icon: '🌡️',
    color: '#EF4444',
    updatedAt: '2026-11-04',
  },

  // ── Refrigeration & Air Conditioning ────────────────────────────────────────
  {
    id: 'veda-subject-me-rac',
    slug: 'me-refrigeration-ac',
    title: 'Refrigeration & Air Conditioning',
    shortTitle: 'RAC',
    description: 'Vapour compression cycle (COP, refrigerating effect, compressor work), vapour absorption cycle, psychrometric chart, air conditioning load estimation, and refrigerant properties.',
    guide: `## Overview
Refrigeration & AC is a 4–6 mark topic in GATE ME. It blends thermodynamics (cycle analysis) with heat transfer (load estimation) and psychrometrics (moist air properties).

## What You Will Learn
### Vapour Compression Refrigeration Cycle (VCRC)
Standard VCRC on P-h and T-s diagrams. Refrigerating effect (RE), compressor work (W), COP: COP = RE / W. Actual vs. ideal cycle: superheating, sub-cooling, compression efficiency. Multi-stage compression: flash chamber, flash intercooling, compound compression. Cascade refrigeration systems. COP comparison with Carnot COP.

### Vapour Absorption Refrigeration (VAR)
Li-Br/water and ammonia/water systems. COP of VAR = QE / (QG + Wp). Heat pump concept. COP limits (second law). Comparison of VCRC and VAR.

### Refrigerants
Classification: CFCs (R-11, R-12), HCFCs (R-22), HFCs (R-134a, R-410A), natural refrigerants (R-717 ammonia, R-744 CO2). Properties: ozone depletion potential (ODP), global warming potential (GWP). Selection criteria.

### Psychrometry
State of moist air: dry-bulb temperature (DBT), wet-bulb temperature (WBT), dew-point temperature (DPT). Specific humidity (ω), relative humidity (φ), enthalpy of moist air. Psychrometric chart: sensible heat factor (SHF), apparatus dew point (ADP). Processes: sensible heating/cooling, dehumidification, humidification, adiabatic saturation.

### Air Conditioning Systems
Cooling and heating load estimation. RSHF (room sensible heat factor) and ERSHF. Central air conditioning: AHU components. VRF/VRV systems (concept). Summer and winter AC.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-rac-vc-cycle',
      'veda-topic-me-rac-absorption',
      'veda-topic-me-rac-refrigerants',
      'veda-topic-me-psychrometry',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-engg-thermo', 'veda-subject-me-heat-transfer'],
    tags: ['refrigeration', 'AC', 'psychrometry', 'COP', 'VCRC', 'vapour-compression', 'GATE'],
    icon: '❄️',
    color: '#0EA5E9',
    updatedAt: '2026-11-04',
  },

  // ── Engineering Mechanics ────────────────────────────────────────────────────
  {
    id: 'veda-subject-me-engg-mech',
    slug: 'me-engineering-mechanics',
    title: 'Engineering Mechanics',
    shortTitle: 'EM',
    description: 'Statics (equilibrium, free body diagrams, friction, centroids, moment of inertia) and dynamics (kinematics and kinetics of particles and rigid bodies, work-energy, impulse-momentum) for GATE ME.',
    guide: `## Overview
Engineering Mechanics is the foundation for both Strength of Materials and Theory of Machines. GATE ME allocates 4–6 marks here. Focus on free body diagrams, friction problems, and Newton's second law applications.

## What You Will Learn
### Statics: Equilibrium and Reactions
Forces and moments. Free body diagrams (FBD). Conditions of equilibrium in 2D and 3D: ΣFx = 0, ΣFy = 0, ΣM = 0. Support reactions: pin, roller, fixed supports. Statically determinate and indeterminate systems. Principle of transmissibility and Varignon's theorem.

### Centroids and Moments of Inertia
Centroid of composite areas and volumes. Second moment of area (moment of inertia) for standard shapes: rectangle, circle, triangle. Parallel-axis theorem (Steiner's theorem). Product of inertia. Polar moment of inertia. Mass moment of inertia: solid cylinder, sphere, slender rod.

### Friction
Coulomb friction laws. Angle of friction, angle of repose. Wedge, screw jack, belt friction (Euler's equation): T1/T2 = e^(μθ). Self-locking conditions. Bearing friction (pivot, collar). Rolling resistance.

### Kinematics of Particles and Rigid Bodies
Rectilinear motion: displacement, velocity, acceleration. Curvilinear motion: tangential and normal components, projectile. Relative motion. Rigid body kinematics: translation, rotation (pure rolling, instantaneous centre). Angular velocity, angular acceleration.

### Kinetics: Newton's Laws
Newton's second law for particles and rigid bodies. D'Alembert's principle. Equations of motion for rigid body: ΣF = ma, ΣMG = IGα. Combined translation and rotation (rolling without slipping).

### Work-Energy and Impulse-Momentum
Work-energy theorem for particles and rigid bodies. Conservative forces and potential energy. Principle of conservation of energy. Impulse-momentum theorem (linear and angular). Impact: coefficient of restitution, perfectly elastic and plastic collisions.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-me-statics-equilibrium',
      'veda-topic-me-centroids-moi',
      'veda-topic-me-friction',
      'veda-topic-me-kinematics-particles',
      'veda-topic-me-kinetics-rigid-body',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-me', 'veda-exam-upsc-ese-me'],
    relatedSubjectIds: ['veda-subject-som', 'veda-subject-me-tom', 'veda-subject-engg-maths'],
    tags: ['engineering-mechanics', 'statics', 'dynamics', 'friction', 'equilibrium', 'kinematics', 'GATE'],
    icon: '⚖️',
    color: '#6366F1',
    updatedAt: '2026-11-04',
  },
];
