const arr = ['По', 'рзелульаттам', 'илссеовадний', 134, 'одонго', 5667, 'уёчонго', 'неиеемт', 'занчнеия', 123, 'вкокам', 'пряокде', 'рсапожолены', 'бкувы', 'в солве'];
//преобразование массива в строку методом join
document.querySelector("#fourth-Button").onclick = () => {
        const str = arr.join(',');
        //вставка на страницу
        let paragraph1 = document.createElement("p");
        let fourthDiv = document.getElementById('fourth-Div');
        paragraph1.textContent = str;
        fourthDiv.append(paragraph1);
        paragraph1.classList.add('center_p');
    }
//преобразование массива в строку циклом
document.querySelector("#fifth-Button").onclick = () => {
        let str = '';
        for (let i = 0; i < arr.length; i++)
        {str += ',' + arr[i]}
        //вставка на страницу
        let paragraph2 = document.createElement("p");
        let fourthDiv = document.getElementById('fourth-Div');
        paragraph2.textContent = str;
        fourthDiv.append(paragraph2);
        paragraph2.classList.add('center_p');
    }
//преобразование массива в строку через неявное преобразование
document.querySelector("#six-Button").onclick = () =>
        {
        let str = '' + arr; //str = arr.toString();
        //вставка на страницу
        let paragraph3 = document.createElement("p");
        let fourthDiv = document.getElementById('fourth-Div');
        paragraph3.textContent = str;
        fourthDiv.append(paragraph3);
        paragraph3.classList.add('center_p');
    }