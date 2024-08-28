<template>
    <!-- 저를 소개합니다. -->
    <section>
      <div class="sec_inner">
        <div class="sec_tit">
          <h1>ABOUT ME</h1>
          <p class="r_dcr">웹 퍼블리셔 오영은</p>
        </div>
        <div class="sec_area">
          <h2>PUBLISHER OH</h2>
          <p>
            <span v-for="(item, i) in aboutMe" :key="i">{{ item }}</span>
          </p>
          <div class="profile-thumb">
              <img src="../assets/img/pf-thumb.png" alt="">
          </div>
        </div>
        <div class="sec_area">
          <h2>WORK</h2>
          <p>
            <span v-for="(item, i) in careerInfo" :key="i">{{ item.year }} {{ item.company }}</span>
          </p>
        </div>
        <div class="sec_area skill_stack">
            <h2>SKILL STACK</h2>
            <div class="skill_ico">
                <span v-for="(item, i) in skillIcon" :key="i">{{ item }}</span>
            </div>
        </div>
        <div class="btn-area">
          <a href="" class="btn-set-arr">경력기술서</a>
          <a href="" class="btn-set-arr">스타일가이드</a>
        </div>
      </div>
    </section>
    <!-- ABOUT ME // END -->
</template>

<script>
export default{
    name: 'appAbout',
    data(){
      return {
        skillIcon:  ['HTML5', 'CSS3', 'JAVASCRIPT', 'JQUERY', 'SCSS', 'VSCODE', 'GIT', 'BRACKET', 'FIGMA', 'PHOTOSHOP', 'ILLUSTRATOR'],
        careerInfo: [
          {
            year: '2023.06 ~ 2024.06',
            company: '온넷소프트(주) · 퍼블리싱팀 / 대리'
          },
          {
            year: '2017.03 ~ 2022.10',
            company: '다산리얼애드(주) · UI·UX팀 / 과장'
          }
        ],
        aboutMe: [
          '안녕하세요. 웹 퍼블리셔 오영은 입니다.',
          '저는 웹 표준성과 웹 접근성을 준수하며 퍼블리싱을 하고, 최신 정보와 트렌드에 관심이 많습니다.',
          '늘 긍정적인 마인드로 업무에 임합니다. 새로운 환경에 빨리 적응하며,',
          '다양한 포지션의 팀원들과 협업하며 다양한 툴과 스킬을 사용하여 여러 웹 사이트를 제작합니다.',
          '항상 더 효율적인 코드를 작성하기 위해 고민하며, 더 나은 웹사이트를 만들기 위해',
          '오늘보다 내일 더 성장하고자 노력하고, 함께 협력하여 최고의 웹 사이트를 만들어 나가고 싶습니다.'
        ]
      }
  },
  }
</script>

<style lang="scss">

</style>
