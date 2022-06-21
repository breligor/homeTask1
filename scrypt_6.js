const thisWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const sixDiv = document.getElementById('six-Div');

document.querySelector("#eight-Button").onclick = () => {
    const today = new Date().getDay() - 1; //сегодняшний день

    thisWeek.forEach ((item, index) => {
        let p = document.createElement ('p');
        if (index === today) {
            p.style.fontStyle = 'italic';
            p.textContent = thisWeek [index];
        }
        else {
            p.textContent = thisWeek[index];
        }
        sixDiv.append(p);
    })
}
