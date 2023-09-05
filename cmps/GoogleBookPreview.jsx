export function GoogleBookPreview({ book, onAddBook }) {
    return (
        <div className="book-info">
            <h1>{book.title}</h1>
            <button onClick={() => onAddBook(book)}>+</button>
        </div>
    )
}
