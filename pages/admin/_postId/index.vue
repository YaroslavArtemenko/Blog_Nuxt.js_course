<template>
  <NewPostForm
    :postEdit="post"
    @submit="onSubmit"
  ></NewPostForm>
</template>

<script>
import NewPostForm from "@/components/admin/NewPostForm";
import axios from 'axios'

export default {
  name: "IndexAdminPostIdPage",
  components: {NewPostForm},
  layout: 'admin',
  asyncData(contex) {
    return axios.get(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: contex.params.postId}
        }
      })
      .catch(e => contex.error(e))
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing!')
      console.log(post)
    }
  }
}
</script>

<style scoped>

</style>
