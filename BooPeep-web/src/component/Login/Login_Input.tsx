function Login_Input() {
    return(
        <div>
            <h3>Insira seu Email ou Nome de Usuário</h3>
            <input type="text" name="caixadenomeemail" id='nameemailbox' value=''/>

            <h3>Insira sua Senha</h3>
            <input type="text" name="caixadesenha" id='passwordbox' value=''/>
        </div>
    )
}

export default Login_Input