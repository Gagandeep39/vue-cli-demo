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
  - [Mutating props](#mutating-props)
  - [Props Validation](#props-validation)
  - [Dynamic Props](#dynamic-props)
  - [Event Emitter](#event-emitter)
  - [Emit Validation](#emit-validation)

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

createApp(App).component('friend-contact', FriendContact).mount('#app');
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

## Mutating props

- We must never mutate props
- We must not change th value of a prop variable
- Vue uses unidirectional data flow
- Attempt to modify props directly will throw error
- To perform mutation, assign the prop to a new variable nd manipulate this new variable

## Props Validation

- Ensuring all props are provided
- Preent missing of props
- Creating a rule to specify the props and their type are required
- If validation fails, we will get a warning in console

```js
// Replace this with
// props: ['name', 'phoneNumber', 'emailAddress'],
// This
// Prop validation
props: {
  name: String,
  phoneNumber: String,
  emailAddress: String,
},
// Other ways of specifying props
props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      validator: (value) => {
        return value.length === 10;
      },
    },
    emailAddress: String,
  },
```

## Dynamic Props

- We can pass values using `v-bind` or `:`

```html
<friend-contact
  v-for="(friend, index) in friends"
  :key="index"
  :name="friend.name"
  :phone-number="friend.phone"
  :email-address="friend.email"
>
</friend-contact>
```

## Event Emitter

- Child to parent communication
- this.\$emit('event-name', args) is used to emit event
- Listening to event @event-name

```js
// Emitting event
toggleFavourite() {
  this.$emit('toggle-fav', this.id);
 },
```

```html
<!-- Listening -->
<friend-contact
  v-for="(friend, index) in friends"
  :is-favourite="friend.isFavourite"
  @toggle-fav="toggleFavourite"
>
</friend-contact>
<!-- toggleFavourite is a method which updaed the value -->
```

## Emit Validation

- Specify the events that wil be emmited by component
- Useful for documentation purpose
- Makes code readable
- We can either wete the whole method to be eecuted or simply the name to event

```js
// emits: [],
// Ex3cute all event
emits: {
  'toggle-fav': function(id) {
    if (id) return true;
    else console.warn('ID required');
  }
},
```
