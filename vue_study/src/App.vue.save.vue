<template>
  <div class="menu">
    <a v-for="(nav, index) in navArr" :key="nav" @click="activePage = index">{{ nav }}</a>
  </div>



  <div class="shop-page" v-if="activePage === 1">
    <div class="black" v-if="modalState == true" @click="modalState = false">
    <div class="modal" @click.stop>
      <img :src="selectItem[2]" alt="">
      <p>{{ selectItem[1] }}</p>
      <span>{{ selectItem[1] }} 매물입니다. <br>{{ selectItem[3] }}<br>매물 가격대는 {{ selectItem[1] }} 만원대로 형성되어 있습니다.</span>
      <br>
      <button @click="modalState = false">닫기</button>
    </div>
  </div>
  <div v-for="(item, i) in shopData" :key="i">
    <img :src="item.image" :alt="`${Object.values(item)[1]}의 이미지입니다`" class="shopThumb"  @click="openModal(i)">
    <h4 @click="openModal(i)">{{ Object.values(item)[1] }}</h4>
    <p  @click="openModal(i)">{{ Object.values(item)[3] }}</p>
    <span @click="openModal(i)">매물가격 : {{ Object.values(item)[4] }}원</span>
    <button @click="reportCount(i)">허위매물신고</button> <span>신고수 : {{ Object.values(item)[5] }}</span>
  </div>
  </div>
  
  
</template>

<script>
import build from './assets/data';
export default {
  name: 'App',
  data(){
    return {
      modalState: false,
      activePage: 0,
      selectIndex: null,
      navArr : ['HOME', 'SHOP', 'ABOUT'],
      shopData : build,
    }
  },
  computed: {
    selectItem() {
      if (this.selectIndex !== null) {
        return Object.values(this.shopData[this.selectIndex]);
      }
      return [];
    }
  },
  methods : {
    openModal(index) {
      this.selectIndex = index;
      this.modalState = true;
    },
    reportCount(index) {
      this.shopData[index].report += 1;
    }
  },
  components: {
  }
  
}

</script>

<style lang="scss">
html, body { margin: 0; padding: 0; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  a {
    color: #fff;
    padding: 10px;
  }
}

.shopThumb {
  width: 300px;
  height: 150px;
  overflow: hidden;
  object-fit: cover;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-top: 10px;
}


.black {
  position: fixed;
  width: 100%; height: 100%;
  left: 0; top: 0;
  background: rgba(0,0,0,0.6);
  z-index: 999;
  padding: 4vw 6vw;
  box-sizing: border-box;
  .modal {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 30px;
  } 
}
</style>
