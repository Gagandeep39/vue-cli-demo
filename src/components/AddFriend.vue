<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" required />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" v-model="phone" required />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email" required />
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('add-contact', this.name, this.phone, this.email);
    },
  },
};
</script>

