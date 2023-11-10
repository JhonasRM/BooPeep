import axios from "axios";
import { useState } from "react";
import Post from "../Post/Post";
interface Post {
    // _id: Number;
    // situation: Number;
    description: string;
    image: string;
    contato: string;
}

const CreatePost: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewpost] = useState<{
        // situation: Number;
        description: string;
        image: string;
        contato: string;
    }>({
        // situation: 0,
        description: '',
        image: 'Sem foto',
        contato: ''
    })
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [error, setError] = useState("");

    const handleFormSubmit = (e: React.FormEvent) => {

    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="p-8">
                        <div className="p-4 border-2 border-purple-500 border-solid rounded-3xl dark:border-gray-700 bg-purple-300">
                            <div className="">
                            <span className="close text-2xl text-black border-solid border-2 rounded-3xl px-3 bg-white border-black pb-1 " onClick={closeModal}>
                        &times;</span>
                                <form onSubmit={handleFormSubmit} className="" >

                                    <div className="flex gap-2">
                                        <button type="submit" className="flex border-solid border-2 border-black rounded-xl p-2 bg-violet-500 text-violet-100 font-semibold items-center h-10 mt-6"> Postar </button>

                                        <div className="flex border-solid border-2 border-black w-10 h-10 items-center justify-center rounded bg-violet-400 gap-2 mt-6">
                                            <div className="">
                                                <label>
                                                    <img src="src\assets\imagens\icons8-imagem-26.png" />
                                                    <input type="file" className="hidden"  />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="ml-auto">  
                                                <div>
                                                    <label htmlFor="text" className="">Contato: </label>
                                                </div>
                                                <div>
                                                    <input type="text" name="contato" placeholder="Ex: Telefone ou Email" className="rounded w-64"/>
                                                </div>
                                        </div>
                                    </div>
                                        <div className="mt-3">
                                            <label htmlFor="textarea">Descreva o objeto Perdido:</label>
                                            <textarea name="description" rows={7} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"></textarea>
                                        </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default CreatePost