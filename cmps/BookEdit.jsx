import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function BookEdit() {
    const [bookEdit, setBookEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()
    console.log('bookEdit', bookEdit)

    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    function loadBook() {
        bookService
            .get(bookId)
            .then(setBookEdit)
            .catch((err) => console.log('err:', err))
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            default:
                break
        }
        setBookEdit((prevBookEdit) => {
            if (field === 'price') {
                return {
                    ...prevBookEdit,
                    listPrice: { ...prevBookEdit.listPrice, amount: value },
                }
            }
            return { ...prevBookEdit, [field]: value }
        })
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookEdit).then(() => {
            navigate('/book')
            showSuccessMsg('Book Save!')
        })
        // .catch((err) => console.log('err:', err))
    }

    const { title, listPrice } = bookEdit
    return (
        <section className="book-edit">
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title:</label>
                <input value={title} onChange={handleChange} type="text" name="title" id="title" />

                <label htmlFor="amount">Price</label>
                <input
                    value={listPrice.amount || 0}
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="amount"
                />

                <button>Save</button>
            </form>
        </section>
    )
}
