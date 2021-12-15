<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PostPreview from "@/components/blog/PostPreview";

export default {
  name: "PostsList",
  components: {PostPreview},
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
