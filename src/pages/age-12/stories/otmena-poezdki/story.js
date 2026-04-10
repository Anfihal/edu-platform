export default {
  title: 'Отмена поездки',
  category: 'travel',
  budget: 5000,

  scenes: [
    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 1: СБОРЫ — КОМПАНИЯ МЕЧТАЕТ О МОРЕ
    // ═══════════════════════════════════════════════════════════
    {
      id: 1,
      title: '🌊 Планы на лето',
      bg: 'images/stories/12+/otmena-poezdki/room-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' },
        { name: 'Соня', img: '/images/characters/sofia/image.png', side: 'right' },
        { name: 'Лев', img: '/images/characters/lev/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Ребята, через неделю мы едем в лагерь на море! Я уже вижу эти волны...'
        },
        {
          speaker: 'Максим',
          text: 'Да! Там будут дискотеки, спорт и куча новых друзей.'
        },
        {
          speaker: 'Соня',
          text: 'А я взяла с собой кучу нарядов для фотосессий на закате.'
        },
        {
          speaker: 'Лев',
          text: 'Главное — не забыть крем от загара. Помните, как я сгорел в прошлом году?'
        }
      ],
      choices: [
        {
          id: 'pack',
          title: 'Продолжить сборы',
          price: 0,
          description: '',
          icon: 'backpack'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 2: ВЫБОР СТРАХОВКИ ПУТЕШЕСТВЕННИКА
    // ═══════════════════════════════════════════════════════════
    {
      id: 2,
      title: '🛡️ Страховка для поездки',
      bg: 'images/stories/12+/otmena-poezdki/room-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Артём', img: '/images/characters/artem/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Артём',
          text: 'Ребята, перед поездкой нужно решить вопрос со страховкой. Это стоит 3000 рублей с человека.'
        },
        {
          speaker: 'Мария',
          text: 'А зачем она? Мы же просто едем в лагерь.'
        },
        {
          speaker: 'Артём',
          text: 'Страховка путешественника поможет, если поездка отменится по уважительной причине: болезнь, травма, проблемы с транспортом. Вам вернут деньги.'
        }
      ],
      choices: [
        {
          id: 'buyInsurance',
          title: 'Купить страховку',
          price: 3000,
          description: 'Защитить поездку',
          icon: 'shield'
        },
        {
          id: 'noInsurance',
          title: 'Сэкономить',
          price: 0,
          description: 'Рискнуть',
          icon: 'cross'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 3: ПЛОХИЕ НОВОСТИ — МИНИ-ИГРА "УДЕРЖАТЬ ПЛАНЫ"
    // ═══════════════════════════════════════════════════════════
    {
      id: 3,
      title: '⚠️ Неожиданность',
      bg: 'images/stories/12+/otmena-poezdki/storm-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Максим, ты слышал? На море надвигается ураган! Лагерь могут закрыть.'
        },
        {
          speaker: 'Максим',
          text: 'Этого не может быть! Мы так долго ждали эту поездку!'
        }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержи надежду!',
        instruction: 'Быстро нажимай кнопку, чтобы удержать хорошие новости!'
      },
      dialoguesAfterGame: {
        success: [
          {
            speaker: 'Мария',
            text: 'Ура! Ураган прошёл стороной! Лагерь работает!'
          },
          {
            speaker: 'Максим',
            text: 'Фух, повезло... Но всё равно страшно, что планы могли рухнуть.'
          }
        ],
        fail: [
          {
            speaker: 'Мария',
            text: 'Всё пропало... Лагерь закрыт из-за урагана. Поездка отменяется.'
          },
          {
            speaker: 'Максим',
            text: 'Я не могу поверить... Мы потеряли деньги?'
          }
        ]
      }
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 4: РАЗВЯЗКА В ЗАВИСИМОСТИ ОТ СТРАХОВКИ И РЕЗУЛЬТАТА
    // ═══════════════════════════════════════════════════════════
    {
      id: 4,
      title: '📞 Звонок организатору',
      bg: '/images/stories/12+/otmena-poezdki/room-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Артём', img: '/images/characters/artem/image.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndTripCancelled: [ // страховка есть, поездка отменена
          {
            speaker: 'Мария',
            text: 'Артём, что нам делать? Лагерь отменили.'
          },
          {
            speaker: 'Артём',
            text: 'Не волнуйтесь, у нас страховка от невыезда. Мы вернём почти все деньги!'
          }
        ],
        withProtectionAndTripGoes: [ // страховка есть, поездка состоится
          {
            speaker: 'Мария',
            text: 'Мы едем! Но страховка всё равно пригодится, если что-то случится в пути.'
          },
          {
            speaker: 'Артём',
            text: 'Правильно мыслишь. Страховка — это спокойствие.'
          }
        ],
        withoutProtectionAndTripCancelled: [ // страховки нет, поездка отменена
          {
            speaker: 'Мария',
            text: 'Артём, всё пропало... И денег не вернут.'
          },
          {
            speaker: 'Артём',
            text: 'К сожалению, без страховки мы потеряем почти всю сумму. Это грустный урок.'
          }
        ],
        withoutProtectionAndTripGoes: [ // страховки нет, поездка состоится
          {
            speaker: 'Мария',
            text: 'Повезло, что ураган прошёл мимо. Но я уже поняла, как рискованно путешествовать без страховки.'
          },
          {
            speaker: 'Артём',
            text: 'В следующий раз обязательно оформим.'
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
    // СЦЕНА 5: ВЕТВЛЕНИЕ — ЕСЛИ ПОЕЗДКА ОТМЕНЕНА И СТРАХОВКИ НЕТ, ПРЕДЛАГАЕМ ПЕРЕИГРАТЬ
    // ═══════════════════════════════════════════════════════════
    {
      id: 5,
      title: '💸 Горький опыт',
      bg: 'images/stories/12+/otmena-poezdki/room-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      available: 'withoutProtectionAndTripCancelled',
      dialogues: [
        {
          speaker: 'Мария',
          text: 'Мы потеряли почти все деньги... Так обидно.'
        },
        {
          speaker: 'Максим',
          text: 'Может, в другой раз мы поступим умнее. Хочешь попробовать заново со страховкой?'
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
          title: 'Закончить',
          price: 0,
          description: 'Усвоить урок',
          icon: 'eye'
        }
      ],
      nextScene: 1 // возврат на сцену выбора страховки (индекс 1)
    },

    // ═══════════════════════════════════════════════════════════
    // СЦЕНА 6: ФИНАЛ — ВЫВОДЫ И РОМАНТИЧЕСКАЯ НОТА
    // ═══════════════════════════════════════════════════════════
    {
      id: 6,
      title: '📖 Итоги',
      bg: 'images/stories/12+/otmena-poezdki/beach-bg.png',
      characters: [
        { name: 'Мария', img: '/images/characters/maria/image.png', side: 'left' },
        { name: 'Максим', img: '/images/characters/maksim/image.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          {
            speaker: 'Мария',
            text: 'Хорошо, что мы оформили страховку. Теперь можно спокойно планировать новые приключения!'
          },
          {
            speaker: 'Максим',
            text: 'И знаешь, Мария, даже если поездка отменилась, главное — мы вместе.'
          },
          {
            speaker: 'Мария',
            text: '(Краснеет) Ты прав. Давай просто погуляем по городу?'
          }
        ],
        withoutProtection: [
          {
            speaker: 'Мария',
            text: 'Жаль, что мы не купили страховку. Но урок усвоен.'
          },
          {
            speaker: 'Максим',
            text: 'Ничего, в следующий раз будем умнее. А сейчас... может, сходим в кино?'
          }
        ]
      },
      choices: [
        {
          id: 'finish',
          title: 'Конец',
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