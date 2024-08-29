<template>
  <div id="skipMenu">
      <button @click.prevent="focusMenu">메뉴바로가기</button>
      <button @click.prevent="GoBodyText">본문바로가기</button>
  </div>
  <div class="processbar"></div>
  <header :class="{ 'head-fix': headerFix }">
    <h1 class="none">HEADER</h1>
    <div class="h_inner">
      <router-link to="/" class="logo" target="_blank"></router-link>
      <nav>
        <ul>
          <li :id="i === 0 ? 'gnb':null" v-for="(item, i) in navData" :key="i" @click="scrollToSection(i + 1)" tabindex="0">{{ item }}</li>
        </ul>
      </nav>
      <button class="col-tog" @click="toggleMode" :class="{ active:isActive}">
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
const bodyEl = document.body.classList;
import { onMounted } from 'vue';

export default {
  name: 'appHeader',
  setup() {
    let bodyEl = null;
    onMounted(() => {
      bodyEl = document.body.classList;
      bodyEl.add('light');
    })
  },
  data() {
    return {
      navData: ['HOME', 'ABOUT', 'PROJECT', 'CONTACT'],
      winSc: 0,
      headerFix: false,
      isActive: false,
    };
  },
  methods: {
    GoBodyText() {
      document.querySelector('#chapter2').scrollIntoView({ behavior: 'smooth'});
    },
    focusMenu() {
      const navAnchor = document.querySelector('#gnb');
      if (navAnchor){
        navAnchor.focus();
      }
    },
    toggleMode() {
      if(bodyEl.contains('light')) {
        bodyEl.add('dark');
        bodyEl.remove('light');
        this.isActive = true;
      } else {
        bodyEl.remove('dark');
        bodyEl.add('light');
        this.isActive = false;
      }
    },
    scrollToSection(index) {
      const section = document.querySelector(`#chapter${index}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      if(currentScrollY === 0) {
        this.headerFix = false;
      } else if (currentScrollY > this.lastScrollY && currentScrollY > 0) {
        this.headerFix = false;
      } else if (currentScrollY < this.lastScrollY) {
        this.headerFix = true;
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
