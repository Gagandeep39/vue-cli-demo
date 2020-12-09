# Vue CLI

- [Vue CLI](#vue-cli)
  - [Deployment](#deployment)
  - [Why do we need](#why-do-we-need)
  - [Vue CLI features](#vue-cli-features)
  - [Setup](#setup)
  - [Files](#files)
  - [Manually Creating Vue Components](#manually-creating-vue-components)
  - [Adding Components](#adding-components)
  - [Props](#props)

## Deployment

- View Deployment at https://gagandeep39.github.io/vue-cli-demo/

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

## Props

- Used to pass data from parent to child
- Steps
  1. Send data as html ttributes eg. name, email-address
  2. In child, add `props: ['name', 'emailAddress']` inside default export to fetch data
  3. email-address autmoatically gets converted to camelcase, hene we use the same in Javascript

```html
<!-- Parent -->
<friend-contact
    name="Gagandeep Singh"
    phone-number="9876543210"
    email-address="test@mail.com"
  >
  </friend-contact>
</ul>
```

```vue
// Child
<template>
  <li>
    <h2>{{ name }}</h2>
  </li>
</template>

<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress'],
};
</script>
```
