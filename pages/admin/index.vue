<template>
  <PostsList :admin=true :posts="postsLoaded"></PostsList>
</template>

<script>

export default {
  name: 'IndexAdminPage',
  layout: 'admin',
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
