<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        {{ posts }}
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "@/components/blog/PostPreview";

export default {
  name: "PostsList",
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
