// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — edit this file or use the admin panel
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO = {
  "name": "",
  "tagline": "",
  "intro": "",
  "photo": "",
  "email": "",
  "github": "",
  "linkedin": "",
  "resumePDF": "",
  "about": {
    "journey": "",
    "passion": "",
    "interests": [
      "AI & LLM applications",
      "Product engineering",
      "Developer tooling",
      "Human-computer interaction"
    ],
    "values": "",
    "aspirations": ""
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
      "designProcess": "I didn’t want to just build another generic dashboard or social feed. I built UniSphere backward from the actual friction points students face every day on campus—specifically, the anxiety of trying to figure out what milestones actually matter and the mess of unverified advice in random Telegram groups.\n\nMy process came down to four main stages:\n\n1. Mapping out the Friction Points\nI started by breaking down user behavior and the psychological stress of the \"resume arms race.\" Students see people padding their profiles with random hackathons and AI-generated fluff, which creates panic. I mapped out exactly how to replace that high-stress comparison layout with something that focuses entirely on clear, actionable directions.\n\n2. Designing around Trust and Verification\nFor me, trust was a core engineering constraint, not an afterthought. I designed the system with Campus SSO and institutional data in mind right from the start. On the UI side, this meant making sure every mentor, module tip, or event has an explicit, un-fakeable \"Verified\" status. No self-proclaimed titles, no guesswork.\n\n3. Creating a Low-Anxiety, High-Substance UI\nInstead of flooding the user with a chaotic feed of options, I designed the interface to feel like a navigation system.\n\n- The Gap-Mapping Flow: I focused heavily on a clean, step-by-step progress layout that visually maps where a student stands against successful upperclassmen benchmarks, spelling out exactly what to build or execute next.\n\n- Cleaning up the Chaos: I replaced the mess of insular chat channels with a highly structured, open dashboard for events and jobs so information is actually transparent.\n\n4. Visual Execution (The Theme)\nI went with a dark, modern tech aesthetic because it feels like a native software workspace where students can focus. I used a strict 60-30-10 rule: a deep charcoal background to prevent eye strain, muted slates for structured sections, and a sharp electric blue used strictly for high-priority actions and milestones so nothing gets lost in the noise.",
      "architecture": "",
      "technologies": [],
      "tags": [],
      "challenges": "\nBuilding UniSphere completely solo without much coding background was a massive learning curve. Because I am not that familiar with coding yet, I had to use Google Antigravity 2.0 to bring the project to life. Instead of programming, my job was to act like a director, explaining my ideas in plain English and managing the AI agents doing the heavy lifting.\n\nIt sounds easy, but it came with some really unique challenges:\n\n 1. Learning how to describe things to the AI\n\nWhen you tell a person to *\"make the page look cleaner,\"* they get what you mean. But the AI takes things very literally. Since I couldn't jump into the code to fix a specific font or move a button myself, I had to learn how to be incredibly precise with my words. I had to describe exactly how I wanted the platform to look and feel in plain language so the AI wouldn't guess and mess up things I already liked.\n\n 2. Spotting mistakes when you can't read code\n\nThe AI moves fast and can build entire pages based on your ideas. But sometimes, it misinterprets a feature or builds a button that looks good but doesn't actually work. Because I’m not a coder, I couldn't look at the raw backend files to see what went wrong. I had to rely entirely on clicking through the live screens myself, testing everything, and then describing the bugs back to the AI in detail so it could find its own mistake and patch it.\n\n3. The temptation to add \"too much, too fast\"\n\nWhen you realize the AI can build almost anything you ask for, it's incredibly easy to get carried away. At first, I wanted the platform to do everything at once—forums, messaging, massive tracking tools, and recruiter portals. But loading the AI up with too many ideas at the same time just confuses it, and it starts losing track of the original vision. I had to learn how to restrain myself and build UniSphere step-by-step, making sure the student and mentor matching worked perfectly before moving on to the next feature.\n\n4. Falling into the \"Always Proceed\" trap\n\nAntigravity constantly shows you its game plan and asks, *\"Should I proceed?\"* In the beginning, I just wanted to move fast, so I'd automatically click \"Yes\" to see the final result. I quickly learned that if I didn't pause and carefully read the AI's plain-English checklist first, it would run off in the wrong direction and create a domino effect of issues. I had to train myself to slow down, review its plan, and correct its assumptions *before* it touched the project.",
      "tradeoffs": "When building this solo, I had to make tough choices about what to prioritize and what to sacrifice to get the platform live.\n\n1.  Simplifying the Layout over Complex Dashboards: I intentionally chose a very clean, low-anxiety layout over a data-heavy, complex dashboard. While advanced users might want more widgets and dense statistics on screen at once, I traded that extra data for a calmer, less overwhelming interface that won't give students \"platform anxiety.\"\n\n2. Structured Milestone Paths over Free-form Profiles: Instead of letting users format their profiles however they want (like a standard LinkedIn or resume), I forced everything into rigid, verified milestone paths. The trade-off is less personal expression for the user, but it completely guarantees the trust and authenticity of the platform.\n\n3. Manual Feature Toggles over Complex Automation: Since I was using AI to build, I chose to use simple, direct settings and manual controls for managing user roles rather than asking the AI to build automated, highly complex background algorithms. This kept the platform stable and predictable for a solo founder.",
      "results": "Despite not writing the code myself, managing the AI properly allowed me to achieve exactly what I set out to build:\n\n1. A fully functioning, three-sided platform that successfully separates and caters to regular students, high-achievers, and recruiters under one roof.\n\n2. A live, working interface that successfully reflects my strict 60-30-10 dark mode theme, creating a highly focused, modern workspace that minimizes eye strain.\n\n3. A clear, actionable \"Gap-Mapping\" view that successfully translates user inputs into step-by-step progress bars, proving that a non-coder can architect a highly personalized user experience.",
      "lessons": "1. AI is an accelerator, but you are the anchor: I learned that AI can build things at lightning speed, but it lacks human intuition. If you don't anchor the AI with a crystal-clear vision, it will build a cluttered product. Your main job isn't coding; it's editing and refining.\n\n2. Slow down to move fast: I learned the hard way that blindly clicking \"Proceed\" on the AI's plans always backfires. Spending five minutes thoroughly reading the AI's plain-English checklist saves hours of fixing broken features later.\n\n3. Specificity is a superpower: I realized that vague feedback like \"make it look better\" is useless. The best way to command an AI is to use hyper-specific, descriptive language about the exact flow, layout, and purpose of a page.",
      "future": "Now that the core platform is built, here is where I want to take UniSphere next:\n\n1. Deeper Integration with Real Campus Data: I want to expand the platform so it can seamlessly connect directly with actual university databases, making the \"Verified\" milestone badges even more automated and seamless.\n\n2. Interactive Roadmap Sandbox: I want to upgrade the Gap-Mapping tool from a static step-by-step list into an interactive simulation tool, where students can toggle different future modules to instantly see how it changes their career trajectory.\n\n3. Smart Notification Hub: Instead of students needing to check the dashboard constantly, I want to build a smart alert system that gently pings a student only when a high-substance opportunity or mentor matching their exact gap-map becomes available.",
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
      "solution": "UniSphere",
      "demo": "",
      "result": "Pending",
      "reflection": "What you'd do differently."
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
    "languages": [
      "Python",
      "Java",
      "JavaScript",
      "C",
      "SQL",
      "HTML/CSS"
    ],
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
