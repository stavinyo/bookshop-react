import { BookPreview } from './BookPreview.jsx'
const { Link } = ReactRouterDOM

export function BookList({ books, onRemoveBook }) {
    return (
        <ul className="book-list">
            {books.map((book) => (
                <li className="book-card" key={book.id}>
                    <BookPreview book={book} />
                    <section className="btns-book">
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                        <button>
                            <Link to={`/book/${book.id}`}>Details</Link>
                        </button>
                    </section>
                </li>
            ))}
        </ul>
    )
}
