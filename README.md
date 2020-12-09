# Vue CLI

- [Vue CLI](#vue-cli)
  - [Why do we need](#why-do-we-need)
  - [Vue CLI features](#vue-cli-features)
  - [Setup](#setup)
  - [Files](#files)
  - [Manually Creating Vue Components](#manually-creating-vue-components)
  - [Adding Components](#adding-components)

## Why do we need

- CDN uses Content delivery network
- Its not preferred when making a full fledged app
- Certain features might not work properly
- CDN based app requires extra setup for a web server

## Vue CLI features

- Create Components thrugh CLI
- Provides a predefined starting point
- Creates a web server for us
- Overall better development experience
  - Provides auto competion
  - Errors and warnings support
  - Autmatically manage imports
  - Makes code splitting very easy

## Setup

- `npm install -g @vue/cli` Install
- `vue create` Create a vue project
  - Go with the default settins, or customise it if you know what you are doing
  - `vue create .` to create in current directory
  - `npm run serve` Lauch local development server

## Files

- node_modules COntaines all dependencies
- public Contains index.html i.e startigg point of application
- src Vue JS code

## Manually Creating Vue Components

1. Create template tag for html code
2. Create script tag for js code
3. Write the data, methods etc. inside script
4. Export the value
5. Import it in main.js

```vue
<template>
  <div></div>
</template>

<script>
const app = {
  data() {
    return {
      // data
    };
  },
};
export default App from './App.vue'
</script>
```

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

## Adding Components

1. Go to app.js
2. Append `.component('component-name', Component)`
3. Use the component anywhere inside App.vue

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

createApp(App)
  .component('friend-contact', FriendContact)
  .mount('#app');
```

```vue
// Using inside vue 
<template> 
  <friend-contact> </friend-contact>
</template>
```
