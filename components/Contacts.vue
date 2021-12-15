<template>
  <section class="contact">
    <div class="container">
      <h2 class="title"> Contact me! </h2>

      <!--    message-->
      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <!--      name-->
        <AppInput v-model="user.name"> Name:</AppInput>
        <!--      email-->
        <AppInput v-model="user.email" type="email"> Email:</AppInput>
        <!--      textarea-->
        <AppTextArea v-model="user.text"> Text:</AppTextArea>

        <!--      button-->
        <div class="controls">
          <AppButton class="btnWhite"> Submit!</AppButton>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
import Message from "@/components/UI/Message";
import AppButton from "@/components/UI/Controls/Button";
import AppInput from "@/components/UI/Controls/Input";
import AppTextArea from "@/components/UI/Controls/TextArea";

export default {
  name: "Contacts",
  components: {
    Message,
    AppButton,
    AppInput,
    AppTextArea
  },
  data() {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = 'Submited!'
      //Reset
      this.name = ''
      this.email = ''
      this.text = ''
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;

  .title {
    color: #fff;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }

}
</style>
