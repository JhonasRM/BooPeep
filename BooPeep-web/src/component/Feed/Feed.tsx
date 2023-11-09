import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import axios from "axios";

interface Post {
    _id: number;
    situation: number;
    description: string;
    image: string;
    contato: string;
}

const Feed: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<Post[]>([]);
    const [newPost, setNewpost] = useState<{
        situation: Number;
        description: String;
        image: String;
        contato: String;
    }>({
        situation: 0,
        description: '',
        image: 'Sem foto',
        contato: ''
    })
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewpost({ ...newPost, [e.target.name]: e.target.value })
    }
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault;
        const response: any = axios.post("http://localhost:3000/db/post", newPost).then((response) => {
            setPost([...post, response.data])
            setNewpost({
                situation: 0,
                description: '',
                image: 'Sem foto',
                contato: ''
            })
            setError('')
        },
            (error) => {
                setError('Erro ao criar o post')
            }
        )
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Post[]>("http://localhost:3000/db/posts");
                if (response.status === 200) {
                    setPost(response.data);
                } else if (response.status === 404) {
                    setError("Nenhuma postagem foi encontrada!");
                } else {
                    setError("Erro ao acessar o Servidor!");
                }
            } catch (error) {
                setError("Erro ao acessar o Servidor!");
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);

    return (
    <MagicMotion>
        <div>
            <h1>Boo-Peep</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;</span>
              <form onSubmit={handleFormSubmit}>
            <div className="w-16">
                        <label>
                            <img src="src\assets\imagens\icons8-imagem-26.png" />
                            <input type="file"  className="hidden" onChange={handleInputChange} />
                        </label>
                    </div>
                <input type="text" name="contato" id="" placeholder="contato" value={newPost.contato} onChange={handleInputChange} />
                <textarea name="description" id="" value={newPost.description} onChange={handleInputChange} ></textarea>
                <div className="flex border-solid border-2 border-black w-16 items-center rounded bg-violet-400 
            gap-2">
                    
                    <button type="submit"> Postar </button>
                </div>
            </form>
            </div>
        </div>
            )
      }
            <div>
                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
                        <div className="">
                            {post.map((post) => (
                                <div key={post._id} className='mt-8'>
                                    <h3>{post.contato}</h3>
                                    {/* <img src={post.image} alt="Post" /> */}
                                    <p>{post.description}</p>
                                </div>
                            ))}
                        </div>
                        {error && (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                role="alert"
                            >
                                <span className="font-medium">{error}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <button onClick={openModal}>Postar</button>
        </div>
    </MagicMotion>
    )
}

export default Feed;