import Header from "../../components/Header/Header"
import './Home.css'

const Home = () => {
    return (
        <>
            <Header/>

            <section className="after-header-section bg-white w-100">
                <div className="home-gestao-simplificada container d-flex justify-content-between align-items-center justify-content-lg-center">
                    <div className="home-video-columns">
                        <span>Nosso Software</span>
                        <h1>Gestão Simplificada</h1>

                        <p className="text-muted pe-5 mt-5">
                            Nosso software de gestão educacional oferece um conjunto abrangente de funcionalidades para
                            atender às necessidades específicas das instituições de ensino. Gerencie alunos, turmas, matrículas,
                            notas, frequência, calendários acadêmicos e muito mais em uma única plataforma fácil de usar.
                        </p>

                        <div className="home-bullet-parent d-flex align-items-center gap-5">
                            <div className="home-bullet-card d-flex gap-4 mt-5">
                                <span className="material-symbols-rounded">school</span>
                                <div>
                                    <span className="fw-bold">20+</span>
                                    <p className="text-muted">Clientes</p>
                                </div>
                            </div>

                            <div className="home-bullet-card d-flex gap-4 mt-5">
                                <span className="material-symbols-rounded">groups</span>
                                <div>
                                    <span className="fw-bold">12+</span>
                                    <p className="text-muted">Desenvolvedores</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-video-columns">
                        <a href="#" className="home-play-video d-flex justify-content-center align-items-center text-decoration-none">
                            <span className="material-symbols-rounded">play_circle</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home