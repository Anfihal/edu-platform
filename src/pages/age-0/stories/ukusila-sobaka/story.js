export default {
  title: 'Щенок для Сони',
  category: 'pets',
  budget: 2500,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: РОДИТЕЛИ ДАРЯТ СОНЕ ЩЕНКА И ПРЕДЛАГАЮТ СТРАХОВКУ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: ' Подарок',
      bg: 'images/stories/0+/labrador-insurance/living-room-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Артём', img: '/images/characters/artem/image.png', side: 'right' },
        { name: 'Анна', img: '/images/characters/anna/image.png', side: 'right' },
        { name: 'Щенок', img: '/images/characters/labrador/image.png', side: 'center' }
      ],
      dialogues: [
        {
          speaker: 'Артём',
          text: 'Соня, мы с мамой решили сделать тебе сюрприз. Это щенок лабрадора, его зовут Дружок.'
        },
        {
          speaker: 'Соня',
          text: 'Ура! Спасибо, папа, мама! Я так давно мечтала о собаке!'
        },
        {
          speaker: 'Анна',
          text: 'Заводчик предложил оформить страховку для Дружка. Это как волшебный щит: если щенок заболеет или поранится, лечение будет бесплатным или очень дешёвым.'
        },
        {
          speaker: 'Артём',
          text: 'Страховка стоит 2000 рублей. У нас есть немного отложенных денег. Что скажешь, Соня?'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку',
          price: 2000,
          description: 'Защитить Дружка',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Не покупать',
          price: 0,
          description: 'Сэкономим',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ПРОГУЛКА И ВСТРЕЧА С ЛЬВОМ И БОБИКОМ
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: ' Прогулка',
      bg: 'images/stories/0+/labrador-insurance/park-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' },
        { name: 'Бобик', img: '/images/characters/bobik/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Дружок, смотри, какая хорошая погода! Пойдём гулять в парк.'
        },
        {
          speaker: 'Лев',
          text: 'Привет, Соня! Это твой новый щенок? А это мой французский бульдог Бобик.'
        },
        {
          speaker: 'Дружок',
          text: 'Гав! (Виляет хвостом)'
        },
        {
          speaker: 'Бобик',
          text: 'Гав-гав! (Приглашает играть)'
        }
      ],
      choices: [
        {
          id: 'play',
          title: 'Пусть играют',
          price: 0,
          description: 'Собаки подружатся',
          icon: 'paw'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: НЕЧАЯННЫЙ УКУС ВО ВРЕМЯ ИГРЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: ' Укус',
      bg: 'images/stories/0+/labrador-insurance/park-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' },
        { name: 'Бобик', img: '/images/characters/bobik/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Дружок',
          text: 'Гав! (Взвизгивает)'
        },
        {
          speaker: 'Соня',
          text: 'Ой! Что случилось?'
        },
        {
          speaker: 'Лев',
          text: 'Кажется, Бобик слишком сильно укусил Дружка за ухо! Он не хотел, просто играл.'
        },
        {
          speaker: 'Соня',
          text: 'Дружку больно! У него кровь! Надо к ветеринару!'
        }
      ],
      choices: [
        {
          id: 'vet',
          title: 'Бежать к врачу',
          price: 0,
          description: 'Помочь Дружку',
          icon: 'medical'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: У ВЕТЕРИНАРА — МИНИ-ИГРА "УСПОКОИТЬ СОБАКУ"
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: 'Ветеринар',
      bg: 'images/stories/0+/labrador-insurance/vet-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Анна', img: '/images/characters/anna/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Анна',
          text: 'Доктор сказал, что ранка небольшая, но нужно обработать и наложить повязку.'
        },
        {
          speaker: 'Соня',
          text: 'Дружок волнуется. Как его успокоить?'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Погладь Дружка',
        instruction: 'Нажимай кнопку, чтобы гладить собаку!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Соня',
            text: 'Молодец, Дружок! Ты храбрый пёс!'
          },
          {
            speaker: 'Дружок',
            text: 'Гав! (Лижет руку)'
          },
          {
            speaker: 'Анна',
            text: 'Вот и всё. Сейчас поедем домой.'
          }
        ],
        fail: [
          {
            speaker: 'Соня',
            text: 'Дружок всё ещё дрожит, но доктор уже всё сделал.'
          },
          {
            speaker: 'Анна',
            text: 'Ничего, дома он успокоится. Главное, что ранка обработана.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: СО СТРАХОВКОЙ — ЛЕЧЕНИЕ ПОЧТИ БЕСПЛАТНО
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: 'Страховка помогла',
      bg: 'images/stories/0+/labrador-insurance/vet-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Анна', img: '/images/characters/anna/image.png', side: 'right' }
      ],
      available: 'withProtection',
      dialogues: [
        {
          speaker: 'Анна',
          text: 'Страховка покрыла все расходы. Мы заплатили всего 200 рублей!'
        },
        {
          speaker: 'Соня',
          text: 'Ура! Дружок здоров, и у нас остались деньги на игрушки!'
        },
        {
          speaker: 'Дружок',
          text: 'Гав-гав! (Радостно прыгает)'
        }
      ],
      choices: [
        {
          id: 'happy',
          title: 'Отлично!',
          price: 0,
          description: '',
          icon: 'heart'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: БЕЗ СТРАХОВКИ — БОЛЬШИЕ РАСХОДЫ И ВОЗМОЖНОСТЬ ПЕРЕИГРАТЬ
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: 'Без страховки',
      bg: 'images/stories/0+/labrador-insurance/vet-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Анна', img: '/images/characters/anna/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Анна',
          text: 'Мы не купили страховку, и пришлось заплатить 3000 рублей за лечение.'
        },
        {
          speaker: 'Соня',
          text: 'Ого, как много... На игрушки теперь не хватит.'
        },
        {
          speaker: 'Анна',
          text: 'В следующий раз обязательно оформим страховку. Хочешь попробовать ещё раз?'
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
          id: 'finish',
          title: 'Закончить историю',
          price: 0,
          description: 'Я всё понял',
          icon: 'eye'
        }
      ],
      nextScene: 0 // возврат на сцену 1 (индекс 0)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 7: ФИНАЛ — УРОК О СТРАХОВКЕ ПИТОМЦА
    // ═══════════════════════════════════════════════════════════
    {
      id: 7,
      title: 'Урок',
      bg: 'images/stories/0+/labrador-insurance/park-bg.png',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Дружок', img: '/images/characters/labrador/image.png', side: 'left' },
        { name: 'Артём', img: '/images/characters/artem/image.png', side: 'right' },
        { name: 'Анна', img: '/images/characters/anna/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Соня',
            text: 'Я поняла! Страховка для Дружка — это очень полезно!'
          },
          {
            speaker: 'Анна',
            text: 'Да, страховка помогает заботиться о питомце без больших трат.'
          },
          {
            speaker: 'Артём',
            text: 'А Дружок теперь здоров и счастлив. Вы с ним лучшие друзья!'
          },
          {
            speaker: 'Дружок',
            text: 'Гав-гав! (Виляет хвостом)'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Соня',
            text: 'Жаль, что мы не купили страховку. Но я запомню этот урок.'
          },
          {
            speaker: 'Анна',
            text: 'Ничего страшного. Теперь ты знаешь, как важно страховать питомца.'
          },
          {
            speaker: 'Артём',
            text: 'В следующий раз обязательно оформим страховку. А пока Дружок всё равно с нами, и это главное.'
          }
        ]
      },
      choices: [
        {
          id: 'done',
          title: 'Завершить',
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
