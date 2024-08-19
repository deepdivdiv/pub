"use strict";

Splitting(); // 퀵메뉴 영역

function nmv(seq) {
  var offset = $("#content" + seq).offset(); // 메뉴 클릭시 해당 콘텐츠로 이동 gsap 이벤트 활용

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: "#content" + seq,
      offsetY: 0
    }
  });
}

; // 슬라이드 영역

$(document).ready(function () {
  var pjWeb = new Swiper('.pj-web-slide', {
    spaceBetween: 0,
    // 슬라이드 간격
    centeredSlides: true,
    // 슬라이드 가운데 정렬
    loop: true,
    // 루프 활성화
    speed: 0,
    // 슬라이드 속도
    effect: "fade",
    // 이펙트설정
    slidesPerView: 1,
    // 뷰 개수
    navigation: {
      // 이전다음
      nextEl: '.pj-web-next',
      prevEl: '.pj-web-prev'
    },
    observer: true,
    // 슬라이드 망가짐 방지
    observeParents: true // 슬라이드 망가짐 방지

  }); // pj-web 슬라이드

  var pjDesign = new Swiper('.pj-design-slide', {
    spaceBetween: 30,
    loop: true,
    // 루프 활성화
    speed: 1500,
    // 슬라이드 속도
    effect: "horizontal",
    // 이펙트설정
    slidesPerView: 4.2,
    // 뷰 개수
    centeredSlides: true,
    // 센터정렬
    slidesOffsetBefore: 0,
    // 컨테이너 시작 부분 (모든 슬라이드 이전)에 슬라이드 오프셋 추가 (픽셀 단위)
    autoplay: {
      // 자동재생
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      // 이전다음
      nextEl: '.pj-design-next',
      prevEl: '.pj-design-prev'
    },
    observer: true,
    // 슬라이드 망가짐 방지
    observeParents: true // 슬라이드 망가짐 방지

  }); // pj-design 슬라이드
}); // 메인영역 캔버스 영역

$(document).ready(function () {
  var canvas = document.getElementById('waveCanvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var waves = [{
    points: [{
      x: -600,
      amplitude: 10,
      y: 520
    }, {
      x: 100,
      amplitude: 10,
      y: 220
    }, {
      x: 400,
      amplitude: 10,
      y: 320
    }, {
      x: 800,
      amplitude: 10,
      y: 220
    }, {
      x: 1600,
      amplitude: 10,
      y: 520
    }, {
      x: 2400,
      amplitude: 10,
      y: 320
    }, {
      x: canvas.width,
      amplitude: 0,
      y: 0
    }],
    color: '#7f6aeb',
    alpha: 1,
    offset: 9,
    speed: 0.009,
    frequency: 2
  }, {
    points: [{
      x: -600,
      amplitude: 10,
      y: 500
    }, {
      x: 100,
      amplitude: 10,
      y: 200
    }, {
      x: 400,
      amplitude: 10,
      y: 300
    }, {
      x: 800,
      amplitude: 10,
      y: 200
    }, {
      x: 1600,
      amplitude: 10,
      y: 500
    }, {
      x: 2400,
      amplitude: 10,
      y: 300
    }, {
      x: canvas.width,
      amplitude: 0,
      y: 0
    }],
    color: '#7f6aeb',
    alpha: 0.4,
    offset: 3.9,
    speed: 0.009,
    frequency: 5
  }, {
    points: [{
      x: -600,
      amplitude: 10,
      y: 500
    }, {
      x: 100,
      amplitude: 10,
      y: 200
    }, {
      x: 400,
      amplitude: 10,
      y: 300
    }, {
      x: 800,
      amplitude: 10,
      y: 220
    }, {
      x: 1600,
      amplitude: 10,
      y: 600
    }, {
      x: 2400,
      amplitude: 10,
      y: 500
    }, {
      x: canvas.width,
      amplitude: 0,
      y: 0
    }],
    color: '#7f6aeb',
    alpha: 0.3,
    offset: 20,
    speed: 0.009,
    frequency: 5
  }, {
    points: [{
      x: -600,
      amplitude: 10,
      y: 700
    }, {
      x: 100,
      amplitude: 10,
      y: 200
    }, {
      x: 400,
      amplitude: 10,
      y: 300
    }, {
      x: 800,
      amplitude: 10,
      y: 220
    }, {
      x: 1600,
      amplitude: 10,
      y: 600
    }, {
      x: 2400,
      amplitude: 10,
      y: 500
    }, {
      x: canvas.width,
      amplitude: 0,
      y: 0
    }],
    color: '#7f6aeb',
    alpha: 0.4,
    offset: 20,
    speed: 0.009,
    frequency: 1
  }];

  function drawWave(wave, phase) {
    ctx.strokeStyle = wave.color;
    ctx.fillStyle = wave.color;
    ctx.globalAlpha = wave.alpha;
    ctx.beginPath();
    ctx.moveTo(0, wave.points[0].y);

    for (var i = 0; i < wave.points.length - 1; i++) {
      var startX = wave.points[i].x;
      var endX = wave.points[i + 1].x;
      var startY = wave.points[i].y + wave.points[i].amplitude * Math.sin(phase * wave.frequency + i + wave.offset);
      var endY = wave.points[i + 1].y + wave.points[i + 1].amplitude * Math.sin(phase * wave.frequency + i + 1 + wave.offset);
      var controlX1 = (2 * startX + endX) / 3;
      var controlY1 = startY;
      var controlX2 = (startX + 2 * endX) / 3;
      var controlY2 = endY;
      ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var _i = 0, _waves = waves; _i < _waves.length; _i++) {
      var wave = _waves[_i];
      drawWave(wave, wave.phase);
      wave.phase += wave.speed;
    }

    requestAnimationFrame(animate);
  }

  for (var _i2 = 0, _waves2 = waves; _i2 < _waves2.length; _i2++) {
    var wave = _waves2[_i2];
    wave.phase = 0;
  }

  animate();
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = waves[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var wave = _step.value;
        wave.points[wave.points.length - 1].x = canvas.width;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}); // 효과 영역

$(document).ready(function () {
  var introText = gsap.timeline();
  gsap.to('.waveBG', {
    opacity: 1,
    duration: 0.5,
    delay: 1
  });
  introText.to('.m_inner img', {
    opacity: 1,
    duration: 0.5,
    x: 0,
    delay: 1.4
  });
  introText.to('.m_copy span', {
    opacity: 1,
    duration: 0.5,
    y: 0,
    delay: .1
  });
  introText.to('.svg-txt path', {
    opacity: 1,
    duration: 0.5,
    strokeDashoffset: 0,
    strokeDasharray: 85
  });
  introText.to('.svg-txt path', {
    fill: "#fff"
  });
  introText.to('.m_copy p', {
    opacity: 1,
    duration: 0.5,
    y: 0
  });
  gsap.to(".scroll span", {
    // 스크롤
    scrollTrigger: {
      trigger: "#content01",
      start: "top bottom",
      scrub: 1
    },
    rotate: 180,
    duration: 10
  });
  gsap.to("#waveCanvas", {
    // 캔버스
    scrollTrigger: {
      trigger: "#content01",
      start: "top bottom",
      scrub: 5
    },
    y: "25%",
    duration: 0.1
  });
  gsap.to(".scroll", {
    // 캔버스
    scrollTrigger: {
      trigger: "#content01",
      start: "center bottom",
      scrub: 5
    },
    y: "100%",
    duration: 0.1
  });
  $(window).scroll(function () {
    var winSc = $(window).scrollTop();
    var fadeinEls = document.querySelectorAll('.skill_ico span');
    var aboutMe = gsap.timeline(); // if(winSc === 0&&10 ) {
    //   introText.restart();
    // }

    if (winSc > 830) {
      $('header').addClass('head-fix');
    } else {
      $('header').removeClass('head-fix');
    }

    if (winSc > 800) {
      gsap.to('.skill_stack h2', {
        opacity: 1,
        duration: 0.2,
        delay: 0,
        x: 0
      });
      fadeinEls.forEach(function (textanimation, index) {
        gsap.to(textanimation, .2, {
          delay: (index + 1) * 0.05,
          opacity: 1,
          y: 0
        });
      });
    } else {
      gsap.to('.skill_stack h2', {
        opacity: 0,
        duration: 0.2,
        delay: 0,
        x: -50
      });
      fadeinEls.forEach(function (textanimation, index) {
        gsap.to(textanimation, .2, {
          delay: (index + 1) * 0.05,
          opacity: 0,
          y: 30
        });
      });
    }

    if (winSc > 1000) {
      $('.cont-about .btn-area').addClass('active');
    } else {
      $('.cont-about .btn-area').removeClass('active');
    }

    if (winSc > 1200) {
      $('.pj-web h2').addClass('head-fix');
    } else {
      $('.pj-web h2').removeClass('head-fix');
    }
  }); // 스크롤 이벤트 섹터 종료  
});