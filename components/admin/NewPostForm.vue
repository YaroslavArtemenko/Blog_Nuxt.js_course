<template>
  <section class="new-post">
    <div class="container">
      <form>
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Description: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>
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
  }
}
</script>

<style scoped>

</style>
