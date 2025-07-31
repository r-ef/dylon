export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'serenity',
      description: 'serenity is your all-in-one solution for rapid code scaffolding and streamlined development. With a wide range of pre-built templates, this npm package simplifies the process of setting up boilerplate code for any project and offers single-command deployment.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.75,
      defaultTheme: 'light'
    },
    header: {
      title: 'serenity',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: 'https://files.catbox.moe/ej370n.jpg',
        dark: 'https://files.catbox.moe/ej370n.jpg',
      },
      nav: [],
      links: [{
        icon: 'lucide:twitter',
        to: 'https://x.com/tryserenity',
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
      credits: 'Copserenityght © 2024 serenity',
      colorMode: false,
      links: [{
        'icon': 'lucide:twitter',
        'to': 'https://x.com/tryserenity',
        'target': '_blank',
        'aria-label': 'serenity on X'
      }]
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Follow on X',
        icon: 'lucide:twitter',
        to: 'https://x.com/tryserenity',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});