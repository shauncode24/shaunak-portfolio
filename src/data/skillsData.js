export const skillsData = {
    languages: [
        { name: "C", icon: "src/assets/skills/skills_section/c.png" },
        { name: "Java", icon: "src/assets/skills/skills_section/java.png" },
        { name: "Python", icon: "src/assets/skills/skills_section/python.png" },
        { name: "JavaScript", icon: "src/assets/skills/skills_section/js.png" },
        { name: "TypeScript", icon: "src/assets/skills/skills_section/ts.png" },
    ],
    frontend: [
        { name: "HTML 5", icon: "src/assets/skills/skills_section/html.png" },
        { name: "CSS", icon: "src/assets/skills/skills_section/css.png" },
        { name: "React", icon: "src/assets/skills/skills_section/react.png" },
        { name: "Angular", icon: "src/assets/skills/skills_section/angular.webp" },
        { name: "Bootstrap", icon: "src/assets/skills/skills_section/bootstrap.png" },
    ],
    backend: [
        { name: "Node.js", icon: "src/assets/skills/skills_section/node.webp" },
        { name: "Express.js", icon: "src/assets/skills/skills_section/express.webp" },
        { name: "ASP.NET Core", icon: "src/assets/skills/skills_section/asp.png" },
        { name: "Flask", icon: "src/assets/skills/skills_section/flask.webp" },
    ],
    database: [
        { name: "MongoDB", icon: "src/assets/skills/skills_section/mongodb.png" },
        { name: "PostgreSQL", icon: "src/assets/skills/skills_section/postgresql.webp" },
        { name: "MySQL", icon: "src/assets/skills/skills_section/mysql.png" },
        { name: "Firebase", icon: "src/assets/skills/skills_section/firebase.png" },
        { name: "Supabase", icon: "src/assets/skills/skills_section/supabase.webp" },
    ],
    aiml: [
        { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png" },
        { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1280px-Scikit_learn_logo_small.svg.png" },
        { name: "Pandas", icon: "https://images.seeklogo.com/logo-png/48/2/pandas-icon-logo-png_seeklogo-483545.png" },
        { name: "NumPy", icon: "https://img.icons8.com/color/512/numpy.png" },
        { name: "Hugging Face", icon: "https://drmowinckels.io/blog/2024/ai-blog-summary/images/hf-logo.png" },
        { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1280px-Jupyter_logo.svg.png" },
        { name: "MatPlotLib", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/3840px-Matplotlib_icon.svg.png" },
    ],
    tools: [
        { name: "GitHub", icon: "src/assets/skills/skills_section/github.png" },
        { name: "Docker", icon: "src/assets/skills/skills_section/docker.png" },
        { name: "Vite", icon: "src/assets/skills/skills_section/vite.png" },
        { name: "VS Code", icon: "src/assets/skills/skills_section/vscode.png" },
        { name: "Figma", icon: "src/assets/skills/skills_section/figma.png" },
        { name: "Postman", icon: "src/assets/skills/skills_section/postman.svg" },
    ],
};

export const tabNames = ["languages", "frontend", "backend", "database", "aiml", "tools"];

export const tabIcons = {
    languages: "src/assets/skills/tab_icons/languages.png",
    frontend: "src/assets/skills/tab_icons/frontend.png",
    backend: "src/assets/skills/tab_icons/backend.png",
    database: "src/assets/skills/tab_icons/database.png",
    aiml: "src/assets/skills/tab_icons/aiml.png",
    tools: "src/assets/skills/tab_icons/tools.png",
};

export const recipes = [
    {
        "ingredients": ["MongoDB", "Express.js", "React", "Node.js"],
        "result": "MERN Stack",
        "icon": "src/assets/skills/recipes/mernstack.png"
    },
    {
        "ingredients": ["PostgreSQL", "Express.js", "React", "Node.js"],
        "result": "PERN Stack",
        "icon": "src/assets/skills/recipes/pernstack.jpeg"
    },
    {
        "ingredients": ["MongoDB", "Express.js", "Angular", "Node.js"],
        "result": "MEAN Stack",
        "icon": "src/assets/skills/recipes/meanstack.png"
    },
    {
        "ingredients": ["HTML 5", "CSS", "JavaScript"],
        "result": "Static Website",
        "icon": "src/assets/skills/recipes/staticwebsite.png"
    },

    // Modern Serverless Stacks
    {
        "ingredients": ["React", "Supabase", "TypeScript"],
        "result": "Modern Serverless",
        "icon": "src/assets/skills/recipes/modernserverless.png"
    },

    // Python Web Frameworks
    {
        "ingredients": ["Python", "Flask", "PostgreSQL", "React"],
        "result": "Flask Full-Stack",
        "icon": "src/assets/skills/recipes/flaskfullstack.png"
    },
    {
        "ingredients": ["Python", "Flask", "MongoDB"],
        "result": "Python REST API",
        "icon": "src/assets/skills/recipes/pythonrestapi.png"
    },

    // Enterprise & .NET Stacks
    {
        "ingredients": ["ASP.NET Core", "PostgreSQL", "Angular", "TypeScript"],
        "result": "Enterprise Stack",
        "icon": "src/assets/skills/recipes/enterprisestack.png"
    },

    // AI/ML Web Applications
    {
        "ingredients": ["Python", "TensorFlow", "Flask", "React"],
        "result": "ML Web App",
        "icon": "src/assets/skills/recipes/mlwebapp.png"
    },
    {
        "ingredients": ["Python", "Hugging Face", "Flask", "React"],
        "result": "NLP Application",
        "icon": "src/assets/skills/recipes/nlpapplication.png"
    },
    {
        "ingredients": ["Node.js", "TensorFlow", "Express.js", "React"],
        "result": "TensorFlow.js App",
        "icon": "src/assets/skills/recipes/tensorflowjsapp.png"
    },

    // Data Science & Analytics
    {
        "ingredients": ["Python", "Pandas", "NumPy", "MatPlotLib", "Jupyter"],
        "result": "Data Science Pipeline",
        "icon": "src/assets/skills/recipes/datasciencepipeline.png"
    },
    {
        "ingredients": ["Python", "Scikit-learn", "Pandas", "NumPy"],
        "result": "ML Pipeline",
        "icon": "src/assets/skills/recipes/mlpipeline.png"
    },
    {
        "ingredients": ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
        "result": "Deep Learning Pipeline",
        "icon": "src/assets/skills/recipes/deeplearningpipeline.png"
    },

    // Modern TypeScript Stacks
    {
        "ingredients": ["TypeScript", "Angular", "Node.js", "MongoDB"],
        "result": "TypeScript MEAN",
        "icon": "src/assets/skills/recipes/typescriptmean.png"
    },

    // Microservices & Containerized
    {
        "ingredients": ["Node.js", "Express.js", "MongoDB", "Docker"],
        "result": "Microservices Stack",
        "icon": "src/assets/skills/recipes/microservicesstack.png"
    }
]