#### Звернемось до документації [electron-vite](https://evite.netlify.app/)

#### Перейдемо в розділ [get started](https://vitejs.dev/guide/)

#### Ініціалізуємо проект:

![[Pasted image 20230401232055.png]]

#### *Коротко про різницю між цими пакетними менеджерами:*

> ***NPM Vs YARN Vs PNPM Comparison***
> - **NPM:** It is bit slower when compared to Yarn and PNPM.
> - **YARN:** Yarn uses the same flatten node_modules directory but is comparable to NPM in regards to speed and installs packages parallely.
> - **PNPM:** PNPM is **3 times faster** and more efficient than NPM.  With both cold and hot cache, PNPM is faster than Yarn.
>
> [Детальніше](https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/)

#### Приклад з pnpm:

![[Pasted image 20230401232413.png]]

#### В залежності від структури проекту обираємо необхідні параметри. На даний момент підтримуються такі шаблони:
| JavaScript                                                                                                 | TypeScript                                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [vanilla](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla) | [vanilla-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla-ts) |
| [vue](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue)         | [vue-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue-ts)         |
| [react](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react)     | [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)     |
| [svelte](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte)   | [svelte-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte-ts)   |
| [solid](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid)     | [solid-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid-ts)     | 

#### Структура шаблону:

![[Pasted image 20230401233653.png]]

```
./src/renderer/        - містить файли проекту (React, Vue ...)
./src/preload/index.ts - файл конфігурації для electron
./src/main/index.ts    - головний файл electron
./src/resources/       - папка для статичних файлів
./src/out/             - папка з ресурсами сбірки
.src/build/            - папка з статичними даними збірки, налаштування безпеки
```

#### Шаблон включає готові скрипти для сбірки проекту

![[Pasted image 20230401234133.png]]

#### Запустимо проект в режимі preview (збірка та запуск)

```
npm run preview
```

#### Результат:

![[Pasted image 20230401233939.png]]