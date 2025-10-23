import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.tsx'
import Home from './Home.tsx'
import Products from './Products.tsx'

function Layout() {
    return (
        <div>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/catalog" element={<Products/>} />
                </Routes>
            </main>
        </div>
    )
}
export default Layout;