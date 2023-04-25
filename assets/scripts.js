let btnAdd = document.querySelector("#add"); // Boton para agregar tarea
let contentTareas = document.querySelector("#tareas");

// El usuario debe ingresar como minimo 5 caracteres, recien en ese momento se activa el boton
let tareaNueva = document.querySelector("#newTarea");
tareaNueva.addEventListener('input', () => {
    if (tareaNueva.value.length > 4) {
        btnAdd.disabled = false;
    } else {
        btnAdd.disabled = true;
    }
  });


// Event para agregar tarea ingresada
btnAdd.addEventListener("click", ()=> {
    let tarea = document.createElement("article");
    tareaNueva = document.querySelector("#newTarea");
    let contenidoTarea = tareaNueva.value;

    let parrafo = document.createElement("p");
    parrafo.textContent = contenidoTarea;
    
    let btn = document.createElement("button");
    btn.classList.add("removeTarea");
    btn.textContent = "X";
    
    

    tarea.append(parrafo);
    tarea.append(btn);
    tarea.classList.add("tarea");

    contentTareas.append(tarea);

    tareaNueva.value = "";

    let botones = document.querySelectorAll('.removeTarea');
  

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
        boton.parentNode.remove();
        });
    });
    
    tareaNueva = document.querySelector("#newTarea");
});