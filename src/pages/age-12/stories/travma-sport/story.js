export default {
  title: 'Падение с бревна',
  category: 'sport',
  budget: 4000,

  scenes: [
    {
      id: 1,
      title: '🤸 Гимнастика',
      bg: 'images/stories/12+/travma-na-sekcii/gym-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Матвей', img: 'images/characters/matvey/matvey.png', side: 'right' },
        { name: 'Артём', img: 'images/characters/artem/artem.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Мария', text: 'Сегодня отрабатываем сложный элемент на бревне. Матвей, подстрахуешь?' },
        { speaker: 'Матвей', text: 'Конечно. Только будь осторожна, оно скользкое после уборки.' },
        { speaker: 'Артём', text: 'Ребята, перед тренировкой хочу напомнить про страховку. У нас есть возможность оформить полис от несчастных случаев для спортсменов.' }
      ],
      choices: [
        { id: 'learnMore', title: 'Узнать подробнее', price: 0, description: 'Что даёт страховка?', icon: 'info' }
      ]
    },
    {
      id: 2,
      title: '🛡️ Страховка спортсмена',
      bg: 'images/stories/12+/travma-na-sekcii/gym-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Артём', img: 'images/characters/artem/artem.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Артём', text: 'Страховка стоит 2500 рублей в год. Если ты получишь травму на тренировке или соревнованиях — перелом, растяжение, ушиб — страховая компания выплатит компенсацию.' },
        { speaker: 'Мария', text: 'А если я упаду просто по неосторожности?' },
        { speaker: 'Артём', text: 'Да, это покрывается, если не было грубого нарушения правил безопасности. Но важно: в полисе должен быть указан именно этот вид спорта — спортивная гимнастика. Иначе откажут.' }
      ],
      choices: [
        { id: 'buyInsurance', title: 'Оформить страховку', price: 2500, description: 'Защитить здоровье', icon: 'shield' },
        { id: 'noInsurance', title: 'Отказаться', price: 0, description: 'Рискнуть', icon: 'cross' }
      ]
    },
    {
      id: 3,
      title: '⚠️ Сложный элемент',
      bg: 'images/stories/12+/travma-na-sekcii/gym-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Матвей', img: 'images/characters/matvey/matvey.png', side: 'right' }
      ],
      dialogues: [
        { speaker: 'Мария', text: 'Я попробую сальто назад. Матвей, лови, если что!' },
        { speaker: 'Матвей', text: 'Я рядом. Давай!' }
      ],
      miniGame: {
        type: 'qte',
        title: 'Удержи равновесие!',
        instruction: 'Быстро нажимай кнопку, чтобы не упасть!'
      },
      dialoguesAfterGame: {
        success: [
          { speaker: 'Мария', text: 'Получилось! Я устояла!' },
          { speaker: 'Матвей', text: 'Отлично! Ты была великолепна.' }
        ],
        fail: [
          { speaker: 'Мария', text: 'Ай! Я подвернула ногу... Больно.' },
          { speaker: 'Матвей', text: 'Держись! Вызову скорую!' }
        ]
      }
    },
    {
      id: 4,
      title: '🏥 В больнице',
      bg: 'images/stories/12+/travma-na-sekcii/hospital-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Матвей', img: 'images/characters/matvey/matvey.png', side: 'right' }
      ],
      dialogues: {
        withProtectionAndFall: [
          { speaker: 'Мария', text: 'У меня растяжение связок. Но врач сказал, что страховка покроет лечение и реабилитацию.' },
          { speaker: 'Матвей', text: 'Хорошо, что мы её оформили. Ты скоро поправишься.' }
        ],
        withProtectionAndSuccess: [
          { speaker: 'Мария', text: 'Обошлось без травмы. Но я рада, что у меня есть страховка — на будущее.' },
          { speaker: 'Матвей', text: 'Это правильный подход. Спорт есть спорт.' }
        ],
        withoutProtectionAndFall: [
          { speaker: 'Мария', text: 'Лечение и восстановление будут стоить дорого... Зачем я отказалась от страховки?' },
          { speaker: 'Матвей', text: 'Не кори себя. Главное — ты жива. Но урок тяжёлый.' }
        ],
        withoutProtectionAndSuccess: [
          { speaker: 'Мария', text: 'Пронесло... Но я понимаю, что могла получить травму и остаться с проблемами.' },
          { speaker: 'Матвей', text: 'Может, всё-таки оформим страховку сейчас?' }
        ]
      },
      choices: [
        { id: 'next', title: 'Дальше', price: 0, description: '', icon: 'arrow' }
      ]
    },
    {
      id: 5,
      title: '💔 Дорогой урок',
      bg: 'images/stories/12+/travma-na-sekcii/hospital-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Матвей', img: 'images/characters/matvey/matvey.png', side: 'right' }
      ],
      available: 'withoutProtectionAndFall',
      dialogues: [
        { speaker: 'Мария', text: 'Я чувствую себя глупо. Могла бы избежать этих расходов.' },
        { speaker: 'Матвей', text: 'Давай представим, что можно всё исправить. Попробуем ещё раз со страховкой?' }
      ],
      choices: [
        { id: 'retry', title: 'Попробовать со страховкой', price: 0, description: 'Вернуться к выбору', icon: 'restart' },
        { id: 'finishSad', title: 'Принять урок', price: 0, description: 'Идти дальше', icon: 'eye' }
      ],
      nextScene: 1
    },
    {
      id: 6,
      title: '📖 Выздоровление',
      bg: 'images/stories/12+/travma-na-sekcii/park-bg.png',
      characters: [
        { name: 'Мария', img: 'images/characters/maria/maria.png', side: 'left' },
        { name: 'Матвей', img: 'images/characters/matvey/matvey.png', side: 'right' }
      ],
      dialogues: {
        withProtection: [
          { speaker: 'Мария', text: 'Спасибо, что был рядом. И спасибо страховке — она правда помогла.' },
          { speaker: 'Матвей', text: 'Главное, что ты идёшь на поправку. А хочешь, когда снимут гипс, сходим в кино?' },
          { speaker: 'Мария', text: '(Улыбается) Договорились. Только без акробатики.' }
        ],
        withoutProtection: [
          { speaker: 'Мария', text: 'Я запомню этот случай навсегда. Страховка — не пустая трата денег.' },
          { speaker: 'Матвей', text: 'Мы вместе справимся. И в следующий раз обязательно оформим полис.' }
        ]
      },
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