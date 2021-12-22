<template>
  <no-ssr>
    <CommentTable
      :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
    >
      <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>
          <span> {{ comment.name }} </span>
        </td>
        <td>
          <span> {{ comment.text }} </span>
        </td>
        <td>
          <span v-if="comment.publish" class="status true"> Publish </span>
          <span v-else class="status false"> Hidden </span>
        </td>
        <td>
          <span @click="changeComment(comment)" class="link"> Change Status </span>
        </td>
        <td>
          <span @click="deleteComment(comment.id)" class="link"> Delete </span>
        </td>
      </tr>
      </tbody>
    </CommentTable>
  </no-ssr>
</template>

<script>
import axios from "axios";

import CommentTable from "@/components/admin/CommentTable";

export default {
  name: "IndexAdminCommentsPage",
  components: {CommentTable},
  layout: 'admin',
  data() {
    return {
      comments: []
    }
  },
  created() {
    axios
      .get(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/comments.json`)
      .then(res => {
        let commentsArray = []
        Object.keys(res.data).forEach(key => {
          const comment = res.data[key]
          commentsArray.push({...comment, id: key})
        })
        this.comments = commentsArray
      })
  },
  methods: {
    changeComment(comment) {
      comment.publish = !comment.publish
      console.log(comment)
      // axios
      //   .put(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts/${comment.id}.json`, comment)
    },
    deleteComment(id) {
      console.log(`Delete Comment id - ${id}`)
    }
  }
}
</script>

<style scoped>

</style>
