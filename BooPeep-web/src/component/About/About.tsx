function About() {
    return (
    <div className="p-4">
        <div className="p-4 border-2 border-purple-500 border-solid rounded-3xl dark:border-gray-700 bg-purple-300">
            <div className="text-justify">
                {/* Aqui Começa o Sobre. */}

                <h1 className="text-center text-2xl border-solid border-b-4 border-solid border-b-4 mx-32 /*mx-110*/ border-purple-700">Somos a equipe de desenvolvimento Codetatio</h1>

                <p className="mt-2 mb-2 pr-9 pl-9 pt-3 text-lg">Formada por 6 integrantes, a Codetatio busca trazer soluções tecnológicas para mundo. Abstraindo da nossa realidade tudo aquilo que precisa de uma solução, seja atráves de problemas contidianos ou até mesmo uma busca aprofundada no mercado de tecnologia. </p>

                <p className="mt-2 mb-2 pr-9 pl-9 pt-3 text-lg" >A Boopeep é um exemplo do nosso propósito como equipe, uma plataforma capaz de ajudas as pessoas a encontrar objetos perdidos. A principio a plataforma se encaixa no conceito de ser um software de aplicabilidade interna, ou seja, seu uso deverá ser dentro um determinado local, no qual se compreender ser uma escola, instituição ou empresa.  </p>

                {/* Aqui Acaba o Sobre. */}
            </div>
        </div>
    </div>
    )
}

export default About;