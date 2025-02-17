export const templates = {
  wabaTemplates : [
    {
      "templateId": "template129",
      "groupId": 'group1',
      "type": "TEXT",
      "title": "Закрытие задачи из-за отсуствия ОС 1",
      "template": "Добрый день!\nНапоминаем о предстоящем платеже на сумму {{1}}, который необходимо внести до {{2}}.\nПожалуйста, подтвердите актуальность этой информации или сообщите, если произошли изменения.\nБудем рады вашему ответу!",
    },
    {
      "templateId": "template149",
      "groupId": 'group1',
      "type": "TEXT",
      "title": "Приветствие 1",
      "template": "Добрый день, {{1}}!\nОтличный день, чтобы {{2}}. Не хотите ли сходить в {{3}}? Проверить {{4}}? Реализовать {{5}}? Все вопросы задавайте в чат {{6}}",
    },
    {
      "templateId": "template159",
      "groupId": 'group3',
      "type": "IMAGE",
      "title": "Фото объекта",
      "template": "Добрый день, {{1}}!\nОтличный день, чтобы {{2}}. Во вложении фото будущего объекта. Как вам?",
    },
    {
      "templateId": "template169",
      "groupId": 'group3',
      "type": "VIDEO",
      "title": "Видеопрезентация",
      "template": "Добрый день, {{1}}!\nОтправляю вам видеопрезентацию нашего проекта. У нас действует специальная акция {{2}}. Сообщите, пожалуйста, о своем решении",
    },
    {
      "templateId": "template179",
      "groupId": 'group3',
      "type": "DOCUMENT",
      "title": "Наш прайс",
      "template": "Добрый день, {{1}}!\nОтправляю вам наш прайс. Возможно вам будет интересна {{2}}. Если будут вопросы, пожалуйста, напишите мне",
    },
    {
      "templateId": "template181",
      "groupId": 'group2',
      "type": "TEXT",
      "title": "Напоминание об оплате",
      "template": "Добрый день, {{1}}!\nНапоминаем о предстоящем платеже на сумму {{2}}, который необходимо внести до {{3}}.\nПожалуйста, подтвердите актуальность этой информации или сообщите, если произошли изменения.\nБудем рады вашему ответу!",
      "buttons": [
        {
          "text": "Оплата по плану",
          "type": "QUICK_REPLY",
        },
        {
          "text": "Перенести на 3 дня",
          "type": "QUICK_REPLY",
        },
        {
          "text": "Перенести на неделю",
          "type": "QUICK_REPLY",
        },
        {
          "text": "Расторгнуть договор",
          "type": "QUICK_REPLY",
        },
      ],
    },
    {
      "templateId": "template182",
      "groupId": 'group2',
      "type": "TEXT",
      "title": "Напоминание об оплате",
      "template": "Добрый день, {{1}}!\nНапоминаем о предстоящем платеже на сумму {{2}}. По вопросам обращайтесь по контактам",
      "buttons": [
        {
          "text": "Спасибо",
          "type": "QUICK_REPLY",
        },
        {
          "text": "Оформить заявку",
          "type": "URL",
        },
        {
          "text": "Позвонить в компанию",
          "type": "PHONE_NUMBER",
        },
      ],
    },
    {
      "templateId": "template183",
      "groupId": 'group3',
      "type": "DOCUMENT",
      "title": "Счёт и напоминание об оплате",
      "template": "Добрый день, {{1}}!\nНапоминаем о предстоящем платеже на сумму {{2}}. По вопросам обращайтесь по контактам",
      "buttons": [
        {
          "text": "Спасибо",
          "type": "QUICK_REPLY",
        },
        {
          "text": "Оформить заявку",
          "type": "URL",
        },
        {
          "text": "Позвонить в компанию",
          "type": "PHONE_NUMBER",
        },
      ],
    },
  ],
  
  groups: [
    {
      groupId: 'group1',
      iconUrl: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=grp1',
      title: 'Ввод',
    },
    {
      groupId: 'group2',
      iconUrl: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=grp2',
      title: 'Кнопки ответа',
    },
    {
      groupId: 'group3',
      iconUrl: 'https://placehold.jp/30/336633/ffffff/64x64.png?text=grp3',
      title: 'Файлы',
    },
  ],
};
