import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App