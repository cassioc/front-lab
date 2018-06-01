/* Apresentação Modal - (index) */

setTimeout(ApresentarModal, 5000);
function ApresentarModal() {
    var modal =  document.querySelector(".modal");
    
    if(modal != null) {
        document.querySelector(".modal").style.display = "block";

        document
            .querySelector(".modal a")
            .addEventListener("click", function() {
                document.querySelector(".modal").style.display = "none";
            });
    }
}

/* Validação Modal Email - (index) */

if( document.forms["modal_form"] != undefined ){

    var form = document.forms["modal_form"];
    
    form.addEventListener("submit", validarFormModal);
    form.email.addEventListener("keyup", function() {
       form.email.className = "";
        document.querySelector("span.campo_invalido").style.display = "none";
        
    });
}

function validarFormModal(evt) {
    
    var form = document.forms["modal_form"];
    
    var inputEmail = form.email;
    var valorEmail = form.email.value;
    
    var posicaoArroba = valorEmail.indexOf("@");
    
    if ( !validarEmail(valorEmail) ) {
        
        inputEmail.className = "campo_invalido";
        document.querySelector("span.campo_invalido").style.display = "block";
        evt.preventDefault();
    }
}


/* Validação Form - (faleconosco) */

if( document.forms["form_faleconosco"] != undefined ) {
    
    var form = document.forms["form_faleconosco"];

    form.addEventListener("submit", function(evt) {

        var formValido = true;

        if ( !naoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className = "campo_invalido";
            formValido = false;
//            alert(formValido + " NOME");
        }
        if ( !naoVazio(form.Telefone.value)){
            form.Telefone.className = "campo_invalido";
            formValido = false;
//            alert(formValido  + " TELEFONE");
        }
        if ( !naoVazio(form.Mensagem.value) ){
            form.Mensagem.className = "campo_invalido";
            formValido = false;
//            alert(formValido  + " MENSAGEM");
        }
        if ( !validarEmail(form.Email.value)){
            form.Email.className = "campo_invalido";
            formValido = false;
//            alert(formValido + " EMAIL");
        }
        

        if ( !formValido ) {
            evt.preventDefault();
        // }

    }

    
    var inputs = document.querySelectorAll("form[name=form_faleconosco] input[type=text]");
    
    for( var i = 0 ; i < inputs.length ; i++ ){
    
        inputs[i].addEventListener("keypress", function() {
            this.className = "";
        
        });
        
    }
    
    var textarea = document.querySelector("form[name=form_faleconosco] textarea");
    
    textarea.addEventListener("keyup", function(){
        this.className = "";
        document.querySelector(".texto").innerHTML = "Caractere(s) " + this.value.length;
    });
//    document.querySelector("form[name=form_faleconosco] input").addEventListener("keypress", function(this) {
//        this.className = "";
//    });
    

}

/* FUNCTION */

function validarEmail (valorEmail) {
    if (valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > posicaoArroba) {
        
        return true;   
    }
    else {
        return false;
    }
}

function naoVazio (texto) {
    if (texto.trim().length > 0 ) {
        return true;
    } else {
        return false;
    }
}