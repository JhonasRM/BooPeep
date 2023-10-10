function Login_Input() {
    return(
        <div>
            <h3>Insira seu Email ou Nome de Usuário</h3>
            <input type="text" name="caixadenomeemail" id='nameemailbox' value=''/>

            <h3>Insira sua Senha</h3>
            <input type="text" name="caixadesenha" id='passwordbox' value=''/>

            <br /><br />
            <a href="/"><input type="submit" value="Entrar" /></a>
        </div>
    )
}

export default Login_Input