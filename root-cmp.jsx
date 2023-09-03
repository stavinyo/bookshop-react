const { useState } = React

import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'

export function App() {
    const [page, setPage] = useState('Books')

    return (
        <section className="app">
            <header className="app-header">
                <h1>My App</h1>
                <nav className="app-nav">
                    <a onClick={() => setPage('Home')} href="#">
                        Home
                    </a>
                    <a onClick={() => setPage('Books')} href="#">
                        Books
                    </a>
                    <a onClick={() => setPage('About')} href="#">
                        About
                    </a>
                </nav>
            </header>
            <main className="container">
                {page === 'Home' && <HomePage />}
                {page === 'Books' && <BookIndex />}
                {page === 'About' && <AboutUs />}
            </main>
        </section>
    )
}
