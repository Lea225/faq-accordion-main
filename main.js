document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach((item) => {
      const question = item.querySelector('.question');
      const iconPlus = item.querySelector('.icon-plus');
      const iconMinus = item.querySelector('.icon-minus');
      const answer = item.querySelector('.answer');
  
      iconPlus.addEventListener('click', function () {
        // Afficher la réponse
        answer.style.display = 'block';
        // Changer les icônes
        iconPlus.style.display = 'none';
        iconMinus.style.display = 'inline-block';
      });
  
      iconMinus.addEventListener('click', function () {
        // Cacher la réponse
        answer.style.display = 'none';
        // Changer les icônes
        iconPlus.style.display = 'inline-block';
        iconMinus.style.display = 'none';
      });
    });
  });
  