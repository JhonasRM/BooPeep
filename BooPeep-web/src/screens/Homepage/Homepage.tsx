import './Homepage.css'
import Navbar from "../../component/Navbar/Navbar.tsx";


function Homepage() {
  return (
    <div>
      <Navbar />
      
      <a href="login">Login</a>
      <a href="signup">Signup</a>
      
    </div>
  )
}

export default Homepage