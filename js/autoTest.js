// const doMath = function (a, b, callbeck) {
//   const result = callbeck(a, b);

//   console.log(result);
// };

// doMath(5, 10, function (x, y) {
//   return x + y;
// });
// doMath(900, 8, function (x, y) {
//   return x * y;
// });
// doMath(150, 4, function (x, y) {
//   return x % y;
// });
// doMath(235, 60, function (x, y) {
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
