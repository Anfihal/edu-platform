export default {
  title: 'Концерт мечты',
  category: 'event',
  budget: 4000,

  scenes: [
    {
      id: 1,
      title: '🎤 Планы на уикенд',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Анна', text: 'Ребята, вы видели? Zivert едет в Москву с большим концертом! Билеты уже в продаже.' },
        { speaker: 'Дмитрий', text: '(Смотрит на Анну) Я бы с тобой хоть на край света. Давайте возьмём билеты и рванём все вместе?' },
        { speaker: 'Виктория', text: 'Я только за! Максим, ты с нами?' },
        { speaker: 'Максим', text: 'Конечно. Только давайте сразу решим вопрос со страховкой. Билеты на поезд, гостиница — всё это денег стоит.' }
      ],
      choices: [
        { id: 'discuss', title: 'Обсудить страховку', price: 0, description: '', icon: 'shield' }
      ]
    },
    {
      id: 2,
      title: '🛡️ Страховка от невыезда',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Анна', text: 'Смотри, у «Ингосстраха» есть страховка от невыезда. Она позволяет вернуть деньги за билеты, отель и транспорт, если поездка сорвётся по уважительной причине.' },
        { speaker: 'Дмитрий', text: 'И что считается уважительной причиной?' },
        { speaker: 'Анна', text: 'Болезнь, травма, отказ в визе, смерть близкого родственника, даже вызов в суд. Но если просто передумаешь — выплаты не будет.' },
        { speaker: 'Дмитрий', text: 'А если концерт отменят?' },
        { speaker: 'Анна', text: 'Страховка от невыезда не покрывает отмену самого мероприятия, только наши расходы на дорогу и проживание. Но «Ингосстрах» страхует организаторов от отмены — тогда они возвращают деньги за билеты.' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Купить страховку (2000₽)', price: 2000, description: 'Защитить поездку', icon: 'shield' },
        { id: 'noInsurance', title: 'Сэкономить', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '⚠️ Плохие новости',
      bg: 'images/stories/16+/otmena-kontserta/station-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Анна', text: 'Дмитрий, смотри! Новость: «Концерт Zivert в Москве отменён из-за болезни солистки».' },
        { speaker: 'Дмитрий', text: 'Да ладно! Мы же уже всё оплатили!' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержи надежду!',
        instruction: 'Быстро нажимай кнопку, чтобы сохранить планы!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Анна', text: 'Организаторы объявили: билеты можно вернуть! У них была страховка от «Ингосстраха» на случай отмены.' },
          { speaker: 'Дмитрий', text: 'Повезло. А что с поездом и гостиницей?' }
        ],
        fail: [
          { speaker: 'Анна', text: 'Организаторы молчат... Билеты, похоже, не вернут. Да и с поездом что-то непонятно.' },
          { speaker: 'Дмитрий', text: 'Жесть. А что Виктория с Максимом?' }
        ]
      }
    },
    {
      id: 4,
      title: '💸 Финансовый итог',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCancelled: [
          { speaker: 'Анна', text: 'Мы вернули деньги за поезд и гостиницу по страховке от невыезда. А организаторы вернули деньги за билеты — у них была страховка от «Ингосстраха».' },
          { speaker: 'Виктория', text: 'Везёт... Мы с Максимом без страховки остались без денег.' },
          { speaker: 'Дмитрий', text: '(Обнимает Анну) Ты у меня самая умная. Спасибо, что настояла.' }
        ],
        withProtectionAndSuccess: [
          { speaker: 'Анна', text: 'Концерт состоится! Но я рада, что мы оформили страховку — спокойнее.' },
          { speaker: 'Виктория', text: 'Повезло, что ничего не отменилось. А мы с Максимом рискнули...' },
          { speaker: 'Дмитрий', text: '(Смотрит на Анну) С тобой я готов на любой риск. Но лучше подстраховаться.' }
        ],
        withoutProtectionAndCancelled: [
          { speaker: 'Виктория', text: 'Мы потеряли все деньги за поезд и гостиницу. А организаторы ещё и билеты не возвращают...' },
          { speaker: 'Максим', text: 'Надо было брать страховку. Глупо вышло.' },
          { speaker: 'Анна', text: '(Дмитрию) Хорошо, что мы не пожадничали.' }
        ],
        withoutProtectionAndSuccess: [
          { speaker: 'Виктория', text: 'Пронесло! Но я вся на нервах.' },
          { speaker: 'Максим', text: 'В следующий раз — только со страховкой. Хватит этих американских горок.' }
        ]
      },
      choices: [
        { id: 'next', title: 'Дальше', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 5,
      title: '😢 Горький урок',
      bg: 'images/stories/16+/otmena-kontserta/cafe-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      available: 'withoutProtectionAndCancelled',
      dialogues: [
        { speaker: 'Виктория', text: 'Как глупо. Мы потеряли почти всё.' },
        { speaker: 'Максим', text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз со страховкой?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 1
    },
    {
      id: 6,
      title: '❤️ Урок усвоен',
      bg: 'images/stories/16+/otmena-kontserta/sunset-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Дмитрий', text: 'Знаешь, Ань, страховка — это круто. Но самое ценное, что у меня есть — это ты.' },
          { speaker: 'Анна', text: '(Краснеет) И ты у меня. А ещё я поняла, что планировать поездки с умом — это не занудство, а забота.' },
          { speaker: 'Дмитрий', text: '(Наклоняется и целует) Тогда в следующий раз берём страховку и едем куда угодно.' }
        ],
        withoutProtection: [
          { speaker: 'Дмитрий', text: 'Я усвоил урок. Никакой экономии на страховке. Лучше заплатить немного сейчас, чем потерять всё.' },
          { speaker: 'Анна', text: 'Согласна. Но мы справились вместе, и это главное. (Целует его в щёку)' }
        ]
      },
      choices: [
        { id: 'finish', title: 'Завершить историю', price: 0, description: '', icon: 'trophy' }
      ]
    }
  ],

  widgets: {
    chat: { available: false },
    call: { available: false }
  }
};