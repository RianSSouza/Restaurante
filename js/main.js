$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(00) 00000-0000",
    });

    $("form").validate({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: true,
        },
        mensagem: {
            required: true,
        }
    },
    messages:{
        nome: 'Campo de nome é obrigatorio',
        email: 'Campo de email é obrigatorio',
        telefone: 'Campo de telefone é obrigatorio',
        mensagem:'Campo de mensagem é obrigatorio'

        },
        submitHandler: function(form){
            alert('Enviado com sucesso!');
            form.reset();
        },
        invalidHandler: function(evento, validador){
                    let camposIncorretos = validador.numberOfInvalids();
                    console.log(camposIncorretos);
                    if (camposIncorretos) {
                        alert(`Existe ${camposIncorretos} campos incorretos`)
                    }
                    
                }
    });
});
