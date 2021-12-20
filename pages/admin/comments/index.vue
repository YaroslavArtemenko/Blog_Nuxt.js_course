<template>
  <CommentTable
    :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
  >
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.name">
        <td>
          <span> {{ comment.name }} </span>
        </td>
        <td>
          <span> {{ comment.text }} </span>
        </td>
        <td>
          <span v-if="comment.status" class="status true"> Publish </span>
          <span v-else class="status false"> Hidden </span>
        </td>
      </tr>
    </tbody>
  </CommentTable>
</template>

<script>
import CommentTable from "@/components/admin/CommentTable";

export default {
  name: "IndexAdminCommentsPage",
  components: {CommentTable},
  layout: 'admin',
  data() {
    return {
      comments: [
        {
          name: 'Alex',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          status: true
        },
        {
          name: 'Yaro',
          text: 'Lorem ipsum dolor sit amet, consectetur',
          status: false
        }
      ]
    }
  },
  methods: {
    onSubmit (post) {
      console.log('Post Editing!')
      console.log(post)
    }
  }
}
</script>

<style scoped>

</style>
