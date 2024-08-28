<template>
  <header :class="{ 'head-fix': headerFix }">
    <h1 class="none">헤더입니다</h1>
    <div class="h_inner">
      <a href="" class="logo"></a>
      <nav>
        <ul>
          <li v-for="(item, i) in navData" :key="i" @click="scrollToSection(i + 1)">{{ item }}</li>
        </ul>
      </nav>
      <button class="col-tog">
          <i>
              <img src="../assets/img/mode-sun.svg" alt="">
              <img src="../assets/img/mode-moon.svg" alt="">
          </i>
      </button>
      <button class="menu-tog">
          <i></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  data() {
    return {
      navData: ['HOME', 'ABOUT', 'PROJECT', 'CONTACT'],
      winSc: 0,
      headerFix: false,
    };
  },
  methods: {
    scrollToSection(index) {
      const section = document.querySelector(`#chapter${index}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > this.lastScrollY && currentScrollY > 0) {
        this.headerFix = true;
      } else if (currentScrollY < this.lastScrollY) {
        this.headerFix = false;
      }
      this.lastScrollY = currentScrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // 이벤트 리스너 등록
  },
  beforeUnmount() { // Vue 3에서는 beforeUnmount 사용
    window.removeEventListener('scroll', this.handleScroll); // 이벤트 리스너 해제
  }
};
</script>

<style lang="scss">

</style>
