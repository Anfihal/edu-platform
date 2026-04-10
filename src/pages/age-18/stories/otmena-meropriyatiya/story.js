export default {
  title: 'Посвящение отменяется',
  category: 'event',
  budget: 5000,

  scenes: [
    {
      id: 1,
      title: '🎓 Посвят',
      bg: 'images/stories/18+/otmena-posvyata/campus-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Максим', text: 'Вик, через неделю посвящение в студенты. Я забронировал нам домик за городом, где всё будет проходить. Ты, я, две ночи...' },
        { speaker: 'Виктория', text: '(Улыбается и прижимается к нему) Звучит как план. Только давай всё оформим по-взрослому. Я хочу чувствовать себя в безопасности.' },
        { speaker: 'Максим', text: 'Ты про страховку? Смотрю, ты у меня уже профессионал в этом. Что предлагаешь?' },
        { speaker: 'Виктория', text: '«Ингосстрах» для путешественников. Она покроет отмену поездки, если что-то случится. Мы ведь уже не дети — нужно думать о таких вещах.' }
      ],
      choices: [
        { id: 'discuss', title: 'Обсудить детали', price: 0, description: '', icon: 'shield' }
      ]
    },
    {
      id: 2,
      title: '🛡️ Взрослое решение',
      bg: 'images/stories/18+/otmena-posvyata/cafe-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Максим', text: 'Смотри, полис от невыезда в «Ингосстрахе» стоит 2500 рублей. Если посвящение отменят из-за погоды или карантина, нам вернут деньги за домик и трансфер.' },
        { speaker: 'Виктория', text: 'Отлично. А ещё у них есть опция «Страхование багажа». Если наш «багаж» сломается по дороге... (смеётся)' },
        { speaker: 'Максим', text: '(Смеётся) Ты про меня? Ладно, уговорила. Но решать нам вместе. Что скажешь?' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Купить страховку (2500₽)', price: 2500, description: 'Защитить уикенд', icon: 'shield' },
        { id: 'noInsurance', title: 'Отказаться', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '⚠️ Форс-мажор',
      bg: 'images/stories/18+/otmena-posvyata/phone-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Виктория', text: 'Макс, смотри! СМС от организаторов: «Посвящение отменяется из-за штормового предупреждения. Деньги за проживание не возвращаются».' },
        { speaker: 'Максим', text: 'Чёрт! Мы же уже всё оплатили. Это пятьдесят тысяч!' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Сохранить нервы!',
        instruction: 'Быстро нажимай кнопку, чтобы не запаниковать!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Виктория', text: 'Спокойно. У нас есть страховка. Я звоню в «Ингосстрах».' },
          { speaker: 'Максим', text: 'Ты как всегда права. Давай действовать.' }
        ],
        fail: [
          { speaker: 'Максим', text: 'Я сейчас взорвусь! Почему всё так?' },
          { speaker: 'Виктория', text: '(Обнимает его) Тшш... У нас же страховка. Всё будет хорошо.' }
        ]
      }
    },
    {
      id: 4,
      title: '📞 Звонок в страховую',
      bg: 'images/stories/18+/otmena-posvyata/living-room-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Виктория', text: 'В «Ингосстрахе» сказали, что штормовое предупреждение — это страховой случай. Деньги за домик вернут в течение десяти дней.' },
          { speaker: 'Максим', text: 'Отлично! Значит, мы ничего не потеряли. Кроме самого посвящения...' },
          { speaker: 'Виктория', text: '(Подходит ближе, кладёт руки ему на плечи) А кто сказал, что мы не можем устроить своё собственное посвящение? Мы одни в квартире...' }
        ],
        withoutProtection: [
          { speaker: 'Максим', text: 'Пятьдесят тысяч коту под хвост... И всё из-за того, что мы пожадничали.' },
          { speaker: 'Виктория', text: 'Не кори себя. Мы просто не подумали. Но знаешь что? Деньги — это всего лишь бумага. А мы есть друг у друга. (Прижимается)' }
        ]
      },
      choices: [
        { id: 'next', title: 'Продолжить', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 5,
      title: '❤️ Искорка',
      bg: 'images/stories/18+/otmena-posvyata/bedroom-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Максим', text: '(Притягивает её к себе) Знаешь, а это посвящение мне нравится даже больше. Только ты и я.' },
          { speaker: 'Виктория', text: '(Целует его глубоко) И никаких штормов нам не помеха. Пойдём в спальню?' },
          { speaker: 'Максим', text: '(Подхватывает на руки) С тобой — хоть на край света.' }
        ],
        withoutProtection: [
          { speaker: 'Максим', text: 'Прости, что так вышло с деньгами. Я должен был настоять.' },
          { speaker: 'Виктория', text: '(Закрывает ему рот поцелуем) Забудь. Сейчас важно только то, что мы вместе. И у нас есть целая ночь, чтобы это доказать.' }
        ]
      },
      choices: [
        { id: 'finish', title: 'Продолжить ночь', price: 0, description: '', icon: 'heart' }
      ]
    },
    {
      id: 6,
      title: '☀️ Утро',
      bg: 'images/stories/18+/otmena-posvyata/bedroom-bg.png',
      characters: [
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'left' },
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Виктория', text: '(Лежит на его плече) Знаешь, а это было лучшее посвящение в моей жизни.' },
          { speaker: 'Максим', text: '(Целует её в лоб) Согласен. И спасибо тебе, что научила меня взрослому подходу. Страховка — это реально полезно.' },
          { speaker: 'Виктория', text: 'А ещё полезно, когда рядом есть тот, с кем можно пережить любой шторм.' }
        ],
        withoutProtection: [
          { speaker: 'Максим', text: 'Я запомню этот урок. Больше никакой экономии на важном.' },
          { speaker: 'Виктория', text: 'И я. Но знаешь, даже потеря денег не испортила эту ночь. Потому что ты был рядом.' }
        ]
      },
      choices: [
        { id: 'end', title: 'Завершить историю', price: 0, description: '', icon: 'trophy' }
      ]
    }
  ],

  widgets: {
    chat: { available: false },
    call: { available: false }
  }
};