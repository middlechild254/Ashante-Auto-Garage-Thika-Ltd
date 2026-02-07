document.querySelectorAll('.car-slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
});







/* ===============================
   FAQ ACCORDION FUNCTIONALITY
================================ */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;

    document.querySelectorAll('.faq-item').forEach(faq => {
      if (faq !== item) {
        faq.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});






document.addEventListener("DOMContentLoaded", function () {

  const phoneNumber = "254721883262";

  document.querySelectorAll(".inquire-btn").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const title = this.dataset.title;
      const details = this.dataset.details;

      const message =
        `Hello Ashante Auto Garage,\n\n` +
        `I am interested in the following:\n` +
        `${title}\n` +
        `${details}\n\n` +
        `Please share more information.`;

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");
    });
  });

});
