module.exports = [
  {
    text: 'Главная',
    link: '/ru/',
  },
  {
    text: 'Блокчейн',
    link: '/ru/blockchain/'
  },
  {
    text: 'Waves протокол',
    link: '/waves-protocol/'
  },
  {
    text: 'Для разработчиков',
    link: '/for-developers/'
  },
  {
    text: 'Waves приложения',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/api/cli.html'
          },
          {
            text: 'Node',
            link: '/api/node.html'
          },
        ]
      },
      {
        text: 'Contributing Guide',
        items: [
          {
            text: 'Design Concepts',
            link: '/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/faq/',
          },
          {
            text: 'Glossary',
            link: '/miscellaneous/glossary.html'
          },
        ]
      },
      {
        text: 'Miscellaneous',
        items: [
          {
            text: 'Migrate from 0.x',
            link: '/miscellaneous/migration-guide.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  },
  {
    text: 'Проекты сообщества',
    link: '/community-projects/'
  },
  {
    text: 'Поддержка',
    link: '/support/'
  },
]
