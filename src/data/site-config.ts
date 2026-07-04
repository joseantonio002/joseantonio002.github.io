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
        text: "I have experience working with data and building end to end applications. Some of the projects I have built on my own include an **[OSINT platform](https://github.com/joseantonio002/Open-Media-Intelligence-Platform)** to compile and visualize data from heterogeneous sources, a [dashboard](https://github.com/joseantonio002/air_transport_statistics_Canary_Islands) for air transport statistics in the Canary Islands and [PerseumAI](https://github.com/joseantonio002/PerseumAI) a desktop app to find historical and current chart patterns.\n\nI have worked at [TITSA](https://en.wikipedia.org/wiki/TITSA) as a Data Scientist and recently completed a master’s degree in Data Engineering, where I gained experience in [large-scale data processing](https://github.com/joseantonio002/data-lab/tree/main/large_scale_data_processing), [database management](https://github.com/joseantonio002/data-lab/tree/main/large_scale_databases), and related [data engineering/data science practices](https://github.com/joseantonio002/data-lab). Currently incorporating agentic engineering into my workflow by building a project (coming soon)",
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
