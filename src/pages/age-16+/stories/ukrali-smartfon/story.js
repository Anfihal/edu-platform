export default {
  title: 'Пропажа в раздевалке',
  category: 'device',
  budget: 4000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: УТРО В ШКОЛЕ — СОБИРАЮТСЯ ПОСЛЕ ВЫХОДНЫХ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🏫 Школьное утро',
      bg: '/images/stories/16+/ukrali-smartfon/school-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Ребята, смотрите! Родители подарили мне новый айфон на день рождения! Камера просто космос.'
        },
        {
          speaker: 'Максим',
          text: 'Ого, крутой! Только ты бы его не светила так. Слышал, в параллели у кого-то телефон из раздевалки увели.'
        },
        {
          speaker: 'Лев',
          text: 'Да ладно, Макс, не нагнетай. У нас тут не вокзал. Но страховку бы я на такой аппарат оформил.'
        },
        {
          speaker: 'Мария',
          text: 'Кстати, да. Я читала, что «Ингосстрах» запустил полис «Мобильный». Он как раз покрывает кражу.'
        }
      ],
      choices: [
        {
          id: 'discuss',
          title: 'Обсудить страховку',
          price: 0,
          description: '',
          icon: 'shield'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР — СТРАХОВАТЬ ИЛИ НЕТ
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Рискнуть или защитить',
      bg: '/images/stories/16+/ukrali-smartfon/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Лев',
          text: 'Сонь, ну правда. Полис «Мобильный» от «Ингосстраха» стоит около 10% от цены телефона. Зато если украдут — выплатят полную стоимость по чеку. А чек у тебя свежий, телефону неделя.'
        },
        {
          speaker: 'Соня',
          text: 'Ну не знаю... Это же почти четыре тысячи. Может, пронесёт?'
        },
        {
          speaker: 'Лев',
          text: 'Как хочешь. Но я бы на твоём месте не рисковал. Тем более, в полисе есть опция — если нет чека, сумму посчитают по рыночной стоимости.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку (3500₽)',
          price: 3500,
          description: 'Спи спокойно',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Отказаться',
          price: 0,
          description: 'Надеяться на удачу',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: КРАЖА — МИНИ-ИГРА «ЗАМЕТИТЬ ПОДОЗРИТЕЛЬНОЕ»
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '🚨 Пропажа',
      bg: '/images/stories/16+/ukrali-smartfon/locker-room-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Я отошла на пять минут... Рюкзак был в раздевалке. Телефона нет!'
        },
        {
          speaker: 'Максим',
          text: 'Так, спокойно. Ты видела кого-нибудь подозрительного?'
        },
        {
          speaker: 'Мария',
          text: 'Смотрите, камера в коридоре! Может, получится что-то разглядеть.'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Заметить вора!',
        instruction: 'Быстро нажимай кнопку, чтобы разглядеть лицо на записи!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Максим',
            text: 'Есть! Я видел, как парень из параллели крутился у раздевалки. У него и шкафчик рядом!'
          },
          {
            speaker: 'Соня',
            text: 'Надо вызывать полицию и рассказать про него.'
          }
        ],
        fail: [
          {
            speaker: 'Мария',
            text: 'Качество плохое... Лица не разобрать. Но видно, что кто-то заходил.'
          },
          {
            speaker: 'Соня',
            text: 'Что же делать... Звонить в полицию.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РАЗБОРКИ И ПОЛИЦИЯ
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '👮 В участке',
      bg: '/images/stories/16+/ukrali-smartfon/police-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCaught: [ // страховка есть, вора засекли
          {
            speaker: 'Лев',
            text: 'Полиция задержала того парня. Телефон он скинул, но его нашли в подсобке.'
          },
          {
            speaker: 'Соня',
            text: 'Фух... А если бы не нашли? У нас же страховка «Ингосстраха».'
          },
          {
            speaker: 'Лев',
            text: 'Да, пришлось бы писать заявление, прикладывать справку из полиции о краже — и деньги бы вернули.'
          }
        ],
        withProtectionAndMissed: [ // страховка есть, вора не засекли
          {
            speaker: 'Лев',
            text: 'Вора не нашли. Но у тебя же есть страховка!'
          },
          {
            speaker: 'Соня',
            text: 'Да, я уже подала заявление в «Ингосстрах». Они просят справку из полиции о возбуждении дела. Обещают выплату в течение пары недель.'
          }
        ],
        withoutProtectionAndCaught: [ // страховки нет, вора засекли
          {
            speaker: 'Лев',
            text: 'Телефон нашли, но он разбит. Эх, Сонь, если бы не твоя экономия...'
          },
          {
            speaker: 'Соня',
            text: 'Знаю, знаю. Теперь ремонт за свой счёт.'
          }
        ],
        withoutProtectionAndMissed: [ // страховки нет, вора не засекли
          {
            speaker: 'Лев',
            text: 'Телефон не нашли. Дело приостановлено. И денег нет.'
          },
          {
            speaker: 'Соня',
            text: 'Это самый дорогой урок в моей жизни...'
          }
        ]
      },
      choices: [
        {
          id: 'next',
          title: 'Дальше',
          price: 0,
          description: '',
          icon: 'arrow'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ПРЕДЛОЖЕНИЕ ПЕРЕИГРАТЬ (ЕСЛИ БЕЗ СТРАХОВКИ)
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '💸 Дорогой урок',
      bg: '/images/stories/16+/ukrali-smartfon/school-bg.jpg',
      characters: [
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      available: 'withoutProtection',
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Как глупо. Я сэкономила четыре тысячи, а потеряла сорок.'
        },
        {
          speaker: 'Лев',
          text: 'Давай представим, что можно всё отмотать назад. Попробуем ещё раз со страховкой?'
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
          id: 'finishSad',
          title: 'Принять урок',
          price: 0,
          description: 'Идти дальше',
          icon: 'eye'
        }
      ],
      nextScene: 1 // возврат на сцену выбора страховки (индекс 1)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: ФИНАЛ — ВЫВОДЫ О СТРАХОВАНИИ ГАДЖЕТОВ
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '📱 Урок усвоен',
      bg: '/images/stories/16+/ukrali-smartfon/school-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [ // страховка была
          {
            speaker: 'Максим',
            text: 'Ну что, Сонь, убедилась? Страховка «Ингосстраха» — реально полезная штука.'
          },
          {
            speaker: 'Соня',
            text: 'Да, вы были правы. И процедура оказалась несложной: заявление в полицию, справка — и страховая выплатила деньги.'
          },
          {
            speaker: 'Мария',
            text: 'Главное — сохранять чеки и не светить дорогими вещами. А полис пусть будет на всякий случай.'
          }
        ],
        withoutProtection: [ // страховки не было
          {
            speaker: 'Лев',
            text: 'Ну что, осознала? Экономия в четыре тысячи обернулась потерей в десять раз больше.'
          },
          {
            speaker: 'Соня',
            text: 'Осознала. Больше никогда не буду жадничать на страховке. И вам советую.'
          }
        ]
      },
      choices: [
        {
          id: 'finish',
          title: 'Завершить историю',
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