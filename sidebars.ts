import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  playbookSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'intro',
        'case-interview-basics',
        'prep-roadmap',
        'frameworks-overview',
      ],
    },
    {
      type: 'category',
      label: 'Core Case Types',
      collapsed: false,
      items: [
        'core/profitability',
        'core/market-entry',
        'core/mergers-acquisitions',
        'core/pricing',
        'core/growth-strategy',
        'core/market-sizing',
        'core/operations-cost',
        'core/new-product',
      ],
    },
    {
      type: 'category',
      label: 'Extended Case Types',
      collapsed: true,
      items: [
        'extended/valuation',
        'extended/competitive-response',
        'extended/marketing',
        'extended/public-sector',
        'extended/digital-transformation',
        'extended/pe-due-diligence',
        'extended/revenue-growth',
      ],
    },
    {
      type: 'category',
      label: 'The Big 3 Firms',
      collapsed: false,
      items: ['firms/comparison', 'firms/mckinsey', 'firms/bcg', 'firms/bain'],
    },
    {
      type: 'category',
      label: 'Resources & Practice',
      collapsed: false,
      items: ['resources', 'case-libraries'],
    },
  ],
};

export default sidebars;
