const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookEdit } from './cmps/BookEdit.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { HomePage } from './pages/HomePage.jsx'

export function App() {
    return (
        <Router>
            <section className="app">
                <AppHeader />

                <main className="container">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/book" element={<BookIndex />} />

                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/edit" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}
