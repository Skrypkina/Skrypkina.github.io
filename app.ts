// Types

const symbol: string = "#";
const len: number = 7;
const str: string = "hello";
const num: number = 3e10;

// number array

const numberArray: number[] = [1, 1, 2, 5, 8, 13];
// ore generic type
const numberArray2: Array<number> = [1, 1, 2, 5, 8, 13];

const worlds: string[] = ["hello", "typescript"];

// Tuple array from different data type

const contact: [string, number] = ["larysa", 1234];

// если нужно переопределить переменную
let variable: any = 45;
variable = "hello world";
variable = [];

// function
//указываем тип данных, которые она вернет void - ничего не возвращает
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Larysa");

function sayName(name: string): string {
  return name;
}
console.log(sayName("Denis"));

//never type - когда фенкция возвращает ошибку и никогда не заканчивает свое выполнение
//либо постоянно что-либо делает

function throwError(message: string): never {
  throw new Error(message);
}

function infinit(): never {
  while (true) {}
}

// создавать свои собственные типы TYPE
// это элиас
type Login = string;
//теперь этот тип можно указывать для переменных

const login: Login = "admin";

// если id либо строка либо число
type ID = string | number;
const id1: ID = "string";
const id2: ID = 124;

type someType = string | null | undefined;

// INTERFACES.TS
// тип для объектов и классов, где указываются какие свойства и функции должны у них быть
// тоже не во что не компилируются и нужны на этапе разработки

interface Rect {
  //только читать
  readonly id: string;
  //необязательный параметр идет с ?
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
};
//можно написать к какому типу будет относиться данный объект

const rect2 = {} as Rect;
// or
const rect4 = <Rect>{};

// НАСЛЕДОВАНИЯ ИНТЕРФЕЙСОВ

interface RectWithArea extends Rect {
  // интерфейс обязывает объект реализ-ть функцию, кот будет считать площадь
  // функция, двоеточие, тип указывается как стрел функция и после стрелочки указывается тип
  //данных, который должен быть возвращен
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// INTERFACE часто называют через большую букву I, от слова интерфейс

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// интерфейс для объекта, у кот будет большое колличество динамических ключей
// можно задать интерфейс этому объекту, но перечислить все css очень тяжело
// можно задать специальный синтаксис

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid red",
  marginTop: "2px",
};

// =============ENUM.TS
// позволяет лучше структурировать код, если присутствуют однотипные элементы

// создать ENUM

enum Membership {
  // указываем, какие значения будут у данного енума
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
console.log(membership); // 1 - если не задать значения, то енумы присваив значения 0,1,2

//можно получить стороковое значение
const membershipReverse = Membership[2];
console.log(membershipReverse); // Premium

enum SosialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SosialMedia.INSTAGRAM;
console.log(social); //INSTAGRAM

// =================FUNCTION.ts

function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toLocaleUpperCase();
}

// есть функционал, когда можно вызывать функцию с разными параметрами и получать разные значения

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

// напишем функцию position, у нее необязательные параметры

function position(a?: number, b?: number) {
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

class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: typescript version is ${this.version}`;
  }
}
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

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

// модификаторы
// 3 вида: протектед, паблик и прайвет

class Animal {
  protected voice: string = ""; //доступно в Animal и для всех унаследовавших классов
  public color: string = "black"; // если не пишем модификатор, то по умолчанию они все паблик
  // Они доступны для всех инстансов
  // privet можно и функциям задавать
  private go() {
    console.log("go"); // private переменные или методы доступны только в классе, где были определены
  }
  // в классе Cat уже нельзя обратиться к методу go()
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice; // имеем к нему доступ и можем что-то задавать
  }
}

const cat = new Cat();
cat.setVoice("test");
console.log(cat.color);
console.log(cat);
//cat.voice - нету доступа, защищенное свойство, можем работать только через функц setVoice()

// =======================АБСТРАКНЫЕ КЛАССЫ
//не во что не компелируются, нужны на этапе разработки для того, чтобы от них наследоваться
//и существуют так же абстрактные методы

abstract class Component {
  // пишем методы, кот будут реализовываться у классов, кот будут наследоваться у этого компонента
  abstract render(): void;
  abstract info(): string;
}

//создадим класс, кот наследуется от компонента и реализуем методы

class AppComponent extends Component {
  render(): void {
    console.log("Component render");
  }
  info(): string {
    return "this is info";
  }
}

//=============GUARDS.TS
//вспомогательные конструкции в тайпскрипте, кот позволяют работать с типами
// пусть будет функция, кот принимает число или строку и в зависимости от типа переменной
//будет разный функционал

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }
  return x.trim();
}

// instanceof оператор- проверка принадлежности какого-либо объекта к классу

class MyResponse {
  header = "response header";
  result = "response result";
}
class MyError {
  header = "error header";
  message = "error message";
}

//есть функция, кот обрабатывает одновременно эти 2 класса

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  //.....
}
//можно в функцию передавать эти 3 значения. Если передать что-то другое, будет ошибка
setAlertType("success");
setAlertType("danger");
// setAlertType('woof')// error

// ===================GENERIC.TS

const arrayOfNumbers: Array<number> = [1, 1, 3, 5, 8];
//Array - что это за объект, <number> - из чего он состоит
const arrayOfStrings: Array<string> = ["hello", "larysa"];

// когда одна и та же функция должна работать с разными типами данных
// T[] - подстраиваетя под динамические значения, кот мы передаем

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));

//  ==============ВСПОМОГАТЕЛЬНЫЕ ОПЕРАТОРЫ

interface Person {
  name: string;
  age: number;
}

//теперь используя интерфейс можно создать отдельный тип, кот будет состоять из ключей
//данного интерфейса

type PersonKeys = keyof Person; // в этом типе находятся значения 'name' | 'age'

let key: PersonKeys = "name"; // работает
key = "age"; // работает
// key='job' //ошибка

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

//хотим воспользоваться User, но создать при этом новый тип, не включающий некоторые поля
// не хотим поле _id и createdAt
type newUser = Exclude<keyof User, "_id" | "createdAt">; // в newUser остались 'name' | 'email'
//какие поля забрать
// есть и другая запись
type newUser1 = Pick<User, "name" | "email">; // какие поля оставить

let u1: newUser = "name";
console.log(u1);

// ===============================================

function generateRandomId() {
  return symbol + Math.random().toString(36).substr(2, len);
}

function main() {
  let app = document.getElementById("app");
  setInterval(() => {
    app.innerHTML = generateRandomId();
  }, 1000);
}
