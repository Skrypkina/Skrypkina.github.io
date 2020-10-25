"use strict";
// Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var symbol = "#";
var len = 7;
var str = "hello";
var num = 3e10;
// number array
var numberArray = [1, 1, 2, 5, 8, 13];
// ore generic type
var numberArray2 = [1, 1, 2, 5, 8, 13];
var worlds = ["hello", "typescript"];
// Tuple array from different data type
var contact = ["larysa", 1234];
// если нужно переопределить переменную
var variable = 45;
variable = "hello world";
variable = [];
// function
//указываем тип данных, которые она вернет void - ничего не возвращает
function sayMyName(name) {
    console.log(name);
}
sayMyName("Larysa");
function sayName(name) {
    return name;
}
console.log(sayName("Denis"));
//never type - когда фенкция возвращает ошибку и никогда не заканчивает свое выполнение
//либо постоянно что-либо делает
function throwError(message) {
    throw new Error(message);
}
function infinit() {
    while (true) { }
}
//теперь этот тип можно указывать для переменных
var login = "admin";
var id1 = "string";
var id2 = 124;
var rect = {
    id: "1234",
    size: {
        width: 20,
        height: 30,
    },
};
//можно написать к какому типу будет относиться данный объект
var rect2 = {};
// or
var rect4 = {};
var rect5 = {
    id: "123",
    size: {
        width: 20,
        height: 20,
    },
    getArea: function () {
        return this.size.width * this.size.height;
    },
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1px solid red",
    marginTop: "2px",
};
// =============ENUM.TS
// позволяет лучше структурировать код, если присутствуют однотипные элементы
// создать ENUM
var Membership;
(function (Membership) {
    // указываем, какие значения будут у данного енума
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
console.log(membership); // 1 - если не задать значения, то енумы присваив значения 0,1,2
//можно получить стороковое значение
var membershipReverse = Membership[2];
console.log(membershipReverse); // Premium
var SosialMedia;
(function (SosialMedia) {
    SosialMedia["VK"] = "VK";
    SosialMedia["FACEBOOK"] = "FACEBOOK";
    SosialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SosialMedia || (SosialMedia = {}));
var social = SosialMedia.INSTAGRAM;
console.log(social); //INSTAGRAM
// =================FUNCTION.ts
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toLocaleUpperCase();
}
// напишем функцию position, у нее необязательные параметры
function position(a, b) {
    if (!a && !b) {
        return { x: 2, b: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log("empty:", position()); //{ x: 2, b: undefined };
console.log("1 param:", position(42)); //{ x: a, y: undefined, default: '42'}
console.log("2 param:", position(10, 15)); //{ x: 10, y: 15 }
// ===============================CLASSES.ts
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: typescript version is " + this.version;
    };
    return Typescript;
}());
//отличия от ес6 классов
// class Car {
//   // поля определяем до конструктора, потом конструктор, потом методы
//   readonly model: string; // это поле можно перезаписать, но только внутри конструктора
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
// идентичная запись, но короче
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
// модификаторы
// 3 вида: протектед, паблик и прайвет
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ""; //доступно в Animal и для всех унаследовавших классов
        this.color = "black"; // если не пишем модификатор, то по умолчанию они все паблик
        // в классе Cat уже нельзя обратиться к методу go()
    }
    // Они доступны для всех инстансов
    // privet можно и функциям задавать
    Animal.prototype.go = function () {
        console.log("go"); // private переменные или методы доступны только в классе, где были определены
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice; // имеем к нему доступ и можем что-то задавать
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
console.log(cat);
//cat.voice - нету доступа, защищенное свойство, можем работать только через функц setVoice()
// =======================АБСТРАКНЫЕ КЛАССЫ
//не во что не компелируются, нужны на этапе разработки для того, чтобы от них наследоваться
//и существуют так же абстрактные методы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
//создадим класс, кот наследуется от компонента и реализуем методы
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Component render");
    };
    AppComponent.prototype.info = function () {
        return "this is info";
    };
    return AppComponent;
}(Component));
//=============GUARDS.TS
//вспомогательные конструкции в тайпскрипте, кот позволяют работать с типами
// пусть будет функция, кот принимает число или строку и в зависимости от типа переменной
//будет разный функционал
function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
// instanceof оператор- проверка принадлежности какого-либо объекта к классу
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = "response header";
        this.result = "response result";
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = "error header";
        this.message = "error message";
    }
    return MyError;
}());
//есть функция, кот обрабатывает одновременно эти 2 класса
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result,
        };
    }
    else {
        return {
            info: res.header + res.message,
        };
    }
}
function setAlertType(type) {
    //.....
}
//можно в функцию передавать эти 3 значения. Если передать что-то другое, будет ошибка
setAlertType("success");
setAlertType("danger");
// setAlertType('woof')// error
// ===================GENERIC.TS
var arrayOfNumbers = [1, 1, 3, 5, 8];
//Array - что это за объект, <number> - из чего он состоит
var arrayOfStrings = ["hello", "larysa"];
// когда одна и та же функция должна работать с разными типами данных
// T[] - подстраиваетя под динамические значения, кот мы передаем
function reverse(array) {
    return array.reverse();
}
console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));
var key = "name"; // работает
key = "age"; // работает
var u1 = "name";
console.log(u1);
// ===============================================
function generateRandomId() {
    return symbol + Math.random().toString(36).substr(2, len);
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        app.innerHTML = generateRandomId();
    }, 1000);
}
