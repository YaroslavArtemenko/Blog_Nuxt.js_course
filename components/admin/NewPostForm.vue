<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Description: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>

<!--        buttons-->
        <div class="controls">
          <AppButton class="btnDanger" @click="cancel"> Cancel </AppButton>
          <AppButton @click="onSubmit"> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewPostForm",
  data () {
    return {
      post: {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.post)
    },
    cancel () {
      this.$router.push('/admin/')
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>
