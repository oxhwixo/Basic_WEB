const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// window객체는 브라우저의 하나의 탭을 의미함.
window.addEventListener('scroll', _.throttle(function(){ // 0.3초 단위로 부하를 주어서 함수가 실행되는 것을 제어
	console.log(window.scrollY);
	if (window.scrollY > 500) {
		gsap.to(badgeEl, .6, {
			opacity: 0,
			display: 'none'
		});
	} else {
		gsap.to(badgeEl, .6, {
			opacity: 1,
			display: 'block'
		});
	}
}, 300)); 

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * .7, // 0.7 1.4 2.1 2.7 순으로 딜레이 생김
		// 만약 그냥 delay를 .7으로 두면 모든 이미지가 0.7초 후에 한번에 나타남 모든 요소에 .7초 후에 나타나라고 명령했기 때문
		opacity: 1
	})
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true
});

new Swiper('.promotion .swiper-container', {
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	// 화면 정 가운데서 사용자에게 보여지는 활성화된 슬라이드 클래스 명은 swiper-slide-active임
	loop: true,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
		clickable: true //사용자의 페이지 번호 요소 제어 여부
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});
new Swiper('.awards .swiper-container', {
	slidesPerView: 5,
	spaceBetween: 30,
	autoplay: true,
	loop: true,
	navigation: {
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next'
	}
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

// 토글 버튼을 눌렀을 때 요소가 나오고, 사라지게 하는 코드. css만 가지고 구현하기에 한계가 있다면 gsap을 이용하지만 
// 버튼을 통해서 단순히 나오고 사라지게 하는 정도는 css를 통해서 제어 가능하다.
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion;
	// 변수의 값을 지속적으로 반대 값으로 전환시켜줄 수 있음
	if (isHidePromotion) {
		// 숨김 처리
		promotionEl.classList.add('hide');
	} else {
		// 보임 처리
		promotionEl.classList.remove('hide');
	}
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1, //무한 반복
		yoyo: true,
		ease: Power1.easeInOut,
		delay: random(0, delay) // 몇 초 후에 애니메이션 시작
	});
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
	new ScrollMagic
		.Scene({
			triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
			triggerHook: 0.8
		})
		.setClassToggle(spyEl, 'show')
		.addTo(new ScrollMagic.Controller());
});