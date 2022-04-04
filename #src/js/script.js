let btn__parameters = document.querySelector('.select__parameters');
let btn__close = document.querySelector('.modal__close');
let modal = document.querySelector('.select__modal');
let body = document.querySelector('body');

btn__parameters.addEventListener('click', function () {
  modal.classList.add('select__modal--active');
  body.classList.add('body--fixed');
});
btn__close.addEventListener('click', function () {
  modal.classList.remove('select__modal--active');
  body.classList.remove('body--fixed');
});

