function goodsOut(data) {
  var out = '';
  for (var key in data) {
    // ES5
    // out+='<div class="products__parts">';
    // out+='<img width="267" height="267" src="'+ data[key].image +'" alt="">';
    // out+='<div class="products__part">';
    // out+='<p class="products__text-price">'+ data[key].cost +'&#8372;<span class="products__text-weight">/кг</span></p>';
    // out+='</div>';
    // out+='<p class="products__small-text">'+ data[key].description +'</p>';
    // out+='<div class="products__bottom-content">';
    // out+='<button class="products__button">Quick view</button>';
    // out+='</div>';
    // out+='</div>';

    // ES6
    out += '<div class="products__parts">';
    out += `<img width="267" height="267" src="${data[key].image}" alt="">`;
    out += '<div class="products__part">';
    out += `<p class="products__text-price">${data[key].cost}&#8372;<span class="products__text-weight">/кг</span></p>`;
    out += '</div>';
    out += `<p class="products__small-text">${data[key].description}</p>`;
    out += '<div class="products__bottom-content">';
    out += `<button class="products__button" data-id="${key}" data-cost="${data[key].cost}">Quick view</button>`;
    out += '</div>';
    out += '</div>';
  }
  $('.products').html(out);
  $('.products__button').on('click', function (e) {
    e.preventDefault();
    let indexProduct = $(this).attr('data-id');
    let costProduct = $(this).attr('data-cost');
    console.log(`Product id - ${indexProduct}. Cost product - ${costProduct}.`); // product tracked what was selected
  });
}

$(document).ready(function () {
  fetch('static/iceCreams.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      goodsOut(data);
    });
});
