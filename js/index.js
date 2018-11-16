window.onload = function () {
  const sectionNodes = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.footer a');
  const grade = document.querySelector('.grade').textContent;
  const stars = document.querySelectorAll('.starsList .star');
  const clickLogin = document.querySelector('.clickLogin');
  const goBackHome = document.querySelector('#login .goBack .goBackHome');
  const atOnceLogin = document.querySelector('#indent .login .atOnceLogin');
  const registerOrLogin = document.querySelector('#mine .register');
  const footer = document.querySelector('.footer');
  const oldUserLoginPage = document.querySelector('#oldUserLogin .goBack .goBackHome');
  const loginChoose = document.querySelectorAll('#login .form .loginMode');
  const inputChoose = document.querySelectorAll('#login .form >div');
  let pageNum = 0;
  //控制页面显示/隐藏
  for (var i = 0; i < pages.length; i++) {
    pages[i].index = i;
    pages[i].addEventListener('touchend', function () {
      for (var j = 0; j < pages.length; j++) {
        pages[j].className = '';
        sectionNodes[j].className = ''
      }
      this.className = 'active';
      sectionNodes[this.index].className = 'on'
      pageNum = this.index;
      console.log(pageNum);
    })
  }
  //切换登录选择
  for (var i = 0; i < loginChoose.length; i++) {
    loginChoose[i].index = i;
    loginChoose[i].addEventListener('touchend', function () {
      for (var j = 0; j < loginChoose.length; j++) {
        loginChoose[j].className = 'loginMode';
        inputChoose[j].className = '';
      }
      this.className = 'loginMode active';
      inputChoose[this.index].className = 'on';
    });
  }
  //新用户退出页面
  goBackHome.addEventListener('touchend', function () {
    quitPage(pageNum, 4)
    //退出登录界面
    // goBackHome.addEventListener('touchend',function () {
    //   sectionNodes[pageNum].className = 'on';
    //   sectionNodes[4].className = '';
    //   footer.style.visibility = 'visible';
    // });
  });
  //老用户退出页面
  oldUserLoginPage.addEventListener('touchend', function () {
    quitPage(pageNum, 5)
  });
  // 外卖页面登录
  clickLogin.addEventListener('touchend', loginPublic);
  //订单页面登录
  atOnceLogin.addEventListener('touchend', loginPublic);
  //个人页面登录
  registerOrLogin.addEventListener('touchend', loginPublic);
  //用户登录页面
  function loginPublic() {
    for (var i = 0; i < 4; i++) {
      sectionNodes[i].className = '';
    }
    sectionNodes[4].className = 'on';
    footer.style.visibility = 'hidden';
  }
  //用户退出界面
  function quitPage(pageNum, index) {
    sectionNodes[pageNum].className = 'on';
    sectionNodes[index].className = '';
    footer.style.visibility = 'visible';
  }
  //轮播图
  new Swiper('.swiper-container', {
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true
  });
  //星星处理
  const gradeFloor = Math.floor(grade);
  const gradeRound = Math.round(grade - gradeFloor);
  for (var i = 0; i < stars.length; i++) {
    if (i < gradeFloor) {
      stars[i].className = 'star on'
    } else if (i < gradeFloor + gradeRound) {
      stars[i].className = 'star half'
    } else {
      stars[i].className = 'star off'
    }
  }
  
  
  
  
  
  
  
  
  
  
  
};