document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку быстрого возврата наверх
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Показываем кнопку, когда прокрутка превышает высоту окна
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    // Плавная прокрутка наверх при клике на кнопку
    scrollToTopBtn.addEventListener("click", function() {
      document.body.scrollTop = 0; // Для Safari
      document.documentElement.scrollTop = 0; // Для остальных браузеров
    });
  });