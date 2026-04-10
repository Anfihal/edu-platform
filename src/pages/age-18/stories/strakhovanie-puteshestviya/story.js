export default {
  title: 'Таиланд: работа, пляж, полиция',
  category: 'travel',
  budget: 20000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: ВСЁ ЛЕТО ПАХАЛИ НА ОТПУСК
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '💼 Лето впахивания',
      bg: 'images/stories/18+/otpusk-mechty/cafe-work-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Три месяца пахоты в кафе, три месяца экономии на всём. Но завтра мы улетаем в Таиланд!'
        },
        {
          speaker: 'Лев',
          text: 'Я уже чувствую запах кокосового масла и дешёвого пива. Кстати, о деньгах — страховку кто-нибудь оформил?'
        },
        {
          speaker: 'Мария',
          text: 'Я глянула «Ингосстрах». Полис для путешественников стоит около 3000 рублей. Покрывает и медицину, и багаж, и даже если рейс задержат. Ну что, скидываемся?'
        },
        {
          speaker: 'Соня',
          text: '(Смеётся) А если Лев опять напьётся и потеряет паспорт — это тоже покроют?'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку (3000₽)',
          price: 3000,
          description: 'Спать спокойно',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Забить, и так дорого',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: В АЭРОПОРТУ — ЗАДЕРЖКА РЕЙСА И ПЕРВЫЙ ХАЙП
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '✈️ Задержка рейса',
      bg: 'images/stories/18+/otpusk-mechty/airport-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Рейс задерживают на 12 часов! И это только начало.'
        },
        {
          speaker: 'Лев',
          text: 'Офигеть. А я уже мысленно на пляже с коктейлем. Может, в баре посидим?'
        },
        {
          speaker: 'Максим',
          text: 'Спокойно, у нас страховка. В «Ингосстрахе» за задержку рейса положена компенсация — до 15000 рублей. Так что бар — за их счёт.'
        }
      ],
      choices: [
        {
          id: 'bar',
          title: 'Идти в бар',
          price: 0,
          description: 'Отметить начало отпуска',
          icon: 'beer'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ПРИЛЁТ В ТАЙ — ПОТЕРЯ БАГАЖА И МИНИ-ИГРА
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '🧳 Где мой чемодан?',
      bg: '/images/stories/18+/otpusk-mechty/thailand-airport-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Слушайте, моего чемодана на ленте нет. Там все мои купальники и... ну, вы поняли.'
        },
        {
          speaker: 'Лев',
          text: 'А мой чемодан приехал, но он вскрыт! Пропала бутылка вискаря, которую я в дьютике купил. Вот гады.'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Найти багаж!',
        instruction: 'Быстро нажимай кнопку, чтобы найти вещи!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Мария',
            text: 'Так, я нашла твой чемодан, Сонь. Он у стойки lost & found. А Лёвин виски, похоже, уплыл навсегда.'
          },
          {
            speaker: 'Максим',
            text: 'Зато по страховке мы получим компенсацию за украденное из багажа. «Ингосстрах» покрывает до 15000 рублей.'
          }
        ],
        fail: [
          {
            speaker: 'Мария',
            text: 'Багаж не нашли. Придётся писать заявление.'
          },
          {
            speaker: 'Максим',
            text: 'Ничего, страховка покроет расходы на вещи первой необходимости и компенсацию за утерю.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: ПЬЯНЫЙ ДЕБОШ И ЗНАКОМСТВО С ПОЛИЦИЕЙ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '🍺 Вечеринка по-тайски',
      bg: '/images/stories/18+/otpusk-mechty/beach-party-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Лев',
          text: '(Пьяный) Я... я хочу слону на хобот залезть! Где тут слоны?!'
        },
        {
          speaker: 'Максим',
          text: 'Лёва, угомонись. Ты уже орал на бармена и пытался украсть кокос. Полиция едет.'
        }
      ],
      choices: [
        {
          id: 'police',
          title: 'Встречать полицию',
          price: 0,
          description: '',
          icon: 'police'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: СТРАХОВКА ВЫРУЧАЕТ — ЮРИДИЧЕСКАЯ ПОМОЩЬ
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '🚔 В участке',
      bg: '/images/stories/18+/otpusk-mechty/police-thai-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [ // страховка была
          {
            speaker: 'Мария',
            text: 'Я позвонила в сервисный центр «Ингосстраха». Они предоставили юриста и переводчика. Льву грозит только штраф, и тот покроет страховка.'
          },
          {
            speaker: 'Лев',
            text: '(Протрезвев) Блин, ребят, простите. Я идиот. Спасибо, что у нас есть страховка.'
          }
        ],
        withoutProtection: [ // страховки не было
          {
            speaker: 'Мария',
            text: 'Без страховки нам пришлось самим искать адвоката. Штраф и услуги юриста съели почти все отпускные.'
          },
          {
            speaker: 'Лев',
            text: 'Я всё отработаю, клянусь. И больше ни капли.'
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
    // СЦЕНА 6: ПРЕДЛОЖЕНИЕ ПЕРЕИГРАТЬ (ЕСЛИ БЕЗ СТРАХОВКИ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '💸 Дорогой отпуск',
      bg: '/images/stories/18+/otpusk-mechty/hotel-room-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Отпуск мечты превратился в финансовую яму. А ведь могли просто купить страховку.'
        },
        {
          speaker: 'Максим',
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
    // СЦЕНА 7: ФИНАЛ — ВОТ ЭТО ПРИКЛЮЧЕНИЕ!
    // ═══════════════════════════════════════════════════════════
    {
      id: 7,
      title: '🍹 Отпуск удался',
      bg: '/images/stories/18+/otpusk-mechty/beach-sunset-bg.jpg',
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
            text: 'Ну что, чуваки, это было легендарно. Задержка, потеря багажа, полиция... Но мы выжили и даже не разорились.'
          },
          {
            speaker: 'Мария',
            text: 'Всё благодаря страховке «Ингосстраха». Серьёзно, лучшая инвестиция в отпуск.'
          },
          {
            speaker: 'Лев',
            text: '(С бокалом смузи) Я завязал с алкоголем. На месяц. Наверное.'
          },
          {
            speaker: 'Соня',
            text: 'А я теперь всегда буду оформлять страховку. И вам советую. Ну что, по последнему коктейлю?'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Максим',
            text: 'Это был самый дорогой отпуск в моей жизни. Но зато мы поняли, что на страховке экономить нельзя.'
          },
          {
            speaker: 'Соня',
            text: 'В следующий раз — только с полисом. И Лёву к психологу.'
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
