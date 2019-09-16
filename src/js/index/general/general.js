let generaText = document.querySelector('.general__text');
let generalImage = document.querySelector('.general__image img');
let generalTriggerPart = document.querySelector('.general__trigger');
let general = $('.general').children();
let headerSearchColor = document.querySelector('.header__search');
let headerLoginColor = document.querySelector('.header__login');
let headerBasketColor = document.querySelector('.header__basket');

triggerParts = $('.general__trigger').children('li');

$('.general__trigger li').click(function() {
  var i = $('.general__trigger li').index(this);
  moveTo(i);
});

function changingHeader(src, innerText, bodyStyle, bgStyle) {
  generalImage.src = src;
  generaText.innerText = innerText;
  document.body.style.backgroundColor = bodyStyle;
  headerSearchColor.style.backgroundColor = bgStyle;
  headerLoginColor.style.backgroundColor = bgStyle;
  headerBasketColor.style.backgroundColor = bgStyle;
}

function moveTo(newIndex) {
  var i = newIndex;
  triggerParts
    .removeClass('general__trigger-part--active')
    .eq(i)
    .addClass('general__trigger-part--active');

  switch (i) {
    case 0:
      changingHeader(
        './static/img/general/ice-cream0.png',
        'Крем-брюле и пломбир\nс малиновым джемом',
        '#849d8f',
        '#a1b5aa'
      );
      break;
    case 1:
      changingHeader(
        './static/img/general/ice-cream1.png',
        'Шоколадный пломбир\nи лимонный сорбет',
        '#8996a6',
        '#a2adb9'
      );
      break;
    case 2:
      changingHeader(
        './static/img/general/ice-cream2.png',
        'Пломбир с помадкой\nи клубничный щербет',
        '#9d8b84',
        '#b3a59f'
      );
      break;
  }
}
