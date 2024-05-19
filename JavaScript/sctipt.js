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

//Validar formulario

const form = document.querySelector(".form")
// let nombre = document.querySelector("#nombre")

form.addEventListener("submit", (event)=> {
  event.preventDefault();

  const title = nombre.value.trim();

  if (title.length >=3){
  } else {
    // alert("Tiene que tener 3 caracteres o más")
    
    let errorAlert = document.querySelector(".error");

    errorAlert.textContent = "Tiene que tener 3 caracteres o más";

    setTimeout(() => {
      errorAlert.textContent = "";
    },2000 );
  }
});

// Slider Comentarios

const slider = document.querySelector ("#slider");  //traigo el id slider
let sliderSection = document.querySelectorAll(".sliderSection"); //llamo la clase sliderSection
let sliderSectionLast = sliderSection[sliderSection.length -1]; //

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next() { //Funcion boton para qvanzar a la siguiente seccion
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function prev() {   //Funcion boton para volver a la seccion previa
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}



btnRight.addEventListener("click", function(){
    next();
})

btnLeft.addEventListener("click", function(){
    prev();
})
