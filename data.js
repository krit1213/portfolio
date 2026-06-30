// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — edit this file or use the admin panel
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO = {
  "name": "Krithiga Kaleeswaran",
  "tagline": "Learning by Building!",
  "intro": "Hi! I am Krithiga, a Computer Science undergraduate at the National University of Singapore. I am passionate about building technology that solves real-world problems and creating meaningful impact through AI, enterprise technology, and product innovation. I enjoy exploring new ideas, leading initiatives, and continuously learning as I grow both as a technologist and as a person.",
  "photo": "assets/Kaleeswaran_Krithiga.jpg",
  "email": "krithigak@hotmail.com",
  "github": "https://github.com/krit1213",
  "linkedin": "linkedin.com/in/krithigakaleeswaran",
  "resumePDF": "",
  "about": {
    "journey": "My journey has been shaped by a curiosity to learn, a passion for solving problems, and a desire to create meaningful impact. From leading community initiatives and volunteering to building AI-powered solutions and exploring enterprise technology through global industry exposure, every experience has helped me grow both personally and professionally. Along the way, I've discovered that my passion lies at the intersection of technology, business, and innovation. Using technology not just to build software, but to create solutions that make a difference.",
    "passion": "I build because I believe technology should make a meaningful difference. For me, building is more than writing code. It is about understanding people's challenges, asking the right questions, and creating solutions that genuinely improve the way they live or work. Every project is an opportunity to learn, experiment, and transform an idea into something useful. What motivates me most is knowing that even a simple idea, when built thoughtfully, has the potential to create lasting impact.",
    "interests": [
      "AI & LLM applications",
      "Product engineering",
      "Developer tooling",
      "Enterprise Technology",
      "Digital Transformation"
    ],
    "values": "I believe meaningful technology begins with understanding people. My values are rooted in curiosity, integrity, empathy, and continuous growth. I strive to approach every opportunity with an open mind, take ownership of challenges, and never stop learning. Whether I am leading a team, building a product, or serving the community, I aim to create solutions that are thoughtful, practical, and driven by purpose rather than technology alone.",
    "aspirations": "I aspire to build a career where technology, business, and innovation come together to solve meaningful problems. My goal is to design intelligent products and enterprise solutions that improve the way people and organisations work while creating lasting value. As I grow, I hope to become a technology leader who bridges technical expertise with strategic thinking, leading teams that drive innovation, digital transformation, and positive impact at scale."
  },
  "projects": [
    {
      "id": "is4orcy",
      "title": "UniSphere",
      "subtitle": "Verified peer networks and goal-driven path-mapping for the university ecosystem.",
      "featured": true,
      "problem": "The modern student resume is an arms race of optimized buzzwords, leaving students to face intense academic friction blindly. Relying on unverified forums and insular Telegram groups where advice is pure guesswork, anxious students panic-collect fragmented achievements rather than building actual substance.",
      "users": "Students navigating high-friction academic milestones who need clear, step-by-step portfolio guidance. High Achievers acting as verified peer mentors and tutors to provide trustworthy advice. Recruiters and campus organizers seeking an authentic talent signal to share trusted jobs and events.",
      "solution": "UniSphere is a secure university platform built on institutional data and Campus SSO that connects students with verified high-achiever peer mentors, provides algorithmic gap-mapping to prescribe concrete, step-by-step milestone roadmaps, and drives value-driven proof to turn cluttered resumes into razor-sharp narratives of real action.\n\nThe 3 Direct Features/Fixes:\n- Verified Peer Matching: Built on institutional data and Campus SSO. Students connect instantly with verified peers who have a proven track record of surviving that exact module or securing that milestone. (Fixes: Broken alternatives)\n\n- Algorithmic Gap-Mapping: Compares a student's verified profile against successful upperclassmen who reached the milestones they chase, then generates a concrete, step-by-step roadmap of exactly what to take, build, and execute. (Fixes: Blind navigation)\n\n- Value-Driven Proof: Replaces frantic buzzword collection with strategic intention, guiding students to execute only the projects and verified milestones that matter for their target career. (Fixes: Resume arms race)",
      "vision": "To establish a trusted, secure university ecosystem where student progression is anchored directly to verified institutional truth rather than unverified self-claims. By replacing fragmented, insular chat channels and the anxiety of generative resume fluff with algorithmic gap-mapping and authenticated peer mentorship, UniSphere aims to provide every student with a clear, low-anxiety blueprint of high-substance milestones required to confidently achieve their academic and career goals.",
      "role": "Founder & Lead Developer",
      "team": "Solo",
      "designProcess": "I didn't want to build just another dashboard or social feed. I built UniSphere around the real frustrations students face: knowing which milestones actually matter and navigating unreliable advice from scattered chat groups.\n\nMy design process focused on four areas:\n\n1. Identifying the Friction – I mapped the stress behind the \"resume arms race\" and designed the platform to replace comparison with clear, actionable guidance.\n\n2. Building for Trust– Verification was a core requirement. The platform is designed around Campus SSO and institutional data so mentors, events, and recommendations are clearly verified.\n\n3. Reducing Decision Fatigue – Instead of an overwhelming feed, I created a structured experience with gap-mapping, milestone tracking, and a transparent dashboard for opportunities.\n\n4. Designing for Focus – I chose a modern dark theme using a 60-30-10 color system: charcoal for comfort, slate for structure, and electric blue to highlight important actions and milestones.",
      "architecture": "",
      "technologies": [],
      "tags": [],
      "challenges": "Building UniSphere solo without a strong coding background was a steep learning experience. I relied on Google Antigravity 2.0, where my role was less about writing code and more about directing AI agents through clear, detailed prompts.\n\nThe biggest challenges were:\n\n1. Learning prompt engineering – I had to communicate my ideas precisely, as the AI interpreted instructions literally.\n\n2. Testing instead of coding – Since I couldn't debug the code directly, I validated every feature through hands-on testing and described issues clearly for the AI to fix.\n\n3. Avoiding feature overload – I learned to build incrementally, focusing on getting core features right before adding new functionality.\n\n4. Reviewing before execution – Instead of clicking \"Proceed\" immediately, I learned to carefully review the AI's implementation plan to catch incorrect assumptions early.",
      "tradeoffs": "Building UniSphere solo meant making deliberate trade-offs to deliver a stable and useful platform.\n\n1. Simplicity over complexity – I chose a clean, low-anxiety interface instead of a feature-heavy dashboard to keep the experience focused and intuitive.\n\n2. Trust over flexibility – I prioritized structured, verified milestone paths over fully customizable profiles to ensure credibility and authenticity.\n\n3. Stability over automation – Rather than implementing complex automated workflows, I used simpler controls and feature management to keep the platform reliable and maintainable as a solo builder.",
      "results": "Although I didn't write the code myself, effectively managing the AI allowed me to achieve the vision I had for UniSphere:\n\n1. A fully functional three-sided platform serving students, high-achievers, and recruiters within a single ecosystem.\n\n2. A polished interface built around a consistent 60-30-10 dark theme, creating a modern and distraction-free user experience.\n\n3. A personalized gap-mapping feature that transforms user inputs into clear, step-by-step progress, demonstrating how AI-assisted development can deliver meaningful user experiences.",
      "lessons": "Through building UniSphere, I took away three key lessons:\n\n1. AI is an accelerator, but vision comes from the builder. A clear product vision is essential to guide the AI toward the right outcome.\n\n2. Review before execution. Taking time to validate the AI's implementation plan upfront prevents costly rework later.\n\n3. Specificity matters. Clear, detailed instructions consistently produce better results than vague requests, making prompt design a critical skill.",
      "future": "Now that the core platform is built, my next goals for UniSphere are:\n\n1. Campus data integration – Connect with university systems to automate verification and milestone tracking.\n\n2. Interactive roadmap planning – Transform the Gap-Mapping feature into a sandbox where students can explore different academic and career paths.\n\n3. Smart opportunity alerts – Deliver personalized notifications for relevant mentors, events, internships, and opportunities based on each student's goals and progress.",
      "demo": "https://glowing-creponne-8b9520.netlify.app",
      "github": "https://admirable-churros-b519e7.netlify.app",
      "screenshots": "",
      "thumbnail": ""
    }
  ],
  "ai": [
    {
      "id": "ai-one",
      "title": "Sousa ",
      "subtitle": "An AI agent that reduces food waste by helping busy working adults plan meals based on what's already in their fridge.",
      "tags": [
        "Microsoft Copilot"
      ],
      "description": "A professional pitch deck for Microsoft Copilot Buildathon 2026:\n- 4-slide presentation for Sousa (AI kitchen agent solving food waste)\n- High-contrast black/white design with electric lime green accents\n- GitHub-ready repository with styled README documentation\n- Data-verified statistics \n\n---\n\n### **TOOLS & MODELS USED**\n\n**Development:**\n- pptxgenjs (Node.js for PowerPoint generation)\n- Bookman Old Style font (headings)\n- Electric Lime Green (#AAFF00) accent colour\n- LibreOffice + pdftoppm (QA/preview)\n- Bash scripting (automation)\n\n**AI & Research:**\n- Claude (Sonnet 4.6) — design, copywriting, fact-checking\n- Web search — verify statistics\n- Microsoft Copilot — target platform\n\n---\n\n### **WHAT I LEARNED**\n\n**Design Principles:**\n- High-contrast colours make judges stop and look\n- Bold typography signals quality and confidence\n- Break expected patterns to be memorable\n- Professional doesn't mean safe — boldness wins\n\n**Product Strategy:**\n- Statistics must be verified (wrong data destroys credibility)\n- Target working adults 25-40 (time pressure, real pain points)\n- Specific scenarios outperform generic messaging ($2,913/year > \"significant waste\")\n\n**Pitch Structure:**\n- 4-slide formula works: Hook → Problem → Solution → Why Win\n- Avoid redundancy (don't repeat information across slides)\n- Visual differentiation keeps attention and rhythm\n\n**Competitive Advantage:**\n- Stand out through design, not just copy\n- Judges weight equally: Innovation (25%), Impact (25%), Technical (25%), Presentation (25%)\n- Iteration matters — know when to pivot vs. polish\n\n---\n\n",
      "insight": "### **KEY INSIGHTS**\n\n**How you present shapes what judges believe.** Design is strategy, not decoration. V3's bold aesthetic signals intentionality and confidence.\n\n**Specificity beats generality.** \"1 billion meals wasted daily\" and \"$2,913/year\" are more memorable than vague claims. Data with sources = trust.\n\n**Every element must earn its place.** Redundancy wastes attention. If Slide 3 explains the 5-step flow, don't repeat it in Slide 1 footer tags.\n\n**Iteration leads to conviction.** Creating V1 and V2 taught me which direction was strongest. Committing fully to V3 made it better.\n\n**Documentation is a portfolio piece.** Your README reflects your attention to detail. Judges review GitHub repos. Make it count.",
      "link": "",
      "github": ""
    }
  ],
  "product": [
    {
      "id": "pt-one",
      "title": "Shopee Pickup Points Strategy",
      "type": "Product Strategy & Growth Marketing",
      "tags": [
        "Product Strategy",
        "Business Strategy"
      ],
      "description": "1. The Strategic Problem\n\nThe Core Bottleneck: Shopee experienced lower-than-projected consumer adoption for its offline logistics innovation, Shopee Pickup Points (SPP), with regional checkout utilization hovering at a stagnation point of just 9–14%.\n\n\nThe Business Stakes: This deficit persisted despite Shopee holding a commanding 59% market share in Southeast Asia's expanding e-commerce landscape. Failing to optimize this feature meant leaving extensive money on the table; moving checkout adoption to a target model of 30% unlocks US$25M–$40M in annual regional logistics savings for every 10% adoption lift by systematically cutting down failed home deliveries.\n\n\nThe Objective: Turn a passive, underutilized offline delivery option into a highly shareable, routine choice in Shopee's highest-volume market: Indonesia.\n\n2. The Target Users\n\nThe exercise hyper-focused on two deeply digitized segments within the Indonesian market whose lifestyle constraints matched the operational advantages of localized parcel collection hubs:\n\n- On-the-Go Commuters: Active daily travelers using public transit, trains, or motorbikes whose primary constraint is timing, efficiency, and route layout.\n\n- Privacy-Seeking Gen Z Digital Natives: Young consumers living in dense or shared housing environments who heavily prioritize discretion regarding their purchases and want to skip conversational interactions with cashiers or delivery personnel.\n\n\n3. What Was Discovered (The Data Drivers)\n\nBy analyzing localized user-behavior datasets rather than relying on generic page metrics, the exercise bypassed minor technical variables (like app loading speeds) and uncovered the true systemic behavioral barriers preventing feature adoption:\n\n- The Off-App Discovery Gap (82%): Data revealed that 82% of users discover net-new platform features externally via short-form social video apps (TikTok/Instagram Reels) rather than navigating or reading banners on the Shopee App homepage. Homepage marketing was functionally screaming into an empty room.\n\n- The Routine Detour Friction (47%): Roughly 47% of prospective users refuse pickup options simply because they are misaligned with their daily transit routes. If choosing a pickup spot requires an active detour away from their normal path home, users immediately default back to standard home delivery.\n\n- The Gen Z Discretion Mandate (72%): An overwhelming 72% of Gen Z consumers explicitly select neighborhood convenience store collection to guarantee total personal privacy, specifically wanting to keep package contents completely hidden from overbearing roommates, doormen, or family members.\n\n- Price Sensitivities (65%): Post-checkout surveys confirmed 65% of regional buyers demand completely waived or significantly discounted shipping fees to justify manually walking to collect an item rather than waiting for door-to-door delivery.\n\n4. The Strategic Output\n\nThese discoveries proved that a simple marketing banner or general discount coupon wouldn't work. The final solution had to be an interconnected flywheel:\n\nUsing highly contextual Digital Marketing (TikTok audio trends to solve the 82% discovery gap) to pull users into a frictionless Product UI update (the \"Commute Sync\" map to solve the 47% detour friction), which finally dropped them into an optimized Physical Experience (automated smart lockers at Alfamart hubs to guarantee the 72% privacy mandate with a 60-day viral \"Golden Ticket\" prize incentive).",
      "outcome": "1. A Strategic Pivot (From Silos to a Flywheel)\n- The Pivot: Initially, the problem was framed as a logistics awareness issue for banner ads. Behavioral data forced a shift away from static, internal marketing.\n- The New Framework: The proposal became an interconnected Customer Acquisition and Retention Flywheel where marketing, product features, and physical infrastructure rely on one another to sustain conversion loops.\n\n2. A Multi-Platform Prototype Layout\nThe project produced high-fidelity wireframes and multimedia concepts mapping the user journey across interfaces:\n- The Off-App Hook: A social media storyboard prototype for TikTok and Instagram Reels designed to capture the 82% off-app discovery gap.\n- The Core Interface Update: An in-app UI/UX mockup of the Commute Sync Checkout Map, which captures the 47% route-sensitive segment by surfacing pickup points along a user's existing commute.\n- The Physical Prototype Asset: A 10-second campaign concept video (shopee_dropin_concept.mp4) demonstrating the hook, audio-visual transitions, and gamified locker feedback loops for the #ShopeeDropIn rollout.\n\n3. A Critical Financial Decision (CapEx vs. OpEx)\nTo protect margins and meet executive criteria, the 10,000,000 USD budget was restructured:\n- The Time-Bound Decision: The Golden Ticket Locker lottery was restricted to a 60-day launch window to break user habit inertia without creating permanent operational expenses.\n- The ROI Capital Split: Physical locker manufacturing (2.5M USD) was moved to a Logistics CapEx line item. This ensures the 10M USD budget functions entirely as demand-driving OpEx, creating a transparent ROI model supported by the projected 25M to 40M USD in annual logistics savings.",
      "link": "https://drive.google.com/drive/folders/1vwTOZBK3uqynPbmYkbJUVN997n5kU297?usp=sharing"
    }
  ],
  "writing": [
    {
      "id": "writing-one",
      "title": "CFG2002 - Global Industry Insights (Philippines)",
      "type": "Global Exposure",
      "date": "May 2026",
      "summary": "When I first signed up for the study trip to the Philippines, I expected to learn about different companies and industries. What I did not expect was how much it would change the way I think about technology.\n\nVisiting organisations like SAP Philippines, the Asian Development Bank, UnionBank, ACEN Renewables, Mondelez International, and KMC Solutions showed me that technology isn't just about building software. It is about solving real business problems, improving people's lives, and creating lasting impact. Every conversation and company visit offered a different perspective on innovation, whether it was digital banking, enterprise systems, sustainability, or the future of work.\n\nWhat stayed with me most wasn't any single technology. It was seeing how the best organisations start with understanding people and their challenges before designing solutions. That experience made me realise that the kind of work I want to do sits at the intersection of technology, business, and human needs. It reinforced my belief that meaningful innovation isn't about building the most complex solution. It is about building the right one.\n",
      "link": "",
      "content": ""
    }
  ],
  "experience": [
    {
      "id": "exp-one",
      "role": "Administrative Assistant",
      "company": "Prudential Assurance (VCO Agency)",
      "period": "Feb - Mar 2025",
      "type": "Part-Time",
      "problem": "What business problem were you brought in to solve?",
      "stakeholders": "Who were the stakeholders?",
      "constraints": "What constraints did you work under?",
      "approach": "How did you approach the solution?",
      "architecture": "Technical overview if applicable.",
      "decisions": "Key decisions you made and why.",
      "outcome": "What was the result? Be specific.",
      "lessons": "What did you learn?"
    }
  ],
  "hackathons": [
    {
      "id": "hack-one",
      "name": "APEX AI Bootcamp 2026",
      "organiser": "Digital Defence Alliance Singapore (DDAS) & National Youth Council (NYC)",
      "date": "2026",
      "challenge": "Solving a real word problem ",
      "team": "Solo",
      "role": "Founder & Lead Developer",
      "solution": "UniSphere - Verified peer networks and goal-driven path-mapping for the university ecosystem.",
      "demo": "https://glowing-creponne-8b9520.netlify.app",
      "result": "Pending",
      "reflection": "Establish Strict \"Context Guardrails\" from Day One\n\nIn the beginning, I wanted the AI to understand everything about UniSphere all at once, which led to the AI getting confused and bloated with too many ideas.\n\nHence, from now on, I would segment my prompts right from the start. I would force the AI to focus entirely on building and perfecting one specific user flow (like the student gap-mapping) before letting it even look at the other sides of the platform (like the recruiter dashboard). Keeping the AI's focus narrow prevents it from losing track of the core vision."
    }
  ],
  "leadership": [
    {
      "id": "lead-one",
      "title": "Vice President",
      "organisation": "Red Cross Youth (Nanyang JC Chapter)",
      "period": "2023-2024",
      "type": "Co-Curricular Activity",
      "impact": "- Served as one of six Exco members, providing leadership for a 30-member Red Cross Youth chapter through program planning, volunteer management, and operational coordination.\n\n- Directed the planning and execution of the school's biannual Blood Donation Drive as Overall IC, coordinating cross-functional stakeholders, logistics, and volunteer deployment.\n\n- Led the First Aiders on Wheels initiative by partnering with Singapore Red Cross Headquarters, enabling student volunteers to deliver first aid support at East Coast Park community events.\n\n- Managed chapter proposals and social media communications while receiving the NYJC Individual Award in recognition of leadership, service contributions, and appointment as a Red Cross Youth leader.",
      "teamSize": "~30",
      "skills": [
        "Leadership",
        "Event & Proposal Planning"
      ]
    },
    {
      "id": "3lpawfx",
      "title": "Orientation Group Leader",
      "organisation": "NUS School of Computing",
      "period": "July 2024",
      "type": "Freshmen Orientation Week",
      "impact": "",
      "teamSize": "",
      "skills": []
    }
  ],
  "learning": {
    "timeline": [
      {
        "year": "2023",
        "milestone": "First Python script — sorted Spotify playlists. Broke three times. Fixed it."
      },
      {
        "year": "2024",
        "milestone": "Discovered web development. Built first full-stack project."
      },
      {
        "year": "2025",
        "milestone": "Started NUS CS. Exploring AI/ML and product engineering."
      }
    ],
    "current": [
      "Deep learning fundamentals (fast.ai)",
      "System design for scalable applications",
      "Product management frameworks"
    ],
    "exploring": [
      "Rust",
      "LLM fine-tuning",
      "Agentic AI workflows"
    ],
    "courses": [
      {
        "name": "CFG2002 - Global Industry Insights",
        "institution": "NUS",
        "year": "2026"
      }
    ],
    "reading": [
      "The Pragmatic Programmer — David Thomas & Andrew Hunt",
      "The Mom Test — Rob Fitzpatrick",
      "Zero to One — Peter Thiel"
    ],
    "research": [
      "Human-AI interaction",
      "Educational technology"
    ]
  },
  "skills": {
    "languages": [],
    "frameworks": [
      "React",
      "Flask",
      "Node.js"
    ],
    "ai": [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "Hugging Face"
    ],
    "cloud": [
      "AWS (basics)",
      "Firebase",
      "Vercel"
    ],
    "design": [
      "Figma",
      "Canva"
    ],
    "databases": [
      "PostgreSQL",
      "SQLite",
      "Firebase Firestore"
    ],
    "devtools": [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Docker (basics)"
    ],
    "product": [
      "User Research",
      "Wireframing",
      "Journey Mapping",
      "Agile/Scrum"
    ]
  },
  "certifications": [
    {
      "name": "Google AI Essentials",
      "issuer": "Google",
      "year": "2026",
      "category": "AI",
      "link": "assets/Coursera_8YZHWI2SM12G-2.pdf"
    },
    {
      "name": "Visual Elements of User Interface Design",
      "issuer": "California Institute of the Arts",
      "year": "May 2026",
      "category": "UI",
      "link": "assets/Coursera_C96G5YYZOSBJ-2.pdf"
    }
  ],
  "problems": [
    {
      "id": "prob-one",
      "title": "Problem you've noticed",
      "observation": "What did you observe? Where? When?",
      "whyMatters": "Why does this problem matter and to whom?",
      "idea": "A rough idea of how it could be solved.",
      "stage": "Observation"
    }
  ],
  "currentlyBuilding": [
    {
      "title": "Personal Portfolio Website",
      "description": "",
      "stage": "Active",
      "link": ""
    }
  ]
};
