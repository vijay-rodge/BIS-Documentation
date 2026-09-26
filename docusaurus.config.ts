import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BIS Intelligent Assistant',
  tagline: 'Authoritative Conversational AI for Indian Standards & BIS Compliance Services',
  favicon: 'img/favicon.ico',

  url: 'https://vijay-rodge.github.io',
  baseUrl: '/BIS-Documentation/',

  organizationName: 'vijay-rodge',
  projectName: 'BIS-Documentation',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Research & Articles',
          blogSidebarCount: 'ALL',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BIS Intelligent Assistant',
      logo: {
        alt: 'BIS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mlSidebar',
          position: 'left',
          label: 'ML Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'coreSidebar',
          position: 'left',
          label: 'Core Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ragSidebar',
          position: 'left',
          label: 'RAG Docs',
        },
        {
          to: '/blog',
          label: 'Research / Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/bis-assistant/bis-intelligent-assistant',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Official Portals',
          items: [
            {
              label: 'BIS Main Portal',
              href: 'https://www.bis.gov.in/',
            },
            {
              label: 'Standards Portal',
              href: 'https://standards.bis.gov.in/',
            },
            {
              label: 'BSB Edge Portal',
              href: 'https://standardsbis.bsbedge.com/',
            },
            {
              label: 'Manakonline Portal',
              href: 'https://www.manakonline.in/',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Multi-Agent ML Engine',
              to: '/docs/ml/multi-agent-system',
            },
            {
              label: 'Core Architecture',
              to: '/docs/architecture/system-architecture',
            },
            {
              label: 'RAG Pipeline',
              to: '/docs/rag/architecture',
            },
            {
              label: 'Compliance Engine',
              to: '/docs/compliance/compliance-overview',
            },
            {
              label: 'Deployment Guide',
              to: '/docs/deployment/deployment-overview',
            },
          ],
        },
        {
          title: 'Community & Source',
          items: [
            {
              label: 'Research / Blog',
              to: '/blog',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/bis-assistant/bis-intelligent-assistant',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bureau of Indian Standards (BIS) Assistant Project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'sql', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
