import './Homepage.css'
import Sidebar from "../../component/Sidebar/Sidebar.tsx";

function Homepage() {
  return (
    <div>
      <Sidebar />
      
      <a href="login">Login</a>
      <a href="signup">Signup</a>
      
    </div>
  )
}

export default Homepage