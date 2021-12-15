<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
