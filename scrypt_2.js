const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.querySelector("#secondButton").onclick = ()=>
    {
        for (let i=0; i<7; i++)
        {   //вставка на страницу
            let paragraph = document.createElement("p");
            let secondDiv= document.getElementById('secondDiv');
            paragraph.textContent = week[i];
            secondDiv.append(paragraph);
            paragraph.classList.add('center_p');
            //выходные жирным
            if ((i===5) || (i===6)) {
               paragraph.classList.add('paragraph-fs');
            }
        }
    }