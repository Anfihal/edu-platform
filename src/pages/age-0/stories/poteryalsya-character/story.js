export default {
  title: 'Волшебная защита',
  category: 'game',
  budget: 2000,

  scenes: [
    {
      id: 1,
      title: '🏠 Дома',
      bg: 'images/stories/0+/strakhovanie-personazha/home-bg.png',
      characters: [
        { name: 'Лев', img: 'images/characters/lev/lev.png', side: 'left' },
        { name: 'Мурка', img: 'images/characters/murka/murka.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Лев', text: 'Мурка, смотри! Я построил большой замок в игре!' },
        { speaker: 'Мурка', text: 'Мяу! (Смотрит на экран)' },
        { speaker: 'Лев', text: 'Ой! В замок попала молния! Мой герой потерял все свои вещи!' }
      ],
      choices: [
        { id: 'callMom', title: 'Позвать маму', price: 0, description: 'Мама поможет', icon: 'help' }
      ]
    },
    {
      id: 2,
      title: '👩 Мама помогает',
      bg: 'images/stories/0+/strakhovanie-personazha/home-bg.png',
      characters: [
        { name: 'Лев', img: 'images/characters/lev/lev.png', side: 'left' },
        { name: 'Екатерина', img: 'images/characters/ekaterina/ekaterina.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Лев', text: 'Мама! Мой герой потерял всё в игре!' },
        { speaker: 'Екатерина', text: 'Не расстраивайся, Лев. Мы можем купить страховку (щит).' },
        { speaker: 'Лев', text: 'А что это?' },
        { speaker: 'Екатерина', text: 'Мы заплатим немного денег сейчас. А если случится «страховой случай», то есть беда, страховая компания поможет всё исправить.' }
      ],
      choices: [
        { id: 'buyProtection', title: 'Купить страховку (щит)', price: 1500, description: 'Защитит героя', icon: 'shield' },
        { id: 'noProtection', title: 'Не покупать', price: 0, description: 'Играть без защиты', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '🛡️ Страховка (щит) куплена',
      bg: 'images/stories/0+/strakhovanie-personazha/shop-bg.png',
      characters: [
        { name: 'Лев', img: 'images/characters/lev/lev.png', side: 'left' },
        { name: 'Екатерина', img: 'images/characters/ekaterina/ekaterina.png', side: 'right' }
      ],
      available: 'withProtection',
      dialogues: [
        { speaker: 'Екатерина', text: 'Вот и страховка! Теперь, если с героем что-то случится, компания вернёт всё обратно.' },
        { speaker: 'Лев', text: 'Ура! Спасибо, мама!' }
      ],
      choices: [
        { id: 'play', title: 'Играть дальше', price: 0, description: 'Продолжить приключение', icon: 'gamepad' }
      ]
    },
    {
      id: 4,
      title: 'Без страховки',
      bg: 'images/stories/0+/strakhovanie-personazha/home-bg.png',
      characters: [
        { name: 'Лев', img: 'images/characters/lev/lev.png', side: 'left' },
        { name: 'Екатерина', img: 'images/characters/ekaterina/ekaterina.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        { speaker: 'Лев', text: 'Я не купил страховку (щит)... И герой потерял всё навсегда.' },
        { speaker: 'Екатерина', text: 'Ничего, давай попробуем ещё раз! Может, всё-таки купим страховку?' }
      ],
      choices: [
        { id: 'retryWithInsurance', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishAnyway', title: 'Закончить историю', price: 0, description: 'Я запомню урок', icon: 'eye' }
      ],
      // Исправлено: теперь кнопка «Закончить историю» ведёт на финал (сцена 5, индекс 4)
      nextScene: {
        retryWithInsurance: 1,   // возврат на сцену 2 (индекс 1)
        finishAnyway: 4          // переход на сцену 5 (индекс 4) — финал с выводом
      }
    },
    {
      id: 5,
      title: '📖 Вывод',
      bg: 'images/stories/0+/strakhovanie-personazha/home-bg.png',
      characters: [
        { name: 'Лев', img: 'images/characters/lev/lev.png', side: 'left' },
        { name: 'Екатерина', img: 'images/characters/ekaterina/ekaterina.png', side: 'right' },
        { name: 'Мурка', img: 'images/characters/murka/murka.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Лев', text: 'Я понял! Страховка (щит) помогает и в игре, и в жизни!' },
          { speaker: 'Екатерина', text: 'Молодец! Лучше заплатить немного сейчас, чтобы потом не потерять всё.' },
          { speaker: 'Мурка', text: 'Мур-мур! (Соглашается)' }
        ],
        withoutProtection: [
          { speaker: 'Лев', text: 'Я не купил страховку, но понял, что она важна.' },
          { speaker: 'Екатерина', text: 'В следующий раз обязательно попробуем со страховкой!' },
          { speaker: 'Мурка', text: 'Мяу! (Надеется на лучшее)' }
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