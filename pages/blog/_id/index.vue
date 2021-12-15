<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="post">
      <div class="container">

        <!--        header-->
        <div class="post-header">
          <img :src="post.img" :alt="post.title">
          <h1 class="title"> {{ post.title }} </h1>
          <p>{{ post.descr }}</p>
        </div>

        <!--        body-->
        <div class="post-body">
          <p>{{ post.content }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPageBlogId",
  data() {
    return {
      post: {
        id: 1,
        title: '1 post',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
          '      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
          '      consequat.',
        img: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
      },
    }
  }

}
</script>

<style scoped>

</style>
