const array1 = [5, 2, 1, -10, 8];
const array2 = [5, 2, 1, -9, 3, 7];
document.querySelector("#ten-Button").onclick =
function union () {
    let uniqArr = Array.from(new Set([...array1, ...array2]));
    const paragraph = document.querySelector('#text');
    paragraph.innerHTML = `Уникальный массив [ ${uniqArr} ]`;
}