import Header from "../Homepage/components/Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login_Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState('')
  const navigate = useNavigate();
  let err = null
  function redirecionar() {
    navigate("/home");
  }

  // Controle de acesso do usuario

  // Define uma variável global para rastrear o status de login (isso pode ser mais complexo em uma aplicação real)
  let isLoggedIn = false;

  // Função que bloqueia o acesso se o usuário não estiver logado
  function bloquearAcessoSemLogin() {
    if (user === '') {
      console.log('Acesso negado! O usuário não está logado.');
      
    } else if( user != ''){
      console.log('Acesso permitido! O usuário está logado.');
      // Continue com o acesso à página ou funcionalidade protegida
    }
  }

  // Exemplo de uso em alguma parte de sua aplicação
  function algumaParteDaSuaAplicacao() {
    // Chame a função para bloquear o acesso com base no status de login
    bloquearAcessoSemLogin();
    // Continue com a lógica da sua aplicação
  }

  // Modifique a variável isLoggedIn com base no status de login real, por exemplo, após o usuário fazer login ou sair.






  const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log(email, password)
    if (email == "" || password == "") {
      setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium">Acesso negado!</span> Campos não preenchidos
      </div>)
    }
    try {
      const response = await axios
        .get("http://localhost:3000/db/user", {
          params: {
            email,
            password,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            redirecionar();
            setUser(response.data)

          } else if (response.status === 404) {
            throw err = 2
          } else if (response.status != 200 && response.status != 404) {
            throw err = 1
          }
        });
    } catch (err) {
      if (err == 1) {
        setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Acesso negado!</span> Erro ao acessar o Servidor !
        </div>)
      } else if (err == 2) {
        setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Acesso negado!</span> Credenciais Inválidas! </div>)
      }
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto pt-12">
          <div className="w-full rounded-3xl shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 
            dark:border-gray-700 bg-purple-300 border-solid border-2 border-purple-500">
            <a className="flex items-center justify-center mt-6 pb-2 mx-20 border-b-2 border-purple-600 rounded-sm text-4xl font-semibold text-gray-900 dark:text-white">
              <img src="./src/assets/imagens/808266 (1).png" alt="" />
              BooPeep
            </a>


            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl 
                    dark:text-white"
              >
                Entre com seu usuário
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center"
                  >
                    Insira seu Email
                  </label>
                  <input
                    type="email"
                    name="caixaemail"
                    id="emailbox"
                    className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lm font-medium text-gray-900 
                            dark:text-white text-center"
                  >
                    Insira sua Senha
                  </label>
                  <input
                    type="password"
                    name="caixasenha"
                    id="passwordbox"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 
                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                            dark:focus:border-blue-500"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="w-full text-black hover:bg-purple-600 
                        focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                        py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                        dark:focus:ring-primary-800 bg-purple-500 mt-3"
                  onClick={(e) => handleLogin(e)}
                >
                  {" "}
                  Entrar{" "}
                </button>
                <p>{error}</p>
                <p className="text-sm font-light text-black dark:text-gray-400">
                  Não possui uma conta?{" "}
                  <a
                    href="signup"
                    className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-600"
                  >
                    Cadastre-se Aqui
                  </a>
                  <br />
                  Esqueceu sua senha?{" "}
                  <a
                    href="recovery"
                    className="font-medium hover:underline dark:text-primary-500 text-purple-500 hover:text-purple-600"
                  >
                    Redefine ela aqui
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login_Main;