let arrDuplicates = ["php", "Php", "css", "Css","script", "script", "Html", "html", "java"];
document.querySelector("#nine-Button").onclick =
function removeDuplicates() {
    const uniqArr = Array.from(new Set(arrDuplicates.map (_ => _.toLowerCase())));
        const paragraph = document.querySelector('#paragraph');
        paragraph.innerHTML = `Уникальный массив [ ${uniqArr} ]`;
    }
