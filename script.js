//метод stop.Propagation()- препядствует продвижению события дальше ,но
//на текущем элементе все обрабочики отрабатывают

//метод stopImmediatePropagation() - предотвращает любое всплытие и предотвращает 
//остановку всплытия на текущ элементе
// event.target - "целевой" элемент, на котором произошло событие,ссылка на целевой элемент
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

elem1.addEventListener('click', (event) => {
    console.log(event.target)
});
