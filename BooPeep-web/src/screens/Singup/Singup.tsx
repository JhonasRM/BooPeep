import React, { useState } from "react";

interface SingupState {
    username: string;
    email: string;
    password: string;
}

const  Singup: React.FC = () => {
    const [SingupData, setSingupData] = useState<SingupState>({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSingupData({
            ...SingupData,
            [name]: value,
        });
    };

    const handleSingup = () => {
        //Lógica para adicionar o usuário
        console.log('Tentativa de registro:', SingupData);
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form>
                <div>
                    <label>User:</label>
                    <input 
                        type="text"
                        name="username"
                        value={SingupData.username}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={SingupData.email}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={SingupData.password}
                        onChange={handleInputChange} />
                </div>
                <button type="button" onClick={handleSingup}>
                    Singup
                </button>
            </form>
        </div>
    );
};

export default Singup;