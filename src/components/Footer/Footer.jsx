import { Button, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

import './Footer.css'

const Footer = () => {

    // NEWSLETTER SUBMIT
    const handleNewsletterSubmit = (event) => {
        event.preventDefault()

        const email = document.getElementById("footer-newsletter-email").value
        // newsletter api...
    }

    // FOOTER LINKS
    const otherPages = [
        {title: 'Home',     path: '/'},
        {title: 'Sobre',    path: '/'},
        {title: 'Serviços', path: '/'},
        {title: 'Produtos', path: '/'},
        {title: 'Contato',  path: '/'},
    ]

    const quickLinks = [
        {title: 'Isenção de Responsabilidade', path: '/'},
        {title: 'Política de Privacidade',     path: '/'},
        {title: 'Termos de Uso',               path: '/'},
        {title: 'Créditos',                    path: '/'},
        {title: 'FAQ',                         path: '/'},
    ]

    return (
        <footer
            className="text-white fs-4 fw-light position-relative"
            style={{
                backgroundColor: "#1D2226",
                marginTop: 80,
                paddingTop: 80
            }}
        >

            {/* NEWSLETTER */}
            <Container className="position-absolute top-0 start-50 translate-middle">
                <div className="footer-newsletter-div primary-card border-0 rounded-0 py-4 d-flex gap-4 align-items-center h-100 bg-white">
                    <div className="footer-newsletter-icon-div d-flex gap-4">
                        <span className="material-symbols-rounded" style={{fontSize: 30}} >mail</span>

                        <div className="w-50">
                            <h3 style={{color: "#1D2226"}}>Newsletter</h3>
                            <p className="fs-4 text-muted">
                                Assine nossa newsletter e receba conteúdos exclusivos sobre gestão educacional para impulsionar o sucesso da sua instituição.
                            </p>
                        </div>
                    </div>

                    <Form className="d-flex h-50 w-50" onSubmit={handleNewsletterSubmit}>
                        <Form.Control
                            id="footer-newsletter-email"
                            className="rounded-0 fs-5"
                            type="email"
                            placeholder="Digite seu email"
                            required
                        />

                        <Button className="primary-button border-0 rounded-0 fw-bold fs-5" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </Container>

            {/* FOOTER CONTENT */}
            <Container className="footer-content-container py-5 d-flex justify-content-between">
                <div className="w-25">
                    <Link to="/" className="footer-content-logo d-flex align-items-center gap-2 text-white">
                        <img src="/logo-svg.svg" className="logo-footer" alt="bytecode - coding the future logo" />
                        <h2 className="fs-1">byte<span className="purple-span">code</span></h2>
                    </Link>

                    <p className="py-3 text-muted">
                        Nossa fábrica de software é focada nos resultados dos nossos clientes, entregando soluções eficientes e inovadoras para impulsionar seus negócios.
                    </p>

                    <div className="footer-icon-content d-flex align-items-center gap-4 mb-3">
                        <span className="material-symbols-rounded purple-span">call</span>
                        <span>+55 (81) 9 7345-8833</span>
                    </div>

                    <div className="footer-icon-content d-flex align-items-center gap-4">
                        <span className="material-symbols-rounded purple-span">location_on</span>
                        <span>Uninassau | Paulista</span>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <h3>Outras Páginas</h3>

                    {otherPages.map(page => (
                        <Link
                            key={`homeLink-${page.title}-${page.path}`}
                            to={page.path}
                            className="text-muted mb-1"
                        >
                            {page.title}
                        </Link>
                    ))}
                </div>

                <div className="d-flex flex-column">
                    <h3>Links Extras</h3>

                    {quickLinks.map(page => (
                        <Link
                            key={`homeLink-${page.title}-${page.path}`}
                            to={page.path}
                            className="text-muted mb-1"
                        >
                            {page.title}
                        </Link>
                    ))}
                </div>

                <div className="w-25">
                    <div className="footer-icon-content footer-clock-icon d-flex align-items-center gap-3">
                        <span className="material-symbols-rounded">timer</span>
                        <span>8 AM - 8 PM, Segunda - Sábado</span>
                    </div>

                    <p className="py-4 mb-4 text-muted">
                        Nosso Suporte está disponível 24/7 para responder suas dúvidas.
                    </p>

                    <a className="primary-button" href="#" target="_blank">Fale conosco</a>
                </div>
            </Container>

            <Container>
                <hr />
                <div className="footer-copywrite d-flex align-items-center justify-content-between py-4">
                    <p>bytecode - coding the future</p>
                    <p>Copyright ® 2023 - All rights reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer