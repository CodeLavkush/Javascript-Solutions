function smoothScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

let btn = document.querySelector(".btn");

btn.addEventListener('click', ()=> {
    smoothScrollToTop();
})