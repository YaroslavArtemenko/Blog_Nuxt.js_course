<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">Blog</div>

          <ul class="navbar-list">

            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link href="" class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</nuxt-link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      links: [
        {title: 'Home', url: '/'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
