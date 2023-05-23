import { Container } from "react-bootstrap"
import Header from "../../components/Header/Header"
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard"
import './Home.css'

const Home = () => {
    return (
        <>
        <Header/>

        {/* SIMPLIFIED GESTATION */}
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
                    <a href="#" className="home-play-video d-flex justify-content-center align-items-center text-decoration-none">
                        <span className="material-symbols-rounded">play_circle</span>
                    </a>
                </div>
            </div>
        </section>

        {/* OUR PRODUCTS */}
        <section className="bg-white w-100 py-5">
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
                                content={
                                    <p>Solução abrangente para acompanhar,
                                    monitorar e otimizar a frequência
                                    dos alunos nas instituições de ensino.</p>
                                }
                            />
                        </div>
                        <div className="col-6">
                            <HorizontalCard
                                icon="checklist"
                                title="Lançamento de Notas"
                                content={
                                    <p>Nossa solução simplifica o
                                    trabalho dos professores e fornece
                                    um feedback claro aos alunos sobre
                                    seu desempenho acadêmico.</p>
                                }
                            />
                        </div>
                    </div>

                    <div className="home-card-div-parent row">
                        <div className="col-6">
                            <HorizontalCard
                                icon="menu_book"
                                title="Biblioteca Online"
                                content={
                                    <p>Biblioteca online para estudantes:
                                    acesso fácil a recursos educacionais,
                                    promovendo aprendizado autônomo e acesso
                                    conveniente a conteúdos relevantes.</p>
                                }
                            />
                        </div>
                        <div className="col-6">
                            <HorizontalCard
                                icon="thumbs_up_down"
                                title="Moods (Feedbacks)"
                                content={
                                    <p>Sistema de feedback interativo:
                                    fortaleça a comunicação entre alunos
                                    e professores, promovendo um ambiente
                                    colaborativo e melhorando a
                                    qualidade da aprendizagem.</p>
                                }
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>

        {/* SERVICES */}
        {/* <section className="w-100 py-5">
            <Container className="mx-auto py-5">

            </Container>
        </section> */}
        </>
    )
}

export default Home