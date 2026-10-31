import { InfographicData } from '../types';

export const INFOGRAPHICS_MAP: Record<string, InfographicData> = {
  'career-options': {
    title: 'EXPLORING CAREER OPTIONS',
    subtitle: 'PATHWAYS TO PROFESSIONAL FULFILLMENT',
    keyword: 'career options',
    centerpieceType: 'compass',
    centerpieceLabel: '3D GYROSCOPIC CAREER COMPASS',
    colorScheme: {
      primary: '#0ea5e9',
      secondary: '#f97316',
      accent: '#38bdf8',
      bgDark: '#08131e',
      glow: '#0284c7'
    },
    prompt: 'A high-tech career navigation infographic titled "EXPLORING CAREER OPTIONS" with a subtitle "PATHWAYS TO PROFESSIONAL FULFILLMENT." Glowing matrix background, 3D compass center, 6 metallic-embossed panels ("JOB MARKET ANALYSIS", "SKILLS ALIGNMENT", "INDUSTRY GROWTH SECTORS", "PERSONALITY PROFILING", "SALARY EXPECTATIONS", "WORK-LIFE BALANCE"). Neon blue and orange color scheme.',
    panels: [
      {
        title: 'JOB MARKET ANALYSIS',
        bullets: ['Macro demand forecast data', 'Regional hiring velocity', 'Automation resistance scores']
      },
      {
        title: 'SKILLS ALIGNMENT',
        bullets: ['Core competency mapping', 'Transferable talent audit', 'Deficit bridging programs']
      },
      {
        title: 'INDUSTRY GROWTH SECTORS',
        bullets: ['Emerging tech & green energy', 'Healthcare engineering', 'AI infrastructure & ethics']
      },
      {
        title: 'PERSONALITY PROFILING',
        bullets: ['Cognitive working style', 'Values & mission congruency', 'Team dynamic preferences']
      },
      {
        title: 'SALARY EXPECTATIONS',
        bullets: ['90th percentile equity bands', 'Total reward compensation', 'Cost of living indexing']
      },
      {
        title: 'WORK-LIFE BALANCE',
        bullets: ['Asynchronous boundary rigor', 'Schedule sovereignty metrics', 'Burnout prevention design']
      }
    ]
  },

  'entry-level': {
    title: 'LAUNCHING YOUR ENTRY LEVEL CAREER',
    subtitle: 'STRATEGIES FOR RECENT GRADUATES & BEGINNERS',
    keyword: 'entry level',
    centerpieceType: 'rocket',
    centerpieceLabel: 'TRAJECTORY LAUNCH MATRIX',
    colorScheme: {
      primary: '#06b6d4',
      secondary: '#eab308',
      accent: '#22d3ee',
      bgDark: '#06131c',
      glow: '#0891b2'
    },
    prompt: 'A modern technical infographic titled "LAUNCHING YOUR ENTRY LEVEL CAREER" with a subtitle "STRATEGIES FOR RECENT GRADUATES & BEGINNERS." Futuristic city background, central rocket launching from "START", 6 embossed cards ("INTERNSHIP EXPERIENCE", "SKILL ACQUISITION", "NETWORKING BASICS", "RESUME BUILDING", "INTERVIEW PREP", "MENTORSHIP PROGRAMS"). Cyan, gold, and dark slate tones.',
    panels: [
      {
        title: 'INTERNSHIP EXPERIENCE',
        bullets: ['Translating projects to impact', 'Quantified contribution metrics', 'Executive recommendations']
      },
      {
        title: 'SKILL ACQUISITION',
        bullets: ['Full-stack baseline skills', 'Toolchain fluency proofs', 'Verified portfolio assets']
      },
      {
        title: 'NETWORKING BASICS',
        bullets: ['Informational interviews', 'Alumni community mobilization', 'Strategic LinkedIn visibility']
      },
      {
        title: 'RESUME BUILDING',
        bullets: ['ATS keyword calibration', 'Zero-experience storytelling', 'Reverse chronological precision']
      },
      {
        title: 'INTERVIEW PREP',
        bullets: ['Behavioral response blueprints', 'Technical trial simulations', 'Inquiry question lists']
      },
      {
        title: 'MENTORSHIP PROGRAMS',
        bullets: ['Identifying senior champions', 'Structured monthly cadences', 'Career sponsor development']
      }
    ]
  },

  'remote-work': {
    title: 'MASTERING REMOTE WORK',
    subtitle: 'THRIVING IN THE VIRTUAL OFFICE',
    keyword: 'remote work',
    centerpieceType: 'virtual_office',
    centerpieceLabel: 'GLOBAL ASYNC NETWORK HUB',
    colorScheme: {
      primary: '#0d9488',
      secondary: '#a855f7',
      accent: '#22c55e',
      bgDark: '#06191a',
      glow: '#14b8a6'
    },
    prompt: 'A futuristic digital landscape infographic titled "MASTERING REMOTE WORK" with a subtitle "THRIVING IN THE VIRTUAL OFFICE." Global network grid background, translucent home office setup, 6 hexagonal panels ("DIGITAL COLLABORATION TOOLS", "TIME MANAGEMENT", "CYBERSECURITY PROTOCOLS", "BOUNDARIES & BALANCE", "VIRTUAL TEAM BUILDING", "REMOTE PRODUCTIVITY TIPS"). Deep teal, purple, and neon green.',
    panels: [
      {
        title: 'DIGITAL COLLABORATION TOOLS',
        bullets: ['Asynchronous project boards', 'Zero-latency documentation', 'Decentralized communication']
      },
      {
        title: 'TIME MANAGEMENT',
        bullets: ['Time-block hyper-focus zones', 'Energy cycle optimization', 'Meeting audit & elimination']
      },
      {
        title: 'CYBERSECURITY PROTOCOLS',
        bullets: ['Zero Trust hardware authentication', 'Encrypted tunnel routing', 'Credential governance']
      },
      {
        title: 'BOUNDARIES & BALANCE',
        bullets: ['Digital curfew enforcement', 'Dedicated physical ergonomic zone', 'Psychological transition cues']
      },
      {
        title: 'VIRTUAL TEAM BUILDING',
        bullets: ['Asynchronous coffee lounges', 'Peer recognition rituals', 'High-context empathy exchanges']
      },
      {
        title: 'REMOTE PRODUCTIVITY TIPS',
        bullets: ['Automated status synchronization', 'Deep-work batching', 'Self-documenting outputs']
      }
    ]
  },

  'job-fair': {
    title: 'MAXIMIZING JOB FAIR SUCCESS',
    subtitle: 'STRATEGIES FOR VIRTUAL & IN-PERSON EVENTS',
    keyword: 'job fair',
    centerpieceType: 'expo_kiosk',
    centerpieceLabel: 'TACTICAL EXPO TERMINAL',
    colorScheme: {
      primary: '#2563eb',
      secondary: '#ef4444',
      accent: '#94a3b8',
      bgDark: '#0b1329',
      glow: '#3b82f6'
    },
    prompt: 'A bustling digital expo infographic titled "MAXIMIZING JOB FAIR SUCCESS" with a subtitle "STRATEGIES FOR VIRTUAL & IN-PERSON EVENTS." Convention hall background, central info kiosk, 6 metallic panels ("COMPANY RESEARCH", "RESUME PREP", "ELEVATOR PITCH PERFECTING", "PROFESSIONAL ATTIRE", "NETWORKING & FOLLOW-UP", "ASKING INSIGHTFUL QUESTIONS"). Sharp blue, red, and silver.',
    panels: [
      {
        title: 'COMPANY RESEARCH',
        bullets: ['Tier-1 target recruiter dossier', 'Recent product releases & press', 'Engineering stack alignment']
      },
      {
        title: 'RESUME PREP',
        bullets: ['Dual printed copies + digital QR', 'Role-specific tailored versions', 'Instant portfolio NFC card']
      },
      {
        title: 'ELEVATOR PITCH PERFECTING',
        bullets: ['30-second value proposition', 'Problem solver hook', 'Measurable track record proof']
      },
      {
        title: 'PROFESSIONAL ATTIRE',
        bullets: ['Industry-attuned executive dress', 'Camera-calibrated lighting (virtual)', 'Posture & presence mechanics']
      },
      {
        title: 'NETWORKING & FOLLOW-UP',
        bullets: ['Sub-24-hour recruiter ping', 'Conversation-specific reference', 'Direct LinkedIn connection note']
      },
      {
        title: 'ASKING INSIGHTFUL QUESTIONS',
        bullets: ['Uncovering team pain points', 'Growth & deployment roadmaps', 'Leadership development pathways']
      }
    ]
  },

  'career-path': {
    title: 'DESIGNING YOUR CAREER PATH',
    subtitle: 'A STRATEGIC BLUEPRINT FOR LONG-TERM GROWTH',
    keyword: 'career path',
    centerpieceType: 'blueprint',
    centerpieceLabel: 'ARCHITECTURAL GROWTH BLUEPRINT',
    colorScheme: {
      primary: '#1e3a8a',
      secondary: '#f59e0b',
      accent: '#ffffff',
      bgDark: '#080f24',
      glow: '#3b82f6'
    },
    prompt: 'A structured professional development infographic titled "DESIGNING YOUR CAREER PATH" with a subtitle "A STRATEGIC BLUEPRINT FOR LONG-TERM GROWTH." Ascending network background, 3D architectural blueprint center, 6 illuminated panels ("SELF-ASSESSMENT", "GOAL SETTING", "SKILL GAP ANALYSIS", "CONTINUOUS LEARNING", "SEEKING PROMOTIONS", "LEADERSHIP DEVELOPMENT"). Rich navy, gold, and white.',
    panels: [
      {
        title: 'SELF-ASSESSMENT',
        bullets: ['Diagnostic strengths inventory', 'Zone of genius identification', 'Motivator vs drainer audit']
      },
      {
        title: 'GOAL SETTING',
        bullets: ['3-year North Star outcomes', 'OKRs tied to quarterly shifts', 'Contingency branch planning']
      },
      {
        title: 'SKILL GAP ANALYSIS',
        bullets: ['Next-role job spec decompilation', 'Adjacent skill adjacency graph', 'Rapid capability bootcamps']
      },
      {
        title: 'CONTINUOUS LEARNING',
        bullets: ['Industry certification sprints', 'Publishing technical insights', 'Cross-functional shadows']
      },
      {
        title: 'SEEKING PROMOTIONS',
        bullets: ['Assembling the promotion dossier', 'Pre-closing managerial consensus', 'Business impact quantification']
      },
      {
        title: 'LEADERSHIP DEVELOPMENT',
        bullets: ['Strategic influence without authority', 'Mentoring junior teammates', 'Executive presence refinement']
      }
    ]
  },

  'resume-guide': {
    title: 'THE ULTIMATE RESUME GUIDE',
    subtitle: 'CRAFTING A WINNING PROFESSIONAL DOCUMENT',
    keyword: 'resume guide',
    centerpieceType: 'scanner',
    centerpieceLabel: 'AI ATS PARSER MATRIX',
    colorScheme: {
      primary: '#06b6d4',
      secondary: '#f97316',
      accent: '#94a3b8',
      bgDark: '#07151e',
      glow: '#0891b2'
    },
    prompt: 'A high-tech infographic titled "THE ULTIMATE RESUME GUIDE" with a subtitle "CRAFTING A WINNING PROFESSIONAL DOCUMENT." Scanning laser grid background, central AI resume scanner, 6 callout boxes ("CONTACT INFORMATION", "PROFESSIONAL SUMMARY", "WORK EXPERIENCE SECTION", "SKILLS", "EDUCATION & CERTIFICATIONS", "KEYWORDS FOR ATS"). Cyan, orange, and gray.',
    panels: [
      {
        title: 'CONTACT INFORMATION',
        bullets: ['Direct reachable phone & email', 'Sanitized LinkedIn & GitHub URLs', 'Location without street address']
      },
      {
        title: 'PROFESSIONAL SUMMARY',
        bullets: ['3-sentence executive positioning', 'Core differentiator statement', 'Target metric highlight']
      },
      {
        title: 'WORK EXPERIENCE SECTION',
        bullets: ['Formula: Accomplished X by doing Y measured by Z', 'Bullet length discipline (1-2 lines)', 'Active voice leadership verbs']
      },
      {
        title: 'SKILLS',
        bullets: ['Categorized technical capabilities', 'Elimination of generic buzzwords', 'Tooling version proficiencies']
      },
      {
        title: 'EDUCATION & CERTIFICATIONS',
        bullets: ['Degree details & honors', 'Accredited credential badges', 'Continuing education highlights']
      },
      {
        title: 'KEYWORDS FOR ATS',
        bullets: ['Exact match job spec vocabulary', 'Standardized section titles', 'Clean ASCII UTF-8 formatting']
      }
    ]
  },

  'cover-letter': {
    title: 'WRITING AN IMPACTFUL COVER LETTER',
    subtitle: 'CONNECTING YOUR STORY TO THE JOB',
    keyword: 'cover letter',
    centerpieceType: 'fountain_pen',
    centerpieceLabel: 'PRECISION PERSUASION ENGINE',
    colorScheme: {
      primary: '#eab308',
      secondary: '#1d4ed8',
      accent: '#fef3c7',
      bgDark: '#0d1326',
      glow: '#d97706'
    },
    prompt: 'A technical document infographic titled "WRITING AN IMPACTFUL COVER LETTER" with a subtitle "CONNECTING YOUR STORY TO THE JOB." Letterhead grid background, central 3D fountain pen, 6 panels ("HEADER & SALUTATION", "THE HOOK", "WHY YOU\'RE A FIT", "COMPANY KNOWLEDGE", "CALL TO ACTION", "PROFESSIONAL TONE"). Gold, dark blue, and cream.',
    panels: [
      {
        title: 'HEADER & SALUTATION',
        bullets: ['Direct hiring manager targeting', 'Clean professional typography', 'Synchronized resume branding']
      },
      {
        title: 'THE HOOK',
        bullets: ['Opening with high-impact metric', 'Compelling statement of purpose', 'Immediate relevance establish']
      },
      {
        title: 'WHY YOU\'RE A FIT',
        bullets: ['Deep dive on 2 relevant wins', 'Translating capabilities to ROI', 'Culture add perspective']
      },
      {
        title: 'COMPANY KNOWLEDGE',
        bullets: ['Citing recent product launch', 'Demonstrating mission alignment', 'Addressing explicit company challenges']
      },
      {
        title: 'CALL TO ACTION',
        bullets: ['Enthusiastic next-step proposal', 'Easy scheduling availability', 'Confident courteous sign-off']
      },
      {
        title: 'PROFESSIONAL TONE',
        bullets: ['Active persuasive prose', 'Pruned filler & throat-clearing', 'Sub-400 word density']
      }
    ]
  },

  'resume-format': {
    title: 'CHOOSING THE RIGHT RESUME FORMAT',
    subtitle: 'CHRONOLOGICAL, FUNCTIONAL, OR HYBRID',
    keyword: 'resume format',
    centerpieceType: 'format_selector',
    centerpieceLabel: 'STRUCTURAL COMPILATION MATRIX',
    colorScheme: {
      primary: '#ef4444',
      secondary: '#3b82f6',
      accent: '#e2e8f0',
      bgDark: '#120f1a',
      glow: '#dc2626'
    },
    prompt: 'A comparison infographic titled "CHOOSING THE RIGHT RESUME FORMAT" with a subtitle "CHRONOLOGICAL, FUNCTIONAL, OR HYBRID." Split digital screen, 3D format selector center, 6 panels ("CHRONOLOGICAL LAYOUT", "FUNCTIONAL LAYOUT", "HYBRID LAYOUT", "SECTION BORDERS & SPACING", "FONT CHOICES & READABILITY", "WHITE SPACE UTILIZATION"). Vibrant red, blue, and light gray.',
    panels: [
      {
        title: 'CHRONOLOGICAL LAYOUT',
        bullets: ['Ideal for linear career paths', 'Preferred standard by 94% of ATS', 'Recent roles emphasized at top']
      },
      {
        title: 'FUNCTIONAL LAYOUT',
        bullets: ['Emphasizes skill clusters', 'Masks employment tenure gaps', 'Requires manual HR scrutiny']
      },
      {
        title: 'HYBRID LAYOUT',
        bullets: ['Blends competencies with timeline', 'High-impact for career switchers', 'Highlights senior achievements']
      },
      {
        title: 'SECTION BORDERS & SPACING',
        bullets: ['Consistent 0.5-0.75 margin rules', 'Subtle hairline dividers', 'Unified visual hierarchy grid']
      },
      {
        title: 'FONT CHOICES & READABILITY',
        bullets: ['Standard typefaces (10-12pt)', 'Balanced body line leading', 'Zero multi-column table bugs']
      },
      {
        title: 'WHITE SPACE UTILIZATION',
        bullets: ['40% breathable layout ratio', 'Prevents visual cognitive fatigue', 'Directs recruiter eye tracking']
      }
    ]
  },

  'action-verbs': {
    title: 'POWERFUL ACTION VERBS FOR YOUR RESUME',
    subtitle: 'DYNAMIC WORDS TO SHOWCASE ACHIEVEMENTS',
    keyword: 'action verbs',
    centerpieceType: 'action_hub',
    centerpieceLabel: 'LEXICAL IMPACT GENERATOR',
    colorScheme: {
      primary: '#0ea5e9',
      secondary: '#10b981',
      accent: '#f97316',
      bgDark: '#081418',
      glow: '#06b6d4'
    },
    prompt: 'An energetic infographic titled "POWERFUL ACTION VERBS FOR YOUR RESUME" with a subtitle "DYNAMIC WORDS TO SHOWCASE ACHIEVEMENTS." Exploding action matrix background, central 3D words hub, 6 glowing panels ("MANAGEMENT VERBS", "CREATIVE VERBS", "TECHNICAL VERBS", "SALES VERBS", "COMMUNICATION VERBS", "QUANTIFYING RESULTS"). Neon blue, green, and orange.',
    panels: [
      {
        title: 'MANAGEMENT VERBS',
        bullets: ['Orchestrated, spear-headed, galvanized', 'Restructured, governed, scaled', 'Directed, championed, mentored']
      },
      {
        title: 'CREATIVE VERBS',
        bullets: ['Engineered, architected, authored', 'Pioneered, prototyped, reimagined', 'Standardized, conceptualized, forged']
      },
      {
        title: 'TECHNICAL VERBS',
        bullets: ['Deployed, debugged, optimized', 'Refactored, synthesized, automated', 'Integrated, benchmarked, configured']
      },
      {
        title: 'SALES VERBS',
        bullets: ['Generated, captured, accelerated', 'Negotiated, closed, expanded', 'Cultivated, outperformed, penetrated']
      },
      {
        title: 'COMMUNICATION VERBS',
        bullets: ['Advocated, mediated, unified', 'Articulated, presented, published', 'Liaised, influenced, facilitated']
      },
      {
        title: 'QUANTIFYING RESULTS',
        bullets: ['Reduced latency by 42%', 'Saved $240K annual cloud spend', 'Boosted retention from 68% to 91%']
      }
    ]
  },

  'resume-summary': {
    title: 'CRAFTING A POWERFUL RESUME SUMMARY',
    subtitle: 'YOUR ELEVATOR PITCH IN WRITTEN FORM',
    keyword: 'resume summary',
    centerpieceType: 'spotlight',
    centerpieceLabel: 'EXECUTIVE PROJECTION TERMINAL',
    colorScheme: {
      primary: '#1e40af',
      secondary: '#eab308',
      accent: '#ffffff',
      bgDark: '#0a1025',
      glow: '#2563eb'
    },
    prompt: 'A concise infographic titled "CRAFTING A POWERFUL RESUME SUMMARY" with a subtitle "YOUR ELEVATOR PITCH IN WRITTEN FORM." Digital spotlight background, central embossed text block, 6 panels ("TARGETED KEYWORDS", "QUANTIFIABLE ACHIEVEMENTS", "UNIQUE VALUE PROPOSITION", "LENGTH & CONCISENESS", "TAILORING FOR THE ROLE", "PROFESSIONAL TONE"). Navy blue, gold, and white.',
    panels: [
      {
        title: 'TARGETED KEYWORDS',
        bullets: ['Seniority & core discipline tag', 'Specialized tooling tags', 'Industry niche terminology']
      },
      {
        title: 'QUANTIFIABLE ACHIEVEMENTS',
        bullets: ['Multi-million dollar impact', 'High-volume scale benchmarks', 'Efficiency multipliers achieved']
      },
      {
        title: 'UNIQUE VALUE PROPOSITION',
        bullets: ['Cross-functional superpower', 'Strategic problem-solving edge', 'Cultural & operational leadership']
      },
      {
        title: 'LENGTH & CONCISENESS',
        bullets: ['3-4 punchy sentences max', 'Zero generic adjectives', '70-90 word precision density']
      },
      {
        title: 'TAILORING FOR THE ROLE',
        bullets: ['Mirroring job description goals', 'Solving hiring manager pain', 'Positioned for target tier']
      },
      {
        title: 'PROFESSIONAL TONE',
        bullets: ['Authoritative third-person voice', 'High confidence without arrogance', 'Instant credibility hook']
      }
    ]
  },

  'interview-tips': {
    title: 'MASTERING INTERVIEW TIPS',
    subtitle: 'GUIDELINES FOR SUCCESS BEFORE, DURING, AND AFTER',
    keyword: 'interview tips',
    centerpieceType: 'prep_lab',
    centerpieceLabel: 'CANDIDATE CALIBRATION CHAMBER',
    colorScheme: {
      primary: '#0284c7',
      secondary: '#dc2626',
      accent: '#f97316',
      bgDark: '#081220',
      glow: '#38bdf8'
    },
    prompt: 'A dynamic infographic titled "MASTERING INTERVIEW TIPS" with a subtitle "GUIDELINES FOR SUCCESS BEFORE, DURING, AND AFTER." Preparation lab background, candidate & display centerpiece, 6 hexagonal cards ("RESEARCH THE COMPANY", "PRACTICE COMMON QUESTIONS", "DRESS PROFESSIONALLY", "BODY LANGUAGE & EYE CONTACT", "ASK INSIGHTFUL QUESTIONS", "SEND A THANK-YOU NOTE"). Electric blue, red, and orange.',
    panels: [
      {
        title: 'RESEARCH THE COMPANY',
        bullets: ['Annual reports & investor deck', 'Competitor vulnerabilities', 'Cultural glassdoor trends']
      },
      {
        title: 'PRACTICE COMMON QUESTIONS',
        bullets: ['Mock interview recording analysis', 'Story bank mapping to skills', 'Succinct time-capped answers']
      },
      {
        title: 'DRESS PROFESSIONALLY',
        bullets: ['One notch above day-to-day tier', 'Crisp neutral lighting setup', 'Distraction-free backdrop']
      },
      {
        title: 'BODY LANGUAGE & EYE CONTACT',
        bullets: ['Camera lens gaze alignment', 'Active open hand posturing', 'Engaged active listening nods']
      },
      {
        title: 'ASK INSIGHTFUL QUESTIONS',
        bullets: ['What success looks like in 90 days', 'Engineering bottlenecks', 'Team culture during crises']
      },
      {
        title: 'SEND A THANK-YOU NOTE',
        bullets: ['Personalized within 12 hours', 'Referencing unique discussion point', 'Reinforcing high commitment']
      }
    ]
  },

  'interview-questions': {
    title: 'ANSWERING BEHAVIORAL INTERVIEW QUESTIONS',
    subtitle: 'STRATEGIES FOR TACKLING DIFFICULT QUERIES',
    keyword: 'interview questions',
    centerpieceType: 'terminal_questions',
    centerpieceLabel: 'NEURAL RESPONSE MATRIX',
    colorScheme: {
      primary: '#0d9488',
      secondary: '#9333ea',
      accent: '#10b981',
      bgDark: '#09151e',
      glow: '#14b8a6'
    },
    prompt: 'A tactical infographic titled "ANSWERING BEHAVIORAL INTERVIEW QUESTIONS" with a subtitle "STRATEGIES FOR TACKLING DIFFICULT QUERIES." Winding question marks background, interactive terminal centerpiece, 6 panels ("TELL ME ABOUT YOURSELF", "STRENGTHS & WEAKNESSES", "HANDLING CONFLICT", "OVERCOMING CHALLENGES", "LEADERSHIP EXAMPLES", "SITUATIONAL SCENARIOS"). Teal, purple, and green.',
    panels: [
      {
        title: 'TELL ME ABOUT YOURSELF',
        bullets: ['Present success -> Past foundation -> Future fit', 'Keep under 120 seconds', 'Highlight career arc intention']
      },
      {
        title: 'STRENGTHS & WEAKNESSES',
        bullets: ['Genuine vulnerability + remediation system', 'Self-awareness demonstration', 'Strengths tied to business impact']
      },
      {
        title: 'HANDLING CONFLICT',
        bullets: ['De-escalation frameworks', 'Focusing on shared organizational goals', 'Depersonalizing technical disagreements']
      },
      {
        title: 'OVERCOMING CHALLENGES',
        bullets: ['High-stakes incident recovery', 'Analytical root cause investigation', 'Long-term safeguards installed']
      },
      {
        title: 'LEADERSHIP EXAMPLES',
        bullets: ['Rallying cross-functional teams', 'Coaching underperforming contributors', 'Making tough trade-off calls']
      },
      {
        title: 'SITUATIONAL SCENARIOS',
        bullets: ['First-principles reasoning', 'Clarifying ambiguity before acting', 'Stakeholder alignment processes']
      }
    ]
  },

  'star-method': {
    title: 'APPLYING THE STAR METHOD',
    subtitle: 'A STRUCTURED FRAMEWORK FOR BEHAVIORAL ANSWERS',
    keyword: 'star method',
    centerpieceType: 'star_matrix',
    centerpieceLabel: '4-QUADRANT BEHAVIORAL ENGINE',
    colorScheme: {
      primary: '#06b6d4',
      secondary: '#eab308',
      accent: '#f8fafc',
      bgDark: '#06131c',
      glow: '#22d3ee'
    },
    prompt: 'A technical infographic titled "APPLYING THE STAR METHOD" with a subtitle "A STRUCTURED FRAMEWORK FOR BEHAVIORAL ANSWERS." Four-quadrant matrix background, central 3D STAR icon, 6 callout boxes ("S: DEFINE THE CONTEXT", "T: IDENTIFY THE CHALLENGE", "A: EXPLAIN YOUR ACTIONS", "R: SHARE THE RESULTS", "BE CONCISE & SPECIFIC", "PRACTICE YOUR STORIES"). Cyan, gold, and white.',
    panels: [
      {
        title: 'S: DEFINE THE CONTEXT',
        bullets: ['Company stage & stakes (15%)', 'Timeline and constraint parameters', 'Clear scene setting']
      },
      {
        title: 'T: IDENTIFY THE CHALLENGE',
        bullets: ['Core bottleneck defined (15%)', 'Personal ownership statement', 'Risk of inaction']
      },
      {
        title: 'A: EXPLAIN YOUR ACTIONS',
        bullets: ['Tactical steps taken (50%)', 'Use of "I" vs "We" clarity', 'Rationale behind decisions']
      },
      {
        title: 'R: SHARE THE RESULTS',
        bullets: ['Concrete business metrics (20%)', 'Lessons learned and systemic upgrades', 'Long-term organizational ROI']
      },
      {
        title: 'BE CONCISE & SPECIFIC',
        bullets: ['Avoid rambling narrative drift', '2-minute delivery sweet spot', 'Pivot back to the interview question']
      },
      {
        title: 'PRACTICE YOUR STORIES',
        bullets: ['Build 7 versatile case stories', 'Map each to multiple competencies', 'Rehearse out loud with timers']
      }
    ]
  },

  'elevator-pitch': {
    title: 'CRAFTING YOUR ELEVATOR PITCH',
    subtitle: 'DELIVERING YOUR STORY IN 30 SECONDS',
    keyword: 'elevator pitch',
    centerpieceType: 'speed_timer',
    centerpieceLabel: '30-SECOND VELOCITY DIAL',
    colorScheme: {
      primary: '#ef4444',
      secondary: '#3b82f6',
      accent: '#e2e8f0',
      bgDark: '#120f1a',
      glow: '#f87171'
    },
    prompt: 'A fast-paced infographic titled "CRAFTING YOUR ELEVATOR PITCH" with a subtitle "DELIVERING YOUR STORY IN 30 SECONDS." Transparent high-speed elevator background, central timer display, 6 panels ("WHO ARE YOU?", "WHAT DO YOU DO?", "WHAT IS YOUR UNIQUE VALUE?", "WHAT ARE YOU LOOKING FOR?", "ENGAGE THE LISTENER", "PRACTICE & REFINE"). Red, blue, and light gray.',
    panels: [
      {
        title: 'WHO ARE YOU?',
        bullets: ['Crisp title + core identity', 'No throat-clearing fluff', 'Professional pedigree snapshot']
      },
      {
        title: 'WHAT DO YOU DO?',
        bullets: ['Domain problem you solve', 'Target industry or user base', 'Scale of systems handled']
      },
      {
        title: 'WHAT IS YOUR UNIQUE VALUE?',
        bullets: ['Proven signature differentiator', 'Flagship metric or breakthrough', 'Why you stand out from the herd']
      },
      {
        title: 'WHAT ARE YOU LOOKING FOR?',
        bullets: ['Precise role & challenge sought', 'Type of problems you love solving', 'Direct mutual alignment']
      },
      {
        title: 'ENGAGE THE LISTENER',
        bullets: ['Open-ended closing question', 'Invite collaborative discussion', 'Exchange contact in seconds']
      },
      {
        title: 'PRACTICE & REFINE',
        bullets: ['Zero jargon or buzzwords', 'Natural conversational cadence', 'Adaptive length versions (15s/30s/60s)']
      }
    ]
  },

  'interview-follow-up': {
    title: 'MASTERING THE INTERVIEW FOLLOW-UP',
    subtitle: 'BUILDING RELATIONSHIPS & SHOWING GRATITUDE',
    keyword: 'interview follow-up',
    centerpieceType: 'holographic_comms',
    centerpieceLabel: 'COMMUNICATION TELEMETRY ARRAY',
    colorScheme: {
      primary: '#1e3a8a',
      secondary: '#eab308',
      accent: '#ffffff',
      bgDark: '#080f24',
      glow: '#3b82f6'
    },
    prompt: 'A communication infographic titled "MASTERING THE INTERVIEW FOLLOW-UP" with a subtitle "BUILDING RELATIONSHIPS & SHOWING GRATITUDE." Connected network background, holographic phone display centerpiece, 6 panels ("SEND A THANK-YOU EMAIL", "REITERATE YOUR INTEREST", "HIGHLIGHT KEY POINTS", "ADDRESS ANY WEAKNESSES", "CONNECT ON LINKEDIN", "PRACTICE PATIENCE"). Navy blue, gold, and white.',
    panels: [
      {
        title: 'SEND A THANK-YOU EMAIL',
        bullets: ['Transmit within 6-18 hours', 'Send separate unique notes to each interviewer', 'Keep subject lines clear & relevant']
      },
      {
        title: 'REITERATE YOUR INTEREST',
        bullets: ['State genuine excitement for the mission', 'Confirm cultural resonance', 'Reassert availability']
      },
      {
        title: 'HIGHLIGHT KEY POINTS',
        bullets: ['Reference an interesting interview topic', 'Attach sample work or design diagram', 'Reinforce critical qualifications']
      },
      {
        title: 'ADDRESS ANY WEAKNESSES',
        bullets: ['Tactfully clarify any missed answer', 'Share relevant documentation', 'Demonstrate rapid learning capability']
      },
      {
        title: 'CONNECT ON LINKEDIN',
        bullets: ['Send polite connection invitation', 'Add warm personalized thank-you note', 'Engage thoughtfully with company posts']
      },
      {
        title: 'PRACTICE PATIENCE',
        bullets: ['Respect stated decision timelines', 'Polite 7-day status check cadence', 'Maintain active interview pipeline']
      }
    ]
  },

  'salary-negotiation': {
    title: 'SALARY NEGOTIATION STRATEGIES',
    subtitle: 'MAXIMIZING YOUR COMPENSATION PACKAGE',
    keyword: 'salary negotiation',
    centerpieceType: 'scales',
    centerpieceLabel: 'EQUITY & COMP BALANCE SCALE',
    colorScheme: {
      primary: '#10b981',
      secondary: '#eab308',
      accent: '#a855f7',
      bgDark: '#061612',
      glow: '#34d399'
    },
    prompt: 'A tactical infographic titled "SALARY NEGOTIATION STRATEGIES" with a subtitle "MAXIMIZING YOUR COMPENSATION PACKAGE." Digital marketplace background, scale centerpiece, 6 hexagonal panels ("MARKET RESEARCH", "KNOW YOUR VALUE", "PREPARE YOUR CASE", "CONSIDER TOTAL PACKAGE", "NEGOTIATE CONFIDENTLY", "GET IT IN WRITING"). Electric green, gold, and purple.',
    panels: [
      {
        title: 'MARKET RESEARCH',
        bullets: ['Levels.fyi & Radford benchmark data', 'Geographic compensation tiers', 'Total equity vesting schedules']
      },
      {
        title: 'KNOW YOUR VALUE',
        bullets: ['Calculate your baseline walk-away number', 'Determine 75th percentile target', 'Identify rare skill premia']
      },
      {
        title: 'PREPARE YOUR CASE',
        bullets: ['Build quantifiable achievements dossier', 'Calculate expected ROI for the role', 'Anchor on market data, not personal bills']
      },
      {
        title: 'CONSIDER TOTAL PACKAGE',
        bullets: ['Sign-on bonus & clawback clauses', 'Annual performance multipliers', 'Remote stipends & 401(k) matches']
      },
      {
        title: 'NEGOTIATE CONFIDENTLY',
        bullets: ['Embrace silence after stating counter', 'Use collaborative win-win phrasing', 'Leverage competing offers ethically']
      },
      {
        title: 'GET IT IN WRITING',
        bullets: ['Formal revised offer letter review', 'Verification of equity grant terms', 'Promotion review cadence stipulations']
      }
    ]
  },

  'career-pivot': {
    title: 'NAVIGATING A CAREER PIVOT',
    subtitle: 'STRATEGIES FOR A SUCCESSFUL INDUSTRY SWITCH',
    keyword: 'career pivot',
    centerpieceType: 'pivot_compass',
    centerpieceLabel: 'CROSS-INDUSTRY TRANSFORMATION RADAR',
    colorScheme: {
      primary: '#ef4444',
      secondary: '#f97316',
      accent: '#14b8a6',
      bgDark: '#170e12',
      glow: '#f87171'
    },
    prompt: 'A transformation infographic titled "NAVIGATING A CAREER PIVOT" with a subtitle "STRATEGIES FOR A SUCCESSFUL INDUSTRY SWITCH." Diverging network background, central holographic sign centerpiece, 6 panels ("IDENTIFY TRANSFERABLE SKILLS", "UPSKILLING & RESKILLING", "NETWORK IN NEW FIELD", "UPDATE YOUR RESUME", "SEEK MENTORSHIP", "TEST THE WATERS"). Red, orange, and teal.',
    panels: [
      {
        title: 'IDENTIFY TRANSFERABLE SKILLS',
        bullets: ['Cross-domain problem solving', 'Program management & delivery', 'Data-informed decision making']
      },
      {
        title: 'UPSKILLING & RESKILLING',
        bullets: ['Targeted micro-credentials', 'Hands-on capstone implementations', 'Active contribution to open projects']
      },
      {
        title: 'NETWORK IN NEW FIELD',
        bullets: ['Attend specialized industry conferences', 'Conduct 15 informational coffee chats', 'Join niche professional Slack/Discord hubs']
      },
      {
        title: 'UPDATE YOUR RESUME',
        bullets: ['De-jargonize prior industry terms', 'Lead with hybrid capability summaries', 'Feature relevant portfolio artifacts']
      },
      {
        title: 'SEEK MENTORSHIP',
        bullets: ['Connect with veterans in target industry', 'Identify unspoken hiring expectations', 'Receive critical portfolio feedback']
      },
      {
        title: 'TEST THE WATERS',
        bullets: ['Moonlight on freelance contracts', 'Volunteer for non-profit tech initiatives', 'Validate actual day-to-day fulfillment']
      }
    ]
  },

  'soft-skills': {
    title: 'DEVELOPING ESSENTIAL SOFT SKILLS',
    subtitle: 'INTERPERSONAL ABILITIES FOR CAREER SUCCESS',
    keyword: 'soft skills',
    centerpieceType: 'human_network',
    centerpieceLabel: 'INTERPERSONAL SYNERGY MAP',
    colorScheme: {
      primary: '#1e3a8a',
      secondary: '#eab308',
      accent: '#e2e8f0',
      bgDark: '#080f24',
      glow: '#3b82f6'
    },
    prompt: 'A human-centric technical infographic titled "DEVELOPING ESSENTIAL SOFT SKILLS" with a subtitle "INTERPERSONAL ABILITIES FOR CAREER SUCCESS." Connected profile network background, 3D soft skills icons center, 6 panels ("EFFECTIVE COMMUNICATION", "TEAMWORK & COLLABORATION", "ADAPTABILITY & FLEXIBILITY", "EMOTIONAL INTELLIGENCE", "CRITICAL THINKING", "TIME MANAGEMENT"). Navy blue, gold, and light gray.',
    panels: [
      {
        title: 'EFFECTIVE COMMUNICATION',
        bullets: ['Concise high-context writing', 'Executive stakeholder briefing', 'Deep active listening without interrupting']
      },
      {
        title: 'TEAMWORK & COLLABORATION',
        bullets: ['Cross-functional empathy', 'Constructive code & design reviews', 'Celebrating peer accomplishments']
      },
      {
        title: 'ADAPTABILITY & FLEXIBILITY',
        bullets: ['Navigating organizational pivots', 'Resilience under changing requirements', 'Eagerness to adopt new workflows']
      },
      {
        title: 'EMOTIONAL INTELLIGENCE',
        bullets: ['Self-regulation during crises', 'Reading unstated room dynamics', 'Fostering psychological safety']
      },
      {
        title: 'CRITICAL THINKING',
        bullets: ['Challenging default assumptions', 'Second-order consequence modeling', 'Data-supported risk assessments']
      },
      {
        title: 'TIME MANAGEMENT',
        bullets: ['Ruthless prioritization of high-ROI work', 'Defending uninterrupted deep work', 'Meeting boundary discipline']
      }
    ]
  },

  'hard-skills': {
    title: 'MASTERING IN-DEMAND HARD SKILLS',
    subtitle: 'TECHNICAL ABILITIES FOR MODERN PROFESSIONS',
    keyword: 'hard skills',
    centerpieceType: 'code_matrix',
    centerpieceLabel: 'TECHNICAL STACK APPARATUS',
    colorScheme: {
      primary: '#2563eb',
      secondary: '#10b981',
      accent: '#f97316',
      bgDark: '#071221',
      glow: '#3b82f6'
    },
    prompt: 'A technical infographic titled "MASTERING IN-DEMAND HARD SKILLS" with a subtitle "TECHNICAL ABILITIES FOR MODERN PROFESSIONS." Digital code matrix background, 3D technical icons center, 6 panels ("PROGRAMMING LANGUAGES", "DATA SCIENCE & ANALYTICS", "CLOUD & DEVOPS", "CYBERSECURITY TOOLS", "DIGITAL MARKETING", "MACHINERY OPERATING"). Sharp blue, green, and orange.',
    panels: [
      {
        title: 'PROGRAMMING LANGUAGES',
        bullets: ['TypeScript, Python, Go, Rust', 'Strong architectural design patterns', 'Async event-driven concurrency']
      },
      {
        title: 'DATA SCIENCE & ANALYTICS',
        bullets: ['SQL, Pandas, Vector Databases', 'Statistical hypothesis testing', 'Predictive modeling pipelines']
      },
      {
        title: 'CLOUD & DEVOPS',
        bullets: ['Kubernetes & Docker orchestration', 'Terraform infrastructure as code', 'CI/CD pipeline automation']
      },
      {
        title: 'CYBERSECURITY TOOLS',
        bullets: ['Penetration testing & audit tooling', 'OAuth 2.0 / OIDC security flows', 'Zero Trust IAM architecture']
      },
      {
        title: 'DIGITAL MARKETING',
        bullets: ['SEO & Core Web Vitals optimization', 'Conversion rate optimization (CRO)', 'Marketing analytics & telemetry']
      },
      {
        title: 'MACHINERY OPERATING',
        bullets: ['Industrial automation PLC systems', 'CAD/CAM fabrication protocols', 'IoT telemetry device integration']
      }
    ]
  },

  'career-growth': {
    title: 'DRIVING CAREER GROWTH',
    subtitle: 'A CONTINUOUS JOURNEY OF PROFESSIONAL ADVANCEMENT',
    keyword: 'career growth',
    centerpieceType: 'cog_tree',
    centerpieceLabel: 'EVOLUTIONARY ADVANCEMENT ENGINE',
    colorScheme: {
      primary: '#0d9488',
      secondary: '#9333ea',
      accent: '#22c55e',
      bgDark: '#06161a',
      glow: '#14b8a6'
    },
    prompt: 'A motivational infographic titled "DRIVING CAREER GROWTH" with a subtitle "A CONTINUOUS JOURNEY OF PROFESSIONAL ADVANCEMENT." Ascending ladder background, central tree of cogs centerpiece, 6 callout boxes ("CONTINUOUS LEARNING", "SEEKING CHALLENGES", "BUILDING RELATIONSHIPS", "PERFORMANCE REVIEW SUCCESS", "TAKING INITIATIVE", "LEADERSHIP OPPORTUNITIES"). Deep teal, purple, and green.',
    panels: [
      {
        title: 'CONTINUOUS LEARNING',
        bullets: ['Allocating 5 hours weekly to mastery', 'Reading deep technical whitepapers', 'Attending masterclasses & workshops']
      },
      {
        title: 'SEEKING CHALLENGES',
        bullets: ['Volunteering for high-risk projects', 'Solving cross-silo company bottlenecks', 'Embracing ambiguity and complexity']
      },
      {
        title: 'BUILDING RELATIONSHIPS',
        bullets: ['Cultivating executive sponsors', 'Fostering reciprocal peer alliances', 'Maintaining active alumni connections']
      },
      {
        title: 'PERFORMANCE REVIEW SUCCESS',
        bullets: ['Maintaining a running "brag sheet"', 'Aligning outputs with VP-level OKRs', 'Proactively pre-clearing feedback']
      },
      {
        title: 'TAKING INITIATIVE',
        bullets: ['Writing internal RFCs for improvements', 'Automating painful repetitive workflows', 'Mentoring onboarding colleagues']
      },
      {
        title: 'LEADERSHIP OPPORTUNITIES',
        bullets: ['Leading sprint retrospectives', 'Representing team in leadership syncs', 'Spearheading team knowledge repositories']
      }
    ]
  },

  'hidden-job-market': {
    title: 'THE HIDDEN JOB MARKET PLAYBOOK',
    subtitle: 'UNCOVERING UNADVERTISED ROLES & EXECUTIVE RECRUITMENT',
    keyword: 'hidden job market',
    centerpieceType: 'radar',
    centerpieceLabel: 'EXECUTIVE OPPORTUNITY RADAR',
    colorScheme: {
      primary: '#ea580c',
      secondary: '#f59e0b',
      accent: '#fb923c',
      bgDark: '#0c0a09',
      glow: '#ea580c'
    },
    prompt: 'A tactical executive recruitment infographic titled "THE HIDDEN JOB MARKET PLAYBOOK" with subtitle "UNCOVERING UNADVERTISED ROLES & EXECUTIVE RECRUITMENT." Radar sweep centerpiece revealing confidential executive roles, surrounded by 6 embossed golden-metallic cards.',
    panels: [
      {
        title: 'RETAINED HEADHUNTERS',
        bullets: ['Mapping Tier-1 search firms', 'Establishing executive search relationships', 'Navigating confidential mandates']
      },
      {
        title: 'ORGANIZATIONAL PROFILING',
        bullets: ['Tracking leadership departures', 'Monitoring Series-B/C expansion capital', 'Identifying structural talent vacuums']
      },
      {
        title: 'WARM EXECUTIVE INTROS',
        bullets: ['Mobilizing second-degree peer networks', 'Securing sponsor endorsements', 'Deploying high-touch value briefs']
      },
      {
        title: 'POV BRIEF ENGINEERING',
        bullets: ['Authoring 90-day diagnostic proposals', 'Benchmarking competitor blind spots', 'Offering immediate strategic clarity']
      },
      {
        title: 'CONFIDENTIAL PROTOCOLS',
        bullets: ['Safeguarding active employment', 'Handling off-record talent discussions', 'Pre-clearing conflict-of-interest agreements']
      },
      {
        title: 'COMPENSATION ARBITRAGE',
        bullets: ['Bypassing rigid HR salary bands', 'Negotiating customized equity grants', 'Securing accelerated vesting schedules']
      }
    ]
  },

  'job-application-pipeline': {
    title: 'THE ALGORITHMIC JOB SEARCH PIPELINE',
    subtitle: 'BEATING FILTER FATIGUE & MULTI-OFFER ORCHESTRATION',
    keyword: 'job application strategy',
    centerpieceType: 'pipeline',
    centerpieceLabel: 'MULTI-OFFER CONVERGENCE ENGINE',
    colorScheme: {
      primary: '#10b981',
      secondary: '#0ea5e9',
      accent: '#34d399',
      bgDark: '#041c14',
      glow: '#059669'
    },
    prompt: 'A high-velocity job pipeline architecture infographic titled "THE ALGORITHMIC JOB SEARCH PIPELINE" with subtitle "BEATING FILTER FATIGUE & MULTI-OFFER ORCHESTRATION." Central multi-track pipeline converging into simultaneous offers, 6 technical callout cards in emerald and cyan tones.',
    panels: [
      {
        title: 'PIPELINE ARCHITECTURE',
        bullets: ['Staggered 3-tier company segmentation', 'Kanban velocity tracking metrics', 'Maintaining 15 active high-yield funnels']
      },
      {
        title: 'ATS BYPASS CHANNELS',
        bullets: ['Reverse-engineering hiring manager contacts', 'Engaging principal IC champions', 'Targeting technical hiring panels']
      },
      {
        title: 'STAGGERED INTERVIEWING',
        bullets: ['Synchronizing technical loops across firms', 'Aligning final round calendars', 'Preventing premature single-offer traps']
      },
      {
        title: 'OFFER CONVERGENCE',
        bullets: ['Engineering concurrent 72-hour deadlines', 'Neutralizing exploding deadlines', 'Coordinating cross-offer evaluation calls']
      },
      {
        title: 'LEVERAGE EQUATIONS',
        bullets: ['Pitting competitive term sheets', 'Expanding equity grant allocations', 'Negotiating flexible sign-on premiums']
      },
      {
        title: 'EXIT & ONBOARDING',
        bullets: ['Professional transition protocols', 'Safeguarding executive reputations', 'Securing high-impact 30-day landing plans']
      }
    ]
  }
};

