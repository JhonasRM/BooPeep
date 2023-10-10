function Cadastro_Input() {
    return(
        <div>
            <h3>Insira seu Nome</h3>
            <input type="text" name="caixanome" id="namebox"  />
            <h3>Insira seu Email</h3>
            <input type="text" name="caixaemail" id="emailbox"  />
            <h3>Insira sua Senha</h3>
            <input type="text" name="caixasenha" id="passwordbox"  />
            <h3>Insira de novo a sua Senha</h3>
            <input type="text" name="caixasenhaverificar" id="verifypasswordbox"  />
            <h3>Insira seu Telefone (Opcional)</h3>
            <input type="tel" name="caixatelefone" id="phonebox" placeholder="(xx) xxxxx-xxxx" />
            <h3>Insira seu Curso</h3>
            <select name="curso" id="course">
                <option value="">Selecione</option>
                <option value="DS">Desenvolvimento de Sistemas</option>
                <option value="LOG">Logistica</option>
                <option value="JUR">Juridico</option>
                <option value="ADM">Administração</option>
            </select>
            <br /><br />
            <a href="/"><input type="submit" value="Finalizar Cadastro" /></a>
        </div>
    )
}

export default Cadastro_Input