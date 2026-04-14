// console.log("\n=== Деструктуризация массивов ===");

// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");

// const user = {
//     name: "Nika",
//     age: 18,
//     city: "Волжский",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");

// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }

// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }

// printUserOld(user);
// console.log();
// printUser(user);

// 6.5. Практическое задание

// const product = {
//   name: "Lego",
//   price: 6767,
//   category: "Toys",
//   inStock: true,
// };

// const productName = product.name;
// const productPrice = product.price;
// const productCategory = product.category;
// const productInStock = product.inStock;
// console.log(productName, productPrice, productCategory, productInStock);

// function printProduct({ name, price, category, inStock }) {
//   console.log(`Название: ${name}`);
//   console.log(`Цена: ${price}`);
//   console.log(`Категория: ${category}`);
//   console.log(`В наличии: ${inStock}`);
// }

// printProduct(product);

// console.log("Spread для массивов");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combined = [...arr1, ...arr2];
// console.log("Объединенный массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);

// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//     name: "Timur",
//     age: 18,
// };

// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };

// const fullInfo = { ...person, ...address};
// console.log("Полная информация:", fullInfo);

// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);

// const updated = { ...person, age: 31, occupation: "Developer"};
// console.log("Обновленный объект:", updated);

// console.log("Rest оператор");

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1, 2, 3:", sum(1, 2, 3));
// console.log("Сумма 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;

// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);\


// 7.5. Практическое задание

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const arrAll = [...arr1, ...arr2];
// console.log("Объединенны массив:", arrAll);

// function findMax(...numbers) {
//     return Math.max(...numbers);
// }

// console.log(findMax(...arrAll));


// const obj1 = {
//     name: "Nika",
//     age: 18,
// };

// const obj2 = {
//     city: "Волжкий",
//     street: "40 лет победы",
// };

// const objAll = { ...obj1, ...obj2};
// console.log(objAll);

// import { greet, add, PI } from "./utils.js";
// console.log("Модули");
// console.log(greet("Тимур"));
// console.log("5 + 3 = ", add(5, 3));
// console.log("Значение PI:", PI);

// import { multiply as умножить } from "./utils.js";
// console.log("Умножение:", умножить(4, 7));

// import * as Utils from "./utils.js";
// console.log(Utils.greet("Ника"));
// console.log("Умножение:", Utils.multiply(3, 9));

// import { square, cube, E } from "./math.js";
// console.log("Квадрат числа 3:", square(3));
// console.log("Куб числа 3:", cube(3));
// console.log("Значение E:", E);

// console.log("Промисы");

// const simplePromise = new Promise((resolve, reject) => {
//     const success = true;

//     if (success) {
//         resolve("Операция выполнена успешно!");
//     } else{
//         resolve("Произошла ошибка!");
//     }
// });

// simplePromise
//     .then((result) => console.log("Результат:", result))
//     .catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Прошло ${ms} миллисекунд`);
//         }, ms);
//     });
// }

// delay(1000)
//     .then((message) => console.log(message));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Гвоздева Вероника",
//                     email: "nika@gmail.com",
//                 });
//             } else {
//                 reject("Неверный ID пользователя");
//             }
//         }, 1500);
//     });
// }

// fetchUserData(1)
//     .then((user) => console.log("Пользователь:", user))
//     .catch((error) => console.log("Ошибка", error));

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Шаг 1 завершен"), 500);
//     });
// }

// function step2(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
//     });
// }

// function step3(previousResult) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
//     });
// }

// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Финальный результат:", finalResult))
//     .catch((error) => console.log("Ошибка в цепочке:", error));

// 9.3. Практическое задание

// function checkInventory(product, inStock) {
//     return new Promise((resolve, reject) => {
//         if (inStock) {
//             resolve(`Товар "${product}" есть в наличии`);
//         } else {
//             reject(`Товара "${product}" нет на складе`);
//         }
//     });
// }

// checkInventory("Ноутбук", true)
//     .then((message) => console.log(message))
//     .catch((error) => console.log("Ошибка", error));

// checkInventory("Телефон", false)
//     .then((message) => console.log(message))
//     .catch((error) => console.log("Ошибка", error));

// console.log("Async/Await");

// async function greet() {
//     return "Привет!";
// }

// greet().then((message) => console.log(message));

// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }

// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }

// showWeather();

// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }

// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);

//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }

// getData();

// async function cookDinner() {
//     console.log("Начинаем готовить...");

//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);

//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);

//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);

//     return "Ужин готов!";
// }

// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//     console.log("Готовим все одновременно...");

//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);

//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }

// cookDinnerFast().then((result) => console.log(result));

// async function processOrder() {
//     try {
//         console.log("Начинаем обработку заказа...");

//         const checkStock = await delay(1000).then(() => "Товар в наличии");
//         console.log(checkStock);

//         const calculateCost = await delay(800).then(() => "Стоимость: 10000");
//         console.log(calculateCost);

//         const confirmOrder = await delay(500).then(() => "Заказ подтвержден");
//         console.log(confirmOrder);

//         return "Заказ оформлен";
//     } catch (error) {
//         console.log("Ошибка при оформлении заказа");
//     }
// }

// processOrder().then((result) => console.log(result));

// console.log("Fetch API");

// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }

//         const users = await response.json();

//         console.log("Первые 3 пользователя:");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     } catch (error) {
//         console.log("Ошибка при загрузке пользователей:", error.message);
//     }
// }

// getUsers();

// async function getUserById(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();

//         console.log(`Пользователь #${id}:`);
//         console.log(`Имя: ${user.name}`);
//         console.log(`Город: ${user.address.city}`);
//         console.log(`Компания: ${user.company.name}`);
//     } catch (error) {
//         console.log("Ошибка:", error.message);
//     }
// }

// getUserById(1);

// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержимое моей первой записи в блоге",
//             userId: 1,
//         };

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newPost),
//         });

//         const createdPost = await response.json();
//         console.log("Создана новая запись");
//         console.log("ID:", createdPost.id);
//         console.log("Заголовок:", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }

// createPost();

// console.log("Optional Chaining");

// const user1 = {
//     name: "Тимур",
//     address: {
//         city: "Волжский",
//         street: "Пушкина",
//     },
// };

// const user2 = {
//     name: "Ника",
// };

// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ):", city1); 

// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2);

// const street = user1.address?.street;
// console.log("Улица:", street);

// const admin = {
//     name: "Администратор",
//     permissions: {
//         canDelete: () => true,
//     },
// };

// const guest = {
//     name: "Гость",
// };

// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());

// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Тимур", role: "Developer"},
//         { name: "Ника", role: "Designer"},
//     ],
// };

// const startup = {
//     name: "New Startup",
// };

// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// console.log("Nullish Coalescing");

// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log("value1 || 'default':", value1 || "default");
// console.log("value2 || 'default':", value2 || "default");
// console.log("value3 || 'default':", value3 || "default");

// console.log("value1 ?? 'default':", value1 ?? "default");
// console.log("value2 ?? 'default':", value2 ?? "default");
// console.log("value3 ?? 'default':", value3 ?? "default");
// console.log("value4 ?? 'default':", value4 ?? "default");
// console.log("value5 ?? 'default':", value5 ?? "default");

// function displayUserSettings(settings) {
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;

//     console.log("Настройка пользователя:");
//     console.log("Тема:", theme);
//     console.log("Размер шрифта:", fontSize);
//     console.log("Уведомления:", notifications);
// }

// displayUserSettings({ theme: "dark", fontSize: 16});
// displayUserSettings({ notifications: false});
// displayUserSettings({})

// const apiResponse = {
//     data: {
//         user: {
//             profile: {
//                 settings: {
//                     language: "ru",
//                 },
//             },
//         },
//     },
// };

// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);

// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage);

const order = {
    customer: {
        name: "Nika",
        phone: 88005553535,
        address: {
            city: "Волжский",
            street: "ул. Пушкина",
        }
    },

    shipping: {
        price: 500,
        method: "express",
    },

    payment: {
        status: "paid",
        method: "card"
    }
}

function displayOrder(order) {
    const customerName = order?.customer?.name ?? "Не указано";
    const customerPhone = order?.customer?.phone ?? "Не указан";

    console.log("\nКлиент:");
    console.log(`Имя: ${customerName}`);
    console.log(`Телефон: ${customerPhone}`);

    const city = order?.customer?.address?.city ?? "Не указан";
    const street = order?.customer?.address?.street ?? "Не указана";

    console.log("\nАдрес доставки:")
    console.log(`Город: ${city}`);
    console.log(`Улица: ${street}`);

    const shippingPrice = order?.shipping?.price ?? 0;
    const shippingMethod = order?.shipping?. method ?? "Не выбран";

    console.log("\nДоставка:")
    console.log(`Способ: ${shippingMethod}`);
    console.log(`Стоимость: ${shippingPrice}`);

    const paymentStatus = order?.payment?.status ?? "Не указан";
    const paymentMethod = order?.payment?.method ?? "Не указан";

    console.log("\nОплата:")
    console.log(`Статус: ${paymentStatus}`);
    console.log(`Способ: ${paymentMethod}`);
}

displayOrder(order);