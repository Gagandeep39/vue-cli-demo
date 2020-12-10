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

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
