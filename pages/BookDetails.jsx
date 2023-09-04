import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()

    useEffect(() => {
        // console.log('params.bookId', params.bookId)
        bookService.get(params.bookId).then(setBook)
    }, [])

    function getPages() {
        if (book.pageCount < 100) return 'Light Reading'
        else if (book.pageCount > 200 && book.pageCount < 500) return 'Descent Reading'
        else return 'Serious Reading'
    }

    function getPublishedDate() {
        if (new Date().getFullYear() - new Date(book.publishedDate).getFullYear() > 20) return 'Vintage'
        else return 'New'
    }

    if (!book) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Title: {book.title}</h1>
            <h3>Subtitle: {book.subtitle}</h3>
            <h3>Authors: {book.authors.join(', ')}</h3>
            <h3>
                Publishing: {book.publishedDate} ({getPublishedDate()})
            </h3>
            <h3>Categories: {book.categories.join(', ')}</h3>
            <h3>
                PageCount: {book.pageCount} ({getPages()})
            </h3>
            {book.listPrice.isOnSale && <h3>On Sale</h3>}
            <p>Description: {book.description}</p>
            <button>
                <Link to="/book">Back</Link>
            </button>
        </section>
    )
}
