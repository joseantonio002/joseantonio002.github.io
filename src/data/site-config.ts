export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://joseantonio002.github.io',
    title: 'José Antonio',
    subtitle: 'Aspiring Data Engineer/Data Scientist',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog & Portfolio',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jos%C3%A9-antonio-ant%C3%BAnez-b1460a30a/'
        },
        {
            text: 'Github',
            href: 'https://github.com/joseantonio002'
        }
    ],
    hero: {
        title: '',
        text: "Hi! I'm José, a Computer Engineering graduate with a passion for Data Engineering and Data Science.\n\nI have worked remotely in the Big Data department at TITSA, where I’ve gained hands-on experience working with data.\n\n🛠 Tech stack & skills:\n- Programming languages: Python, C++, C# \n- Data manipulation and storage: SQL, Pandas, DuckDB\n- Machine Learning/Deep learning models with PyTorch, Xgboost, scikit-learn\n- Visualizing data with Matplotlib, Seaborn, PowerBI\n- Version control and containerization with Git, Github, Docker\n- Orchestration with Airflow\n\n👉 If you want to see my portfolio projects click [here](tags/project) or in the button \"See my projects\".\nIf you want to know more about my experience, read my [first post](https://joseantonio002.github.io/blog/post-1/), where I explain everything\n\nI'm constantly learning to become the best engineer I can be. Feel free to check out my [Github](https://github.com/joseantonio002).",
        actions: [
            {
                text: 'See my projects',
                href: 'tags/project'
            },
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8
};

export default siteConfig;
