This polyfill allows importing CommonJS libraries from Tampermonkey using @resource
For correct work, it is imperative to add **`@grant GM_getResourceText`** in your _UserScript_  
Usage example
```js
// ==UserScript==
// @name         Your UserScript
// @require      https://github.com/plohoj/userscript-requirejs/releases/download/0.0.1/userscript-require.js
// @resource     requirejs   https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js
// @resource     rxjs        https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.3.3/rxjs.umd.js
// @match        http://localhost:8080/*
// @grant        GM_getResourceText
// ==/UserScript==

require(['rxjs'], (rxjs) => {
    ...
});
```
#### Load _RequireJS_ from _@require_
You can download _RequireJS_ using _@require_. In this case, you must follow the order of import.
```js
// @require      https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js
// @require      https://github.com/plohoj/userscript-requirejs/releases/download/0.0.1/userscript-require.js
```
#### Load _RequireJS_ from _@resource_
If you want to import a _RequireJS_ library from _@resource_, then the name of the resource should be called **`require`** or **`requirejs`**