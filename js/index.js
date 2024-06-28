const mostrar = document.getElementById("mostrarNum");

const botones = document.querySelectorAll(".numeros__p");


botones.forEach((numero) => {

    numero.addEventListener("click", () => {

        if(numero.innerHTML == "C") {   
            mostrar.innerHTML = "0";
            return
        }

        if(numero.innerHTML == "=") {
            let total = eval(mostrar.innerHTML);
            mostrar.innerHTML = total;
            return
        }

        (mostrar.innerHTML == "0") ? mostrar.innerHTML = numero.innerHTML : mostrar.innerHTML += numero.innerHTML;

    })
})


