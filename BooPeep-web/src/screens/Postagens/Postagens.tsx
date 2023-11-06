import Sidebar from "../Homepage/components/Sidebar/index.tsx";
import Header from "../Homepage/components/Header/index.tsx"
import Post from "../../component/Post/Post.tsx";

function Postagens() {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Post />
        </div>
    )
}

export default Postagens;