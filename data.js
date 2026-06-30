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
      "technologies": [
        "Google Antigravity 2.0",
        "Prompt Engineering"
      ],
      "tags": [
        "Iterative Prototype",
        "UI/UX Design",
        "AI-Assisted Development"
      ],
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
      "description": "Sousa is an AI-powered kitchen assistant built on Microsoft Copilot that helps busy working adults reduce food waste by turning ingredients already in their fridge into quick, healthy meals. Using image recognition, expiry awareness, and AI reasoning, Sousa recommends recipes based on what users already own, making meal planning faster, smarter, and more sustainable.",
      "insight": "- Solved a real-world problem by combining AI with sustainable everyday habits.\n-  Leveraged Microsoft Copilot to integrate image recognition, reasoning, and conversational guidance into a single AI agent.\n- Designed a frictionless user experience where a single photo generates personalized meal recommendations.\n- Applied human-centered design to prioritize simplicity, convenience, and healthy decision-making.\n- Strengthened skills in AI product design, prompt engineering, storytelling, and pitching through an end-to-end project.\n- Demonstrated how AI can create practical, high-impact solutions that improve daily life while reducing household food waste.",
      "link": "",
      "github": "https://drive.google.com/drive/folders/1Wf9L136ljI0Q-R06AanQToWmMf9BR8H9?usp=sharing"
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
      "description": "Developed a growth strategy to increase adoption of Shopee Pickup Points (SPP) in Indonesia by identifying the key behavioral barriers preventing users from choosing pickup over home delivery. Through user research and data analysis, I found that low awareness, inconvenient pickup locations, privacy concerns, and shipping costs were the primary obstacles. Based on these insights, I proposed an integrated solution combining targeted digital marketing, a commute-aware pickup experience, and privacy-focused smart lockers with incentive campaigns to make pickup a more convenient, trusted, and habitual choice.\n",
      "outcome": "The project evolved from a simple marketing campaign into a comprehensive growth strategy after user behavior revealed that awareness alone would not drive adoption. I designed an integrated customer acquisition and retention flywheel that combined digital marketing, product enhancements, and physical infrastructure to create a seamless user journey. High-fidelity prototypes, including social media concepts, in-app UI mockups, and a campaign video, demonstrated the end-to-end experience. \n\nTo ensure commercial viability, I also restructured the budget by separating capital and operational expenses and proposed a time-limited incentive campaign that maximized user adoption while maintaining a strong return on investment.",
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
  "experience": [],
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
      "id": "3lpawfx",
      "title": "Orientation Group Leader",
      "organisation": "NUS School of Computing",
      "period": "July 2024",
      "type": "Freshmen Orientation Week",
      "impact": "",
      "teamSize": "",
      "skills": []
    },
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
      "id": "dol9via",
      "title": "Volunteer",
      "organisation": "Sengkang General Hospital",
      "period": "2023 - Present",
      "type": "Healthcare",
      "impact": "Volunteering at Sengkang General Hospital taught me that healing goes beyond medical treatment. Sometimes, simply spending time with a patient, listening to their story, or offering encouragement can make a meaningful difference to their hospital experience. It showed me the importance of empathy, patience, and human connection, and reminded me that even small acts of kindness can have a lasting impact on someone's recovery journey.",
      "teamSize": "-",
      "skills": [
        "Communication",
        "Teamwork"
      ]
    },
    {
      "id": "lv6kz27",
      "title": "Volunteer",
      "organisation": "Red Cross Youth",
      "period": "2023 - Present",
      "type": "Community Service",
      "impact": "Volunteering has shaped the way I approach both life and technology. It taught me to look beyond problems and understand the people behind them. Whether providing first aid, supporting community events, or working alongside fellow volunteers, I learned the importance of empathy, teamwork, and staying composed in challenging situations. These experiences continue to influence the way I build solutions today. Always starting with people and their needs.\n",
      "teamSize": "-",
      "skills": [
        "First Aid"
      ]
    },
    {
      "id": "6001ule",
      "title": "Exco Member ",
      "organisation": "Student Council (Temasek Secondary School)",
      "period": "2019 - 2022",
      "type": "Leadership",
      "impact": "",
      "teamSize": "",
      "skills": [
        "Event Planning"
      ]
    }
  ],
  "learning": {
    "timeline": [
      {
        "year": "2026",
        "milestone": "Created my first app & website thr"
      },
      {
        "year": "2026",
        "milestone": "Exploring Artificial Intelligence"
      },
      {
        "year": "2025",
        "milestone": "Computer Science @ NUS"
      }
    ],
    "current": [
      "Prompt Engineering",
      "Generative AI",
      "Product Strategy"
    ],
    "exploring": [
      "Agentic AI workflows"
    ],
    "courses": [
      {
        "name": "CFG2002 - Global Industry Insights",
        "institution": "NUS",
        "year": "2026"
      }
    ],
    "reading": [],
    "research": [
      "Human-AI interaction"
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
    },
    {
      "id": "xhfwt53",
      "name": "Introduction to Sustainability and Sustainable Finance",
      "issuer": "Singapore Green Finance Centre",
      "year": "2025",
      "category": "Finance, Sustainability",
      "link": ""
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
