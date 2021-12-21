<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"></Post>
    <Comments :comments="comments"></Comments>
    <NewComment :postId="$route.params.id"></NewComment>
  </div>
</template>

<script>
import axios from "axios";

import Post from "@/components/blog/Post";
import NewComment from "@/components/Comments/NewComment";
import Comments from "@/components/Comments/Comments";

export default {
  name: "IndexPageBlogId",
  components: {
    Post,
    Comments,
    NewComment
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/comments.json`)
    ])
    return {
      post: post.data,
      comments: comments.data
    }
  }
  // data() {
  //   return {
  //     post: {
  //       id: 1,
  //       title: '1 post',
  //       descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n' +
  //         '      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n' +
  //         '      consequat.',
  //       img: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
  //     },
  //     comments: [
  //       {
  //         name: 'Alex',
  //         text: 'Lorem ipsum dolor sit amet, consectetur'
  //       },
  //       {
  //         name: 'Yaro',
  //         text: 'Lorem ipsum dolor sit amet, consectetur'
  //       }
  //     ]
  //   }
  // }

}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    margin-bottom: 16px;
    max-width: 400px;
  }

  p {
    color: #999999;
  }
}

.post-body {
  text-align: left;
}
</style>
