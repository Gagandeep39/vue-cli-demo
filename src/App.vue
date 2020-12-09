<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact> </friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'gagan',
          name: 'Gagandeep Singh',
          phone: '9876543210',
          email: 'singh.gagandeep3911@gmail.com',
        },
        {
          id: 'troye',
          name: 'Troye Sivan',
          phone: '9988776655',
          email: 'test@mail.com',
        },
      ],
    };
  },
};
</script>
