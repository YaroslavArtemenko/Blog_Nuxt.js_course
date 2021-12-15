<template>
<section class="contact">
  <div class="container">
    <h2 class="title"> Contact me! </h2>
    <form @submit.prevent="onSubmit" class="contact-form">
      <label>Name: </label>
      <input v-model="user.name" type="text">
      <label>Email: </label>
      <input v-model="user.email" type="text">
      <textarea v-model="user.text"></textarea>

<!--      button-->
      <div class="controls">
        <button class="btn btnPrimary"> Submit! </button>
      </div>

    </form>
  </div>
</section>
</template>

<script>
export default {
  name: "Contacts",
  data () {
    return {
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    }
  }
}
</script>

<style scoped>

</style>
