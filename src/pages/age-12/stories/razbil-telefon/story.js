export default {
  title: 'День рождения и разбитый телефон',
  category: 'device',
  budget: 4000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: ПРАЗДНИК — ДАРЯТ ТЕЛЕФОН
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🎉 День рождения',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'center' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' }
      ],
      dialogues: [
        {
          speaker: 'Елена',
          text: 'С днём рождения, Мария! Мы с папой решили подарить тебе новый телефон.'
        },
        {
          speaker: 'Мария',
          text: 'Ого! Спасибо! Это тот самый, о котором я мечтала!'
        },
        {
          speaker: 'Максим',
          text: '(Смотрит на Марию) Классный телефон... И ты сегодня очень красивая.'
        },
        {
          speaker: 'Мария',
          text: '(Краснеет) Спасибо, Максим...'
        }
      ],
      choices: [
        {
          id: 'continue',
          title: 'Продолжить праздник',
          price: 0,
          description: '',
          icon: 'cake'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР СТРАХОВКИ
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Страховка',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Елена',
          text: 'Мария, мы можем оформить страховку на телефон. Она стоит 2500 рублей.'
        },
        {
          speaker: 'Мария',
          text: 'А зачем она нужна?'
        },
        {
          speaker: 'Елена',
          text: 'Если телефон случайно разобьётся или упадёт в воду, страховая компания оплатит ремонт или замену. Но если ты сама его специально сломаешь — страховка не сработает.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку',
          price: 2500,
          description: 'Защитить телефон',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Не покупать',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: МАКСИМ ХОЧЕТ ПОСМОТРЕТЬ ТЕЛЕФОН
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '📱 Любопытство',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Можно подержать твой новый телефон? Хочу посмотреть камеру.'
        },
        {
          speaker: 'Мария',
          text: '(Улыбается) Держи, только осторожно.'
        },
        {
          speaker: 'Максим',
          text: 'Конечно, я аккуратно... Ой!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Поймай телефон!',
        instruction: 'Быстро нажимай кнопку!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Мария',
            text: 'Фух! Успел поймать!'
          },
          {
            speaker: 'Максим',
            text: '(Смущённо) Извини, я такой неловкий...'
          }
        ],
        fail: [
          {
            speaker: 'Максим',
            text: 'О нет! Экран разбился...'
          },
          {
            speaker: 'Мария',
            text: 'Мой новый телефон...'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РЕАКЦИЯ НА ПАДЕНИЕ (ОБЩАЯ ДЛЯ ОБОИХ РЕЗУЛЬТАТОВ МИНИ-ИГРЫ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '😰 Неловкий момент',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' },
        { name: 'Елена', img: '/images/characters/elena/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCaught: [ // поймали, страховка есть
          {
            speaker: 'Мария',
            text: 'Хорошо, что обошлось. Но телефон мог разбиться...'
          },
          {
            speaker: 'Максим',
            text: 'Я больше никогда не буду брать чужие вещи без чехла!'
          },
          {
            speaker: 'Елена',
            text: 'Ничего, страховка бы помогла, если бы он упал. Хорошо, что мы её взяли.'
          }
        ],
        withProtectionAndDropped: [ // уронили, страховка есть
          {
            speaker: 'Мария',
            text: 'Экран разбит...'
          },
          {
            speaker: 'Максим',
            text: 'Я всё исправлю! Обещаю!'
          },
          {
            speaker: 'Елена',
            text: 'Не волнуйтесь, у нас есть страховка. Ремонт будет бесплатным.'
          }
        ],
        withoutProtectionAndCaught: [ // поймали, страховки нет
          {
            speaker: 'Мария',
            text: 'Пронесло! Но теперь я понимаю, как легко разбить телефон.'
          },
          {
            speaker: 'Максим',
            text: 'Извини, что подверг тебя риску...'
          }
        ],
        withoutProtectionAndDropped: [ // уронили, страховки нет
          {
            speaker: 'Мария',
            text: 'Мой новый телефон...'
          },
          {
            speaker: 'Максим',
            text: 'Я не знаю, что сказать... Мне так жаль.'
          },
          {
            speaker: 'Елена',
            text: 'К сожалению, мы не оформили страховку. Ремонт будет дорогим.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ПОСЛЕДСТВИЯ И ВЫБОР ПУТИ
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '💬 Разговор',
      bg: '/images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      // Диалоги зависят от комбинации условий, ветвление с помощью nextScene
      nextScene: {
        withProtectionAndDropped: 6,   // есть страховка и упал → идём в сцену 6 (страховка помогла)
        withProtectionAndCaught: 6,    // есть страховка и поймал → всё равно показываем пользу страховки
        withoutProtectionAndDropped: 7, // нет страховки и упал → сцена 7 (печаль)
        withoutProtectionAndCaught: 7   // нет страховки и поймал → всё равно подводим к мысли о страховке
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: СО СТРАХОВКОЙ — ВСЁ РЕШАЕТСЯ ЛЕГКО
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '✅ Страховка спасла',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/repair-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Страховка покрыла ремонт! Через пару дней телефон будет как новый.'
        },
        {
          speaker: 'Максим',
          text: 'Я очень рад. И... Мария, может, сходим куда-нибудь вместе?'
        },
        {
          speaker: 'Мария',
          text: '(Улыбается) Договорились. Но только без телефонов!'
        }
      ],
      choices: [
        {
          id: 'happyEnd',
          title: 'Класс!',
          price: 0,
          description: '',
          icon: 'heart'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 7: БЕЗ СТРАХОВКИ — ДОРОГОЙ УРОК
    // ═══════════════════════════════════════════════════════════
    {
      id: 7,
      title: '💔 Без страховки',
      bg: 'images/stories/12+/razbityy-telefon-na-dr/repair-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Ремонт стоит 8000 рублей... У меня нет таких денег.'
        },
        {
          speaker: 'Максим',
          text: 'Я накоплю и отдам! Обещаю!'
        },
        {
          speaker: 'Мария',
          text: 'Может, стоило купить страховку...'
        }
      ],
      choices: [
        {
          id: 'retry',
          title: 'Попробовать со страховкой',
          price: 0,
          description: 'Вернуться и выбрать иначе',
          icon: 'restart'
        },
        {
          id: 'finishSad',
          title: 'Закончить',
          price: 0,
          description: 'Усвоить урок',
          icon: 'eye'
        }
      ],
      nextScene: 1 // возврат к выбору страховки (индекс 1)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 8: ФИНАЛ (ДЛЯ ТЕХ, КТО ЗАКОНЧИЛ ПОСЛЕ СЦЕНЫ 6 ИЛИ 7)
    // ═══════════════════════════════════════════════════════════
    {
      id: 8,
      title: '📖 Вывод',
      bg: '/images/stories/12+/razbityy-telefon-na-dr/party-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Теперь я знаю: страховка — это не пустая трата денег, а забота о будущем.'
        },
        {
          speaker: 'Максим',
          text: 'И я понял, что нужно быть аккуратнее с чужими вещами. И с чувствами тоже.'
        },
        {
          speaker: 'Мария',
          text: '(Смеётся) Ладно, проехали. Главное, что мы разобрались.'
        }
      ],
      choices: [
        {
          id: 'finish',
          title: 'Конец истории',
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
