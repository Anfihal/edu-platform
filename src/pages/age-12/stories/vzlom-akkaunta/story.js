export default {
  title: 'Взлом и страховка',
  category: 'digital',
  budget: 2000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: ОБСУЖДЕНИЕ НОВОСТИ О ВЗЛОМАХ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '💻 Разговор в школе',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Слышал, у нас в параллели кому-то взломали страницу ВКонтакте? Говорят, за последний год взломов стало в два раза больше.'
        },
        {
          speaker: 'Максим',
          text: 'Да, страшно. Я слышал, что многие используют простые пароли типа "12345". Но мы же с тобой умнее?'
        }
      ],
      choices: [
        {
          id: 'learnMore',
          title: 'Узнать о защите',
          price: 0,
          description: 'Как обезопасить аккаунт',
          icon: 'shield'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР СТРАХОВКИ АККАУНТА
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Страховка от взлома',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Слушай, я тут читал, что теперь можно застраховать свой аккаунт. Полис покрывает восстановление после взлома и даже услуги психолога, если кто-то начнёт травить.'
        },
        {
          speaker: 'Соня',
          text: 'Ого! Это стоит всего 1000 рублей в год, а сумма покрытия — до 1 миллиона. Но стоит ли?'
        },
        {
          speaker: 'Максим',
          text: 'Четверть россиян уже теряли аккаунты. И половина из них — молодёжь. Я бы застраховался.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку (1000₽)',
          price: 1000,
          description: 'Защитить аккаунт',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Не покупать',
          price: 0,
          description: 'Надеяться на удачу',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ПОДОЗРИТЕЛЬНАЯ ССЫЛКА — МИНИ-ИГРА "РАСПОЗНАТЬ ФИШИНГ"
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '🎣 Фишинг!',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'О, смотри, ссылка в личку: "Ваш аккаунт заблокирован! Перейдите по ссылке для восстановления".'
        },
        {
          speaker: 'Соня',
          text: 'Стой! Это похоже на фишинг. Я слышала, так воруют пароли. Давай проверим!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Распознай фишинг!',
        instruction: 'Быстро нажимай кнопку, чтобы не дать перейти по ссылке!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Максим',
            text: 'Фух! Успели! Я чуть не кликнул. Ты меня спасла!'
          },
          {
            speaker: 'Соня',
            text: 'Главное — вовремя заметить. А ещё я подключила двухфакторную аутентификацию — так надёжнее.'
          }
        ],
        fail: [
          {
            speaker: 'Максим',
            text: 'Ой! Я перешёл по ссылке... И ввёл пароль. Аккаунт взломан!'
          },
          {
            speaker: 'Соня',
            text: 'Что же делать? Мой аккаунт тоже взломали — я когда-то дала тебе свой пароль...'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: ПОСЛЕДСТВИЯ ВЗЛОМА
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '💔 Последствия',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndHacked: [ // страховка есть, взлом произошёл
          {
            speaker: 'Максим',
            text: 'Аккаунт взломали... Но у нас же страховка!'
          },
          {
            speaker: 'Соня',
            text: 'Да! Я уже написала в поддержку, они сказали, что восстановят всё бесплатно.'
          }
        ],
        withProtectionAndSafe: [ // страховка есть, не взломали
          {
            speaker: 'Соня',
            text: 'Обошлось! Но я рада, что страховка есть. Мало ли что...'
          },
          {
            speaker: 'Максим',
            text: 'Согласен. Спокойствие дороже.'
          }
        ],
        withoutProtectionAndHacked: [ // страховки нет, взлом произошёл
          {
            speaker: 'Максим',
            text: 'Аккаунт взломали. Вся переписка удалена, а друзьям рассылают спам...'
          },
          {
            speaker: 'Соня',
            text: 'И восстановление стоит денег... Зачем мы не купили страховку?'
          }
        ],
        withoutProtectionAndSafe: [ // страховки нет, не взломали
          {
            speaker: 'Соня',
            text: 'Пронесло! Но я поняла, как легко всё потерять.'
          },
          {
            speaker: 'Максим',
            text: 'Давай больше не будем рисковать. В следующий раз — только со страховкой.'
          }
        ]
      },
      choices: [
        {
          id: 'next',
          title: 'Дальше',
          price: 0,
          description: '',
          icon: 'arrow'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ПРЕДЛОЖЕНИЕ ПЕРЕИГРАТЬ (ЕСЛИ БЕЗ СТРАХОВКИ И ВЗЛОМ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '😢 Горький урок',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      available: 'withoutProtectionAndHacked',
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Я чувствую себя глупо. Мы могли бы избежать этого.'
        },
        {
          speaker: 'Максим',
          text: 'Давай представим, что можно всё исправить. Попробуем ещё раз со страховкой?'
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
          id: 'finishSad',
          title: 'Принять урок',
          price: 0,
          description: 'Идти дальше',
          icon: 'eye'
        }
      ],
      nextScene: 1 // возврат на сцену выбора страховки (индекс 1)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: ФИНАЛ — ВЫВОДЫ О ЦИФРОВОЙ БЕЗОПАСНОСТИ
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '🔐 Урок усвоен',
      bg: '/images/stories/12+/vzlom-akkaunta/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Максим',
            text: 'Теперь я знаю: страховка аккаунта — это не роскошь, а необходимость.'
          },
          {
            speaker: 'Соня',
            text: 'И двухфакторка с надёжным паролем. Кстати, Максим, спасибо, что был рядом.'
          },
          {
            speaker: 'Максим',
            text: '(Краснеет) Может, вместе настроим защиту и на твоём аккаунте?'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Максим',
            text: 'Я запомню этот урок. Больше никаких простых паролей и переходов по подозрительным ссылкам.'
          },
          {
            speaker: 'Соня',
            text: 'И обязательно застрахуем аккаунты. Цифровая гигиена — это серьёзно.'
          }
        ]
      },
      choices: [
        {
          id: 'finish',
          title: 'Завершить историю',
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