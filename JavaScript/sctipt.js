const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

/*
const elemento = document.querySelector('.mi-clase');

elemento.addEventListener('mouseenter', () => {
  elemento.textContent = "Productos ▴";
});

elemento.addEventListener('mouseleave', () => {
  elemento.textContent = "Productos ▾"; 
});*/
