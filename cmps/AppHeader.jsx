const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header">
            <section className="header-container">
                <h1>Story-Verse-Books</h1>
                <nav className="app-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/book">Books</NavLink>
                </nav>
            </section>
        </header>
    )
}
