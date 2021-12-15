<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo></Promo>
    <Intro title="My lasts posts: "></Intro>
  </div>
</template>

<script>
import Promo from "@/components/Promo";
import Intro from "@/components/UI/Intro";

export default {
  name: 'IndexPage',
  components: {
    Promo,
    Intro
  }
}
</script>

<style>

</style>
