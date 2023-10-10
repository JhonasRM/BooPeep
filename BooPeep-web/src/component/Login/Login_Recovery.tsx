function Login_Recovery() {
    return (
        <div>
            <h1>Boo-Peep</h1>

            <h3>Defina nova senha</h3>
            <input type="text" id="recoverypasswordbox"/>

            <h3>Reescreva sua nova senha</h3>
            <input type="text" id="checkrecoverypasswordbox" />

            <br /><br />
            <a href="login"><input type="submit" value="Enviar" /></a>
        </div>
    )
}

export default Login_Recovery