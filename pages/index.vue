<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo></Promo>
    <Intro title="My lasts posts: "></Intro>
    <!--    posts-->
    <PostsList :posts="posts"></PostsList>
  </div>
</template>

<script>
import Promo from "@/components/Promo";
import Intro from "@/components/UI/Intro";
import PostsList from "@/components/blog/PostsList";

export default {
  name: 'IndexPage',
  components: {
    Promo,
    Intro,
    PostsList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
        }
      ]
    }
  }
}
</script>

<style>

</style>
