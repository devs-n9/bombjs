// получаем коллекцию объектов с классом field 
var fields = document.getElementsByClassName('field');

// функция по генерации случайного числа
function randomBomb (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// генерируем случайное число от 0 до 3 и записываем в переменную
var bomb = randomBomb(0, fields.length);

// случайному елементу из коллекции присваеваем свойсто status со значанием green 
fields[bomb].status = 'green';

// проходим циклом по каждому елементу
for(var i = 0; i < fields.length; i++){
    
    // подписываем каждый елемент на событие onclick
    fields[i].onclick = function () {
        // this - ссылка на текущий объект
        // если на нажатом объекте есть свойство status со значением green то закрашиваем елемент в зеленый цвет иначе в красный
        if(this.status == 'green'){
            // закрашиваем елемент в зеленый цвет
            this.style.backgroundColor = this.status;
            // через 0.5 сек спросить сыграть еще
            setTimeout(function(){
                if(confirm("Play more?")){
                    // перезагрузить страницу
                    location.reload();
                }
            }, 500);
        }else{
            // закрашиваем елемент в красный цвет
            this.style.backgroundColor = 'red';
           //воспроизводим звуковой файл 
            document.getElementById('bombeffect').play();
        }
    }
}

console.log(bomb);