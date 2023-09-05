import { bookService } from '../services/book.service.js'

export function BookAdd() {
    return (
        <label htmlFor="google-books">
            GoogleBooks: <input type="text" id="google-books" name="google-books" />
        </label>
    )
}
