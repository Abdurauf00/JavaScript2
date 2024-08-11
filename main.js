// Условие

// == не строгое сравнение проверка на тип значение

// === строгое сравнение проверка на тип данных и значение
//  if(1==='1') {
//     console.log('Все работает');
//  }else{
//     console.log('Не работает'); 
//  }




// N1


var first = +prompt('Введите свой возраст')
 if (first <1 ){
    alert('Что-то пошло не так')
}
else if(first <=18){
    alert('Вы еще молоды, Вам нужно учиться')
}else if (first <=50 ){
    alert('Вам нужно работать')
}else if (first <=59 ){
    alert('Вам скоро на пенсию')
}else if (first <=100 ){
    alert('Вы пенсионер')
}else{
    alert('Что-то пошло не так')
}

 
// N2


var clock = +prompt ('Введите время')

switch (clock) {
    case 0:
            alert('12 часов ночи')
        break;
    case 1:
             alert('Час ночи')   
        break; 
    case 2:
             alert('2 часа ночи')   
        break; 
    case 3:
            alert('3 часа ночи')   
        break; 
    case 4:
            alert('4 часа ночи')   
        break; 
    case 5 :
        alert('5 часов ночи')   
        break; 
    case 6:
            alert('6 часов ночи')   
        break; 
    case 7:
            alert('7 часов утра')
        break;
    case 8:
             alert('8 часов утра')   
        break; 
    case 9:
             alert('9 часов утра')   
        break; 
    case 10:
            alert('10 часов утра')   
        break; 
    case 11:
            alert('11 часов дня')   
        break; 
    case 12 :
        alert('12 часов дня')   
        break; 
    case 13:
            alert('1 час дня')   
        break; 
    case 14:
            alert('2 часа дня')
        break;
    case 15:
             alert('3 часа дня')   
        break; 
    case 16:
             alert('4 часа дня')   
        break; 
    case 17:
            alert('5 часов дня')   
        break; 
    case 18:
            alert('6 часов вечера')   
        break; 
    case 19 :
        alert('7 часов вечера')   
        break; 
    case 20:
            alert('8 часов вечера')   
        break; 
    case 21:
            alert('9 часов вечера')   
        break; 
    case 22 :
        alert('10 часов вечера')   
        break; 
    case 23:
            alert('11 часов вечера')   
        break; 
    default:
        alert('Такого времени нет')
        break;
}


// N3


 var one  = +prompt ('Введите первое число')
 var two  = +prompt ('Введите второе число')
 var three  = +prompt ('Введите третье число')
 
 if ((one < two && two > three && three < one) || (one > two && two < three && one < three)) { 
    alert ('Среднее число: ' +one) 
  } else if((one < two && two < three && one < three) || (one > two && three < two && three < one)) { 
    alert ('Среднее число: ' + two) 
  } else if ((one > two && two < three && one > three) || (one < two && two > three && one < three) ){
    alert ('Среднее число: ' + three) 
  }else{ 
    alert('Что-то пошло не так')
  }

   
  








