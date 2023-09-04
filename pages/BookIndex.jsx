const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookFilter } from '../cmps/BookFilter.jsx'
import { BookList } from '../cmps/BookList.jsx'
import { bookService } from '../services/book.service.js'

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        bookService.query(filterBy).then(setBooks)
    }, [filterBy])

    function onSetFilterBy(filterBy) {
        console.log('filterBy', filterBy)
        setFilterBy((prevFilter) => ({ ...prevFilter, ...filterBy }))
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId))
        })
    }

    return (
        <section className="book-index">
            <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <button class="btn-add-book">
                <Link to="/book/edit">add Book</Link>
            </button>
            <BookList books={books} onRemoveBook={onRemoveBook} />
        </section>
    )
}
