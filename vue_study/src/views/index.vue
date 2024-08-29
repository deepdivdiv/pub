<template>
  <div @mousemove="handleMouseMove" id="wrap">
    <div :class="['custom-cursor', cursorClass]" :style="cursorStyle"></div>
    <slot></slot>

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
import appHeader from '@/components/header.vue'
import appFooter from '@/components/footer.vue'
import appAbout from '@/components/about.vue'
import appMain from '@/components/main.vue'
import appProject from '@/components/project_pub.vue'

import { ref, computed, onMounted } from 'vue';

export default {
  name: 'TheIndex',
  setup() {
    const cursorX = ref(0);
    const cursorY = ref(0);
    const targetX = ref(0);
    const targetY = ref(0);
    const cursorClass = ref('');
    const speed = 0.9;

    const handleMouseMove = (event) => {
      targetX.value = event.clientX;
      targetY.value = event.clientY;
    };

    const animate = () => {
      cursorX.value += (targetX.value - cursorX.value) * speed;
      cursorY.value += (targetY.value - cursorY.value) * speed;

      requestAnimationFrame(animate);
    };

    onMounted(() => {
      requestAnimationFrame(animate);

      const cursorElConfig = {
        'a[target="_blank"]': 'aTarget',
        'img, button': 'aFocus',
        // '.swiper-slide': 'aSlideGrab',
      };

      Object.keys(cursorElConfig).forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          element.addEventListener('mouseover', (event) => {
            console.log('mouseover on', event.target); 
            cursorClass.value = cursorElConfig[selector];
          });
          element.addEventListener('mouseout', (event) => {
            console.log('mouseout on', event.target); 
            cursorClass.value = '';
          });
        });
      });
    });

    const cursorStyle = computed(() => ({
      left: `${cursorX.value}px`,
      top: `${cursorY.value}px`,
    }));

    return {
      handleMouseMove,
      cursorStyle,
      cursorClass,
    };
  },
  components: {
    appHeader,
    appFooter,
    appAbout,
    appMain,
    appProject,
  }
}
</script>

<style scoped lang="scss">
.custom-cursor {
  position: fixed;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  z-index: 999;
  pointer-events: none; 
  transform: translate(-50%, -50%);
  background: #222;
  overflow: hidden;
  transition: width 500ms, height 500ms;
  
  &.aTarget {
    background-color: red; 
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      width: 100%;
      height: 1.2rem;
      background: url("data:image/svg+xml,%3Csvg width='233' height='232' viewBox='0 0 233 232' fill='rgb(255,255,255)' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M223 106C228.523 106 233 101.523 233 96L233 10C233 4.47705 228.523 0 223 0L137 -8.39259e-06C131.477 -8.87541e-06 127 4.47704 127 9.99999C127 15.5229 131.477 20 137 20L197.832 20L87.4871 130.345C83.5818 134.25 83.5818 140.582 87.4871 144.487C91.3923 148.392 97.724 148.392 101.629 144.487L213 33.1163V96C213 101.523 217.477 106 223 106ZM20 212V20H57L93 20C98.5229 20 103 15.5228 103 10C103 4.47715 98.5229 0 93 0H57H11H10C4.47715 0 0 4.47715 0 10C0 10.1636 0.0039303 10.3264 0.0117017 10.4881C0.0039289 10.6577 0 10.8284 0 11V221C0 227.075 4.92486 232 11 232H221C221.172 232 221.342 231.996 221.512 231.988C221.674 231.996 221.836 232 222 232C227.523 232 232 227.523 232 222V221V175V139C232 133.477 227.523 129 222 129C216.477 129 212 133.477 212 139V175V212H20Z' fill='rgb(255,255,255)'/%3E%3C/svg%3E%0A") no-repeat center center / contain;
    }
  }

  &.aSlideGrab {
    background-color: red;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
      content: "";
      width: 100%;
      height: 0.8rem;
      background: url("data:image/svg+xml,%3Csvg width='324' height='142' viewBox='0 0 324 142' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M78.0244 138.953C74.1192 142.858 67.7875 142.858 63.8823 138.953L3.07107 78.1418C-0.834175 74.2365 -0.83417 67.9049 3.07107 63.9996L63.8823 3.18843C67.7875 -0.716814 74.1191 -0.716814 78.0244 3.18843C81.9296 7.09367 81.9296 13.4253 78.0244 17.3306L35.0097 60.3453L132.904 60.3453H191.061L288.955 60.3453L245.94 17.3306C242.035 13.4253 242.035 7.09367 245.94 3.18843C249.845 -0.716814 256.177 -0.716814 260.082 3.18843L320.893 63.9996C324.799 67.9049 324.799 74.2365 320.893 78.1418L260.082 138.953C256.177 142.858 249.845 142.858 245.94 138.953C242.035 135.048 242.035 128.716 245.94 124.811L290.406 80.3453H191.061H132.904H33.5589L78.0244 124.811C81.9296 128.716 81.9296 135.048 78.0244 138.953Z' fill='rgb(255,255,255)'/%3E%3C/svg%3E%0A") no-repeat center center / contain;
    }
  }

  &.aFocus {
    background-color: red;
  }
}
</style>
