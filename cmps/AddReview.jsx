import { bookService } from '../services/book.service.js'
import { ReviewList } from './ReviewList.jsx'

const { useState } = React
const { useNavigate, useParams } = ReactRouterDOM

export function AddReview({ reviews }) {
    const [bookReview, setBookReview] = useState(bookService.getEmptyReview())
    const { bookId } = useParams()
    const navigate = useNavigate()

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
        setBookReview((prevBookReview) => ({ ...prevBookReview, [field]: value }))
    }

    function onSubmitReview(ev) {
        console.log('ev', ev)
        ev.preventDefault()
        bookService
            .addReview(bookId, bookReview)
            .then(() => {
                navigate(`/book/${bookId}`)
            })
            .catch((error) => {
                console.error('Error adding review:', error)
            })
    }

    const { fullName, rate, date } = bookReview
    return (
        <div>
            <form onSubmit={onSubmitReview}>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    onChange={handleChange}
                    value={fullName}
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                />

                <label htmlFor="rate">Rating:</label>
                <input
                    onChange={handleChange}
                    value={rate}
                    type="number"
                    name="rate"
                    id="rate"
                    min="0"
                    max="5"
                    required
                />

                <label htmlFor="date">Read At:</label>
                <input onChange={handleChange} value={date} type="date" name="date" id="date" required />

                <button>Save review</button>
            </form>
            <ReviewList reviews={reviews} />
        </div>
    )
}
