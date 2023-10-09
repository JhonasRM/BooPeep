import './Cadastro_Imput.tsx'
import Cadastro_Misc from './Cadastro_Misc.tsx'

function Cadastro_Aluno() {
    return(
        <div>
            <h3>Ensira seu Nome</h3>
            <form>
                <input type="text" name="namebox" />
            </form>
            <h3>Ensira seu Email</h3>
            <form>
                <input type="text" name="emailbox" />
            </form>
            <h3>Ensira sua Senha</h3>
            <form>
                <input type="text" name="passwordbox" />
            </form>
            <h3>Ensira seu Telefone (Opcional)</h3>
            <form>
                <input type="text" name="telephonebox" />
            </form>
            <h3>Ensira seu Curso</h3>
            <form>
                <input type="text" name="coursebox" />
            </form>
            <form>
                <input type="button" value="Criar Conta" />
                {/* Fazer um routing para a página inicial. */}
            </form>

            <Cadastro_Misc />
        </div>
    )
}

export default Cadastro_Aluno