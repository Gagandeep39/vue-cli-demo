<template>
  <li>
    <h2>{{ name }} {{ fav ? '\u272d' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button> |
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress'],
  // Prop validation
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
    isFavourite: Boolean,
  },
  data: function() {
    return {
      fav: this.isFavourite,
      detailsAreVisible: false,
      friend: {
        id: 'gagan',
        name: 'Gagandeep Singh',
        phone: '9876543210',
        email: 'singh.gagandeep@gmail.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.fav = !this.fav;
    },
  },
};
</script>

<style></style>
