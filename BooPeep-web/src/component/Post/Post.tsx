import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonProps } from "flowbite-react";

function Post() {
        // const [id, setID] = useState('')
        const [situation, setSituation] = useState(0)
        const [description, setDescription] = useState('')
        const [image, setImage] = useState('Sem foto')
        const [contato, setContato] = useState('')
        const [user, setUser] = useState(null)
        const [error, setError] = useState('')
        const navigate = useNavigate()
        function redirecionar() {
            navigate("/home");
          }
        const Postar = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
           
            
            
            try{
            const response = await axios.post('http://localhost:3000/db/post', JSON.stringify({
                // id,   
                situation,              
                description,
                image,
                contato     
               }),
            {
                headers: {'Content-Type':'application/json'}
            })
            if (response.status === 201) {
                redirecionar();
              }
            if (response.status === 401){
                setError('Erro ao fazer a postagem')
            }
        } catch (err){
            if(error){
                setError('Erro ao acessar o servidor')
            }
        }
        }
        
    return (
    <div className="p-8">
        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
            <div className="">
                {/* Aqui Começa a tela de Postagem: */}

                {/* Botões de Adicionar imagem e amigo ao post. */}
                {/* w-16 vai impedir o site de diminuir a caixa :D */}
                
                <div className="flex gap-2">            

                    <input type="button" value="Postar" className="flex border-solid border-2 border-black
                    rounded-xl p-1 bg-violet-500 text-violet-100 font-semibold"  onClick = {(e) => Postar(e)}/>
                    {/* <button className="inline-flex border-solid border-2 border-black rounded-xl p-1 bg-violet-500">
                        <p className="text-white">Publicar</p>
                    </button> */}

                    <div className="flex border-solid border-2 border-black w-16 items-center rounded bg-violet-400 
                    gap-2">
                        <div className="w-16">
                            <label>
                                <img src="src\assets\imagens\icons8-imagem-26.png" />
                                <input type="file" onChange={(e) => setImage(e.target.value)} className="hidden" />
                            </label>
                        </div>

                        <input type="image" src="src\assets\imagens\icons8-adicionar-amigo-26.png"/>
                        {/* <img src="src\assets\imagens\icons8-imagem-26.png" />
                        <img src="src\assets\imagens\icons8-adicionar-amigo-26.png" /> */}
                    </div>

                    <div className="ml-auto"> {/* Doloroso ml-auto */}
                        <input type="text" size={50} className="rounded text-sm w-full" placeholder="Deixe seu contato" onChange={(e) => setContato(e.target.value)}/>
                    </div> {/* 
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    Veja esse site: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
                    para você ter uma ideia melhor de posição antes de aplicar ao projeto.
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    */}

                </div>

                <div className="mt-3">
                    <textarea id="message" rows={20} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Descreva o seu objeto perdido..." onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>                

                {/* Aqui Acaba a tela de Postagem: */}
            </div>
        </div>
    </div>
    )
}

export default Post;