export default {
  title: 'Стамбульский попутчик',
  category: 'travel',
  budget: 5000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: АЭРОПОРТ ВЫЛЕТА — НАЧАЛО КОШМАРА
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🛫 Странное начало',
      bg: 'images/stories/16+/puteshestvie/airport-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Наконец-то! Стамбул, жди нас! Я так давно мечтала увидеть Голубую мечеть.'
        },
        {
          speaker: 'Максим',
          text: 'Главное, чтобы без приключений. Хотя... (оглядывается) вам не кажется, что тот мужчина в сером плаще слишком пристально на нас смотрит?'
        },
        {
          speaker: 'Соня',
          text: 'Макс, вечно ты всё драматизируешь. Человек просто ждёт свой рейс.'
        },
        {
          speaker: 'Лев',
          text: 'Кстати, о рейсах. У меня странное предчувствие. Давайте обсудим страховку, пока не поздно.'
        }
      ],
      choices: [
        {
          id: 'insurance',
          title: 'Обсудить страховку',
          price: 0,
          description: 'Подумать о безопасности',
          icon: 'shield'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР СТРАХОВКИ — СТАВКИ СДЕЛАНЫ
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Тревожный выбор',
      bg: 'images/stories/16+/puteshestvie/airport-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Максим',
          text: 'Слушай, Маш, я тут посмотрел страховку для путешественников от «Ингосстраха». Полис покрывает медицинские расходы, если что-то случится, и даже потерю багажа.'
        },
        {
          speaker: 'Мария',
          text: 'Думаешь, стоит? Это же лишние 2000 рублей.'
        },
        {
          speaker: 'Максим',
          text: 'После того, что я видел в новостях про задержки рейсов и пропажи людей... Я бы перестраховался.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку (2000₽)',
          price: 2000,
          description: 'Защитить себя',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Отказаться',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ПРОПАЖА — МИНИ-ИГРА "ЗАМЕТИТЬ СЛЕЖКУ"
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '👀 Пропажа',
      bg: 'images/stories/16+/puteshestvie/airport-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Соня',
          text: 'Ребята... а где Лев? Он только что был здесь.'
        },
        {
          speaker: 'Максим',
          text: 'Что? Его нет уже минут десять. И его рюкзак пропал.'
        },
        {
          speaker: 'Мария',
          text: 'Смотрите! Тот мужчина в плаще идёт к выходу. И у него в руках... это же рюкзак Льва!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Заметить слежку!',
        instruction: 'Быстро нажимай кнопку, чтобы не упустить подозреваемого!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Максим',
            text: 'Я успел его сфотографировать! И вызвал полицию.'
          },
          {
            speaker: 'Мария',
            text: 'Но Льва всё равно нет... Что происходит?'
          }
        ],
        fail: [
          {
            speaker: 'Максим',
            text: 'Он скрылся! Мы его упустили.'
          },
          {
            speaker: 'Соня',
            text: 'И Льва нет. Мне страшно.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РАССЛЕДОВАНИЕ — СТРАХОВКА КАК УЛИКА
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '🔍 Улики',
      bg: '/images/stories/16+/puteshestvie/airport-bg.jpg',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndCaught: [ // страховка есть, слежку заметили
          {
            speaker: 'Максим',
            text: 'Полиция нашла рюкзак Льва в камере хранения. Внутри был его телефон с открытой перепиской... Его шантажировали.'
          },
          {
            speaker: 'Мария',
            text: 'Ужас. Хорошо, что у нас есть страховка — она покрывает не только медицинские расходы, но и юридическую помощь. Мы можем нанять адвоката.'
          }
        ],
        withProtectionAndMissed: [ // страховка есть, слежку упустили
          {
            speaker: 'Максим',
            text: 'Льва нашли без сознания в туалете. Его ударили по голове и украли документы.'
          },
          {
            speaker: 'Мария',
            text: 'Срочно звоним в сервисный центр «Ингосстраха»! Полис покрывает экстренную медицинскую помощь и транспортировку.'
          }
        ],
        withoutProtectionAndCaught: [ // страховки нет, слежку заметили
          {
            speaker: 'Максим',
            text: 'Полиция нашла рюкзак, но без страховки мы не можем быстро нанять адвоката. Придётся разбираться самим.'
          },
          {
            speaker: 'Мария',
            text: 'Это опасно. Но у нас нет выбора.'
          }
        ],
        withoutProtectionAndMissed: [ // страховки нет, слежку упустили
          {
            speaker: 'Максим',
            text: 'Льва нашли, но без страховки все медицинские расходы лягут на нас. А денег почти не осталось.'
          },
          {
            speaker: 'Мария',
            text: 'Мы в ловушке...'
          }
        ]
      },
      choices: [
        {
          id: 'next',
          title: 'Продолжить',
          price: 0,
          description: '',
          icon: 'arrow'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 5: ПРЕСЛЕДОВАНИЕ В СТАМБУЛЕ — МИНИ-ИГРА
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '🏃 Погоня',
      bg: 'images/stories/16+/puteshestvie/istanbul-street-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Мы в Стамбуле, но расследование привело нас в район Базар. За нами следят.'
        },
        {
          speaker: 'Максим',
          text: 'Вижу! Бежим!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Оторваться от погони!',
        instruction: 'Быстро нажимай кнопку, чтобы убежать!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Максим',
            text: 'Ушли! Я заметил, что преследователь говорил по телефону на русском. Это не местные.'
          },
          {
            speaker: 'Мария',
            text: 'Значит, нас преследуют ещё из Москвы...'
          }
        ],
        fail: [
          {
            speaker: 'Максим',
            text: 'Нас догнали... Но они только передали записку: "Не лезьте не в своё дело".'
          },
          {
            speaker: 'Мария',
            text: 'Они знают, кто мы. Это серьёзно.'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: РАЗВЯЗКА — СТРАХОВКА РЕШАЕТ ВСЁ
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '🔓 Разгадка',
      bg: 'images/stories/16+/puteshestvie/istanbul-bg.png',
      characters: [
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'left' },
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [ // страховка была
          {
            speaker: 'Лев',
            text: 'Спасибо, что нашли меня. Эти люди — конкуренты моего отца по бизнесу. Они хотели его запугать.'
          },
          {
            speaker: 'Максим',
            text: 'Хорошо, что у нас была страховка «Ингосстраха». Мы смогли нанять охрану и вернуться домой без потерь.'
          },
          {
            speaker: 'Мария',
            text: 'Это путешествие я запомню надолго. Но теперь я точно знаю: страховка — это не про деньги, а про безопасность.'
          }
        ],
        withoutProtection: [ // страховки не было
          {
            speaker: 'Лев',
            text: 'Простите, что втянул вас. Без страховки нам пришлось тратить все сбережения на решение проблем.'
          },
          {
            speaker: 'Соня',
            text: 'Мы справились, но какой ценой... В следующий раз — только со страховкой.'
          }
        ]
      },
      choices: [
        {
          id: 'finish',
          title: 'Закончить историю',
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