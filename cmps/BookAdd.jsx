import { bookService } from '../services/book.service.js'
import { googleBookService } from '../services/google-book.service.js'
const { useState, useEffect } = React

export function BookAdd() {
    const [searchGoogleBook, setSearchGoogleBook] = useState('')
    const [googleBook, setGoogleBook] = useState()

    function handleChange(ev) {
        const value = ev.target.value

        if (ev.key === 'Enter') {
            if (value.trim() !== '') _onSearchGoogleAPI(value)
        }
        setSearchGoogleBook(value)
    }

    function _onSearchGoogleAPI(value) {
        console.log('the value to search in google API:', value)
        googleBookService.getGoogleBook(value).then(setGoogleBook)
        console.log(googleBook)
    }

    useEffect(() => {
        console.log(googleBook)
    }, [googleBook])

    return (
        <section>
            <label htmlFor="google-books">
                GoogleBooks:
                <input
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    type="text"
                    id="google-books"
                    name="google-books"
                    value={searchGoogleBook}
                />
            </label>
            {googleBook && googleBook.map((book) => <h1 key={book.title}>{book.title}</h1>)}
        </section>
    )
}
