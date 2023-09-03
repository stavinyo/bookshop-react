import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookDetails({ onBack, bookId }) {
    const [book, setBook] = useState(null)
    console.log('bookId', bookId)
    useEffect(() => {
        bookService.get(bookId).then((book) => {
            console.log('book', book)
            setBook(book)
        })
    }, [])

    if (!book) return <div>Loading...</div>
    return (
        <section className="car-details">
            <h1>Title: {book.title}</h1>
            <h1>Subtitle: {book.subtitle}</h1>
            <p>Description: {book.description}</p>
            <button onClick={onBack}>Back</button>
        </section>
    )
}
