export default {
  title: 'Робот и пожар',
  category: 'toys',
  budget: 2000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: МАМА ПРЕДЛАГАЕТ ЗАСТРАХОВАТЬ РОБОТА
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🤖 Новая игрушка',
      bg: 'images/stories/0+/robot-insurance/room-bg.png',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Мама, смотри! Мне подарили робота! Он умеет ходить и говорить!'
        },
        {
          speaker: 'Елена',
          text: 'Какой замечательный робот! Давай подумаем о страховке.'
        },
        {
          speaker: 'Лев',
          text: 'А что такое страховка?'
        },
        {
          speaker: 'Елена',
          text: 'Мы заплатим немного денег. Если с роботом случится пожар или другая беда, страховая компания даст нам деньги на нового.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку',
          price: 1500,
          description: 'Защита от пожара',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Не покупать',
          price: 0,
          description: 'Рисковать',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ПОЖАР — МИНИ-ИГРА QTE
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🔥 Пожар!',
      bg: 'images/stories/0+/robot-insurance/fire-bg.png',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Ой! Я нечаянно уронила свечку! Робот загорелся!'
        },
        {
          speaker: 'Лев',
          text: 'Скорее! Нужно потушить огонь!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Туши пожар!',
        instruction: 'Быстро нажимай кнопку, чтобы потушить огонь!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Лев',
            text: 'Фух! Успели потушить! Робот почти не пострадал.'
          },
          {
            speaker: 'Соня',
            text: 'Прости, Лев! Я больше не буду играть со свечками!'
          }
        ],
        fail: [
          {
            speaker: 'Лев',
            text: 'Не успели... Робот сгорел совсем.'
          },
          {
            speaker: 'Соня',
            text: 'Лева, прости! Я не хотела!'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: СО СТРАХОВКОЙ — ПОЛУЧЕНИЕ ВЫПЛАТЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '💰 Страховка помогла',
      bg: 'images/stories/0+/robot-insurance/shop-bg.png',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' }
      ],
      available: 'withProtection',
      dialogues: [
        {
          speaker: 'Елена',
          text: 'Мы купили страховку. Теперь страховая компания возместит ущерб.'
        },
        {
          speaker: 'Лев',
          text: 'Ура! Я смогу купить нового робота!'
        },
        {
          speaker: 'Елена',
          text: 'Да, страховка защищает от пожара. Но если игрушка просто упадёт и сломается, страховка не поможет.'
        }
      ],
      choices: [
        {
          id: 'happy',
          title: 'Спасибо за науку!',
          price: 0,
          description: 'Я запомню',
          icon: 'heart'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: БЕЗ СТРАХОВКИ — ПЕЧАЛЬ И ПРЕДЛОЖЕНИЕ ВЕРНУТЬСЯ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '😢 Без страховки',
      bg: 'images/stories/0+/robot-insurance/room-bg.png',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Я не купил страховку... И робота больше нет.'
        },
        {
          speaker: 'Елена',
          text: 'Это грустно. Но ты можешь попробовать ещё раз — купить страховку и спасти игрушку!'
        }
      ],
      choices: [
        {
          id: 'retry',
          title: 'Попробовать со страховкой',
          price: 0,
          description: 'Вернуться к выбору',
          icon: 'restart'
        },
        {
          id: 'finishAnyway',
          title: 'Закончить историю',
          price: 0,
          description: 'Я всё понял',
          icon: 'eye'
        }
      ],
      // при выборе retry возвращаемся на сцену 1 (индекс 0)
      nextScene: 0
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ФИНАЛ — ВЫВОД
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '📖 Урок',
      bg: 'images/stories/0+/robot-insurance/room-bg.png',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' },
        { name: 'Мурка', img: '/images/characters/murka/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Лев',
            text: 'Я понял! Страховка помогает, если случится пожар!'
          },
          {
            speaker: 'Елена',
            text: 'Правильно. Страховка защищает от больших бед.'
          },
          {
            speaker: 'Мурка',
            text: 'Мяу! (Соглашается)'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Лев',
            text: 'Жаль, что я не купил страховку...'
          },
          {
            speaker: 'Елена',
            text: 'Ничего, в следующий раз ты точно выберешь страховку!'
          }
        ]
      },
      choices: [
        {
          id: 'done',
          title: 'Завершить',
          price: 0,
          description: '',
          icon: 'trophy'
        }
      ]
    }
  ],

  widgets: {
    chat: { available: false },
    call: { available: false }
  }
};