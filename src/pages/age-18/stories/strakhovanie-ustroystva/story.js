export default {
  title: 'Походная техника',
  category: 'device',
  budget: 25000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: СБОРЫ В ПОХОД — ВЫБОР СТРАХОВКИ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🏕️ Сборы',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/room-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Так, народ, завтра в поход на три дня. Палатки, еда, вода — всё собрали?'
        },
        {
          speaker: 'Лев',
          text: 'Я ещё ноутбук возьму. Вечером фильмы смотреть будем, а на привале работать немного. У меня там движуха по проекту.'
        },
        {
          speaker: 'Мария',
          text: 'Лёва, ты с дуба рухнул? В поход с ноутом? Уронишь ещё где-нибудь в реку или разобьёшь.'
        },
        {
          speaker: 'Соня',
          text: 'Кстати, о рисках. Я тут глянула — у «Ингосстраха» есть полис «Мобильный». Страхует смартфоны, планшеты, ноутбуки от падений, краж, залития. Даже если сам разобьёшь — выплатят. Стоит около 10% от стоимости устройства.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Оформить страховку',
          price: 3500,
          description: 'Защитить технику',
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
    // СЦЕНА 2: В ПОХОДЕ — ПЕРВЫЙ ДЕНЬ
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🌲 В лесу',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/forest-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Красота! Воздух, сосны, тишина...'
        },
        {
          speaker: 'Лев',
          text: 'И ни одного розетки. Надеюсь, моего пауэрбанка хватит.'
        },
        {
          speaker: 'Максим',
          text: 'Ладно, давайте ставить лагерь. Место отличное.'
        },
        {
          speaker: 'Соня',
          text: 'Только вы с техникой поаккуратнее. Помните, у кого страховка, а кто — жадина-говядина.'
        }
      ],
      choices: [
        {
          id: 'camp',
          title: 'Разбить лагерь',
          price: 0,
          description: '',
          icon: 'camp'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ВЕЧЕР У КОСТРА — ПАДЕНИЕ НОУТБУКА
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '🔥 Вечер у костра',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/campfire-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Так, сейчас кино посмотрим. У меня тут "Джентльмены" закачаны. Классика.'
        },
        {
          speaker: 'Максим',
          text: 'Только не урони в костёр, гений.'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержать ноутбук!',
        instruction: 'Быстро нажимай кнопку, чтобы не уронить!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Лев',
            text: 'Фух! Удержал! Чуть не поседел.'
          },
          {
            speaker: 'Максим',
            text: 'Видишь, надо было страховку брать. Если бы упал — был бы ноут без экрана.'
          }
        ],
        fail: [
          {
            speaker: 'Лев',
            text: 'БЛ...! Экран вдребезги!'
          },
          {
            speaker: 'Максим',
            text: 'Ну вот. А я предупреждал. Теперь либо страховка, либо ты без ноута.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: КРАЖА СМАРТФОНА — МИНИ-ИГРА "ПОГОНЯ"
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '👀 Кража',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/forest-night-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Девочки, вы мой телефон не видели? Я его на бревне оставила, пока за водой ходила.'
        },
        {
          speaker: 'Мария',
          text: 'Смотри! Там кто-то убегает! Это же тот турист из соседнего лагеря!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Догнать вора!',
        instruction: 'Быстро нажимай кнопку, чтобы догнать!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Максим',
            text: 'Поймали! Вот твой телефон, Сонь. А товарища сейчас полиции сдадим.'
          },
          {
            speaker: 'Соня',
            text: 'Спасибо! Я уж думала, прощайся с новым айфоном.'
          }
        ],
        fail: [
          {
            speaker: 'Максим',
            text: 'Убежал, гад. В темноте не догнать.'
          },
          {
            speaker: 'Соня',
            text: 'Вот чёрт. Телефон новый, жалко.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: РАЗБОР ПОЛЁТОВ И СТРАХОВКА
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '📞 Звонок в страховую',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/tent-bg.jpg',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [ // страховка была
          {
            speaker: 'Мария',
            text: 'Так, я позвонила в «Ингосстрах». Они сказали, что падение ноутбука и кража телефона — страховые случаи. Надо будет приложить фото и заявление в полицию по краже. Выплатят по чеку, если не прошло года.'
          },
          {
            speaker: 'Максим',
            text: 'Ну хоть что-то. Лёва, Соня, с вас магарыч. Мы из-за вас чуть без техники не остались.'
          },
          {
            speaker: 'Лев',
            text: 'Ладно-ладно, проставляюсь. И страховку теперь всегда буду оформлять.'
          }
        ],
        withoutProtection: [ // страховки не было
          {
            speaker: 'Мария',
            text: 'Без страховки — сами виноваты. Ремонт ноутбука тысяч 20 встанет, и телефон новый покупать.'
          },
          {
            speaker: 'Максим',
            text: 'Жёстко. В следующий раз будете умнее. А пока — гуляем за свой счёт.'
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
      title: '💸 Дорогой поход',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/campfire-bg.jpg',
      characters: [
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Ну что, поход мечты превратился в финансовую катастрофу. А ведь могли просто страховку оформить.'
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
    // СЦЕНА 7: ФИНАЛ — ПОХОД УДАЛСЯ!
    // ═══════════════════════════════════════════════════════════
    {
      id: 7,
      title: '🏆 Отдых удался',
      bg: '/images/stories/18+/pohod-s-tekhnikoy/lake-bg.jpg',
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
            text: 'Ну что, народ, приключения закончились, техника цела, нервы — не очень. Но зато мы теперь знаем: страховка — реально полезная штука.'
          },
          {
            speaker: 'Мария',
            text: '«Ингосстрах» не подвёл. Всё выплатили, как обещали. Даже фотоосмотр не потребовался, когда чек есть.'
          },
          {
            speaker: 'Лев',
            text: 'Ладно, в следующем походе беру только защищённый ноут и страховку. И никаких фильмов у костра.'
          },
          {
            speaker: 'Соня',
            text: 'А я теперь телефон из рук не выпускаю. И вам советую.'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Максим',
            text: 'Ну что, это был самый дорогой поход в нашей жизни. Но зато мы поняли, что на страховке экономить нельзя.'
          },
          {
            speaker: 'Соня',
            text: 'В следующий раз — только с полисом. И технику в палатке оставлять под замком.'
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