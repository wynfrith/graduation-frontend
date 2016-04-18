<script>
import HotTags from './hotTags.vue'
import Recommend from './recommend.vue'
import Profile from './profile.vue'
import PostBtn from './postBtn.vue'

export default {
  components: {
    'hot-tags': HotTags,
    'recommend': Recommend,
    'profile': Profile,
    'post-btn': PostBtn
  }
}

</script>
<template>
  <div class="ui cards">
    <profile></profile>
    <post-btn></post-btn>
    <recommend></recommend>
    <hot-tags><hot-tags>

  </div>

</template>

<style scoped media="screen">


</style>
