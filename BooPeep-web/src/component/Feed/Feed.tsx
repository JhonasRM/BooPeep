import { useEffect, useState } from "react";
import axios from "axios";
import CreatePost from "../CreatePost/CreatePost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import {
    FeedWrapper,
    TweetContainer,
    Avatar,
    TweetContent,
    UserName,
    TweetText,
} from './style';
interface Post {
    _id: number;
    // situation: number;
    description: string;
    image: string;
    contato: string;
}
interface User {
    // id: Number,
    name: string,
    phone: number,
    //course: String,
}


const Feed: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<Post[]>([]);
    const [user, setUser] = useState<User[]>([])
    const [newPost, setNewpost] = useState<{
        // situation: Number;
        description: string;
        image: string;
        contato: string;
        coment: string;
    }>({
        // situation: 0,
        description: '',
        image: 'Sem foto',
        contato: '',
        coment: ''
    })
    const [isCommenting, setIsCommenting] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentIconClick = () => {
        setIsCommenting(true);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== '') {
            setComments([...comments, comment]);
            setComment('');
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };

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

        fetchData()
    }, []);

    return (
        <>
            {isModalOpen && (
                <>
                    <CreatePost />
                </>
            )
            }

            <FeedWrapper>
                {post.map((post, user) => (
                    <>
                        <div className="p-4 sm:ml-64">
                            <TweetContainer className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300" >
                                <div>
                                    <TweetContent>
                                        <Avatar src="./src/assets/imagens/Dev_desenvolvimento.gif" alt="Avatar" />
                                        <div key={post._id} className="mt-8">
                                            <h3>{post.contato}</h3>

                                           
                                                    {/* <img src={post.image} alt="Post" /> */}
                                                
                                            
                                            <p>{post.description}</p>
                                        </div>
                                        {isCommenting && (
                                            <div className="comment-area">
                                                <textarea
                                                    placeholder="Digite seu comentário..."
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                                <button onClick={handleCommentSubmit}>Comentar</button>
                                            </div>
                                        )}
                                        <div className="comment-history">
                                            {comments.map((comment, index) => (
                                                <div key={index}>{comment}</div>
                                            ))}
                                        </div>
                                        <hr />
                                        <FontAwesomeIcon icon={faHeart} className="icon" /> {/* Ícone de "like" */}

                                        <FontAwesomeIcon
                                            icon={faComment}
                                            className={`icon comment-icon ${isCommenting ? 'active' : ''}`}
                                            onClick={handleCommentIconClick}
                                        />
                                    </TweetContent>
                                </div>
                            </TweetContainer>
                            <br />
                        </div>
                    </>

                ))
                }





                {error && (
                    <div className="p-4 sm:ml-64">
                        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
                            <div className="">
                                <div
                                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                    role="alert"
                                >
                                    <span className="font-medium">{error}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300"> */}
                        <div className="">
                            <div>
                                <button onClick={openModal}><span className="font-medium"><img src="./src/assets/imagens/icons8-adicionar-amigo-26.png" alt="" /></span></button>
                            </div>
                        </div>
                    {/* </div>
                </div> */}
            </FeedWrapper>


        </>
    )
}

export default Feed;