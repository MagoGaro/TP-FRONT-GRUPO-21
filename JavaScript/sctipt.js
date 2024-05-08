//Menu desplegable
const dropdownButtons = document.querySelectorAll('.desplegable_btn');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const desplegable_content = button.nextElementSibling;
    desplegable_content.classList.toggle('show');
  });
});


//Efecto Translucido para la barra de menu al hacer scroll
window.addEventListener('scroll', function() {
  const navegacion = document.getElementById('barra_na');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const valor1 = 'background-color: rgba(255, 255, 255,0.7);'
  const valor2 = 'background-color: rgba(255, 255, 255,1);';

  if (scrollTop > 0){
    navegacion.style.cssText = valor1;
  } else{
    navegacion.style.cssText = valor2;
  }

  navegacion.addEventListener('mouseover', () => {
    navegacion.style.cssText = valor2;
  });

  navegacion.addEventListener('mouseout', () => {
    navegacion.style.cssText = valor1;
  });


});

