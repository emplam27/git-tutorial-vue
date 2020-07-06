const scrollHeight = 50;

function scrollSideBar() {
  if (window.scrollY > scrollHeight) {
    let top = window.scrollY - scrollHeight + 50;
    document.getElementById('nav').style.top = top + 'px';
  } else {
    document.getElementById('nav').style.top = '50px';
  }
}

scrollSideBar();

window.addEventListener('scroll', scrollSideBar)