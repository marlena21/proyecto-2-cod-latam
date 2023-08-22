const listaMenu = document.querySelectorAll('.menu-item');

listaMenu.forEach(function(lista){
    lista.addEventListener('click', function(e){
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');

    });
});

/*boton cambiar tipo de fuente*/

const cambioBtn = document.querySelector('#cambiarFuente');

cambioBtn.addEventListener('click',function(){
    document.body.classList.toggle('cambio-Fuente');
});

