import './Login.css'
import './Login.ts'
import Login_Imput from './Login_Imput.tsx'
import Login_Misc from './Login_Misc.tsx'

function Login_Main() {
    return (
        <div>
            <h1>Boo-PeeP</h1>
            <Login_Imput />
            <Login_Misc />
        </div>
    )
}

export default Login_Main