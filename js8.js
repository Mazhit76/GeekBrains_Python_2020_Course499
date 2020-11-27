'use strict'
/*function curry(f) { // curry(f) выполняет каррирование
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// использование
function sum(a, b) {
    return a + b;
}

let carriedSum = curry(sum);

alert(carriedSum(1)(2)); // 3
//_______________________________________________________________________________________
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
};

var myFunc = makeFunc();
myFunc();
var Counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

alert(Counter.value()); /* Alerts 0 */
/*Counter.increment();
Counter.increment();
alert(Counter.value()); /* Alerts 2 */
/*Counter.decrement();
alert(Counter.value()); /* Alerts 1 */






//if (!("a" in window)) {//1. Код внутри условия не отработает потому что "а" не обьявлено
//    var a = 1;//0. Объявленна глобальная переменная, значение еще не присвоено
//}
//alert(a);// а не определено

/*var b = function a(x) {//
    x && a(--x);//
};//Ничего не возвращает


alert(a);// а не определено
*/

/*function a(x) {//*Здесь в функцию передают переменную и замукание на переменную */
/*    return x * 2;
}
alert(a(2));// 4
var a; // 0. объявили глобальную а переменную-значение пока undefined, значение еще не присвоено=>Ошибки нет
//значит ссылки на какой то пока объект нет и замыкания нет

alert(a);
*/
/*
function b(x, y, a) {//В данном случае а здесь локальная переменная , а аргументы мы обращаемся к
    // к аргументам при вызове функции, которые передаются в функцию
    // только один раз при вызове функии
    arguments[2] = 10;
    alert(a);//3
}

b(1, 2, 3);
*/


/*function a() {// 4. Обьявлена функция с именем а переменные ей не переданны, в обасти памяти есть замыкание на
    // переменную а-объект объявленную как функция
    alert(this);
}
a.call(null);//Установили this=null и вызвали объект а
*/

// Описать функцию, которая будет выводить ответ при таких значениях

function curry(f) {
    return function (one) {
        return function (two) {
            return function (three) {
                return f(one, two, three);
            }

        }
    }
}

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}
function four(one, two, three) {
    return one + two + three;
}
let sum = curry(four);
//console.log(sum(3)(6)(4)()); // 13
console.log(sum(3)(6)(4)); // 13


