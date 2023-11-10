import axios from "axios";
import { useState } from "react";
import Post from "../Post/Post";
interface Post {
    // _id: Number;
    // situation: Number;
    description: String;
    image: String;
    contato: String;
}

const CreatePost: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewpost] = useState<{
        // situation: Number;
        description: String;
        image: String;
        contato: String;
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
                    <span className="close" onClick={closeModal}>
                        &times;</span>
                    <div className="p-8">
                        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
                            <div className="">
                                <form onSubmit={handleFormSubmit} className="flex gap-2" >

                                    
                                        <button type="submit" className="flex border-solid border-2 border-black rounded-xl p-1 bg-violet-500 text-violet-100 font-semibold"> Postar </button>

                                        <div className="flex border-solid border-2 border-black w-16 items-center rounded bg-violet-400 gap-2">
                                            <div className="w-16">
                                                <label>
                                                    <img src="src\assets\imagens\icons8-imagem-26.png" />
                                                    <input type="file" className="hidden"  />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="ml-auto">
                                                <label htmlFor="text">Contato: </label>
                                                <input type="text" name="contato" placeholder="contato" />
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="textarea">Descreva o objeto Perdido:</label>
                                            <textarea name="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"></textarea>
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