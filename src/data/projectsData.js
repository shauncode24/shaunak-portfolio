export const projectsData = [
    {
        title: "Portfolio Website",
        technologies: ["React", "CSS", "Vite", "JavaScript"],
        description: "A Minecraft-themed portfolio website showcasing projects with interactive elements, smooth animations, and a unique gaming aesthetic. Built with modern web technologies for optimal performance and user experience.",
        longDescription: "This unique portfolio uses a voxel-inspired design to create an immersive experience. Users explore a virtual room with interactive elements like a fireplace, a pet dog, and furniture that trigger different sections. The technical implementation leverages React and Framer Motion for complex state management and seamless animations, while maintaining high performance. The design system is custom-built with CSS, featuring pixel-art aesthetics and dynamic lighting effects.",
        preview: "Project Preview",
        date: "2024",
        role: "Frontend Developer",
        link: "https://example.com/portfolio",
        github: "https://github.com/example/portfolio"
    },
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
    "preview": "src/assets/projects/campus_intel.png",
    "date": "2023",
    "role": "Full Stack Developer",
    "link": "https://example.com/campusintel",
    "github": "https://github.com/example/campusintel"
},

    {
        title: "Task Management App",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Supports multiple projects and team members.",
        longDescription: "This collaborative tool simplifies project management with real-time synchronization. Using Socket.io, changes made by one team member are instantly reflected across all connected clients. The drag-and-drop interface helps in intuitive task organization (Kanban style). The backend is powered by Node.js and MongoDB, handling concurrent updates and complex permission systems for different user roles within teams.",
        preview: "Project Preview",
        date: "2023",
        role: "Backend Lead",
        link: "https://example.com/taskmanager",
        github: "https://github.com/example/taskmanager"
    },
    {
        title: "Weather Dashboard",
        technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
        description: "Interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful visualizations. Features location search and favorite locations.",
        longDescription: "An elegant weather visualization tool that aggregates data from the OpenWeather API. It goes beyond simple forecasts by providing detailed data visualizations using Chart.js for temperature trends, humidity levels, and precipitation. The app features a responsive design, local storage for saving favorite locations, and dynamic background themes that change based on the current weather conditions.",
        preview: "https://s3-alpha.figma.com/hub/file/6422877612/800966cc-495a-4d7f-8afe-e5f2a3e89456-cover.png",
        date: "2022",
        role: "Frontend Developer",
        link: "https://example.com/weather",
        github: "https://github.com/example/weather"
    },
    {
        title: "Social Media Analytics",
        technologies: ["Python", "Flask", "React", "D3.js"],
        description: "Analytics platform for social media metrics with data visualization, trend analysis, and automated reporting. Integrates with multiple social platforms for comprehensive insights.",
        longDescription: "A data-intensive application that helps brands track their social media performance. The backend, built with Python and Flask, processes large datasets from various social media APIs. The frontend uses D3.js to render interactive and complex data visualizations, allowing users to drill down into specific metrics. Automated reporting features generate PDF summaries, and trend analysis algorithms identify improved engagement strategies.",
        preview: "Project Preview",
        date: "2022",
        role: "Data Engineer",
        link: "https://example.com/analytics",
        github: "https://github.com/example/analytics"
    }
];
