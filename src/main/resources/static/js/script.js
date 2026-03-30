// 전역 변수
let currentSlide = 0;
const totalSlides = 7;
let autoSlideInterval;

// 캐러셀 자동 슬라이드 시작
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 3000);
}

// 캐러셀 업데이트
function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    track.style.transform = `translateX(-${currentSlide * 25}%)`;
    
    // 인디케이터 업데이트
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// 특정 슬라이드로 이동
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    
    // 자동 슬라이드 재시작
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// 로그인 모달 열기
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

// 로그인 모달 닫기
function closeLoginModal(event) {
    if (!event || event.target.id === 'loginModal') {
        document.getElementById('loginModal').classList.remove('active');
    }
}

// 회원가입 모달 열기
function openSignupModal() {
    document.getElementById('signupModal').classList.add('active');
}

// 회원가입 모달 닫기
function closeSignupModal(event) {
    if (!event || event.target.id === 'signupModal') {
        document.getElementById('signupModal').classList.remove('active');
    }
}

// 로그인 처리
function handleLogin() {
    alert('로그인 기능이 실행됩니다');
    closeLoginModal();
}

// 회원가입 처리
function handleSignup() {
    alert('회원가입 기능이 실행됩니다');
    closeSignupModal();
}

// 페이지 로드 시 자동 슬라이드 시작
document.addEventListener('DOMContentLoaded', function() {
    startAutoSlide();
});