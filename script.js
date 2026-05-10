window.addEventListener('DOMContentLoaded', () => {
  const menuGrid = document.querySelector('.menu-grid');
  const menu = JSON.parse(localStorage.getItem('menu')) || [];

  menuGrid.innerHTML = '';

  menu.forEach(dish => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <img src="${dish.image}" style="width:100%;border-radius:10px;">
      <h3>${dish.name}</h3>
      <p>${dish.desc}</p>
      <p class="price">${dish.price} FCFA</p>
    `;
    menuGrid.appendChild(div);
  });

  // Initialize gallery slider if needed
  const slides = document.querySelectorAll('.gallery-grid img');
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
  setInterval(nextSlide, 3000);
});

console.log('Menu chargé depuis admin avec images locales.');