function footerComponent(el) {
  const footerEl = document.createElement("footer");
  footerEl.innerHTML = `<footer class="footer">
  <div class="footer__content">
      <img class="footer__content__nombre" src="./img-m4/MARCE.png" alt="">
      </div>
      <div class="footer__logo">
          <div class="footer__logo__ig">
              <img class="footer__logo__ig__instagram" src="./img-m4/instagram-footer.png" alt="">
          </div>
          <div class="footer__logo__lk">
           <img class="footer__logo__lk__linkedin" src="./img-m4/LinKedin.png" alt="">
       </div>
       <div class="footer__logo__gh">
           <img class="footer__logo__gh__github" src="./img-m4/Gibhut.png" alt="">
       </div>
   </div>
</footer>`;
  el.appendChild(footerEl);
}
