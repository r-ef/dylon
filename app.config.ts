export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'yri',
      description: 'yri is your all-in-one solution for rapid code scaffolding and streamlined development. With a wide range of pre-built templates, this npm package simplifies the process of setting up boilerplate code for any project and offers single-command deployment.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.75,
      defaultTheme: 'light'
    },
    header: {
      title: 'yri',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: 'https://files.catbox.moe/wxa79y.jpg',
        dark: 'https://files.catbox.moe/wxa79y.jpg',
      },
      nav: [],
      links: [{
        icon: 'lucide:twitter',
        to: 'https://x.com/yri?s=21&t=G30nY2JbqymN-LTjnlxlug',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024 yri',
      colorMode: false,
      links: [{
        'icon': 'lucide:twitter',
        'to': 'https://x.com/yri?s=21&t=G30nY2JbqymN-LTjnlxlug',
        'target': '_blank',
        'aria-label': 'yri on X'
      }]
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Follow on X',
        icon: 'lucide:twitter',
        to: 'https://x.com/yri?s=21&t=G30nY2JbqymN-LTjnlxlug',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});