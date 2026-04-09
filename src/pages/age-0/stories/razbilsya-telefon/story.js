export default {
  title: 'Первый смартфон',
  category: 'device',
  budget: 3000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: МАГАЗИН — ВЫБОР ЗАЩИТЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🏪 Магазин электроники',
      bg: '/images/stories/0+/razbilsya-telefon/shop-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/lev.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/elena.png', side: 'right' },
        { name: 'Сергей', img: '/images/characters/nikolay/nikolay.png', side: 'right' } // папа
      ],
      dialogues: [
        {
          speaker: 'Елена',
          text: 'Лев, помнишь, мы договаривались? Ты получил хорошие оценки, и мы обещали купить тебе телефон.'
        },
        {
          speaker: 'Сергей',
          text: 'Да, сынок, ты молодец. Мы с мамой решили, что пора.'
        },
        {
          speaker: 'Лев',
          text: 'Ура! Я уже смотрел в интернете! Хочу вот тот, с большой камерой!'
        },
        {
          speaker: 'Елена',
          text: 'Хорошо. У нас есть ещё 3 000 рублей. Их можно потратить на защиту телефона или аксессуары.'
        },
        {
          speaker: 'Лев',
          text: 'А что такое защита?'
        },
        {
          speaker: 'Сергей',
          text: 'Это как страховка. Если телефон упадёт и разобьётся — ремонт будет бесплатным.'
        },
        {
          speaker: 'Елена',
          text: 'Подумай хорошо. Ты можешь взять защиту, чехол или, например, наушники.'
        }
      ],
      choices: [
        {
          id: 'protection',
          title: 'Защита',
          price: 2500,
          description: 'Ремонт при поломке',
          icon: 'shield'
        },
        {
          id: 'case',
          title: 'Чехол',
          price: 1000,
          description: 'От царапин',
          icon: 'case'
        },
        {
          id: 'headphones',
          title: 'Наушники',
          price: 2000,
          description: 'Слушать музыку',
          icon: 'headphones'
        }
      ]
    },

    {
      id: 2,
      title: '🏫 Школа — Перемена',
      bg: '/images/stories/0+/razbilsya-telefon/school-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Ого! Лев, это тот самый новый телефон? Дай посмотреть!'
        },
        {
          speaker: 'Лев',
          text: 'Держи, только аккуратно, он совсем новый.'
        },
        {
          speaker: 'Соня',
          text: 'Конечно, я осторожно... Ой!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержи телефон!',
        instruction: 'Быстро нажимай кнопку!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Лев',
            text: 'Фух! Успел поймать! Соня, ты чего?'
          },
          {
            speaker: 'Соня',
            text: 'Извини, пожалуйста! Он такой скользкий...'
          }
        ],
        fail: [
          {
            speaker: 'Лев',
            text: 'Нееет! Экран разбился! 😢'
          },
          {
            speaker: 'Соня',
            text: 'Лева, прости! Я нечаянно! Я не хотела!'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ДОМА — РАЗГОВОР С МАМОЙ И ПАПОЙ
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '🏠 Дома',
      bg: '/images/stories/0+/razbilsya-telefon/broken-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' },
        { name: 'Сергей', img: '/images/characters/sergey/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndDropped: [
          {
            speaker: 'Лев',
            text: 'Мам, пап... Я уронил телефон. Экран разбился...'
          },
          {
            speaker: 'Елена',
            text: 'Ой... Но у нас же есть защита! Помнишь?'
          },
          {
            speaker: 'Сергей',
            text: 'Вот видишь, не зря мы её взяли. Сейчас всё решим.'
          },
          {
            speaker: 'Лев',
            text: 'И что теперь делать?'
          },
          {
            speaker: 'Елена',
            text: 'Отправим документы агенту — ремонт будет бесплатным!'
          }
        ],
        withProtectionAndCaught: [
          {
            speaker: 'Лев',
            text: 'Мам, пап, я сегодня чуть телефон не уронил!'
          },
          {
            speaker: 'Елена',
            text: 'Ой, слава богу! Видишь, зачем мы взяли защиту?'
          },
          {
            speaker: 'Сергей',
            text: 'Молодец, что поймал. А если бы не успел — телефон был бы цел благодаря страховке.'
          },
          {
            speaker: 'Лев',
            text: 'Да... Теперь я спокоен!'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Лев',
            text: 'Мам, пап... Я уронил телефон. Экран разбился...'
          },
          {
            speaker: 'Елена',
            text: 'Ох, Лев... Ремонт стоит 6 000 рублей.'
          },
          {
            speaker: 'Сергей',
            text: 'Жаль, что мы не взяли защиту. Теперь придётся копить.'
          },
          {
            speaker: 'Лев',
            text: 'Я понял... Нужно было послушать вас и взять защиту...'
          }
        ]
      },
      choices: {
        withProtectionAndDropped: [
          {
            id: 'sendDocs',
            title: 'Отправить документы',
            price: 0,
            description: 'Бесплатный ремонт',
            icon: 'document'
          }
        ],
        withProtectionAndCaught: [
          {
            id: 'glad',
            title: 'Я рад, что есть защита',
            price: 0,
            description: 'Спокойствие',
            icon: 'heart'
          }
        ],
        withoutProtection: [
          {
            id: 'save',
            title: 'Копить на ремонт',
            price: 0,
            description: '6 000 ₽',
            icon: 'piggy'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: АГЕНТ — ТОЛЬКО ЕСЛИ ЗАЩИТА + УПАЛ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '📞 Страховой агент',
      bg: '/images/stories/0+/razbilsya-telefon/agent-chat-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Агент', img: '/images/characters/mikhail/image.png', side: 'right' }
      ],
      available: 'withProtectionAndDropped',
      dialogues: [
        {
          speaker: 'Агент',
          text: 'Здравствуйте! Документы получил.'
        },
        {
          speaker: 'Лев',
          text: 'Здравствуйте! Ремонт точно будет бесплатным?'
        },
        {
          speaker: 'Агент',
          text: 'Да, ваша защита покрывает этот случай. Заявка одобрена!'
        },
        {
          speaker: 'Лев',
          text: 'Ура! Спасибо большое!'
        }
      ],
      choices: [
        {
          id: 'done',
          title: 'Забрать телефон',
          price: 0,
          description: 'После ремонта',
          icon: 'shield'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ФИНАЛ — УРОК
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '📖 Вывод',
      bg: '/images/stories/0+/razbilsya-telefon/bedroom-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' },
        { name: 'Сергей', img: '/images/characters/sergey/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndDropped: [
          {
            speaker: 'Лев',
            text: 'Теперь я понял: защита — это как щит!'
          },
          {
            speaker: 'Елена',
            text: 'Мы рады, что ты это усвоил.'
          },
          {
            speaker: 'Сергей',
            text: 'Платить немного сейчас, чтобы не платить много потом — хороший урок.'
          }
        ],
        withProtectionAndCaught: [
          {
            speaker: 'Лев',
            text: 'Защита нужна, даже если ты осторожен.'
          },
          {
            speaker: 'Елена',
            text: 'Верно. С ней спокойнее.'
          },
          {
            speaker: 'Сергей',
            text: 'Главное, что телефон цел, а опыт получен.'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Лев',
            text: 'Нужно было взять защиту...'
          },
          {
            speaker: 'Елена',
            text: 'Ничего, в следующий раз будешь умнее.'
          },
          {
            speaker: 'Сергей',
            text: 'Это ценный урок. Зато теперь ты точно запомнишь.'
          }
        ]
      },
      choices: [
        {
          id: 'learned',
          title: 'Я запомнил урок',
          price: 0,
          description: '',
          icon: 'eye'
        }
      ]
    }
  ],

  widgets: {
    chat: { available: true, icon: 'chat' },
    call: { available: true, icon: 'phone' }
  }
};