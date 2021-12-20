<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo></Promo>
    <Intro title="My lasts posts: "></Intro>
    <PostsList :posts="posts"></PostsList>
    <Contacts></Contacts>
  </div>
</template>

<script>
import Promo from "@/components/Promo";
import Contacts from "@/components/Contacts";

export default {
  name: 'IndexPage',
  components: {
    Promo,
    Contacts
  },
  asyncData () {

  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    setTimeout(() => {
      this.posts = [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
        }
      ]
    }, 1500)
  }
}
</script>
