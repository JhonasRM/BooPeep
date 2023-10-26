function Login_Recovery() {
    return (
        <section className='bg-indigo-200 h-screen'>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
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
                        Redefinir Senha
                    </h1>
                    
                    <form className="space-y-4 md:space-y-6" action="#">
                        
                        <div>
                            <label htmlFor="password" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Defina nova senha</label>
                            <input type="password" name="caixasenha" id="passwordbox"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" /*required=""*/ />
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-lm font-medium text-gray-900 dark:text-white text-center">
                            Reescreva sua nova senha</label>
                            <input type="confirm-password" name="confirmarsenha" id="confirmbox"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                            focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /*required=""*/ />

                            <a href="login" type="submit" className="w-full text-black hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-purple-500 mt-3"> Enviar </a>                     
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login_Recovery