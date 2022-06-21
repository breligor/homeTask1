const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let clonedArr = [];
document.querySelector("#third-Button").onclick =
    function copyArr() {
        clonedArr = vegetables.slice();
        //вставка на страницу
        let paragraph = document.createElement("p");
        let thirdDiv = document.getElementById('third-Div');
        paragraph.textContent = 'Копия массива: ' + clonedArr;
        thirdDiv.append(paragraph);
        paragraph.classList.add('center_p');
        }


// Вариант 2 clonedArr =  Array.from(vegetables);
// Вариант 3 clonedArr=vegetables.concat([]);
// Вариант 4 clonedArr = [...vegetables];
// Вариант 5 for(let i=0; i<arr.length; i++){clonedArr[i]=vegetables[i]}
// Вариант 6 clonedArr=vegetables.map(x=>x);
// Вариант 7 clonedArr=vegetables.filter(()=>true);
// Вариант 8 clonedArr = JSON.parse(JSON.stringify(vegetables)); для многомерных*
/* Вариант 9 глубокое копирование/рекурсия
             function deepCopy (newObj, oldObj){
                       for(let prop in oldObj){
                       if(typeof oldObj[prop] == "object" && oldObj[prop] !== null){
                       newObj[prop] = {};
                       deepCopy(newObj[prop], oldObj[prop]);
                       }else{
                       newObj[prop] = oldObj[prop];
                        }
                      }
                   }*/