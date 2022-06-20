const obj={
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина',
}
document.querySelector("#firstButton").onclick = ()=>
    {
    for (let key in obj) {
        let message= key +' - это '+ obj[key]+'!';
        //вставка на страницу
        let paragraph = document.createElement("p");
        let firstDiv= document.getElementById('firstDiv');
        paragraph.textContent = message;
        firstDiv.append(paragraph);
        paragraph.classList.add('center_p');
    }
}
