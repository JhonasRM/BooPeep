import './Homepage.css'
import Sidebar from "../../component/Sidebar/Sidebar.tsx";
import Feed from "../../component/Feed/Feed.tsx";


function Homepage() {
  return (
    <div>
      <Sidebar />
      <Feed />

      <a href="login">Login</a>
      <a href="signup">Signup</a>
      
    </div>
  )
}

export default Homepage