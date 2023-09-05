import { bookService } from '../services/book.service.js'
import { googleBookService } from '../services/google-book.service.js'
import { utilService } from '../services/util.service.js'
import { GoogleBookList } from './GoogleBookList.jsx'
const { useState, useEffect } = React

export function GoogleBook({ onAddBookToStore }) {
    const [searchGoogleBook, setSearchGoogleBook] = useState('')
    const [googleBook, setGoogleBook] = useState([])

    useEffect(() => {}, [googleBook])

    function onAddBook(book) {
        const reFormatBook = {
            title: book.title,
            subtitle: book.subtitle,
            authors: book.authors,
            publishedDate: 'unknown',
            description: book.description,
            pageCount: book.pageCount,
            categories: book.categories,
            thumbnail: book.img,
            language: 'en',
            listPrice: {
                amount: 'unknown',
                currencyCode: 'EUR',
                isOnSale: false,
            },
        }

        bookService.save(reFormatBook).then(() => {
            onAddBookToStore(reFormatBook)
            showSuccessMsg('Book Save!')
        })
    }

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
                    placeholder="search in google..."
                />
            </label>
            {googleBook && <GoogleBookList googleBook={googleBook} onAddBook={onAddBook} />}
        </section>
    )
}
