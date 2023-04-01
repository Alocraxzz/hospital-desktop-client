#### Звернемось до документації [electron-vite](https://evite.netlify.app/)

#### Перейдемо в розділ [get started](https://vitejs.dev/guide/)

#### Ініціалізуємо проект

With NPM

```
npm create @quick-start/electron
```

With Yarn

```
yarn create @quick-start/electron
```

With PNPM

```
pnpm create @quick-start/electron
```

#### *Коротко про різницю між цими пакетними менеджерами*

> ***NPM Vs YARN Vs PNPM Comparison***
> - **NPM:** It is bit slower when compared to Yarn and PNPM.
> - **YARN:** Yarn uses the same flatten node_modules directory but is comparable to NPM in regards to speed and installs packages parallely.
> - **PNPM:** PNPM is **3 times faster** and more efficient than NPM.  With both cold and hot cache, PNPM is faster than Yarn.
>
> [**Детальніше**](https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/)

#### Приклад з pnpm

With PNPM

```
pnpm create @quick-start/electron
```

Then follow the prompts!

```
✔ Project name: … <electron-app>
✔ Select a framework: › vue
✔ Add TypeScript? … No / Yes
✔ Add Electron updater plugin? … No / Yes
✔ Enable Electron download mirror proxy? … No / Yes

Scaffolding project in ./<electron-app>...
Done.
```

#### В залежності від структури проекту обираємо необхідні параметри. На даний момент підтримуються такі шаблони
| JavaScript                                                                                                 | TypeScript                                                                                                       |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [vanilla](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla) | [vanilla-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vanilla-ts) |
| [vue](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue)         | [vue-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/vue-ts)         |
| [react](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react)     | [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)     |
| [svelte](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte)   | [svelte-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/svelte-ts)   |
| [solid](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid)     | [solid-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/solid-ts)     | 

#### Структура шаблону

```
./src/renderer/        - містить файли проекту (React, Vue ...)
./src/preload/index.ts - файл конфігурації для electron
./src/main/index.ts    - точка входу для electron
./src/resources/       - папка для статичних файлів
./src/out/             - папка з ресурсами сбірки
.src/build/            - папка з статичними даними збірки, налаштування безпеки
```

#### Шаблон включає готові скрипти для сбірки проекту

```js
"scripts": {  
  "format": "prettier --write .",  
  "lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",  
  "typecheck:node": "tsc --noEmit -p tsconfig.node.json --composite false",  
  "typecheck:web": "tsc --noEmit -p tsconfig.web.json --composite false",  
  "typecheck": "npm run typecheck:node && npm run typecheck:web",  
  "start": "electron-vite preview",  
  "dev": "electron-vite dev",  
  "build": "npm run typecheck && electron-vite build",  
  "postinstall": "electron-builder install-app-deps",  
  "build:win": "npm run build && electron-builder --win --config",  
  "build:mac": "electron-vite build && electron-builder --mac --config",  
  "build:linux": "electron-vite build && electron-builder --linux --config"  
},
```
