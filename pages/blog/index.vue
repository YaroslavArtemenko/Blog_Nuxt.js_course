<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "></Intro>
    <PostsList :posts="postsLoaded"></PostsList>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    let title = 'My Blog Page!',
      descr = 'My SSR Blog! With Nuxt.js',
      type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ]
    }
  },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
