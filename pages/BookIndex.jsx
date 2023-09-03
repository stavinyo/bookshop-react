const { useState, useEffect } = React

// import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        const temp = bookService.query().then(setBooks)
        console.log('temp', temp)
    }, [])

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    return (
        <section className="book-index">
            {!selectedBookId && (
                <React.Fragment>
                    <BookList books={books} onSelectBookId={onSelectBookId} />
                </React.Fragment>
            )}
            {selectedBookId && (
                <BookDetails onBack={() => onSelectBookId(null)} bookId={selectedBookId} />
            )}
        </section>
    )
}
