import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import AddFriend from './components/AddFriend.vue';

createApp(App)
  .component('friend-contact', FriendContact)
  .component('add-friend', AddFriend)
  .mount('#app');
