function Login_Input() {
    return(
        <form>
            <h2>Entre com seu Usuário</h2>
            <label>E-mail</label><br/>
            <input type="text" name="caixadenomeemail" id='nameemailbox'  placeholder="e-mail:"/>
            <br/>
            <label>Senha</label><br/>
            <input type="password" name="caixadesenha" id='passwordbox'  placeholder="senha:"/>
            <br/>
            <a href="home"> <input type="button" value="Entrar" /> </a>
        </form>
    )
}

export default Login_Input