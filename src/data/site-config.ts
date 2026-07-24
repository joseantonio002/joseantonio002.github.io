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
            text: 'Blog & Projects',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Get in touch',
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
        text: "I built the Open Media Intelligence Platform, a near-real-time data platform that turns heterogeneous sources, such as TV and radio broadcasts, into structured, searchable intelligence through automated ingestion and processing pipelines. I also built a monthly batch pipeline for air transport statistics in the Canary Islands and a real-time pipeline and dashboard for monitoring FGC train operations.\n\nBefore that, I was a data scientist at TITSA.",
        actions: [
            {
                text: 'See all my projects',
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
