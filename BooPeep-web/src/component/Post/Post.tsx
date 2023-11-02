function Post() {
    return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
            <div className="">
                {/* Aqui Começa a tela de Postagem: */}

                {/* Botões de Adicionar imagem e amigo ao post. */}
                {/* w-16 vai impedir o site de diminuir a caixa :D */}
                
                <div className="flex gap-2">            

                    <input type="button" value="Publicar" className="flex border-solid border-2 border-black
                    rounded-xl p-1 bg-violet-500 text-violet-100 font-semibold" />
                    {/* <button className="inline-flex border-solid border-2 border-black rounded-xl p-1 bg-violet-500">
                        <p className="text-white">Publicar</p>
                    </button> */}

                    <div className="flex border-solid border-2 border-black w-16 items-center rounded bg-violet-400 gap-2
                    ">
                        <input type="image" src="src\assets\imagens\icons8-imagem-26.png"/>
                        <input type="image" src="src\assets\imagens\icons8-adicionar-amigo-26.png"/>
                        {/* <img src="src\assets\imagens\icons8-imagem-26.png" />
                        <img src="src\assets\imagens\icons8-adicionar-amigo-26.png" /> */}
                    </div>

                    <div className="ml-auto"> {/* Doloroso ml-auto */}
                        <input type="text" size={50} className="rounded text-sm w-full" placeholder="Local do Objeto Perdido..."/>
                    </div> {/* 
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    Veja esse site: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
                    para você ter uma ideia melhor de posição antes de aplicar ao projeto.
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    */}

                </div>

                <div className="mt-3">
                    <textarea id="message" rows={25} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Descreva o seu objeto perdido..."></textarea>
                </div>                

                {/* Aqui Acaba a tela de Postagem: */}
            </div>
        </div>
    </div>
    )
}

export default Post;