(function(){

    //Propiedades tabs
let propTab = {

    primerEncabezado: document.getElementById('encabezado_menu').firstElementChild,
    primerContenido: document.getElementById('contenido_menu').firstElementChild,
    enlacesEncabezados: document.querySelectorAll('#encabezado_menu li a'),
    liEncabezados: document.querySelectorAll('#encabezado_menu li'),
    divsContenido: document.querySelectorAll('#contenido_menu > div'),
    contenidoAcivo: null
}


//Metodos tab
let metTab = {

    inicio: function(){

        propTab.primerEncabezado.className = 'active';
        propTab.primerContenido. className = 'active';

        for (let i = 0; i < propTab.enlacesEncabezados.length; i++){

            propTab.enlacesEncabezados[i].addEventListener('click', metTab.evento);

        }
    },

    evento: function(e){

        e.preventDefault();

        for (let i = 0; i < propTab.liEncabezados.length; i++){

            propTab.liEncabezados[i].className = '';

        }

        for (let i = 0; i < propTab.divsContenido.length; i++){

            propTab.divsContenido[i].className = '';

        }

        this.parentElement.className = 'active';

        propTab.contenidoAcivo = this.getAttribute('href');
        document.querySelector(`#contenido_menu ${propTab.contenidoAcivo}`).className = 'active';
        document.querySelector(`#contenido_menu ${propTab.contenidoAcivo}`).style.opacity = '0';

        
        setTimeout(function(){

            document.querySelector(`#contenido_menu ${propTab.contenidoAcivo}`).style.opacity = '1';

        }, 100);

    }

}

metTab.inicio();

}())