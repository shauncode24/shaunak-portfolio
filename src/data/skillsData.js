export const skillsData = {
    languages: [
        { name: "C", icon: "https://www.clipartmax.com/png/full/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png" },
        { name: "Java", icon: "https://689cloud.com/wp-content/uploads/2025/04/1174952-4-1-1.webp" },
        { name: "Python", icon: "https://cdn-icons-png.flaticon.com/256/5968/5968350.png" },
        { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
    ],
    frontend: [
        { name: "HTML 5", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968267.png" },
        { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
        { name: "React", icon: "https://i.sstatic.net/0hlcD.png" },
        { name: "Angular", icon: "https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-svg-download-png-1720094.png" },
        { name: "Bootstrap", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" },
    ],
    backend: [
        { name: "Node.js", icon: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-svg-download-png-3030179.png" },
        { name: "Express.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" },
        { name: "ASP.NET Core", icon: "https://www.albiorixtech.com/wp-content/uploads/2022/03/net-core-company.png" },
        { name: "Flask", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png" },
    ],
    database: [
        { name: "MongoDB", icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fmongodb_original_wordmark_logo_icon_146425.png&id=146425&pack_or_individual=pack" },
        { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/960px-Postgresql_elephant.svg.png" },
        { name: "MySQL", icon: "https://pngimg.com/d/mysql_PNG23.png" },
        { name: "Firebase", icon: "https://images.seeklogo.com/logo-png/61/2/firebase-icon-logo-png_seeklogo-615938.png" },
        { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp" },
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
        { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
        { name: "Docker", icon: "https://images.seeklogo.com/logo-png/64/2/docker-icon-logo-png_seeklogo-643955.png" },
        { name: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1280px-Vitejs-logo.svg.png" },
        { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/500px-Visual_Studio_Code_1.35_icon.svg.png" },
        { name: "Figma", icon: "https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png" },
        { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
    ],
};

export const tabNames = ["languages", "frontend", "backend", "database", "aiml", "tools"];

export const tabIcons = {
    languages: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
    frontend: "https://camo.githubusercontent.com/1faefc2972014f0f6b3aed4cdb494ee8d7fba0799b2b95863f36c4aa616617a2/68747470733a2f2f63646e2e7261776769742e636f6d2f7368616e6e6f6e6d6f656c6c65722f66726f6e742d656e642d6c6f676f2f6d61737465722f6578706f7274732f66726f6e742d656e642d6c6f676f2d62772e706e67",
    backend: "https://cdn-icons-png.flaticon.com/512/3667/3667919.png",
    database: "https://cdn-icons-png.flaticon.com/512/1980/1980250.png",
    aiml: "https://cdn-icons-png.flaticon.com/512/4824/4824797.png",
    tools: "https://cdn-icons-png.flaticon.com/512/2620/2620885.png",
};

export const recipes = [
    {
        "ingredients": ["MongoDB", "Express.js", "React", "Node.js"],
        "result": "MERN Stack",
        "icon": "https://s3-alpha.figma.com/hub/file/2947064942/e1d5fb23-f436-4a8c-9b8e-af757cdc6dae-cover.png"
    },
    {
        "ingredients": ["PostgreSQL", "Express.js", "React", "Node.js"],
        "result": "PERN Stack",
        "icon": "https://repository-images.githubusercontent.com/248812720/56902700-c5bd-11ea-813f-ed8631377258"
    },
    {
        "ingredients": ["MongoDB", "Express.js", "Angular", "Node.js"],
        "result": "MEAN Stack",
        "icon": "https://www.imensosoftware.com/wp-content/uploads/2018/07/graphics_6.png"
    },
    {
        "ingredients": ["HTML 5", "CSS", "JavaScript"],
        "result": "Static Website",
        "icon": "https://www.nicepng.com/png/full/18-187940_free-icons-png-small-website-icon.png"
    },

    // Modern Serverless Stacks
    {
        "ingredients": ["React", "Supabase", "TypeScript"],
        "result": "Modern Serverless",
        "icon": "https://www.svgrepo.com/show/374073/serverless.svg"
    },

    // Python Web Frameworks
    {
        "ingredients": ["Python", "Flask", "PostgreSQL", "React"],
        "result": "Flask Full-Stack",
        "icon": "https://cdn-icons-png.flaticon.com/512/6674/6674591.png"
    },
    {
        "ingredients": ["Python", "Flask", "MongoDB"],
        "result": "Python REST API",
        "icon": "https://cdn-icons-png.flaticon.com/512/103/103093.png"
    },

    // Enterprise & .NET Stacks
    {
        "ingredients": ["ASP.NET Core", "PostgreSQL", "Angular", "TypeScript"],
        "result": "Enterprise Stack",
        "icon": "https://cdn-icons-png.flaticon.com/512/18510/18510682.png"
    },

    // AI/ML Web Applications
    {
        "ingredients": ["Python", "TensorFlow", "Flask", "React"],
        "result": "ML Web App",
        "icon": "https://cdn-icons-png.flaticon.com/512/7017/7017557.png"
    },
    {
        "ingredients": ["Python", "Hugging Face", "Flask", "React"],
        "result": "NLP Application",
        "icon": "https://cdn-icons-png.flaticon.com/512/9831/9831371.png"
    },
    {
        "ingredients": ["Node.js", "TensorFlow", "Express.js", "React"],
        "result": "TensorFlow.js App",
        "icon": "https://codelabs.developers.google.com/static/tensorflowjs-transfer-learning-teachable-machine/img/54e81d02971f53e8.png"
    },

    // Data Science & Analytics
    {
        "ingredients": ["Python", "Pandas", "NumPy", "MatPlotLib", "Jupyter"],
        "result": "Data Science Pipeline",
        "icon": "https://cdn-icons-png.flaticon.com/512/16990/16990376.png"
    },
    {
        "ingredients": ["Python", "Scikit-learn", "Pandas", "NumPy"],
        "result": "ML Pipeline",
        "icon": "https://static.thenounproject.com/png/2300265-200.png"
    },
    {
        "ingredients": ["Python", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
        "result": "Deep Learning Pipeline",
        "icon": "https://cdn-icons-png.flaticon.com/256/2103/2103718.png"
    },

    // Modern TypeScript Stacks
    {
        "ingredients": ["TypeScript", "Angular", "Node.js", "MongoDB"],
        "result": "TypeScript MEAN",
        "icon": "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
    },

    // Microservices & Containerized
    {
        "ingredients": ["Node.js", "Express.js", "MongoDB", "Docker"],
        "result": "Microservices Stack",
        "icon": "https://cdn-icons-png.flaticon.com/512/6357/6357632.png"
    }
]