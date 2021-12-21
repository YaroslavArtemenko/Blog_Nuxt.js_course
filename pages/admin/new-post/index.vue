<template>
  <NewPostForm @submit="onSubmit"></NewPostForm>
</template>

<script>
import NewPostForm from "@/components/admin/NewPostForm";

export default {
  name: "IndexAdminNewPost",
  components: {NewPostForm},
  layout: 'admin',
  methods: {
    onSubmit (post) {
      // console.log('Post added!')
      // console.log(post)
      this.$store.dispatch('addPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
