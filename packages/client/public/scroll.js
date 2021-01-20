const animHeader = () => {
  const {pageYOffset, innerHeight} = window;
  const header = document.querySelector('#header');

  if (pageYOffset >= innerHeight * 0.25) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-primary--custom');
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-primary--custom');
  }
};

window.addEventListener('load', animHeader);
window.addEventListener('resize', animHeader);
window.addEventListener('scroll', animHeader);
