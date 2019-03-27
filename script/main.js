function paginaCargada(){
    //var boton = document.querySelector('button');
    var btn = document.querySelector('.agregar');

    var red = document.querySelector('.info__r');
    var green = document.querySelector('.info__g');
    var blue = document.querySelector('.info__b');

    function crearUsuario(){
        var contenedor = document.querySelector('.usuarios');
        var inputNom = document.querySelector('.info__nombre');
        var inputImg = document.querySelector('.info__imagen');
        var anterior = contenedor.innerHTML;

        contenedor.innerHTML = anterior + '<div class="usuarios__persona" style="background-image: url('+inputImg.value+') ; border-color: rgb('+red.value+','+green.value+','+blue.value+')"><p class="usuarios__nombre">'+inputNom.value+'</p></div>';

    //-----------------------Eliminar Usuarios-----------------------------------------------------------------------------------------------------------------

        var usuarios = document.querySelectorAll('.usuarios__persona');
        function recorrerUsuarios(user){
            function eliminarUusuario(){
                user.remove();
            }
            user.addEventListener('click', eliminarUusuario);
        }
        usuarios.forEach(recorrerUsuarios);
    }
    btn.addEventListener('click', crearUsuario);

    //-----------------------Eliminar Usuarios-----------------------------------------------------------------------------------------------------------------                         

    function cambioColor(){
        var barraColor = document.querySelector('.info__barra');

        barraColor.style.background = 'rgb('+red.value+','+green.value+','+blue.value+')';
    }
    red.addEventListener('input', cambioColor);
    green.addEventListener('input', cambioColor);
    blue.addEventListener('input', cambioColor);
    //btn.addEventListener('change', crearUsuario);

    /*function cambiar(){
        var cont = document.querySelector('.contenedor');
        var anterior = cont.innerHTML;
        var input = document.querySelector('.color');
        console.log(input.value);
        cont.innerHTML = anterior + '<p style="color:'+input.value+'"><b>otro</b> mensaje</p>';
    }
    boton.addEventListener('click', cambiar);*/


    /*var imagen = document.querySelector('.imagen');
    var seleccionada = 0;
    var anterior = 0;
    function eventTeclado(event){
        console.log(event.code);
        switch(event.code){
            case "ArrowRight":
            anterior += 30;
            imagen.style.marginLeft = anterior + 'px';
            break;

            case "ArrowLeft":
            anterior -= 30;
            imagen.style.marginLeft = anterior + 'px';
            break;

            case "ArrowUp":
            anterior -= 30;
            imagen.style.marginTop = anterior + 'px';
            break;

            case "ArrowDown":
            anterior += 30;
            imagen.style.marginTop = anterior + 'px';
            break;
        }
    }
    window.addEventListener('keydown', eventTeclado);

    function recorrerImagenes(){
        function seleccionar(){

        }
    }*/

    var imagen = document.querySelector('.imagen');
    var seleccionada = 0;
    var anterior = 0;
    function eventTeclado(event){
        console.log(event.code);
        switch(event.code){
            case "ArrowRight":
            anterior += 30;
            imagen.style.marginLeft = anterior + 'px';
            break;

            case "ArrowLeft":
            anterior -= 30;
            imagen.style.marginLeft = anterior + 'px';
            break;

            case "ArrowUp":
            anterior -= 30;
            imagen.style.marginTop = anterior + 'px';
            break;

            case "ArrowDown":
            anterior += 30;
            imagen.style.marginTop = anterior + 'px';
            break;
        }
    }
    window.addEventListener('keydown', eventTeclado);

    function recorrerImagenes(){
        function seleccionar(){
            
        }
    }
}
window.addEventListener('load', paginaCargada);
