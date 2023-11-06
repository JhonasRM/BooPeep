import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface Post extends Document {
    // id: Number,
    situation: Number,
    description: String,
    image: String,
    contato: String
  }
  
  const [error, setError] = useState("");

function Feed() {
    const Postagens = () => {
        try {
            const response = await axios.get("http://localhost:3000/db/posts").then((response) => {
                if (response.status === 200) {
                    const posts: Posts[] = [response.data];
                }else if (response.status != 200) {
                  setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <span className="font-medium">Nenhuma postagem foi encontrada!</span>
              </div>)
                }
              });
          } catch (err) {
            if (err) {
            setError(<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium"> Erro ao acessar o Servidor!</span>
        </div>)
            }
          }
    }

    return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-purple-400 border-solid rounded-lg dark:border-gray-700 bg-purple-300">
            <div className="grid grid-cols-3 gap-4 mb-4">
                
            </div>
        </div>
    </div>
    )
}

export default Feed;