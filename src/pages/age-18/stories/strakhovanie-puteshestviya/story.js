export default {
  title: 'Таиланд: работа, пляж, полиция',
  category: 'travel',
  budget: 20000,

  scenes: [
    {
      id: 1,
      title: '💼 Лето впахивания',
      bg: 'images/stories/18+/otpusk-mechty/cafe-work-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Дмитрий', text: 'Три месяца пахоты в кафе, три месяца экономии на всём. Но завтра мы улетаем в Таиланд!' },
        { speaker: 'Александр', text: 'Я уже чувствую запах кокосового масла и дешёвого пива. Кстати, о деньгах — страховку кто-нибудь оформил?' },
        { speaker: 'София', text: 'Я глянула «Ингосстрах». Полис для путешественников стоит около 3000 рублей. Покрывает и медицину, и багаж, и даже если рейс задержат. Ну что, скидываемся?' },
        { speaker: 'Анна', text: '(Смеётся) А если Александр опять напьётся и потеряет паспорт — это тоже покроют?' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Купить страховку (3000₽)', price: 3000, description: 'Спать спокойно', icon: 'shield' },
        { id: 'noInsurance', title: 'Забить, и так дорого', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 2,
      title: '✈️ Задержка рейса',
      bg: 'images/stories/18+/otpusk-mechty/airport-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'София', text: 'Рейс задерживают на 12 часов! И это только начало.' },
        { speaker: 'Александр', text: 'Офигеть. А я уже мысленно на пляже с коктейлем. Может, в баре посидим?' },
        { speaker: 'Дмитрий', text: 'Спокойно, у нас страховка. В «Ингосстрахе» за задержку рейса положена компенсация — до 15000 рублей. Так что бар — за их счёт.' }
      ],
      choices: [
        { id: 'bar', title: 'Идти в бар', price: 0, description: 'Отметить начало отпуска', icon: 'beer' }
      ]
    },
    {
      id: 3,
      title: '🧳 Где мой чемодан?',
      bg: 'images/stories/18+/otpusk-mechty/thailand-airport-bg.png',
      characters: [
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'left' },
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Анна', text: 'Слушайте, моего чемодана на ленте нет. Там все мои купальники и... ну, вы поняли.' },
        { speaker: 'Александр', text: 'А мой чемодан приехал, но он вскрыт! Пропала бутылка вискаря, которую я в дьютике купил. Вот гады.' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Найти багаж!',
        instruction: 'Быстро нажимай кнопку, чтобы найти вещи!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'София', text: 'Так, я нашла твой чемодан, Ань. Он у стойки lost & found. А у Александра виски, похоже, уплыл навсегда.' },
          { speaker: 'Дмитрий', text: 'Зато по страховке мы получим компенсацию за украденное из багажа. «Ингосстрах» покрывает до 15000 рублей.' }
        ],
        fail: [
          { speaker: 'София', text: 'Багаж не нашли. Придётся писать заявление.' },
          { speaker: 'Дмитрий', text: 'Ничего, страховка покроет расходы на вещи первой необходимости и компенсацию за утерю.' }
        ]
      }
    },
    {
      id: 4,
      title: '🍺 Вечеринка по-тайски',
      bg: 'images/stories/18+/otpusk-mechty/beach-party-bg.png',
      characters: [
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'left' },
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Александр', text: '(Пьяный) Я... я хочу слону на хобот залезть! Где тут слоны?!' },
        { speaker: 'Дмитрий', text: 'Александр, угомонись. Ты уже орал на бармена и пытался украсть кокос. Полиция едет.' }
      ],
      choices: [
        { id: 'police', title: 'Встречать полицию', price: 0, description: '', icon: 'police' }
      ]
    },
    {
      id: 5,
      title: '🚔 В участке',
      bg: 'images/stories/18+/otpusk-mechty/police-thai-bg.png',
      characters: [
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'София', text: 'Я позвонила в сервисный центр «Ингосстраха». Они предоставили юриста и переводчика. Александру грозит только штраф, и тот покроет страховка.' },
          { speaker: 'Александр', text: '(Протрезвев) Блин, ребят, простите. Я идиот. Спасибо, что у нас есть страховка.' }
        ],
        withoutProtection: [
          { speaker: 'София', text: 'Без страховки нам пришлось самим искать адвоката. Штраф и услуги юриста съели почти все отпускные.' },
          { speaker: 'Александр', text: 'Я всё отработаю, клянусь. И больше ни капли.' }
        ]
      },
      choices: [
        { id: 'next', title: 'Дальше', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 6,
      title: '💸 Дорогой отпуск',
      bg: 'images/stories/18+/otpusk-mechty/hotel-room-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        { speaker: 'Анна', text: 'Отпуск мечты превратился в финансовую яму. А ведь могли просто купить страховку.' },
        { speaker: 'Дмитрий', text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз, но уже с умом?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 0
    },
    {
      id: 7,
      title: '🍹 Отпуск удался',
      bg: 'images/stories/18+/otpusk-mechty/beach-sunset-bg.png',
      characters: [
        { name: 'Дмитрий', img: 'images/characters/dmitry/dmitry.png', side: 'left' },
        { name: 'Александр', img: 'images/characters/aleksandr/aleksandr.png', side: 'left' },
        { name: 'София', img: 'images/characters/sofia/sofia.png', side: 'right' },
        { name: 'Анна', img: 'images/characters/anna/anna.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Дмитрий', text: 'Ну что, чуваки, это было легендарно. Задержка, потеря багажа, полиция... Но мы выжили и даже не разорились.' },
          { speaker: 'София', text: 'Всё благодаря страховке «Ингосстраха». Серьёзно, лучшая инвестиция в отпуск.' },
          { speaker: 'Александр', text: '(С бокалом смузи) Я завязал с алкоголем. На месяц. Наверное.' },
          { speaker: 'Анна', text: 'А я теперь всегда буду оформлять страховку. И вам советую. Ну что, по последнему коктейлю?' }
        ],
        withoutProtection: [
          { speaker: 'Дмитрий', text: 'Это был самый дорогой отпуск в моей жизни. Но зато мы поняли, что на страховке экономить нельзя.' },
          { speaker: 'Анна', text: 'В следующий раз — только с полисом. И Александра к психологу.' }
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