import { GoogleBookPreview } from './GoogleBookPreview.jsx'

export function GoogleBookList({ googleBook, onAddBook }) {
    // if (!googleBook || !Array.isArray(googleBook)) {
    //     return null
    // }
    return (
        <ul className="google-book-list">
            {googleBook.map((book) => (
                <li className="google-book-li" key={book.id}>
                    <GoogleBookPreview book={book} onAddBook={onAddBook} />
                </li>
            ))}
        </ul>
    )
}
