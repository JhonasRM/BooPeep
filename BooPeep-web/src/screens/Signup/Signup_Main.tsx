import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup_Main() {
    // const [ID, setID] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [phone, setPhone] = useState('')
    // const [course, setCourse] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    var err = null
    function redirecionar() {
        navigate('/home')
    }
    const handleSignup = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (password !== confirm) {
            setError('Senhas não conhecidem')
        } else if (password === confirm) {
            // console.log(email, password)

            try {
                const response = await axios.post('http://localhost:3000/db/user', JSON.stringify({
                    name,
                    email,
                    password,
                    // phone,
                    // course
                }),
                    {
                        headers: { 'Content-Type': 'application/json' }
                    })
                if (response.status === 201) {
                    redirecionar();
                }
                if (response.status === 401) {
                    throw err = 2

                } if(response.status != 200 && response.status != 401) {
                    throw err = 1
                }
                setUser(response.data)
            } catch (err) {
                if (err === 1) {
                    setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Acesso negado!</span> Erro ao acessar o Servidor !
                    </div>)
                }
                if (error === 2) {
                    setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Você já possui um cadastro!</span>
                    </div>)
                }
            }
        }

    }
    return (
        <section className='bg-indigo-200 h-screen'>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">

                <a className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
                    {/*<img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" 
                alt="logo" />*/}
                    BooPeep
                </a>

                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 
            dark:border-gray-700 bg-purple-300 border-solid border-2 border-purple-400">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl 
                    dark:text-white">
                            Cadastro
                        </h1>

                        <form className="space-y-4 md:space-y-6" action="#">

                            {/* NOME */}
                            <div>
                                <label htmlFor="name" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira seu Nome</label>
                                <input type="text" name="caixanome" id="namebox" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required onChange={(e) => setName(e.target.value)} />
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira seu Email</label>
                                <input type="email" name="caixaemail" id="emailbox" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            {/* SENHA */}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-lm font-medium text-gray-900 
                                dark:text-white text-center">Insira sua Senha</label>
                                <input type="password" name="caixasenha" id="passwordbox"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            {/* CONFIRMAR SENHA */}
                            <div>
                                {/* <p>{error}</p> */}
                                <label htmlFor="password" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira de novo a sua Senha</label>
                                <input type="password" name="confirmarsenha" id="passwordbox"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" required onChange={(e) => setConfirm(e.target.value)} />
                            </div>

                            {/* TELEFONE */}
                            {/*<div>
                                <label htmlFor="telephone" className="block mb-2 text-lm font-medium text-gray-900 
                                dark:text-white text-center">Insira seu Telefone</label>
                                <input type="tel" name="caixatelefone" id="telephonebox"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" required onChange={(e) => setPhone}/>
                        </div>*/}

                            {/* CURSO */}
                            {/*<div>        
                            <label htmlFor="course" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Selecione seu Curso</label>

                            <select id="course" className="bg-purple-400 border text-white text-sm rounded-lg focus:ring-purple-400 focus:border-purple-400 block w-full 
                            p-2.5 dark:bg-purple-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-400 
                            dark:focus:border-purple-400" required onChange={(e) => setCourse}>
                                <option selected>Selecione:</option>
                                <option value="ADM">Administração</option>
                                <option value="DS">Desenvolvimento de Sistemas</option>
                                <option value="JUR">Juridico</option>
                                <option value="LOG">Logistica</option>
            </select> */}   <p>{error}</p>
                            <button type="button" className="w-full text-black hover:bg-purple-600 
                        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                        py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                        dark:focus:ring-primary-800 bg-purple-500 mt-3" onClick={(e) => handleSignup(e)}> Finalizar Cadastro </button>
                            {/*</div>*/}

                            <div>
                                <p className="text-sm font-light text-black dark:text-gray-400">
                                    Já possui uma conta? <a href="login" className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-600">Faça login aqui</a>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup_Main