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
        light: 'https://cdn.discordapp.com/attachments/1196020542235476010/1392897564902424656/photo_2025-07-10_18-56-28.jpg?ex=68713472&is=686fe2f2&hm=f14c6e10e7b016d41401bf979a7e02e45c4ce54ea3b331ed460a80ab1ef5f45a&',
        dark: 'https://cdn.discordapp.com/attachments/1196020542235476010/1392897564902424656/photo_2025-07-10_18-56-28.jpg?ex=68713472&is=686fe2f2&hm=f14c6e10e7b016d41401bf979a7e02e45c4ce54ea3b331ed460a80ab1ef5f45a&',
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