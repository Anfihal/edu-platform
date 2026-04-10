export default {
  title: 'Сервер, бабки и хакеры',
  category: 'digital',
  budget: 25000,

  scenes: [
    {
      id: 1,
      title: '🎮 Стартап на коленке',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/garage-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Дмитрий', text: 'Народ, мы сделали это! Сервер по мотивам нашей любимой RPG запущен. Первые сто донатов уже на счету. Начинаем рубить бабки.' },
        { speaker: 'Михаил', text: 'Я админку запилил — любо-дорого. Защита от читеров, резервное копирование раз в час. Чувствую себя Сноуденом, только с пивом.' },
        { speaker: 'София', text: 'Кстати, о защите. Вы в курсе, что в 2025 году каждый пятый геймер сталкивался с кражей аккаунта? А мы тут целый бизнес строим. У «Ингосстраха» есть полис киберстрахования для таких как мы — защита от DDoS, взломов, потери данных.' },
        { speaker: 'Анна', text: 'Сколько стоит не прогореть при первой же атаке?' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Оформить киберстраховку (5000₽)', price: 5000, description: 'Спать спокойно', icon: 'shield' },
        { id: 'noInsurance', title: 'Забить, мы и так умные', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 2,
      title: '🔥 Сервер лёг',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/server-room-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Михаил', text: 'Дима, у нас проблема. Сервер лежит, пинг 3000, игроки орут в Discord. Классическая DDoS-атака.' },
        { speaker: 'Дмитрий', text: 'Сколько потеряем, если не поднимем за час?' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Отбить DDoS!',
        instruction: 'Быстро нажимай кнопку, чтобы восстановить сервер!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Михаил', text: 'Фух! Отбились. Поставил фильтрацию трафика. Но это было близко.' },
          { speaker: 'Дмитрий', text: 'А если бы не справились? Вот для этого и нужна страховка.' }
        ],
        fail: [
          { speaker: 'Михаил', text: 'Всё. Сервер лежит вторые сутки. Игроки уходят к конкурентам.' },
          { speaker: 'Дмитрий', text: 'Вот же ж... Надо было брать страховку.' }
        ]
      }
    },
    {
      id: 3,
      title: '👾 Хакеры',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/hacker-screen-bg.png',
      characters: [
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'left' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'София', text: 'Народ, у нас полный трындец. База данных игроков слита в даркнет. Почты, пароли, даже номера кошельков для донатов.' },
        { speaker: 'Анна', text: 'А ещё мне в личку написал какой-то ушлёпок. Требует 200 тысяч рублей, иначе сольёт всю инфу публично и подставит нас под штрафы за утечку персональных данных. По новому закону штраф до 3% годовой выручки.' }
      ],
      choices: [
        { id: 'callPolice', title: 'Звонить в поддержку Ингосстраха', price: 0, description: 'Воспользоваться страховкой', icon: 'police' }
      ]
    },
    {
      id: 4,
      title: '📞 Звонок в страховую',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/office-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'София', text: 'Я связалась с «Ингосстрахом». Они подтвердили: взлом, шантаж и утечка данных — страховые случаи. Подключают юристов, технических специалистов, покроют расходы на восстановление и даже штрафы.' },
          { speaker: 'Дмитрий', text: 'Блин, я аж вспотел. А ведь могли без штанов остаться.' }
        ],
        withoutProtection: [
          { speaker: 'София', text: 'Без страховки мы никто. Юристы просят предоплату, сервера простаивают, игроки уходят. Мы теряем примерно 50 тысяч в день.' },
          { speaker: 'Дмитрий', text: 'Отлично. Просто отлично. Кто-нибудь, дайте мне машину времени.' }
        ]
      },
      choices: [
        { id: 'next', title: 'Дальше', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 5,
      title: '💸 Бизнес под угрозой',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/broken-server-bg.png',
      characters: [
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        { speaker: 'Михаил', text: 'Мы теряем игроков, деньги и репутацию. А ведь могли просто оформить страховку.' },
        { speaker: 'Анна', text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз, но уже с умом?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 0
    },
    {
      id: 6,
      title: '🏆 Игра продолжается',
      bg: 'images/stories/18+/zashchita-cifrovykh-aktivov/success-party-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Михаил', img: 'images/characters/mikhail/mikhail.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Дмитрий', text: 'Ну что, народ, мы выжили. Сервер работает, игроки возвращаются, донаты капают. И всё благодаря тому, что вовремя оформили страховку.' },
          { speaker: 'София', text: '«Ингосстрах» реально выручил. Юристы отбили претензии, технари помогли восстановить данные. Мы даже вышли в плюс по итогам месяца.' },
          { speaker: 'Михаил', text: 'Кстати, тот хакер, что нас шантажировал, теперь сам под следствием. Карма — она такая.' },
          { speaker: 'Анна', text: 'В следующий раз, когда будем запускать новый проект, первым делом — страховка. И вам советую.' }
        ],
        withoutProtection: [
          { speaker: 'Дмитрий', text: 'Это был самый дорогой урок в нашей жизни. Но мы его усвоили. Без страховки в цифровом бизнесе — никак.' },
          { speaker: 'Михаил', text: 'Сервер восстановили, но сколько нервов и денег ушло... В следующий раз только с полисом.' }
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