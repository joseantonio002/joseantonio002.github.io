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
    subtitle: 'Software Engineer',
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
        text: "Multidisciplinary engineer with a strong interest in understanding systems at a deep level. I usually work with data or build end-to-end applications. I stay up to date with the latest technologies and have recently been incorporating agentic engineering into my development process.\n\nI have worked at TITSA as a Data Scientist and recently completed a master's degree in Data Engineering. Some of the projects I have built on my own include an OSINT platform to compile and visualize data from heterogeneous sources, a desktop app to find historical and current chart patterns (this one was before AI), and a dashboard for air transport statistics in the Canary Islands.",
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
