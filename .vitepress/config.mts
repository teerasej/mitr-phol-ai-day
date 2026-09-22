import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'th-TH',
  title: 'Work smart with AI for Business Analyst',
  description: 'คู่มือกิจกรรมสำหรับ Business Analyst ในการใช้ Copilot Chat อย่างเป็นระบบและตรวจสอบได้',
  base: '/mitr-phol-ai-day/',
  srcExclude: ['README.md', 'CONTRIBUTING.md'],
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://teerasej.github.io/mitr-phol-ai-day/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#f7fafc' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    siteTitle: 'BA + Copilot Chat',
    nav: [
      { text: 'เริ่มเรียน', link: '/' },
      {
        text: 'Modules',
        items: [
          { text: '1 · Frame the Boring Task', link: '/exercises/module-01-frame-the-boring-task/' },
          { text: '2 · Copilot as BA Assistant', link: '/exercises/module-02-copilot-as-ba-assistant/' },
          { text: '3 · Evidence-Grounded Analysis', link: '/exercises/module-03-evidence-grounded-analysis/' },
          { text: '4 · Requirements & Communication', link: '/exercises/module-04-requirements-and-communication/' },
          { text: '5 · BA Work Experiment', link: '/exercises/module-05-ba-work-experiment/' }
        ]
      },
      {
        text: 'Practice files',
        items: [
          { text: 'Synthetic Cross-BU Case Pack', link: '/files/synthetic-cross-bu-case-pack' },
          { text: 'BA Work Experiment Card', link: '/files/ba-work-experiment-card' },
          { text: 'Verification Checklist', link: '/files/verification-checklist' }
        ]
      }
    ],
    sidebar: [
      { text: 'ภาพรวมหลักสูตร', link: '/' },
      {
        text: 'Modules',
        collapsed: false,
        items: [
          { text: '1. Frame the Boring Task', link: '/exercises/module-01-frame-the-boring-task/' },
          { text: '2. Copilot as BA Assistant', link: '/exercises/module-02-copilot-as-ba-assistant/' },
          { text: '3. Evidence-Grounded Analysis', link: '/exercises/module-03-evidence-grounded-analysis/' },
          { text: '4. Requirements & Communication', link: '/exercises/module-04-requirements-and-communication/' },
          { text: '5. BA Work Experiment', link: '/exercises/module-05-ba-work-experiment/' }
        ]
      },
      {
        text: 'Practice files',
        collapsed: false,
        items: [
          { text: 'Synthetic Cross-BU Case Pack', link: '/files/synthetic-cross-bu-case-pack' },
          { text: 'BA Work Experiment Card', link: '/files/ba-work-experiment-card' },
          { text: 'Verification Checklist', link: '/files/verification-checklist' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'ในหน้านี้'
    },
    docFooter: {
      prev: 'บทก่อนหน้า',
      next: 'บทถัดไป'
    },
    lastUpdated: {
      text: 'อัปเดตล่าสุด',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      pattern: 'https://github.com/teerasej/mitr-phol-ai-day/edit/main/:path',
      text: 'แก้ไขหน้านี้บน GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/teerasej/mitr-phol-ai-day' }
    ],
    footer: {
      message: 'Public-safe learner materials · Synthetic scenarios only',
      copyright: 'Work smart with AI for Business Analyst'
    }
  }
})
