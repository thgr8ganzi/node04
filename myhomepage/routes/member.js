// 회원정보 관리용 모든 웹페이지에 대한 요청과 응답을 처리하는 라우터 파일
const express = require('express');
const router = express.Router();

// 회원가입
router.get('/entry',(req,res)=>{
    res.render('entry')
})
// 회원 로그인
router.get('/login',(req,res)=>{
    res.render('login')
})
// 회원 프로필
router.get('/profile',(req,res)=>{
    res.render('profile')
})
module.exports = router;
