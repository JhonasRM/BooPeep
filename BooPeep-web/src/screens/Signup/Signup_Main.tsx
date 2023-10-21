function Signup_Main() {
    return(
        <section className='bg-purple-200'>

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            
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
                             /*required=""*/ />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira seu Email</label>
                            <input type="email" name="caixaemail" id="emailbox" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                             /*required=""*/ />
                        </div>

                        {/* SENHA */}
                        <div>
                                <label htmlFor="password" className="block mb-2 text-lm font-medium text-gray-900 
                                dark:text-white text-center">Ensira sua Senha</label>
                                <input type="password" name="caixasenha" id="passwordbox"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" /*required=""*/ />
                        </div>                        
                        
                        {/* CONFIRMAR SENHA */}
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Insira de novo a sua Senha</label>
                            <input type="confirm-password" name="confirmarsenha" id="confirmbox" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500" /*required=""*/ />
                        </div>

                        {/* TELEFONE */}
                        <div>
                                <label htmlFor="telephone" className="block mb-2 text-lm font-medium text-gray-900 
                                dark:text-white text-center">Insira seu Telefone</label>
                                <input type="tel" name="caixatelefone" id="telephonebox"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" /*required=""*/ />
                        </div>        

                        {/* CURSO */}
                        <div>        
                            <label htmlFor="course" className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center">Selecione seu Curso</label>

                            <select id="course" className="bg-purple-500 border text-white text-sm rounded-lg focus:ring-purple-400 focus:border-purple-400 block w-full p-2.5 dark:bg-purple-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-400 dark:focus:border-purple-400">
                                <option selected>Selecione:</option>
                                <option value="ADM">Administração</option>
                                <option value="DS">Desenvolvimento de Sistemas</option>
                                <option value="JUR">Juridico</option>
                                <option value="LOG">Logistica</option>
                            </select>
                                            
                        <a href="home" type="submit" className="w-full text-black hover:bg-purple-500 
                        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                        py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                        dark:focus:ring-primary-800 bg-purple-400 mt-3"> Finalizar Cadastro </a>
                        </div>

                        <div>
                        <p className="text-sm font-light text-black dark:text-gray-400">
                            Já possui uma conta? <a href="login" className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-700">Faça login aqui</a>                            
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