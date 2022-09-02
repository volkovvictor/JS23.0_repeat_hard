const lang = 'en';

const date = [
   [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
   ],
   [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
   ]
]

if (lang === 'ru') {
   console.log(date[0].join(', '));
} 
if (lang === 'en') {
   console.log(date[1].join(', '));
}

switch (lang) {
   case 'ru':
      console.log(date[0].join(', '));
      break;
   case 'en':
      console.log(date[1].join(', '));
      break;
}

lang === 'ru' ? console.log(date[0].join(', ')) : console.log(date[1].join(', '));

///////////////////

const namePerson = 'Артем';

namePerson === 'Артем' ? console.log('Директор') : 
namePerson === 'Александр' ? console.log('Преподаватель') : console.log('Cтудент')