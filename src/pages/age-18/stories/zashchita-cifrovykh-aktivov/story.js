export default {
  title: 'Сервер, бабки и хакеры',
  category: 'digital',
  budget: 25000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: РОЖДЕНИЕ БИЗНЕСА — ВЫБОР СТРАХОВКИ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🎮 Стартап на коленке',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/garage-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Народ, мы сделали это! Сервер по мотивам нашей любимой RPG запущен. Первые сто донатов уже на счету. Начинаем рубить бабки.'
        },
        {
          speaker: 'Лев',
          text: 'Я админку запилил — любо-дорого. Защита от читеров, резервное копирование раз в час. Чувствую себя Сноуденом, только с пивом.'
        },
        {
          speaker: 'Мария',
          text: 'Кстати, о защите. Вы в курсе, что в 2025 году каждый пятый геймер сталкивался с кражей аккаунта[reference:0]? А мы тут целый бизнес строим. У «Ингосстраха» есть полис киберстрахования для таких как мы — защита от DDoS, взломов, потери данных[reference:1].'
        },
        {
          speaker: 'Соня',
          text: 'Сколько стоит не прогореть при первой же атаке?'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Оформить киберстраховку (5000₽)',
          price: 5000,
          description: 'Спать спокойно',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Забить, мы и так умные',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ПЕРВЫЙ УДАР — DDoS АТАКА
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🔥 Сервер лёг',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/server-room-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Макс, у нас проблема. Сервер лежит, пинг 3000, игроки орут в Discord. Классическая DDoS-атака.'
        },
        {
          speaker: 'Максим',
          text: 'Сколько потеряем, если не поднимем за час?'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Отбить DDoS!',
        instruction: 'Быстро нажимай кнопку, чтобы восстановить сервер!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Лев',
            text: 'Фух! Отбились. Поставил фильтрацию трафика. Но это было близко.'
          },
          {
            speaker: 'Максим',
            text: 'А если бы не справились? Вот для этого и нужна страховка.'
          }
        ],
        fail: [
          {
            speaker: 'Лев',
            text: 'Всё. Сервер лежит вторые сутки. Игроки уходят к конкурентам.'
          },
          {
            speaker: 'Максим',
            text: 'Вот же ж... Надо было брать страховку.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ХАКЕРСКАЯ АТАКА И ШАНТАЖ
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '👾 Хакеры',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/hacker-screen-bg.jpg',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Народ, у нас полный трындец. База данных игроков слита в даркнет. Почты, пароли, даже номера кошельков для донатов.'
        },
        {
          speaker: 'Соня',
          text: 'А ещё мне в личку написал какой-то ушлёпок. Требует 200 тысяч рублей, иначе сольёт всю инфу публично и подставит нас под штрафы за утечку персональных данных. По новому закону штраф до 3% годовой выручки[reference:2].'
        }
      ],
      choices: [
        {
          id: 'callPolice',
          title: 'Звонить в поддержку Ингосстраха',
          price: 0,
          description: 'Воспользоваться страховкой',
          icon: 'police'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РАЗБОР ПОЛЁТОВ И СТРАХОВОЙ СЛУЧАЙ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '📞 Звонок в страховую',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/office-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [ // страховка была
          {
            speaker: 'Мария',
            text: 'Я связалась с «Ингосстрахом». Они подтвердили: взлом, шантаж и утечка данных — страховые случаи. Подключают юристов, технических специалистов, покроют расходы на восстановление и даже штрафы.'
          },
          {
            speaker: 'Максим',
            text: 'Блин, я аж вспотел. А ведь могли без штанов остаться.'
          }
        ],
        withoutProtection: [ // страховки не было
          {
            speaker: 'Мария',
            text: 'Без страховки мы никто. Юристы просят предоплату, сервера простаивают, игроки уходят. Мы теряем примерно 50 тысяч в день.'
          },
          {
            speaker: 'Максим',
            text: 'Отлично. Просто отлично. Кто-нибудь, дайте мне машину времени.'
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
    // СЦЕНА 5: ПРЕДЛОЖЕНИЕ ПЕРЕИГРАТЬ (ЕСЛИ БЕЗ СТРАХОВКИ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '💸 Бизнес под угрозой',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/broken-server-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Мы теряем игроков, деньги и репутацию. А ведь могли просто оформить страховку.'
        },
        {
          speaker: 'Соня',
          text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз, но уже с умом?'
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
      nextScene: 0 // возврат на сцену выбора страховки (индекс 0)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: ХЭППИ-ЭНД — БИЗНЕС СПАСЁН
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '🏆 Игра продолжается',
      bg: '/images/stories/18+/zashchita-cifrovykh-aktivov/success-party-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Максим',
            text: 'Ну что, народ, мы выжили. Сервер работает, игроки возвращаются, донаты капают. И всё благодаря тому, что вовремя оформили страховку.'
          },
          {
            speaker: 'Мария',
            text: '«Ингосстрах» реально выручил. Юристы отбили претензии, технари помогли восстановить данные. Мы даже вышли в плюс по итогам месяца.'
          },
          {
            speaker: 'Лев',
            text: 'Кстати, тот хакер, что нас шантажировал, теперь сам под следствием. Карма — она такая.'
          },
          {
            speaker: 'Соня',
            text: 'В следующий раз, когда будем запускать новый проект, первым делом — страховка. И вам советую.'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Максим',
            text: 'Это был самый дорогой урок в нашей жизни. Но мы его усвоили. Без страховки в цифровом бизнесе — никак.'
          },
          {
            speaker: 'Лев',
            text: 'Сервер восстановили, но сколько нервов и денег ушло... В следующий раз только с полисом.'
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
