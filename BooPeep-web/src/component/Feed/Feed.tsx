import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
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
    name: String,
    phone: Number,
    //course: String,
}


const Feed: React.FC = () => {
    const [error, setError] = useState<string>("");
    const [post, setPost] = useState<Post[]>([]);
    const [user, setUser] = useState<User[]>([])
    const [newPost, setNewpost] = useState<{
        // situation: Number;
        description: String;
        image: String;
        contato: String;
        coment: String;
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
                // situation: 0,
                description: '',
                image: 'Sem foto',
                contato: '',
                coment: '',
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

        fetchData()
    }, []);

    return (
        <>
            <MagicMotion>
                {error && <p style={{ color: 'red' }}>{error}</p>}
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
                                <TweetContainer className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300" r>
                                    <div>
                                        <TweetContent>
                                            <Avatar src="./src/assets/imagens/Dev_desenvolvimento.gif" alt="Avatar" />
                                            <div key={post._id} className="mt-8">
                                                <h3>{post.contato}</h3>
                                                <img src={post.image} alt="Post" />
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



                    <div className="p-4 sm:ml-64">
                        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
                            <div className="">

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
                </FeedWrapper>

            </MagicMotion>
        </>
    )
}

export default Feed;