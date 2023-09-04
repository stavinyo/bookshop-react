import { BookPreview } from './BookPreview.jsx'

export function BookList({ books, onSelectBookId, onRemoveBook }) {
    return (
        <ul className="book-list">
            {books.map((book) => (
                <li className="book-card" key={book.id}>
                    <BookPreview book={book} />
                    <section className="btns-book">
                        <button onClick={() => onRemoveBook(book.id)}>Remove Book</button>
                        <button onClick={() => onSelectBookId(book.id)}>Details</button>
                    </section>
                </li>
            ))}
        </ul>
    )
}
