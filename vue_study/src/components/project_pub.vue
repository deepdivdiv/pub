<template>
        <section class="pj-publishing" v-bind="$attrs">
            <div class="sec_inner">
                <div class="sec_tit">
                    <p class="t_dcr">저의 퍼블리싱 작업물을 소개합니다.</p>
                    <h1>WEB PORTFOLIO</h1>
                </div>
                <div class="sec_area">
                    <button class="pub-prev arr-set-prev"><i></i></button>
                    <swiper ref="swiperRef" v-bind="PubSlideOption" :modules="modules" class="pub-slide" @slideChange="onSlideChange">
                        <swiper-slide v-for="(item, i) in PubSlideData" :key="i">
                            <a :href="item.link" target="_blank" :tabindex="i === activeIndex ? 0 : -1" class="pj-thumb">
                                    <img :src="item.imgSrc" :alt="item.imgAlt">
                            </a>
                            <div class="pj-info">
                                <div class="skill-label">
                                    <em v-for="(skill, i) in item.skills" :key="i">{{ skill }}</em>
                                </div>
                                <h2>{{ item.title }}</h2>
                                    <p>{{ item.description }}</p>
                                    <dl>
                                        <dt>작업 기여도</dt>
                                        <dd>{{ item.contribution }}</dd>
                                        <dt>작업 영역</dt>
                                        <dd>{{ item.workScope }}</dd>
                                    </dl>
                                    <div class="btn-area">
                                        <a :href="item.link" target="_blank" class="btn-set-arr" :tabindex="i === activeIndex ? 0 : -1">LINK</a>
                                        <a :href="item.view" target="_blank" class="btn-set-arr" :tabindex="i === activeIndex ? 0 : -1">VIEW</a>
                                    </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <button class="pub-next arr-set-next"><i></i></button>
                </div>
            </div>
            <div class="pubBG"></div>
        </section>
        <!-- 디자인 영역 -->
        <section class="pj-design">
            <div class="sec_inner">
                <div class="sec_tit">
                    <p class="t_dcr">저의 디자인 작업물을 소개합니다.</p>
                    <h1>DESIGN PORTFOLIO</h1>
                </div>
                <div class="sec_area">
                    <swiper
                    v-bind="DesignSlideOption"
                    :modules="modules">
                        <swiper-slide v-for="(item, i) in DesignSlideData" :key="i">
                            <div class="pj-thumb">
                                <i class="signal"></i>
                                <a :href="item.view" target="_blank" title="새 창으로 열립니다."><img :src="item.imgSrc" :alt="item.imgAlt"></a>
                            </div>
                            <div class="pj-info">
                                <p><a :href="item.view" target="_blank" title="새 창으로 열립니다.">{{ item.title }}</a></p>
                                <span><em>{{ item.value }}</em>{{ item.year }}</span>
                                <a :href="item.view" target="_blank" title="새 창으로 열립니다."></a>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="btn-area">
                        <button class="design-prev arr-set-prev"><i></i></button>
                        <button class="design-next arr-set-next"><i></i></button>
                        <a href="" class="btn-set-arr">작업물 더보기</a>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const fileRoot = "https://deepdiv.cafe24.com/2024Portfolio/img/projects/"
import { gsap } from "gsap";
import { onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default{
    name: 'appProjectPub',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        onMounted(() =>{
          const pj_pub_tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".pj-publishing",
          start: "0% 30%",
          end: "80% 100%",
          scrub: 1,
          anticipatePin: 1,
          },
        });
          const pj_web_tl = gsap.timeline({
          scrollTrigger: {
          trigger: ".pj-design",
          start: "0% 30%",
          end: "80% 100%",
          scrub: 1,
          anticipatePin: 1,
          },
        });

        pj_pub_tl.fromTo(".pj-publishing .sec_tit p",
        {opacity:0, x: -30}, { opacity: 1, x: 0,})
        .fromTo(".pj-publishing .sec_tit h1",
        {opacity:0, x: 30}, { opacity: 1, x: 0,}, "-=0.5")
        .fromTo(".pj-publishing .pj-thumb",
        {opacity:0, x: -30}, { opacity: 1, x: 0,})
        .fromTo(".pj-publishing .pj-info",
        {opacity:0, x: 30}, { opacity: 1, x: 0,}, "-=0.5")
        ;
        pj_web_tl.fromTo(".pj-design .sec_tit p",
        {opacity:0, x: -30}, { opacity: 1, x: 0,})
        .fromTo(".pj-design .sec_tit h1",
        {opacity:0, x: 30}, { opacity: 1, x: 0,}, "-=0.5")
        .fromTo(".pj-design .swiper-slide",
        {opacity:0,}, { opacity: 1, }, "-=0.5")
        .fromTo(".pj-design .btn-area",
        {opacity:0, y:30}, { opacity: 1, y:0}, "-=0.5")
        ;
      });

        return {
            modules: [EffectFade, Navigation, Pagination],
        }
        
        
    },
    data(){
      return {
        activeIndex: 0,
        PubSlideOption: {
            slidesPerView: 1, // slidesPerView로 수정
            spaceBetween: 0,
            effect: 'fade', // fade 효과 설정
            fadeEffect: {
            crossFade: true, // 슬라이드 간의 부드러운 전환을 위해 crossFade 옵션 추가
            },
            navigation: {
                nextEl: '.pub-next',
                prevEl: '.pub-prev',
            },
            loop: true, // 슬라이드 루프
        },
        DesignSlideOption: {
            slidesPerView: 1.2, // slidesPerView로 수정
            spaceBetween: 20,
            centeredSlides: true,
            effect: 'horizontal', // fade 효과 설정
            fadeEffect: {
            crossFade: true, // 슬라이드 간의 부드러운 전환을 위해 crossFade 옵션 추가
            },
            navigation: {
                nextEl: '.design-next',
                prevEl: '.design-prev',
            },
            loop: true, // 슬라이드 루프
            breakpoints: {
                560: {
                slidesPerView: 1.2,
                },
                720: {
                slidesPerView: 1.8,
                },
                1200: {
                slidesPerView: 3.2,
                },
                1400: {
                slidesPerView: 4.2,
                spaceBetween: 40,
                },
            },
      observer: true,	// 슬라이드 망가짐 방지
      observeParents: true,	// 슬라이드 망가짐 방지
        },
        PubSlideData: [
            {
                imgSrc: fileRoot + "2024_oye.png", // 이미지 경로
                imgAlt: "2024 오영은 포트폴리오 메인 이미지", // ALT값
                skills: ["HTML5", "SCSS", "CSS3", "JAVASCRIPT", "JQUERY", "GIT", "GSAP"], // 스킬
                title: "2024 오영은 포트폴리오", // 제목
                description: "2024년 포트폴리오 시안을 작업하고 퍼블리싱하였습니다. 인터랙티브 효과는 GSAP 모션 라이브러리를 주로 사용하여 구현하였으며, 메인 영역에서는 SVG를 활용해 텍스트 애니메이션에 중점을 두었습니다. 배경은 캔버스를 이용해 물결 애니메이션을 추가하였으며, 슬라이드 영역에는 Swiper 라이브러리 사용하였습니다. 데이터는 배열스크립트로 구현하여 동적으로 호출하였습니다", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://deepdivdiv.github.io/pub/portfolio_2024/index.html", // 링크
                view: "https://mud-chess-378.notion.site/2024-a606c7d2830349fa8d3a8d1ccc4890e7", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2023_steam.JPG", // 이미지 경로
                imgAlt: "융합교육 STEAM 메인 이미지", // ALT값
                skills: ["HTML5", "JSP", "CSS3", "JAVASCRIPT", "JQUERY", "SVN", "GSAP"], // 스킬
                title: "융합교육 STEAM", // 제목
                description: "융합교육 STEAM 프로젝트의 퍼블리싱 작업을 완료하였습니다. 메인 페이지는 GSAP 모션 라이브러리와 Swiper를 연동하여 슬라이드가 변경될 때마다 자연스럽게 모션 효과가 적용되도록 제작했습니다. 자료영역은 카테고리별로 고유한 디자인을 적용. 시각적 다양성을 제공하며, CMS 데이터를 동적으로 호출할 수 있도록 개발자와 협업하여 구현하였습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://steam.kofac.re.kr/main", // 링크
                view: "https://mud-chess-378.notion.site/STEAM-178e4f14b93d4042979b182dca302d97", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2024_dx.JPG", // 이미지 경로
                imgAlt: "찾아가는 학교 연수 메인 이미지",
                skills: ["HTML5", "JAVASCRIPT", "JQUERY", "CSS3", "GIT"], // 스킬
                title: "찾아가는 학교 연수", // 제목
                description: "디지털 혁신을 통해 학교를 변화시킬 찾아오는 학교 연수 사이트를 퍼블리싱 하였습니다. 메인 페이지에서는 시작/정지 버튼을 통해 Progress Bar를 원형 게이지(Circle Gauge) 형태로 구현하였습니다. 메인 페이지 외에도 모든 서브 페이지에 대한 퍼블리싱 작업을 완료하였으며, 작업 후 개발자와의 협업이 필요한 부분에서는 적극적으로 참여하였습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://dx.kofac.re.kr/dx/main", // 링크
                view: "https://mud-chess-378.notion.site/b5ddd54a6e754259b8a63d02533ff861", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2023_jt.JPG", // 이미지 경로
                imgAlt: "전통문화포털 메인 이미지",
                skills: ["JSP", "JAVASCRIPT", "JQUERY", "CSS3", "SVN"], // 스킬
                title: "전통문화포털", // 제목
                description: "2023년 리뉴얼 퍼블리싱 작업을 완료했습니다. 웹표준 및 웹접근성을 준수하였습니다. 기존 사이트의 데이터를 유지하면서 메인 페이지만 새롭게 디자인 및 퍼블리싱하는 작업이었으며, 기존 데이터와 신규 작업 영역을 문제없이 마이그레이션했습니다. 이 과정에서 추가 개발 없이 퍼블리싱과 마이그레이션 작업을 독립적으로 수행했으며, 이를 통해 JSP를 보다 심도 있게 다룰 수 있는 기회를 가졌습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://dx.kofac.re.kr/dx/main", // 링크
                view: "https://mud-chess-378.notion.site/b5ddd54a6e754259b8a63d02533ff861", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2024_kosti.JPG", // 이미지 경로
                imgAlt: "전략물자관리원 메인 이미지",
                skills: ["HTML5", "JSP", "JAVASCRIPT", "JQUERY", "CSS3", "SVN", "GSAP"], // 스킬
                title: "전략물자관리원", // 제목
                description: "전략물자관리원 웹사이트의 퍼블리싱 작업을 완료하였습니다. GSAP 모션 라이브러리를 활용하여 다양한 애니메이션 효과를 구현하였으며, Swiper 라이브러리를 사용해 슬라이드 기능을 구현하고 API를 통해 슬라이드 전환 효과를 커스터마이징하였습니다. 국문과 영문 페이지 모두 퍼블리싱 작업을 진행하였으며, 웹 접근성을 준수하여 오픈 후 웹 접근성 심사를 통해 마크 획득했습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://www.kosti.or.kr/main", // 링크
                view: "https://mud-chess-378.notion.site/KOSTI-7a9d754fc920433ab63f92275c938db6", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2024_nb.JPG", // 이미지 경로
                imgAlt: "늘봄학교 메인 이미지",
                skills: ["HTML5", "JSP", "JAVASCRIPT", "JQUERY", "CSS3", "SVN"], // 스킬
                title: "늘봄학교", // 제목
                description: "늘봄학교 웹사이트의 퍼블리싱 작업을 완료하였습니다. 작업 과정에서 디자이너와 협의하여 메인 화면에 오브제들을 주기적으로 애니메이션 처리하였으며, 돋보기 등 포인트적인 요소들은 디자이너와 적극적으로 협업하여 구현하였습니다. 또한, 프로그램 썸네일 영역에서는 개발자에게 적극적으로 의견을 제시하여, 관리자 모드에서 썸네일과 아이콘 등을 쉽게 관리할 수 있도록 퍼블리싱 작업을 진행하였습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://afterschool.kofac.re.kr/main", // 링크
                view: "https://mud-chess-378.notion.site/6b646d54d48146309073264d5117ff29", // 뷰페이지(노션)
            },
            {
                imgSrc: fileRoot + "2024_sAll.JPG", // 이미지 경로
                imgAlt: "사이언스올 메인 이미지",
                skills: ["HTML5", "JSP", "JAVASCRIPT", "JQUERY", "CSS3", "SVN"], // 스킬
                title: "사이언스올", // 제목
                description: "사이언스올 웹사이트의 퍼블리싱 작업을 완료하였습니다. 리뉴얼 사이트로 이관된 데이터 양이 많은 상황에서도 작업을 원활하게 진행하였습니다. 메인 슬라이드는 Swiper Slide를 사용하여 구현하였으며, 배너와 데이터 관리는 CMS를 통해 진행하였습니다. 작업 과정에서는 웹 표준과 웹 접근성을 준수하여 마크업을 작성하였으며, 오픈 후 진행된 웹 접근성 심사에서 마크를 취득하였습니다.", // 설명
                contribution: "100%", // 기여도 퍼센트
                workScope: "전체", // 작업영역
                link: "https://www.scienceall.com/main", // 링크
                view: "https://mud-chess-378.notion.site/cd7f98433b9d4ea9be3fb12ef3294851", // 뷰페이지(노션)
            },
        ],
        DesignSlideData: [
        {
          imgSrc: fileRoot + "2024_oye.png", // 이미지 경로
          imgAlt: "2024 오영은 포트폴리오 메인 이미지",
          title: "2024 오영은 포트폴리오", // 제목
          value: "WEB DESIGN", // 종류
          year: "2024년", // 년도
          view: "https://mud-chess-378.notion.site/2024-a606c7d2830349fa8d3a8d1ccc4890e7", // 뷰페이지(노션)
      },
      {
        imgSrc: fileRoot + "2023_oye.png", // 이미지 경로
        imgAlt: "2023 오영은 포트폴리오 메인 이미지",
        title: "2023 오영은 포트폴리오", // 제목
        value: "WEB DESIGN", // 제목
        year: "2023년",
        view: "https://mud-chess-378.notion.site/2023-3a6c77d15c4848058fdb80fb9f59fbd0", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2022_dc_ak_draft.png", // 이미지 경로
          imgAlt: "등촌역 AK 밸리 HUB 시안 이미지",
          title: "등촌역 AK 밸리 HUB 시안", // 제목
          value: "WEB DESIGN", // 제목
          year: "2022년",
          view: "https://mud-chess-378.notion.site/AK-6d678444d1db4e3da48f17ec4e1a3ee2", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2022_sm_inhere_pc.jpg", // 이미지 경로
          imgAlt: "인히어 쌍문 시안 이미지",
          title: "인히어 쌍문 시안", // 제목
          value: "WEB DESIGN", // 제목
          year: "2022년",
          view: "https://mud-chess-378.notion.site/e4edc1804bd14d00a0f4f2cc548419eb", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2022_ddc_pc.jpg", // 이미지 경로
          imgAlt: "동두천도시개발주식회사 시안 이미지",
          title: "동두천도시개발주식회사 시안", // 제목
          value: "WEB DESIGN", // 제목
          year: "2022년",
          view: "http://mud-chess-378.notion.site/5f9fd1c0d47d4758baf527590e89ebf6?pvs=74", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2021_os_sujain_pc.png", // 이미지 경로
          imgAlt: "오산 세교 한양수자인 시안 이미지",
          title: "오산 세교 한양수자인 시안", // 제목
          value: "WEB DESIGN", // 제목
          year: "2021년",
          view: "https://mud-chess-378.notion.site/a27f102179a74b19a038d9c17e8323ff", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2021_kr2_pc.jpg", // 이미지 경로
          imgAlt: "검단신도시 KR 법조타워 II 이미지",
          title: "검단신도시 KR 법조타워 II", // 제목
          value: "WEB DESIGN", // 제목
          year: "2021년",
          view: "https://mud-chess-378.notion.site/KR-II-947105f124da45898929437ef6756bed", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2021_villiv_teaser.jpg", // 이미지 경로
          imgAlt: "빌리브 어바인시티 메인 이미지",
          title: "빌리브 어바인시티", // 제목
          value: "WEB DESIGN", // 제목
          year: "2021년",
          view: "https://mud-chess-378.notion.site/85a79548c9b84745aa4342b2801fdb00", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2020_dg_swc_teaser.jpg", // 이미지 경로
          imgAlt: "대구 오페라 스위첸 티저 이미지",
          title: "대구 오페라 스위첸 티저", // 제목
          value: "WEB DESIGN", // 제목
          year: "2020년",
          view: "http://mud-chess-378.notion.site/c44ff0a3ee4247c5a9493b553ecf2700?pvs=74", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2020_fabio_teaser.jpg", // 이미지 경로
          imgAlt: "수원 파비오 더 씨타 티저 이미지",
          title: "수원 파비오 더 씨타 티저", // 제목
          value: "WEB DESIGN", // 제목
          year: "2020년",
          view: "https://mud-chess-378.notion.site/82865ffc2101485d915d99d8ac559e06", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2018_gm_urban_pc.jpg", // 이미지 경로
          imgAlt: "광명역 어반브릭스 본사이트 이미지",
          title: "광명역 어반브릭스 본사이트", // 제목
          value: "WEB DESIGN", // 제목
          year: "2017년",
          view: "https://mud-chess-378.notion.site/21f09b01ad1c4f59ae0ac901e2b788ac", // 뷰페이지(노션)
      },
      {
          imgSrc: fileRoot + "2017_urban_pc_teaser.jpg", // 이미지 경로
          imgAlt: "광명역 어반브릭스 티저 이미지",
          title: "광명역 어반브릭스 티저", // 제목
          value: "WEB DESIGN", // 제목
          year: "2017년",
          view: "https://mud-chess-378.notion.site/d2e1420242d94c56905418403686589e", // 뷰페이지(노션)
      },
      
        ]
      }
    },
    methods: {
    onSlideChange(swiper) {
      this.activeIndex = swiper.realIndex; // Swiper에서 현재 활성 슬라이드 인덱스를 가져옴
    }
  },
  }
</script>

<style lang="scss">

</style>
