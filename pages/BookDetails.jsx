import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookDetails({ onBack, bookId }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then((book) => {
            console.log('book', book)
            setBook(book)
        })
    }, [])

    function dynPages() {
        if (book.pageCount < 100) return 'Light Reading'
        else if (book.pageCount > 200 && book.pageCount < 500) return 'Descent Reading'
        else return 'Serious Reading'
    }

    function dynPublishedDate() {
        if (new Date().getFullYear() - new Date(book.publishedDate).getFullYear() > 20)
            return 'Vintage'
        else return 'New'
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Title: {book.title}</h1>
            <h3>Subtitle: {book.subtitle}</h3>
            <h3>
                Publishing: {book.publishedDate} ({dynPublishedDate()})
            </h3>
            <h5>
                PageCount: {book.pageCount} ({dynPages()})
            </h5>
            <p>Description: {book.description}</p>
            <button onClick={onBack}>Back</button>
        </section>
    )
}
