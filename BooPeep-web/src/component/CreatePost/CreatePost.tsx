import axios from "axios";
import { useState } from "react";
import Post from "../Post/Post";
interface Post {
  _id: Number;
  situation: Number;
  description: String;
  image: String;
  contato: String;
}
const CreatePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
    
  const [error, setError] = useState("");

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewpost({...newPost, [e.targer.name]: e.target.value })
  }
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault;
    const response:any = axios.post("http://localhost:3000/db/post", newPost).then(response)=>{
        setPosts([...posts, response.data])
        setNewpost({
            situation: 0,
  description: '',
  image: 'Sem foto',
  contato: ''
        })
    }
  }

    return(
        <div>
            <h1>Boo-Peep</h1>
            <form onSubmit={handleFormSubmit}>
            <input type="text" name="contato" id="" placeholder="contato" value={newPost.contato} onChange={handleInputChange} />
            <textarea name="description" id="" value={newPost.description} onChange={handleInputChange} ></textarea>
            <div className="flex border-solid border-2 border-black w-16 items-center rounded bg-violet-400 
            gap-2">
                <div className="w-16">
                    <label>
                        <img src="src\assets\imagens\icons8-imagem-26.png" />
                        <input type="file" value={newPost.image} className="hidden" onChange={handleInputChange}/>
                    </label>
                </div>
                <button type="submit"> Postar </button>
            </form>
            {Post.map((post) =>  (

            ))}
        </div>

    )  
};
