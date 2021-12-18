<template>
  <div class="wrapper">
    <Header />
    <Intro title="Admin Page"></Intro>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  components: { Header }
}
</script>
