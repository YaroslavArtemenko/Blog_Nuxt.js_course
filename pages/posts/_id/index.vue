<template>
  <h1>post id is: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate ({params}) {
    //Number ! (check route on number)
    return /^\d+$/.test(params.id)
  }
}
</script>

<style scoped>

</style>
