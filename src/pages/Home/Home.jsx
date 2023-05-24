import { Container } from "react-bootstrap"
import Header from "../../components/Header/Header"
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard"
import './Home.css'

const Home = () => {
    return (
        <>
        <Header/>

        {/* SIMPLIFIED MANAGEMENT */}
        <section className="after-header-section w-100">
            <div className="home-gestao-simplificada container d-flex justify-content-between align-items-center justify-content-lg-center">
                <div className="home-video-columns col-md-6">
                    <span>Nosso Software</span>
                    <h1>Gestão Simplificada</h1>

                    <p className="text-muted pe-5 mt-5">
                        Nosso software de gestão educacional oferece um conjunto abrangente de funcionalidades para
                        atender às necessidades específicas das instituições de ensino. Gerencie alunos, turmas, matrículas,
                        notas, frequência, calendários acadêmicos e muito mais em uma única plataforma fácil de usar.
                    </p>

                    <div className="d-flex align-items-center gap-5">
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

                <div className="home-video-columns col-md-6">
                    <a href="#" className="media-style home-play-video d-flex justify-content-center align-items-center text-decoration-none">
                        <span className="material-symbols-rounded">play_circle</span>
                    </a>
                </div>
            </div>
        </section>

        {/* OUR PRODUCTS */}
        <section className="bg-white w-100 py-3">
            <Container className="home-service-container row mx-auto py-5">
                <div className="col-4">
                    <span>Nossos Produtos</span>
                    <h1>Conheça Nossos Produtos</h1>

                    <p className="text-muted pb-5 pe-5 my-5">
                        Nossos produtos visam aumentar a produtividade e promover eficiência na gestão educacional,
                        resultando em melhores desempenhos e resultados positivos para a sua instituição de ensino.
                    </p>

                    <a className="primary-button" href="#" target="_blank">Ver todos</a>
                </div>

                <div className="col-8">
                    <div className="home-card-div-parent row">
                        <div className="col-6">
                            <HorizontalCard
                                icon="calendar_month"
                                title="Frequência"
                                content="Solução abrangente para acompanhar,
                                    monitorar e otimizar a frequência
                                    dos alunos nas instituições de ensino."
                            />
                        </div>
                        <div className="col-6">
                            <HorizontalCard
                                icon="checklist"
                                title="Lançamento de Notas"
                                content="Nossa solução simplifica o
                                    trabalho dos professores e fornece
                                    um feedback claro aos alunos sobre
                                    seu desempenho acadêmico."
                            />
                        </div>
                    </div>

                    <div className="home-card-div-parent row">
                        <div className="col-6">
                            <HorizontalCard
                                icon="menu_book"
                                title="Biblioteca Online"
                                content="Biblioteca online para estudantes:
                                    acesso fácil a recursos educacionais,
                                    promovendo aprendizado autônomo e acesso
                                    conveniente a conteúdos relevantes."
                            />
                        </div>
                        <div className="col-6">
                            <HorizontalCard
                                icon="thumbs_up_down"
                                title="Moods (Feedbacks)"
                                content="Sistema de feedback interativo:
                                    fortaleça a comunicação entre alunos
                                    e professores, promovendo um ambiente
                                    colaborativo e melhorando a
                                    qualidade da aprendizagem."
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* BENEFITS */}
        <section className="w-100 py-3">
            <Container className="py-5">
                <div className="row home-benefits-row">
                    <div className="home-video-columns col-6">
                        <a href="#" className="media-style home-benefits-image d-flex justify-content-center align-items-center text-decoration-none"></a>
                    </div>

                    <div className="home-benefits-content col-6">
                        <span>Quem somos</span>
                        <h1>Nossos Benefícios</h1>

                        <p className="text-muted pb-4 pe-5 my-4">
                            Somos uma equipe dedicada a transformar a gestão educacional por meio de soluções inovadoras e eficientes.
                            Nossos produtos proporcionam resultados tangíveis para instituições educacionais, incluindo aumento de produtividade, redução de erros, melhor comunicação e otimização do tempo.
                        </p>

                        {/* PROGRESS BARS */}
                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <span className="text-muted">Aumento de Produtividade</span>
                                <span className="text-muted">40%</span>
                            </div>

                            <progress
                                className="w-100"
                                value={40}
                                max={100}
                            />
                        </div>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <span className="text-muted">Redução de Retrabalhos</span>
                                <span className="text-muted">70%</span>
                            </div>

                            <progress
                                className="w-100"
                                value={70}
                                max={100}
                            />
                        </div>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <span className="text-muted">Melhoria na Comunicação</span>
                                <span className="text-muted">50%</span>
                            </div>

                            <progress
                                className="w-100"
                                value={50}
                                max={100}
                            />
                        </div>

                        <div>
                            <div className="d-flex justify-content-between">
                                <span className="text-muted">Otimização do Tempo</span>
                                <span className="text-muted">30%</span>
                            </div>

                            <progress
                                className="w-100"
                                value={30}
                                max={100}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        </>
    )
}

export default Home