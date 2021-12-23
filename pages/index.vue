<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo></Promo>
    <Intro title="My lasts posts: "></Intro>
    <PostsList :posts="postsLoaded"></PostsList>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Promo from "@/components/Promo";
import Contacts from "@/components/Contacts";
import {getters} from "@/store";

export default {
  name: 'IndexPage',
  components: {
    Promo,
    Contacts
  },
  head() {
    let title = 'My SSR Blog!',
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
