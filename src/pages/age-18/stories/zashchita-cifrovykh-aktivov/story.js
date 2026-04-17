export default {
  title: 'Царапины на сердце и на капоте',
  category: 'auto',
  budget: 25000,

  scenes: [
    {
      id: 1,
      title: '🚗 Новая тачка',
      bg: 'images/stories/18+/pocarannaya-mashina/parking-day-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Михаил', text: 'Ну как тебе мой новый зверь? Копил на него два года. Теперь можем хоть на море, хоть в горы — в любую точку.' },
        { speaker: 'София', text: '(Проводит рукой по капоту) Очень красивый. Но скажи честно, ты же оформил нормальную страховку? Не дай бог, какая-нибудь "бывшая" увидит.' },
        { speaker: 'Михаил', text: '(Смеётся) В смысле "бывшая"? Ты про Карину что ли? Да она уже сто лет как в прошлом. А страховку я оформил, не переживай. "Хорошей страховой компании", полное КАСКО. Там даже от вандализма и царапин защита есть. Говорят, они покрывают ущерб от противоправных действий третьих лиц и даже от животных.' },
        { speaker: 'София', text: 'Умница. Тогда поехали, отметим покупку где-нибудь в уютном месте?' }
      ],
      choices: [
        { id: 'goOut', title: 'Поехать праздновать', price: 0, description: '', icon: 'car' }
      ]
    },
    {
      id: 2,
      title: '🍷 Ужин при свечах',
      bg: 'images/stories/18+/pocarannaya-mashina/restaurant-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Михаил', text: '(Поднимает бокал) За нас и за то, чтобы эта машина приносила только радость.' },
        { speaker: 'София', text: '(Чокается) За нас. Кстати, тебе несколько раз звонили с незнакомого номера. Ты не будешь проверять?' },
        { speaker: 'Михаил', text: 'Потом. Сейчас есть дела поважнее. (Кладёт руку на её ладонь)' },
        { speaker: 'София', text: '(Улыбается) Ну тогда... может, поедем ко мне? Кофе выпьем.' }
      ],
      choices: [
        { id: 'goHome', title: 'Поехать к Софии', price: 0, description: '', icon: 'heart' }
      ]
    },
    {
      id: 3,
      title: '💔 Сюрприз на парковке',
      bg: 'images/stories/18+/pocarannaya-mashina/parking-morning-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Михаил', text: '(Подходит к машине и замирает) Твою ж... Весь капот и водительская дверь исполосованы ключом! Да тут ещё и слово... (читает) "Козёл".' },
        { speaker: 'София', text: '(Прикрывает рот рукой) Михаил... Это же... Карина? Помнишь, я вчера говорила про бывшую?' },
        { speaker: 'Михаил', text: 'Точно. Она вчера звонила, а я не ответил. Видимо, выследила... Вот же... Ладно, спокойно. У меня же КАСКО от "Хорошей страховой компании". Они покрывают такие случаи, как "противоправные действия третьих лиц".' },
        { speaker: 'София', text: '(Обнимает его) Хорошо, что ты оформил. Давай действовать по инструкции. Сначала полиция, потом в страховую.' }
      ],
      choices: [
        { id: 'callPolice', title: 'Вызвать полицию', price: 0, description: '', icon: 'police' }
      ]
    },
    {
      id: 4,
      title: '👮‍♂️ В участке',
      bg: 'images/stories/18+/pocarannaya-mashina/police-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Михаил', text: 'Я написал заявление. Они сказали, что найдут её по камерам и номеру телефона. Теперь главное — правильно оформить всё для страховой.' },
        { speaker: 'София', text: 'В «Хорошей страховой компании» сказали, что нужно фото повреждений, справка из полиции о возбуждении дела и заполнить заявление онлайн. Давай я помогу.' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Собрать документы!',
        instruction: 'Быстро нажимай кнопку, чтобы правильно всё оформить!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'София', text: 'Отлично! Я всё отправила. Они ответили, что в течение 30 дней примут решение о выплате или направят на ремонт.' },
          { speaker: 'Михаил', text: 'Спасибо тебе. Один я бы точно накосячил с бумажками.' }
        ],
        fail: [
          { speaker: 'София', text: 'Чёрт, кажется, мы неправильно прикрепили фото. Нужно переделывать.' },
          { speaker: 'Михаил', text: 'Ничего, сейчас исправим. Главное, что ты рядом.' }
        ]
      }
    },
    {
      id: 5,
      title: '✅ Справедливость',
      bg: 'images/stories/18+/pocarannaya-mashina/repair-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Михаил', text: 'Смотри, машину уже покрасили. Как новая! "Хорошая страховая компания всё оплатила, даже эвакуацию до сервиса. А Карине теперь светит уголовка за порчу имущества.' },
          { speaker: 'София', text: '(Прижимается к нему) Я рада, что всё обошлось. И рада, что ты такой предусмотрительный. Кстати, я тут подумала... Может, поедем в то мини-путешествие, о котором ты говорил?' },
          { speaker: 'Михаил', text: '(Целует её) С тобой — хоть на край света. Поехали прямо сейчас.' }
        ],
        withoutProtection: [
          { speaker: 'Михаил', text: 'Без страховки ремонт влетел в копеечку. Почти пятьдесят тысяч. Эх, надо было оформлять полис...' },
          { speaker: 'София', text: 'Не кори себя. Это урок на будущее. Зато мы вместе, и это главное. (Целует его в щёку)' }
        ]
      },
      choices: [
        { id: 'finish', title: 'Продолжить', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 6,
      title: '😢 Горький опыт',
      bg: 'images/stories/18+/pocarannaya-mashina/repair-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        { speaker: 'Михаил', text: 'Ну вот, ремонт съел почти все сбережения. А мог бы потратить их на наш отдых.' },
        { speaker: 'София', text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз, но уже с правильным решением?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к началу', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 0
    },
    {
      id: 7,
      title: '❤️ Новая глава',
      bg: 'images/stories/18+/pocarannaya-mashina/sunset-road-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Михаил', text: 'Знаешь, эта ситуация показала мне две вещи. Первая — всегда страховать дорогие вещи. Вторая — что ты самый близкий мне человек.' },
          { speaker: 'София', text: '(Кладёт голову ему на плечо) Согласна. И спасибо "Хорошей страховой компании", что не дали этой дурацкой истории испортить наше лето. Ну что, куда едем?' },
          { speaker: 'Михаил', text: 'Куда глаза глядят. Главное, что вместе.' }
        ],
        withoutProtection: [
          { speaker: 'Михаил', text: 'Я усвоил урок. Больше никакой экономии на важном. Зато у нас есть мы.' },
          { speaker: 'София', text: 'И это самое главное. Поехали, просто прокатимся?' }
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