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
  asyncData(context) {
    return axios.get(`https://blog-nuxt-dbf4b-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: context.params.postId}
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing!')
      this.$store.dispatch('editPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
