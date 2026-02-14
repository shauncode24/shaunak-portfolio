// Skills Icons
import cIcon from '@/assets/skills/skills_section/c.png';
import javaIcon from '@/assets/skills/skills_section/java.png';
import pythonIcon from '@/assets/skills/skills_section/python.png';
import jsIcon from '@/assets/skills/skills_section/js.png';
import tsIcon from '@/assets/skills/skills_section/ts.png';
import htmlIcon from '@/assets/skills/skills_section/html.png';
import cssIcon from '@/assets/skills/skills_section/css.png';
import reactIcon from '@/assets/skills/skills_section/react.png';
import angularIcon from '@/assets/skills/skills_section/angular.webp';
import bootstrapIcon from '@/assets/skills/skills_section/bootstrap.png';
import nodeIcon from '@/assets/skills/skills_section/node.webp';
import expressIcon from '@/assets/skills/skills_section/express.webp';
import aspIcon from '@/assets/skills/skills_section/asp.png';
import flaskIcon from '@/assets/skills/skills_section/flask.webp';
import mongoIcon from '@/assets/skills/skills_section/mongodb.png';
import postgresIcon from '@/assets/skills/skills_section/postgresql.webp';
import mysqlIcon from '@/assets/skills/skills_section/mysql.png';
import firebaseIcon from '@/assets/skills/skills_section/firebase.png';
import supabaseIcon from '@/assets/skills/skills_section/supabase.webp';
import githubIcon from '@/assets/skills/skills_section/github.png';
import dockerIcon from '@/assets/skills/skills_section/docker.png';
import viteIcon from '@/assets/skills/skills_section/vite.png';
import vscodeIcon from '@/assets/skills/skills_section/vscode.png';
import figmaIcon from '@/assets/skills/skills_section/figma.png';
import postmanIcon from '@/assets/skills/skills_section/postman.svg';

// Tab Icons
import langTabIcon from '@/assets/skills/tab_icons/languages.png';
import frontendTabIcon from '@/assets/skills/tab_icons/frontend.png';
import backendTabIcon from '@/assets/skills/tab_icons/backend.png';
import databaseTabIcon from '@/assets/skills/tab_icons/database.png';
import aimlTabIcon from '@/assets/skills/tab_icons/aiml.png';
import toolsTabIcon from '@/assets/skills/tab_icons/tools.png';

// Recipe Icons
import mernStackIcon from '@/assets/skills/recipes/mernstack.png';
import pernStackIcon from '@/assets/skills/recipes/pernstack.jpeg';
import meanStackIcon from '@/assets/skills/recipes/meanstack.png';
import staticWebIcon from '@/assets/skills/recipes/staticwebsite.png';
import serverlessIcon from '@/assets/skills/recipes/modernserverless.png';
import flaskStackIcon from '@/assets/skills/recipes/flaskfullstack.png';
import pythonApiIcon from '@/assets/skills/recipes/pythonrestapi.png';
import enterpriseStackIcon from '@/assets/skills/recipes/enterprisestack.png';
import mlWebAppIcon from '@/assets/skills/recipes/mlwebapp.png';
import nlpAppIcon from '@/assets/skills/recipes/nlpapplication.png';
import tfJsAppIcon from '@/assets/skills/recipes/tensorflowjsapp.png';
import dsPipelineIcon from '@/assets/skills/recipes/datasciencepipeline.png';
import mlPipelineIcon from '@/assets/skills/recipes/mlpipeline.png';
import dlPipelineIcon from '@/assets/skills/recipes/deeplearningpipeline.png';
import tsMeanIcon from '@/assets/skills/recipes/typescriptmean.png';
import microservicesIcon from '@/assets/skills/recipes/microservicesstack.png';

export const skillsData = {
    languages: [
        { name: "C", icon: cIcon },
        { name: "Java", icon: javaIcon },
        { name: "Python", icon: pythonIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "TypeScript", icon: tsIcon },
    ],
    frontend: [
        { name: "HTML 5", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "React", icon: reactIcon },
        { name: "Angular", icon: angularIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
    ],
    backend: [
        { name: "Node.js", icon: nodeIcon },
        { name: "Express.js", icon: expressIcon },
        { name: "ASP.NET Core", icon: aspIcon },
        { name: "Flask", icon: flaskIcon },
    ],
    database: [
        { name: "MongoDB", icon: mongoIcon },
        { name: "PostgreSQL", icon: postgresIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "Firebase", icon: firebaseIcon },
        { name: "Supabase", icon: supabaseIcon },
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
        { name: "GitHub", icon: githubIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Vite", icon: viteIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Figma", icon: figmaIcon },
        { name: "Postman", icon: postmanIcon },
    ],
};

export const tabNames = ["languages", "frontend", "backend", "database", "aiml", "tools"];

export const tabIcons = {
    languages: langTabIcon,
    frontend: frontendTabIcon,
    backend: backendTabIcon,
    database: databaseTabIcon,
    aiml: aimlTabIcon,
    tools: toolsTabIcon,
};

export const recipes = [
    {
        "ingredients": ["MongoDB", "Express.js", "React", "Node.js"],
        "result": "MERN Stack",
        "icon": mernStackIcon
    },
    {
        "ingredients": ["PostgreSQL", "Express.js", "React", "Node.js"],
        "result": "PERN Stack",
        "icon": pernStackIcon
    },
    {
        "ingredients": ["MongoDB", "Express.js", "Angular", "Node.js"],
        "result": "MEAN Stack",
        "icon": meanStackIcon
    },
    {
        "ingredients": ["HTML 5", "CSS", "JavaScript"],
        "result": "Static Website",
        "icon": staticWebIcon
    },

    // Modern Serverless Stacks
    {
        "ingredients": ["React", "Supabase", "TypeScript"],
        "result": "Modern Serverless",
        "icon": serverlessIcon
    },

    // Python Web Frameworks
    {
        "ingredients": ["Python", "Flask", "PostgreSQL", "React"],
        "result": "Flask Full-Stack",
        "icon": flaskStackIcon
    },
    {
        "ingredients": ["Python", "Flask", "MongoDB"],
        "result": "Python REST API",
        "icon": pythonApiIcon
    },

    // Enterprise & .NET Stacks
    {
        "ingredients": ["ASP.NET Core", "PostgreSQL", "Angular", "TypeScript"],
        "result": "Enterprise Stack",
        "icon": enterpriseStackIcon
    },

    // AI/ML Web Applications
    {
        "ingredients": ["Python", "TensorFlow", "Flask", "React"],
        "result": "ML Web App",
        "icon": mlWebAppIcon
    },
    {
        "ingredients": ["Python", "Hugging Face", "Flask", "React"],
        "result": "NLP Application",
        "icon": nlpAppIcon
    },
    {
        "ingredients": ["Node.js", "TensorFlow", "Express.js", "React"],
        "result": "TensorFlow.js App",
        "icon": tfJsAppIcon
    },

    // Data Science & Analytics
    {
        "ingredients": ["Python", "Pandas", "NumPy", "MatPlotLib", "Jupyter"],
        "result": "Data Science Pipeline",
        "icon": dsPipelineIcon
    },
    {
        "ingredients": ["Python", "Scikit-learn", "Pandas", "NumPy"],
        "result": "ML Pipeline",
        "icon": mlPipelineIcon
    },
    {
        "ingredients": ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
        "result": "Deep Learning Pipeline",
        "icon": dlPipelineIcon
    },

    // Modern TypeScript Stacks
    {
        "ingredients": ["TypeScript", "Angular", "Node.js", "MongoDB"],
        "result": "TypeScript MEAN",
        "icon": tsMeanIcon
    },

    // Microservices & Containerized
    {
        "ingredients": ["Node.js", "Express.js", "MongoDB", "Docker"],
        "result": "Microservices Stack",
        "icon": microservicesIcon
    }
];