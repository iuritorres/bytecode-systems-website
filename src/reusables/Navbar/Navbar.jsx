import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="main-nav-bar bg-white w-100">
        <div className="container py-3 d-flex justify-content-between align-items-center">
            <a href="/" className="d-flex align-items-center gap-2 text-decoration-none">
                <img src="/logo-svg.svg" className="logo" alt="bytecode - coding the future logo" />
                <h2 className="fs-1">byte<span className="purple-span">code</span></h2>
            </a>

            <ul className="w-50 list-unstyled m-0 d-flex gap-5 align-items-center">
                <li className="pe-5">Produtos</li>
                <li className="pe-5">Clientes</li>
                <li className="pe-5">Conteúdos</li>
                <li className="pe-5">Bytecode</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar