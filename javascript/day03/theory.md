# Day 03 — Итоги: объекты, деструктуризация, async

## Объекты — основы

```js
const testCase = { name: "login", priority: "high" };

console.log(testCase.name);     // dot notation
console.log(testCase["name"]);  // bracket notation — нужен для динамического ключа

testCase.status = "passed";     // добавить/изменить свойство
delete testCase.priority;       // удалить свойство
```

## Деструктуризация объектов

```js
const { name, status } = testCase;
```
Создаёт переменные с именами, совпадающими с ключами объекта. Порядок не важен, важны имена.

**Default-значение** (если поля может не быть):
```js
const { browser, headless = false } = config;
```

**Переименование** (чтобы избежать конфликта имён или дать более понятное имя):
```js
const { name: testName, status: testStatus } = testCase;
```

**Вложенная деструктуризация:**
```js
const { viewport: { width, height } } = config;
```

## Деструктуризация массивов

```js
const [username, password] = credentials;
```
Здесь важен **порядок**, а не имена. Пропуск элемента: `const [first, , third] = arr;`.

## Spread — разворачивает объект/массив

```js
const finalConfig = { ...defaultSettings, ...overrides };
```
Более поздние свойства перезаписывают более ранние с тем же именем — порядок аргументов важен. Работает и с массивами: `[...oldArray, newItem]`. Исходный объект/массив не меняется.

## Rest — собирает "остальное" в массив

```js
const [first, ...rest] = ["login", "logout", "checkout"];
// first = "login", rest = ["logout", "checkout"]
```

## Async JavaScript

### Синхронный vs асинхронный код
Обычный код выполняется строка за строкой. Операции с непредсказуемым временем (запрос к серверу, таймер) выполняются асинхронно — код идёт дальше, не дожидаясь их.

### Event Loop
JS однопоточный. Весь синхронный код выполняется в **call stack**. Асинхронные колбэки (`setTimeout` и т.п.) ждут в **очереди**, пока call stack полностью не опустеет — даже `setTimeout(fn, 0)` выполнится только после всего синхронного кода.

### Promise
Обёртка над асинхронной операцией с тремя состояниями: `pending` → `fulfilled` (через `resolve`) или `rejected` (через `reject`). Состояние меняется **один раз и необратимо** — после первого `resolve`/`reject` все последующие вызовы игнорируются.

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) resolve("done");
        else reject("error");
    }, 1000);
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
```

### `async`/`await`
Синтаксис поверх promises, делает асинхронный код похожим на синхронный.

```js
async function runCheck() {
    try {
        const result = await checkServerStatus(); // ждёт, кладёт готовое значение
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```
- `async` функция всегда возвращает Promise
- `await` работает только внутри `async`-функции
- `await` внутри цикла (`for...of`) выполняет асинхронные операции **последовательно**, одну за другой — следующая не начнётся, пока не завершится текущая
- `try/catch` — обработка ошибок вместо `.catch()`
