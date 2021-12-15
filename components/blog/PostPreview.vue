<template>
  <div class="post-preview">
    <img :src="img" :alt="title">
    <div class="post-content">
      <h3 class="title">{{ title }}</h3>
      <p>{{ descr }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview"
}
</script>

<style scoped>

</style>
