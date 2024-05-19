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
/*
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
});*/

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

function validandoAndo() {
  let name = document.getElementById('nombre').value;
  let iname = document.getElementById('nombre');
  let email = document.getElementById('email').value;
  let iemail = document.getElementById('email');
  let description = document.getElementById('mensaje').value;
  let idescription = document.getElementById('mensaje');

  let name_error = document.querySelector('#error1');
  let name_error2 = document.querySelector('#error2');
  let name_error3 = document.querySelector('#error3');


  //validacion nombre
  if (name == "") {
      name_error.innerHTML = "Nombre Requerido";
      name_error.style.color = "red";
      iname.style.borderColor = "red";

  } else {
      name_error.innerHTML = "";
      iname.style.borderColor = "green";
  }

  //validar correo
  let re = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|usal)\.(?:|com|edu)+$/;
  if (email == "") {
      name_error2.innerHTML = "Correo Requerido";
      name_error2.style.color = "red";
      iemail.style.borderColor = "red";

  } else if (!re.exec(document.getElementById('email').value)) {
      name_error2.innerHTML = "Correo no valido";
      name_error2.style.color = "red";
      iemail.style.borderColor = "red";
  } else {
      name_error2.innerHTML = "";
      iemail.style.borderColor = "green";
  }

  //validar comentario
  if (description == "") {
      name_error3.innerHTML = "Comentario Requerido";
      name_error3.style.color = "red";
      idescription.style.borderColor = "red";
      rvalue = false;
  } else if ((description).length < 50) {
      name_error3.innerHTML = "Comentario demasiado corta";
      name_error3.style.color = "red";
      idescription.style.borderColor = "red";
  } else {
      name_error3.innerHTML = "";
      idescription.style.borderColor = "green";
  }


}