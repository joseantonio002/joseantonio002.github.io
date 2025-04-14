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

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
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
    subscribe?: Subscribe;
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
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'www.linkedin.com/in/josé-antonio-antúnez-b1460a30a'
        },
        {
            text: 'Github',
            href: 'https://github.com/joseantonio002'
        }
    ],
    hero: {
        title: 'Hey! This is my web cave — come on in.',
        text: "Hi! I'm José, a Computer Engineering graduate with a passion for Data Science and Artificial Intelligence.\n\nI'm currently working remotely in the Big Data department at TITSA, where I’ve been gaining hands-on experience in data engineering and analytics.\n\n🛠 Tech stack & skills:\n- Programming in Python, C++, and SQL\n- Data visualization with Power BI\n- Version control using Git & GitHub\n- Basics of HTML, CSS, and JavaScript\n\nI'm also a self-learner, constantly exploring topics in machine learning, AI, and data science. My next step? Pursuing a Master’s in Data Science to deepen my knowledge and build a career in AI.\n\n👉 Want to know more about my background and journey?\nRead my story",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8
};

export default siteConfig;
