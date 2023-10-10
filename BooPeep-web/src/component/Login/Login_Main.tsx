import Login_Input from "./Login_Input"
import Login_Misc from "./Login_Misc"
import './Login.css'
import './Login.ts'

function Login_Main() {
    return (
        <div>
            <h1>Boo-Peep</h1>
            <Login_Input />
            <Login_Misc />
        </div>
    )
}

export default Login_Main