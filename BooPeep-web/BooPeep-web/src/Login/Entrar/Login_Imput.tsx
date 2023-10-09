import "./Login_Main.tsx"

function Login_Imput() {
    return (
        <div>
            <h2>Login</h2>
            <h3>Ensira seu Email ou Nome de Perfil</h3>
            
            <form>
                <input type="text" name="emailbox" />
            </form>
            <h3>Ensira sua Senha</h3>
        
            <form>
                <input type="text" name="passwordbox" />
            </form>
        
            <form>
                <input type="button" value="Entrar" />
                {/* Fazer um routing para a página inicial. */}
            </form>
        </div>
    )
}

export default Login_Imput