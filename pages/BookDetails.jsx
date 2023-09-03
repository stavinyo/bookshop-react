import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookDetails({ bookId }) {
    const [book, setBook] = useState

    useEffect(() => {
        bookService.get(bookId).then(setBook)
    }, [])

    return (
        <section className="car-details">
            <h1>Title: {book.title}</h1>
            <h1>Subtitle: {book.subtitle}</h1>
            <p>Description: {book.description}</p>
            <button onClick={onBack}>Back</button>
        </section>
    )
}
