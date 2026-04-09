export const AGE_CONTENT = {
    '0+': {
        title: 'Выбираем Малыши',
        subtitle: 'Простые истории о защите того, что важно, с милыми животными',
        stories: [
            { id: 1, title: 'Разбился телефон', slug: 'razbilsya-telefon', category: 'device' },
            { id: 2, title: 'Потерялся персонаж', slug: 'poteryalsya-character', category: 'device' },
            { id: 3, title: 'Сломалась игрушка', slug: 'slomalas-igrushka', category: 'property' },
            { id: 4, title: 'Укусила собака', slug: 'ukusila-sobaka', category: 'health' },
        ],
    },
    '12+': {
        title: 'Бунтуем безопасно',
        subtitle: 'Реальные ситуации из жизни, где благодаря страховке вам не дадут подзатыльник',
        stories: [
            { id: 1, title: 'Разбил телефон при падении', slug: 'razbil-telefon', category: 'device' },
            { id: 2, title: 'Отменили поездку в лагерь', slug: 'otmena-poezdki', category: 'travel' },
            { id: 3, title: 'Травма на спортивной секции', slug: 'travma-sport', category: 'sport' },
            { id: 4, title: 'Взломали игровой аккаунт', slug: 'vzlom-akkaunta', category: 'digital' },
        ],
    },
    '16+': {
        title: 'Хайпуем с денюжкой в кармане',
        subtitle: 'Серьёзные ситуации и их решения, с выгодой',
        stories: [
            { id: 1, title: 'Смартфон украли на улице', slug: 'ukrali-smartfon', category: 'theft' },
            { id: 2, title: 'Отмена концерта из-за болезни', slug: 'otmena-kontserta', category: 'event' },
            { id: 3, title: 'Путешествие за границу', slug: 'puteshestvie', category: 'travel' },
            { id: 4, title: 'Травма на экстремальном спорте', slug: 'extreme-sport', category: 'sport' },
        ],
    },
    '18+': {
        title: 'Устроим девстрой, работа это отстой, но бабки будут',
        subtitle: 'Финансовая защита и ответственность, пока смотрим сериальчик',
        stories: [
            { id: 1, title: 'Страхование устройства', slug: 'strakhovanie-ustroystva', category: 'device' },
            { id: 2, title: 'Отмена мероприятия', slug: 'otmena-meropriyatiya', category: 'event' },
            { id: 3, title: 'Страхование путешествия', slug: 'strakhovanie-puteshestviya', category: 'travel' },
            { id: 4, title: 'Защита цифровых активов', slug: 'zashchita-cifrovykh-aktivov', category: 'digital' },
            { id: 5, title: 'Царапины на машине', slug: 'strahovanie-car', category: 'auto' },
        ],
    },
};

export function getAgeContent(ageKey) {
    return AGE_CONTENT[ageKey] || AGE_CONTENT['12+'];
}