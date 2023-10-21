import './Homepage.css'
import Sidebar from "../../component/Sidebar/Sidebar.jsx";


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