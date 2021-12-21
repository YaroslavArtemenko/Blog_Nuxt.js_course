<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: "></Intro>
    <PostsList :posts="posts"></PostsList>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      posts: []
    }
  }
}
</script>
