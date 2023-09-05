import { bookService } from '../services/book.service.js'
import { AddReview } from '../cmps/AddReview.jsx'
import { ReviewList } from '../cmps/ReviewList.jsx'

const { useState, useEffect } = React
const { useParams, Link } = ReactRouterDOM

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()

    useEffect(() => {
        bookService.get(params.bookId).then(setBook)
    }, [params.bookId])

    function getPages() {
        if (book.pageCount < 100) return 'Light Reading'
        else if (book.pageCount > 200 && book.pageCount < 500) return 'Descent Reading'
        else return 'Serious Reading'
    }

    function getPublishedDate() {
        if (new Date().getFullYear() - new Date(book.publishedDate).getFullYear() > 10) return 'Vintage'
        else return 'New'
    }

    function onAddReview(bookReview) {
        bookService.addReview(params.bookId, bookReview).then(setBook)
    }

    function onDeleteReview(reviewId) {
        bookService.deleteReview(params.bookId, reviewId).then(setBook)
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
            <AddReview onAddReview={onAddReview} />

            <ReviewList reviews={book.reviews} onDeleteReview={onDeleteReview} />
        </section>
    )
}
