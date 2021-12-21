<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"></Post>
    <Comments :comments="comments"></Comments>
    <p>{{ comments }}</p>
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

    let commentsArray = [],
        commentsArrayRes = []

    Object.keys(comments.data).forEach(key => {
      commentsArray.push(comments.data[key])
    })

    for (let i=0; i < commentsArray.length; i++){
      if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
        commentsArrayRes.push(commentsArray[i])
      }
    }
    return {
      post: post.data,
      comments: commentsArrayRes
    }
  }
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
