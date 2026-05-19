import { useEffect, useState } from "react"

export default function Usuario () {
    const [contador, setContador] = useState(0)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [usuarios, setUsuarios] = useState([])
    

    useEffect( () => {
        document.title = 'contagem ' + contador
        const buscarUsuarios = async () => {
            const resposta = await fetch('http://localhost:3000/usuarios')
            const usuarios = await resposta.json()
            const data = await resposta.json()
            setUsuarios(data)

            console.log(data);
        }

    }, [contador])

    return (
        <div>
            <h1>usuario</h1>
            <h1>{contador}</h1>

            <button onClick={() => {setContador(contador + 1)}}>somar</button>
            
            <input type = "text" id = "email"
            placeholder="DIGITE EMAIL"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}    
            />

            <input type = "text" id = "nome"
            placeholder="DIGITE SEU NOME"
            value = {nome}
            onChange = {(e) => setNome(e.target.value)}    
            />

            <input type = "text" id = "senha"
            placeholder="DIGITE SUA SENHA"
            value = {senha}
            onChange = {(e) => setSenha(e.target.value)}    
            />

            <h3>{email}</h3>
            <h3>{nome}</h3>
            <h3>{senha}</h3>

            <ul>   
            {usuarios.map( (usuario) => (
                <li key = {usuario.id}>
                    <b> {usuario.nome} </b>
                    STATUS: { usuario.ativo ? 'Ativo' : 'Desativo'}
                </li>
            ))}
            </ul>
        </div>
   
    )
}