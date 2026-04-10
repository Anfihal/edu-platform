export default {
  title: 'День рождения и разбитый телефон',
  category: 'device',
  budget: 4000,

  scenes: [
    {
      id: 1,
      title: '🎉 День рождения',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'center' },
        { name: 'Елена', img: 'images/characters/elena/elena.png', side: 'right' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'left' }
      ],
      dialogues: [
        { speaker: 'Елена', text: 'С днём рождения, Мария! Мы с папой решили подарить тебе новый телефон.' },
        { speaker: 'Мария', text: 'Ого! Спасибо! Это тот самый, о котором я мечтала!' },
        { speaker: 'Иван', text: '(Смотрит на Марию) Классный телефон... И ты сегодня очень красивая.' },
        { speaker: 'Мария', text: '(Краснеет) Спасибо, Иван...' }
      ],
      choices: [
        { id: 'continue', title: 'Продолжить праздник', price: 0, description: '', icon: 'cake' }
      ]
    },
    {
      id: 2,
      title: '🛡️ Страховка',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Елена', img: 'images/characters/elena/elena.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Елена', text: 'Мария, мы можем оформить страховку на телефон. Она стоит 2500 рублей.' },
        { speaker: 'Мария', text: 'А зачем она нужна?' },
        { speaker: 'Елена', text: 'Если телефон случайно разобьётся или упадёт в воду, страховая компания оплатит ремонт или замену. Но если ты сама его специально сломаешь — страховка не сработает.' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Купить страховку', price: 2500, description: 'Защитить телефон', icon: 'shield' },
        { id: 'noInsurance', title: 'Не покупать', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '📱 Любопытство',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Иван', text: 'Можно подержать твой новый телефон? Хочу посмотреть камеру.' },
        { speaker: 'Мария', text: '(Улыбается) Держи, только осторожно.' },
        { speaker: 'Иван', text: 'Конечно, я аккуратно... Ой!' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Поймай телефон!',
        instruction: 'Быстро нажимай кнопку!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Мария', text: 'Фух! Успел поймать!' },
          { speaker: 'Иван', text: '(Смущённо) Извини, я такой неловкий...' }
        ],
        fail: [
          { speaker: 'Иван', text: 'О нет! Экран разбился...' },
          { speaker: 'Мария', text: 'Мой новый телефон...' }
        ]
      }
    },
    {
      id: 4,
      title: '😰 Неловкий момент',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' },
        { name: 'Елена', img: 'images/characters/elena/elena.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCaught: [
          { speaker: 'Мария', text: 'Хорошо, что обошлось. Но телефон мог разбиться...' },
          { speaker: 'Иван', text: 'Я больше никогда не буду брать чужие вещи без чехла!' },
          { speaker: 'Елена', text: 'Ничего, страховка бы помогла, если бы он упал. Хорошо, что мы её взяли.' }
        ],
        withProtectionAndDropped: [
          { speaker: 'Мария', text: 'Экран разбит...' },
          { speaker: 'Иван', text: 'Я всё исправлю! Обещаю!' },
          { speaker: 'Елена', text: 'Не волнуйтесь, у нас есть страховка. Ремонт будет бесплатным.' }
        ],
        withoutProtectionAndCaught: [
          { speaker: 'Мария', text: 'Пронесло! Но теперь я понимаю, как легко разбить телефон.' },
          { speaker: 'Иван', text: 'Извини, что подверг тебя риску...' }
        ],
        withoutProtectionAndDropped: [
          { speaker: 'Мария', text: 'Мой новый телефон...' },
          { speaker: 'Иван', text: 'Я не знаю, что сказать... Мне так жаль.' },
          { speaker: 'Елена', text: 'К сожалению, мы не оформили страховку. Ремонт будет дорогим.' }
        ]
      }
    },
    {
      id: 5,
      title: '💬 Разговор',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' }
      ],
      nextScene: {
        withProtectionAndDropped: 6,
        withProtectionAndCaught: 6,
        withoutProtectionAndDropped: 7,
        withoutProtectionAndCaught: 7
      }
    },
    {
      id: 6,
      title: '✅ Страховка спасла',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/repair-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Мария', text: 'Страховка покрыла ремонт! Через пару дней телефон будет как новый.' },
        { speaker: 'Иван', text: 'Я очень рад. И... Мария, может, сходим куда-нибудь вместе?' },
        { speaker: 'Мария', text: '(Улыбается) Договорились. Но только без телефонов!' }
      ],
      choices: [
        { id: 'happyEnd', title: 'Класс!', price: 0, description: '', icon: 'heart' }
      ]
    },
    {
      id: 7,
      title: '💔 Без страховки',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/repair-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Мария', text: 'Ремонт стоит 8000 рублей... У меня нет таких денег.' },
        { speaker: 'Иван', text: 'Я накоплю и отдам! Обещаю!' },
        { speaker: 'Мария', text: 'Может, стоило купить страховку...' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться и выбрать иначе', icon: 'restart' },
        { id: 'finishSad', title: 'Закончить', price: 0, description: 'Усвоить урок', icon: 'eye' }
      ],
      nextScene: 1
    },
    {
      id: 8,
      title: '📖 Вывод',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Иван', img: 'images/characters/ivan/ivan.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Мария', text: 'Теперь я знаю: страховка — это не пустая трата денег, а забота о будущем.' },
        { speaker: 'Иван', text: 'И я понял, что нужно быть аккуратнее с чужими вещами. И с чувствами тоже.' },
        { speaker: 'Мария', text: '(Смеётся) Ладно, проехали. Главное, что мы разобрались.' }
      ],
      choices: [
        { id: 'finish', title: 'Конец истории', price: 0, description: '', icon: 'trophy' }
      ]
    }
  ],

  widgets: {
    chat: { available: false },
    call: { available: false }
  }
};