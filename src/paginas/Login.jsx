import { useState } from "react"

export default function Login ({navegar}) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
        const resposta = await fetch('http://localhost:3000/login' , {

            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, senha})
        })
        const data = await resposta.json()
        console.log(data)
        alert(data.message)
        if(data.login){
            navegar('usuarios')
        }
    

}
   

    return (
        <div>
        <h1>login</h1>

<input type = "text" id="email"
            placeholder="DIGITE EMAIL"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}

            />

            <input type = "text" id="senha"
            placeholder="DIGITE SUA SENHA"
            value={senha}
            onChange = {(e) => setSenha(e.target.value)}
            />

        <button onClick={() => navegar('cadastro')}>não tenho cadastro</button>
        <button onClick={() => entrar('login')}></button>
        
        <br />
        <br />
        </div>
        
    )
}