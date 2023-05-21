import Header from "../../reusables/Header/Header"
import './Home.css'

const Home = () => {
    return (
        <>
            <Header/>

            <section className="after-header-section bg-white">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <span>Nosso Software</span>
                        <h1>Gestão Simplificada</h1>

                        <p className="text-muted pe-5 mt-5">
                            Nosso software de gestão educacional oferece um conjunto abrangente de funcionalidades para
                            atender às necessidades específicas das instituições de ensino. Gerencie alunos, turmas, matrículas,
                            notas, frequência, calendários acadêmicos e muito mais em uma única plataforma fácil de usar.
                        </p>

                        <div className="d-flex align-items-center justify-content-between pe-5 me-5">
                            <div className="home-bullet-card d-flex gap-4 mt-5">
                                <span class="material-symbols-rounded">groups</span>
                                <div>
                                    <span className="fw-bold">20+</span>
                                    <p className="text-muted">Clientes ativos</p>
                                </div>
                            </div>

                            <div className="home-bullet-card d-flex gap-4 mt-5">
                                <span class="material-symbols-rounded">groups</span>
                                <div>
                                    <span className="fw-bold">12+</span>
                                    <p className="text-muted">Desenvolvedores</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="home-play-video d-flex justify-content-center align-items-center text-decoration-none">
                            <span class="material-symbols-rounded">play_circle</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home