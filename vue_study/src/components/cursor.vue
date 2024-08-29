<template>
    <div :style="cursorStyle" class="custom-cursor"></div>
    <slot></slot>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  
  export default {
    name: 'FollowCursor',
    setup() {
      const cursorX = ref(0);
      const cursorY = ref(0);
      const targetX = ref(0);
      const targetY = ref(0);
  
      const speed = 0.9; // 
  
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
      });
  
      const cursorStyle = computed(() => ({
        left: `${cursorX.value}px`,
        top: `${cursorY.value}px`,
      }));
  
      return {
        handleMouseMove,
        cursorStyle,
      };
    },
  };
  </script>
  
  <style scoped>
  .cursor-container {
    position: fixed;
    width: 100%; height: 100%;
    overflow: hidden;
    cursor: none;
    z-index: 9999;
}

.custom-cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%;
    pointer-events: none; 
    transform: translate(-50%, -50%);
    transition: background-color 200ms ease;
  }
  </style>
  