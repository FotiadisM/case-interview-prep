import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MBB Case Interview Playbook',
  tagline: 'A complete prep guide for McKinsey, BCG & Bain case interviews',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'local',
  projectName: 'case-interview-prep',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'MBB Case Interview Playbook',
      logo: {
        alt: 'MBB Case Interview Playbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'playbookSidebar',
          position: 'left',
          label: 'Playbook',
        },
        {
          to: 'case-libraries',
          label: 'Case Libraries',
          position: 'left',
        },
        {
          to: 'resources',
          label: 'Resources',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Playbook',
          items: [
            {
              label: 'Start Here',
              to: '/',
            },
            {
              label: 'Core Case Types',
              to: '/core/profitability',
            },
            {
              label: 'The Big 3 Firms',
              to: '/firms/comparison',
            },
          ],
        },
        {
          title: 'Practice',
          items: [
            {
              label: 'Recommended Resources',
              to: '/resources',
            },
            {
              label: 'Case Libraries (MBA casebooks)',
              to: '/case-libraries',
            },
            {
              label: 'PrepLounge (peer practice)',
              href: 'https://www.preplounge.com/',
            },
            {
              label: 'RocketBlocks (drills)',
              href: 'https://www.rocketblocks.me/',
            },
          ],
        },
        {
          title: 'Official Firm Materials',
          items: [
            {
              label: 'McKinsey practice cases',
              href: 'https://www.mckinsey.com/careers/interviewing',
            },
            {
              label: 'BCG case interview preparation',
              href: 'https://careers.bcg.com/global/en/case-interview-preparation',
            },
            {
              label: 'Bain case interview prep',
              href: 'https://www.bain.com/careers/hiring-process/case-interview',
            },
          ],
        },
      ],
      copyright: `Built locally for personal interview prep · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
