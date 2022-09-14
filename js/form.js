(function(){

    //Objeto con las propiedades de formulario

let propForm = {

    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textError: null


}

//Objeto con los metodos de formulario

let metForm = {

    inicio: function(){

        for(let i = 0; i < propForm.elementos.length;i++){

            if(propForm.elementos[i].type == 'text' || propForm.elementos[i].type == 'email' || propForm.elementos[i].nodeName.toLowerCase() == 'textarea'){

                propForm.elementos[i].addEventListener('focus', metForm.focusInput);
                propForm.elementos[i].addEventListener('blur', metForm.blurInput);


            }

        }

        propForm.formulario.addEventListener('submit', metForm.validarInput);
    },

    focusInput: function(){

        this.parentElement.children[1].className = 'label active';

    },

    blurInput: function(){

        if(this.value == ""){
            this.parentElement.children[1].classList.remove("active");
        }


    },

    validarInput: function(e){

        for (let i = 0; i < propForm.elementos.length; i++){
            if(propForm.elementos[i].value == ''){

                e.preventDefault();

                if(propForm.elementos[i].parentElement.children.length < 3){

                    propForm.error = document.createElement('p');
                    propForm.textError = document.createTextNode('Por favor, llena el campo con tu ' + propForm.elementos[i].name);
                    propForm.error.appendChild(propForm.textError);
                    propForm.error.className = 'error';
    
                    propForm.elementos[i].parentElement.appendChild(propForm.error);

                }

              
            } else {
                if(propForm.elementos[i].parentElement.children.length >= 3){

                    propForm.error = propForm.elementos[i].parentElement.getElementsByTagName('p')[0];
                    propForm.elementos[i].parentElement.removeChild(propForm.error);

                }
            }
        }


    }

    
}

metForm.inicio();
}())