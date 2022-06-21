const thisWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.querySelector("#eight-Button").onclick = () =>
{
const day = document.querySelector('#day'); //находим абзац, где будет находиться список дней недели
const today = new Date().getDay() - 1; //сегодняшний день
for (let i = 0; i < 7; i++) {
      i === today ?
       day.innerHTML += `<i>${thisWeek[i]}</i><br>`:
       day.innerHTML += `${thisWeek[i]}<br>`;
}
}