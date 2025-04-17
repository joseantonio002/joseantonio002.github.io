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
    subtitle: 'Blog and portfolio',
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
            text: 'Blog',
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
        text: "Hi! I'm José, a Computer Engineering graduate with a passion for Data Science and Artificial Intelligence.\n\nI'm currently working remotely in the Big Data department at TITSA, where I’ve been gaining hands-on experience in data engineering and analytics.\n\n🛠 Tech stack & skills:\n- Programming in Python, C++, and SQL\n- Data visualization with Power BI\n- Version control using Git & GitHub\n- Basics of HTML, CSS, and JavaScript\n\nI'm also a self-learner, constantly exploring topics in machine learning, AI, and data science. My next step? Pursuing a Master’s in Data Science. Feel free to check out my [Github](https://github.com/joseantonio002).\n\n👉 Want to know more about this blog and my background?\nRead my [first post](https://joseantonio002.github.io/blog/post-1/), where I explain everything",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8
};

export default siteConfig;
