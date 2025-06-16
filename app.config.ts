export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Dylon',
      description: 'Dylon is your all-in-one solution for rapid code scaffolding and streamlined development. With a wide range of pre-built templates, this npm package simplifies the process of setting up boilerplate code for any project and offers single-command deployment.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.75,
      defaultTheme: 'light'
    },
    header: {
      title: 'Dylon',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: 'https://cdn.discordapp.com/attachments/1378026994159325336/1384281255050219700/1mUpn82j_400x400.png?ex=6851dbe1&is=68508a61&hm=8deacad9ac120ef873104557e4159aa4f128c8473ddbdf8efe28029176a26d2b&',
        dark: 'https://cdn.discordapp.com/attachments/1378026994159325336/1384281255050219700/1mUpn82j_400x400.png?ex=6851dbe1&is=68508a61&hm=8deacad9ac120ef873104557e4159aa4f128c8473ddbdf8efe28029176a26d2b&',
      },
      nav: [],
      links: [{
        icon: 'lucide:twitter',
        to: 'https://x.com/dylon?s=21&t=G30nY2JbqymN-LTjnlxlug',
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
      credits: 'Copyright © 2024 Dylon',
      colorMode: false,
      links: [{
        'icon': 'lucide:twitter',
        'to': 'https://x.com/dylon?s=21&t=G30nY2JbqymN-LTjnlxlug',
        'target': '_blank',
        'aria-label': 'Dylon on X'
      }]
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Follow on X',
        icon: 'lucide:twitter',
        to: 'https://x.com/dylon?s=21&t=G30nY2JbqymN-LTjnlxlug',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});