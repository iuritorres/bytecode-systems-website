import { useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

import "./Navbar.css"

const Navbar = () => {

    // HANDLE OPEN & CLOSE POPOVERS
    const [activePopover, setActivePopover] = useState(null)

    const handlePopoverOpen = (popoverId) => {
        if (activePopover === popoverId) {
            handlePopoverClose()
        }
        else {
            setActivePopover(popoverId)
        }
    }

    const handlePopoverClose = () => {
        setActivePopover(null)
    }

    // PRODUCTS POPOVER
    const productsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Nossos produtos</h3>
                <hr className="popover-line" />

                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">calendar_month</span>
                    Frequência
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">checklist</span>
                    Lançamento de Notas
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">thumbs_up_down</span>
                    Moods (Feedbacks)
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">forum</span>
                    Suporte ao Aluno
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">mail</span>
                    Comunicados
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">menu_book</span>
                    Biblioteca Online
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">analytics</span>
                    Diagnósticos
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 text-muted" href="#">
                    <span className="material-symbols-rounded">newspaper</span>
                    Blog Educacional
                </a>
            </Popover.Body>
        </Popover>
    )

    // CUSTOMER POPOVER
    const customersPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Nossos clientes</h3>
                <hr className="popover-line" />

                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">calendar_month</span>
                    Frequência
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">checklist</span>
                    Lançamento de Notas
                </a>
            </Popover.Body>
        </Popover>
    )

    // CONTENTS POPOVER
    const contentsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Conteúdos</h3>
                <hr className="popover-line" />

                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">calendar_month</span>
                    Frequência
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">checklist</span>
                    Lançamento de Notas
                </a>
            </Popover.Body>
        </Popover>
    )

    // ABOUT US POPOVER
    const aboutUsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Sobre nós</h3>
                <hr className="popover-line" />

                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">calendar_month</span>
                    Frequência
                </a>
                <a className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted" href="#">
                    <span className="material-symbols-rounded">checklist</span>
                    Lançamento de Notas
                </a>
            </Popover.Body>
        </Popover>
    )

    return (
        <div className="main-nav-bar bg-white w-100">
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <a href="/" className="d-flex align-items-center gap-2 text-decoration-none">
                    <img src="/logo-svg.svg" className="logo" alt="bytecode - coding the future logo" />
                    <h2 className="fs-1">byte<span className="purple-span">code</span></h2>
                </a>

                <ul className="w-50 list-unstyled m-0 d-flex gap-5 align-items-center">
                    <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={productsPopover}
                        show={activePopover === 'products'}
                        onToggle={handlePopoverOpen.bind(null, 'products')}
                    >
                        <li className="pe-5">Produtos</li>
                    </OverlayTrigger>

                    <OverlayTrigger
                        trigger="click" 
                        placement="bottom"
                        overlay={customersPopover}
                        show={activePopover === 'customers'}
                        onToggle={handlePopoverOpen.bind(null, 'customers')}
                    >
                        <li className="pe-5">Clientes</li>
                    </OverlayTrigger>

                    <OverlayTrigger
                        trigger="click" 
                        placement="bottom"
                        overlay={contentsPopover}
                        show={activePopover === 'contents'}
                        onToggle={handlePopoverOpen.bind(null, 'contents')}
                    >
                        <li className="pe-5">Conteúdos</li>
                    </OverlayTrigger>

                    <OverlayTrigger
                        trigger="click" 
                        placement="bottom"
                        overlay={aboutUsPopover}
                        show={activePopover === 'aboutus'}
                        onToggle={handlePopoverOpen.bind(null, 'aboutus')}
                    >
                        <li className="pe-5">Bytecode</li>
                    </OverlayTrigger>
                </ul>
            </div>
        </div>
    )
}

export default Navbar