import React from 'react';
import './Home.css'; // CSS 파일도 불러올 예정

function Home() {
  return (<>
  {/* Header */}
  <header>
    <div className="header-container">
      <div className="logo">
        <div className="logo-icon" />
        <span>
          지호<span style={{ color: "#6b7280" }}>사이트</span>
        </span>
      </div>
      <nav>
        <a href="#">포트폴리오 제작하기</a>
        <a href="#">정보찾기</a>
        <a href="#">자료실</a>
      </nav>
      <button className="login-btn" onclick="openLoginModal()">
        로그인/회원가입
      </button>
    </div>
  </header>
  {/* Hero Section */}
  <section className="hero">
    <h1>
      이직을 미루고 있다면
      <br />
      <span className="highlight">AI 포트폴리오로 커리어 점프</span>
    </h1>
    <p>그동안 미뤄왔던 포트폴리오, 빠르게 만들고 새로운 점에 도전하세요!</p>
    <div className="cta-container">
      <div className="cta-info">이력서를 1분안에 만들어 보세요</div>
      <button className="cta-btn" onclick="openSignupModal()">
        바로 제작하기
      </button>
    </div>
  </section>
  {/* Portfolio Carousel */}
  <section className="carousel-section">
    <div className="carousel-container">
      <div className="carousel-track" id="carouselTrack">
        <div className="portfolio-card">
          <div className="card-inner card-1">
            <h3>
              GILDONG HONG's
              <br />
              PORTFOLIO
            </h3>
            <p>2024</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-2">
            <h3>Portfolio</h3>
            <p>Brand Marketing 2025</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-3">
            <h3>PORTFOLIO</h3>
            <p>Brand Marketing</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-4">
            <h3>PORTFOLIO</h3>
            <p>Brand Marketing</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-5">
            <h3>PORTFOLIO</h3>
            <p>2025</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-6">
            <h3>
              Career
              <br />
              Portfolio
            </h3>
            <p>안성태은 홍길동입니다</p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-inner card-7">
            <h3>PORTFOLIO</h3>
            <p>Gildong Hong</p>
          </div>
        </div>
      </div>
    </div>
    <div className="indicators" id="indicators">
      <button className="indicator active" onclick="goToSlide(0)" />
      <button className="indicator" onclick="goToSlide(1)" />
      <button className="indicator" onclick="goToSlide(2)" />
      <button className="indicator" onclick="goToSlide(3)" />
      <button className="indicator" onclick="goToSlide(4)" />
      <button className="indicator" onclick="goToSlide(5)" />
      <button className="indicator" onclick="goToSlide(6)" />
    </div>
  </section>
  {/* Login Modal */}
  <div className="modal" id="loginModal" onclick="closeLoginModal(event)">
    <div className="modal-content" onclick="event.stopPropagation()">
      <h2>로그인</h2>
      <div className="form-group">
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요" />
      </div>
      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <button className="submit-btn" onclick="handleLogin()">
        로그인
      </button>
      <button className="close-btn" onclick="closeLoginModal()">
        닫기
      </button>
    </div>
  </div>
  {/* Signup Modal */}
  <div className="modal" id="signupModal" onclick="closeSignupModal(event)">
    <div className="modal-content" onclick="event.stopPropagation()">
      <h2>회원가입</h2>
      <div className="form-group">
        <label>이름</label>
        <input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div className="form-group">
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요" />
      </div>
      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <button className="submit-btn" onclick="handleSignup()">
        회원가입
      </button>
      <button className="close-btn" onclick="closeSignupModal()">
        닫기
      </button>
    </div>
  </div>
</>
);
}

export default Home;
