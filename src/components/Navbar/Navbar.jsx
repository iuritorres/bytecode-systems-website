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
    const productItems = [
        {name: 'Frequência', icon: 'calendar_month'},
        {name: 'Lançamento de Notas', icon: 'checklist'},
        {name: 'Moods (Feedbacks)', icon: 'thumbs_up_down'},
        {name: 'Suporte ao Aluno', icon: 'forum'},
        {name: 'Comunicados', icon: 'mail'},
        {name: 'Biblioteca Online', icon: 'menu_book'},
        {name: 'Diagnósticos', icon: 'analytics'},
        {name: 'Blog Educacional', icon: 'newspaper'}
    ]

    const productsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Nossos produtos</h3>
                <hr className="popover-line" />

                {productItems.map(item => (
                    <a
                        key={`div-${item.name}-${item.icon}`}
                        className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted"
                        target='_blank'
                        href="#"
                    >
                        <span className="material-symbols-rounded">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
            </Popover.Body>
        </Popover>
    )

    // CUSTOMER POPOVER
    const customersItems = [
        {name: 'Frequência', icon: 'calendar_month'},
        {name: 'Lançamento de Notas', icon: 'checklist'}
    ]

    const customersPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Nossos clientes</h3>
                <hr className="popover-line" />

                {customersItems.map(item => (
                    <a
                        key={`div-${item.name}-${item.icon}`}
                        className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted"
                        target='_blank'
                        href="#"
                    >
                        <span className="material-symbols-rounded">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
            </Popover.Body>
        </Popover>
    )

    // CONTENTS POPOVER
    const contentsItems = [
        {name: 'Frequência', icon: 'calendar_month'},
        {name: 'Lançamento de Notas', icon: 'checklist'}
    ]

    const contentsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Conteúdos</h3>
                <hr className="popover-line" />

                {contentsItems.map(item => (
                    <a
                        key={`div-${item.name}-${item.icon}`}
                        className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted"
                        target='_blank'
                        href="#"
                    >
                        <span className="material-symbols-rounded">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
            </Popover.Body>
        </Popover>
    )

    // ABOUT US POPOVER
    const aboutUsItems = [
        {name: 'Frequência', icon: 'calendar_month'},
        {name: 'Lançamento de Notas', icon: 'checklist'}
    ]

    const aboutUsPopover = (
        <Popover id="popover-basic">
            <Popover.Body className="p-5">
                <h3 className="fw-bold text-muted">Sobre nós</h3>
                <hr className="popover-line" />

                {aboutUsItems.map(item => (
                    <a
                        key={`div-${item.name}-${item.icon}`}
                        className="navbar-popover-link text-decoration-none d-flex align-items-center gap-3 fs-4 mb-4 text-muted"
                        target='_blank'
                        href="#"
                    >
                        <span className="material-symbols-rounded">{item.icon}</span>
                        {item.name}
                    </a>
                ))}
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