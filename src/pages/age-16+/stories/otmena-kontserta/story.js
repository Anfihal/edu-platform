export default {
  title: 'Концерт мечты',
  category: 'event',
  budget: 4000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: КОМПАНИЯ ОБСУЖДАЕТ ПОЕЗДКУ НА КОНЦЕРТ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🎤 Планы на уикенд',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Ребята, вы видели? Zivert едет в Москву с большим концертом! Билеты уже в продаже.'
        },
        {
          speaker: 'Максим',
          text: '(Смотрит на Марию) Я бы с тобой хоть на край света. Давайте возьмём билеты и рванём все вместе?'
        },
        {
          speaker: 'Соня',
          text: 'Я только за! Лев, ты с нами?'
        },
        {
          speaker: 'Лев',
          text: 'Конечно. Только давайте сразу решим вопрос со страховкой. Билеты на поезд, гостиница — всё это денег стоит.'
        }
      ],
      choices: [
        {
          id: 'discuss',
          title: 'Обсудить страховку',
          price: 0,
          description: '',
          icon: 'shield'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР СТРАХОВКИ ОТ НЕВЫЕЗДА
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Страховка от невыезда',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Смотри, у «Ингосстраха» есть страховка от невыезда. Она позволяет вернуть деньги за билеты, отель и транспорт, если поездка сорвётся по уважительной причине.[reference:0]'
        },
        {
          speaker: 'Максим',
          text: 'И что считается уважительной причиной?'
        },
        {
          speaker: 'Мария',
          text: 'Болезнь, травма, отказ в визе, смерть близкого родственника, даже вызов в суд.[reference:1] Но если просто передумаешь — выплаты не будет.[reference:2]'
        },
        {
          speaker: 'Максим',
          text: 'А если концерт отменят?'
        },
        {
          speaker: 'Мария',
          text: 'Страховка от невыезда не покрывает отмену самого мероприятия, только наши расходы на дорогу и проживание. Но «Ингосстрах» страхует организаторов от отмены — тогда они возвращают деньги за билеты.[reference:3]'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку (2000₽)',
          price: 2000,
          description: 'Защитить поездку',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Сэкономить',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: МИНИ-ИГРА — УДЕРЖАТЬ ПЛАНЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '⚠️ Плохие новости',
      bg: 'images/stories/16+/otmena-kontserta/station-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Максим, смотри! Новость: «Концерт Zivert в Москве отменён из-за болезни солистки».'
        },
        {
          speaker: 'Максим',
          text: 'Да ладно! Мы же уже всё оплатили!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержи надежду!',
        instruction: 'Быстро нажимай кнопку, чтобы сохранить планы!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Мария',
            text: 'Организаторы объявили: билеты можно вернуть! У них была страховка от «Ингосстраха» на случай отмены.[reference:4]'
          },
          {
            speaker: 'Максим',
            text: 'Повезло. А что с поездом и гостиницей?'
          }
        ],
        fail: [
          {
            speaker: 'Мария',
            text: 'Организаторы молчат... Билеты, похоже, не вернут. Да и с поездом что-то непонятно.'
          },
          {
            speaker: 'Максим',
            text: 'Жесть. А что Соня с Львом?'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РАЗВЯЗКА — КТО БЫЛ ПРАВ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '💸 Финансовый итог',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCancelled: [ // страховка есть, поездка сорвалась
          {
            speaker: 'Мария',
            text: 'Мы вернули деньги за поезд и гостиницу по страховке от невыезда. А организаторы вернули деньги за билеты — у них была страховка от «Ингосстраха».'
          },
          {
            speaker: 'Соня',
            text: 'Везёт... Мы с Львом без страховки остались без денег.'
          },
          {
            speaker: 'Максим',
            text: '(Обнимает Марию) Ты у меня самая умная. Спасибо, что настояла.'
          }
        ],
        withProtectionAndSuccess: [ // страховка есть, концерт не отменён
          {
            speaker: 'Мария',
            text: 'Концерт состоится! Но я рада, что мы оформили страховку — спокойнее.'
          },
          {
            speaker: 'Соня',
            text: 'Повезло, что ничего не отменилось. А мы с Львом рискнули...'
          },
          {
            speaker: 'Максим',
            text: '(Смотрит на Марию) С тобой я готов на любой риск. Но лучше подстраховаться.'
          }
        ],
        withoutProtectionAndCancelled: [ // страховки нет, поездка сорвалась
          {
            speaker: 'Соня',
            text: 'Мы потеряли все деньги за поезд и гостиницу. А организаторы ещё и билеты не возвращают...'
          },
          {
            speaker: 'Лев',
            text: 'Надо было брать страховку. Глупо вышло.'
          },
          {
            speaker: 'Мария',
            text: '(Максиму) Хорошо, что мы не пожадничали.'
          }
        ],
        withoutProtectionAndSuccess: [ // страховки нет, концерт не отменён
          {
            speaker: 'Соня',
            text: 'Пронесло! Но я вся на нервах.'
          },
          {
            speaker: 'Лев',
            text: 'В следующий раз — только со страховкой. Хватит этих американских горок.'
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
    // СЦЕНА 5: ПРЕДЛОЖЕНИЕ ПЕРЕИГРАТЬ (ЕСЛИ БЕЗ СТРАХОВКИ И ПОЕЗДКА СОРВАЛАСЬ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '😢 Горький урок',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      available: 'withoutProtectionAndCancelled',
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Как глупо. Мы потеряли почти всё.'
        },
        {
          speaker: 'Лев',
          text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз со страховкой?'
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
    // СЦЕНА 6: ФИНАЛ — РОМАНТИКА И ВЫВОДЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '❤️ Урок усвоен',
      bg: 'images/stories/16+/otmena-kontserta/sunset-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Максим',
            text: 'Знаешь, Маш, страховка — это круто. Но самое ценное, что у меня есть — это ты.'
          },
          {
            speaker: 'Мария',
            text: '(Краснеет) И ты у меня. А ещё я поняла, что планировать поездки с умом — это не занудство, а забота.'
          },
          {
            speaker: 'Максим',
            text: '(Наклоняется и целует) Тогда в следующий раз берём страховку и едем куда угодно.'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Максим',
            text: 'Я усвоил урок. Никакой экономии на страховке. Лучше заплатить немного сейчас, чем потерять всё.'
          },
          {
            speaker: 'Мария',
            text: 'Согласна. Но мы справились вместе, и это главное. (Целует его в щёку)'
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
