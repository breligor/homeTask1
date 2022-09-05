document.querySelector("#seven-Button").onclick =
    function colonOdd(num) {
        let res = '';
        num = prompt('Введите число');
        //массив из числа
        let arr = num.split('');
        //перебор массива с проверкой на нечетность
        for (let i = 0; i < arr.length; i++)
        {
            if ((arr[i] % 2 == true) && (arr[i + 1] % 2 == true))
            {res += arr[i] + ':'}
            else
            {res += arr[i]}
         }
        //вставка на страницу
        let paragraph = document.createElement("p");
        let fifthDiv = document.getElementById('fifth-Div');
        paragraph.textContent = res;
        fifthDiv.append(paragraph);
        paragraph.classList.add('center_p');
}

