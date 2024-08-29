<template>
<appHeader></appHeader>
<appMain id="chapter1"></appMain>
<article>
    <appAbout id="chapter2"></appAbout>
    <appProject id="chapter3"></appProject>
</article>
<appFooter id="chapter4"></appFooter>
</template>

<script>

import appHeader from '@/components/header.vue'
import appFooter from '@/components/footer.vue'
import appAbout from '@/components/about.vue'
import appMain from '@/components/main.vue'
import appProject from '@/components/project_pub.vue'

export default {
  name: 'TheIndex',

  components: {
    appHeader,
    appFooter,
    appAbout,
    appMain,
    appProject,
  }
}

</script>

<style lang="scss">
  //
</style>
