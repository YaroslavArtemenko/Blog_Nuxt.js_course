<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview
          v-for="post in posts"
          :key="post.id"
          :admin="admin"
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
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
