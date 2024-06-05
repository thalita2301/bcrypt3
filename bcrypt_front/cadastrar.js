let res_cadastrar = document.getElementById('res_cadastrar')
let cadastrar = document.getElementById('cadastrar')


cadastrar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome:nome,
        email:email,
        senha:senha
    }
    // console.log(dados.nome)
    // console.log(dados.email)
    // console.log(dados.senha)
    fetch('http://localhost:3000/cadastrar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        res_cadastrar.innerHTML = "Código:" + dados.id + "&emsp;"+
                              "Nome:" + dados.nome + "&emsp;" +
                              "Email:" + dados.email + "&emsp;" 
                              

    })
    .catch((err)=>{
        console.error("Erro ao gravar no Banco de Dados", err)
    })
})