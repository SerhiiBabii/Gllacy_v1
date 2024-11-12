$(document).ready(function () {
  //Variables for Search
  let searchBtn = document.querySelector('.header__search');
  let searchArea = document.querySelector('.header__search-area');
  let searchImg = document.getElementById('img__search');
  let colorBgBefore = '#a1b5aa';
  let colorBgAfter = '#f8f7f4';

  //Variables for Login
  let loginBtn = document.querySelector('.header__login');
  let loginWord = document.querySelector('.header__login span');
  let loginArea = document.querySelector('.header__login-area');
  let loginImg = document.getElementById('img__login');
  let colorWordBefore = '#fff';
  let colorWordAfter = '#323232';

  //Variables for Basket
  let basketBtn = document.querySelector('.header__basket');
  let basketArea = document.querySelector('.header__basket-area');
  let basketImg = document.querySelector('.header__basket img');
  let basketWord = document.querySelector('.header__basket span');

  searchBtn.addEventListener('click', showSearch);

  document.body.addEventListener('keydown', hiddenModal);

  $(document).on('mouseup', function (e) {
    e.preventDefault();

    let search_Area = $('.header__search-area');
    let search_Button = $('.header__search');
    let login_Area = $('.header__login-area');
    let login_Button = $('.header__login');
    let basket_Area = $('.header__basket-area');
    let basket_Button = $('.header__basket');

    colorSelection();

    if (
      !search_Area.is(e.target) &&
      search_Area.has(e.target).length === 0 &&
      search_Button.has(e.target).length === 0
    ) {
      $(searchBtn).css('backgroundColor', colorBgBefore);
      $(searchImg).attr('src', './static/svg/loupe.svg');
      search_Area.addClass('visually-hidden');
    }

    if (
      !login_Area.is(e.target) &&
      login_Area.has(e.target).length === 0 &&
      login_Button.has(e.target).length === 0
    ) {
      $(loginBtn).css('backgroundColor', colorBgBefore);
      $(loginWord).css('color', colorWordBefore);
      $(loginImg).attr('src', './static/svg/entrance--white.svg');
      login_Area.addClass('visually-hidden');
    }

    if (!basketArea) return;
    else if (
      basketArea.style.display === 'block' &&
      !basket_Area.is(e.target) &&
      basket_Area.has(e.target).length === 0 &&
      basket_Button.has(e.target).length === 0
    ) {
      showBasket(e);
      $(basketBtn).css('backgroundColor', colorBgBefore);
      $(basketWord).css('color', colorWordBefore);
    }
    e.stopPropagation();
  });

  loginBtn.addEventListener('click', showLogin);

  $('.header__catalog li:first-child a').on('click', function (e) {
    e.preventDefault();
    $('.header__menu').slideToggle('slow');
    $('.header__menu, .header__catalog li:first-child').mouseleave(function () {
      if ($('.header__menu').is(':hover') || $('.header__menu').is(':focus')) {
        $('.header__menu').show();
      } else if (
        !$('.header__menu').is(':hover') &&
        !$('.header__menu').is(':focus') &&
        !$('.header__catalog li:first-child').is(':hover') &&
        !$('.header__catalog li:first-child').is(':focus')
      ) {
        setTimeout(function () {
          $('.header__menu').fadeOut(400);
        }, 600);
      }
    });
  });

  /*
  $(document).ready(function() {
    var t = 500; // timeOut value
    $(".header__catalog li:first-child").click(
      function(e) {
        e.preventDefault();
        $(".header__menu").toggle(400)
      },
      // function() {
      // 	if (!$(".header__menu").is(":hover") && !$(".header__menu").is(":focus"))
      // 	$(".header__menu").fadeOut(400)
      // }
    )
    $(".header__menu").hover(
      function() {
        clearTimeout(t);
      },
      function() {
        var t = setTimeout(() => {
          $(".header__catalog li:first-child").trigger("mouseout")
        }, 800)
      }
    )
  })
  */

  let src = $(basketWord).text() === 'Empty' ? './static/svg/basket.svg' : './static/svg/basket-red.svg';

  $(basketImg).attr('src', src);

  $(basketBtn).on('click', showBasket);

  //Function for finding backgrond color
  function colorSelection() {
    if ($('body').css('background-color') == 'rgb(132, 157, 143)') {
      return (colorBgBefore = '#a1b5aa');
    } else if ($('body').css('background-color') == 'rgb(137, 150, 166)') {
      return (colorBgBefore = '#a2adb9');
    } else if ($('body').css('background-color') == 'rgb(157, 139, 132)') {
      return (colorBgBefore = '#b3a59f');
    }
  }

  function hiddenModal(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      colorBgBefore = colorSelection();
      searchArea.classList.add('visually-hidden');
      searchBtn.style.backgroundColor = colorBgBefore;
      searchImg.src = './static/svg/loupe.svg';

      loginArea.classList.add('visually-hidden');
      loginBtn.style.backgroundColor = colorBgBefore;
      loginImg.src = './static/svg/entrance--white.svg';
      loginWord.style.color = colorWordBefore;

      if (basketArea && basketArea.style.display === 'block') {
        showBasket(e);
      }
    }
  }

  function showSearch(e) {
    e.preventDefault();
    colorBgBefore = colorSelection();
    searchArea.classList.toggle('visually-hidden');

    if (searchArea.classList.contains('visually-hidden')) {
      searchBtn.style.backgroundColor = colorBgBefore;
      searchImg.src = './static/svg/loupe.svg';
    } else {
      searchBtn.style.backgroundColor = colorBgAfter;
      searchImg.src = './static/svg/loupe--black.svg';
    }
    e.stopPropagation();
  }

  function showLogin(e) {
    e.preventDefault();
    colorBgBefore = colorSelection();
    loginArea.classList.toggle('visually-hidden');

    if (loginArea.classList.contains('visually-hidden')) {
      loginBtn.style.backgroundColor = colorBgBefore;
      loginImg.src = './static/svg/entrance--white.svg';
      loginWord.style.color = colorWordBefore;
    } else {
      loginBtn.style.backgroundColor = colorBgAfter;
      loginImg.src = './static/svg/entrance--black.svg';
      loginWord.style.color = colorWordAfter;
    }
    e.stopPropagation();
  }

  function showBasket(e) {
    e.preventDefault();
    $(basketArea).fadeToggle();
    // $(basketArea).toggleClass("visually-hidden");
    // let src = ($(basketImg).attr("src") === "./src/svg/basket.svg")
    // 								? "./src/svg/basket-red.svg"
    // 								: "./src/svg/basket.svg";
    e.stopPropagation();
  }
});
