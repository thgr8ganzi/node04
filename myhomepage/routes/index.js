// index.js 라우터 파일은 기본적인 메인페이지/사이트 공통기능에대한 시용지 웹페이지 요청과 응답을 처리합니다.
// 라우터 파일의 사용자 요청과 응답 시능설계는 백엔드 개발자가 담당합니다.
// 상품에 대한 웹페이지/데이터에 대한 요청과 응답은 예를 들어 product.js 라우터 파일을 만든다.
// 회원에 대한 홈페이지/데이터에 대한 요청과 응답을 member.js 라우터 파일을 만든다.
// 사용자는 URL 을 통해서 서버에 요청한다.
// 사용자가 요청할 주소 체계에 대한 설계/구현을 백엔드 개발자가 합니다.
// 모든 라우터 파일은 기초 주소 체꼐를 가진다.
// 모든 라우터 파일의 기초 주소체계 정의는 app.js 파일 내에서 설정한다.

// express 웹 프레임워크를 참조합니다.
var express = require('express');
// express 객체의 Router 메소드를 호출해서 사용자 요청과 응답을 처리할 라우터 객체를 생성합니다.
var router = express.Router();

// 실질적인 해당 라우터 파일내에 라우팅 메소드를 통해 개별 사용자가 요청/응답기능을 구현합니다.
// 라우팅 메소드를 통해 실제 사용자 요청과 응답을 구현한다.
// router.get('호출주소',호출될때 콜백함수)
router.get('/', function(req, res, next) {
  res.render('index', { title: '이지수' });
});

// 웹사이트 공통 기능 중 문의하기 웹페이지에 대한 요청과 응답을 처리하는 라우팅 메소드
router.get('/contact', (req, res)=>{
  // res 객체는 웹서버에서 웹 브라우저로 전달할 기능을 정의 합니다.
  // res.render('뷰 파일명') 메소드는 views 폴더내에 있는 지정된 뷰 파일을 웹브라우저에 반환 합니다.
  // res 객체는 HTTPResponse 객체로 서버에서 클라이언트로 정보를 전달하는 객체
  res.render('index');
})
router.get('/test',(req,res)=>{
  res.render('index')
})
router.get('/sample/test/test1',(req,res)=>{
  res.render('index')
})


// 라우터 파일은 해당 라우터 파일에 정의된 router 를 외부로 반환합니다
module.exports = router;
