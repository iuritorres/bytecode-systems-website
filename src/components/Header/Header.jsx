import Navbar from "../Navbar/Navbar"
import "./Header.css"

const Header = () => {
    return (
        <header className="w-100">
            {/* Nav bar */}
            <Navbar />

            {/* Header Content */}
            <div className="header-content text-white w-75 mx-auto d-flex flex-column gap-4">
                <h2>Simplifique sua gestão<br/>educacional com<br/>nossas solucões</h2>
                <p>
                    Sistemas de gestão educacional integrados de
                    maneira ágil e<br/>segura. Tudo em uma única plataforma.
                </p>

                <a href="#" target="_blank" className="primary-button text-decoration-none text-white">
                    Conhecer nossas solucões
                </a>
            </div>

            <div className="background-banner"></div>

            {/* Cards */}
            <div className="cards-container container position-absolute d-flex gap-5">
                <div className="primary-card w-25">
                    <span className="material-symbols-rounded">forum</span>
                    <h3>Comunicação Eficiente</h3>
                    <p className="text-muted fs-4">
                        Nosso software de gestão educacional oferece recursos avançados de comunicação que
                        facilitam a comunicação entre escola, pais e alunos, permitindo a troca de informações importantes. 
                    </p>
                </div>

                <div className="primary-card w-25">
                    <span className="material-symbols-rounded">account_tree</span>
                    <h3>Integração Simplificada</h3>
                    <p className="text-muted fs-4">
                        Nosso software de gestão educacional permite a integração simplificada com outros sistemas utilizados pela sua instituição.
                    </p>
                </div>

                <div className="primary-card w-25">
                    <span className="material-symbols-rounded">rebase</span>
                    <h3>Automação de Processos</h3>
                    <p className="text-muted fs-4">
                        Reduza a carga de trabalho administrativo e aumente a eficiência com a automação de processos
                    </p>
                </div>

                <div className="primary-card w-25">
                    <span className="material-symbols-rounded">support_agent</span>
                    <h3>Suporte Ativo</h3>
                    <p className="text-muted fs-4">
                        Oferecemos suporte técnico dedicado, com uma equipe
                        especializada disponível para responder às suas perguntas e resolver quaisquer problemas.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header