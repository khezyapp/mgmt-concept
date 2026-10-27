import { defineConfig } from 'vitepress'

export default defineConfig({
  // For a GitHub Pages project site, set base: '/mgmt-concept/'.
  lang: 'en-US',
  title: 'Management Concept',
  description:
    'A leadership and strategy-to-action reference for turning high-level direction into owned, funded, measurable work.',
  themeConfig: {
    nav: [
      { text: 'Handbook', link: '/strategy-to-action/' },
      { text: 'Cheat sheet', link: '/strategy-to-action/01-cheatsheet' },
      { text: 'Templates', link: '/strategy-to-action/06-templates' },
      { text: 'Glossary', link: '/strategy-to-action/08-glossary' },
    ],
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Handbook overview', link: '/strategy-to-action/' },
          { text: '01 — Cheat Sheet', link: '/strategy-to-action/01-cheatsheet' },
        ],
      },
      {
        text: 'Method',
        items: [
          { text: '02 — Decoder', link: '/strategy-to-action/02-decoder' },
          { text: '03 — Traceability', link: '/strategy-to-action/03-traceability' },
        ],
      },
      {
        text: 'Workflow',
        items: [
          { text: '04 — New Document SOP', link: '/strategy-to-action/04-new-document-sop' },
          { text: '05 — Proposal Playbook', link: '/strategy-to-action/05-proposal-playbook' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: '06 — Templates', link: '/strategy-to-action/06-templates' },
          { text: '07 — Worked Example', link: '/strategy-to-action/07-worked-example' },
        ],
      },
      {
        text: 'Reference',
        items: [{ text: '08 — Glossary', link: '/strategy-to-action/08-glossary' }],
      },
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    editLink: {
      pattern: 'https://github.com/khezyapp/mgmt-concept/edit/main/docs/:path',
      text: 'Edit this page',
    },
    footer: {
      message: 'Internal reference. Not an official SME-CU or MEF publication.',
      copyright: 'Verify cited sources before external use.',
    },
  },
})
