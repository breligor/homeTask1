const obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина',
}
document.querySelector("#first-Button").onclick = () =>
{
    for (let key in obj) {
        let message = key + ' - это ' + obj[key] + '!';
        //вставка на страницу
        let paragraph = document.createElement("p");
        let firstDiv = document.getElementById('first-Div');
        paragraph.textContent = message;
        firstDiv.append(paragraph);
        paragraph.classList.add('center_p');
    }
}
