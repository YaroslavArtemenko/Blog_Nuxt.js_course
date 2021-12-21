<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "></Intro>
    <PostsList :posts="postsLoaded"></PostsList>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
