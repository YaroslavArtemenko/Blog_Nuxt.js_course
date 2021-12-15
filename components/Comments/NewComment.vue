<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Name: </label>
        <input v-model="comment.name" type="text">
        <label>Text: </label>
        <textarea v-model="comment.text"></textarea>

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
  name: "NewComment",
  data () {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.comment)
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }

}
</style>
