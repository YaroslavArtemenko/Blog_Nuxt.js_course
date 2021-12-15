<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">
        <!--        name-->
        <AppInput v-model="comment.name"> Name:</AppInput>
        <!--        textarea-->
        <AppTextArea v-model="comment.text"> Text:</AppTextArea>

        <!--      button-->
        <div class="controls">
          <AppButton> Submit!</AppButton>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button";
import AppInput from "@/components/UI/Controls/Input";
import AppTextArea from "@/components/UI/Controls/TextArea";

export default {
  name: "NewComment",
  components: {
    AppButton,
    AppInput,
    AppTextArea
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
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
