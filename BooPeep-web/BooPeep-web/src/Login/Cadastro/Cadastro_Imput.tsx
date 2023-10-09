import './Cadastro_Main.tsx'
/*import { usertype } from "./Cadastro.ts";*/

function Cadastro_Imput() {
    return (
        <div>
            <h2>Cadastro</h2>
            <form>
            <label>Primeiramente, você é aluno ou funcionario da ETEC?</label>
            <select name="classificacao" id="classif">
                <option value="Aluno">Aluno</option>
                <option value="ETEC">Funcionário</option>
            </select>
            <br />
            <input type="button" value="Enviar" /*onClick={usertype}*//>
            </form>
        </div>
    )
}

export default Cadastro_Imput