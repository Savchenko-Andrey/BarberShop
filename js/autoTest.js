// ============= map ===============
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// const x2 = (number) => number * 2;
// const xPlus5 = (number) => number + 5;

// const map = (arr, callback) => {
//   const newArr = [];

//   arr.forEach((item) => newArr.push(callback(item)));

//   return newArr;
// };

// // console.log(map(numbers, x2));
// // console.log(map(numbers, xPlus5));
// console.log(map(numbers, (url) => `<a href = '${url}' >${url}<a/>`));
// const doMath = function (a, b, callbeck) {
//   const result = callbeck(a, b);

//   console.log(result);
// };

// doMath(5, 10, function (x, y) {
//   return x + y;
// });
// doMath(2, 8, function (x, y) {
//   return x * y;
// });
// doMath(2, 4, function (x, y) {
//   return x % y;
// });
// doMath(2, 1, function (x, y) {
//   return x - y;
// });

// --------- координаты -----------

// const onGetPositionSuccess = function (position) {
//   console.log("это вызов onGetPositionSuccess");
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// // --- отложенный вызов ---

// const callbeck = function () {
//   console.log("через указаное время сработает вызов");
// };

// setTimeout(callbeck, 2000);

// // ------ фильтр ------

// const filter = function (array, test) {
//   const filterAdArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filterAdArray.push(el);
//     }
//   }

//   return filterAdArray;
// };

// const callbeck1 = function (value) {
//   return value >= 3;
// };

// const callbeck2 = function (value) {
//   return value <= 4;
// };

// const r1 = filter([1, 2, 3, 4, 5], callbeck1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callbeck2);
// console.log(r2);

// ------- замыкание --------

// const fnA = function (parametr) {
//   const innerVariable = "значение внутренней переменной функции fnA";

//   const innerFunction = function () {
//     console.log(parametr);
//     console.log(innerVariable);
//     console.log("это вызов innerFunction");
//   };

//   return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

// ----------------------------------------------------------------------------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 }, // 317 //
//   { name: "Poly", playtime: 469, gamesPlayed: 2 }, // 234   //
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 }, // 230   //
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 }, //241    // = 1023
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return players.playtime % players.gamesPlayed;
// });

// console.log(totalAveragePlaytimePerGame);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// // const averageScore = totalScore / students.length;

// console.log(totalScore);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = [...students].sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// console.log(inAscendingScoreOrder);
// console.log(inDescendingScoreOrder);

// console.log(inAlphabeticalOrder);

// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
