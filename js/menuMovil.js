//Objeto con propiedades del menu
let propMenu = {

    burguerMenu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menuActivo: false,
    elemMenu: document.querySelectorAll('#slideMenu .menu-principal a')

}


//Objeto con metodos del menu
let metMenu = {

    inicio: function(){

        propMenu.burguerMenu.addEventListener('click', metMenu.toggleMenu);

        for (let i = 0; i < propMenu.elemMenu.length; i++){
            propMenu.elemMenu[i].addEventListener('click', metMenu.ocultarMenu);
        }

    },

    toggleMenu: function(){

        if(propMenu.menuActivo == false){

            propMenu.menuActivo = true;
            propMenu.slideMenu.classList.add('active');


        } else {

            propMenu.menuActivo = false;
            propMenu.slideMenu.classList.remove('active');


        }

    },

    ocultarMenu: function(){

        propMenu.menuActivo = false;
        propMenu.slideMenu.classList.remove('active');


    }


}

metMenu.inicio();