function formulario(){
    const form = document.querySelector(".form");

    function recebeDados(evento){
        evento.preventDefault();
        
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const idade = form.querySelector(".idade");
        const peso = form.querySelector(".peso");
        
        console.log(nome.value);
        console.log(sobrenome.value);
        console.log(idade.value);
        console.log(peso.value);
    };

    form.addEventListener("submit", recebeDados);
};

    

formulario();