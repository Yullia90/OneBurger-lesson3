//document.getElementsByClassName('main-title')[0].style.color = 'red'; //меняем цвет заголовка
//робимо скрол от кнопки Новое меню
document.getElementById('main-action-button').onclick = function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
};

//делаем скрол по якорям
let links = document.querySelectorAll('.menu-item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}

//при нажатии на кнопку купить, попадаем оформить заказ
let buttons = document.getElementsByClassName('product-button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

//обращаемся к кажжому полю
let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
//делаем валидацию форми
document.getElementById('order-action').onclick = function () {
  let hasError = false;
  [burger, name, phone].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = 'red';
      hasError = true;
    } else {
      item.parentElement.style.background = '';
    }
  });
  //проверяем на ошибки
  if (!hasError) {
    [burger, name, phone].forEach(item => {
      item.value = ' '; //чистим строку
    });
    alert('Спасибо за заказ!');
  }
};

let prices = document.getElementsByClassName('products-item-price'); //поиск всех цен

//меняем валюту
document.getElementById('change-currency').onclick = function (e) {
  let currentCurrency = e.target.innerText; //текущая валюта
  //новая валюта на которую ми изменяем и коефициент по которому будем пересчитивать цену
  let newCurrency = '$';
  let coefficient = 1;
  // будем определять какая сейчас валюта
  if (currentCurrency === '$') {
    newCurrency = '₴';
    coefficient = 38;
  } else if (currentCurrency === '₴') {
    newCurrency = '€';
    coefficient = 3;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  } else if (currentCurrency === '¥') {
    newCurrency = '£';
    coefficient = 0.9;
  }
  e.target.innerText = newCurrency;
  //перебираем циклом по каждому елемент и меняем каждое значение по каждому курсу
  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
  }
};
