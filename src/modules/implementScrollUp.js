export default function implementScrollUp() {
  let isScroll = false;
  document.body.onscroll = () => {
    const scrollTop = window.pageYOffset
      || (document.documentElemen
          || document.body.parentNode
          || document.body).scrollTop;
    if (scrollTop > 0) {
      isScroll = true;
      document.getElementById('scroll-up').style.display = 'unset';
    } else {
      isScroll = false;
      document.getElementById('scroll-up').style.display = 'none';
    }
    if (window.screen.width < 768) {
      document.getElementById('scroll-up').style.display = 'none';
    }
  };
  document.getElementById('scroll-up').onclick = () => {
    if (isScroll) {
      window.scrollBy({
        top: -3000,
        behavior: 'smooth',
      });
    }
  };
}