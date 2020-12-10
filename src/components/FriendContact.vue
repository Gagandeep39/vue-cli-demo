<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '\u272d' : '' }}</h2>
    <button @click="toggleFavourite">Toggle Favourite </button> |
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
  // Specify all events
  // emits: [],
  // Ex3cute all event
  emits: {
    'toggle-fav': function(id) {
      if (id) return true;
      else console.warn('ID required');
    }
  },
  props: {
    id: String,
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
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-fav', this.id);
    },
  },
};
</script>

<style></style>
