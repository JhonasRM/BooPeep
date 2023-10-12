import React, { useState } from 'react';

interface LoginState {
    username: string;
    password: string;
}

const Login: React.FC = () =>  {
    const [LoginData, setLoginData] = useState <LoginState> ({
        username: '',
        password: '',
    });
  
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({
            ...LoginData,
            [name]: value,
        });
    };

    const handleLogin = () => {
        //Lógica para verificar credenciais
        console.log('Tentativa de login:', LoginData);
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>User</label>
                    <input 
                        type="text" 
                        name="username"
                        value={LoginData.username} 
                        onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password" 
                        value={LoginData.password}
                        onChange={handleInputChange}/>
                </div>
                <button type="button" onClick={handleLogin}>
                    Enter
                </button>
            </form>
        </div>
    );
};

export default Login;