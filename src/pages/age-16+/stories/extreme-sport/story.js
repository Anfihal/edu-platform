export default {
  title: 'Адреналин с защитой',
  category: 'sport',
  budget: 5000,

  scenes: [
    {
      id: 1,
      title: '🏔️ Идея для свидания',
      bg: 'images/stories/16+/extreme-sport/cafe-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Максим', text: 'Вик, смотри, какой крутой горный трейл открылся для маунтинбайка. Давай в выходные рванём?' },
        { speaker: 'Виктория', text: '(Улыбается) С тобой хоть на край света. Но давай сначала глянем, что там со страховкой. Не хочу, чтобы наше свидание запомнилось очередью в травмпункт.' },
        { speaker: 'Максим', text: 'Ты моя самая разумная девушка. Хорошо, давай вместе посмотрим, что предлагает «Ингосстрах».' }
      ],
      choices: [
        { id: 'search', title: 'Искать страховку онлайн', price: 0, description: 'Взять всё в свои руки', icon: 'search' }
      ]
    },
    {
      id: 2,
      title: '💻 Поиск в интернете',
      bg: 'images/stories/16+/extreme-sport/cafe-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Виктория', text: 'Смотри, у «Ингосстраха» есть специальная спортивная страховка. Они покрывают даже экстремальные виды, включая маунтинбайк. Каждое третье обращение к ним по травмам связано со спортом, так что в этом они эксперты.' },
        { speaker: 'Максим', text: 'Звучит внушительно. А что насчёт цены?' },
        { speaker: 'Виктория', text: 'Страховка на выходные будет стоить около 1500 рублей. Сумма покрытия до 1 000 000 рублей. В неё входит лечение, реабилитация и даже эвакуация, если что-то серьёзное случится.' },
        { speaker: 'Максим', text: 'Неплохо. А если я решу прыгнуть с парашютом? Это тоже входит?' },
        { speaker: 'Виктория', text: 'Да, но нужно обязательно указать конкретный вид спорта в заявке. Если травма случится на том, что не вписано в полис, могут быть проблемы с выплатой. Так что думай.' },
        { speaker: 'Максим', text: '(Смотрит на Викторию) С тобой я даже на край света готов. Но страховку всё равно оформим.' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Купить страховку (1500₽)', price: 1500, description: 'Защитить наши приключения', icon: 'shield' },
        { id: 'noInsurance', title: 'Сэкономить', price: 0, description: 'Авось пронесёт', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '🚵‍♂️ Экстремальный спуск',
      bg: 'images/stories/16+/extreme-sport/mountain-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Максим', text: 'Давай, Вик! Я за тобой! Только аккуратно на поворотах!' },
        { speaker: 'Виктория', text: 'Ух! Тут корни! Держусь!' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержись на трассе!',
        instruction: 'Быстро нажимай кнопку, чтобы не упасть!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Виктория', text: 'Фух, я справилась! Адреналин зашкаливает!' },
          { speaker: 'Максим', text: 'Ты была невероятна. (Обнимает) Давай ещё один круг?' }
        ],
        fail: [
          { speaker: 'Виктория', text: 'Ай! Нога! Кажется, я подвернула лодыжку...' },
          { speaker: 'Максим', text: '(Подбегает) Чёрт, Вик, дай посмотрю. Сильно болит?' }
        ]
      }
    },
    {
      id: 4,
      title: '💔 На эмоциях',
      bg: 'images/stories/16+/extreme-sport/mountain-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndFall: [
          { speaker: 'Максим', text: 'Я вызываю помощь. Хорошо, что мы не пожадничали и купили страховку в «Ингосстрахе».' },
          { speaker: 'Виктория', text: '(Сквозь боль) Да... Но я испортила нам выходные. Прости.' },
          { speaker: 'Максим', text: 'Ты что, глупая? Главное, что ты в безопасности. (Наклоняется и целует) Я тебя любую люблю.' }
        ],
        withProtectionAndSuccess: [
          { speaker: 'Виктория', text: 'Это было круто! А знаешь, что ещё круче? Что у нас есть страховка от «Ингосстраха» на случай, если адреналин зашкалит.' },
          { speaker: 'Максим', text: 'С тобой я готов на любой риск. Но лучше подстраховаться. (Притягивает к себе и целует) Ты моя самая разумная авантюристка.' }
        ],
        withoutProtectionAndFall: [
          { speaker: 'Максим', text: 'Помощь едет. Но без страховки это влетит нам в копеечку... Зачем мы сэкономили?' },
          { speaker: 'Виктория', text: '(Всхлипывает) Мы просто не подумали. Прости, что так вышло.' },
          { speaker: 'Максим', text: 'Эй, не плачь. Я сам дурак, что не настоял. (Вытирает ей слёзы и целует) Мы справимся. Вместе.' }
        ],
        withoutProtectionAndSuccess: [
          { speaker: 'Виктория', text: 'Пронесло. Но я вся дрожу. Мы могли серьёзно попасть.' },
          { speaker: 'Максим', text: 'Ты права. Больше никакой экономии на нашей безопасности. (Обнимает крепко и целует) Обещаю.' }
        ]
      },
      choices: [
        { id: 'next', title: 'Дальше', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 5,
      title: '😢 Горький опыт',
      bg: 'images/stories/16+/extreme-sport/mountain-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      available: 'withoutProtectionAndFall',
      dialogues: [
        { speaker: 'Виктория', text: 'Вот так свидание... И дорого, и больно.' },
        { speaker: 'Максим', text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз, но уже со страховкой?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 1
    },
    {
      id: 6,
      title: '❤️ Главный урок',
      bg: 'images/stories/16+/extreme-sport/sunset-bg.png',
      characters: [
        { name: 'Виктория', img: 'images/characters/viktoria/viktoria.png', side: 'left' },
        { name: 'Максим', img: 'images/characters/maksim/maksim.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Максим', text: 'Знаешь, Вик, страховка в «Ингосстрахе» — это круто. Но самое ценное, что у меня есть — это ты.' },
          { speaker: 'Виктория', text: 'И ты у меня. А ещё я поняла, что оформить полис онлайн за пять минут — это разумно, а не трусость. Давай всегда так делать.' },
          { speaker: 'Максим', text: 'Договорились. Ну что, куда в следующий раз?' }
        ],
        withoutProtection: [
          { speaker: 'Максим', text: 'Я усвоил урок. Экстрим — это весело, но рисковать по-глупому — нет. В следующий раз только с полисом «Ингосстраха».' },
          { speaker: 'Виктория', text: 'И я. Прости, что сразу не настояла. Но мы прошли это вместе, и это главное.' }
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