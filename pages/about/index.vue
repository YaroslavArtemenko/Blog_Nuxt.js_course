<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title"> About my blog: </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>

        <Intro title="Lorem ipsum dolor sit amet"></Intro>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>

        <img src="@/assets/img/about.jpg" alt="">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.</p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPageAbout',
  head() {
    let title = 'About my SSR Blog!',
      descr = 'About my SSR Blog! With Nuxt.js',
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
}
</script>

<style lang="scss">
.about {
  text-align: center;

  p {
    margin-bottom: 10px;
  }
}
</style>
