const { useState, useEffect } = React

import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'
import { BookDetails } from './BookDetails.jsx'

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        bookService.query(filterBy).then(setBooks)
    }, [filterBy])

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
    }

    function onSetFilterBy(filterBy) {
        console.log('filterBy', filterBy)
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    }

    return (
        <section className="book-index">
            {!selectedBookId && (
                <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    <BookList books={books} onSelectBookId={onSelectBookId} />
                </React.Fragment>
            )}
            {selectedBookId && (
                <BookDetails onBack={() => onSelectBookId(null)} bookId={selectedBookId} />
            )}
        </section>
    )
}
