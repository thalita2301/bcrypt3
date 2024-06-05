let logar = document.getElementById('logar')
let resposta = document.getElementById('resposta')

logar.addEventListener('click',()=>{
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value 

    const dados ={
        email:email,
        senha:senha
    }
    fetch('http://localhost:3000/logar',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    })
    .then(resp => resp.json())
    .then(dados =>{
        console.log(dados)
        resposta.innerHTML = dados.message
})
.catch((err)=>{
    console.error('Erro ao logar o usuário')
})
})
