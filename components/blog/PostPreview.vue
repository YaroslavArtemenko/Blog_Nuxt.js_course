<template>
  <div class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title">{{ post.title }}</h3>
      <p>{{ post.descr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.post-preview {
  width: 33%;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
  img {
    margin-bottom: 16px;
  }
  .post-content {
    p {
      color: #999999;
    }
  }
}
</style>
