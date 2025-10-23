import { Routes, Route } from 'react-router-dom'
import Home from './Home.tsx'
import Products from './Products.tsx'
import './App.css'

function App() {
    const unusedVariable = 'test';
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/catalog" element={ <Products/> } />
        </Routes>
    )
}

export default App;
