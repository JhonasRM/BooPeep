import { useState } from "react"
import axios from 'axios'

function Login_Main() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [user, setUser] = useState(null)

const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(email, password)
    
    try{
    const response = await axios.post('http://localhost:4000/login', JSON.stringify({ email, password}),
    {
        headers: {'Content-Type':'application/json'}
    })
    setUser(response.data)
    if(response.data ===401){
      setError('Credenciais Inválidas')
    }
} catch (er){
    if(error){
        setError('Erro ao acessar o servidor')
    } 
}
}


return (
    // <div>
    // {user === null? (
    <div>
    <section className='bg-purple-200'>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <a className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                {/*<img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" 
                alt="logo" />*/}
                BooPeep
            </a>

            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
            dark:border-gray-700 bg-orange-300">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl 
                    dark:text-white">
                        Entre com seu usuário
                    </h1>
                    
                    <form className="space-y-4 md:space-y-6" action="#">
                        
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira seu Email</label>
                            <input type="email" name="caixaemail" id="emailbox" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira sua Senha</label>
                            <input type="password" name="caixasenha" id="passwordbox"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" required  onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <a href="home" type="submit" className="w-full text-black hover:bg-purple-500 
                        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                        py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                        dark:focus:ring-primary-800 bg-purple-400 mt-3" onClick={(e) => handleLogin(e)}> Entrar </a>
        
                        <p className="text-sm font-light text-black dark:text-gray-400">
                            Não possui uma conta? <a href="signup" className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-700">Cadastre-se Aqui</a>
                            <br />
                            Esqueceu sua senha? <a href="recovery" className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-700">Redefine ela aqui</a>
                        </p>
                        

                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
    // )}
    // </div>
    // ) : (
    //     <div>
    //         <h2>Olá, {user.name}</h2>
    //         <input type="button" value="" onClick={(e) => handleLogout(e)}/>
    //     </div>
    // )}
    
)
}

export default Login_Main