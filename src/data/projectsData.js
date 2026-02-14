import campusIntel from '@/assets/projects/campus_intel.png';
import floodAlert from '@/assets/projects/flood_alert.png';
import nutriflow from '@/assets/projects/nutriflow.png';
import zencare from '@/assets/projects/zencare.png';
import portfolio from '@/assets/projects/portfolio.png';

export const projectsData = [
    {
        "title": "CampusIntel",
        "technologies": [
            "Gemini API",
            "Vertex AI Embeddings",
            "Firebase Authentication",
            "Firestore",
            "Cloud Storage",
            "Cloud Functions",
            "Firebase Hosting",
            "React",
            "Google Cloud Platform"
        ],
        "description": "CampusIntel is a document-grounded AI platform that centralizes official campus PDFs and uses Retrieval-Augmented Generation (RAG) to deliver citation-backed answers, structured process guidance, and deadline insights to students.",
        "longDescription": "CampusIntel – Campus Intelligence & Knowledge Management Platform is an AI-powered system built to eliminate misinformation and fragmented access to academic information within universities.\n\nInstitutions generate large volumes of critical information such as academic policies, administrative procedures, circulars, and deadline notices. However, this information is scattered across PDFs, portals, and notice boards, forcing students to rely on unofficial sources and leading to confusion and missed deadlines.\n\nCampusIntel solves this by building a centralized intelligence layer over verified institutional documents. Administrators upload official PDFs to Cloud Storage, after which the system extracts text, splits it into meaningful chunks, and generates semantic embeddings using Vertex AI. These embeddings enable efficient semantic retrieval through a Retrieval-Augmented Generation (RAG) pipeline.\n\nWhen a student submits a query, the system converts the query into an embedding, retrieves the most relevant document chunks, and sends them to the Gemini API. The response is generated strictly from retrieved official content and includes citation references, ensuring accuracy and preventing hallucinations.\n\nBeyond question answering, the system includes structured process guidance, automated deadline extraction, role-based dashboards, and analytics to identify frequently misunderstood policies. The project emphasizes correctness, trust, and responsible AI deployment over unnecessary complexity.",
        "features": [
            "Document-Grounded AI Chat – Generates answers strictly from uploaded official PDFs with citation references.",
            "Process Guidance Engine – Converts complex institutional policies into clear, numbered step-by-step instructions.",
            "Automated Deadline Extraction – Identifies important dates from official circulars and displays them as upcoming deadlines.",
            "Role-Based Dashboards – Separate student and admin interfaces with controlled access using Firebase Authentication.",
            "Admin Document Management – Upload, store, and manage official PDFs with metadata tracking.",
            "Analytics Layer – Tracks query patterns to identify frequently asked topics and policy confusion areas."
        ],
        "motivation": "I built CampusIntel to address a real problem I observed on campus — students frequently depend on unofficial sources for critical academic information, leading to confusion and misinformation. I wanted to design a trustworthy AI system grounded strictly in verified documents that prioritizes correctness over creativity.\n\nRather than building a generic chatbot, my goal was to implement a responsible, document-backed intelligence system that demonstrates how generative AI can be deployed reliably in institutional environments.",
        "learnings": [
            {
                "title": "Retrieval-Augmented Generation (RAG) Architecture",
                "description": "I developed a complete end-to-end RAG pipeline and gained hands-on experience with:",
                "points": [
                    "Document text extraction and intelligent chunking strategies",
                    "Generating semantic embeddings using Vertex AI",
                    "Implementing top-k semantic retrieval for contextual grounding",
                    "Combining retrieved context with LLM prompts for accurate responses",
                    "Designing citation-based answer generation to reduce hallucinations"
                ],
                "footer": "This project transitioned my understanding of RAG from theoretical knowledge to practical, production-style implementation."
            },
            {
                "title": "Responsible & Trustworthy AI System Design",
                "description": "Through this project, I learned the importance of:",
                "points": [
                    "Constraining LLM outputs to verified data sources",
                    "Designing prompts that enforce structure and accuracy",
                    "Balancing AI flexibility with institutional correctness",
                    "Building transparency through citation-backed responses"
                ],
                "footer": "It reshaped how I approach AI development in sensitive, real-world environments."
            },
            {
                "title": "Cloud Architecture & Backend Engineering",
                "description": "I designed and implemented a scalable cloud-based architecture involving:",
                "points": [
                    "Role-based authentication using Firebase Authentication",
                    "Structured Firestore schema for documents, chat logs, deadlines, and analytics",
                    "Cloud Storage integration for official PDF handling",
                    "Cloud Functions for embedding generation, retrieval, and query processing",
                    "End-to-end integration within Google Cloud Platform services"
                ],
                "footer": "This significantly strengthened my backend system design and cloud integration skills."
            },
            {
                "title": "Product Thinking & MVP Execution",
                "description": "Beyond technical skills, I improved my execution discipline by:",
                "points": [
                    "Locking scope to core RAG functionality before adding enhancements",
                    "Prioritizing accuracy and impact over UI polish",
                    "Designing a clear demo flow for judges",
                    "Avoiding over-engineering and unnecessary optimization"
                ],
                "footer": "This experience enhanced my ability to build focused, high-impact MVPs under hackathon constraints."
            }
        ],
        "preview": campusIntel,
        "date": "Jan 2026",
        "role": "",
        "link": "",
        "github": "https://github.com/shauncode24/campus-intelligence"
    },
    {
        "title": "FloodAlert",
        "technologies": [
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Firebase",
            "Google Maps API",
            "OpenWeather API",
            "Chart.js",
            "Cloud Hosting"
        ],
        "description": "FloodAlert is a smart flood prediction and disaster management platform that combines rainfall monitoring, real-time alerts, heatmaps, and emergency coordination tools to help communities respond proactively to flood risks.",
        "longDescription": "FloodAlert is a full-stack disaster management and flood warning system designed to provide early risk detection, real-time alerts, and coordinated emergency response tools.\n\nFlood-prone regions often lack centralized digital systems that combine rainfall analytics, predictive indicators, alert broadcasting, and relief coordination. As a result, citizens receive delayed warnings, authorities struggle with damage assessment, and emergency responses become reactive instead of proactive.\n\nFloodAlert addresses this by integrating environmental data monitoring with intelligent analytics and public communication tools. The system collects rainfall and weather data through external APIs and visualizes trends through interactive dashboards and charts. High-risk zones are highlighted using dynamic heatmaps integrated with Google Maps.\n\nWhen risk thresholds are crossed, the platform generates alerts for affected areas. Users can view nearby safe shelters, receive emergency guidance, and submit damage reports with location details. Administrators can monitor analytics, verify reports, and coordinate response efforts.\n\nThe platform supports multi-stakeholder access including citizens, administrators, local authorities, meteorological departments, and NGOs. By combining prediction, visualization, and communication, FloodAlert transforms disaster management from reactive crisis handling into proactive risk mitigation.",
        "features": [
            "Rainfall Monitoring Dashboard – Visualizes live and historical rainfall data using interactive charts.",
            "Flood Risk Heatmaps – Displays high-risk zones dynamically using geospatial mapping.",
            "Real-Time Alert System – Generates alerts when rainfall or risk thresholds are exceeded.",
            "Shelter Locator – Allows users to find the nearest emergency shelters using location-based services.",
            "Damage Report Submission – Citizens can submit geo-tagged flood damage reports.",
            "Admin Analytics Panel – Enables authorities to monitor risk levels, reports, and regional impact.",
            "Multi-Language Support – Improves accessibility across diverse communities."
        ],
        "motivation": "FloodAlert was inspired by the recurring impact of floods in vulnerable regions and the lack of accessible, centralized disaster response platforms. I wanted to build a system that goes beyond prediction by integrating monitoring, alerts, reporting, and coordination into a single platform.\n\nMy goal was to design a solution that empowers both citizens and authorities with timely, actionable information to reduce damage and improve emergency response efficiency.",
        "learnings": [
            {
                "title": "Real-Time Data Integration & Visualization",
                "description": "Through this project, I gained experience in:",
                "points": [
                    "Integrating external weather and rainfall APIs",
                    "Designing dashboards with real-time data updates",
                    "Implementing dynamic charts and trend analysis",
                    "Managing asynchronous data flows in full-stack applications"
                ],
                "footer": "This strengthened my ability to build data-driven applications with live analytics."
            },
            {
                "title": "Geospatial Systems & Mapping",
                "description": "I learned how to:",
                "points": [
                    "Integrate Google Maps API for location-based services",
                    "Render dynamic heatmaps for risk visualization",
                    "Work with geographic coordinates and area-based filtering",
                    "Design location-aware alert mechanisms"
                ],
                "footer": "This introduced me to practical geospatial system design."
            },
            {
                "title": "Full-Stack System Architecture",
                "description": "I designed and implemented:",
                "points": [
                    "A RESTful backend using Node.js and Express",
                    "Database schema for users, alerts, reports, and shelters",
                    "Role-based access control for admins and citizens",
                    "End-to-end frontend-backend integration with React"
                ],
                "footer": "This improved my ability to design scalable and structured full-stack applications."
            },
            {
                "title": "Disaster Management & Product Thinking",
                "description": "Beyond technical skills, I developed:",
                "points": [
                    "Understanding of stakeholder-based system design",
                    "Risk threshold modeling for alert generation",
                    "User-centric design for emergency scenarios",
                    "Awareness of real-world constraints in crisis systems"
                ],
                "footer": "This project enhanced my ability to design socially impactful technology solutions."
            }
        ],
        "preview": floodAlert,
        "date": "Nov 2025",
        "role": "",
        "link": "https://flood-alert-system.vercel.app/",
        "github": "https://github.com/shayaanamir/flood-alert-system"
    },
    {
        "title": "NutriFlow",
        "technologies": [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Google Gemini AI",
            "Framer Motion",
            "Recharts",
            "JWT Authentication",
            "Nutritionix API",
            "ExerciseDB API"
        ],
        "description": "NutriFlow is a comprehensive health and fitness web application that combines personalized meal planning, workout tracking, and AI-powered nutritional insights to help users achieve their health goals through data-driven decision making.",
        "longDescription": "NutriFlow is a full-stack health and fitness platform that empowers users to take control of their wellness journey through intelligent meal planning and workout management. The application addresses the common challenge of maintaining consistent health habits by providing structured tools for nutrition tracking and exercise planning.\n\nThe platform leverages the Nutritionix API to provide accurate nutritional data for thousands of foods, allowing users to create detailed meal plans with precise calorie and macronutrient tracking. Each meal plan can be analyzed by Google's Gemini AI, which provides personalized insights on nutritional balance, identifies dietary patterns, and offers actionable suggestions for improvement.\n\nFor fitness tracking, NutriFlow integrates the ExerciseDB API to offer a comprehensive library of exercises. Users can create custom workout routines organized by muscle groups and days of the week, with detailed tracking capabilities for sets, reps, and progress over time. The workout tracker allows users to log their performance in real-time and monitor their fitness journey.\n\nBuilt with a modern tech stack including React for the frontend, Express.js for the backend, and PostgreSQL for data persistence, NutriFlow demonstrates full-stack development capabilities with features like JWT-based authentication, RESTful API design, and responsive UI/UX. The application uses Framer Motion for smooth animations and Recharts for data visualization, creating an engaging and intuitive user experience.\n\nThis project showcases the integration of multiple external APIs, AI-powered features, and complex state management to create a production-ready health and fitness platform.",
        "features": [
            "Meal Planning & Tracking – Create customized meal plans with breakfast, lunch, dinner, and snacks, powered by Nutritionix API for accurate nutritional data.",
            "AI-Powered Diet Analysis – Google Gemini AI provides comprehensive nutritional insights, identifies dietary patterns, and offers personalized suggestions for improvement.",
            "Workout Planning System – Design custom workout routines organized by muscle groups and days, with access to extensive exercise library via ExerciseDB API.",
            "Real-Time Workout Tracking – Log sets, reps, and weights during workouts with progress tracking and performance analytics.",
            "Nutritional Dashboard – Visual macronutrient distribution charts and detailed calorie tracking with protein, carbs, and fats breakdown.",
            "User Authentication – Secure JWT-based authentication system with registration, login, and protected routes.",
            "Responsive Design – Fully responsive interface with smooth animations powered by Framer Motion, optimized for mobile and desktop.",
            "Progress Analytics – Comprehensive tracking tools with visual charts to monitor fitness and nutrition progress over time."
        ],
        "motivation": "NutriFlow was built from the recognition that achieving health and fitness goals requires more than just willpower—it requires structure, data, and intelligent insights. I wanted to create a platform that removes the guesswork from nutrition and fitness planning by providing users with accurate data, AI-powered analysis, and easy-to-use tracking tools.\n\nThe project was driven by a desire to solve real problems in the health tech space: fragmented tracking tools, lack of personalized insights, and difficulty maintaining consistency. By integrating multiple specialized APIs and AI capabilities into a single cohesive platform, NutriFlow aims to make healthy living more accessible and sustainable.",
        "learnings": [
            {
                "title": "Full-Stack Architecture & API Integration",
                "description": "Building NutriFlow taught me how to design and implement a complete full-stack application:",
                "points": [
                    "Architecting RESTful APIs with Express.js for meal plans, workouts, and user management",
                    "Integrating multiple third-party APIs (Nutritionix, ExerciseDB, Google Gemini) with proper error handling",
                    "Designing PostgreSQL database schemas with relational tables for users, meals, exercises, and tracking data",
                    "Implementing secure JWT-based authentication and authorization middleware",
                    "Managing complex state across frontend components with React hooks and context"
                ],
                "footer": "This project solidified my understanding of how to build scalable, maintainable full-stack applications."
            },
            {
                "title": "AI Integration & Prompt Engineering",
                "description": "Implementing AI-powered nutritional analysis required learning how to:",
                "points": [
                    "Integrate Google Gemini AI API for generating structured nutritional insights",
                    "Design effective prompts that return consistent, actionable diet analysis in JSON format",
                    "Parse and validate AI responses for reliable frontend rendering",
                    "Balance AI capabilities with traditional data processing for optimal performance",
                    "Handle AI API rate limits and error states gracefully"
                ],
                "footer": "Working with AI APIs taught me how to leverage LLMs effectively while maintaining application reliability."
            },
            {
                "title": "Data Visualization & User Experience",
                "description": "Creating an intuitive health tracking platform required focus on:",
                "points": [
                    "Implementing interactive charts with Recharts for macronutrient visualization",
                    "Designing smooth page transitions and animations using Framer Motion",
                    "Building responsive layouts that work seamlessly across devices",
                    "Creating intuitive workflows for meal logging and workout tracking",
                    "Optimizing performance for real-time data updates and API calls"
                ],
                "footer": "This project emphasized that great UX is as important as robust backend functionality."
            },
            {
                "title": "Database Design & Complex Queries",
                "description": "Managing interconnected health data taught me advanced database concepts:",
                "points": [
                    "Designing normalized database schemas with proper foreign key relationships",
                    "Writing complex SQL queries to aggregate nutritional data by meal type and date",
                    "Implementing efficient queries for workout tracking with multiple joined tables",
                    "Managing database transactions for multi-step operations (meal plans, workout sessions)",
                    "Optimizing query performance for dashboard analytics and data visualization"
                ],
                "footer": "Building NutriFlow deepened my understanding of relational database design and SQL query optimization."
            }
        ],
        "preview": nutriflow,
        "date": "Jul 2025",
        "role": "Full-Stack Developer",
        "link": "",
        "github": "https://github.com/shauncode24/Nutriflow"
    },
    {
        "title": "ZenCare",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "description": "ZenCare is a mental wellness web platform designed during the Devstorm Hackathon (BITS Goa) that combines meditation, therapy resources, and productivity tools to help users manage stress and improve focus.",
        "longDescription": "ZenCare is a mental health and wellness platform created during the Devstorm Hackathon hosted by BITS Goa, where our team built and deployed the product within a 36-hour sprint, ultimately placing among the top 25 teams.\n\nThe idea behind ZenCare was to create a digital sanctuary in an increasingly distracted and stressful world. Modern lifestyles often leave little room for mental clarity, emotional balance, or mindful breaks. ZenCare was designed to offer users a structured yet simple way to manage stress, regain focus, and build emotional resilience through accessible digital tools.\n\nThe platform integrates guided audio sessions, reading-based therapy content, yoga routines, and a Pomodoro productivity timer into a clean, calming interface. It also provides access to professional consultation resources for users who may require expert support beyond self-guided tools.\n\nThis project holds special significance for me as it was my first hackathon and my first complete web development project. It marked my entry into building real-world applications from scratch — handling UI design, frontend logic, user experience flow, and deployment under intense time constraints. ZenCare was not only a product milestone but also the foundation of my journey into web development and product building.",
        "features": [
            "Audio Therapy & Guided Sessions – Stress-reduction and relaxation audio modules designed to promote calmness.",
            "Reading Therapy & Daily Inspiration – Curated written content aimed at improving emotional resilience and motivation.",
            "Yoga Therapy Module – Simple, guided routines supporting the mind-body connection.",
            "Pomodoro Productivity Timer – Built-in focus tool to reduce distractions and improve time management.",
            "Professional Help Resources – Quick access to external consultation and expert mental health services.",
            "Minimal & Soothing UI – Designed with simplicity and calm user experience as core principles."
        ],
        "motivation": "ZenCare was built from the belief that mental well-being should be accessible and stigma-free. I wanted to create a platform that encourages people to pause, breathe, and prioritize their emotional health in a fast-moving digital world.\n\nAs my first web development project, it was also driven by curiosity — I wanted to challenge myself to transform an idea into a fully functioning product within a competitive hackathon environment.",
        "learnings": [
            {
                "title": "Empathy-Driven Product Design",
                "description": "While building ZenCare, I learned the importance of designing for emotional needs by:",
                "points": [
                    "Understanding stress and burnout as real user pain points",
                    "Designing calming user flows and minimal interfaces",
                    "Prioritizing clarity and simplicity over feature overload",
                    "Creating a safe and welcoming digital experience"
                ],
                "footer": "This project taught me that user empathy is as important as technical execution."
            },
            {
                "title": "Foundations of Web Development",
                "description": "As my first full web project, I gained hands-on experience in:",
                "points": [
                    "Structuring web pages using semantic HTML",
                    "Styling responsive layouts with CSS",
                    "Implementing interactive functionality with JavaScript",
                    "Connecting user interactions with dynamic UI updates"
                ],
                "footer": "ZenCare laid the groundwork for my future full-stack development journey."
            },
            {
                "title": "Hackathon Execution & Team Collaboration",
                "description": "During the 36-hour build sprint, I developed skills in:",
                "points": [
                    "Rapid ideation and scope prioritization",
                    "Dividing responsibilities effectively within a team",
                    "Building and refining features under strict deadlines",
                    "Presenting and pitching a working prototype confidently"
                ],
                "footer": "This experience strengthened my ability to build efficiently under pressure."
            },
            {
                "title": "Holistic Problem Solving",
                "description": "ZenCare required blending multiple disciplines, including:",
                "points": [
                    "Basic psychological research for wellness content structure",
                    "UX design principles for calming interfaces",
                    "Product thinking to balance utility and simplicity",
                    "Technical implementation within tight constraints"
                ],
                "footer": "I learned that impactful solutions often come from combining empathy, design, and technology."
            }
        ],
        "preview": zencare,
        "date": "Jan 2024",
        "role": "Frontend Developer",
        "link": "https://www.shreyanstatiya.tech/projects/zencare",
        "github": "https://github.com/Percobain/ZenCare"
    },
    {
        "title": "Portfolio",
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "Three.js",
            "GSAP",
            "LibreSprite",
            "Mine-imator",
            "Responsive Design",
            "Custom Animation Systems"
        ],
        "description": "An immersive Minecraft-themed portfolio featuring animated world elements, dynamic environment transitions, custom pixel assets, and game-inspired interactions.",
        "longDescription": "The Minecraft Interactive Portfolio is an immersive, game-inspired personal website that transforms a traditional portfolio into an interactive digital world. Instead of static sections and conventional layouts, the project recreates a Minecraft-style environment complete with animated elements, environmental mood transitions, and interactive components.\n\nThe world includes dynamic lighting modes such as sunrise, sunset, and night themes, along with animated elements like a crackling campfire with smoke effects and a responsive dog companion. Each portfolio section is designed as an interactive block that scales, animates, and plays custom sounds on hover and click — mimicking in-game mechanics.\n\nPixel assets were refined and edited using LibreSprite to maintain visual consistency and precise scaling. Character and environmental animations were created using Mine-imator and integrated seamlessly into the web experience. These animations were optimized for smooth playback while preserving a pixel-accurate aesthetic.\n\nThe project emphasizes experiential design, combining frontend engineering, animation timing, sound design, and environment logic. Careful attention was given to maintaining perspective accuracy, atmospheric transitions, and consistent world-building elements. This portfolio reflects both creative direction and technical depth — turning personal branding into an interactive, playable experience.",
        "features": [
            "Dynamic Environment System – Time-based atmosphere transitions (sunrise, sunset, night, weather variations).",
            "Animated World Elements – Campfire with sound and smoke effects, interactive dog animations created via Mine-imator.",
            "Custom Pixel Asset Editing – Visual refinement and scaling consistency using LibreSprite.",
            "Interactive Work Blocks – Clickable and hover-responsive blocks with scaling and sound feedback.",
            "Immersive Sound Design – Ambient and interaction-based audio to enhance realism.",
            "Optimized Animation Integration – Smooth rendering and controlled animation timing across scenes.",
            "Responsive World Layout – Maintains structure and visual integrity across screen sizes."
        ],
        "motivation": "I wanted to build a portfolio that reflects my creativity and technical precision rather than relying on conventional templates. Minecraft symbolizes building from scratch — which aligns with how I approach software development.\n\nThis project was driven by the idea of transforming a static portfolio into a memorable experience. By combining pixel art, animation tools, and frontend engineering, I aimed to create something that feels alive, interactive, and uniquely personal.",
        "learnings": [
            {
                "title": "Advanced Animation & Integration",
                "description": "Through this project, I strengthened my ability to:",
                "points": [
                    "Create custom animations using Mine-imator and integrate them into web interfaces",
                    "Synchronize multiple animations and environmental transitions",
                    "Optimize animation performance for smooth rendering",
                    "Manage interactive states without breaking immersion"
                ],
                "footer": "This significantly improved my confidence in building animation-heavy web interfaces."
            },
            {
                "title": "Pixel Art & Asset Workflow",
                "description": "Working with LibreSprite allowed me to:",
                "points": [
                    "Edit and refine pixel assets for visual consistency",
                    "Maintain accurate scaling and proportions",
                    "Design cohesive environment elements",
                    "Understand asset pipeline integration from creation to deployment"
                ],
                "footer": "It introduced me to a structured asset design workflow beyond pure coding."
            },
            {
                "title": "Experience-Centric Frontend Engineering",
                "description": "I developed deeper understanding of:",
                "points": [
                    "Designing immersive storytelling through UI interactions",
                    "Balancing aesthetics with usability",
                    "Creating emotional engagement using sound and motion",
                    "Structuring frontend logic for dynamic environment states"
                ],
                "footer": "This shifted my perspective from building websites to crafting interactive experiences."
            },
            {
                "title": "Creative Engineering & Personal Branding",
                "description": "The project taught me how to:",
                "points": [
                    "Translate game mechanics into functional web interactions",
                    "Differentiate myself through creative technical projects",
                    "Combine design tools with frontend engineering",
                    "Build a portfolio that stands out in competitive developer spaces"
                ],
                "footer": "It represents the fusion of creativity, engineering, and storytelling in my development journey."
            }
        ],
        "preview": portfolio,
        "date": "Feb 2026",
        "role": "Frontend Developer & Creative Designer",
        "link": "https://shaunak-portfolio-seven.vercel.app/",
        "github": "https://github.com/shauncode24/portfolio-v4"
    }
];
