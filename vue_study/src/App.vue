<template>
  <div id="skipMenu">
      <a href="#gnb">메뉴바로가기</a>
      <a href="#chapter2">본문바로가기</a>
  </div>
  <div id="wrap">
    <div class="processbar"></div>
    <appHeader></appHeader>
    <appMain id="chapter1"></appMain>
    <article>
      <appAbout id="chapter2"></appAbout>
      <appProject id="chapter3"></appProject>
    </article>
    <appFooter id="chapter4"></appFooter>
  </div>
</template>

<script>

import appHeader from './components/header.vue'
import appFooter from './components/footer.vue'
import appAbout from './components/about.vue'
import appMain from './components/main.vue'
import appProject from './components/project_pub.vue'

export default {
  name: 'App',

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

// 전체영역 process 
@keyframes process { 
    from { width: 0; }
    to { width: 100%; }
}
  .processbar {
    width: 0;
    height: .3rem;
    background: $color-main-d;
    animation: process auto ease-in-out;
    animation-timeline: scroll(root block);
    position: fixed;
    top: 0;
    z-index: 999999;
}
</style>
