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
      console.log('Post added!')
      console.log(post)
    }
  }
}
</script>

<style scoped>

</style>
