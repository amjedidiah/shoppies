const animButtons = (position) => {
  const btnNominate = $('.btn-nominate--header');

  return position === 'header' ?
    btnNominate.removeClass('d-none') :
    btnNominate.addClass('d-none');
};

const animForm = (position) => {
  const form = $('.form--header');
  const headerCont = $('#header .container');

  return position === 'header' ?
    (form.addClass('order-7 mb-3 mb-lg-0'), headerCont.addClass('flex-wrap')) :
    (form.removeClass('order-7 mb-3 mb-lg-0'),
    headerCont.removeClass('flex-wrap'));
};

const animHeader = () => {
  const {pageYOffset, innerHeight} = window;
  const header = document.querySelector('#header');

  let btnNomPos = 'jumbo';

  if (pageYOffset >= innerHeight * 0.85 - 180) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-primary--custom');
    btnNomPos = 'header';
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-primary--custom');
    btnNomPos = 'jumbo';
  }

  animButtons(btnNomPos);
  animForm(btnNomPos);
};

window.addEventListener('load', animHeader);
window.addEventListener('scroll', animHeader);
